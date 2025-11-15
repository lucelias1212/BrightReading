// functions/index.js
require('dotenv').config();
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const cors = require('cors');

admin.initializeApp();
const db = admin.firestore();

// CORS configuration
const corsOptions = {
  origin: true,
  credentials: true
};

// ============================================
// CREATE CHECKOUT SESSION
// ============================================
exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  cors(corsOptions)(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const { userId, email, priceId, planType } = req.body;

      if (!userId || !email || !priceId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Get or create Stripe customer
      let customer;
      const userDoc = await db.collection('users').doc(userId).get();
      const userData = userDoc.data();

      if (userData?.stripeCustomerId) {
        customer = await stripe.customers.retrieve(userData.stripeCustomerId);
      } else {
        customer = await stripe.customers.create({
          email: email,
          metadata: {
            firebaseUID: userId,
            username: userData?.username || ''
          }
        });

        await db.collection('users').doc(userId).update({
          stripeCustomerId: customer.id
        });
      }

      // Create checkout session
      const session = await stripe.checkout.sessions.create({
        customer: customer.id,
        payment_method_types: ['card'],
        line_items: [{
          price: priceId,
          quantity: 1
        }],
        mode: 'subscription',
        success_url: `${req.headers.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/payment-cancelled`,
        metadata: {
          userId: userId,
          planType: planType
        },
        subscription_data: {
          metadata: {
            userId: userId,
            planType: planType
          }
        }
      });

      return res.status(200).json({ sessionId: session.id, url: session.url });

    } catch (error) {
      console.error('Checkout session error:', error);
      return res.status(500).json({ error: error.message });
    }
  });
});

// CREATE PAYMENT INTENT (NEW - ADD HERE)
// ============================================
exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
  cors(corsOptions)(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const { userId, email, priceId, planType } = req.body;

      if (!userId || !email || !priceId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Determine amount based on plan type
      const amount = planType === 'monthly' ? 1099 : 10788; // in cents ($10.99 or $107.88)

      // Create Payment Intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          userId: userId,
          email: email,
          planType: planType,
          priceId: priceId,
        },
        description: `BrightReading ${planType === 'monthly' ? 'Monthly' : 'Annual'} Subscription`,
        receipt_email: email,
      });

      return res.status(200).json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      });

    } catch (error) {
      console.error('Payment Intent creation error:', error);
      return res.status(500).json({ error: error.message });
    }
  });
});

// ============================================
// STRIPE WEBHOOK
// ============================================
exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

try {
  event = stripe.webhooks.constructEvent(
    req.rawBody,
    sig,
    webhookSecret
  );
} catch (err) {
  console.error('Webhook signature verification failed:', err.message);
  return res.status(400).send(`Webhook Error: ${err.message}`);
}

    console.log('Webhook received:', event.type);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        await handleCheckoutComplete(session);
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        await handleSubscriptionUpdate(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        await handleSubscriptionDeleted(subscription);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        await handlePaymentSuccess(invoice);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        await handlePaymentFailed(invoice);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
});

// Helper: Handle checkout completion
async function handleCheckoutComplete(session) {
  const userId = session.metadata?.userId;
  if (!userId) {
    console.error('No userId in session metadata');
    return;
  }

  try {
    const subscription = await stripe.subscriptions.retrieve(session.subscription);
    
    await db.collection('users').doc(userId).update({
      subscription: 'paid',
      subscriptionStartDate: new Date(subscription.current_period_start * 1000).toISOString(),
      subscriptionEndDate: new Date(subscription.current_period_end * 1000).toISOString(),
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: session.customer,
      subscriptionStatus: subscription.status,
      planType: session.metadata?.planType || 'unknown',
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`Subscription activated for user: ${userId}`);
  } catch (error) {
    console.error('Error handling checkout complete:', error);
  }
}

// Helper: Handle subscription updates
async function handleSubscriptionUpdate(subscription) {
  const userId = subscription.metadata?.userId;
  if (!userId) {
    console.error('No userId in subscription metadata');
    return;
  }

  try {
    const updateData = {
      subscriptionStatus: subscription.status,
      subscriptionStartDate: new Date(subscription.current_period_start * 1000).toISOString(),
      subscriptionEndDate: new Date(subscription.current_period_end * 1000).toISOString(),
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    };

    // If subscription is active, ensure they have paid status
    if (subscription.status === 'active') {
      updateData.subscription = 'paid';
    }

    await db.collection('users').doc(userId).update(updateData);

    console.log(`Subscription updated for user: ${userId}`);
  } catch (error) {
    console.error('Error handling subscription update:', error);
  }
}

// Helper: Handle subscription deletion/cancellation
async function handleSubscriptionDeleted(subscription) {
  const userId = subscription.metadata?.userId;
  if (!userId) {
    console.error('No userId in subscription metadata');
    return;
  }

  try {
    await db.collection('users').doc(userId).update({
      subscription: 'free',
      subscriptionStatus: 'canceled',
      subscriptionEndDate: new Date(subscription.current_period_end * 1000).toISOString(),
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`Subscription canceled for user: ${userId}`);
  } catch (error) {
    console.error('Error handling subscription deletion:', error);
  }
}

// Helper: Handle successful payment
async function handlePaymentSuccess(invoice) {
  const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
  const userId = subscription.metadata?.userId;
  
  if (!userId) {
    console.error('No userId in subscription metadata');
    return;
  }

  try {
    await db.collection('users').doc(userId).update({
      subscription: 'paid',
      subscriptionStatus: 'active',
      subscriptionEndDate: new Date(subscription.current_period_end * 1000).toISOString(),
      lastPaymentDate: new Date(invoice.created * 1000).toISOString(),
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`Payment succeeded for user: ${userId}`);
  } catch (error) {
    console.error('Error handling payment success:', error);
  }
}

// Helper: Handle failed payment
async function handlePaymentFailed(invoice) {
  const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
  const userId = subscription.metadata?.userId;
  
  if (!userId) {
    console.error('No userId in subscription metadata');
    return;
  }

  try {
    await db.collection('users').doc(userId).update({
      subscriptionStatus: 'past_due',
      lastPaymentAttempt: new Date(invoice.created * 1000).toISOString(),
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`Payment failed for user: ${userId}`);
  } catch (error) {
    console.error('Error handling payment failure:', error);
  }
}

// ============================================
// CREATE CUSTOMER PORTAL SESSION
// ============================================
exports.createCustomerPortal = functions.https.onRequest(async (req, res) => {
  cors(corsOptions)(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const { userId } = req.body;

      if (!userId) {
        return res.status(400).json({ error: 'Missing userId' });
      }

      const userDoc = await db.collection('users').doc(userId).get();
      const userData = userDoc.data();

      if (!userData?.stripeCustomerId) {
        return res.status(400).json({ error: 'No Stripe customer found' });
      }

      const session = await stripe.billingPortal.sessions.create({
        customer: userData.stripeCustomerId,
        return_url: `${req.headers.origin}/profile`
      });

      return res.status(200).json({ url: session.url });

    } catch (error) {
      console.error('Customer portal error:', error);
      return res.status(500).json({ error: error.message });
    }
  });
});
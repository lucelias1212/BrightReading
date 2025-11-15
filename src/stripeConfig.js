// src/stripeConfig.js
import { loadStripe } from '@stripe/stripe-js';

// Your Stripe publishable key (safe to expose publicly)
const stripePromise = loadStripe('pk_live_51STW1JJz6mdvQ2vp3xyPBPyNDIQqGQj3VFDv0Wtc9npIC8C5sPRWiWwxE8rrymsEN4PU4iKfGb9SACPMhR0sSQVN00BoVcEgsX');

export default stripePromise;
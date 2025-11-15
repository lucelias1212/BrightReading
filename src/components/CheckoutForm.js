import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Check, X, Lock, Shield, CreditCard, Sparkles, AlertCircle } from 'lucide-react';

const CheckoutForm = ({ planName, planPrice, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      setErrorMessage(error.message);
      setIsProcessing(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setIsProcessing(false);
      onSuccess(paymentIntent);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border-4 border-purple-200 overflow-hidden max-w-4xl mx-auto">
      {/* Premium Header */}
      <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white p-10 overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-3 border border-white/30">
                <Sparkles size={16} />
                SECURE CHECKOUT
              </div>
              <h2 className="text-4xl font-black mb-2">Complete Your Purchase</h2>
              <p className="text-white/90 text-lg font-semibold">Join thousands of parents teaching their kids to read</p>
            </div>
            <button
              onClick={onCancel}
              disabled={isProcessing}
              className="text-white/80 hover:text-white transition p-2 hover:bg-white/10 rounded-full disabled:opacity-50"
            >
              <X size={28} />
            </button>
          </div>

          {/* Plan Summary */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-semibold mb-1">Your Plan</p>
                <p className="text-2xl font-black">{planName} Subscription</p>
              </div>
              <div className="text-right">
                <p className="text-white/80 text-sm font-semibold mb-1">Total Today</p>
                <p className="text-4xl font-black">{planPrice}</p>
{planName === 'Annual' && (
  <p className="text-white/70 text-sm font-semibold mt-1">Billed annually</p>
)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-10">
        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-50 border-3 border-red-300 rounded-2xl p-5 mb-8 animate-shake">
            <div className="flex items-start gap-4">
              <div className="bg-red-500 rounded-full p-2 flex-shrink-0">
                <AlertCircle className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-red-900 text-lg mb-1">Payment Error</h4>
                <p className="text-red-800 font-semibold">{errorMessage}</p>
              </div>
              <button
                type="button"
                onClick={() => setErrorMessage('')}
                className="text-red-400 hover:text-red-600 transition"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* What's Included Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border-2 border-blue-200">
          <h3 className="font-black text-gray-900 text-xl mb-4 flex items-center gap-2">
            <Sparkles className="text-purple-600" size={24} />
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              '1040 complete lessons',
              'All 4 learning phases',
              'Progress tracking',
              'Achievement system',
              'Community access',
              'Cancel anytime'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-1 flex-shrink-0">
                  <Check className="text-white" size={16} />
                </div>
                <span className="font-semibold text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Element Container */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="text-purple-600" size={24} />
            <h3 className="font-black text-gray-900 text-xl">Payment Information</h3>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
            <PaymentElement 
              options={{
                layout: {
                  type: 'tabs',
                  defaultCollapsed: false,
                }
              }}
            />
          </div>
        </div>

        {/* Security Badges */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                <Lock className="text-white" size={20} />
              </div>
              <div>
                <p className="font-black text-green-900 text-sm">256-bit SSL</p>
                <p className="text-green-700 text-xs font-semibold">Encrypted</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                <Shield className="text-white" size={20} />
              </div>
              <div>
                <p className="font-black text-blue-900 text-sm">PCI Compliant</p>
                <p className="text-blue-700 text-xs font-semibold">Bank Level</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
            <div className="flex items-center gap-3">
              <div className="bg-purple-500 rounded-full p-2 flex-shrink-0">
                <Check className="text-white" size={20} />
              </div>
              <div>
                <p className="font-black text-purple-900 text-sm">Stripe Secured</p>
                <p className="text-purple-700 text-xs font-semibold">Trusted by millions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-5 mb-8 border-2 border-yellow-300">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🛡️</div>
            <div>
              <h4 className="font-black text-gray-900 text-lg mb-1">10-Day Money-Back Guarantee</h4>
              <p className="text-gray-700 font-semibold text-sm">Not satisfied? Get a full refund within 10 days, no questions asked.</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={isProcessing}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-black py-5 rounded-2xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black py-5 rounded-2xl transition transform hover:scale-105 shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
          >
            {isProcessing ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing Payment...
              </>
            ) : (
              <>
                <Lock size={24} />
                Complete Secure Purchase
                <Check size={24} />
              </>
            )}
          </button>
        </div>

        {/* Fine Print */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 font-semibold">
            By completing this purchase, you agree to our Terms of Service and Privacy Policy.
            <br />
            Your subscription will renew automatically. Cancel anytime from your account settings.
          </p>
        </div>
      </form>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CheckoutForm;
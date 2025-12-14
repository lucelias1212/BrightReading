import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, ArrowLeft, Zap, HelpCircle, Mail } from 'lucide-react';

const PaymentCancelled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Cancelled Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-4 border-gray-300">
          {/* Icon */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-gray-400 to-gray-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <XCircle className="text-white" size={64} />
            </div>
            <h1 className="text-5xl font-black text-gray-900 mb-4">
              Payment Cancelled
            </h1>
            <p className="text-xl text-gray-600 font-semibold">
              No worries! Your payment was not processed.
            </p>
          </div>

          {/* Info Section */}
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-blue-900 mb-3 text-lg">What happened?</h3>
            <p className="text-blue-800 mb-2">
              You cancelled the checkout process or closed the payment window. No charges were made to your account.
            </p>
            <p className="text-blue-800">
              You can try again anytime you're ready!
            </p>
          </div>

          {/* Benefits Reminder */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border-2 border-purple-200">
            <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center justify-center gap-2">
              <Zap className="text-purple-600" size={24} />
              Remember What You're Missing:
            </h3>
            <ul className="space-y-3 text-left text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <span><strong>1040 complete activities</strong> covering ages 1-5</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <span><strong>Research-backed activity book</strong> proven to work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <span><strong>Just 10 minutes per day</strong> to teach reading</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <span><strong>Cancel anytime</strong> with 10-day money-back guarantee</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => navigate('/upgrade')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-5 rounded-xl font-black text-xl hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Zap size={28} />
              Try Again - View Plans
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <ArrowLeft size={24} />
              Back to Dashboard
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
              <HelpCircle size={20} />
              <p className="font-semibold">Had an issue during checkout?</p>
            </div>
            <p className="text-sm text-gray-500">
              We're here to help! Email us at{' '}
              <a 
                href="mailto:support@brightreading.com" 
                className="text-purple-600 font-semibold underline inline-flex items-center gap-1"
              >
                <Mail size={16} />
                support@brightreading.com
              </a>
            </p>
          </div>
        </div>

        {/* Common Questions */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Common Questions:</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-900 mb-1">Will I be charged?</p>
              <p>No, your payment was cancelled and no charges were made.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Can I still use my free activities?</p>
              <p>Yes! Your 10 free trial activities are still available.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-1">What payment methods do you accept?</p>
              <p>We accept all major credit cards, debit cards, and many digital wallets through Stripe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;
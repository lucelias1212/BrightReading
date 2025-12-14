import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUser } from '../UserContext';
import { CheckCircle, Sparkles, BookOpen, Trophy, ArrowRight } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { userData, user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(5);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Wait a moment for webhook to process
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    // Auto-redirect countdown
    if (!isLoading && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (countdown === 0) {
      navigate('/dashboard');
    }
  }, [countdown, isLoading, navigate]);

  const handleContinue = () => {
    navigate('/dashboard');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing Your Payment...</h2>
          <p className="text-gray-600">Please wait while we activate your subscription</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-4 border-green-300">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-green-400 to-green-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
              <CheckCircle className="text-white" size={64} />
            </div>
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-5xl font-black text-gray-900 mb-4">
              Welcome to Premium!
            </h1>
            <p className="text-xl text-gray-600 font-semibold">
              Your payment was successful and your subscription is now active!
            </p>
          </div>

          {/* What's Unlocked */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border-2 border-purple-200">
            <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center justify-center gap-2">
              <Sparkles className="text-purple-600" size={28} />
              You Now Have Access To:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">All 1040 Activities</p>
                  <p className="text-sm text-gray-600">Complete activity book unlocked</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">All 4 Phases</p>
                  <p className="text-sm text-gray-600">Ages 1-5 covered</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Progress Tracking</p>
                  <p className="text-sm text-gray-600">Monitor achievements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Premium Features</p>
                  <p className="text-sm text-gray-600">All tools unlocked</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
              <BookOpen size={24} />
              Quick Start Tips:
            </h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>Head to your dashboard to see all available activities </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>Start with Phase 1 if your child is 1-2 years old</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span>Complete one activity per day for best results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">4.</span>
                <span>Track progress and earn achievement badges!</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-5 rounded-xl font-black text-xl hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Trophy size={28} />
              Start Learning Now
              <ArrowRight size={24} />
            </button>

            <p className="text-gray-500 text-sm">
              Redirecting automatically in {countdown} second{countdown !== 1 ? 's' : ''}...
            </p>
          </div>

          {/* Receipt Info */}
          {sessionId && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                📧 A receipt has been sent to your email address.<br />
                Session ID: {sessionId.slice(0, 20)}...
              </p>
            </div>
          )}
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Questions? Email us at <a href="mailto:support@brightreading.com" className="text-purple-600 font-semibold underline">support@brightreading.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
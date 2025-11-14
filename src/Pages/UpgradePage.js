import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import { Check, X, Zap, Star, BookOpen, Award, Clock, Users, Shield, Sparkles, ArrowRight, Home, Mail } from 'lucide-react';
import { sendEmailVerification } from 'firebase/auth';

const UpgradePage = () => {
  const navigate = useNavigate();
  const { userData, user } = useUser();
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('annual');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationError, setVerificationError] = useState('');
  const [pendingPlanType, setPendingPlanType] = useState(null);

  useEffect(() => {
    // Redirect if already premium
    if (userData?.subscription === 'paid') {
      navigate('/dashboard');
      return;
    }
    
    const timer = setTimeout(() => setIsPageLoading(false), 50);
    return () => clearTimeout(timer);
  }, [userData, navigate]);

  const handleNavigate = (path) => {
    setIsPageLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 300);
  };

  const handleUpgrade = async (planType) => {
    if (!user) return;
    
    // Check if email is verified
    if (!user.emailVerified) {
      setPendingPlanType(planType);
      setShowVerificationModal(true);
      return;
    }
    
    setIsProcessing(true);
    
    // TODO: Integrate with your payment processor (Stripe, etc.)
    // This is where you'll:
    // 1. Create a checkout session
    // 2. Redirect to payment page
    // 3. Handle payment confirmation
    
    console.log('Upgrading to:', planType);
    
    // Placeholder - replace with actual payment logic
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment integration coming soon!');
    }, 1500);
  };

  const handleSendVerification = async () => {
    if (!user) return;
    
    try {
      setVerificationError('');
      await sendEmailVerification(user);
      setVerificationSent(true);
    } catch (error) {
      console.error('Verification email error:', error);
      setVerificationError('Failed to send verification email. Please try again.');
    }
  };

  const handleVerificationClose = () => {
    setShowVerificationModal(false);
    setVerificationSent(false);
    setVerificationError('');
    setPendingPlanType(null);
  };

  const plans = [
{
  id: 'monthly',
  name: 'Monthly',
  price: '$11.99',
  period: '/month',
  savings: null,
  features: [
    'All 1040 lessons unlocked',
    'All 4 phases (ages 1-5)',
    'Progress tracking',
    'Achievement badges',
    'Cancel anytime'
  ],
  popular: false,
  color: 'from-blue-500 to-cyan-500'
},
{
  id: 'annual',
  name: 'Annual',
  price: '$9.99',
  period: '/month',
  savings: 'Save 17%',
  totalPrice: '$119.88/year',
  features: [
    'All 1040 lessons unlocked',
    'All 4 phases (ages 1-5)',
    'Progress tracking',
    'Achievement badges',
    'Cancel anytime'
  ],
  popular: true,
  color: 'from-purple-500 to-pink-500'
}
  ];

  const benefits = [
    { icon: BookOpen, title: '1040 Total Lessons', desc: 'Complete curriculum for ages 1-5' },
    { icon: Award, title: 'All 4 Phases', desc: '260 lessons per developmental phase' },
    { icon: Clock, title: 'Just 10 Min/Day', desc: 'Short, effective learning sessions' },
    { icon: Users, title: 'Multiple Children', desc: 'Track progress for all your kids' },
    { icon: Shield, title: 'Science-Backed', desc: 'Research-proven reading methods' },
    { icon: Sparkles, title: 'Regular Updates', desc: 'New lessons added continuously' }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg p-4 sticky top-0 z-50 border-b-4 border-purple-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => handleNavigate('/')}
            className="flex items-center gap-3 group"
          >
            <img src="/assets/brlogo2.png" alt="BrightReading Logo" className="h-12 w-auto object-contain group-hover:scale-110 transition transform" />
            <h1 className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BrightReading Premium
            </h1>
          </button>
          <button
            onClick={() => handleNavigate('/dashboard')}
            className="hover:opacity-80 transition transform hover:scale-105"
          >
            <img src="/assets/HomeButton.png" alt="Home" className="h-10 w-auto object-contain" />
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full font-black text-sm shadow-lg mb-6 animate-bounce" style={{ animationDuration: '2s' }}>
            <Zap size={20} />
            LIMITED TIME OFFER
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Unlock Your Child's
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
              Reading Superpowers
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 font-bold mb-8 max-w-3xl mx-auto">
            Join thousands of parents who are giving their children a head start with our complete, research-backed reading program.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Check, text: '10-Day Money Back Guarantee' },
              { icon: Check, text: 'Cancel Anytime' },
              { icon: Check, text: 'Instant Access' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-green-300 shadow-md">
                <span className="font-black text-green-700 flex items-center gap-2">
                  <item.icon size={20} />
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border-4 border-purple-200">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-12">
            Everything You Need to Teach Your Child to Read
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-lg transition">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700 font-semibold">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-center text-gray-600 font-semibold mb-12">
            Both plans include full access to all features
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl shadow-2xl overflow-hidden border-4 transition transform hover:scale-105 flex flex-col ${
                  plan.popular ? 'border-purple-400 ring-4 ring-purple-300' : 'border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-bl-2xl font-black text-sm flex items-center gap-1">
                    <Star size={16} />
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className={`bg-gradient-to-r ${plan.color} text-white p-8 text-center`}>
                  <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
                  {plan.savings && (
                    <div className="bg-white/20 backdrop-blur-sm inline-block px-4 py-1 rounded-full text-sm font-bold mb-4">
                      {plan.savings}
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-xl font-bold opacity-90">{plan.period}</span>
                  </div>
                  {plan.totalPrice && (
                    <p className="text-white/80 font-semibold mt-2">{plan.totalPrice}</p>
                  )}
                </div>

              {/* Plan Features */}
                <div className="bg-white p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                          <Check className="text-green-600" size={20} />
                        </div>
                        <span className="text-gray-700 font-semibold">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={isProcessing}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-5 rounded-2xl font-black text-xl hover:shadow-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Zap size={24} />
                        Get Started Now
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

{/* Testimonials Section - Coming Soon */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12 border-2 border-blue-200">
          <h2 className="text-4xl font-black text-center text-gray-900 mb-6">
            Loved by Parents Everywhere
          </h2>
          <p className="text-center text-gray-600 font-semibold text-lg">
            Testimonials coming soon!
          </p>
        </div>

{/* FAQ Link */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border-4 border-pink-200 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-xl text-gray-700 font-semibold mb-6">
            Check out our frequently asked questions
          </p>
          <button
            onClick={() => handleNavigate('/faq')}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-black text-lg hover:shadow-xl transition transform hover:scale-105 inline-flex items-center gap-2"
          >
            View FAQ
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-3xl shadow-2xl p-12 text-center border-4 border-white">
          <div className="text-7xl mb-6">🎉</div>
          <h2 className="text-5xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-2xl font-bold mb-8 opacity-95">
            Join thousands of parents teaching their kids to read today
          </p>
          <button
            onClick={() => handleUpgrade('annual')}
            disabled={isProcessing}
            className="bg-white text-purple-600 hover:bg-purple-50 px-16 py-6 rounded-full font-black shadow-2xl transition text-2xl inline-flex items-center gap-3 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                Start Learning Today
                <ArrowRight size={32} />
              </>
            )}
          </button>
          <p className="text-white/80 text-sm font-semibold mt-6">
            💳 Secure payment • 🔒 Cancel anytime • ✅ 10-day money-back guarantee
          </p>
        </div>

{/* Trust Badges */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="font-bold text-gray-600">🔒 Secure Checkout</div>
            <div className="font-bold text-gray-600">💳 All Major Cards Accepted</div>
            <div className="font-bold text-gray-600">✅ SSL Encrypted</div>
          </div>
        </div>
      </div>

      {/* Email Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center animate-scale-in">
            <div className="mb-6">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="text-white" size={40} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                {verificationSent ? 'Check Your Email!' : 'Verify Your Email'}
              </h2>
              <p className="text-gray-600 font-semibold">
                {verificationSent 
                  ? `We've sent a verification link to ${user?.email}`
                  : 'Before upgrading, please verify your email address to secure your account.'
                }
              </p>
            </div>

            {verificationError && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-center gap-3">
                <div className="bg-red-100 rounded-full p-1 flex-shrink-0">
                  <X className="text-red-600" size={20} />
                </div>
                <p className="text-red-700 font-semibold text-sm text-left">{verificationError}</p>
              </div>
            )}

            {verificationSent ? (
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Next Steps:</h3>
                  <ol className="space-y-2 text-left text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>Check your inbox for our verification email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>Click the verification link in the email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>Come back here to complete your upgrade</span>
                    </li>
                  </ol>
                </div>

                <div className="text-xs text-gray-500">
                  <p className="mb-2">Didn't receive the email? Check your spam folder.</p>
                  <button
                    onClick={handleSendVerification}
                    className="text-purple-600 hover:text-purple-700 font-bold underline"
                  >
                    Resend verification email
                  </button>
                </div>

                <button
                  onClick={handleVerificationClose}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-black text-lg hover:shadow-xl transition"
                >
                  Got It!
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-4 text-left">
                  <p className="text-blue-900 text-sm font-semibold">
                    📧 We'll send a verification link to: <br />
                    <span className="font-black">{user?.email}</span>
                  </p>
                </div>

                <button
                  onClick={handleSendVerification}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-black text-lg hover:shadow-xl transition flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send Verification Email
                </button>

                <button
                  onClick={handleVerificationClose}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition"
                >
                  Maybe Later
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default UpgradePage;
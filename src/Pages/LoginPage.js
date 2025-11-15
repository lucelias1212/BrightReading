import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import { BookOpen, Mail, Lock, AlertCircle, Eye, EyeOff, Sparkles, Heart, Star } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, signup } = useUser();
  const [isSignUp, setIsSignUp] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  // Generate random floating elements
  useEffect(() => {
    const elements = [];
    const icons = ['/assets/whfe.png', '/assets/bfe.png', '/assets/sfe.png', '/assets/rfe.png', '/assets/mfe.png', '/assets/hfe.png', '/assets/mgfe.png', '/assets/pfe.png'];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        left: `${Math.random() * 100}%`,
        animationDuration: `${15 + Math.random() * 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        size: `${30 + Math.random() * 20}px`
      });
    }
    setFloatingElements(elements);
  }, []);

  // Load remembered email on component mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = isSignUp ? await signup(email, password, username) : await login(email, password);

    if (result.success) {
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      navigate('/dashboard');
    } else {
      console.error('Full error details:', result);
      setError(result.error || 'Unknown error occurred');
    }
    setLoading(false);
  };

  const handleModeSwitch = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsSignUp(!isSignUp);
      setError('');
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 relative overflow-hidden transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated Background Elements */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float opacity-20 pointer-events-none"
          style={{
            left: el.left,
            width: el.size,
            height: el.size,
            animationDuration: el.animationDuration,
            animationDelay: el.animationDelay,
            top: '-50px'
          }}
        >
          <img src={el.icon} alt="" className="w-full h-full object-contain" />
        </div>
      ))}

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Welcome Message */}
          <div className="text-white space-y-6 hidden md:block">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30">
              <Sparkles size={24} />
              <span className="font-bold">Start Your Reading Journey</span>
            </div>
            
            <h1 className="text-6xl font-black leading-tight">
              {isSignUp ? (
                <>
                  Ready to Make
                  <br />
                  <span className="text-yellow-200">Learning Magic?</span>
                </>
              ) : (
                <>
                  Welcome Back,
                  <br />
                  <span className="text-yellow-200">Super Parent!</span>
                </>
              )}
            </h1>
            
            <p className="text-xl text-white/90 font-semibold">
              {isSignUp 
                ? 'Join thousands of parents giving their kids a head start with science-backed reading lessons.'
                : 'Your little reader is waiting to continue their adventure with you!'
              }
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
                <Star size={16} className="text-yellow-200" />
                <span className="text-sm font-bold">1040 Lessons</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
                <Heart size={16} className="text-pink-200" />
                <span className="text-sm font-bold">Parent-Friendly</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 flex items-center gap-2">
                <BookOpen size={16} className="text-blue-200" />
                <span className="text-sm font-bold">Ages 1-5</span>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form Card */}
          <div className="relative">
            {/* Decorative Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full font-black text-sm shadow-lg z-20 border-4 border-white">
              {isSignUp ? '🎉 GET STARTED FREE' : '👋 WELCOME BACK'}
            </div>

            <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, #9333ea 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <div className="relative z-10">
                {/* Logo & Title */}
                <div className="text-center mb-8">
                  <div className="mx-auto mb-4">
                    <img src="/assets/brlogo.png" alt="BrightReading Logo" className="h-20 w-auto object-contain mx-auto" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">
                    {isSignUp ? 'Join BrightReading' : 'Welcome Back'}
                  </h2>
                  <p className="text-gray-600 font-semibold">
{isSignUp ? "Your child's reading adventure starts here" : 'Continue your learning journey'}                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 mb-6 flex items-start gap-3 animate-shake">
                    <div className="bg-red-100 rounded-full p-1 flex-shrink-0">
                      <AlertCircle className="text-red-600" size={20} />
                    </div>
                    <p className="text-red-700 font-semibold text-sm">{error}</p>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2 flex items-center gap-2">
                      <Mail size={16} className="text-purple-500" />
                      Email Address
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-4 border-3 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition text-lg font-semibold group-hover:border-purple-400"
                        placeholder="your@email.com"
                        required
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl opacity-0 group-focus-within:opacity-100 transition">
                        ✉️
                      </div>
                    </div>
                  </div>

                  {/* Username Field - Only show on signup */}
                  {isSignUp && (
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2 flex items-center gap-2">
                        <BookOpen size={16} className="text-purple-500" />
                        Username
                      </label>
                      <div className="relative group">
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full px-4 py-4 border-3 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition text-lg font-semibold group-hover:border-purple-400"
                          placeholder="coolparent123"
                          required
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl opacity-0 group-focus-within:opacity-100 transition">
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2 flex items-center gap-2">
                      <Lock size={16} className="text-purple-500" />
                      Password
                    </label>
                    <div className="relative group">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-4 border-3 border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition text-lg font-semibold group-hover:border-purple-400"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition p-1 rounded-lg hover:bg-purple-50"
                      >
                        {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center gap-3 bg-purple-50 rounded-xl p-3 border-2 border-purple-100">
                    <input
                      type="checkbox"
                      id={isSignUp ? "rememberMeSignup" : "rememberMe"}
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-5 h-5 text-purple-600 border-purple-300 rounded focus:ring-purple-500 focus:ring-2 cursor-pointer"
                    />
                    <label htmlFor={isSignUp ? "rememberMeSignup" : "rememberMe"} className="text-sm font-bold text-gray-700 cursor-pointer select-none flex items-center gap-2">
                      Remember me
                      <span className="text-lg">🧠</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 border-4 border-white shadow-lg hover:border-purple-200"
                  >
                    {loading ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Please wait...
                      </>
                    ) : (
                      <>
                        {isSignUp ? '🚀 Create My Account' : '✨ Sign Me In'}
                      </>
                    )}
                  </button>
                </form>

                {/* Toggle Sign In/Up */}
                <div className="mt-8 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500 font-bold">OR</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleModeSwitch}
                    className="mt-6 text-purple-600 hover:text-purple-700 font-black text-lg hover:underline transition transform hover:scale-105 active:scale-95"
                  >
                    {isSignUp ? '👋 Already have an account? Sign in!' : "🎉 Don't have an account? Sign up!"}
                  </button>
                </div>

                {/* Back to Home */}
                <div className="mt-8 pt-6 border-t-2 border-gray-100 text-center">
                  <button
                    onClick={() => {
                      setIsPageLoading(true);
                      setTimeout(() => {
                        navigate('/');
                        window.scrollTo(0, 0);
                      }, 300);
                    }}
                    className="text-gray-600 hover:text-gray-900 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all transform hover:scale-105 active:scale-95"
                  >
                    ← Back to home
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Welcome Message */}
          <div className="text-white text-center md:hidden space-y-4 order-first">
            <h1 className="text-4xl font-black">
              {isSignUp ? 'Start Learning!' : 'Welcome Back!'}
            </h1>
            <p className="text-white/90 font-semibold">
              {isSignUp 
                ? 'Join thousands of parents teaching their kids to read'
                : 'Continue your reading journey'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
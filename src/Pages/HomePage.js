import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Play, Heart, Sparkles, BookMarked, Mail, Star, Zap, Target, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [isVisible, setIsVisible] = useState({});

  const handleGetStarted = () => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const handleNavigate = (path) => {
    setIsPageLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 300);
  };

  // Generate floating elements
  useEffect(() => {
    const elements = [];
    const icons = ['/assets/whfe.png', '/assets/bfe.png', '/assets/sfe.png', '/assets/rfe.png', '/assets/mfe.png', '/assets/hfe.png', '/assets/mgfe.png', '/assets/pfe.png'];
    for (let i = 0; i < 20; i++) {
      elements.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        left: `${Math.random() * 100}%`,
        animationDuration: `${20 + Math.random() * 15}s`,
        animationDelay: `${Math.random() * 8}s`,
        size: `${30 + Math.random() * 20}px`
      });
    }
    setFloatingElements(elements);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex flex-col relative overflow-hidden transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Floating Background Elements */}
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
            top: '-100px'
          }}
        >
          <img src={el.icon} alt="" className="w-full h-full object-contain" />
        </div>
      ))}

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl"></div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg p-4 sticky top-0 z-50 border-b-4 border-purple-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => handleNavigate('/')}
            className="flex items-center gap-3 group"
          >
            <img src="/assets/brlogo2.png" alt="BrightReading Logo" className="h-12 w-auto object-contain group-hover:scale-110 transition transform" />
            <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BrightReading
            </h1>
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavigate('/about')}
              className="text-purple-600 hover:bg-purple-100 px-6 py-3 rounded-xl transition font-bold text-lg hidden md:block"
            >
              About
            </button>
            <button
              onClick={() => {
                setIsPageLoading(true);
                setTimeout(() => handleGetStarted(), 300);
              }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-full hover:shadow-2xl transition font-black text-lg transform hover:scale-105 border-4 border-white shadow-lg"
            >
              Let's Start! 🚀
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Hero Content */}
          <div className="text-center mb-20">
            <div 
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-3 border-purple-300 shadow-lg mb-8 animate-bounce"
              style={{ animationDuration: '2s' }}
            >
              <Sparkles size={24} className="text-purple-600" />
              <span className="font-black text-purple-700 text-lg">For Parents & Kids Ages 1-5</span>
              <Star size={24} className="text-yellow-500" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">Teacher</span>
              <br />
              You Want for Your Child
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-700 font-bold mb-12 max-w-3xl mx-auto leading-relaxed">
  <span className="text-purple-600">Research-backed activities</span><br />
  that make learning feel like playtime.
</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  setIsPageLoading(true);
                  setTimeout(() => handleGetStarted(), 300);
                }}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-12 py-5 rounded-full text-xl font-black hover:shadow-2xl transition-all transform hover:scale-110 border-4 border-white shadow-xl flex items-center gap-3"
              >
                Start Learning Together
                <Zap size={24} />
              </button>
              <button
                onClick={() => handleNavigate('/lesson/1')}
                className="bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-black hover:shadow-2xl transition-all border-4 border-purple-300 transform hover:scale-105 flex items-center gap-3"
              >
                Try Free Lesson
                <Play size={24} />
              </button>
            </div>

            {/* Trust Indicators */}
<div className="flex flex-wrap justify-center gap-6 mt-12">
  <div className="bg-gradient-to-r from-green-400 to-green-500 backdrop-blur-sm px-8 py-4 rounded-full border-4 border-white shadow-xl">
    <span className="font-black text-white flex items-center gap-2 text-lg">
      <CheckCircle size={24} />
      Science-Backed Method
    </span>
  </div>
  <div className="bg-gradient-to-r from-blue-400 to-blue-500 backdrop-blur-sm px-8 py-4 rounded-full border-4 border-white shadow-xl">
    <span className="font-black text-white flex items-center gap-2 text-lg">
      <Zap size={24} />
      Only 10 Min/Day
    </span>
  </div>
  <div className="bg-gradient-to-r from-orange-400 to-orange-500 backdrop-blur-sm px-8 py-4 rounded-full border-4 border-white shadow-xl">
    <span className="font-black text-white flex items-center gap-2 text-lg">
      <Star size={24} />
      1040 Lessons
    </span>
  </div>
</div>
          </div>

          {/* Time Commitment Highlight */}
<div className="max-w-3xl mx-auto mb-20">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white text-center shadow-2xl border-4 border-white transform hover:scale-105 transition">
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="bg-white/20 p-4 rounded-2xl">
        <Zap size={48} className="text-yellow-300" />
      </div>
      <div className="text-left">
        <div className="text-5xl font-black mb-1">10 Minutes</div>
        <div className="text-xl font-bold opacity-90">That's all it takes each day</div>
      </div>
    </div>
    <p className="text-lg font-semibold opacity-95">
      Shorter than a TV show. More impactful than any toy. Build reading skills that last a lifetime.
    </p>
  </div>
</div>

          {/* Features Grid */}
          <div 
            id="features"
            data-animate
            className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${
              isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4 border-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform -rotate-3">
                <Heart className="text-white" size={40} />
              </div>
        <h3 className="text-2xl font-black mb-4 text-gray-900">Made for Busy Parents</h3>
<p className="text-gray-700 leading-relaxed font-semibold text-lg">
  <span className="text-blue-600 font-black">Just 10 minutes a day.</span> Easy scripts show you exactly what to say and do—no teaching degree needed!
</p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4 border-green-200">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform rotate-3">
                <Play className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">Fun for Kids</h3>
              <p className="text-gray-700 leading-relaxed font-semibold text-lg">
                Songs, games, and silly sounds keep little ones excited about learning.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4 border-purple-200">
              <div className="bg-gradient-to-br from-purple-400 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BookMarked className="text-white" size={40} />
              </div>
<h3 className="text-2xl font-black mb-4 text-gray-900">Science-Backed Results</h3>
<p className="text-gray-700 leading-relaxed font-semibold text-lg">
  <span className="text-purple-600 font-black">Proven by research.</span> Every lesson uses evidence-based methods from reading science and child development experts.
</p>
            </div>
          </div>

          {/* How It Works */}
          <div 
            id="how-it-works"
            data-animate
            className={`bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-20 border-4 border-purple-300 transition-all duration-1000 ${
              isVisible['how-it-works'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-center mb-12">
              <div className="inline-block bg-purple-100 px-6 py-3 rounded-full border-2 border-purple-300 mb-4">
                <span className="font-black text-purple-700 text-lg">Simple Process</span>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-4">How It Works</h3>
              <p className="text-xl text-gray-600 font-semibold">Four easy steps to reading success</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: 1, color: 'purple', title: 'Pick a Lesson', desc: 'Choose one that fits your child\'s age', icon: '📚' },
                { num: 2, color: 'blue', title: 'Read the Guide', desc: 'Quick tips show you what to do', icon: '📖' },
                { num: 3, color: 'green', title: 'Learn Together', desc: 'Have fun with the activities', icon: '🎮' },
                { num: 4, color: 'pink', title: 'See Progress', desc: 'Watch them learn and grow', icon: '📈' }
              ].map((step) => (
                <div key={step.num} className="text-center group">
                  <div className={`bg-gradient-to-br from-${step.color}-100 to-${step.color}-200 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-4 border-4 border-${step.color}-300 shadow-lg group-hover:scale-110 transition-all transform`}>
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  <div className={`text-3xl font-black text-${step.color}-600 mb-2`}>{step.num}</div>
                  <h4 className="font-black mb-3 text-gray-900 text-xl">{step.title}</h4>
                  <p className="text-gray-600 font-semibold">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div 
            id="stats"
            data-animate
            className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${
              isVisible.stats ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition border-4 border-white">
              <div className="text-6xl font-black mb-2">1040</div>
              <div className="text-xl font-bold opacity-90">Guided Lessons</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition border-4 border-white">
              <div className="text-6xl font-black mb-2">216</div>
              <div className="text-xl font-bold opacity-90">Weeks of Learning</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition border-4 border-white">
              <div className="text-6xl font-black mb-2">10</div>
              <div className="text-xl font-bold opacity-90">Minutes Per Day</div>
            </div>
          </div>

          {/* Final CTA */}
          <div 
            id="cta"
            data-animate
            className={`bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white rounded-3xl shadow-2xl p-16 text-center relative overflow-hidden border-4 border-white transition-all duration-1000 ${
              isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="relative z-10">
              <div className="text-7xl mb-6">🎉</div>
<h3 className="text-5xl font-black mb-6">Ready to Begin?</h3>
<p className="text-2xl mb-10 opacity-95 font-bold">Give your child 10 minutes today. Watch them thrive for years to come.</p>
              <button
                onClick={() => {
                  setIsPageLoading(true);
                  setTimeout(() => handleGetStarted(), 300);
                }}
                className="bg-white text-purple-600 px-16 py-6 rounded-full text-2xl font-black hover:bg-gray-50 transition shadow-2xl transform hover:scale-110 inline-flex items-center gap-3"
              >
                Let's Go!
                <ArrowRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 text-white mt-auto relative z-10 border-t-4 border-purple-300">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/brlogo.png" alt="BrightReading Logo" className="h-10 w-auto object-contain" />
                <h3 className="text-2xl font-black">BrightReading</h3>
              </div>
              <p className="text-purple-200 leading-relaxed font-semibold">
                Helping parents teach their children to read through simple, research-based activities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-black text-xl mb-4">Quick Links</h4>
              <ul className="space-y-3 text-purple-200 font-semibold">
                <li><button onClick={() => handleNavigate('/about')} className="hover:text-white transition hover:underline">About Us</button></li>
                <li><button onClick={() => handleNavigate('/dashboard')} className="hover:text-white transition hover:underline">Dashboard</button></li>
                <li><button onClick={() => handleNavigate('/lesson/1')} className="hover:text-white transition hover:underline">Try a Lesson</button></li>
                <li><button onClick={() => { setIsPageLoading(true); setTimeout(() => handleGetStarted(), 300); }} className="hover:text-white transition hover:underline">Get Started</button></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-black text-xl mb-4">Resources</h4>
              <ul className="space-y-3 text-purple-200 font-semibold">
                <li><button onClick={() => handleNavigate('/parent-guide')} className="hover:text-white transition hover:underline">Parent Guide</button></li>
                <li><button onClick={() => handleNavigate('/research')} className="hover:text-white transition hover:underline">Research & Methods</button></li>
                <li><button onClick={() => handleNavigate('/faq')} className="hover:text-white transition hover:underline">FAQs</button></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-black text-xl mb-4">Stay Connected</h4>
              <p className="text-purple-200 mb-4 font-semibold">
                Get tips and updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-pink-400 border-2 border-purple-300"
                />
                <button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 px-5 py-3 rounded-xl transition shadow-lg">
                  <Mail size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-semibold text-purple-200">
            <p>© 2025 BrightReading. All rights reserved.</p>
            <div className="flex gap-6">
              <button onClick={() => handleNavigate('/privacy')} className="hover:text-white transition hover:underline">Privacy Policy</button>
              <button onClick={() => handleNavigate('/terms')} className="hover:text-white transition hover:underline">Terms of Service</button>
              <button onClick={() => handleNavigate('/contact')} className="hover:text-white transition hover:underline">Contact</button>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.15;
          }
          90% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
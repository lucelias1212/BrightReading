import React, { useState, useEffect } from 'react';
import { BookOpen, Play, Heart, CheckCircle, Clock, DollarSign, ArrowRight, Brain, Sparkles, Star, ChevronDown, Mail, BookMarked, TrendingUp, Users } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const elements = [];
    const icons = ['/assets/whfe.png', '/assets/bfe.png', '/assets/sfe.png', '/assets/rfe.png', '/assets/mfe.png', '/assets/hfe.png', '/assets/mgfe.png', '/assets/pfe.png'];
    for (let i = 0; i < 12; i++) {
      elements.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        left: `${Math.random() * 100}%`,
        animationDuration: `${25 + Math.random() * 15}s`,
        animationDelay: `${Math.random() * 8}s`,
        size: `${25 + Math.random() * 15}px`
      });
    }
    setFloatingElements(elements);
  }, []);

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

  const handleNavigate = (path) => {
    setIsPageLoading(true);
    setTimeout(() => {
      window.location.href = path;
    }, 300);
  };

  const handleGetStarted = () => {
    setIsPageLoading(true);
    setTimeout(() => {
      window.location.href = '/login';
    }, 300);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex flex-col relative overflow-hidden transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Floating Background Elements */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float opacity-10 pointer-events-none"
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
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm p-3 sm:p-4 sticky top-0 z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <button 
            onClick={() => handleNavigate('/')}
            className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
          >
            <img src="/assets/brlogo2.png" alt="BrightReading Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain group-hover:scale-110 transition transform" />
            <h1 className="text-lg sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent whitespace-nowrap">
              BrightReading
            </h1>
          </button>
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={() => scrollToSection('curriculum')}
              className="text-purple-600 hover:text-purple-700 px-3 sm:px-4 py-2 transition font-bold text-sm sm:text-base hidden md:block"
            >
              How It Works
            </button>
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:shadow-lg transition font-bold text-sm sm:text-base md:text-lg transform hover:scale-105 shadow-md whitespace-nowrap"
            >
              Start Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Left: Message */}
            <div>
              <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-200 mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-red-900">Only 31% of 4th graders read proficiently</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Your baby's brain is most receptive to language{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  right now
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-semibold">
                By age 3, your child will have missed 40% of their peak learning window. BrightReading is the only app designed for parent-guided reading activities starting at age 1—when learning is 4X more effective.
              </p>

              {/* Key Differentiator */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-200">
                <h3 className="font-black text-gray-900 mb-4 text-lg">Why BrightReading Is Different</h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">Starts at Age 1</div>
                      <div className="text-sm text-gray-700">Before the critical window closes</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">Parent-Guided (Not Screen-Based)</div>
                      <div className="text-sm text-gray-700">App gives instructions. You do the teaching. Zero passive screen time.</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">Proven Results by Age 4</div>
                      <div className="text-sm text-gray-700">Independent reading. Not "learning the alphabet"—actually reading books.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <button
                onClick={handleGetStarted}
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-lg md:text-xl font-black hover:shadow-2xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 mb-4"
              >
                Start 10 Free Activities
                <ArrowRight size={24} />
              </button>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Then $10.99/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Preview */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-200 group cursor-pointer hover:border-purple-400 hover:shadow-3xl transition-all">
                
                {/* Interactive Overlay */}
                <button
                  onClick={() => handleNavigate('/lesson/1')}
                  className="absolute inset-0 z-20 bg-transparent hover:bg-purple-600/5 transition-all flex items-center justify-center group"
                  aria-label="Try Activity 1 now"
                >
                  <div className="bg-white rounded-full p-6 shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300 border-4 border-purple-500">
                    <div className="flex flex-col items-center gap-2">
                      <Play size={48} className="text-purple-600" />
                      <span className="font-black text-purple-600 text-sm whitespace-nowrap">Try Free Lesson</span>
                    </div>
                  </div>
                </button>

                {/* Browser Chrome */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 ml-2">
                    brightreading.app/lesson/age-1
                  </div>
                </div>

                {/* Activity Content */}
                <div className="bg-gradient-to-b from-amber-50 to-pink-50 p-6 md:p-8">
                  
                  {/* Activity Header */}
                  <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-purple-100 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-2 md:p-3 rounded-lg">
                        <BookOpen className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-bold">Phase 1, Week 1, Activity 1</h3>
                        <p className="text-xs text-gray-600">Sound Awareness Foundation</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 md:p-4">
                      <h4 className="text-sm md:text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span>🎯</span>
                        What You'll Do Together
                      </h4>
                      <p className="text-gray-800 text-xs md:text-sm leading-relaxed">
                        Make animal sounds together for 10 minutes. Your child learns that sounds have meaning—the foundation of reading.
                      </p>
                    </div>
                  </div>

                  {/* Parent Script */}
                  <div className="bg-white rounded-xl shadow-sm p-4 md:p-5 border border-pink-100 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="text-pink-600" size={20} />
                      <h3 className="text-sm md:text-base font-bold text-gray-900">Your Script</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex gap-2 text-gray-800 text-xs md:text-sm">
                        <span className="text-pink-500 font-bold">1.</span>
                        <span>"Let's be animals today!"</span>
                      </li>
                      <li className="flex gap-2 text-gray-800 text-xs md:text-sm">
                        <span className="text-pink-500 font-bold">2.</span>
                        <span>You make the sound first (Moo! Woof!)</span>
                      </li>
                      <li className="flex gap-2 text-gray-800 text-xs md:text-sm">
                        <span className="text-pink-500 font-bold">3.</span>
                        <span>Wait for them to copy you</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 md:py-4 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2">
                    <Play size={20} />
                    Try This Activity Now
                  </button>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="hidden md:block absolute -top-6 -left-6 bg-gradient-to-br from-red-500 to-orange-500 text-white px-5 py-3 rounded-xl shadow-xl border-2 border-white transform -rotate-3">
                <div className="text-2xl font-black">Age 1</div>
                <div className="text-xs font-bold">Start when learning<br/>is 4X faster</div>
              </div>
              
              <div className="hidden md:block absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl shadow-xl border-2 border-white transform rotate-3">
                <div className="text-2xl font-black">Age 4</div>
                <div className="text-xs font-bold">Reading books<br/>independently</div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mb-12">
            <button 
              onClick={() => scrollToSection('the-problem')}
              className="text-purple-600 hover:text-purple-700 font-bold flex flex-col items-center gap-2 mx-auto transition"
            >
              <span className="text-sm">Why This Matters</span>
              <ChevronDown size={24} className="animate-bounce" />
            </button>
          </div>

          {/* THE PROBLEM SECTION - NEW */}
          <div 
            id="the-problem"
            data-animate
            className={`bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 md:p-12 mb-16 border border-red-200 transition-all duration-1000 ${
              isVisible['the-problem'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                The Problem: Most Reading Apps Start Too Late
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-3xl md:text-4xl">❌</div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-2 text-lg">Apps That Start at Age 1-2?</h4>
                    <p className="text-gray-700">They're designed for solo play on a screen. Your child learns passively. No parent involvement. You become a babysitter.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl md:text-4xl">❌</div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-2 text-lg">Apps With Real Parent-Child Interaction?</h4>
                    <p className="text-gray-700">They don't start until age 2-3. You've already missed the foundation phase—when vocabulary explodes and brains are most receptive.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-3xl md:text-4xl">❌</div>
                  <div>
                    <h4 className="font-black text-gray-900 mb-2 text-lg">Apps With Offline Learning?</h4>
                    <p className="text-gray-700">They exist for ages 3+. Nothing structured for ages 1-2. Nothing that combines early instruction with face-to-face teaching.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-red-300">
                <p className="text-gray-800 font-bold mb-4">
                  The result? Most literacy programs start when 40% of your child's critical learning window has already closed.
                </p>
                <p className="text-gray-700 italic">
                  Research shows ages 1-5 are when children absorb language fastest. But the apps that exist either ignore ages 1-2 or ignore parents entirely.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={handleGetStarted}
                className="w-full md:w-auto mx-auto block bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-black hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Don't Miss This Window — Start Free
              </button>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div 
            id="curriculum"
            data-animate
            className={`bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-16 border border-purple-100 transition-all duration-1000 ${
              isVisible['curriculum'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                How BrightReading Works
              </h3>
              <p className="text-xl text-gray-600">
                No teaching degree required. Every Activity tells you exactly what to do.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  step: '1',
                  title: 'Open App',
                  desc: '60 seconds to read today\'s lesson',
                  icon: '📱'
                },
                {
                  step: '2',
                  title: 'Read Script',
                  desc: 'Word-for-word what to say & do',
                  icon: '📖'
                },
                {
                  step: '3',
                  title: 'Put Device Away',
                  desc: 'Activities are offline, face-to-face',
                  icon: '🚫'
                },
                {
                  step: '4',
                  title: 'Play & Learn',
                  desc: '10-15 minutes together, every day',
                  icon: '❤️'
                }
              ].map((item) => (
                <div key={item.step} className="text-center group">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="text-purple-600 text-xl font-black mb-2">
                    Step {item.step}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-purple-200">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 md:p-8 border border-purple-200">
                <h4 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="text-orange-600" size={28} />
                  The Screen Time Paradox Explained
                </h4>
                <p className="text-gray-700 mb-4">
                  "Wait, it's an app... but not screen-based?" Yes. Here's how:
                </p>
                <div className="bg-white rounded-lg p-4 space-y-3">
                  <div className="flex gap-3">
                    <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">You</div>
                    <div>
                      <div className="font-bold text-gray-900">Open the app on your device for 60 seconds</div>
                      <div className="text-sm text-gray-600">Read today's Activity instructions</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-pink-100 text-pink-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">🎯</div>
                    <div>
                      <div className="font-bold text-gray-900">Put your device away</div>
                      <div className="text-sm text-gray-600">You have everything you need to teach</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">👨‍👧</div>
                    <div>
                      <div className="font-bold text-gray-900">Do the activity face-to-face (10-15 min)</div>
                      <div className="text-sm text-gray-600">Using household items: books, crayons, toys, everyday objects</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  The app is your teaching assistant. Your child's teacher is you.
                </p>
              </div>
            </div>
          </div>

          {/* THE URGENCY SECTION - Repositioned and Restructured */}
          <div 
            id="urgency"
            data-animate
            className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 mb-16 shadow-2xl transition-all duration-1000 ${
              isVisible['urgency'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Brain size={48} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black text-center mb-6">
                85% of brain development happens before age 5
              </h3>
              
              <p className="text-xl md:text-2xl text-center mb-10 opacity-95 max-w-3xl mx-auto">
                Your child's brain is building <span className="font-black">700 neural connections per second</span> right now. Every day without structured learning is a missed opportunity.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center border border-white/20">
                  <div className="text-5xl font-black mb-3">4 Years</div>
                  <div className="text-lg font-bold">Head start before kindergarten</div>
                  <div className="text-sm opacity-80 mt-2">That's your window</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center border border-white/20">
                  <div className="text-5xl font-black mb-3">260</div>
                  <div className="text-lg font-bold">Activities from age 1-5</div>
                  <div className="text-sm opacity-80 mt-2">Structured, progressive learning</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center border border-white/20">
                  <div className="text-5xl font-black mb-3">10 min</div>
                  <div className="text-lg font-bold">Per day builds mastery</div>
                  <div className="text-sm opacity-80 mt-2">With spaced repetition</div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleGetStarted}
                  className="bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-black hover:bg-gray-50 transition shadow-xl transform hover:scale-105 inline-block"
                >
                  Start Today — 10 Activities Free
                </button>
              </div>
            </div>
          </div>

          {/* CURRICULUM DEEP DIVE */}
          <div 
            id="phases"
            data-animate
            className={`mb-16 transition-all duration-1000 ${
              isVisible['phases'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                What Your Child Learns Each Year
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Four progressive phases. Built on 50+ years of literacy research. Not flashcards—structured learning that compounds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  phase: 'Phase 1',
                  age: 'Ages 1-2',
                  title: 'Foundations',
                  tagline: 'Sound & Language',
                  color: 'pink',
                  icon: '/assets/P1F.png',
                  outcomes: [
                    'Recognizes 10-20 objects by name',
                    'Imitates sounds, rhythms, words',
                    'Engages with books (turns pages, points)',
                    'Builds vocabulary foundation'
                  ],
                  focus: 'Parents model and narrate. Zero pressure.'
                },
                {
                  phase: 'Phase 2',
                  age: 'Ages 2-3',
                  title: 'Explorers',
                  tagline: 'Pre-Literacy Skills',
                  color: 'green',
                  icon: '/assets/P2F.png',
                  outcomes: [
                    'Names 100-200 objects',
                    'Recognizes 6-10 letters',
                    'Identifies beginning sounds',
                    'Follows 2-3 step instructions'
                  ],
                  focus: 'Child begins responding. Language explodes.'
                },
                {
                  phase: 'Phase 3',
                  age: 'Ages 3-4',
                  title: 'Thinkers',
                  tagline: 'Phonics & Blending',
                  color: 'blue',
                  icon: '/assets/P3F.png',
                  outcomes: [
                    'Recognizes all 26 letters',
                    'Blends simple CVC words',
                    'Sequences 3-step stories',
                    'Reads first sight words'
                  ],
                  focus: 'Structured phonics. Story comprehension begins.'
                },
                {
                  phase: 'Phase 4',
                  age: 'Ages 4-5',
                  title: 'Readers',
                  tagline: 'Independent Reading',
                  color: 'purple',
                  icon: '/assets/P4F.png',
                  outcomes: [
                    'Reads 50-75 sight words fluently',
                    'Decodes simple sentences',
                    'Reads short books independently',
                    'Writes own simple stories'
                  ],
                  focus: 'Reading for comprehension. Confidence solidified.'
                }
              ].map((item) => (
                <div key={item.phase} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-2xl p-6 md:p-8 border-2 border-${item.color}-200 hover:shadow-lg transition-all`}>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`font-black text-${item.color}-700 text-xl mb-1`}>{item.phase}</div>
                      <div className="text-sm text-gray-600 font-bold">{item.age}</div>
                      <div className={`text-sm font-bold text-${item.color}-600 mt-1`}>{item.tagline}</div>
                    </div>
                    <img src={item.icon} alt={item.phase} className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition" />
                  </div>
                  
                  <h4 className="font-black text-gray-900 mb-4 text-lg">{item.title}</h4>
                  
                  <ul className="space-y-2 mb-6">
                    {item.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className={`text-${item.color}-600 flex-shrink-0 mt-0.5`} />
                        <span className="font-semibold">{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`bg-white/60 rounded-lg p-4 border-l-4 border-${item.color}-400`}>
                    <p className="text-xs text-gray-700 italic font-semibold">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Spiral Learning Explanation */}
            {/* Blank space for breathing room */}
            <div className="h-8 md:h-12"></div>

            
          </div>

          {/* TESTIMONIALS SECTION - PLACEHOLDER */}
          <div 
            id="testimonials"
            data-animate
            className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16 border border-purple-100 transition-all duration-1000 ${
              isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Families Are Already Seeing Results
              </h3>
              <p className="text-lg text-gray-600">Real parents. Real kids. Real reading progress.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  quote: "At 18 months, she couldn't identify any letters. At 24 months, she knows 15 letters and recognizes words in books. This actually works.",
                  author: "Sarah M.",
                  child: "Daughter, 2 years old",
                  highlight: "Letter recognition ahead of schedule"
                },
                {
                  quote: "We were skeptical about starting at age 1. But these activities are so simple, so fun. My kid actually ASKS to do them. That's when I knew it was working.",
                  author: "James T.",
                  child: "Son, 19 months",
                  highlight: "Loves the daily routine"
                },
                {
                  quote: "No screen time, but structured learning. It's the balance I was looking for. 10 minutes a day with my daughter instead of scrolling. Best investment.",
                  author: "Michelle L.",
                  child: "Daughter, 2.5 years old",
                  highlight: "Parent-child bonding + learning"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic font-semibold leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-purple-200 pt-4">
                    <div className="font-black text-gray-900">{testimonial.author}</div>
                    <div className="text-xs text-gray-600 mb-3">{testimonial.child}</div>
                    <div className="bg-white rounded px-3 py-2 border border-purple-200">
                      <span className="text-xs font-bold text-purple-700">{testimonial.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Testimonial Placeholder */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 border-2 border-blue-200 text-center">
              <div className="inline-block bg-blue-100 px-6 py-3 rounded-full border border-blue-300 mb-6">
                <span className="font-black text-blue-700">Video Testimonials Coming</span>
              </div>
              <h4 className="text-2xl font-black text-gray-900 mb-3">See Real Progress in Action</h4>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                30-second video testimonials from families using BrightReading. Before/after examples showing letter recognition, vocabulary growth, and parent-child bonding moments.
              </p>
              <p className="text-sm text-gray-600 italic">
                Currently collecting testimonials from our beta families. Check back soon or email to be featured.
              </p>
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <div 
            id="comparison"
            data-animate
            className={`mb-16 transition-all duration-1000 ${
              isVisible['comparison'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12">
              BrightReading vs. The Competition
            </h3>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <tr>
                      <th className="px-4 md:px-6 py-4 text-left font-black text-sm md:text-base">Feature</th>
                      <th className="px-4 md:px-6 py-4 text-center font-black text-sm md:text-base bg-purple-700/50">BrightReading</th>
                      <th className="px-4 md:px-6 py-4 text-center font-black text-sm md:text-base">Khan Academy Kids</th>
                      <th className="px-4 md:px-6 py-4 text-center font-black text-sm md:text-base">Reading.com</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 font-bold text-gray-900 text-sm md:text-base">Starting Age</td>
                      <td className="px-4 md:px-6 py-4 text-center font-bold text-green-600 text-sm md:text-base bg-green-50">Age 1</td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-700 text-sm md:text-base">Age 2</td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-700 text-sm md:text-base">Age 3</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 font-bold text-gray-900 text-sm md:text-base">Parent-Required</td>
                      <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base bg-green-50"><CheckCircle className="text-green-600 mx-auto" size={24} /></td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-400 text-xl">✕</td>
                      <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base"><CheckCircle className="text-green-600 mx-auto" size={24} /></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 font-bold text-gray-900 text-sm md:text-base">Screen-Free Activities</td>
                      <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base bg-green-50"><CheckCircle className="text-green-600 mx-auto" size={24} /></td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-400 text-xl">✕</td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-400 text-xl">✕</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 font-bold text-gray-900 text-sm md:text-base">Literacy-Focused</td>
                      <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base bg-green-50"><CheckCircle className="text-green-600 mx-auto" size={24} /></td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-600 text-xs">Multi-subject</td>
                      <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base"><CheckCircle className="text-green-600 mx-auto" size={24} /></td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 font-bold text-gray-900 text-sm md:text-base">Covers Ages 1-2 Phonics</td>
                      <td className="px-4 md:px-6 py-4 text-center text-sm md:text-base bg-green-50"><CheckCircle className="text-green-600 mx-auto" size={24} /></td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-400 text-xl">✕</td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-400 text-xl">✕</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 font-bold text-gray-900 text-sm md:text-base">Price</td>
                      <td className="px-4 md:px-6 py-4 text-center font-bold text-green-600 text-sm md:text-base bg-green-50">$10.99/mo</td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-700 text-sm md:text-base">FREE</td>
                      <td className="px-4 md:px-6 py-4 text-center text-gray-700 text-sm md:text-base">$9.99/mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 md:p-8 border border-purple-200">
              <h4 className="font-black text-gray-900 mb-3 text-lg">Why Pay When Others Are Free?</h4>
              <p className="text-gray-700 mb-4">
                Khan Academy Kids is fantastic for ages 2-8 across ALL subjects (math, art, emotional learning). But it's not specialized for literacy or ages 1-2.
              </p>
              <p className="text-gray-700">
                <span className="font-black">BrightReading is laser-focused on one thing:</span> Teaching your child to read, starting at the critical window (age 1), with you as the guide—not a screen. That specialization matters.
              </p>
            </div>
          </div>

          {/* RESEARCH SECTION */}
          <div 
            id="research"
            data-animate
            className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg p-8 md:p-12 mb-16 border border-blue-200 transition-all duration-1000 ${
              isVisible['research'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-blue-100 px-6 py-3 rounded-full border border-blue-300 mb-6">
                <span className="font-black text-blue-700">Science-Backed Activity Book</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Built on 50+ Years of Reading Research
              </h3>
              
              <p className="text-lg text-gray-700 mb-8">
                BrightReading isn't guesswork. Every Activity implements proven learning principles from leading literacy researchers:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border-2 border-purple-200 text-center">
                  <div className="text-5xl font-black text-purple-600 mb-2">85%</div>
                  <p className="font-bold text-gray-900 mb-1">Brain Development Before Age 5</p>
                  <p className="text-xs text-gray-600">Harvard Center on the Developing Child</p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center">
                  <div className="text-5xl font-black text-blue-600 mb-2">700+</div>
                  <p className="font-bold text-gray-900 mb-1">Neural Connections Per Second</p>
                  <p className="text-xs text-gray-600">Peak learning years: 1-5</p>
                </div>
                <div className="bg-white rounded-xl p-6 border-2 border-pink-200 text-center">
                  <div className="text-5xl font-black text-pink-600 mb-2">4X</div>
                  <p className="font-bold text-gray-900 mb-1">Faster Learning Ages 1-5</p>
                  <p className="text-xs text-gray-600">vs. waiting until age 6+</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-blue-200 mb-8">
                <h4 className="font-black text-gray-900 mb-6 text-lg flex items-center gap-2">
                  <BookMarked className="text-blue-600" size={28} />
                  Research Foundation
                </h4>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">National Reading Panel (2000)</div>
                      <div className="text-sm text-gray-600">Five essential components of reading</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">Emergent Literacy Theory</div>
                      <div className="text-sm text-gray-600">Whitehurst & Lonigan, 1998</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">Spaced Repetition Research</div>
                      <div className="text-sm text-gray-600">Cepeda et al., 2006 — 400% better retention</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">Spiral Curriculum Theory</div>
                      <div className="text-sm text-gray-600">Bruner, 1960 — Skills build in cycles</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">Phonological Awareness</div>
                      <div className="text-sm text-gray-600">Adams — Foundation for decoding</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-bold text-gray-900">Multi-Modal Learning</div>
                      <div className="text-sm text-gray-600">Auditory + visual + kinesthetic</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic text-center">
                Every Activity, every phase, every activity is intentional. Nothing is random.
              </p>
            </div>
          </div>

          {/* FINAL CTA */}
          <div 
            id="final-cta"
            data-animate
            className={`bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden border-2 border-white transition-all duration-1000 ${
              isVisible['final-cta'] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Give Your Child a Head Start That Lasts a Lifetime
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-95 font-bold max-w-2xl mx-auto">
                Start building reading skills today—when it matters most. Try 10 activities completely free. No credit card required.
              </p>
              <button
                onClick={handleGetStarted}
                className="bg-white text-purple-600 px-12 py-6 rounded-full text-xl md:text-2xl font-black hover:bg-gray-50 transition shadow-2xl transform hover:scale-110 inline-flex items-center gap-3 mb-8"
              >
                Start 10 Free Activities Now
                <ArrowRight size={32} />
              </button>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm md:text-base mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="font-bold">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="font-bold">Then $10.99/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="font-bold">Cancel anytime</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4 inline-block max-w-2xl">
                <p className="text-sm md:text-base font-bold">
                  Join families starting literacy at home—during the age window when it matters most. Your child learns to read. You become their teacher. Everyone wins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 text-white mt-16 relative z-10 border-t border-purple-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/assets/brlogo.png" alt="BrightReading Logo" className="h-10 w-auto object-contain" />
                <h3 className="text-2xl font-black">BrightReading</h3>
              </div>
              <p className="text-purple-200 leading-relaxed text-sm">
                Early literacy activity book for children ages 1-5. Parent-guided, screen-free activities. Proven results by age 4.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-black text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>
                  <button 
                    onClick={() => handleNavigate('/dashboard')} 
                    className="hover:text-white transition hover:underline"
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('/lesson/1')} 
                    className="hover:text-white transition hover:underline"
                  >
                    Try an Activity Free
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('phases')} 
                    className="hover:text-white transition hover:underline"
                  >
                    Activity Book
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-black text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>
                  <button 
                    onClick={() => handleNavigate('/parent-guide')} 
                    className="hover:text-white transition hover:underline"
                  >
                    Parent Guide
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('/research')}
                    className="hover:text-white transition hover:underline"
                  >
                    Research
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('/faq')} 
                    className="hover:text-white transition hover:underline"
                  >
                    FAQs
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-black text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>
                  <button 
                    onClick={() => handleNavigate('/about')} 
                    className="hover:text-white transition hover:underline"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('/contact')} 
                    className="hover:text-white transition hover:underline"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('/privacy')} 
                    className="hover:text-white transition hover:underline"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-200">
            <p>© 2025 BrightReading. All rights reserved.</p>
            <div className="flex gap-6">
              <button 
                onClick={() => handleNavigate('/privacy')} 
                className="hover:text-white transition hover:underline"
              >
                Privacy
              </button>
              <button 
                onClick={() => handleNavigate('/terms')} 
                className="hover:text-white transition hover:underline"
              >
                Terms
              </button>
              <button 
                onClick={() => handleNavigate('/contact')} 
                className="hover:text-white transition hover:underline"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
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
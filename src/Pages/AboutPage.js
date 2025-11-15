import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Home, Clock, Calendar, Brain, Heart, TrendingUp, Star, Award, Sparkles, GraduationCap, ExternalLink, Target, Users, CheckCircle } from 'lucide-react';
const AboutPage = () => {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(false);

  const handleNavigate = (path) => {
    setIsPageLoading(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 300);
  };



  return (
<div className={`min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50 transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/assets/brlogo2.png" alt="BrightReading Logo" className="h-10 w-auto object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BrightReading
            </h1>
          </div>
<button
            onClick={() => handleNavigate('/')}
            className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition"
            title="Back to Home"
          >
            <Home size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full text-purple-700 font-medium mb-6">
            <Sparkles size={20} />
            <span>Research-Backed Learning for Ages 1-5</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About BrightReading</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've curated proven teaching methods from leading literacy researchers into a simple, parent-friendly curriculum
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl p-10 mb-12 shadow-xl">
          <h3 className="text-3xl font-bold mb-4 text-center">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto text-center mb-6">
            To make evidence-based early literacy education accessible to every family, regardless of teaching experience or background.
          </p>
          <div className="bg-white/20 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg">
              We don't conduct research — we translate it. BrightReading brings together decades of peer-reviewed literacy studies and transforms them into practical, 10-minute daily lessons any parent can follow.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes BrightReading Different</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Brain className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-center">Research Translation</h4>
              <p className="text-gray-700 text-sm text-center">
                We study the science so you don't have to. Every activity is based on verified teaching methods from literacy experts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="text-green-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-center">Parent-Friendly</h4>
              <p className="text-gray-700 text-sm text-center">
                No teaching degree required. Clear scripts and step-by-step guidance make effective teaching simple.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="text-purple-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-center">Age-Appropriate</h4>
              <p className="text-gray-700 text-sm text-center">
                Four distinct curricula (1-2, 2-3, 3-4, 4-5) matched to developmental stages and attention spans.
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Phases Overview */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Four Phases, One Goal: Confident Readers</h3>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Each phase follows a complete 52-week curriculum with 260 guided lessons, building progressively from sound awareness to independent reading.
          </p>

          {/* Phase Cards */}
          <div className="space-y-6">
            {/* Phase 1: 1-2 Years */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-pink-400 to-rose-500 p-6">
                <div className="flex items-center gap-3 text-white">
<img src="assets/P1F.png" alt="Phase 1" className="w-16 h-16 rounded-lg" />                  <div>
                    <h4 className="text-2xl font-bold">Phase 1: Foundations (Ages 1-2)</h4>
                    <p className="text-white/90">Sound awareness and early language</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Building the foundation through sound play, object recognition, and book awareness. Focus on listening, labeling, and simple imitation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Sound Play</span>
                  <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Object Naming</span>
                  <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Book Basics</span>
                  <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full">Motor Skills</span>
                </div>
              </div>
            </div>

            {/* Phase 2: 2-3 Years */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6">
                <div className="flex items-center gap-3 text-white">
<img src="assets/P2F.png" alt="Phase 2" className="w-16 h-16 rounded-lg" />                  <div>
                    <h4 className="text-2xl font-bold">Phase 2: Explorers (Ages 2-3)</h4>
                    <p className="text-white/90">Vocabulary and pre-reading foundations</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Expanding vocabulary through conversation, introducing phonemic awareness, and developing print awareness. Building comprehension through dialogic reading.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Vocabulary</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Sound Awareness</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Print Awareness</span>
                  <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Listening</span>
                </div>
              </div>
            </div>

            {/* Phase 3: 3-4 Years */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-6">
                <div className="flex items-center gap-3 text-white">
<img src="assets/P3F.png" alt="Phase 3" className="w-16 h-16 rounded-lg" />                  <div>
                    <h4 className="text-2xl font-bold">Phase 3: Thinkers (Ages 3-4)</h4>
                    <p className="text-white/90">Letters, sounds, and comprehension</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Mastering letter recognition and beginning sounds, developing phonemic awareness skills, and deepening story comprehension and sequencing abilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Letter Recognition</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Phonics</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Comprehension</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Writing Prep</span>
                </div>
              </div>
            </div>

            {/* Phase 4: 4-5 Years */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-6">
                <div className="flex items-center gap-3 text-white">
<img src="assets/P4F.png" alt="Phase 4" className="w-16 h-16 rounded-lg" />                  <div>
                    <h4 className="text-2xl font-bold">Phase 4: Readers (Ages 4-5)</h4>
                    <p className="text-white/90">Reading fluency and independence</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Applying phonics to decode words, building sight word recognition, developing reading fluency, and writing basic sentences with confidence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Decoding</span>
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Sight Words</span>
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Fluency</span>
                  <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Writing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
onClick={() => handleNavigate('/curriculum')}              
className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition"
            >
              <span>Explore Full Curriculum</span>
              <ExternalLink size={20} />
            </button>
          </div>
        </div>

        {/* Each Lesson Structure */}
        <div className="bg-white rounded-3xl shadow-md p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Clock className="text-blue-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Every Lesson Follows a Proven Structure</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Each 10-minute session is designed around research-backed teaching methods, broken into digestible activities:
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-yellow-100 text-yellow-700 font-bold w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                2m
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">Warm-Up & Vocabulary</h5>
                <p className="text-gray-600 text-sm">Build oral language through conversation and naming games (Hart & Risley, 1995)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 text-blue-700 font-bold w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                4m
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">Interactive Story Time</h5>
                <p className="text-gray-600 text-sm">Dialogic reading to build comprehension (Whitehurst & Lonigan, 1998)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-green-100 text-green-700 font-bold w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                3m
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">Sound Play & Letter Games</h5>
                <p className="text-gray-600 text-sm">Phonological awareness training (National Early Literacy Panel, 2008)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-purple-100 text-purple-700 font-bold w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                1m
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-gray-900 mb-1">Print Awareness & Celebration</h5>
                <p className="text-gray-600 text-sm">Understanding that print carries meaning (Clay, 1991)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> All activities are adapted from published research studies. We provide the "how-to" — researchers provided the "why it works."
            </p>
          </div>
        </div>

        {/* Research Foundation */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 mb-12 border-2 border-purple-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Built on Decades of Research</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-2">
              Our curriculum synthesizes findings from leading literacy researchers
            </p>
            <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
              (We didn't conduct these studies — we compiled and translated them into parent-friendly lessons)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-sm text-gray-700 font-medium">Studies Reviewed</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
              <p className="text-sm text-gray-700 font-medium">Expert Researchers</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">40</div>
              <p className="text-sm text-gray-700 font-medium">Years of Evidence</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-6">
            <h4 className="font-bold text-gray-900 mb-4 text-center">Key Research We Draw From:</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">National Reading Panel (2000)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">National Early Literacy Panel (2008)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">Phonological Awareness (Ehri, 2005)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">Dialogic Reading (Whitehurst, 1998)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">Parent Involvement (Sénéchal, 2002)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-gray-700">Language Development (Hart & Risley, 1995)</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => handleNavigate('/research')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition shadow-lg"
            >
              <span>View Complete Research Bibliography</span>
              <ExternalLink size={20} />
            </button>
          </div>
        </div>

        {/* Why This Works */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 mb-12">
          <div className="text-center mb-8">
            <TrendingUp className="text-purple-500 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why This Approach Works</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-bold text-gray-900 mb-2">Developmentally Appropriate</h4>
              <p className="text-gray-700 text-sm">Activities match cognitive development stages and attention spans for each age group</p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-gray-900 mb-2">Spiral Learning</h4>
              <p className="text-gray-700 text-sm">Skills are revisited every 3-4 weeks in progressively complex forms for deep mastery</p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="text-4xl mb-3">👨‍👩‍👧</div>
              <h4 className="font-bold text-gray-900 mb-2">Parent Empowerment</h4>
              <p className="text-gray-700 text-sm">Clear guidance turns every parent into an effective early literacy teacher</p>
            </div>
          </div>
        </div>

        {/* Built for Busy Parents */}
        <div className="bg-white rounded-3xl shadow-md p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Heart className="text-pink-500 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Designed for Real Life</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand parenting is demanding. That's why every lesson includes:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <div className="text-2xl">📱</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Scripted Guidance</h4>
                <p className="text-gray-600 text-sm">Exact words to say and steps to follow — no guesswork</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">⏱️</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Time-Efficient</h4>
                <p className="text-gray-600 text-sm">Complete lessons in 10-15 minutes, 5 times per week</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">📊</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Progress Tracking</h4>
                <p className="text-gray-600 text-sm">Visual dashboards show your child's growth week by week</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">🏆</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Motivation System</h4>
                <p className="text-gray-600 text-sm">Streaks, achievements, and celebration moments keep everyone engaged</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white rounded-3xl shadow-xl p-12 text-center">
          <Star className="mx-auto mb-4" size={48} />
          <h3 className="text-3xl font-bold mb-4">Start Your Family's Reading Journey</h3>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join parents who are building strong literacy foundations, one simple lesson at a time.
          </p>
          <button
            onClick={() => handleNavigate('/login')}
            className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
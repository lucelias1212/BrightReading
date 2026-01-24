import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Home, MessageCircle, ChevronDown, ChevronUp, HelpCircle, Clock, CreditCard, Users, BookMarked, Settings, Lightbulb } from 'lucide-react';

const FAQPage = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPageLoading, setIsPageLoading] = useState(false);

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const categories = [
    { id: 'all', label: 'All Questions', icon: <HelpCircle size={20} /> },
    { id: 'getting-started', label: 'Getting Started', icon: <Lightbulb size={20} /> },
    { id: 'lessons', label: 'Lessons & Learning', icon: <BookMarked size={20} /> },
    { id: 'technical', label: 'Technical', icon: <Settings size={20} /> },
    { id: 'account', label: 'Account & Billing', icon: <CreditCard size={20} /> }
  ];

  const faqs = [
    // Getting Started
    {
      id: 1,
      category: 'getting-started',
      question: "How do I get started with BrightReading?",
      answer: "Getting started is easy! First, create an account or log in. Then, select your child's age group from the dashboard. Once complete, you can begin with Activity 1 or jump to the recommended activity  based on the assessment results."
    },
    {
      id: 2,
      category: 'getting-started',
      question: "Which age group should I choose for my child?",
      answer: "Choose the age group that matches your child's current age: 1-2, 2-3, 3-4, or 4-5 years old. However, if your child is advanced or needs more support, you can select a different age group based on their skill level rather than their actual age."
    },
    {
      id: 3,
      category: 'getting-started',
      question: "Do I need any special materials or books?",
      answer: "No special materials are required! Most activities use common household items like paper, crayons, and toys you already have. When books are suggested, you can use any age-appropriate books from your home library or local library."
    },
    {
      id: 4,
      category: 'getting-started',
      question: "Do I need teaching experience to use BrightReading?",
      answer: "Absolutely not! BrightReading is designed specifically for parents with no teaching background. Every activity  includes step-by-step scripts showing you exactly what to say and do. Think of it as having a literacy expert guiding you through each activity."
    },

    // Activities & Learning
    {
      id: 5,
      category: 'lessons',
      question: "How long should each activity  take?",
      answer: "Each activity  is designed to take about 10 minutes. However, let your child guide you - some days they may want to continue for 15-20 minutes, other days 5 minutes might be enough. The key is keeping it fun and pressure-free. Quality matters more than quantity."
    },
    {
      id: 6,
      category: 'lessons',
      question: "How often should we do activities?",
      answer: "We recommend 3-5 times per week for best results. Consistency is more important than daily practice. Regular short sessions are more effective than occasional long ones. It's perfectly fine to skip days when life gets busy - just pick up where you left off."
    },
    {
      id: 7,
      category: 'lessons',
      question: "What if my child already knows some of the content?",
      answer: "That's great! You have several options: move through those activities quickly, skip ahead to more challenging material, or take an assessment to find the right level. The activity book is flexible - use it as a guide, not a rigid rulebook. You can always adjust up or down based on your child's needs."
    },
    {
      id: 8,
      category: 'lessons',
      question: "What if we miss several days or weeks?",
      answer: "No problem at all! Life happens - vacations, illness, busy periods are all normal. There's no penalty for breaks. Simply pick up where you left off when you're ready. The activities will still be here, and your child's progress is saved. There's no such thing as 'behind' in early learning."
    },
    {
      id: 9,
      category: 'lessons',
      question: "My child won't sit still during activities. Is this normal?",
      answer: "Completely normal! Young children learn through movement. Try doing activities while they're moving - read while they swing, practice letters while jumping, or have them act out stories. Learning doesn't have to happen sitting down. Follow their energy level and keep sessions short."
    },
    {
      id: 10,
      category: 'lessons',
      question: "Can I do activities in a language other than English?",
      answer: "Yes! The foundational skills we teach (sound awareness, letter recognition, comprehension strategies) transfer across languages. You can adapt activities to any language. If your child is learning two languages, the skills will benefit both."
    },
    {
      id: 11,
      category: 'lessons',
      question: "When will my child start reading?",
      answer: "Every child develops at their own pace. Some children start recognizing words by age 4, while others don't read independently until 6 or 7 - both are completely normal! What matters most is building strong foundations. Trust the process, celebrate small wins, and avoid comparing your child to others."
    },
    {
      id: 12,
      category: 'lessons',
      question: "Is BrightReading enough, or should my child also attend preschool?",
      answer: "It is not enough. BrightReading provides a comprehensive literacy activity book, but it's designed to complement (not replace) other learning experiences. Preschool, playgroups, library storytime, and social activities are all wonderful additions that support your child's overall development."
    },
    {
      id: 13,
      category: 'lessons',
      question: "What if my child gets frustrated or upset during an activity ?",
      answer: "Stop the activity  immediately and try again later. Learning should never feel stressful. If a particular activity consistently causes frustration, skip it and come back in a few weeks when they're ready. You can also try adapting the activity to make it easier or more engaging."
    },
    {
      id: 14,
      category: 'lessons',
      question: "Can I work with multiple children at different levels?",
      answer: "Yes! You can create separate profiles for each child and switch phases for them on the dashboard. Each phase will have their own progress tracking and activity  recommendations. Some activities can be adapted for multiple ages, while others work best one-on-one."
    },

    // Technical
    {
      id: 15,
      category: 'technical',
      question: "How do I track my child's progress?",
      answer: "Your dashboard displays your child's progress including activities completed, current streak, skills mastered, and overall advancement. After each activity, you can mark it complete and the system automatically updates your progress tracker. You can view detailed progress reports anytime."
    },
    {
      id: 16,
      category: 'technical',
      question: "Can I access BrightReading on multiple devices?",
      answer: "Yes! Your account syncs across all devices. You can start an activity  on your computer, continue on your tablet, and review progress on your phone. Just log in with the same account credentials on any device."
    },
    {
      id: 17,
      category: 'technical',
      question: "Do I need an internet connection to use BrightReading?",
      answer: "Yes, BrightReading currently requires an internet connection to access activities and track progress. We recommend using a stable WiFi connection for the best experience. Offline functionality is being considered for future updates."
    },
    {
      id: 18, 
      category: 'technical',
      question: "What if I encounter a technical problem?",
      answer: "If you experience any technical issues, try refreshing your browser first. If the problem persists, check our support page or contact us directly. We typically respond to technical issues within 24 hours."
    },

    // Account & Billing
    {
      id: 29,
      category: 'account',
      question: "Is there a free trial available?",
      answer: "Yes! You can try Activity 1-10 completely free without creating an account, as well as play one game. This gives you a full experience of what BrightReading offers. After that, you'll need to create an account to continue accessing activities and track progress."
    },
    {
      id: 20,
      category: 'account',
      question: "How much does BrightReading cost?",
      answer: "BrightReading offers a monthly subscription of $10.99 or an annual subscription of $89."
    },
    {
      id: 21,
      category: 'account',
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll retain access through the end of your current billing period. Your progress data is saved for 12 months in case you decide to return."
    },
    {
      id: 22,
      category: 'account',
      question: "How do I change my account settings or password?",
      answer: "Click on your profile icon in the top right corner and select 'Profile' or 'Settings.' From there, you can update your email, password, child information, and notification preferences. Changes are saved automatically."
    },
    {
      id: 23,
      category: 'account',
      question: "What happens to my data if I cancel?",
      answer: "Your account data, including all progress tracking, is saved for 12 months after cancellation. If you return within that time, everything will be right where you left off. After 12 months, data may be permanently deleted per our privacy policy."
    },
    {
      id: 24,
      category: 'account',
      question: "Is my child's information secure?",
      answer: "Absolutely. We take data privacy seriously and comply with all relevant privacy laws including COPPA. We never sell or share your child's information with third parties. Read our full privacy policy for details on how we protect your family's data."
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
<div className={`min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/assets/brlogo2.png" alt="BrightReading Logo" className="h-10 w-auto object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BrightReading
            </h1>
          </div>
          <div className="flex items-center gap-4">
<button 
              onClick={() => {
                setIsPageLoading(true);
                setTimeout(() => {
                  navigate('/dashboard');
                  window.scrollTo(0, 0);
                }, 300);
              }}
              className="text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg transition font-medium"
            >
              Dashboard
            </button>
<button 
              onClick={() => {
                setIsPageLoading(true);
                setTimeout(() => {
                  navigate('/');
                  window.scrollTo(0, 0);
                }, 300);
              }}
              className="text-purple-600 hover:bg-purple-50 p-2 rounded-lg transition"
            >
              <Home size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <MessageCircle className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about BrightReading
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-start gap-4 flex-1">
                  <HelpCircle className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                </div>
                <div className="text-gray-400 ml-4 flex-shrink-0">
                  {expandedFaq === faq.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              {expandedFaq === faq.id && (
                <div className="px-6 pb-6 pl-16">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <MessageCircle className="mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            We're here to help! Check out our Parent Guide for tips and best practices, or reach out to our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setIsPageLoading(true);
                setTimeout(() => {
                  navigate('/parent-guide');
                  window.scrollTo(0, 0);
                }, 300);
              }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-lg"
            >
              View Parent Guide
            </button>
           <button
              onClick={() => {
                setIsPageLoading(true);
                setTimeout(() => {
                  navigate('/contact');
                  window.scrollTo(0, 0);
                }, 300);
              }}
              className="bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-800 transition border-2 border-white"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
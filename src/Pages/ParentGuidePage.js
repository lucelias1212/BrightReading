import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Home, Heart, Clock, Target, Lightbulb, CheckCircle, AlertCircle, Star, TrendingUp, Users, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const ParentGuidePage = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const quickTips = [
    {
      icon: <Clock className="text-blue-600" size={24} />,
      title: "Keep It Short",
      description: "10 minutes is perfect. Stop if your child loses interest - you can always try again later!"
    },
    {
      icon: <Heart className="text-pink-600" size={24} />,
      title: "Make It Fun",
      description: "Use silly voices, dance, and be playful. Learning should feel like playtime, not a chore."
    },
    {
      icon: <Target className="text-green-600" size={24} />,
      title: "Stay Consistent",
      description: "3-5 times per week is ideal. Regular short sessions beat occasional long ones."
    },
    {
      icon: <Star className="text-purple-600" size={24} />,
      title: "Celebrate Everything",
      description: "Praise effort, not just success. 'You tried so hard!' is just as good as 'You got it!'"
    }
  ];

  const dosDonts = {
    dos: [
      "Follow your child's lead - if they're excited about a particular activity, do more of it",
      "Use lots of praise and encouragement throughout the activity",
      "Adapt activities to your child's energy level and mood",
      "Read books together every day, even outside of activities",
      "Point out letters and words in everyday life (signs, labels, menus)",
      "Make learning multi-sensory: touch, see, hear, move"
    ],
    donts: [
      "Don't force it if your child is tired, hungry, or upset",
      "Don't worry about perfection - progress is what matters",
      "Don't compare your child to others - every child learns at their own pace",
      "Don't turn it into a test - keep the tone light and playful",
      "Don't skip the 'play' activities - they're teaching important skills",
      "Don't stress if you miss days - just pick up where you left off"
    ]
  };

  const ageSpecificTips = [
    {
      age: "Ages 1-2",
      emoji: <img src="/assets/P1F.png" alt="Phase 1" className="w-16 h-16 object-contain" />,
      color: "from-pink-400 to-rose-500",
      tips: [
        "Attention spans are 1-3 minutes - do activities in very short bursts",
        "Repetition is key - they love hearing the same songs and stories",
        "Follow their interests - if they love trucks, read books about trucks",
        "Physical movement helps learning - clap, dance, and wiggle together",
        "Don't worry about 'getting it right' - exposure is the goal"
      ]
    },
{
      age: "Ages 2-3",
      emoji: <img src="/assets/P2F.png" alt="Phase 2" className="w-16 h-16 object-contain" />,
      color: "from-green-400 to-teal-500",
      tips: [
        "They can focus for 5-8 minutes on something interesting",
        "Give lots of choices: 'Should we read this book or that book?'",
        "Encourage them to 'help' you - point to pictures, turn pages",
        "Use their growing vocabulary - ask 'what's this?' about everything",
        "Make silly mistakes on purpose so they can correct you"
      ]
    },
{
      age: "Ages 3-4",
      emoji: <img src="/assets/P3F.png" alt="Phase 3" className="w-16 h-16 object-contain" />,
      color: "from-blue-400 to-indigo-500",
      tips: [
        "Can usually focus for 10-15 minutes with engaging activities",
        "Ask lots of questions during stories: 'What do you think happens next?'",
        "Let them retell stories in their own words (it's okay if it's different!)",
        "Connect learning to their life: 'That starts with the same sound as your name!'",
        "Encourage writing attempts - scribbles and invented spelling are great!"
      ]
    },
    {
      age: "Ages 4-5",
      emoji: <img src="/assets/P4F.png" alt="Phase 4" className="w-16 h-16 object-contain" />,
      color: "from-indigo-400 to-purple-500",
      tips: [
        "Can focus for 15-20 minutes, especially with varied activities",
        "Challenge them gently: 'Can you find all the B's on this page?'",
        "Let them be the teacher - have them 'read' to stuffed animals",
        "Practice writing their name and other important words",
        "Celebrate their reading attempts, even if they're just memorizing"
      ]
    }
  ];

  const troubleshooting = [
    {
      problem: "My child won't sit still",
      solution: "That's totally normal! Try doing activities while moving - read while swinging, practice letters while jumping. Learning doesn't have to happen sitting down."
    },
    {
      problem: "They're not interested in the activity",
      solution: "Skip that activity and try a different one, or come back to it another day. You can also adapt activities to their current interests (dinosaurs, princesses, trucks, etc.)."
    },
    {
      problem: "I don't have time every day",
      solution: "That's okay! Even 3 days a week makes a difference. Quality beats quantity. Also, you can split activities throughout the day - one in the morning, one at bedtime."
    },
    {
      problem: "My child is ahead/behind the age range",
      solution: "Use the phase that matches their skill level, not their age. It's perfectly fine to move between age groups based on what they're ready for."
    },
    {
      problem: "I feel silly doing the activities",
      solution: "That feeling goes away quickly! Kids respond to enthusiasm. The sillier you are, the more fun they have. Plus, nobody's watching - it's just you and your child."
    },
    {
      problem: "We missed a lot of activities",
      solution: "No problem! There's no 'behind' in early learning. Just start where you are. The activities build on each other, but it's not a race."
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How long should each activity take?",
      answer: "Aim for 10 minutes, but let your child guide you. Some days they'll want more, some days less. The key is keeping it fun and pressure-free. If you're both enjoying it and have time, going to 15-20 minutes is fine!"
    },
    {
      id: 2,
      question: "What if my child already knows some of this content?",
      answer: "Great! You can move through those activities quickly or skip ahead to more challenging material. The activity book is flexible - use it as a guide, not a rigid rulebook. Start with an assessment to find the right level."
    },
    {
      id: 3,
      question: "Do I need to buy special materials?",
      answer: "No! Most activities use common household items: paper, crayons, toys you already have. When books are suggested, you can use any books from your library. We provide printables when needed."
    },
    {
      id: 4,
      question: "What if I miss several days or weeks?",
      answer: "Just pick up where you left off! There's no penalty for breaks. Life happens - vacations, illness, busy periods. The activities will still be here when you're ready to return."
    },
    {
      id: 5,
      question: "Is this enough, or should I also do preschool/other programs?",
      answer: "BrightReading is a comprehensive literacy activity book designed to complement (not replace) other learning experiences. Preschool, playgroups, library storytime - all of these are wonderful additions!"
    },
    {
      id: 6,
      question: "My child is learning two languages. Will this work?",
      answer: "Yes! The skills taught (sound awareness, letter recognition, comprehension) transfer across languages. You can adapt activities to either language or switch between them."
    },
    {
      id: 7,
      question: "When will my child start reading?",
      answer: "Every child is different! Some start recognizing words by 4, others at 6 or 7 - both are normal. What matters is building strong foundations. Trust the process and celebrate small wins along the way."
    }
  ];

  return (
<div className={`min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>      {/* Navigation */}
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
            <Users className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Parent Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to make learning fun, effective, and stress-free
          </p>
        </div>

        {/* Quick Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickTips.map((tip, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Do's and Don'ts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-green-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Do</h3>
              </div>
              <ul className="space-y-3">
                {dosDonts.dos.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-red-600" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Don't</h3>
              </div>
              <ul className="space-y-3">
                {dosDonts.donts.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="text-red-600 mt-1 flex-shrink-0">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Age-Specific Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Age-Specific Tips</h2>
          <div className="space-y-6">
            {ageSpecificTips.map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <span className="text-5xl">{section.emoji}</span>
                    <h3 className="text-2xl font-bold">{section.age}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {section.tips.map((tip, tidx) => (
                      <li key={tidx} className="flex gap-3 items-start">
                        <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Challenges & Solutions</h2>
          <div className="space-y-4">
            {troubleshooting.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">"{item.problem}"</h3>
                    <p className="text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Encouragement */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <TrendingUp className="mx-auto mb-4" size={48} />
          <h2 className="text-3xl font-bold mb-4">You've Got This!</h2>
          <p className="text-xl mb-2 opacity-95 max-w-2xl mx-auto">
            Remember: You're already your child's first and best teacher. 
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Every moment you spend reading, playing, and learning together is making a difference. 
            Celebrate the small wins, be patient with the challenges, and most importantly - have fun!
          </p>
<button
            onClick={() => {
              setIsPageLoading(true);
              setTimeout(() => {
                navigate('/dashboard');
                window.scrollTo(0, 0);
              }, 300);
            }}
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition shadow-lg hover:shadow-2xl transform hover:scale-105"
          >
            Start Your Next Activity →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParentGuidePage;
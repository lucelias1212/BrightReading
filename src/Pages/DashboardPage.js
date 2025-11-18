import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../UserContext';
import { getLesson } from '../data/lessons';
import { BookOpen, Home, User, Star, Heart, Calendar, Award, Play, CheckCircle, Target, ArrowRight, ChevronDown, ChevronUp, Users, UserPlus, Send, X, Check, Flame, TrendingUp, MessageCircle, Zap, Gamepad2, Sparkles } from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, userData, completeLesson, updateProfile, switchPhase, sendFriendRequest, acceptFriendRequest, createCircle } = useUser();
  const [greeting, setGreeting] = useState('');
  const location = useLocation();
const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedQuarter, setExpandedQuarter] = useState(null);
  const [closingQuarter, setClosingQuarter] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendEmail, setFriendEmail] = useState('');
  const [addFriendError, setAddFriendError] = useState('');
  const [addFriendSuccess, setAddFriendSuccess] = useState('');
  const [showNewCircle, setShowNewCircle] = useState(false);
  const [showWelcomeTour, setShowWelcomeTour] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [newCircleName, setNewCircleName] = useState('');
  const [newCircleDesc, setNewCircleDesc] = useState('');

  const userName = user?.email?.split('@')[0] || "Parent";
  
  // Phase-specific data
  const currentPhase = userData?.currentPhase || 1;
  const phaseData = userData?.phaseProgress?.[currentPhase] || { completedLessons: [], lessonCompletionDates: {} };
  const completedLessons = phaseData.completedLessons || [];
  
  const currentWeek = Math.floor(completedLessons.length / 5) + 1;
  const selectedAge = userData?.selectedAge || null;
  const currentStreak = userData?.currentStreak || 0;
  const childName = userData?.childName || 'Your baby';
  const friends = userData?.friends || [];
  const friendRequests = userData?.friendRequests || [];
  const circles = userData?.circles || [];

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if this is first time user
    const hasSeenTour = userData?.hasSeenWelcomeTour;
    if (!hasSeenTour && !isPageLoading) {
      setShowWelcomeTour(true);
    }
  }, [userData, isPageLoading]);

  const handleTabChange = (tab) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 200);
  };

  const handleNavigate = (path) => {
    setIsPageLoading(true);
    setTimeout(() => navigate(path), 300);
  };

  const handleSwitchPhase = async (phaseNum) => {
    await switchPhase(phaseNum);
  };

  const handleAddFriend = async (e) => {
    e.preventDefault();
    setAddFriendError('');
    setAddFriendSuccess('');

    if (!friendEmail.trim()) {
      setAddFriendError('Please enter an email address');
      return;
    }

    const result = await sendFriendRequest(friendEmail);
    if (result.success) {
      setAddFriendSuccess(`Friend request sent to ${friendEmail}!`);
      setFriendEmail('');
      setTimeout(() => {
        setShowAddFriend(false);
        setAddFriendSuccess('');
      }, 2000);
    } else {
      setAddFriendError(result.error || 'Failed to send request');
    }
  };

  const handleAcceptFriend = async (requesterId) => {
    await acceptFriendRequest(requesterId);
  };

  const handleCreateCircle = async (e) => {
    e.preventDefault();
    if (!newCircleName.trim()) return;
    
    const result = await createCircle(newCircleName, newCircleDesc);
    if (result.success) {
      setShowNewCircle(false);
      setNewCircleName('');
      setNewCircleDesc('');
    }
  };

  const getNextLessonInfo = () => {
    if (completedLessons.length === 0) {
      return { week: 1, lesson: 1, lessonInWeek: 1 };
    }
    const maxCompleted = Math.max(...completedLessons);
    const nextLesson = maxCompleted + 1;
    const week = Math.floor((nextLesson - 1) / 5) + 1;
    const lessonInWeek = ((nextLesson - 1) % 5) + 1;
    return { week, lesson: nextLesson, lessonInWeek };
  };

  const getWeekProgress = () => {
    const lessonsThisWeek = completedLessons.filter((lessonNum) => {
      const lessonWeek = Math.floor((lessonNum - 1) / 5) + 1;
      return lessonWeek === currentWeek;
    }).length;
    return lessonsThisWeek;
  };

  const getWeekLessons = (weekNum) => {
    const startLesson = (weekNum - 1) * 5 + 1;
    return Array.from({ length: 5 }, (_, i) => startLesson + i);
  };

  const isLessonCompleted = (lessonNum) => completedLessons.includes(lessonNum);

  const getCurrentQuarter = () => Math.ceil(currentWeek / 13);

  const getQuarterProgress = (quarterNum) => {
    const startWeek = (quarterNum - 1) * 13 + 1;
    const endWeek = quarterNum * 13;
    const weeksInQuarter = Array.from({ length: 13 }, (_, i) => startWeek + i);
    const completedWeeks = weeksInQuarter.filter(week => {
      const lessonsInWeek = completedLessons.filter(lessonNum => {
        const lessonWeek = Math.floor((lessonNum - 1) / 5) + 1;
        return lessonWeek === week;
      });
      return lessonsInWeek.length === 5;
    });
    return { completed: completedWeeks.length, total: 13 };
  };

  const nextLesson = getNextLessonInfo();
  const weekProgress = getWeekProgress();
  const totalProgress = Math.round((completedLessons.length / 260) * 100);

  const phases = [
    { id: 1, name: 'Phase 1', subtitle: '1-2 Years', color: 'from-pink-400 to-rose-500', icon: '/assets/P1F.png' },
    { id: 2, name: 'Phase 2', subtitle: '2-3 Years', color: 'from-green-400 to-teal-500', icon: '/assets/P2F.png' },
    { id: 3, name: 'Phase 3', subtitle: '3-4 Years', color: 'from-blue-400 to-indigo-500', icon: '/assets/P3F.png' },
    { id: 4, name: 'Phase 4', subtitle: '4-5 Years', color: 'from-indigo-400 to-purple-500', icon: '/assets/P4F.png' }
  ];

  const quarterThemes = {
    1: { name: 'Quarter 1', theme: 'Foundation Building', color: 'from-pink-400 to-rose-500', icon: '/assets/Q1.png' },
    2: { name: 'Quarter 2', theme: 'Skills Development', color: 'from-orange-400 to-amber-500', icon: '/assets/Q2.png' },
    3: { name: 'Quarter 3', theme: 'Knowledge Expansion', color: 'from-blue-400 to-indigo-500', icon: '/assets/Q3.png' },
    4: { name: 'Quarter 4', theme: 'Mastery & Review', color: 'from-purple-400 to-pink-500', icon: '/assets/Q4.png' }
  };

  const tabs = [
    { id: 'home', label: 'Home', icon: '/assets/Home.png' },
    { id: 'progress', label: 'My Progress', icon: '/assets/My Progress.png' },
    { id: 'curriculum', label: 'Curriculum', icon: '/assets/Curriculum.png' },
    { id: 'community', label: 'Community', icon: '/assets/Community.png' },
    { id: 'enrichment', label: 'Enrichment', icon: '/assets/Enrichment.png' }
  ];

  const currentPhaseInfo = phases.find(p => p.id === currentPhase);

// HOME TAB
const HomeTab = () => {
  const parentFirstName = userData?.parentName?.split(' ')[0] || "Friend";
  
  // Get children names for greeting
  const children = userData?.children || [];
  const childNames = children.length > 0 
    ? children.map(c => c.name).filter(Boolean)
    : [userData?.childName].filter(Boolean);
  
  const childrenGreeting = childNames.length === 0 
    ? "your little one"
    : childNames.length === 1 
    ? childNames[0]
    : childNames.length === 2
    ? `${childNames[0]} and ${childNames[1]}`
    : `${childNames.slice(0, -1).join(', ')}, and ${childNames[childNames.length - 1]}`;
  
  return (
    <div>
{/* Warm Welcome Banner */}
      <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-pink-100 rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-white relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-black uppercase tracking-wide mb-4 shadow-lg border-2 border-white">
            <Sparkles size={16} />
            Welcome back!
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-3 leading-tight">
            Hi {parentFirstName}! 👋
          </h1>
          <p className="text-2xl text-gray-800 font-black mb-2">
            You're doing an amazing job with {childrenGreeting}.
          </p>
          <p className="text-xl text-gray-700 font-semibold">
            Every little moment counts. Let's make today's learning fun and joyful.
          </p>
        </div>
      </div>

{/* Phase Selector */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-purple-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl"></div>
        <h3 className="text-3xl font-black text-gray-900 mb-6 relative z-10">Learning Phase</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {phases.map((phase) => {
            const phaseProgress = userData?.phaseProgress?.[phase.id] || { completedLessons: [] };
            const phaseComplete = Math.round((phaseProgress.completedLessons.length / 260) * 100);
            return (
              <button
                key={phase.id}
                onClick={() => handleSwitchPhase(phase.id)}
                className={`p-6 rounded-2xl border-4 transition transform hover:scale-110 active:scale-95 hover:shadow-2xl ${
                  currentPhase === phase.id
                    ? `bg-gradient-to-br ${phase.color} text-white border-white shadow-2xl ring-4 ring-purple-300`
                    : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 hover:border-purple-300 shadow-lg'
                }`}
              >
                <div className="text-4xl mb-3">
                  <img src={phase.icon} alt={phase.name} className="w-20 h-20 object-contain mx-auto drop-shadow-lg" />
                </div>
                
                <div className={`font-black text-lg ${currentPhase === phase.id ? 'text-white' : 'text-gray-900'}`}>
                  {phase.name}
                </div>
                <div className={`text-sm font-bold ${currentPhase === phase.id ? 'text-white/90' : 'text-gray-600'}`}>
                  {phase.subtitle}
                </div>
                <div className={`text-xs mt-2 font-black ${currentPhase === phase.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {phaseComplete}% complete
                </div>
              </button>
            );
          })}
        </div>
        <p className="text-sm text-gray-700 font-bold mt-6 text-center bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-4 border-3 border-blue-300 shadow-md relative z-10">
          💡 Switch phases anytime! Your progress is saved for each phase.
        </p>
      </div>

      {completedLessons.length === 0 ? (
        <div className={`bg-gradient-to-br ${currentPhaseInfo?.color} rounded-3xl p-12 text-center text-white shadow-2xl mb-8 relative overflow-hidden border-4 border-white`}>
          <div className="absolute top-4 right-8 text-9xl opacity-20">🎈</div>
          <div className="absolute bottom-4 left-8 text-7xl opacity-15">✨</div>
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-4 drop-shadow-lg">Let's Get Started!</h2>
            <p className="text-2xl mb-4 opacity-95 font-bold">Begin {childName}'s reading journey in {currentPhaseInfo?.name}</p>
            <p className="text-xl mb-8 opacity-90 font-semibold max-w-2xl mx-auto">
              Don't worry about being perfect. You just need to show up and have fun together.
            </p>
            <button
              onClick={() => handleNavigate('/lesson/1')}
              className="bg-white text-purple-600 px-12 py-6 rounded-full font-black text-2xl hover:bg-gray-50 transition shadow-2xl transform hover:scale-110 active:scale-95 inline-flex items-center gap-3 border-4 border-purple-200"
            >
              <Play size={32} />
              Start First Lesson
            </button>
          </div>
        </div>
      ) : (
        <div className={`bg-gradient-to-br ${currentPhaseInfo?.color} rounded-3xl p-10 text-white shadow-2xl mb-8 relative overflow-hidden border-4 border-white`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-black uppercase tracking-wide mb-4 border-2 border-white/50 shadow-lg">
                <Zap size={16} />
                {currentPhaseInfo?.name.toUpperCase()} • CONTINUE LEARNING
              </div>
              <h2 className="text-4xl font-black mb-3 drop-shadow-lg">Week {nextLesson.week}, Lesson {nextLesson.lessonInWeek}</h2>
              <p className="text-xl opacity-95 mb-6 font-bold">
                You're crushing it! {childName} is learning so much from you. Let's keep the momentum going.
              </p>
              <button
                onClick={() => handleNavigate(`/lesson/${nextLesson.lesson}`)}
                className="bg-white text-purple-600 px-10 py-5 rounded-full font-black text-xl hover:bg-gray-50 transition shadow-2xl inline-flex items-center gap-3 border-4 border-purple-200 transform hover:scale-110 active:scale-95"
              >
                <Play size={28} />
                Continue Lesson
              </button>
            </div>
            <div className="bg-white/30 backdrop-blur-md rounded-3xl p-8 text-center min-w-[160px] border-4 border-white/50 shadow-2xl">
              <div className="text-6xl font-black mb-2 drop-shadow-lg">{totalProgress}%</div>
              <div className="text-base opacity-95 font-bold">{currentPhaseInfo?.name}</div>
              <div className="text-sm opacity-80 mt-2 font-semibold">{completedLessons.length}/260</div>
            </div>
          </div>
        </div>
      )}

      {completedLessons.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-xl p-6 text-center border-4 border-purple-300 hover:shadow-2xl transition transform hover:scale-110 active:scale-95">
              <div className="text-5xl font-black text-purple-600 mb-2 drop-shadow-md">{completedLessons.length}</div>
              <div className="text-sm text-purple-900 font-black">Lessons Done</div>
              <div className="text-2xl mt-1 ">🌟</div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-xl p-6 text-center border-4 border-blue-300 hover:shadow-2xl transition transform hover:scale-110 active:scale-95">
              <div className="text-5xl font-black text-blue-600 mb-2 drop-shadow-md">{currentWeek}</div>
              <div className="text-sm text-blue-900 font-black">Current Week</div>
              <div className="text-2xl mt-1 ">🎯</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-xl p-6 text-center border-4 border-green-300 hover:shadow-2xl transition transform hover:scale-110 active:scale-95">
              <div className="text-5xl font-black text-green-600 mb-2 drop-shadow-md">{weekProgress}/5</div>
              <div className="text-sm text-green-900 font-black">This Week</div>
              <div className="text-2xl mt-1 ">💪</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl shadow-xl p-6 text-center border-4 border-orange-300 hover:shadow-2xl transition transform hover:scale-110 active:scale-95">
              <div className="text-5xl font-black text-orange-600 mb-2 drop-shadow-md">{currentStreak}</div>
              <div className="text-sm text-orange-900 font-black">Day Streak</div>
              <div className="text-2xl mt-1 ">🔥</div>
            </div>
          </div>

          {/* Reassurance Message */}
          <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-3xl shadow-2xl p-8 border-4 border-pink-300 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="text-6xl flex-shrink-0 animate-pulse">💕</div>
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-3">You're Doing Great</h3>
                <p className="text-gray-800 font-black text-lg mb-3">
                  Remember: there's no "perfect" way to do this. Every parent feels a little nervous sometimes, and that's totally okay. You showing up today? That's what matters.
                </p>
                <p className="text-gray-800 font-black text-lg">
                  Each little lesson is a gift you're giving {childName}. Enjoy the journey together.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Current Week Lessons */}
      {completedLessons.length > 0 && (
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-4 border-blue-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"></div>
          <h3 className="text-3xl font-black text-gray-900 mb-6 relative z-10">This Week's Lessons</h3>
          <div className="space-y-3 relative z-10">
{getWeekLessons(currentWeek).map((lessonNum, idx) => {
  const lessonData = getLesson(lessonNum, currentPhase); 
  return (
                <div
                  key={lessonNum}
                  className={`flex items-center justify-between p-6 rounded-2xl transition transform hover:scale-105 shadow-lg border-3 ${
                    isLessonCompleted(lessonNum) 
                      ? 'bg-gradient-to-r from-green-100 to-teal-100 border-green-300 hover:shadow-green-200' 
                      : 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 hover:border-purple-400 hover:shadow-purple-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {isLessonCompleted(lessonNum) ? (
                      <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-full p-3 shadow-lg border-2 border-white">
                        <CheckCircle size={28} />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full border-4 border-gray-400 flex items-center justify-center bg-white shadow-md">
                        <span className="text-gray-500 font-black text-xl">{idx + 1}</span>
                      </div>
                    )}
                    <div>
                      <div className="font-black text-gray-900 text-xl">{lessonData?.theme || `Lesson ${idx + 1}`}</div>
                      <div className="text-sm font-bold flex items-center gap-2">
                        {isLessonCompleted(lessonNum) ? (
                          <span className="text-green-700">✓ Completed</span>
                        ) : (
                          <span className="text-gray-600">Not started</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNavigate(`/lesson/${lessonNum}`)}
                    className={`px-8 py-4 rounded-xl font-black transition shadow-lg transform hover:scale-110 active:scale-95 ${
                      isLessonCompleted(lessonNum)
                        ? 'bg-gradient-to-r from-green-400 to-teal-400 text-white hover:from-green-500 hover:to-teal-500 border-2 border-white'
                        : `bg-gradient-to-r ${currentPhaseInfo?.color} text-white hover:shadow-2xl border-2 border-white`
                    }`}
                  >
                    {isLessonCompleted(lessonNum) ? 'Review' : 'Start'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

//PROGRESS TAB
const ProgressTab = () => {
  // Calculate total progress across all phases for achievements
  const allPhasesTotal = Object.values(userData?.phaseProgress || {}).reduce((sum, phase) => {
    return sum + (phase.completedLessons?.length || 0);
  }, 0);

  const achievements = [
  { id: 1, name: 'First Steps', desc: 'Started your journey!', icon: '/assets/BabyStepsAch.png', unlocked: allPhasesTotal >= 1 },
  { id: 2, name: 'Week Warrior', desc: 'Finished a week', icon: '/assets/WeekWarriorAch.png', unlocked: allPhasesTotal >= 5 },
  { id: 3, name: 'Month Master', desc: 'Completed 4 weeks', icon: '/assets/MonthMasterAch.png', unlocked: allPhasesTotal >= 20 },
  { id: 4, name: 'Quarter Champ', desc: 'Finished 13 weeks!', icon: '/assets/QuarterChampAch.png', unlocked: allPhasesTotal >= 65 },
  { id: 5, name: 'Phase Complete!', desc: 'Finished a phase!', icon: '/assets/Phase1Ach.png', unlocked: allPhasesTotal >= 260 },
  { id: 6, name: 'Two Phases!', desc: '2 phases done!', icon: '/assets/Phase2Ach.png', unlocked: allPhasesTotal >= 520 },
  { id: 7, name: 'Three Phases!', desc: '3 phases done!', icon: '/assets/Phase3Ach.png', unlocked: allPhasesTotal >= 780 },
  { id: 8, name: 'Ultimate Reader!', desc: 'All 4 phases!', icon: '/assets/Phase4Ach.png', unlocked: allPhasesTotal >= 1040 }
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked);
    const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div>
      {/* Main Progress Card */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border-4 border-purple-200">
        <h3 className="text-3xl font-black text-gray-900 mb-2 flex items-center gap-3"><img src="/assets/PP.png" alt="progress" className="w-16 h-16 object-contain" />
          {currentPhaseInfo?.name} Progress
        </h3>
        <p className="text-gray-600 font-semibold mb-8">You're on an amazing journey!</p>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span className="font-bold">Overall Progress</span>
            <span className="font-black text-purple-600 text-lg">{totalProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden shadow-md">
            <div
              className={`bg-gradient-to-r ${currentPhaseInfo?.color} h-8 rounded-full transition-all duration-500 flex items-center justify-end pr-4`}
              style={{ width: `${totalProgress}%` }}
            >
              {totalProgress > 15 && <span className="text-white text-xs font-black">{totalProgress}%</span>}
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 font-semibold">
            {completedLessons.length} of 260 lessons completed in {currentPhaseInfo?.name}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl border-3 border-purple-300">
            <div className="text-5xl font-black text-purple-600 mb-2">{completedLessons.length}</div>
            <div className="text-gray-700 font-bold">Total Lessons</div>
            <div className="text-xs text-purple-600 font-semibold mt-2">in this phase</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl border-3 border-blue-300">
            <div className="text-5xl font-black text-blue-600 mb-2">{Math.max(0, currentWeek - 1)}</div>
            <div className="text-gray-700 font-bold">Weeks Finished</div>
            <div className="text-xs text-blue-600 font-semibold mt-2">keep it up!</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl border-3 border-green-300">
            <div className="text-5xl font-black text-green-600 mb-2">{currentStreak}</div>
            <div className="text-gray-700 font-bold">Day Streak</div>
            <div className="text-xs text-green-600 font-semibold mt-2">on fire!</div>
          </div>
        </div>
      </div>

      {/* Progress by Quarter */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border-4 border-blue-200">
<h3 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3"><img src="/assets/QP.png" alt="quarter" className="w-16 h-16 object-contain" />
          Progress by Quarter
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((quarterNum) => {
            const quarterInfo = quarterThemes[quarterNum];
            const progress = getQuarterProgress(quarterNum);
            const progressPercent = Math.round((progress.completed / 13) * 100);
            const isCurrentQuarter = getCurrentQuarter() === quarterNum;

            return (
              <div
                key={quarterNum}
                className={`bg-gradient-to-br ${quarterInfo.color} rounded-2xl p-6 text-white border-4 border-white shadow-lg ${
                  isCurrentQuarter ? 'ring-4 ring-purple-500 ring-offset-2' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-5xl">
                      <img src={quarterInfo.icon} alt={quarterInfo.name} className="w-14 h-14 object-contain" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black">{quarterInfo.name}</h4>
                      <p className="text-sm font-semibold opacity-90">{quarterInfo.theme}</p>
                    </div>
                  </div>
                  {isCurrentQuarter && (
                    <span className="bg-white/30 backdrop-blur px-4 py-2 rounded-full text-sm font-black border-2 border-white/50">
                      NOW
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-bold">Progress</span>
                    <span className="font-black">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-white/30 rounded-full h-4 overflow-hidden border-2 border-white/50">
                    <div
                      className="bg-white h-4 rounded-full transition-all duration-500 font-black"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="text-xs font-bold mt-3 opacity-90">
                    {progress.completed} of 13 weeks completed
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-3xl shadow-xl p-8 text-white mb-8 border-4 border-white relative overflow-hidden">
        <div className="absolute top-0 right-0 text-9xl opacity-15">🏆</div>
        
        <div className="flex items-center justify-between mb-6 relative z-10"><div className="flex items-center gap-3"><img src="/assets/Achievements.png" alt="achievements" className="w-16 h-16 object-contain" />
            <div>
              <h3 className="text-3xl font-black">Your Achievements</h3>
              <p className="text-white/90 text-lg font-bold">Across all learning phases</p>
            </div>
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl px-6 py-3 text-center border-2 border-white/50">
            <div className="text-3xl font-black">{unlockedCount}/{achievements.length}</div>
            <div className="text-sm font-bold">Unlocked</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2 relative z-10">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`rounded-2xl p-5 flex items-center gap-4 transition transform border-2 ${
                achievement.unlocked
                  ? 'bg-white/30 backdrop-blur-sm hover:scale-105 shadow-lg border-white/50'
                  : 'bg-white/10 opacity-50 border-white/20'
              }`}
            >
              <img src={achievement.icon} alt={achievement.name} className={`w-16 h-16 object-contain flex-shrink-0 ${achievement.unlocked ? '' : 'opacity-50'}`} />
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-lg">{achievement.name}</h4>
                <p className="text-sm text-white/90 font-semibold">{achievement.desc}</p>
              </div>
              {achievement.unlocked && (
                <div className="bg-white/40 p-2 rounded-full flex-shrink-0 border-2 border-white">
                  <CheckCircle size={24} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {allPhasesTotal > 0 && (
          <div className="mt-6 text-center bg-white/25 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/50 relative z-10">
            <p className="font-black text-lg">
              {unlockedCount === achievements.length 
                ? "You got them all! Amazing!" 
                : `${achievements.length - unlockedCount} more to unlock!`}
            </p>
            <p className="text-sm font-bold text-white/90 mt-2">
              Total lessons across all phases: {allPhasesTotal}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

  // CURRICULUM TAB
  const CurriculumTab = () => (
  <div>
    {/* Header with Full Curriculum Link */}
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 rounded-3xl shadow-2xl p-8 mb-6 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">{currentPhaseInfo?.name} Curriculum</h3>
            <p className="text-xl opacity-95 mb-2">52 weeks organized into 4 quarters</p>
            <p className="text-sm opacity-80">Quick overview of your learning path</p>
          </div>
          <button
            onClick={() => handleNavigate('/curriculum')}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3 whitespace-nowrap"
          >
            <BookOpen size={24} />
            View Full Curriculum
          </button>
        </div>
      </div>
    </div>

    {/* Quick Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-md p-4 text-center border-2 border-purple-200">
        <div className="text-3xl font-bold text-purple-600 mb-1">{currentWeek}</div>
        <div className="text-xs text-gray-600 font-medium">Current Week</div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-4 text-center border-2 border-blue-200">
        <div className="text-3xl font-bold text-blue-600 mb-1">{getCurrentQuarter()}</div>
        <div className="text-xs text-gray-600 font-medium">Current Quarter</div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-4 text-center border-2 border-green-200">
        <div className="text-3xl font-bold text-green-600 mb-1">{completedLessons.length}</div>
        <div className="text-xs text-gray-600 font-medium">Lessons Done</div>
      </div>
      <div className="bg-white rounded-xl shadow-md p-4 text-center border-2 border-orange-200">
        <div className="text-3xl font-bold text-orange-600 mb-1">{52 - currentWeek + 1}</div>
        <div className="text-xs text-gray-600 font-medium">Weeks Left</div>
      </div>
    </div>

    {/* Quarters Overview */}
    <div className="space-y-6">
      {[1, 2, 3, 4].map((quarterNum) => {
        const quarterInfo = quarterThemes[quarterNum];
        const startWeek = (quarterNum - 1) * 13 + 1;
        const endWeek = quarterNum * 13;
        const weeks = Array.from({ length: 13 }, (_, i) => startWeek + i);
        const progress = getQuarterProgress(quarterNum);
        const progressPercent = Math.round((progress.completed / 13) * 100);
        const isCurrentQuarter = getCurrentQuarter() === quarterNum;
        const isExpanded = expandedQuarter === quarterNum;

        return (
          <div
            key={quarterNum}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <button
              onClick={() => {
                if (isExpanded) {
                  setClosingQuarter(quarterNum);
                  setTimeout(() => {
                    setExpandedQuarter(null);
                    setClosingQuarter(null);
                  }, 600);
                } else {
                  setExpandedQuarter(quarterNum);
                }
              }}
              className={`w-full bg-gradient-to-r ${quarterInfo.color} p-6 text-white text-left hover:opacity-95 transition`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">
                    <img src={quarterInfo.icon} alt={quarterInfo.name} className="w-16 h-16 object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-2xl font-bold">{quarterInfo.name}</h4>
                      {isCurrentQuarter && (
                        <span className="bg-white/30 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">
                          Current Quarter
                        </span>
                      )}
                    </div>
                    <p className="text-lg opacity-90">{quarterInfo.theme}</p>
                    <p className="text-sm opacity-75 mt-1">Weeks {startWeek}-{endWeek}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-3xl font-bold">{progressPercent}%</div>
                    <div className="text-xs opacity-75">{progress.completed}/13 weeks</div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp size={32} className="flex-shrink-0" />
                  ) : (
                    <ChevronDown size={32} className="flex-shrink-0" />
                  )}
                </div>
              </div>
            </button>

            {(isExpanded || closingQuarter === quarterNum) && (
              <div className={`p-6 bg-gray-50 ${closingQuarter === quarterNum ? 'animate-slideUp' : 'animate-slideDown'}`}>
                {/* Quarter Overview - Phase & Quarter Specific Goals */}
                <div className="mb-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-2 border-purple-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">👶</span>
                      Goals For Your Baby
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {/* Phase 1 Goals */}
                      {currentPhase === 1 && quarterNum === 1 && "Attend to sounds and rhythms, recognize familiar voices and animal sounds, respond to name and basic cues, and develop sensory curiosity through touch, sound, and motion"}
                      {currentPhase === 1 && quarterNum === 2 && "Recognize and label familiar people, objects, and body parts. Point to objects when named, increase verbal imitation, and begin using first words"}
                      {currentPhase === 1 && quarterNum === 3 && "Notice visual differences in shapes, colors, and patterns. Explore materials through texture and touch, begin basic visual sorting and matching, and connect visual features to spoken words"}
                      {currentPhase === 1 && quarterNum === 4 && "Engage with books by turning pages and pointing. Anticipate repetitive lines in simple books, build comfort with story rhythm, and show early memory of favorite books"}
                      
                      {/* Phase 2 Goals */}
                      {currentPhase === 2 && quarterNum === 1 && "Name familiar people, animals, and objects independently. Listen for rhythm in speech and songs, understand simple 1-2 step directions, and develop confidence expressing needs and ideas"}
                      {currentPhase === 2 && quarterNum === 2 && "Recognize and say beginning letter sounds. Identify letters from name or environment, trace or draw simple lines and shapes, and associate sounds with print"}
                      {currentPhase === 2 && quarterNum === 3 && "Combine 2-3 words into short phrases. Describe actions and feelings using familiar words, recognize rhymes and rhythm, and follow story sequence with pictures"}
                      {currentPhase === 2 && quarterNum === 4 && "Recognize favorite books and retell parts with help. Notice story patterns (beginning/middle/end), identify some printed words or letters independently, and use art or storytelling to express understanding"}
                      
                      {/* Phase 3 Goals */}
                      {currentPhase === 3 && quarterNum === 1 && "Recognize and name all letters A-Z. Identify beginning letter sounds, strengthen fine motor control via tracing or writing attempts, and understand alphabet as part of words"}
                      {currentPhase === 3 && quarterNum === 2 && "Identify beginning and ending sounds. Blend simple CVC sounds (like 'cat' and 'sun'), recognize early word patterns, and strengthen auditory discrimination"}
                      {currentPhase === 3 && quarterNum === 3 && "Retell short stories with characters and sequence. Identify characters' feelings or motivations, predict what happens next, and use vocabulary to describe events"}
                      {currentPhase === 3 && quarterNum === 4 && "Recognize sight words and common phrases. Begin decoding simple sentences, write letters and short words with assistance, and retell and create simple stories independently"}
                      
                      {/* Phase 4 Goals */}
                      {currentPhase === 4 && quarterNum === 1 && "Strengthen decoding of CVC and blend words. Develop fluency with sound blending and word families, recognize and read 10-20 sight words, and read with confidence and enjoyment"}
                      {currentPhase === 4 && quarterNum === 2 && "Form complete sentences in speech and writing. Understand punctuation and sentence boundaries, read short patterned books, and write short sentences independently"}
                      {currentPhase === 4 && quarterNum === 3 && "Understand sequencing, cause/effect, and inference. Use descriptive vocabulary in retelling, identify emotions and lessons in stories, and retell or act out stories with detail"}
                      {currentPhase === 4 && quarterNum === 4 && "Read short paragraphs or early readers independently. Write 3-5 sentence stories with structure, express ideas and experiences in written form, and demonstrate comprehension, emotion, and creativity"}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">👨‍👩‍👧</span>
                      Your Role as Parent
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {/* Phase 1 Parent Goals */}
                      {currentPhase === 1 && quarterNum === 1 && "Build consistent sound-rich routines with songs and naming games. Model enthusiasm and repetition, narrate sensory play, and create daily opportunities for listening and imitation"}
                      {currentPhase === 1 && quarterNum === 2 && "Label everything naturally in conversation. Encourage pointing, gesturing, and early turn-taking. Use books and routines to reinforce naming and celebrate small speech attempts"}
                      {currentPhase === 1 && quarterNum === 3 && "Provide colorful, varied materials to explore. Use descriptive talk during play, encourage sorting or simple matching games, and introduce early creative exploration with safe materials"}
                      {currentPhase === 1 && quarterNum === 4 && "Model joyful daily reading. Encourage participation in stories, reinforce emotional connection during storytime, and celebrate attention, curiosity, and expression"}
                      
                      {/* Phase 2 Parent Goals */}
                      {currentPhase === 2 && quarterNum === 1 && "Model slow, clear speech and repetition. Encourage descriptive talk, use songs and rhymes to build memory, and engage in naming games during routines"}
                      {currentPhase === 2 && quarterNum === 2 && "Introduce alphabet casually through play. Reinforce letters through books and objects, support tracing using finger, sand, or crayons, and link sounds to letters during daily life"}
                      {currentPhase === 2 && quarterNum === 3 && "Encourage conversational back-and-forth. Highlight rhyme and rhythm in songs, play simple picture games, and expand on child's ideas to model sentence building"}
                      {currentPhase === 2 && quarterNum === 4 && "Revisit favorite books frequently. Ask guiding questions about what happens next, encourage creative storytelling with toys or drawings, and celebrate reading confidence with praise and routine"}
                      
                      {/* Phase 3 Parent Goals */}
                      {currentPhase === 3 && quarterNum === 1 && "Encourage daily letter play with magnets, tracing, and songs. Use environmental print for practice, reinforce sounds in natural context, and keep sessions short and celebratory"}
                      {currentPhase === 3 && quarterNum === 2 && "Model sound blending during play. Provide multiple ways to hear and move with sounds, support confidence rather than correction, and introduce sound games during walks or reading"}
                      {currentPhase === 3 && quarterNum === 3 && "Ask reflective story questions about feelings and motivations. Encourage storytelling using pictures or toys, expand child's language with new descriptive words, and model emotional language and empathy"}
                      {currentPhase === 3 && quarterNum === 4 && "Practice sight words in natural play. Encourage independent reading attempts, help write small stories or labels, and celebrate completion of early reader milestones"}
                      
                      {/* Phase 4 Parent Goals */}
                      {currentPhase === 4 && quarterNum === 1 && "Read aloud daily, pointing to each word. Reinforce sound-to-letter correspondence, use short fun decoding games, and track emerging reading confidence"}
                      {currentPhase === 4 && quarterNum === 2 && "Encourage writing simple notes or labels. Praise sentence attempts over perfection, read short books together and point to punctuation, and discuss sentence meaning and structure"}
                      {currentPhase === 4 && quarterNum === 3 && "Ask reflective 'why' and 'how' questions. Encourage dramatization and story acting, introduce story structure (problem to solution), and support empathy and interpretation through talk"}
                      {currentPhase === 4 && quarterNum === 4 && "Provide space and time for independent reading and writing. Celebrate writing efforts through sharing and display, encourage reflection about their stories, and mark milestone transition as a reader"}
                    </p>
                  </div>
                </div>

                {/* Existing week cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {weeks.map((weekNum) => {
                    const lessons = getWeekLessons(weekNum);
                    const completedCount = lessons.filter(l => isLessonCompleted(l)).length;
                    const isCompleted = lessons.every(l => isLessonCompleted(l));
                    const isCurrent = weekNum === currentWeek;

                    return (
                      <div
                        key={weekNum}
                        className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border-2 ${
                          isCurrent ? 'ring-4 ring-purple-500 border-purple-400' : 
                          isCompleted ? 'border-green-400' : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-lg font-bold text-gray-900">Week {weekNum}</div>
                          {isCompleted && (
                            <div className="bg-green-500 text-white rounded-full p-1">
                              <CheckCircle size={18} />
                            </div>
                          )}
                          {isCurrent && !isCompleted && (
                            <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                              Now
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <div className="flex gap-1">
                            {lessons.map((lessonNum) => (
                              <div
                                key={lessonNum}
                                className={`h-2 flex-1 rounded ${
                                  isLessonCompleted(lessonNum) ? 'bg-green-500' : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-xs text-gray-600 mt-2 text-center">
                            {completedCount}/5 lessons
                          </div>
                        </div>

                        <button
                          onClick={() => handleNavigate(`/lesson/${lessons[0]}`)}
                          className={`w-full py-2 rounded-lg font-bold transition text-sm ${
                            isCompleted
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : `bg-gradient-to-r ${currentPhaseInfo?.color} text-white hover:shadow-lg`
                          }`}
                        >
                          {isCompleted ? 'Review' : isCurrent ? 'Continue' : 'Start'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>

    {/* Bottom CTA to Full Curriculum */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 mt-8 border-2 border-blue-200 text-center">
      <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
  <img src="/assets/Curriculum.png" alt="Curriculum" className="w-16 h-16 object-contain" />
</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Want to See the Complete Picture?</h3>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
        Explore the full BrightReading curriculum with detailed breakdowns, learning principles, and what your baby should achieve in each phase.
      </p>
      <button
        onClick={() => handleNavigate('/curriculum')}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-3"
      >
        <BookOpen size={24} />
        View Complete Curriculum Guide
        <ArrowRight size={24} />
      </button>
    </div>
  </div>
);

// COMMUNITY TAB - PAID ACCOUNTS ONLY
const CommunityTab = () => {
  const { 
    user, 
    userData, 
    sendFriendRequest, 
    acceptFriendRequest, 
    rejectFriendRequest, 
    removeFriend,
    createCircle,
    leaveCircle,
    sendCircleMessage,
    reactToCircleMessage,
    getCircleData,
    sendDirectMessage,
    subscribeToDirectMessages,
    subscribeToCircle,
    updateProfile
  } = useUser();
  
  // Check subscription status
  const isPaid = userData?.subscription === 'paid';
  const subscriptionType = userData?.subscription || 'free';

  const [friendUsername, setFriendUsername] = useState('');
  const [friendError, setFriendError] = useState('');
  const [friendSuccess, setFriendSuccess] = useState('');
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showNewCircle, setShowNewCircle] = useState(false);
  const [circleName, setCircleName] = useState('');
  const [circleDesc, setCircleDesc] = useState('');
  const [circleError, setCircleError] = useState('');
  const [rejectingId, setRejectingId] = useState(null);
  const [acceptingId, setAcceptingId] = useState(null);
  
  // Messaging states
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [directMessages, setDirectMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  
  // Circle states
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [circleData, setCircleData] = useState(null);
  const [circleMessages, setCircleMessages] = useState([]);
  const [circleMessageText, setCircleMessageText] = useState('');
  const [loadingCircle, setLoadingCircle] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);
const [isLeaving, setIsLeaving] = useState(false);
const [showShareAchievement, setShowShareAchievement] = useState(false);
  const [isTransitioningCommunity, setIsTransitioningCommunity] = useState(false);
  const [communityView, setCommunityView] = useState('main');
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [includeChildName, setIncludeChildName] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiForMessage, setConfettiForMessage] = useState(null);

  const localFriendRequests = userData?.friendRequests || [];
  const localFriends = userData?.friends || [];
  const localCircles = userData?.circles || [];
  const allPhasesTotal = Object.values(userData?.phaseProgress || {}).reduce((sum, phase) => {
    return sum + (phase.completedLessons?.length || 0);
  }, 0);

  const achievements = [
    { id: 1, name: 'First Steps', desc: 'Started your journey!', icon: '/assets/BabyStepsAch.png', unlocked: allPhasesTotal >= 1 },
{ id: 2, name: 'Week Warrior', desc: 'Finished a week', icon: '/assets/WeekWarriorAch.png', unlocked: allPhasesTotal >= 5 },
{ id: 3, name: 'Month Master', desc: 'Completed 4 weeks', icon: '/assets/MonthMasterAch.png', unlocked: allPhasesTotal >= 20 },
{ id: 4, name: 'Quarter Champ', desc: 'Finished 13 weeks!', icon: '/assets/QuarterChampAch.png', unlocked: allPhasesTotal >= 65 },
{ id: 5, name: 'Phase Complete!', desc: 'Finished a phase!', icon: '/assets/Phase1Ach.png', unlocked: allPhasesTotal >= 260 },
{ id: 6, name: 'Two Phases!', desc: '2 phases done!', icon: '/assets/Phase2Ach.png', unlocked: allPhasesTotal >= 520 },
{ id: 7, name: 'Three Phases!', desc: '3 phases done!', icon: '/assets/Phase3Ach.png', unlocked: allPhasesTotal >= 780 },
{ id: 8, name: 'Ultimate Reader!', desc: 'All 4 phases!', icon: '/assets/Phase4Ach.png', unlocked: allPhasesTotal >= 1040 }
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked);

  // Real-time listener for direct messages
  useEffect(() => {
    if (!selectedFriend) return;

    const unsubscribe = subscribeToDirectMessages(selectedFriend.uid, (messages) => {
      setDirectMessages(messages);
      setLoadingMessages(false);
    });

    return () => unsubscribe();
  }, [selectedFriend, subscribeToDirectMessages]);

// Real-time listener for circle
  useEffect(() => {
    if (!selectedCircle) return;

    const unsubscribe = subscribeToCircle(selectedCircle, (circle) => {
      if (circle) {
        setCircleData(circle);
        setCircleMessages(circle.messages || []);
        
        // Check for new achievement shares and show confetti
        const messages = circle.messages || [];
        const viewedAchievements = userData?.viewedAchievements || [];
        
        messages.forEach((msg) => {
          if (msg.type === 'achievement' && msg.senderId !== user.uid) {
            const msgId = `${msg.senderId}_${msg.achievement.id}_${msg.sentAt}`;
            if (!viewedAchievements.includes(msgId)) {
              setConfettiForMessage(msgId);
              setShowConfetti(true);
              
              // Mark as viewed
              const updatedViewed = [...viewedAchievements, msgId];
              updateProfile({ viewedAchievements: updatedViewed });
              
              // Hide confetti after animation
              setTimeout(() => {
                setShowConfetti(false);
                setConfettiForMessage(null);
              }, 4000);
            }
          }
        });
      }
      setLoadingCircle(false);
    });

    return () => unsubscribe();
  }, [selectedCircle, subscribeToCircle, user, userData, updateProfile]);

  // PAID FEATURE WALL
  if (!isPaid) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl border-4 border-purple-200 p-12 max-w-2xl text-center">
          <div className="text-6xl mb-6">🔒</div>
          
          <h2 className="text-4xl font-black text-gray-900 mb-4">Community Features</h2>
          
          <p className="text-xl text-gray-700 font-semibold mb-8">
            Connect with other parents, join learning circles, and build your support network with our exclusive community features.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border-2 border-purple-200">
            <h3 className="text-2xl font-black text-gray-900 mb-6">What You'll Get:</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <span className="text-3xl">👥</span>
                <div>
                  <p className="font-bold text-gray-900">Connect with Friends</p>
                  <p className="text-sm text-gray-600">Send friend requests and build your parent community</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">💬</span>
                <div>
                  <p className="font-bold text-gray-900">Direct Messaging</p>
                  <p className="text-sm text-gray-600">Chat one-on-one with friends and share experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">🔵</span>
                <div>
                  <p className="font-bold text-gray-900">Learning Circles</p>
                  <p className="text-sm text-gray-600">Create groups for accountability and mutual support</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl">💪</span>
                <div>
                  <p className="font-bold text-gray-900">Group Chat</p>
                  <p className="text-sm text-gray-600">Collaborate with other parents in your circles</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-8 mb-8 text-white">
            <p className="text-sm font-semibold text-white/90 mb-2">CURRENT PLAN</p>
            <p className="text-3xl font-black mb-4 capitalize">{subscriptionType}</p>
            <p className="text-white/90 font-semibold">Upgrade your account to unlock community features</p>
          </div>

          <button
            onClick={() => navigate('/upgrade')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Sparkles size={24} />
            Upgrade Now
          </button>

          <p className="text-xs text-gray-500 mt-6 font-semibold">
            All other features remain available on your current plan
          </p>
        </div>
      </div>
    );
  }

  // ==================== FULL COMMUNITY TAB FOR PAID USERS ====================

  const handleAddFriend = async (e) => {
    e.preventDefault();
    setFriendError('');
    setFriendSuccess('');

    if (!friendUsername.trim()) {
      setFriendError('Please enter a username');
      return;
    }

    const result = await sendFriendRequest(friendUsername);
    if (result.success) {
      setFriendSuccess(`Friend request sent to @${friendUsername}!`);
      setFriendUsername('');
      setTimeout(() => {
        setShowAddFriend(false);  
        setFriendSuccess('');
      }, 2000);
    } else {
      setFriendError(result.error || 'Failed to send request');
    }
  };

  const handleAcceptFriend = async (requesterId) => {
    setAcceptingId(requesterId);
    const result = await acceptFriendRequest(requesterId);
    setAcceptingId(null);
    if (!result.success) {
      setFriendError(result.error || 'Failed to accept request');
      setTimeout(() => setFriendError(''), 3000);
    }
  };

  const handleRejectFriend = async (requesterId) => {
    setRejectingId(requesterId);
    const result = await rejectFriendRequest(requesterId);
    setRejectingId(null);
    if (!result.success) {
      setFriendError(result.error || 'Failed to reject request');
      setTimeout(() => setFriendError(''), 3000);
    }
  };

  const handleRemoveFriend = async (friendId) => {
    const result = await removeFriend(friendId);
    if (!result.success) {
      setFriendError(result.error || 'Failed to remove friend');
      setTimeout(() => setFriendError(''), 3000);
    }
  };

  const handleOpenFriendChat = (friend) => {
    setIsTransitioningCommunity(true);
    setTimeout(() => {
      setSelectedFriend(friend);
      setLoadingMessages(true);
      setCommunityView('friend-chat');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioningCommunity(false);
    }, 200);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!messageText.trim() || !selectedFriend) return;

    const result = await sendDirectMessage(selectedFriend.uid, messageText);
    if (result.success) {
      setMessageText('');
      // Real-time listener will update messages automatically
    } else {
      setFriendError('Failed to send message');
    }
  };

  const handleSendCircleMessage = async (e) => {
    e.preventDefault();
    if (!circleMessageText.trim() || !selectedCircle) return;

    const result = await sendCircleMessage(selectedCircle, circleMessageText);
    if (result.success) {
      setCircleMessageText('');
      // Real-time listener will update messages automatically
    } else {
      setFriendError('Failed to send message');
    }
  };

  const handleOpenCircle = (circleId) => {
    setIsTransitioningCommunity(true);
    setTimeout(() => {
      setSelectedCircle(circleId);
      setLoadingCircle(true);
      setCommunityView('circle-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioningCommunity(false);
    }, 200);
  };

  const handleShareAchievement = async () => {
    if (!selectedAchievement || !selectedCircle) return;

    const achievementMessage = {
      type: 'achievement',
      achievement: selectedAchievement,
      childName: includeChildName ? userData?.childName : null,
      parentName: userData?.parentName || userData?.username
    };

    const result = await sendCircleMessage(selectedCircle, JSON.stringify(achievementMessage), 'achievement');
    if (result.success) {
      setShowShareAchievement(false);
      setSelectedAchievement(null);
    } else {
      setFriendError('Failed to share achievement');
    }
  };

  const handleReactToMessage = async (messageIndex, emoji) => {
    if (!selectedCircle || !circleData) return;

    const result = await reactToCircleMessage(selectedCircle, messageIndex, emoji);
    if (!result.success) {
      setFriendError('Failed to add reaction');
    }
  };

  const handleLeaveCircle = async () => {
  setIsLeaving(true);
  const result = await leaveCircle(selectedCircle);
  setIsLeaving(false);
  if (result.success) {
    setShowLeaveConfirm(false);
    setSelectedCircle(null);
    setCircleData(null);
  } else {
    setFriendError('Failed to leave circle');
    setShowLeaveConfirm(false);
  }
};

  const handleCreateCircle = async (e) => {
    e.preventDefault();
    setCircleError('');

    if (!circleName.trim()) {
      setCircleError('Circle name is required');
      return;
    }

    const result = await createCircle(circleName, circleDesc);
    if (result.success) {
      setCircleName('');
      setCircleDesc('');
      setShowNewCircle(false);
    } else {
      setCircleError(result.error || 'Failed to create circle');
    }
  };


  
  // DIRECT MESSAGE CHAT VIEW
  if (selectedFriend) {
    return (
      <div className={`space-y-4 transition-opacity duration-200 ${isTransitioningCommunity ? 'opacity-0' : 'opacity-100'}`}>
        <button
          onClick={() => {
            setIsTransitioningCommunity(true);
            setTimeout(() => {
              setSelectedFriend(null);
              setDirectMessages([]);
              setCommunityView('main');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsTransitioningCommunity(false);
            }, 200);
          }}
          className="text-purple-600 font-bold hover:underline flex items-center gap-2"
        >
          ← Back to Friends
        </button>

        <div className="bg-white rounded-3xl shadow-lg border-4 border-purple-200 overflow-hidden flex flex-col h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 border-b-4 border-purple-300">
            <h3 className="text-2xl font-black">@{selectedFriend.username}</h3>
            <p className="text-sm text-white/90">{selectedFriend.name}</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {loadingMessages ? (
              <div className="text-center text-gray-500 font-semibold">Loading messages...</div>
            ) : directMessages.length === 0 ? (
              <div className="text-center text-gray-500 font-semibold">No messages yet. Start the conversation!</div>
            ) : (
              directMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.senderId === user.uid ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-5 py-3 rounded-2xl ${
                      msg.senderId === user.uid
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none'
                        : 'bg-white border-2 border-gray-300 text-gray-900 rounded-bl-none'
                    }`}
                  >
                    <p className="font-semibold text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.senderId === user.uid ? 'text-white/70' : 'text-gray-500'}`}>
                      {new Date(msg.sentAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="border-t-4 border-purple-200 p-4 bg-white flex gap-3">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              disabled={!messageText.trim()}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-black transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // CIRCLE VIEW
  if (selectedCircle && circleData) {
    return (
      <div className={`space-y-4 transition-opacity duration-200 ${isTransitioningCommunity ? 'opacity-0' : 'opacity-100'}`}>
        <button
          onClick={() => {
            setIsTransitioningCommunity(true);
            setTimeout(() => {
              setSelectedCircle(null);
              setCircleData(null);
              setCircleMessages([]);
              setCommunityView('main');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsTransitioningCommunity(false);
            }, 200);
          }}
          className="text-blue-600 font-bold hover:underline flex items-center gap-2"
        >
          ← Back to Circles
        </button>

        <div className="bg-white rounded-3xl shadow-lg border-4 border-blue-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 border-b-4 border-blue-300">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-black">{circleData.name}</h3>
                <p className="text-sm text-white/90">{circleData.description}</p>
                <p className="text-xs text-white/80 mt-2">{circleData.members.length} members</p>
              </div>
              {circleData.createdBy === user.uid && (
                <span className="bg-white/30 backdrop-blur px-3 py-1 rounded-full text-xs font-bold">Admin</span>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">
            {/* Members */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-black text-gray-900 mb-4">Members</h4>
              <div className="space-y-3">
                {circleData.members.map((member, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200">
                    <p className="font-black text-gray-900">@{member.username}</p>
                    <p className="text-xs text-gray-600 font-semibold">{member.name}</p>
                    {member.role === 'admin' && (
                      <p className="text-xs text-blue-600 font-black mt-1">👑 Admin</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

{/* Messages */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-black text-gray-900">Messages</h4>
                <button
                  onClick={() => setShowShareAchievement(true)}
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white px-4 py-2 rounded-xl font-bold transition flex items-center gap-2 text-sm"
                >
                  <Award size={16} />
                  Share Achievement
                </button>
              </div>
              
              {/* Confetti Animation */}
              {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute animate-confetti"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: '-10%',
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    >
                      <div
                        className="text-2xl"
                        style={{
                          transform: `rotate(${Math.random() * 360}deg)`
                        }}
                      >
                        {['🎉', '⭐', '🎊', '✨', '🌟', '💫', '🏆'][Math.floor(Math.random() * 7)]}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="bg-gray-50 rounded-2xl p-4 h-80 overflow-y-auto space-y-3 mb-4 border-2 border-gray-200">
                {loadingCircle ? (
                  <div className="text-center text-gray-500 font-semibold">Loading...</div>
                ) : circleMessages.length === 0 ? (
                  <div className="text-center text-gray-500 font-semibold">No messages yet. Start the conversation!</div>
                ) : (
                  circleMessages.map((msg, idx) => (
                    <div key={idx} className={`bg-white rounded-xl p-4 border-l-4 ${msg.type === 'achievement' ? 'border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50' : 'border-blue-400'}`}>
                      {msg.type === 'achievement' ? (
                        <div className="relative">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-3 rounded-2xl border-3 border-yellow-300 shadow-lg">
                              <img src={msg.achievement.icon} alt={msg.achievement.name} className="w-16 h-16 object-contain" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 font-bold mb-1">Achievement Unlocked!</p>
                              <p className="font-black text-gray-900 text-xl">
                                @{msg.username}
                              </p>
                            </div>
                            <div className="text-4xl animate-bounce">🎉</div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-5 border-2 border-yellow-200 mb-3">
                            <h4 className="font-black text-2xl text-gray-900 mb-2 flex items-center gap-2">
                              <span className="text-yellow-500">★</span>
                              {msg.achievement.name}
                              <span className="text-yellow-500">★</span>
                            </h4>
                            <p className="text-gray-700 font-semibold text-lg mb-3">{msg.achievement.desc}</p>
                            {msg.childName && (
                              <div className="bg-white/60 backdrop-blur rounded-xl p-3 border-2 border-purple-200">
                                <p className="text-purple-700 font-black text-center">
                                  🌟 Way to go, {msg.childName}! 🌟
                                </p>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{new Date(msg.sentAt).toLocaleString()}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {['🎉', '👏', '❤️', '🔥', '⭐'].map((emoji) => (
                              <button
                                key={emoji}
                                onClick={() => handleReactToMessage(idx, emoji)}
                                className={`px-3 py-1 rounded-full text-sm font-bold transition ${
                                  msg.reactions?.[emoji]?.includes(user.uid)
                                    ? 'bg-blue-200 border-2 border-blue-400'
                                    : 'bg-gray-100 hover:bg-gray-200 border-2 border-gray-300'
                                }`}
                              >
                                {emoji} {msg.reactions?.[emoji]?.length || 0}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="font-black text-sm text-gray-900">@{msg.username}</p>
                          <p className="text-gray-700 text-sm font-semibold mt-1">{msg.text}</p>
                          <p className="text-xs text-gray-500 mt-2">{new Date(msg.sentAt).toLocaleTimeString()}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {['👍', '❤️', '😊', '🎉', '🔥'].map((emoji) => (
                              <button
                                key={emoji}
                                onClick={() => handleReactToMessage(idx, emoji)}
                                className={`px-3 py-1 rounded-full text-sm font-bold transition ${
                                  msg.reactions?.[emoji]?.includes(user.uid)
                                    ? 'bg-blue-200 border-2 border-blue-400'
                                    : 'bg-gray-100 hover:bg-gray-200 border-2 border-gray-300'
                                }`}
                              >
                                {emoji} {msg.reactions?.[emoji]?.length || 0}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendCircleMessage} className="flex gap-3 mb-4">
                <input
                  type="text"
                  value={circleMessageText}
                  onChange={(e) => setCircleMessageText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  disabled={!circleMessageText.trim()}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-black transition disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </form>

              {circleData.createdBy === user.uid && (
                <button
                  onClick={() => setShowLeaveConfirm(true)}
                  className="w-full bg-red-100 hover:bg-red-200 text-red-600 font-black py-3 rounded-xl transition"
                >
                  Delete Circle
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Leave Confirmation Modal */}
        {showLeaveConfirm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border-4 border-red-200">
              <div className="text-center mb-6">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="text-red-600" size={40} />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-3">
                  {circleData.createdBy === user.uid ? 'Delete Circle?' : 'Leave Circle?'}
                </h2>
                <p className="text-gray-700 font-semibold mb-2">
                  {circleData.createdBy === user.uid 
                    ? `Are you sure you want to delete "${circleData.name}"?`
                    : `Are you sure you want to leave "${circleData.name}"?`
                  }
                </p>
                <p className="text-sm text-gray-600">
                  {circleData.createdBy === user.uid 
                    ? 'This will remove all members and delete all messages. This action cannot be undone.'
                    : 'You can always rejoin if invited again.'
                  }
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowLeaveConfirm(false)}
                  disabled={isLeaving}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-black py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLeaveCircle}
                  disabled={isLeaving}
                  className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black py-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLeaving ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <X size={18} />
                      {circleData.createdBy === user.uid ? 'Delete' : 'Leave'}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Share Achievement Modal */}
        {showShareAchievement && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 border-4 border-yellow-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-gray-900 flex items-center gap-2">
                  <Award className="text-yellow-600" size={32} />
                  Share Your Achievement
                </h2>
                <button
                  onClick={() => {
                    setShowShareAchievement(false);
                    setSelectedAchievement(null);
                  }}
                  className="text-gray-500 hover:text-gray-700 transition"
                >
                  <X size={28} />
                </button>
              </div>

              {!selectedAchievement ? (
                <div>
                  <p className="text-gray-700 mb-6 font-semibold">Select an achievement to share with your circle:</p>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {unlockedAchievements.length === 0 ? (
                      <p className="text-center text-gray-500 py-8">Complete lessons to unlock achievements!</p>
                    ) : (
                      unlockedAchievements.map((achievement) => (
                        <button
                          key={achievement.id}
                          onClick={() => setSelectedAchievement(achievement)}
                          className="w-full bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-5 flex items-center gap-4 hover:from-yellow-100 hover:to-orange-100 transition border-2 border-yellow-200 hover:border-yellow-400"
                        >
<img src={achievement.icon} alt={achievement.name} className="w-16 h-16 object-contain" />
                          <div className="flex-1 text-left">
                            <h4 className="font-black text-lg text-gray-900">{achievement.name}</h4>
                            <p className="text-sm text-gray-600 font-semibold">{achievement.desc}</p>
                          </div>
                          <div className="text-yellow-600">
                            <ArrowRight size={24} />
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-6 border-2 border-yellow-300">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={selectedAchievement.icon} alt={selectedAchievement.name} className="w-20 h-20 object-contain" />
                      <div>
                        <h3 className="text-2xl font-black text-gray-900">{selectedAchievement.name}</h3>
                        <p className="text-gray-700 font-semibold">{selectedAchievement.desc}</p>
                      </div>
                    </div>
                  </div>

                  {userData?.childName && (
                    <div className="mb-6">
                      <label className="flex items-center gap-3 cursor-pointer bg-purple-50 rounded-xl p-4 border-2 border-purple-200 hover:border-purple-400 transition">
                        <input
                          type="checkbox"
                          checked={includeChildName}
                          onChange={(e) => setIncludeChildName(e.target.checked)}
                          className="w-5 h-5 text-purple-600 rounded"
                        />
                        <span className="font-bold text-gray-900">
                          Include {userData.childName}'s name in the message
                        </span>
                      </label>
                    </div>
                  )}

                  <div className="bg-blue-50 rounded-xl p-4 mb-6 border-2 border-blue-200">
                    <p className="text-sm text-blue-900 font-semibold">
                      💡 This achievement will be shared with everyone in the circle, and they'll see confetti the first time they view it!
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedAchievement(null)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-black py-4 rounded-xl transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleShareAchievement}
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-black py-4 rounded-xl transition flex items-center justify-center gap-2"
                    >
                      <Award size={20} />
                      Share Achievement!
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

// MAIN COMMUNITY VIEW
  return (
    <div className={`space-y-6 transition-opacity duration-200 ${isTransitioningCommunity ? 'opacity-0' : 'opacity-100'}`}>
      {friendError && (
        <div className="bg-red-100 border-2 border-red-300 rounded-xl p-4 text-red-700 font-semibold">
          {friendError}
        </div>
      )}

      {/* Friend Requests */}
      {localFriendRequests.length > 0 && (
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl shadow-lg p-8 border-4 border-orange-300">
          <h3 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <UserPlus size={36} className="text-orange-600" />
            Pending Friend Requests ({localFriendRequests.length})
          </h3>
          <div className="space-y-3">
            {localFriendRequests.map((request) => (
              <div 
                key={request.from} 
                className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-md border-2 border-orange-200 hover:border-orange-400 transition"
              >
                <div className="flex-1">
                  <p className="font-black text-gray-900 text-lg">@{request.username}</p>
                  <p className="text-sm text-gray-600 font-semibold">{request.name}</p>
                  {request.childName && (
                    <p className="text-xs text-gray-500 mt-1">👶 {request.childName}</p>
                  )}
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleAcceptFriend(request.from)}
                    disabled={acceptingId === request.from}
                    className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-black transition flex items-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Check size={18} />
                    {acceptingId === request.from ? 'Accepting...' : 'Accept'}
                  </button>
                  <button 
                    onClick={() => handleRejectFriend(request.from)}
                    disabled={rejectingId === request.from}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-xl font-black transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Friends with Messaging */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-4 border-purple-200">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <img src="/assets/Friends.png" alt="friends" className="w-16 h-16 object-contain" />
            <div>
              <h3 className="text-3xl font-black text-gray-900">Your Friends</h3>
              <p className="text-sm text-gray-600 font-semibold">{localFriends.length} friend{localFriends.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddFriend(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-black hover:shadow-lg transition flex items-center gap-2 transform hover:scale-105 shadow-md"
          >
            <UserPlus size={20} />
            Add Friend
          </button>
        </div>

        {localFriends.length === 0 ? (
          <div className="text-center py-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
<div className="mb-4">
  <img src="/assets/Community.png" alt="Community" className="w-24 h-24 object-contain mx-auto" />
</div>
            <h4 className="text-2xl font-black text-gray-900 mb-3">Build Your Community</h4>
            <p className="text-gray-700 mb-6 font-semibold max-w-md mx-auto">Connect with other parents, celebrate milestones together, and share your learning journey.</p>
            <button
              onClick={() => setShowAddFriend(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-black hover:shadow-lg transition inline-flex items-center gap-2 transform hover:scale-105"
            >
              <UserPlus size={20} />
              Invite Your First Friend
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
  {localFriends.map((friend) => (
    <div key={friend.uid} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-3 border-purple-300 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-xl font-black text-gray-900">@{friend.username}</h4>
          <p className="text-sm text-gray-700 font-semibold">{friend.name}</p>
          {friend.childName && (
            <p className="text-xs text-gray-600 mt-2 font-semibold">👶 {friend.childName}</p>
          )}
        </div>
        <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-purple-400 bg-white flex items-center justify-center flex-shrink-0">
          <img 
            src={`/assets/${friend.profilePicture || 'profile1.png'}`}
            alt={friend.username}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleOpenFriendChat(friend)}
          className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <MessageCircle size={18} />
          Message
        </button>
        <button
          onClick={() => handleRemoveFriend(friend.uid)}
          className="bg-red-100 hover:bg-red-200 text-red-600 font-black px-4 py-3 rounded-xl transition"
          title="Remove friend"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  ))}
</div>
        )}
      </div>

      {/* Learning Circles with Messaging */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border-4 border-blue-200">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
<img src="/assets/Circles.png" alt="circles" className="w-16 h-16 object-contain" />
            <div>
              <h3 className="text-3xl font-black text-gray-900">Learning Circles</h3>
              <p className="text-sm text-gray-600 font-semibold">{localCircles.length} circle{localCircles.length !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={() => setShowNewCircle(true)}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-full font-black hover:shadow-lg transition flex items-center gap-2 transform hover:scale-105 shadow-md"
          >
            <Users size={20} />
            Create Circle
          </button>
        </div>

        {localCircles.length === 0 ? (
          <div className="text-center py-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200">
            <div className="text-6xl mb-4">🔵</div>
            <h4 className="text-2xl font-black text-gray-900 mb-3">Start a Circle</h4>
            <p className="text-gray-700 mb-6 font-semibold max-w-md mx-auto">Create a small group of 5-10 parents for focused learning and mutual support.</p>
            <button
              onClick={() => setShowNewCircle(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-black hover:shadow-lg transition inline-flex items-center gap-2 transform hover:scale-105"
            >
              <Users size={20} />
              Create First Circle
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {localCircles.map((circleId, idx) => (
              <button
                key={circleId}
                onClick={() => handleOpenCircle(circleId)}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-3 border-blue-300 hover:shadow-lg transition text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-black text-gray-900">Circle #{idx + 1}</h4>
                    <p className="text-xs text-gray-600 font-semibold">Learning Group</p>
                  </div>
                  <div className="text-4xl">👨‍👩‍👧</div>
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Click to view & chat
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Add Friend Modal */}
{showAddFriend && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border-4 border-purple-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">Add a Friend</h2>
              <button
                onClick={() => {
                  setShowAddFriend(false);
                  setFriendUsername('');
                  setFriendError('');
                  setFriendSuccess('');
                }}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={28} />
              </button>
            </div>

            {friendSuccess ? (
              <div className="text-center py-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-600" size={40} />
                </div>
                <p className="text-lg font-black text-gray-900 mb-2">Request Sent!</p>
                <p className="text-gray-600 font-semibold">{friendSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleAddFriend} className="space-y-4">
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-3">Friend's Username</label>
                  <div className="flex items-center border-3 border-purple-200 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-purple-300">
                    <span className="text-xl font-black text-gray-400 px-4">@</span>
                    <input
                      type="text"
                      value={friendUsername}
                      onChange={(e) => {
                        setFriendUsername(e.target.value.toLowerCase().trim());
                        setFriendError('');
                      }}
                      onBlur={(e) => {
                        setFriendUsername(e.target.value.toLowerCase().trim());
                      }}
                      placeholder="username"
                      className="flex-1 px-4 py-3 focus:outline-none text-xl font-semibold"
                      autoComplete="off"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2 font-semibold">Enter their username to send a friend request</p>
                  {friendError && <p className="text-red-600 text-sm font-black mt-2">{friendError}</p>}
                </div>

                <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-4 border-2 border-blue-200 font-semibold">
                  They'll receive a friend request they can accept or decline.
                </p>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddFriend(false);
                      setFriendUsername('');
                      setFriendError('');
                    }}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-black py-3 rounded-xl transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg text-white font-black py-3 rounded-xl transition flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    <Send size={18} />
                    Send Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

{/* Create Circle Modal */}
      {showNewCircle && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border-4 border-blue-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900">Create Learning Circle</h2>
              <button
                onClick={() => {
                  setShowNewCircle(false);
                  setCircleName('');
                  setCircleDesc('');
                  setCircleError('');
                }}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={28} />
              </button>
            </div>

            <form onSubmit={handleCreateCircle} className="space-y-4">
              <div>
                <label className="block text-sm font-black text-gray-700 mb-3">Circle Name</label>
                <input
                  type="text"
                  value={circleName}
                  onChange={(e) => setCircleName(e.target.value)}
                  onBlur={(e) => setCircleName(e.target.value.trim())}
                  placeholder="e.g., Morning Learning Group"
                  className="w-full px-5 py-4 border-3 border-blue-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 text-xl font-semibold"
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-gray-700 mb-3">Description (Optional)</label>
                <textarea
                  value={circleDesc}
                  onChange={(e) => setCircleDesc(e.target.value)}
                  onBlur={(e) => setCircleDesc(e.target.value.trim())}
                  placeholder="What's this circle about?"
                  className="w-full px-5 py-4 border-3 border-blue-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-400 resize-none text-xl font-semibold"
                  rows="3"
                />
              </div>

              <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-4 border-2 border-blue-200 font-semibold">
                Create a small group to share progress and support each other's learning journey.
              </p>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowNewCircle(false);
                    setCircleName('');
                    setCircleDesc('');
                    setCircleError('');
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-black py-3 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg text-white font-black py-3 rounded-xl transition flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Users size={18} />
                  Create Circle
                </button>
              </div>

              {circleError && <p className="text-red-600 text-sm font-black mt-2">{circleError}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// ENRICHMENT TAB
  const EnrichmentTab = () => (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500 rounded-3xl shadow-2xl p-12 mb-8 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Enrichment Activities</h2>
          <p className="text-xl md:text-2xl mb-2 opacity-95">
            Quick, playful activities you can do anywhere!
          </p>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            No prep needed. Just fun, engaging games that make learning feel like play.
          </p>
        </div>
      </div>

      {/* Main Card */}
      <button
        onClick={() => handleNavigate('/games')}
        className="w-full bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition group transform hover:scale-[1.02] mb-8"
      >
        <div className="p-10 text-center">
<div className="bg-gradient-to-br from-orange-100 to-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition border-4 border-orange-200">
            <img src="/assets/Game.png" alt="Game Controller" className="w-16 h-16 object-contain" />
          </div>
          
          <h3 className="text-3xl font-black text-gray-900 mb-4">Explore All Games</h3>
          
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            Discover research-backed games designed for every phase. From sound awareness to word building, 
            each activity targets specific literacy skills while keeping things light and fun.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">Sound Safari</span>
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">Word Wizards</span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">Story Spinners</span>
            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">Letter Quest</span>
            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold">& More!</span>
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-10 py-5 rounded-2xl font-black text-xl inline-flex items-center gap-3 group-hover:from-orange-500 group-hover:to-pink-600 transition shadow-lg">
            <Gamepad2 size={28} />
            Browse All Games
            <ArrowRight size={28} />
          </div>
        </div>
      </button>

<div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-lg p-8 border-2 border-blue-200 mb-8">        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
            <Sparkles className="text-blue-600" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">When to Use These</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>After lessons:</strong> Add 10-15 minutes of stories or games when your baby is still engaged</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>On busy days:</strong> Skip your formal lesson and just do a quick game instead</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>For variety:</strong> Mix things up when routines feel stale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span><strong>Sibling time:</strong> Many games work for multiple ages at once</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

<div className="bg-purple-50 border-2 border-purple-200 rounded-3xl p-8 text-center">
        <div className="text-5xl mb-4">💜</div>
        <h4 className="font-black text-gray-900 text-2xl mb-4">Remember: These are extras!</h4>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Your main curriculum in {currentPhaseInfo?.name} is where the real magic happens. These enrichment activities are just for fun—use them when they fit, skip them when they don't. No pressure, no guilt!
        </p>
      </div>
    </div>
  );

  // MODALS
  const AddFriendModal = () => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border-4 border-purple-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Invite a Friend</h2>
          <button
            onClick={() => {
              setShowAddFriend(false);
              setFriendEmail('');
              setAddFriendError('');
              setAddFriendSuccess('');
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={28} />
          </button>
        </div>

        {addFriendSuccess ? (
          <div className="text-center py-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-green-600" size={40} />
            </div>
            <p className="text-lg font-bold text-gray-900 mb-2">Request Sent!</p>
            <p className="text-gray-600">{addFriendSuccess}</p>
          </div>
        ) : (
          <form onSubmit={handleAddFriend} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Friend's Email</label>
              <input
                type="email"
                value={friendEmail}
                onChange={(e) => setFriendEmail(e.target.value)}
                placeholder="their@email.com"
                className="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
              {addFriendError && <p className="text-red-600 text-sm font-semibold mt-2">{addFriendError}</p>}
            </div>

            <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-3 border border-blue-200">
              They'll receive a friend request and can accept or decline.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowAddFriend(false);
                  setFriendEmail('');
                  setAddFriendError('');
                }}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );

  const CreateCircleModal = () => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 border-4 border-blue-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create Learning Circle</h2>
          <button
            onClick={() => {
              setShowNewCircle(false);
              setNewCircleName('');
              setNewCircleDesc('');
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={28} />
          </button>
        </div>

        <form onSubmit={handleCreateCircle} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Circle Name</label>
            <input
              type="text"
              value={newCircleName}
              onChange={(e) => setNewCircleName(e.target.value)}
              placeholder="e.g., Morning Learning Group"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Description (Optional)</label>
            <textarea
              value={newCircleDesc}
              onChange={(e) => setNewCircleDesc(e.target.value)}
              placeholder="What's this circle about?"
              className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
              rows="3"
            />
          </div>

          <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-3 border border-blue-200">
            Create a small group to share progress and support each other's learning journey.
          </p>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setShowNewCircle(false);
                setNewCircleName('');
                setNewCircleDesc('');
              }}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Users size={18} />
              Create Circle
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Welcome Tour Component
  const WelcomeTour = () => {
    const [isStepTransitioning, setIsStepTransitioning] = useState(false);

    const tourSteps = [
      {
        title: "Welcome to BrightReading! 🎉",
        content: "We're so excited you're here! Let's take a quick tour to show you around. BrightReading is designed to make teaching your little one to read feel easy, joyful, and totally doable.",
        position: "center",
        emoji: "👋",
        tab: null,
        showContent: true
      },
      {
        title: "Home - Your Daily Hub",
        content: "This is your command center! See your current lesson, track your streak, switch between learning phases, and get personalized encouragement.",
        position: "bottom-right",
        emoji: "🏠",
        tab: "home",
        highlights: [
          { text: "Next Lesson", description: "Start or continue your learning journey" },
          { text: "Phase Selector", description: "Switch between age-appropriate phases" },
          { text: "Weekly Progress", description: "See how you're doing this week" },
          { text: "Streak Counter", description: "Keep your learning momentum going" }
        ]
      },
      {
        title: "My Progress - Celebrate Growth",
        content: "Watch your journey unfold! Track lessons completed, unlock achievements, and see your progress across all phases and quarters.",
        position: "bottom-right",
        emoji: "📊",
        tab: "progress",
        highlights: [
          { text: "Overall Progress Bar", description: "Your complete phase progress" },
          { text: "Achievements Gallery", description: "Unlock badges as you learn" },
          { text: "Quarter Breakdown", description: "Detailed progress by quarter" },
          { text: "Statistics", description: "Lessons, weeks, and streaks" }
        ]
      },
      {
        title: "Curriculum - The Big Picture",
        content: "Explore the full learning path! See all 52 weeks organized into 4 quarters. Each phase builds on proven research with a spiral learning model.",
        position: "bottom-right",
        emoji: "📚",
        tab: "curriculum",
        highlights: [
          { text: "Quarter Themes", description: "Each quarter has a focus area" },
          { text: "Week Overview", description: "See all weeks at a glance" },
          { text: "Learning Goals", description: "Learning goals for your child" },
          { text: "Full Curriculum Link", description: "Deep dive into the methodology" }
        ]
      },
      {
        title: "Community - Connect with other proud parents",
        content: "Connect with other parents! Add friends, join learning circles, share achievements, and support each other.",
        position: "bottom-right",
        emoji: "💬",
        tab: "community",
        highlights: [
          { text: "Friend Requests", description: "Connect with other parents" },
          { text: "Direct Messaging", description: "Chat one-on-one with friends" },
          { text: "Learning Circles", description: "Join small support groups" },
          { text: "Share Progress", description: "Celebrate together" }
        ],
        note: "Available with paid subscription"
      },
      {
        title: "Enrichment - Fun & Games",
        content: "Need variety? Browse quick, playful activities that reinforce learning through games. Perfect for busy days!",
        position: "bottom-right",
        emoji: "🎮",
        tab: "enrichment",
        highlights: [
          { text: "Educational Games", description: "Research-backed activities" },
          { text: "No Prep Required", description: "Quick and easy to start" },
          { text: "Skill Reinforcement", description: "Practice what you've learned" },
          { text: "Flexible Learning", description: "Use anytime, anywhere" }
        ],
        note: "1 free game available • Full library with paid subscription"
      },
      {
        title: "Ready to Start! 💪",
        content: "You've got everything you need! Remember: there's no perfect way to do this. Just show up, have fun, and enjoy the journey with your child.",
        position: "center",
        emoji: "💕",
        tab: "home",
        showContent: true
      }
    ];

    const currentStep = tourSteps[tourStep];
    const isLastStep = tourStep === tourSteps.length - 1;
    const isFirstStep = tourStep === 0;

    // Switch tabs when step changes with smooth transition
    useEffect(() => {
      if (currentStep.tab && currentStep.tab !== activeTab) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveTab(currentStep.tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsTransitioning(false);
        }, 200);
      }
    }, [tourStep, currentStep.tab]);

    const handleNext = () => {
      if (isLastStep) {
        handleFinishTour();
      } else {
        setIsStepTransitioning(true);
        setTimeout(() => {
          setTourStep(tourStep + 1);
          setTimeout(() => setIsStepTransitioning(false), 50);
        }, 200);
      }
    };

    const handlePrevious = () => {
      if (tourStep > 0) {
        setIsStepTransitioning(true);
        setTimeout(() => {
          setTourStep(tourStep - 1);
          setTimeout(() => setIsStepTransitioning(false), 50);
        }, 200);
      }
    };

    const handleFinishTour = async () => {
      setShowWelcomeTour(false);
      setTourStep(0);
      setTimeout(async () => {
        await updateProfile({ hasSeenWelcomeTour: true });
      }, 300);
    };

    const handleSkip = async () => {
      setShowWelcomeTour(false);
      setTourStep(0);
      setTimeout(async () => {
        await updateProfile({ hasSeenWelcomeTour: true });
      }, 300);
    };

    const getPositionClasses = () => {
      if (currentStep.position === "center") {
        return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
      }
      if (currentStep.position === "bottom-right") {
        return "bottom-8 right-8 max-w-md";
      }
      return "";
    };

    return (
      <>
        {/* Overlay with reduced opacity to show content behind */}
<div className="fixed inset-0 bg-black/0 z-[100] animate-fadeIn" />        
        {/* Tour Modal */}
        <div className={`fixed z-[101] transition-all duration-300 ${getPositionClasses()} ${isStepTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-200 max-w-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{currentStep.emoji}</div>
                    <div>
                      <h2 className="text-2xl font-black">{currentStep.title}</h2>
                      <p className="text-white/90 font-semibold text-sm">Step {tourStep + 1} of {tourSteps.length}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleSkip}
                    className="text-white/80 hover:text-white font-bold text-sm underline flex-shrink-0 ml-4"
                  >
                    Skip Tour
                  </button>
                </div>
                
                {/* Progress Bar */}
                <div className="bg-white/20 rounded-full h-2 mt-4 overflow-hidden">
                  <div
                    className="bg-white h-2 transition-all duration-300 rounded-full"
                    style={{ width: `${((tourStep + 1) / tourSteps.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-white">
              {currentStep.showContent ? (
                // Center content for intro/outro
                <div className="text-center max-w-xl mx-auto">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 mb-6 border-4 border-purple-200">
                    <div className="text-6xl mb-4">{currentStep.emoji}</div>
                    <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                      {currentStep.content}
                    </p>
                  </div>
                </div>
              ) : (
                // Compact content for feature tours
                <div className="space-y-4">
                  <p className="text-base text-gray-800 leading-relaxed font-semibold">
                    {currentStep.content}
                  </p>
                  
                  {currentStep.highlights && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border-2 border-blue-200">
                      <p className="text-sm font-black text-blue-900 mb-3 flex items-center gap-2">
                        <span className="text-lg">✨</span>
                        Key Features:
                      </p>
                      <div className="space-y-3">
                        {currentStep.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <p className="font-black text-gray-900 text-sm">{highlight.text}</p>
                              <p className="text-xs text-gray-600 font-semibold">{highlight.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep.note && (
                    <div className="bg-amber-50 rounded-xl px-4 py-3 border-2 border-amber-200">
                      <p className="text-sm text-amber-900 font-bold text-center">
                        💡 {currentStep.note}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-3 mt-6">
                {tourStep > 0 && (
                  <button
                    onClick={handlePrevious}
                    disabled={isStepTransitioning}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-black py-3 rounded-xl transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm flex items-center justify-center gap-2"
                  >
                    <ArrowRight size={18} className="rotate-180" />
                    Previous
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={isStepTransitioning}
                  className={`${tourStep === 0 ? 'w-full' : 'flex-1'} bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black py-3 rounded-xl transition transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm`}
                >
                  {isLastStep ? (
                    <>
                      Let's Get Started! 🚀
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>

              {/* Step Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {tourSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsStepTransitioning(true);
                      setTimeout(() => {
                        setTourStep(idx);
                        setTimeout(() => setIsStepTransitioning(false), 50);
                      }, 200);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === tourStep
                        ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600'
                        : idx < tourStep
                        ? 'w-2 bg-purple-300 hover:bg-purple-400'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spotlight effect - highlights tab navigation */}
        {!isFirstStep && !isLastStep && (
          <div className="fixed top-0 left-0 right-0 z-[99] pointer-events-none">
            <div className="max-w-6xl mx-auto px-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-b-3xl border-4 border-purple-400/50 shadow-2xl animate-pulse">
                <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-t-xl" />
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50 transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>

      {/* Welcome Tour */}
      {showWelcomeTour && <WelcomeTour />}

      {/* Navigation Bar */}
      <nav className="bg-white shadow-xl border-b-4 border-purple-200 p-4 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-3">
            <img src="/assets/brlogo2.png" alt="BrightReading Logo" className="h-14 w-auto object-contain" />
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                BrightReading
              </h1>
            </div>
          </div>
          <button
            onClick={() => handleNavigate('/profile')}
            className="hover:opacity-80 transition transform hover:scale-105"
          >
            <img src="/assets/Profile.png" alt="Profile" className="h-12 w-auto object-contain" />
          </button>
        </div>
      </nav>

      {/* Tab Navigation */}
      <div className="bg-white shadow-xl border-b-4 border-purple-200 sticky top-[88px] z-30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
{tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 font-black transition-all whitespace-nowrap transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-4 border-purple-600 bg-gradient-to-t from-purple-100 to-pink-50'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-gradient-to-t hover:from-purple-50 hover:to-transparent'
                }`}
              >
                <img src={tab.icon} alt={tab.label} className="w-12 h-12 drop-shadow-md" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className={`transition-opacity duration-200 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {activeTab === 'home' && <HomeTab />}
          {activeTab === 'progress' && <ProgressTab />}
          {activeTab === 'curriculum' && <CurriculumTab />}
          {activeTab === 'community' && <CommunityTab />}
          {activeTab === 'enrichment' && <EnrichmentTab />}
        </div>
      </div>

{/* Modals */}
      {showAddFriend && <AddFriendModal />}
      {showNewCircle && <CreateCircleModal />}
      
<style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 2000px;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 1;
            max-height: 2000px;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
          @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 3s ease-in forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
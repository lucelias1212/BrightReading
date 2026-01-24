import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useUser } from '../UserContext';
import { getLesson, canAccessLesson } from '../data/lessons';
import { BookOpen, Home, ChevronRight, ChevronLeft, Star, Heart, Check, Volume2, Eye, CheckCircle, Trophy, Lock, Zap, Play, Calendar, Award, X } from 'lucide-react';

const LessonPage = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const { userData, completeLesson } = useUser();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [lessonError, setLessonError] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showWeekView, setShowWeekView] = useState(false);
  const [viewingWeek, setViewingWeek] = useState(null);
  const contentRef = useRef(null);

  const currentLessonNum = parseInt(lessonId) || 1;
  const isPremium = userData?.subscription === 'paid';
  
  // Phase-specific data
  const currentPhase = userData?.currentPhase || 1;
  const phaseData = userData?.phaseProgress?.[currentPhase] || { completedLessons: [], lessonCompletionDates: {} };
  const completedLessons = phaseData.completedLessons || [];
  const completedLessonsCount = completedLessons.length;
  
  
  // Calculate total completed lessons across ALL phases for free users
  const totalCompletedAcrossAllPhases = !isPremium 
    ? Object.values(userData?.phaseProgress || {}).reduce((total, phase) => {
        return total + (phase.completedLessons?.length || 0);
      }, 0)
    : 0;
  
  const isFreeTrial = currentLessonNum <= 10;
  const hasFreeLessonsRemaining = !isPremium && totalCompletedAcrossAllPhases < 10;
  const userCanAccess = isPremium || (isFreeTrial && (hasFreeLessonsRemaining || alreadyCompleted));

  const lesson = getLesson(currentLessonNum, currentPhase);
  const alreadyCompleted = completedLessons.includes(currentLessonNum);

  useEffect(() => {
    if (alreadyCompleted) {
      setIsLessonCompleted(true);
    }
    
    if (!lesson) {
      setLessonError(true);
    }

    setCurrentStep(0);
    setViewingWeek(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [lessonId, alreadyCompleted, lesson]);

  const currentStepData = lesson?.steps?.[currentStep];
  const progressPercent = lesson ? ((currentStep + 1) / lesson.steps.length) * 100 : 0;

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (lesson && currentStep < lesson.steps.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      }, 200);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      }, 200);
    }
  };

  const handleCompleteLesson = async () => {
    if (!isPremium && currentLessonNum === 10) {
      setShowPaywall(true);
      return;
    }

    const result = await completeLesson(currentLessonNum);
    if (result.success) {
      if (!result.alreadyCompleted) {
        setIsLessonCompleted(true);
        setShowCompletionModal(true);
      } else {
        navigate('/dashboard');
      }
    }
  };

  const handleFinish = () => {
    setShowCompletionModal(false);
    navigate('/dashboard');
  };

  const weekNum = Math.floor((currentLessonNum - 1) / 5) + 1;
  const lessonInWeek = ((currentLessonNum - 1) % 5) + 1;
  const quarterNum = Math.ceil(weekNum / 13);

  const getWeekLessons = (week) => {
    const lessons = [];
    for (let i = 1; i <= 5; i++) {
      const lessonId = (week - 1) * 5 + i;
      const isCompleted = completedLessons.includes(lessonId);
      lessons.push({
        id: lessonId,
        number: i,
        completed: isCompleted,
        canAccess: canAccessLesson(lessonId, isPremium)
      });
    }
    return lessons;
  };

  const getQuarterWeeks = (quarter) => {
    const startWeek = (quarter - 1) * 13 + 1;
    const endWeek = Math.min(quarter * 13, 52);
    const weeks = [];
    
    for (let week = startWeek; week <= endWeek; week++) {
      const weekLessons = getWeekLessons(week);
      weeks.push({
        week,
        lessons: weekLessons,
        completed: weekLessons.every(l => l.completed),
        inProgress: weekLessons.some(l => l.completed) && !weekLessons.every(l => l.completed)
      });
    }
    return weeks;
  };

  const currentWeekLessons = getWeekLessons(weekNum);
  const currentQuarterWeeks = getQuarterWeeks(quarterNum);

  const displayWeek = showWeekView && viewingWeek !== null ? viewingWeek : weekNum;
  const displayWeekLessons = getWeekLessons(displayWeek);

  const phases = [
    { id: 1, name: 'Phase 1', subtitle: '1-2 Years', color: 'from-pink-400 to-rose-500' },
    { id: 2, name: 'Phase 2', subtitle: '2-3 Years', color: 'from-green-400 to-teal-500' },
    { id: 3, name: 'Phase 3', subtitle: '3-4 Years', color: 'from-blue-400 to-indigo-500' },
    { id: 4, name: 'Phase 4', subtitle: '4-5 Years', color: 'from-indigo-400 to-purple-500' }
  ];

  const currentPhaseInfo = phases.find(p => p.id === currentPhase);

  if (!userCanAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
        <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl">
                <BookOpen className="text-white" size={24} />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Lesson Locked</h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/dashboard')}
                className="hover:opacity-80 transition transform hover:scale-105 active:scale-95"
              >
                <img src="/assets/HomeButton.png" alt="Home" className="h-10" />
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="text-gray-400" size={64} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">This Activity is Locked</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              You've completed your 10 free activities! 🎉<br/>
              Upgrade to unlock all 260 activites across all 4 phases and continue your child's reading journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/upgrade')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition inline-flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
              >
                <Zap size={24} />
                View Premium Plans
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-white text-gray-700 border-2 border-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition inline-flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
              >
                <Home size={24} />
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (lessonError || !lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
        <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl">
                <BookOpen className="text-white" size={24} />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Lesson Not Found</h1>
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="hover:opacity-80 transition transform hover:scale-105 active:scale-95"
            >
              <img src="/assets/HomeButton.png" alt="Home" className="h-10" />
            </button>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-gray-400" size={64} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Oops! Activity Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Activity {currentLessonNum} hasn't been created yet. Check back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition inline-flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
              >
                <Home size={24} />
                Back to Dashboard
              </button>
              <button
                onClick={() => {
                  // Find the nearest valid lesson
                  let nearestLesson = currentLessonNum - 1;
                  // Keep going back until we find a valid lesson or hit lesson 1
                  while (nearestLesson > 0 && !getLesson(nearestLesson, currentPhase)) {
                    nearestLesson--;
                  }
                  // If we found a valid lesson, go there, otherwise go to dashboard
                  if (nearestLesson > 0 && getLesson(nearestLesson, currentPhase)) {
                    setIsTransitioning(true);
                    setLessonError(false);
                    setTimeout(() => {
                      navigate(`/lesson/${nearestLesson}`);
                      window.scrollTo(0, 0);
                    }, 200);
                  } else {
                    navigate('/dashboard');
                  }
                }}
                className="bg-white text-gray-700 border-2 border-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition inline-flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={24} />
                Previous Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`bg-gradient-to-br ${currentPhaseInfo?.color} p-2 rounded-xl`}>
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-gray-900">Week {weekNum}, Activity {lessonInWeek}</h1>
                <span className={`text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r ${currentPhaseInfo?.color} text-white`}>
                  Phase {currentPhase}
                </span>
              </div>
              <p className="text-sm text-gray-600">{lesson.theme}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
<button
              onClick={() => {
                setViewingWeek(weekNum);
                setShowWeekView(true);
              }}
              className="hover:opacity-80 transition"
            >
              <img src="/assets/Weeks.png" alt="Weeks" className="h-10" />
            </button>
<button
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  navigate('/dashboard');
                  window.scrollTo(0, 0);
                }, 200);
              }}
              className="hover:opacity-80 transition"
            >
              <img src="/assets/HomeButton.png" alt="Home" className="h-10" />
            </button>
          </div>
        </div>
      </nav>

      {/* Progress & Status Bar */}
      <div className="bg-white border-b-2 border-gray-200 sticky top-[72px] z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          {/* Phase Progress Banner */}
          <div className={`bg-gradient-to-r ${currentPhaseInfo?.color} rounded-xl px-4 py-3 mb-4 flex items-center justify-between text-white`}>
            <div className="flex items-center gap-3">
              <Trophy size={24} className="flex-shrink-0" />
              <div>
                <p className="font-semibold">
                  {currentPhaseInfo?.name}: {completedLessonsCount} of 260 Activities
                </p>
                <p className="text-xs text-white/80">
                  {currentPhaseInfo?.subtitle} • {Math.round((completedLessonsCount / 260) * 100)}% complete
                </p>
              </div>
            </div>
          </div>

          {/* Completion Status */}
          {alreadyCompleted && (
            <div className="bg-green-50 border-2 border-green-300 rounded-xl px-4 py-3 mb-4 flex items-center gap-3">
              <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
              <p className="text-green-800 font-semibold">
                ✓ Completed! You can review this activity anytime.
              </p>
            </div>
          )}

          {/* Free Trial Banner */}
          {!isPremium && (hasFreeLessonsRemaining || alreadyCompleted) && (
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl px-4 py-3 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white">
                <Zap size={24} className="flex-shrink-0" />
                <p className="font-semibold">
                  Free Trial: {totalCompletedAcrossAllPhases} of 10 activities completed • {10 - totalCompletedAcrossAllPhases} remaining across all phases
                </p>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-bold text-gray-900">
              Step {currentStep + 1} of {lesson.steps.length}
            </span>
            <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {currentStepData?.duration || '5-10 min'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`bg-gradient-to-r ${currentPhaseInfo?.color} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-4 py-8">
        <div className={`transition-opacity duration-200 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* Step Header */}
          <div className="mb-8">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
              {currentStepData?.type === 'intro' && '📚 Introduction'}
              {currentStepData?.type === 'activity' && '🎯 Activity'}
              {currentStepData?.type === 'conclusion' && '🎉 Wrap Up'}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">{currentStepData?.title}</h2>
            {currentStepData?.focus && (
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                <span>🎯</span>
                <span>Focus: {currentStepData.focus}</span>
              </div>
            )}
          </div>

          {/* INTRO CONTENT */}
          {currentStepData?.type === 'intro' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Activity Goal
                </h3>
                <p className="text-gray-800 text-lg leading-relaxed">{currentStepData.content.goal}</p>
              </div>

              {currentStepData.content.parentGuide && Array.isArray(currentStepData.content.parentGuide) && currentStepData.content.parentGuide.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-pink-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-pink-100 p-3 rounded-xl">
                      <Heart className="text-pink-600" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Parent Guide</h3>
                  </div>
                  <ul className="space-y-4">
                    {currentStepData.content.parentGuide.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-800 text-lg">
                        <span className="text-pink-500 font-bold text-xl">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentStepData.content.materials && Array.isArray(currentStepData.content.materials) && currentStepData.content.materials.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">📦</span>
                    What You'll Need
                  </h3>
                  <ul className="space-y-3">
                    {currentStepData.content.materials.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-800 text-lg">
                        <div className="bg-green-100 p-1 rounded">
                          <Check className="text-green-600" size={20} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Star className="text-yellow-600" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2 text-lg">💡 Critical Parent Tip</p>
                    <p className="text-gray-800 text-lg leading-relaxed">{currentStepData.content.tip}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-2 text-lg">📚 Research-Based</p>
                    <p className="text-gray-700 leading-relaxed">{currentStepData.content.researchNote}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ACTIVITY CONTENT */}
          {currentStepData?.type === 'activity' && (
            <div className="space-y-6">
              {currentStepData.researchBasis && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <p className="text-gray-700">
                      <span className="font-bold text-blue-900">Research:</span> {currentStepData.researchBasis}
                    </p>
                  </div>
                </div>
              )}

              {currentStepData.content.goal && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-md">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-2xl">
                    <span className="text-3xl">🎯</span>
                    Activity Goal
                  </h3>
                  <p className="text-gray-800 text-lg leading-relaxed">{currentStepData.content.goal}</p>
                </div>
              )}

              {currentStepData.content.whatToSay && Array.isArray(currentStepData.content.whatToSay) && currentStepData.content.whatToSay.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-xl">
                      <Volume2 className="text-blue-600" size={32} />
                    </div>
                    What to Say
                  </h3>
                  <div className="space-y-4">
                    {currentStepData.content.whatToSay.map((phrase, idx) => (
                      <div key={idx} className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5">
                        <p className="text-gray-900 text-lg italic leading-relaxed">"{phrase}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.content.whatToDo && Array.isArray(currentStepData.content.whatToDo) && currentStepData.content.whatToDo.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">👉</span>
                    What to Do
                  </h3>
                  <ul className="space-y-4">
                    {currentStepData.content.whatToDo.map((action, idx) => (
                      <li key={idx} className="flex gap-4 text-gray-800 text-lg">
                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                          {idx + 1}
                        </span>
                        <span className="pt-1">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentStepData.content.examples && Array.isArray(currentStepData.content.examples) && currentStepData.content.examples.length > 0 && (
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">💡</span>
                    Examples to Try
                  </h3>
                  <ul className="space-y-3">
                    {currentStepData.content.examples.map((example, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-800 text-lg">
                        <span className="text-orange-500 font-bold text-xl">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentStepData.content.watchFor && Array.isArray(currentStepData.content.watchFor) && currentStepData.content.watchFor.length > 0 && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Eye className="text-yellow-600" size={28} />
                    </div>
                    What to Watch For
                  </h3>
                  <ul className="space-y-3">
                    {currentStepData.content.watchFor.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-800">
                        <span className="text-yellow-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentStepData.content.parentTip && (
                <div className="bg-pink-50 border-l-4 border-pink-400 rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 p-2 rounded-lg">
                      <Star className="text-pink-600" size={28} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-2 text-lg">Parent Tip</p>
                      <p className="text-gray-800 leading-relaxed">{currentStepData.content.parentTip}</p>
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.content.funTwist && (
                <div className="bg-purple-50 border-l-4 border-purple-400 rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">✨</span>
                    <div>
                      <p className="font-bold text-gray-900 mb-2 text-lg">Make it Fun!</p>
                      <p className="text-gray-800 leading-relaxed">{currentStepData.content.funTwist}</p>
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.content.note && (
                <div className="bg-gray-50 border-l-4 border-gray-400 rounded-xl p-5">
                  <p className="text-gray-700 italic">{currentStepData.content.note}</p>
                </div>
              )}
            </div>
          )}

          {/* CONCLUSION CONTENT */}
          {currentStepData?.type === 'conclusion' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-xl p-12 text-center">
                <div className="text-8xl mb-6">🎉</div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">Lesson Complete!</h3>
                {currentStepData.content.celebration && Array.isArray(currentStepData.content.celebration) && currentStepData.content.celebration.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 mb-6">
                    {currentStepData.content.celebration.map((item, idx) => (
                      <p key={idx} className="text-gray-800 mb-3 text-xl leading-relaxed">{item}</p>
                    ))}
                  </div>
                )}
              </div>

              {currentStepData.content.reviewQuestions && Array.isArray(currentStepData.content.reviewQuestions) && currentStepData.content.reviewQuestions.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">✓</span>
                    Quick Review
                  </h3>
                  <ul className="space-y-4">
                    {currentStepData.content.reviewQuestions.map((question, idx) => (
                      <li key={idx} className="flex gap-4 text-gray-800 text-lg">
                        <span className="text-blue-500 text-2xl">•</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {currentStepData.content.parentTakeaway && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentStepData.content.parentTakeaway.title}</h3>
                  <p className="text-gray-800 text-lg leading-relaxed">{currentStepData.content.parentTakeaway.content}</p>
                </div>
              )}

              {currentStepData.content.nextSteps && Array.isArray(currentStepData.content.nextSteps) && currentStepData.content.nextSteps.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-3xl">🚀</span>
                    Keep the Learning Going
                  </h3>
                  <ul className="space-y-4">
                    {currentStepData.content.nextSteps.map((step, idx) => (
                      <li key={idx} className="flex gap-4 text-gray-800 text-lg">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-10 pt-8 border-t-2 border-gray-200">
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex-1 bg-white text-gray-700 py-5 rounded-xl font-bold text-lg hover:shadow-lg transition border-2 border-gray-300 flex items-center justify-center gap-2"
              >
                <ChevronLeft size={24} />
                Previous Step
              </button>
            )}
            {currentStep < lesson.steps.length - 1 ? (
              <button
                onClick={handleNext}
                className={`flex-1 bg-gradient-to-r ${currentPhaseInfo?.color} text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl transition flex items-center justify-center gap-2`}
              >
                Next Step
                <ChevronRight size={24} />
              </button>
            ) : (
              <button
                onClick={handleCompleteLesson}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl transition flex items-center justify-center gap-2"
              >
                <CheckCircle size={24} />
                {alreadyCompleted ? 'Back to Dashboard' : 'Complete Activity'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center animate-scale-in">
            <div className="mb-8">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Trophy className="text-white" size={56} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Amazing Work!</h2>
              <p className="text-xl text-gray-600">You've completed Activity {currentLessonNum} in {currentPhaseInfo?.name}</p>
            </div>

            <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border-2 ${currentPhaseInfo?.color.replace('from-', 'border-').replace(' to-', '')}`}>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-purple-600 mb-2">{completedLessonsCount}</p>
                  <p className="text-sm text-gray-600 font-medium">Phase {currentPhase}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600 mb-2">{Math.round((completedLessonsCount / 260) * 100)}%</p>
                  <p className="text-sm text-gray-600 font-medium">Complete</p>
                </div>
                <div>
                  <p className="text-4xl mb-2">⭐</p>
                  <p className="text-sm text-gray-600 font-medium">Achievement</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8 text-lg">
              Your child is building a strong foundation for reading success!
            </p>

            <button
              onClick={handleFinish}
              className={`w-full bg-gradient-to-r ${currentPhaseInfo?.color} text-white py-5 rounded-xl font-bold text-xl hover:shadow-xl transition`}
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Paywall Modal */}
      {showPaywall && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center animate-scale-in">
            <div className="mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="text-white" size={56} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">You Did It!</h2>
              <p className="text-xl text-gray-600">You've completed all 10 free trial activities! 🎉</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-6 text-left">
              <p className="text-gray-900 font-bold mb-5 text-lg">You've experienced:</p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-800">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span>Research-backed activity design</span>
                </li>
                <li className="flex gap-3 text-gray-800">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span>Parent guidance & activities</span>
                </li>
                <li className="flex gap-3 text-gray-800">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span>Proven literacy techniques</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-6 mb-8 text-left">
              <p className="text-gray-800">
                <span className="font-bold text-blue-900">250+ more activities</span> await with Premium — covering all 4 developmental phases with complete activity book progression.
              </p>
            </div>

            <button
              onClick={() => {
                setShowPaywall(false);
                navigate('/upgrade');
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-5 rounded-xl font-bold text-xl hover:shadow-xl transition mb-4"
            >
              Upgrade to Premium
            </button>

            <button
              onClick={() => {
                setShowPaywall(false);
                navigate('/dashboard');
              }}
              className="w-full bg-gray-200 text-gray-800 py-4 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}

{/* Week View Modal */}
      {showWeekView && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fade-in" onClick={() => {
          setShowWeekView(false);
          setViewingWeek(null);
        }}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>            <div className={`sticky top-0 bg-gradient-to-r ${currentPhaseInfo?.color} text-white p-6 rounded-t-3xl`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar size={32} />
                  <div>
                    <h2 className="text-2xl font-bold">Week {displayWeek}</h2>
                    <p className="text-white/90">{currentPhaseInfo?.name} • 5 activities</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowWeekView(false);
                    setViewingWeek(null);
                  }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-3">
              {displayWeekLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`flex items-center gap-4 p-5 rounded-xl border-2 transition ${
                    lesson.id === currentLessonNum
                      ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-300'
                      : lesson.completed
                      ? 'bg-green-50 border-green-300'
                      : lesson.canAccess
                      ? 'bg-white border-gray-200 hover:border-blue-300'
                      : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 ${
                      lesson.completed
                        ? 'bg-green-500 text-white'
                        : lesson.canAccess
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}
                  >
                    {lesson.completed ? <CheckCircle size={28} /> : lesson.canAccess ? lesson.number : <Lock size={20} />}
                  </div>
<div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {getLesson(lesson.id, currentPhase)?.title || `Lesson ${lesson.id}`}
                      {lesson.id === currentLessonNum && (
                        <span className="ml-2 text-sm bg-blue-500 text-white px-2 py-1 rounded-full">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {lesson.completed
                        ? '✓ Completed'
                        : lesson.canAccess
                        ? 'Ready to start'
                        : 'Locked'}
                    </p>
                  </div>
{lesson.canAccess && (
                    <button
                      onClick={() => {
                        if (lesson.id !== currentLessonNum) {
                          setIsTransitioning(true);
                          setTimeout(() => {
                            setShowWeekView(false);
                            setViewingWeek(null);
                            navigate(`/lesson/${lesson.id}`);
                          }, 200);
                        }
                      }}
                      className={`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
                        lesson.completed
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : `bg-gradient-to-r ${currentPhaseInfo?.color} text-white hover:shadow-lg`
                      }`}
                    >
                      {lesson.id === currentLessonNum ? 'Current' : lesson.completed ? 'Review' : 'Start'}
                      {lesson.id !== currentLessonNum && <Play size={16} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-b-3xl border-t">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  {displayWeekLessons.filter(l => l.completed).length} of 5 completed
                </span>
                <div className="flex gap-2">
  {displayWeek > currentQuarterWeeks[0].week && (
    <button
      onClick={() => setViewingWeek(displayWeek - 1)}
      className="text-blue-600 hover:text-blue-700 font-semibold"
    >
      ← Previous Week
    </button>
  )}
  {displayWeek < currentQuarterWeeks[currentQuarterWeeks.length - 1].week && currentQuarterWeeks.find(w => w.week === displayWeek + 1) && (
    <button
      onClick={() => setViewingWeek(displayWeek + 1)}
      className="text-blue-600 hover:text-blue-700 font-semibold"
    >
      Next Week →
    </button>
  )}
</div>
              </div>
            </div>
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
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LessonPage;
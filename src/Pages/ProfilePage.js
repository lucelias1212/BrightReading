import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import { BookOpen, Home, Award, Play, Edit2, Save, X, Baby, Star, LogOut, Sparkles, Zap, Check, Image, Plus, Trash2 } from 'lucide-react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, userData, updateProfile, logout, switchPhase } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showProfilePictureSelector, setShowProfilePictureSelector] = useState(false);
  const [displayPhase, setDisplayPhase] = useState(userData?.currentPhase || 1);
  
  const [formData, setFormData] = useState({
    username: userData?.username || '',
    parentName: userData?.parentName || '',
    profilePicture: userData?.profilePicture || 'Bobby Bear.png',
    children: userData?.children || []
  });

  const profilePictures = [
    { file: 'Barbara Butterfly.png', name: 'Barbara Butterfly' },
    { file: 'Betty Bunny.png', name: 'Betty Bunny' },
    { file: 'Bobby Bear.png', name: 'Bobby Bear' },
    { file: 'Bonnie Bumblebee.png', name: 'Bonnie Bumblebee' },
    { file: 'Carlos Cow.png', name: 'Carlos Cow' },
    { file: 'Charlie Chicken.png', name: 'Charlie Chicken' },
    { file: 'Clifford Cat.png', name: 'Clifford Cat' },
    { file: 'Danny Dog.png', name: 'Danny Dog' },
    { file: 'Derek Dino.png', name: 'Derek Dino' },
    { file: 'Leo Lion.png', name: 'Leo Lion' },
    { file: 'Luna Ladybug.png', name: 'Luna Ladybug' },
    { file: 'Manny Monkey.png', name: 'Manny Monkey' },
    { file: 'Reggie Rhino.png', name: 'Reggie Rhino' },
    { file: 'Steve Shark.png', name: 'Steve Shark' },
    { file: 'Tommy Tiger.png', name: 'Tommy Tiger' },
    { file: 'Zoe Zebra.png', name: 'Zoe Zebra' }
  ];

  const phases = [
    { id: 1, name: 'Phase 1', subtitle: '1-2 Years', color: 'from-pink-400 to-rose-500', icon: '/assets/P1F.png' },
    { id: 2, name: 'Phase 2', subtitle: '2-3 Years', color: 'from-green-400 to-teal-500', icon: '/assets/P2F.png' },
    { id: 3, name: 'Phase 3', subtitle: '3-4 Years', color: 'from-blue-400 to-indigo-500', icon: '/assets/P3F.png' },
    { id: 4, name: 'Phase 4', subtitle: '4-5 Years', color: 'from-indigo-400 to-purple-500', icon: '/assets/P4F.png' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (path) => {
    setIsNavigating(true);
    setTimeout(() => navigate(path), 300);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    handleLogout();
  };

  const validateUsername = async (username) => {
    if (username.toLowerCase() === userData?.username?.toLowerCase()) {
      return true;
    }
    
    if (!username || username.length < 3 || username.length > 20) {
      return false;
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
      return false;
    }
    
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username.toLowerCase()));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return true;
      }
      
      for (const doc of querySnapshot.docs) {
        if (doc.id === user.uid) {
          return true;
        }
      }
      
      return false;
    } catch (error) {
      console.error('Username validation error:', error);
      return false;
    }
  };

  const calculateAge = (birthday) => {
  if (!birthday) return null;
  const today = new Date();
  // Parse date as local time, not UTC
  const [year, month, day] = birthday.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day);
  
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  
  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months += 12;
  }
  
  if (today.getDate() < birthDate.getDate()) {
    months--;
    if (months < 0) {
      months = 11;
      years--;
    }
  }
  
  return { years, months };
};

  const getAgeGroup = (birthday) => {
    const age = calculateAge(birthday);
    if (!age) return 'Not set';
    
    const totalMonths = age.years * 12 + age.months;
    if (totalMonths >= 12 && totalMonths < 24) return 'Phase 1 (1-2 years)';
    if (totalMonths >= 24 && totalMonths < 36) return 'Phase 2 (2-3 years)';
    if (totalMonths >= 36 && totalMonths < 48) return 'Phase 3 (3-4 years)';
    if (totalMonths >= 48 && totalMonths < 60) return 'Phase 4 (4-5 years)';
    return 'Outside age range';
  };

  const handleSave = async () => {
    setUsernameError('');
    setIsSaving(true);

    if (!formData.username) {
      setUsernameError('Username is required');
      setIsSaving(false);
      return;
    }

    const isValid = await validateUsername(formData.username);
    if (!isValid) {
      setUsernameError('Username is invalid or already taken. Use 3-20 characters: letters, numbers, dashes, underscores.');
      setIsSaving(false);
      return;
    }

    const profileDataToSave = {
      ...formData,
      username: formData.username.toLowerCase()
    };

    const result = await updateProfile(profileDataToSave);
    setIsSaving(false);
    
    if (result.success) {
      setIsEditing(false);
    } else {
      setUsernameError(result.error || 'Failed to save profile');
    }
  };

  const handleCancel = () => {
    setFormData({
      username: userData?.username || '',
      parentName: userData?.parentName || '',
      profilePicture: userData?.profilePicture || 'Bobby Bear.png',
      children: userData?.children || []
    });
    setUsernameError('');
    setIsEditing(false);
  };

  const handleAddChild = () => {
    setFormData({
      ...formData,
      children: [...formData.children, { name: '', birthday: '' }]
    });
  };

  const handleRemoveChild = (index) => {
    setFormData({
      ...formData,
      children: formData.children.filter((_, i) => i !== index)
    });
  };

  const handleChildChange = (index, field, value) => {
    const updatedChildren = [...formData.children];
    updatedChildren[index][field] = value;
    setFormData({ ...formData, children: updatedChildren });
  };

  const handlePhaseSwitch = async (phaseNum) => {
    setDisplayPhase(phaseNum);
    await switchPhase(phaseNum);
  };

  const phaseData = userData?.phaseProgress?.[displayPhase] || { completedLessons: [] };
  const completedLessons = phaseData.completedLessons.length;
  const progressPercentage = Math.round((completedLessons / 260) * 100);
  const currentWeek = Math.floor(completedLessons / 5) + 1;

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

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const selectedAvatar = profilePictures.find(p => p.file === (userData?.profilePicture || formData.profilePicture));

  return (
    <div className={`min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-100 transition-opacity duration-300 ${isPageLoading || isNavigating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Top Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-20 border-b-4 border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/assets/brlogo2.png" alt="BrightReading Logo" className="h-14 w-auto object-contain" />
              <div>
                <h1 className="text-2xl font-black text-gray-900">Your BrightReading Profile</h1>
                <p className="text-sm text-gray-600 font-semibold">Manage your family & progress</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleNavigate('/dashboard')}
                className="hover:opacity-80 transition transform hover:scale-105"
              >
                <img src="/assets/HomeButton.png" alt="Home" className="h-12 w-auto object-contain" />
              </button>
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition font-bold shadow-md"
                title="Sign Out"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl opacity-5">✨</div>
          
          <div className="flex flex-col items-center text-center mb-6">
            {/* Avatar Display */}
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-400 bg-purple-50 shadow-xl">
                <img 
                  src={`/assets/${userData?.profilePicture || 'Bobby Bear.png'}`}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          
            {/* Parent Info */}
            <h2 className="text-4xl font-black text-gray-900 mb-2">
              {userData?.parentName || 'Add your name!'}
            </h2>
            <p className="text-lg text-gray-600 font-semibold mb-4">
              @{userData?.username || 'set username'}
            </p>

            {/* Edit Button */}
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-black transition shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Edit2 size={18} />
              Edit Family Info
            </button>
          </div>

          {/* Children List */}
          <div className="mt-8 border-t-2 border-gray-200 pt-6">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
              <Baby size={28} className="text-pink-600" />
              Your Children
            </h3>
            
            {(!userData?.children || userData.children.length === 0) ? (
              <div className="bg-pink-50 rounded-2xl p-8 text-center border-2 border-pink-200">
                <Baby className="mx-auto mb-3 text-pink-400" size={48} />
                <p className="text-gray-700 font-semibold mb-4">No children added yet!</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-bold transition"
                >
                  Add Your First Child
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {userData.children.map((child, index) => {
                  const age = calculateAge(child.birthday);
                  const ageGroup = getAgeGroup(child.birthday);
                  
                  return (
                    <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200 shadow-md">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-2xl font-black text-gray-900">{child.name}</h4>
                          {age && (
                            <p className="text-lg text-pink-600 font-bold">
                              {age.years} {age.years === 1 ? 'year' : 'years'}
                              {age.months > 0 && `, ${age.months} ${age.months === 1 ? 'month' : 'months'}`} old
                            </p>
                          )}
                        </div>
                        <div className="bg-pink-500 text-white p-3 rounded-full">
                          <Baby size={24} />
                        </div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3 mt-3">
                        <p className="text-xs font-bold text-gray-600 uppercase">Age Group</p>
                        <p className="text-sm font-black text-purple-600">{ageGroup}</p>
                      </div>
                      {child.birthday && (
  <div className="bg-white/60 rounded-lg p-3 mt-2">
    <p className="text-xs font-bold text-gray-600 uppercase">Birthday</p>
    <p className="text-sm font-black text-gray-900">
      {(() => {
        const [year, month, day] = child.birthday.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      })()}
    </p>
  </div>
)}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
</div>

        {/* Upgrade to Premium Card - Only for Free Users */}
        {userData?.subscription !== 'paid' && (
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl shadow-2xl p-8 text-white border-4 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 text-9xl opacity-10">⚡</div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border-2 border-white/30">
                    <Zap size={20} />
                    <span className="font-bold text-sm">FREE TRIAL ACTIVE</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-3">Unlock All 1040 Lessons!</h3>
                  <p className="text-xl font-semibold text-white/90 mb-4">
                    You've tried 10 free lessons. Keep the momentum going with full access to all 4 phases.
                  </p>
                  <ul className="space-y-2 text-left inline-block">
                    <li className="flex items-center gap-2">
                      <div className="bg-white/20 p-1 rounded-full">
                        <Check size={16} />
                      </div>
                      <span className="font-semibold">260 lessons per phase • 1040 total</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-white/20 p-1 rounded-full">
                        <Check size={16} />
                      </div>
                      <span className="font-semibold">Complete curriculum for ages 1-5</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-white/20 p-1 rounded-full">
                        <Check size={16} />
                      </div>
                      <span className="font-semibold">Progress tracking & achievements</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleNavigate('/upgrade')}
                    className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-6 rounded-2xl font-black shadow-2xl transition text-xl transform hover:scale-110 inline-flex items-center gap-3 border-4 border-white/50"
                  >
                    <Zap size={28} />
                    Upgrade Now
                  </button>
                  <p className="text-center text-white/80 text-sm font-semibold mt-3">
                    $10.99/month
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Learning Stats Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-blue-200">
          <h3 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <Star className="text-yellow-500" size={32} />
            Your Learning Journey
          </h3>

          {/* Phase Selector */}
          <div className="mb-6">
            <p className="text-sm font-bold text-gray-600 mb-3 uppercase">Viewing Stats For:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {phases.map((phase) => {
                const phaseProgress = userData?.phaseProgress?.[phase.id] || { completedLessons: [] };
                const phasePercent = Math.round((phaseProgress.completedLessons.length / 260) * 100);
                const isSelected = displayPhase === phase.id;

                return (
                  <button
                    key={phase.id}
                    onClick={() => handlePhaseSwitch(phase.id)}
                    className={`p-4 rounded-xl border-3 transition transform hover:scale-105 ${
                      isSelected
                        ? `bg-gradient-to-br ${phase.color} text-white border-white shadow-xl ring-4 ring-purple-400`
                        : 'bg-gray-50 border-gray-300 hover:border-purple-400'
                    }`}
                  >
                    <img src={phase.icon} alt={phase.name} className="w-12 h-12 mx-auto mb-2" />
                    <div className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                      {phase.name}
                    </div>
                    <div className={`text-xs mt-1 font-semibold ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
                      {phasePercent}%
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 text-center border-3 border-purple-300">
              <div className="text-4xl font-black text-purple-600 mb-2">{completedLessons}</div>
              <div className="text-sm text-gray-800 font-bold">Lessons</div>
              <div className="text-xs text-purple-600 font-semibold mt-1">Completed</div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 text-center border-3 border-blue-300">
              <div className="text-4xl font-black text-blue-600 mb-2">{currentWeek}</div>
              <div className="text-sm text-gray-800 font-bold">Current</div>
              <div className="text-xs text-blue-600 font-semibold mt-1">Week</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 text-center border-3 border-green-300">
              <div className="text-4xl font-black text-green-600 mb-2">{progressPercentage}%</div>
              <div className="text-sm text-gray-800 font-bold">Progress</div>
              <div className="text-xs text-green-600 font-semibold mt-1">Complete</div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 text-center border-3 border-orange-300">
              <div className="text-4xl font-black text-orange-600 mb-2">{userData?.currentStreak || 0}</div>
              <div className="text-sm text-gray-800 font-bold">Day</div>
              <div className="text-xs text-orange-600 font-semibold mt-1">Streak 🔥</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-100 rounded-2xl p-6 border-2 border-gray-300">
            <div className="flex justify-between items-center mb-3">
              <span className="font-bold text-gray-700">Phase {displayPhase} Progress</span>
              <span className="font-black text-purple-600 text-xl">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-6 rounded-full transition-all duration-700 flex items-center justify-end pr-3"
                style={{ width: `${Math.max(progressPercentage, 5)}%` }}
              >
                {progressPercentage > 10 && <span className="text-white text-xs font-black">{progressPercentage}%</span>}
              </div>
            </div>
            <p className="text-center text-gray-600 mt-3 font-semibold text-sm">
              {completedLessons} of 260 lessons • {260 - completedLessons} remaining
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-3xl shadow-2xl p-8 text-white border-4 border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl opacity-10">🏆</div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <Award size={40} />
              <div>
                <h3 className="text-3xl font-black">Trophy Case</h3>
                <p className="text-white/90 font-bold">Across all phases</p>
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
                className={`rounded-2xl p-4 flex items-center gap-4 transition transform border-2 ${
                  achievement.unlocked
                    ? 'bg-white/30 backdrop-blur-sm hover:scale-105 shadow-lg border-white/50'
                    : 'bg-white/10 opacity-50 border-white/20'
                }`}
              >
                <img 
                  src={achievement.icon} 
                  alt={achievement.name} 
                  className={`w-16 h-16 object-contain flex-shrink-0 ${achievement.unlocked ? '' : 'opacity-50'}`}
                />
                <div className="flex-1">
                  <h4 className="font-black text-lg">{achievement.name}</h4>
                  <p className="text-sm text-white/90 font-semibold">{achievement.desc}</p>
                </div>
                {achievement.unlocked && (
                  <div className="bg-white/40 p-2 rounded-full border-2 border-white">
                    <Check className="text-white" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-3xl shadow-2xl p-10 text-white text-center border-4 border-white">
          <div className="text-6xl mb-4">{userData?.subscription === 'paid' ? '🚀' : '⭐'}</div>
          <h3 className="text-4xl font-black mb-3">
            {userData?.subscription === 'paid' ? 'Ready to Learn?' : 'Ready for More?'}
          </h3>
          <p className="text-xl mb-6 font-semibold">
            {userData?.subscription === 'paid' 
              ? "Let's continue your learning journey!" 
              : 'Upgrade now and unlock your full learning potential!'}
          </p>
          <button
            onClick={() => handleNavigate('/upgrade')}
            className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-5 rounded-full font-black shadow-2xl transition text-2xl inline-flex items-center gap-3 transform hover:scale-110"
          >
            {userData?.subscription === 'paid' ? (
              <>
                <Play size={32} />
                Go to Dashboard
              </>
            ) : (
              <>
                <Zap size={32} />
                View Premium Plans
              </>
            )}
          </button>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[95vh] overflow-y-auto border-4 border-purple-300 my-4">
            <div className="sticky top-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-8 rounded-t-3xl z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black">Edit Family Info</h2>
                  <p className="text-white/90 font-semibold">Update your profile and children</p>
                </div>
                <button
                  onClick={handleCancel}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
                >
                  <X className="text-white" size={28} />
                </button>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Profile Picture */}
              <div>
                <label className="block text-lg font-black text-gray-700 mb-3">📸 Your Avatar</label>
                <button
                  type="button"
                  onClick={() => setShowProfilePictureSelector(true)}
                  className="w-full border-3 border-dashed border-purple-300 rounded-2xl p-6 hover:border-purple-500 transition flex flex-col items-center gap-3"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-purple-400 bg-purple-50">
                    <img 
                      src={`/assets/${formData.profilePicture}`} 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-purple-600 flex items-center justify-center gap-2">
                      <Image size={18} />
                      Change Avatar
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {profilePictures.find(p => p.file === formData.profilePicture)?.name}
                    </p>
                  </div>
                </button>
              </div>

              {/* Username */}
              <div>
                <label className="block text-lg font-black text-gray-700 mb-3 flex items-center gap-2">
                  <Sparkles size={20} />
                  Username
                </label>
                <div className="flex items-center border-3 border-blue-200 rounded-2xl overflow-hidden focus-within:ring-4 focus-within:ring-blue-300">
                  <span className="text-xl font-black text-gray-400 px-4">@</span>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => {
                      setFormData({...formData, username: e.target.value.toLowerCase().trim()});
                      setUsernameError('');
                    }}
                    className="flex-1 px-4 py-4 focus:outline-none text-xl font-semibold"
                    placeholder="choose username"
                    autoComplete="off"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">3-20 characters: letters, numbers, dashes, underscores</p>
                {usernameError && <p className="text-red-600 text-sm font-black mt-2">{usernameError}</p>}
              </div>

              {/* Parent Name */}
              <div>
                <label className="block text-lg font-black text-gray-700 mb-3">👤 Your Name</label>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full px-5 py-4 border-3 border-purple-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-400 text-xl font-semibold"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>

              {/* Children Section */}
              <div className="border-t-2 border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-lg font-black text-gray-700 flex items-center gap-2">
                    <Baby size={24} className="text-pink-600" />
                    Your Children
                  </label>
                  <button
                    onClick={handleAddChild}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-full font-bold transition flex items-center gap-2 text-sm"
                  >
                    <Plus size={18} />
                    Add Child
                  </button>
                </div>

                {formData.children.length === 0 ? (
                  <div className="bg-pink-50 rounded-2xl p-6 text-center border-2 border-pink-200">
                    <Baby className="mx-auto mb-2 text-pink-400" size={40} />
                    <p className="text-gray-600 font-semibold">No children added yet</p>
                    <p className="text-xs text-gray-500 mt-1">Click "Add Child" to get started</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {formData.children.map((child, index) => (
                      <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-black text-gray-900 text-lg">Child {index + 1}</h4>
                          <button
                            onClick={() => handleRemoveChild(index)}
                            className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition"
                            title="Remove child"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Child's Name</label>
                            <input
                              type="text"
                              value={child.name}
                              onChange={(e) => handleChildChange(index, 'name', e.target.value)}
                              className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 font-semibold"
                              placeholder="Enter child's name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Birthday</label>
                            <input
                              type="date"
                              value={child.birthday}
                              onChange={(e) => handleChildChange(index, 'birthday', e.target.value)}
                              className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 font-semibold"
                              max={new Date().toISOString().split('T')[0]}
                            />
                          </div>

                          {child.birthday && (
                            <div className="bg-white/60 rounded-lg p-3 mt-2">
                              <p className="text-xs font-bold text-gray-600 uppercase mb-1">Age Group</p>
                              <p className="text-sm font-black text-purple-600">{getAgeGroup(child.birthday)}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-5 rounded-2xl font-black hover:shadow-xl transition flex items-center justify-center gap-3 text-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save size={24} />
                  {isSaving ? 'Saving...' : 'Save Changes!'}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={isSaving}
                  className="flex-1 bg-gray-200 text-gray-800 py-5 rounded-2xl font-black hover:bg-gray-300 transition text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Picture Selector Modal */}
      {showProfilePictureSelector && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-4 border-blue-200">
            <div className="sticky top-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white p-8 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">📸</div>
                  <div>
                    <h2 className="text-3xl font-black">Choose Your Avatar</h2>
                    <p className="text-white/90 font-semibold">Pick a profile picture that represents you!</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowProfilePictureSelector(false)}
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
                >
                  <X className="text-white" size={28} />
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {profilePictures.map((picture) => (
                  <button
                    key={picture.file}
                    onClick={() => {
                      setFormData({...formData, profilePicture: picture.file});
                      setShowProfilePictureSelector(false);
                    }}
                    className={`relative rounded-2xl overflow-hidden border-4 transition transform hover:scale-105 ${
                      formData.profilePicture === picture.file
                        ? 'border-blue-500 ring-4 ring-blue-400 shadow-lg'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="aspect-square bg-blue-50 flex items-center justify-center">
                      <img
                        src={`/assets/${picture.file}`}
                        alt={picture.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-t from-blue-600 to-transparent absolute bottom-0 left-0 right-0 py-2">
                      <p className="text-white text-xs font-bold text-center drop-shadow-lg">{picture.name}</p>
                    </div>
                    {formData.profilePicture === picture.file && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                        <Check className="text-white" size={40} />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowProfilePictureSelector(false)}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-black hover:shadow-lg transition transform hover:scale-105"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full border-4 border-red-300 p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👋</div>
              <h2 className="text-3xl font-black text-gray-800 mb-2">Sign Out?</h2>
              <p className="text-gray-600 text-lg font-semibold">You'll need to log back in to continue learning.</p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={confirmLogout}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-black transition text-lg"
              >
                Yes, Sign Out
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-2xl font-black transition text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
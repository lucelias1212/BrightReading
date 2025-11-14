// FILE: /src/data/lessons/index.js
// ============================================================================
// MASTER LESSON INDEX - Single import point for entire lesson system
// FIXED: Now returns lessons based on current phase context
// ============================================================================

import phase1 from './phase1_1-2/index.js';
import phase2 from './phase2_2-3/index.js';
import phase3 from './phase3_3-4/index.js';
import phase4 from './phase4_4-5/index.js';
import { SKILL_RECURRENCE_MAP } from './skillRecurrenceMap.js';
import { RESEARCH_CITATIONS } from './researchCitations.js';

// ========== LESSON DATABASE ==========
export const lessonDatabase = {
  '1-2': phase1,
  '2-3': phase2,
  '3-4': phase3,
  '4-5': phase4,
};

// ========== PHASE NUMBER TO STRING MAPPING ==========
const phaseNumberToString = {
  1: '1-2',
  2: '2-3',
  3: '3-4',
  4: '4-5'
};

const phaseStringToNumber = {
  '1-2': 1,
  '2-3': 2,
  '3-4': 3,
  '4-5': 4
};

// ========== HELPER FUNCTIONS ==========

/**
 * Get a single lesson by ID within a specific phase
 * @param {number} lessonId - Lesson ID (1-260 within the phase)
 * @param {number|string} currentPhase - Current phase (1-4 or '1-2', '2-3', etc.)
 * @returns {object} Lesson object or null if not found
 */
export const getLesson = (lessonId, currentPhase = 1) => {
  // Normalize phase to string format
  const phaseKey = typeof currentPhase === 'number' 
    ? phaseNumberToString[currentPhase] 
    : currentPhase;
  
  const phase = lessonDatabase[phaseKey];
  if (!phase) return null;
  
  const lesson = phase.lessons.find(l => l.id === lessonId);
  return lesson || null;
};

/**
 * Get all lessons for a specific phase
 * @param {number|string} phase - Phase ID (1-4 or '1-2', '2-3', '3-4', '4-5')
 * @returns {array} Array of lesson objects for that phase
 */
export const getLessonsByPhase = (phase) => {
  const phaseKey = typeof phase === 'number' 
    ? phaseNumberToString[phase] 
    : phase;
  return lessonDatabase[phaseKey]?.lessons || [];
};

/**
 * Get all lessons for a specific quarter within a phase
 * @param {number|string} phase - Phase ID (1-4 or '1-2', '2-3', etc.)
 * @param {number} quarter - Quarter (1-4)
 * @returns {array} Array of lesson objects for that quarter
 */
export const getLessonsByQuarter = (phase, quarter) => {
  const lessons = getLessonsByPhase(phase);
  return lessons.filter(l => l.quarter === quarter);
};

/**
 * Get all lessons for a specific week within a phase
 * @param {number|string} phase - Phase ID
 * @param {number} week - Week (1-52)
 * @returns {array} Array of lesson objects for that week
 */
export const getLessonsByWeek = (phase, week) => {
  const lessons = getLessonsByPhase(phase);
  return lessons.filter(l => l.week === week);
};

/**
 * Get lesson by day of week within a phase
 * @param {number|string} phase - Phase ID
 * @param {number} week - Week (1-52)
 * @param {number} dayInWeek - Day (1-5)
 * @returns {object} Lesson object for that specific day or null
 */
export const getLessonByDay = (phase, week, dayInWeek) => {
  const lessons = getLessonsByPhase(phase);
  return lessons.find(l => l.week === week && l.dayInWeek === dayInWeek) || null;
};

/**
 * Get lessons that use specific skill tags within a phase
 * @param {number|string} phase - Phase ID
 * @param {string} skillTag - Skill tag to search for
 * @returns {array} Array of lesson objects containing that skill tag
 */
export const getLessonsBySkillTag = (phase, skillTag) => {
  const lessons = getLessonsByPhase(phase);
  return lessons.filter(l => l.skillRecurrenceTags?.includes(skillTag));
};

/**
 * Get the current week number based on completed lessons
 * @param {array} completedLessonIds - Array of completed lesson IDs (1-260)
 * @returns {number} Current week (1-52)
 */
export const getCurrentWeek = (completedLessonIds = []) => {
  if (completedLessonIds.length === 0) return 1;
  return Math.floor(completedLessonIds.length / 5) + 1;
};

/**
 * Get the current quarter based on current week
 * @param {number} week - Current week (1-52)
 * @returns {number} Current quarter (1-4)
 */
export const getCurrentQuarter = (week) => {
  if (week <= 13) return 1;
  if (week <= 26) return 2;
  if (week <= 39) return 3;
  return 4;
};

/**
 * Check if user can access a lesson (free trial vs paid)
 * @param {number} lessonId - Lesson ID to check (1-260 within phase)
 * @param {boolean} isPremium - Whether user has premium subscription
 * @returns {boolean} true if accessible, false if locked
 */
export const canAccessLesson = (lessonId, isPremium) => {
  if (isPremium) return true;
  return lessonId <= 10; // Free trial: 10 lessons per phase
};

/**
 * Get next lessons to study within a phase
 * @param {number|string} phase - Phase ID
 * @param {array} completedLessonIds - Array of completed lesson IDs (1-260)
 * @param {number} limit - How many lessons to return (default 1)
 * @returns {array} Array of next lessons to study
 */
export const getNextLessons = (phase, completedLessonIds = [], limit = 1) => {
  const allPhaseLessons = getLessonsByPhase(phase);
  const completedSet = new Set(completedLessonIds);

  const nextLessons = allPhaseLessons
    .filter(l => !completedSet.has(l.id))
    .sort((a, b) => a.id - b.id)
    .slice(0, limit);

  return nextLessons;
};

/**
 * Get progress stats for a user in a specific phase
 * @param {number|string} phase - Phase ID
 * @param {array} completedLessonIds - Array of completed lesson IDs (1-260)
 * @returns {object} Progress object with stats
 */
export const getPhaseProgress = (phase, completedLessonIds = []) => {
  const phaseLessons = getLessonsByPhase(phase);
  const phaseCompletedCount = completedLessonIds.length; // Already filtered to current phase

  const currentWeek = getCurrentWeek(completedLessonIds);
  const currentQuarter = getCurrentQuarter(currentWeek);

  return {
    phase,
    totalLessons: phaseLessons.length,
    completedLessons: phaseCompletedCount,
    progressPercentage: Math.round((phaseCompletedCount / phaseLessons.length) * 100),
    currentWeek,
    currentQuarter,
    lessonsRemaining: phaseLessons.length - phaseCompletedCount
  };
};

// ========== EXPORTS ==========
export { SKILL_RECURRENCE_MAP, RESEARCH_CITATIONS };

export default {
  lessonDatabase,
  getLesson,
  getLessonsByPhase,
  getLessonsByQuarter,
  getLessonsByWeek,
  getLessonByDay,
  getLessonsBySkillTag,
  getCurrentWeek,
  getCurrentQuarter,
  canAccessLesson,
  getNextLessons,
  getPhaseProgress,
  SKILL_RECURRENCE_MAP,
  RESEARCH_CITATIONS
};
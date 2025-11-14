// /src/data/lessons/phase4_4-5/index.js
import q1 from './quarter1.js';
import q2 from './quarter2.js';
import q3 from './quarter3.js';
import q4 from './quarter4.js';

// Handle both array exports and object exports safely
const getQuarterLessons = (quarter) => {
  // If it's already an array, return it
  if (Array.isArray(quarter)) return quarter;
  
  // If it's an object with lessons property, return lessons
  if (quarter?.lessons && Array.isArray(quarter.lessons)) return quarter.lessons;
  
  // If it's null/undefined or empty, return empty array
  return [];
};

const allLessons = [
  ...getQuarterLessons(q1),
  ...getQuarterLessons(q2),
  ...getQuarterLessons(q3),
  ...getQuarterLessons(q4)
];

export default {
  phase: '4-5',  // Change this to '2-3', '3-4', '4-5' for other phases
  lessons: allLessons,
  total: 260
};
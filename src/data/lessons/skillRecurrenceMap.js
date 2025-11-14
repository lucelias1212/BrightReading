// FILE 2: /src/data/lessons/skillRecurrenceMap.js
// ============================================================================
// SKILL RECURRENCE MAPPING BY PHASE
// Maps which weeks revisit which skills (spiral curriculum pattern)
// Based on curriculum document: Week 1-3 intro, Week 4 integrate, Week 5 revisit, Week 6-8 build, Week 9-12 combine, Week 13 review
// ============================================================================

export const SKILL_RECURRENCE_MAP = {
  '1-2': {
    // Phase 1-2 (Ages 1-2): Foundations - Sounds and Senses
    soundAwareness: {
      introduced: [1, 2, 3],
      integrated: [4],
      revisited: [5],
      buildsComplex: [6, 7, 8],
      combined: [9, 10, 11, 12],
      reviewed: [13]
    },
    objectNaming: {
      introduced: [5, 6, 7],
      integrated: [8],
      revisited: [9],
      buildsComplex: [10, 11, 12],
      combined: [13],
      reviewed: [13]
    },
    rhythm: {
      introduced: [3, 4, 5],
      integrated: [6],
      revisited: [7],
      buildsComplex: [8, 9],
      combined: [10, 11, 12],
      reviewed: [13]
    },
    rhyming: {
      introduced: [9, 10, 11],
      integrated: [12],
      revisited: [13],
      buildsComplex: [],
      combined: [],
      reviewed: [13]
    },
    bookAwareness: {
      introduced: [11, 12],
      integrated: [13],
      revisited: [],
      buildsComplex: [],
      combined: [],
      reviewed: [13]
    }
  },

  '2-3': {
    // Phase 2-3 (Ages 2-3): Explorers - Words in Our World
    phonemicAwareness: {
      introduced: [1, 2, 3],
      integrated: [4],
      revisited: [5],
      buildsComplex: [6, 7, 8],
      combined: [9, 10, 11, 12],
      reviewed: [13]
    },
    letterSounds: {
      introduced: [2, 3, 4],
      integrated: [5],
      revisited: [6],
      buildsComplex: [7, 8, 9],
      combined: [10, 11, 12],
      reviewed: [13]
    },
    vocabulary: {
      introduced: [1, 2],
      integrated: [3],
      revisited: [4],
      buildsComplex: [5, 6, 7, 8],
      combined: [9, 10, 11, 12],
      reviewed: [13]
    },
    printAwareness: {
      introduced: [6, 7],
      integrated: [8],
      revisited: [9],
      buildsComplex: [10, 11],
      combined: [12],
      reviewed: [13]
    },
    wordCombinations: {
      introduced: [9, 10],
      integrated: [11],
      revisited: [12],
      buildsComplex: [],
      combined: [],
      reviewed: [13]
    }
  },

  '3-4': {
    // Phase 3-4 (Ages 3-4): Thinkers - Letters Come Alive
    alphabetRecognition: {
      introduced: [1, 2, 3],
      integrated: [4],
      revisited: [5],
      buildsComplex: [6, 7, 8],
      combined: [9, 10, 11, 12],
      reviewed: [13]
    },
    soundIsolation: {
      introduced: [1, 2, 3],
      integrated: [4],
      revisited: [5],
      buildsComplex: [6, 7, 8],
      combined: [9, 10, 11, 12],
      reviewed: [13]
    },
    phonemeBlending: {
      introduced: [5, 6, 7],
      integrated: [8],
      revisited: [9],
      buildsComplex: [10, 11],
      combined: [12],
      reviewed: [13]
    },
    cvcWords: {
      introduced: [6, 7],
      integrated: [8],
      revisited: [9],
      buildsComplex: [10, 11, 12],
      combined: [],
      reviewed: [13]
    },
    comprehension: {
      introduced: [9, 10, 11],
      integrated: [12],
      revisited: [13],
      buildsComplex: [],
      combined: [],
      reviewed: [13]
    },
    sequencing: {
      introduced: [9, 10],
      integrated: [11],
      revisited: [12],
      buildsComplex: [],
      combined: [],
      reviewed: [13]
    }
  },

  '4-5': {
    // Phase 4-5 (Ages 4-5): Readers - Early Literacy Mastery
    phonics: {
      introduced: [1, 2, 3],
      integrated: [4],
      revisited: [5],
      buildsComplex: [6, 7, 8],
      combined: [9, 10, 11, 12],
      reviewed: [13]
    },
    sightWords: {
      introduced: [2, 3, 4],
      integrated: [5],
      revisited: [6],
      buildsComplex: [7, 8, 9],
      combined: [10, 11, 12],
      reviewed: [13]
    },
    sentenceReading: {
      introduced: [6, 7, 8],
      integrated: [9],
      revisited: [10],
      buildsComplex: [11, 12],
      combined: [],
      reviewed: [13]
    },
    comprehension: {
      introduced: [9, 10, 11],
      integrated: [12],
      revisited: [13],
      buildsComplex: [],
      combined: [],
      reviewed: [13]
    },
    writing: {
      introduced: [10, 11, 12],
      integrated: [13],
      revisited: [],
      buildsComplex: [],
      combined: [],
      reviewed: [13]
    }
  }
};

export default SKILL_RECURRENCE_MAP;
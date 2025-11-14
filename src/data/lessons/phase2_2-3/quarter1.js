export default {
  quarter: 1,
  phase: '2',
  theme: 'My World in Words',
  weeks: 13,
  description: 'Object naming and household vocabulary; Family and relationship words; Action verbs and movement',
  lessons: [
    // ========= LESSON 1 =========
    {
      id: 1,
      phase: '2',
      quarter: 1,
      week: 1,
      weekIndex: 0,
      dayInWeek: 1,
      title: 'Lesson 1: Point and Name — Everyday Objects',
      theme: 'Object Naming & Vocabulary Foundation',
      skillRecurrenceTags: ['naming', 'vocabulary', 'pointing'],
      relatedToPreviousSkills: [],
      duration: '10-15 min',
      steps: [
        {
          id: 0,
          type: 'intro',
          title: 'Welcome to Object Naming!',
          duration: '1 min',
          content: {
            goal: 'Help baby\'s name expand vocabulary by connecting words to familiar household objects.',
            parentGuide: [
              'This lesson builds the foundation of language, object naming is how children organize their world.',
              'Two-year-olds learn best through repetition and sensory exploration.',
              'Every object you name is a building block for literacy and communication.',
              'Celebrate all attempts, there\'s no "wrong" way to learn words.'
            ],
            materials: ['3–4 common household objects (cup, toy, shoe, spoon)', 'Your voice and enthusiasm'],
            tip: 'Use high, musical tones when introducing new words, infant-directed speech captures attention better than normal speech.',
            researchNote: 'Snow (1983/1999) - Early labeling builds receptive vocabulary, which is the strongest predictor of later reading success.'
          }
        },
        {
          id: 1,
          type: 'activity',
          title: 'Step 1: The Cup Game',
          duration: '3-4 min',
          focus: 'Object Recognition & Naming',
          researchBasis: 'Hart & Risley (1995) - Frequent naming of objects directly increases vocabulary growth and neural language pathways.',
          content: {
            goal: 'Introduce the first object with clear, repeated naming and encouragement to point.',
            whatToSay: [
              '"Look! A cup. CUP. Can you say cup?"',
              '"This is baby\'s name\'s cup. Point to the cup!"',
              '"Good job! You found the cup!"',
              '"Cup, we drink from the cup!"'
            ],
            whatToDo: [
              'Hold up a cup where baby\'s name can see it clearly.',
              'Say "cup" slowly and clearly, 3 times.',
              'Wait 5 seconds for baby\'s name to respond.',
              'Encourage pointing or touching the cup.',
              'Praise every attempt, even babbling.'
            ],
            examples: [
              'Say "Cup" in a high, sing-song voice; pause; then say "cup" normally; pause again.',
              'Let baby\'s name hold the cup if they want to.'
            ],
            watchFor: [
              'Eye contact with the object.',
              'Pointing or reaching.',
              'Any sound or word attempt.'
            ],
            parentTip: 'Repetition is key, use the word 10+ times today for strongest learning.'
          }
        },
        {
          id: 2,
          type: 'activity',
          title: 'Step 2: Introduce More Objects',
          duration: '3-4 min',
          focus: 'Vocabulary Expansion',
          researchBasis: 'Rowe (2012) - Varied object vocabulary predicts stronger expressive language development.',
          content: {
            goal: 'Present 2–3 additional objects with the same naming pattern, building vocabulary breadth.',
            whatToSay: [
              '"Now look, a SHOE. Shoe! Where\'s your shoe?"',
              '"Here\'s a TOY. Toy! Can you point to the toy?"',
              '"A SPOON, we eat with a spoon!"'
            ],
            whatToDo: [
              'Hold up one object at a time.',
              'Say the name clearly, 2–3 times.',
              'Pause and look at baby\'s name expectantly.',
              'Encourage pointing or touching.',
              'Move to the next object after 1–2 attempts.'
            ],
            watchFor: [
              'Baby\'s name tracking your hand and voice.',
              'Signs of excitement or interest.',
              'Attempts to repeat sounds.'
            ],
            parentTip: 'Keep energy high and playful, if baby\'s name loses interest, move to the next object or take a break.'
          }
        },
        {
          id: 3,
          type: 'activity',
          title: 'Step 3: Point and Find Game',
          duration: '3 min',
          focus: 'Receptive Vocabulary & Following Directions',
          researchBasis: 'Weisleder & Fernald (2013) - Interactive back-and-forth exchanges accelerate word learning dramatically.',
          content: {
            goal: 'Use interactive play to reinforce object names and encourage baby\'s name to retrieve items on request.',
            whatToSay: [
              '"Where\'s the cup? Can you find the cup?"',
              '"Great! You got it! That\'s the cup!"',
              '"Now find the shoe, where is it?"',
              '"Yes! You found the shoe! Smart baby\'s name!"'
            ],
            whatToDo: [
              'Name one of the objects just introduced.',
              'Ask baby\'s name to find or point to it.',
              'Celebrate with excitement when they succeed.',
              'Repeat with 2–3 objects from the lesson.'
            ],
            watchFor: [
              'Baby\'s name searching or looking around.',
              'Pointing to the correct object.',
              'Smiles or sounds of accomplishment.'
            ],
            parentTip: 'This builds receptive vocabulary (understanding words) before expressive (saying words), both are equally important!'
          }
        },
        {
          id: 5,
          type: 'conclusion',
          title: 'Lesson Complete!',
          duration: '1 min',
          content: {
            celebration: [
              '🌟 Fantastic naming practice!',
              'You and baby\'s name practiced:',
              '✓ Naming 4 common household objects',
              '✓ Pointing and recognition',
              '✓ Following simple requests'
            ],
            reviewQuestions: [
              'Which object did baby\'s name point to first?',
              'Did they attempt any word sounds?',
              'What was their energy level throughout?'
            ],
            parentTakeaway: {
              title: 'Why This Matters',
              content: 'Object naming is the gateway to literacy. Children who learn 50+ object names by age 2 show stronger reading readiness, language skills, and academic success later.'
            },
            nextSteps: [
              'Use these four objects during daily routines (mealtimes, bathtime, playtime).',
              'Repeat object names naturally throughout the day, aim for 10+ repetitions per object.',
              'Play the "Point and Find" game during transitions to reinforce learning.'
            ]
          }
        }
      ]
    },

    // ========= PASTE NEXT LESSONS BELOW THIS LINE =========

    // ========= LESSON 2 =========
    {
      id: 2,
      phase: '2',
      quarter: 1,
      week: 1,
      weekIndex: 0,
      dayInWeek: 2,
      title: 'Lesson 2: Find It! — Interactive Vocabulary Retrieval',
      theme: 'Receptive Language & Directions',
      skillRecurrenceTags: ['naming', 'pointing', 'following-directions'],
      relatedToPreviousSkills: ['naming', 'vocabulary'],
      duration: '10-15 min',
      steps: [
        {
          id: 0,
          type: 'intro',
          title: 'Welcome to Find It Day!',
          duration: '1 min',
          content: {
            goal: 'Strengthen baby\'s name\'s ability to understand and retrieve named objects through interactive play.',
            parentGuide: [
              'Today we deepen receptive vocabulary, understanding words before saying them.',
              'Following directions builds listening skills and executive function.',
              'Turn-taking games create back-and-forth interaction, which is critical for language development.',
              'Success builds confidence, every correct point is a win worth celebrating.'
            ],
            materials: ['Objects from Lesson 1 (cup, shoe, toy, spoon) or similar items', 'Your voice and enthusiasm'],
            tip: 'Start with objects in plain sight; as baby\'s name improves, you can hide items partially to increase challenge.',
            researchNote: 'Bruner (1983) - Turn-taking interactions form the scaffold for language learning and social understanding.'
          }
        },
        {
          id: 1,
          type: 'activity',
          title: 'Step 1: Easy Retrieval Game',
          duration: '3-4 min',
          focus: 'Following One-Step Directions',
          researchBasis: 'Gilkerson et al. (2017) - Conversational turns predict child language skills more strongly than speech quantity alone.',
          content: {
            goal: 'Help baby\'s name successfully find and retrieve objects to build confidence and reinforce vocabulary.',
            whatToSay: [
              '"Can you find the cup? Go get the cup!"',
              '"Yay! You found it! Great job, baby\'s name!"',
              '"Now bring me the shoe. Where is the shoe?"',
              '"You got the shoe! You\'re so smart!"'
            ],
            whatToDo: [
              'Place 2–3 objects around the room in plain sight.',
              'Ask baby\'s name to find one object by name.',
              'When they point or retrieve it, celebrate enthusiastically.',
              'Repeat with different objects, 3–4 times total.'
            ],
            examples: [
              'Place the cup on the floor near them; say "Find the cup!" with excitement.',
              'If baby\'s name gets it, clap, cheer, and high-five.'
            ],
            watchFor: [
              'Baby\'s name searching or moving toward the object.',
              'Recognition when they find the right item.',
              'Smiles or vocalizations showing enjoyment.'
            ],
            parentTip: 'Success is motivating, make sure objects are easy to find at first so baby\'s name experiences frequent wins.'
          }
        },
        {
          id: 2,
          type: 'activity',
          title: 'Step 2: Point and Name Together',
          duration: '3-4 min',
          focus: 'Receptive-Expressive Connection',
          researchBasis: 'Romeo et al. (2018) - Parent conversation strengthens neural processing of language in toddlers.',
          content: {
            goal: 'Combine retrieval with reinforced naming to bridge receptive and expressive vocabulary.',
            whatToSay: [
              '"You found it! It\'s the SHOE, shoe!"',
              '"Good pointing! You\'re pointing at the cup, CUP!"',
              '"That\'s the TOY. Can you say toy?"',
              '"Wonderful! You found the spoon, sp-oon!"'
            ],
            whatToDo: [
              'Ask baby\'s name to find an object (as in Step 1).',
              'When they succeed, point together and say the name enthusiastically.',
              'Say the word 2–3 times with different tones.',
              'Invite baby\'s name to repeat or point with you.'
            ],
            watchFor: [
              'Baby\'s name watching your mouth as you say the word.',
              'Any attempt to vocalize or repeat.',
              'Excitement when objects are identified together.'
            ],
            parentTip: 'This bridges two language skills at once, understanding (receptive) and speaking (expressive).'
          }
        },
        {
          id: 3,
          type: 'activity',
          title: 'Step 3: Hide and Find Challenge',
          duration: '3 min',
          focus: 'Advanced Retrieval & Object Permanence',
          researchBasis: 'Piaget (1952) - Object permanence develops around 18–24 months; finding hidden objects strengthens this cognitive skill.',
          content: {
            goal: 'Increase challenge by partially hiding objects, promoting searching and sustained attention.',
            whatToSay: [
              '"I\'m hiding the cup, can you find it?"',
              '"Look! Just a little bit is showing. Can you find the cup?"',
              '"Great search! You found the toy!"',
              '"Smart baby\'s name! You found it!"'
            ],
            whatToDo: [
              'Partially hide an object (half-visible under a cloth or behind your hand).',
              'Ask baby\'s name to find the named object.',
              'If they struggle, point or give hints.',
              'Repeat 2–3 times with different objects.'
            ],
            watchFor: [
              'Focused searching behavior.',
              'Persistence in looking for the object.',
              'Excitement when they discover the hidden item.'
            ],
            parentTip: 'This activity combines vocabulary with cognitive development, two major milestones at once!'
          }
        },
        {
          id: 5,
          type: 'conclusion',
          title: 'Lesson Complete!',
          duration: '1 min',
          content: {
            celebration: [
              '🎯 Amazing finding skills!',
              'You and baby\'s name practiced:',
              '✓ Following one-step directions',
              '✓ Finding and retrieving named objects',
              '✓ Searching for partially hidden items',
              '✓ Connecting words to actions'
            ],
            reviewQuestions: [
              'Which object did baby\'s name find first?',
              'How many objects could they retrieve correctly?',
              'Did they attempt to name any of the objects?'
            ],
            parentTakeaway: {
              title: 'Why This Matters',
              content: 'Receptive vocabulary develops 4–6 months before expressive vocabulary. By building strong understanding of words now, you\'re setting the stage for speaking and reading.'
            },
            nextSteps: [
              'Continue this game during daily routines, ask baby\'s name to find objects before meals or playtime.',
              'Gradually increase the hiding difficulty as baby\'s name becomes more confident.',
              'Introduce new objects slowly, maintaining practice with familiar ones.'
            ]
          }
        }
      ]
    },
// ========= LESSON 3 =========
    {
      id: 3,
      phase: '2',
      quarter: 1,
      week: 1,
      weekIndex: 0,
      dayInWeek: 3,
      title: 'Lesson 3: Photo Faces — Family Member Recognition',
      theme: 'People Recognition & Relationship Vocabulary',
      skillRecurrenceTags: ['naming', 'people-words', 'family-vocabulary'],
      relatedToPreviousSkills: ['naming', 'pointing', 'following-directions'],
      duration: '10-15 min',
      steps: [
        {
          id: 0,
          type: 'intro',
          title: 'Welcome to Family Faces!',
          duration: '1 min',
          content: {
            goal: 'Help baby\'s name recognize and name family members through photos, building social vocabulary and relationship awareness.',
            parentGuide: [
              'People words are some of the most important vocabulary children learn, family is their first social world.',
              'Recognizing faces strengthens both visual processing and emotional bonding.',
              'Social vocabulary (family member names) predicts stronger conversational skills later.',
              'This lesson spirals from Week 1\'s object naming into the people category, expanding vocabulary into new domains.'
            ],
            materials: ['3–5 family photos (clear, close-up faces)', 'Your voice and warmth', 'Optional: photo album or printed pictures'],
            tip: 'Use photos where faces are large and clear, 18–24 month-olds focus better on prominent features.',
            researchNote: 'Tomasello (2003) - Social attention and joint reference to people are foundational to language learning; children learn people words fastest when emotionally connected.'
          }
        },
        {
          id: 1,
          type: 'activity',
          title: 'Step 1: Introduce Family Photos',
          duration: '3-4 min',
          focus: 'Face Recognition & Naming',
          researchBasis: 'Hart & Risley (1995) - Social vocabulary grows fastest through repeated exposure with emotional warmth and engagement.',
          content: {
            goal: 'Present family photos and name each person clearly, connecting face to relationship word.',
            whatToSay: [
              '"Look! That\'s Mommy. Mo-mmy. Say mommy!"',
              '"This is Grandma. Grand-ma. Can you point to Grandma?"',
              '"That\'s your brother, [name]. Broth-er! [Name]!"',
              '"This is Daddy. Dad-dy. Daddy!"',
              '"Good job! You\'re looking at Mommy!"'
            ],
            whatToDo: [
              'Show one photo at a time.',
              'Say the relationship word (mommy, daddy, grandma) slowly and clearly.',
              'Point to the person\'s face.',
              'Pause 5 seconds for baby\'s name to respond.',
              'Encourage pointing or vocalizing.',
              'Show 3–4 family photos, one at a time.'
            ],
            examples: [
              'Hold photo at baby\'s name\'s eye level; use a warm, loving tone when saying the name.',
              'Let baby\'s name touch the photo if they want to.'
            ],
            watchFor: [
              'Eye contact with the photo.',
              'Smiling or emotional response.',
              'Any sound or word attempt.'
            ],
            parentTip: 'Use warm, emotional tones when naming family, this builds positive associations with people words.'
          }
        },
        {
          id: 2,
          type: 'activity',
          title: 'Step 2: Point to Faces',
          duration: '3-4 min',
          focus: 'Receptive Family Vocabulary',
          researchBasis: 'Meltzoff & Moore (1977) - Joint attention to people (face-following) builds neural pathways for social learning and language.',
          content: {
            goal: 'Ask baby\'s name to identify family members by pointing, reinforcing receptive vocabulary.',
            whatToSay: [
              '"Where\'s Mommy? Can you point to Mommy?"',
              '"Great! You found Mommy! Yes, that\'s Mommy!"',
              '"Now find Grandma. Where is Grandma?"',
              '"Perfect! You pointed to Grandma! Smart baby\'s name!"'
            ],
            whatToDo: [
              'Spread out 2–3 family photos.',
              'Name one person and ask baby\'s name to point.',
              'Celebrate when they find the right photo.',
              'Repeat with different family members, 3–4 times.'
            ],
            watchFor: [
              'Baby\'s name searching between photos.',
              'Pointing to the correct face.',
              'Excitement when they succeed.'
            ],
            parentTip: 'This builds the bridge from understanding (receptive) to naming (expressive), both critical for language growth.'
          }
        },
        {
          id: 3,
          type: 'activity',
          title: 'Step 3: Name and Touch, Connection Game',
          duration: '3 min',
          focus: 'Emotional Connection & Repetition',
          researchBasis: 'Vygotsky (1978) - Scaffolded social interaction accelerates language learning through guided participation.',
          content: {
            goal: 'Combine naming with physical touch and connection, deepening emotional and linguistic bonds.',
            whatToSay: [
              '"Let\'s give Mommy a kiss on the photo!"',
              '"Point to Daddy and say \'Hi, Daddy!\'"',
              '"Grandma loves you! Can you wave to Grandma?"',
              '"Let\'s clap for [family member]!"'
            ],
            whatToDo: [
              'Show a family photo.',
              'Say the person\'s name.',
              'Invite baby\'s name to touch, kiss, or wave to the photo.',
              'Model the action if needed.',
              'Repeat with 2–3 family members.'
            ],
            watchFor: [
              'Baby\'s name touching or kissing the photo.',
              'Smiling or vocalizing.',
              'Waving or interactive gestures.'
            ],
            parentTip: 'Multisensory + emotional connection makes these words "sticky", they\'ll remember family words faster than object words because of the emotional richness.'
          }
        },
        {
          id: 5,
          type: 'conclusion',
          title: 'Lesson Complete!',
          duration: '1 min',
          content: {
            celebration: [
              'Beautiful family time!',
              'You and baby\'s name practiced:',
              '✓ Recognizing family member faces',
              '✓ Naming 3–4 family members',
              '✓ Pointing to photos on request',
              '✓ Emotional connection through people words'
            ],
            reviewQuestions: [
              'Which family member photo got the biggest smile?',
              'Did baby\'s name attempt any names or sounds?',
              'Which photo did they point to most often?'
            ],
            parentTakeaway: {
              title: 'Why This Matters',
              content: 'People words are learned through emotional connection, not just repetition. Children who build strong social vocabulary early show stronger empathy, conversation skills, and social confidence throughout childhood.'
            },
            nextSteps: [
              'Look at family photos during daily routines, at meals, before bed, or during playtime.',
              'Talk about family members when they appear (\'There\'s Daddy!\' when dad comes home).',
              'Introduce new family members gradually, using the same naming pattern.'
            ]
          }
        }
      ]
    },

    // ========= LESSON 4 =========
    {
      id: 4,
      phase: '2',
      quarter: 1,
      week: 1,
      weekIndex: 0,
      dayInWeek: 4,
      title: 'Lesson 4: Greeting Game — Hellos, Goodbyes, and First Names',
      theme: 'Social Language & Interactive Greetings',
      skillRecurrenceTags: ['people-words', 'greetings', 'social-language'],
      relatedToPreviousSkills: ['naming', 'people-words', 'listening'],
      duration: '10-15 min',
      steps: [
        {
          id: 0,
          type: 'intro',
          title: 'Welcome to Greeting Time!',
          duration: '1 min',
          content: {
            goal: 'Teach baby\'s name social greetings (hello, goodbye, waving) paired with family member names, building social communication skills.',
            parentGuide: [
              'Greetings are baby\'s name\'s first social interactions, they build turn-taking, joy, and connection.',
              'Combining movement (waving) with words strengthens motor and language learning together.',
              'Greetings are one of the highest-frequency language interactions in daily life, perfect for repetition.',
              'Early mastery of social words predicts stronger peer relationships and communication confidence.'
            ],
            materials: ['Family member names from Lesson 3', 'Your voice and enthusiasm', 'Optional: mirror to see faces while waving'],
            tip: 'Use exaggerated, playful tones, toddlers respond best to animated, joyful delivery.',
            researchNote: 'Bruner (1983) - Turn-taking in social interactions creates the scaffold for all language learning; greetings are the simplest, most repeatable turn-taking exchanges.'
          }
        },
        {
          id: 1,
          type: 'activity',
          title: 'Step 1: Wave and Say Hello',
          duration: '3-4 min',
          focus: 'Greeting Vocabulary & Motor Coordination',
          researchBasis: 'Weisleder & Fernald (2013) - Frequent, varied interactions with social words accelerate language development.',
          content: {
            goal: 'Teach "hello" paired with waving and a family member name, combining gesture, sound, and social meaning.',
            whatToSay: [
              '"Let\'s say hello to Mommy! Wave! Hel-lo, Mommy!"',
              '"Wave and say \'Hi Daddy!\' Hi... Daddy!"',
              '"Can you wave to Grandma? Say \'Hello, Grandma!\'"',
              '"Good waving! Hello, [name]!"'
            ],
            whatToDo: [
              'Model waving enthusiastically.',
              'Say "Hello" or "Hi" in a warm, high tone.',
              'Name a family member.',
              'Encourage baby\'s name to wave along with you.',
              'Repeat 3–4 times with different family members.',
              'Vary the greeting words (hello, hi, hey).'
            ],
            examples: [
              'Wave big and slow so baby\'s name can see the motion clearly.',
              'If baby\'s name doesn\'t wave, gently guide their arm up and down while celebrating.'
            ],
            watchFor: [
              'Baby\'s name waving or attempting to wave.',
              'Smiling or excited vocalizations.',
              'Eye contact during greetings.'
            ],
            parentTip: 'This combines three learning channels at once, motor (waving), auditory (hearing "hello"), and social (connecting to a person).'
          }
        },
        {
          id: 2,
          type: 'activity',
          title: 'Step 2: Say Goodbye, Departure Language',
          duration: '3-4 min',
          focus: 'Goodbye Words & Closing Interactions',
          researchBasis: 'Hart & Risley (1995) - Frequent repetition of high-value words (like greetings) in natural contexts builds vocabulary fastest.',
          content: {
            goal: 'Introduce "goodbye" in interactive contexts, helping baby\'s name understand separation and reunion language.',
            whatToSay: [
              '"Wave bye-bye to Daddy. Bye-bye, Daddy!"',
              '"Say \'Goodbye, Grandma!\' Goodbye!"',
              '"Bye-bye! See you soon!"',
              '"Good waving! Bye-bye!"'
            ],
            whatToDo: [
              'Model waving while facing away from baby\'s name.',
              'Say "Goodbye" or "Bye-bye" in a warm, clear tone.',
              'Name the person saying goodbye.',
              'Encourage baby\'s name to wave back.',
              'Repeat during actual departures (parent leaving, visitor leaving).'
            ],
            watchFor: [
              'Baby\'s name waving or vocalizing in response.',
              'Understanding that waves happen when people leave.',
              'Any attempts to say "bye" or similar sounds.'
            ],
            parentTip: 'Real departures are powerful teaching moments, use them naturally throughout the day for maximum learning impact.'
          }
        },
        {
          id: 3,
          type: 'activity',
          title: 'Step 3: Introduce Name, "My Name is..."',
          duration: '3 min',
          focus: 'Self-Recognition & Personal Identity',
          researchBasis: 'Meltzoff & Moore (1977) - Early self-recognition and name awareness builds identity and language precision.',
          content: {
            goal: 'Begin teaching baby\'s name their own name in greeting context, building personal identity.',
            whatToSay: [
              '"My name is baby\'s name. Ba-by\'s name!"',
              '"Say your name, baby\'s name!"',
              '"Hello! I\'m baby\'s name. What\'s your name?"',
              '"Nice to meet you, baby\'s name!"'
            ],
            whatToDo: [
              'Point to baby\'s name while saying their name.',
              'Point to yourself while saying your name.',
              'Model introducing yourself: "Hi, I\'m [parent name]."',
              'Invite baby\'s name to repeat their own name (don\'t force).',
              'Celebrate any sound or word attempt.'
            ],
            watchFor: [
              'Baby\'s name looking at themselves when their name is said.',
              'Any attempts to say their own name.',
              'Recognition of their own face/name pairing.'
            ],
            parentTip: 'Name recognition is critical for identity development, the more you say baby\'s name with joy and connection, the stronger this foundation becomes.'
          }
        },
        {
          id: 5,
          type: 'conclusion',
          title: 'Lesson Complete!',
          duration: '1 min',
          content: {
            celebration: [
              'Wonderful greetings and introductions!',
              'You and baby\'s name practiced:',
              '✓ Waving and saying "hello"',
              '✓ Saying "goodbye" to family members',
              '✓ Learning their own name',
              '✓ Turn-taking in social exchanges'
            ],
            reviewQuestions: [
              'Did baby\'s name wave on their own?',
              'Which family member greeting made them happiest?',
              'Did they attempt to say any greetings or their name?'
            ],
            parentTakeaway: {
              title: 'Why This Matters',
              content: 'Greetings are baby\'s name\'s first social conversations. Mastery of hello, goodbye, and their own name builds confidence, turn-taking skills, and the foundation for all future peer interactions and communication.'
            },
            nextSteps: [
              'Practice greetings during every family arrival and departure, these are perfect natural learning moments.',
              'Encourage waving at windows when family members leave.',
              'Use greetings with new people you meet (at shops, parks, with friends).',
              'Celebrate every attempt to say hello, goodbye, or their name.'
            ]
          }
        }
      ]
    },

// ========= LESSON 5 =========
{
  id: 5,
  phase: '2',
  quarter: 1,
  week: 1,
  weekIndex: 0,
  dayInWeek: 5,
  title: 'Lesson 5: Clean-Up Talk — Sorting Toys by Name, Size, and Color',
  theme: 'Vocabulary Expansion Through Categorization & Daily Routines',
  skillRecurrenceTags: ['naming', 'colors', 'sizes', 'object-words'],
  relatedToPreviousSkills: ['naming', 'pointing', 'listening', 'following-directions'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Clean-Up Time!',
      duration: '1 min',
      content: {
        goal: 'Transform cleanup into a language-rich activity where baby\'s name sorts toys while learning object names, colors, sizes, and following simple directions.',
        parentGuide: [
          'Cleanup routines are powerful teaching moments, they combine real-world practice with natural vocabulary repetition.',
          'Sorting activities strengthen both naming skills and early categorization (foundation for math and logic later).',
          'When children help organize, they feel ownership and connection, this builds motivation and positive associations with learning.',
          'This lesson spirals from Week 1\'s object naming by adding descriptive categories (color, size), vocabulary expansion in context.'
        ],
        materials: ['3-5 toy types (blocks, dolls, cars, balls)', 'Containers or bins (colored if possible)', 'Your voice and enthusiasm'],
        tip: 'Keep it playful, not strict, the goal is language, not perfect organization. Celebrate effort over neatness.',
        researchNote: 'Rowe (2012) - Descriptive vocabulary (colors, sizes, categories) accelerates overall language growth more than simple object names alone.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Name-by-Name Sorting',
      duration: '3-4 min',
      focus: 'Object Naming & Categorization',
      researchBasis: 'Hart & Risley (1995) - Repetitive naming in meaningful contexts builds vocabulary fastest.',
      content: {
        goal: 'Sort toys into containers while naming each item repeatedly, reinforcing object vocabulary.',
        whatToSay: [
          '"Let\'s find all the blocks! Where\'s a block? This is a block. Blue block!"',
          '"Good job! Put the block in the blue bin. Blocks go in the bin."',
          '"Now find the cars. A red car! Put the car here."',
          '"Look! You found all the balls. Balls, balls, balls! In the container."'
        ],
        whatToDo: [
          'Gather toys and place them around the play area.',
          'Start with one toy type (e.g., blocks).',
          'Pick up one toy and name it clearly.',
          'Ask baby\'s name to find another one like it.',
          'Place it together in a bin, repeating the name.',
          'Continue with 2-3 toy types.',
          'Keep the pace playful and unhurried.'
        ],
        examples: [
          'If baby\'s name picks up a toy, say its name: "You found a car! Car! Red car!"',
          'If they hesitate, model: "Here\'s a car. Can you put it here?" Then guide their hand gently.'
        ],
        watchFor: [
          'Baby\'s name reaching or pointing to toys.',
          'Any attempts to say toy names.',
          'Following your direction to put items in bins.',
          'Excitement or engagement with the activity.'
        ],
        parentTip: 'This is not about obedience, it\'s about language exposure through play. Messy cleanup is fine; the talking is what matters.',
        funTwist: 'Make animal sounds for each toy type: "Here come the blocks, blocks are heavy, thud, thud!" Or pretend the bin is a "magic house" for toys.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Color Sorting',
      duration: '2-3 min',
      focus: 'Descriptive Vocabulary & Color Recognition',
      researchBasis: 'Weisleder & Fernald (2013) - Talk variety and descriptive language predict faster vocabulary growth.',
      content: {
        goal: 'Sort toys by color while learning color words, expanding vocabulary beyond simple naming.',
        whatToSay: [
          '"Look! Red blocks. Find another red one. Red, red, red!"',
          '"Here\'s a blue car. Is there another blue car? Blue car!"',
          '"Yellow ball! Can you find the yellow ball? Yellow!"',
          '"Great sorting! You put all the red toys together!"'
        ],
        whatToDo: [
          'Use colored bins if possible (helps visual learning).',
          'Pick up a toy: "This is a red block."',
          'Ask baby\'s name: "Can you find another red one?"',
          'Sort by color together.',
          'Repeat the color word 3-4 times per toy.',
          'Mix colors so baby\'s name compares: red vs. blue.'
        ],
        watchFor: [
          'Baby\'s name showing interest in color differences.',
          'Attempting to match colors (even if not perfectly accurate).',
          'Repeating color words or making color sounds.'
        ],
        parentTip: 'Don\'t worry if they don\'t match perfectly yet, noticing differences is the first step. Celebrating effort matters more than accuracy.',
        funTwist: 'Sing colors to a simple tune: "Red, red, red! Find the red! Red, red, red!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Size Sorting & Comparison',
      duration: '2-3 min',
      focus: 'Size Vocabulary & Comparison Language',
      researchBasis: 'Snow (1999) - Comparative language (big/small, same/different) strengthens cognitive flexibility and vocabulary.',
      content: {
        goal: 'Introduce size words (big, small, medium) by comparing toys and sorting.',
        whatToSay: [
          '"This block is big. Big block! And this one is small. Small block."',
          '"Look! Big car and small car. Which one is big? Big!"',
          '"Can you find another big toy? Big! Put the big ones together."',
          '"Small, small, small toys go here. Small bin!"'
        ],
        whatToDo: [
          'Pick two toys of different sizes.',
          'Say: "This is big. This is small." Exaggerate with hand gestures.',
          'Let baby\'s name hold both, feeling the difference.',
          'Sort toys into "big" and "small" piles.',
          'Use hand gestures to show size: "Biiiig!" (spread arms) vs. "Smaaalll!" (pinch fingers).'
        ],
        watchFor: [
          'Baby\'s name looking at size differences.',
          'Attempting to group similar-sized items.',
          'Any vocalizations or word attempts (even "bi" or "sma").'
        ],
        parentTip: 'Pairing words with exaggerated gestures helps younger toddlers understand meaning. Keep it playful and physical.',
        funTwist: 'Play with the toys after sorting: "The big block is heavy, thump! The small block is light, tink!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Fantastic cleanup helper!',
          'You and baby\'s name practiced:',
          '✓ Naming 3-5 toy types',
          '✓ Recognizing and sorting by color',
          '✓ Comparing sizes (big and small)',
          '✓ Following simple directions',
          '✓ Building vocabulary through real routines'
        ],
        reviewQuestions: [
          'Which toy did baby\'s name pick up most often?',
          'Did they attempt any color or size words?',
          'What was their favorite moment during cleanup?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Turning routines into language opportunities means learning happens naturally throughout the day. When cleanup involves naming, colors, and sizes, you\'re not just organizing, you\'re building a rich foundation for language, math concepts, and categorization skills that will support learning for years to come.'
        },
        nextSteps: [
          'Make cleanup a daily talk-time activity, same routine, new vocabulary focus each day.',
          'Try different categories: "soft toys" (texture words), "things that roll" (action words), or toys by room.',
          'Involve baby\'s name in picking the sorting categories, this builds agency and ownership.',
          'Celebrate every attempt to name, compare, or sort, effort is more important than accuracy.'
        ]
      }
    }
  ]
},

// ========= LESSON 6 =========
{
  id: 6,
  phase: '2',
  quarter: 1,
  week: 2,
  weekIndex: 1,
  dayInWeek: 1,
  title: 'Lesson 6: Friend Match-Up — Identifying People and Relationships Through Play',
  theme: 'Social Connection & Relationship Vocabulary',
  skillRecurrenceTags: ['people-words', 'relationship-words', 'matching'],
  relatedToPreviousSkills: ['naming', 'people-words', 'pointing', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Friend Time!',
      duration: '1 min',
      content: {
        goal: 'Help baby\'s name recognize and name family members and friends through toy matching, building relationship vocabulary and social awareness.',
        parentGuide: [
          'Understanding relationships (mommy, friend, baby) deepens social vocabulary beyond just names.',
          'Matching activities strengthen recognition and memory, key cognitive skills for this age.',
          'Toys and dolls provide safe, playful ways to explore social concepts and people in baby\'s name\'s life.',
          'This lesson spirals from Lesson 3 (photo faces) by moving from photos into interactive toy play, deepening engagement.'
        ],
        materials: ['Family dolls or toy people (mom, dad, baby dolls, or action figures)', 'Toy animals (optional, for variety)', 'Your voice and warmth'],
        tip: 'If you don\'t have family dolls, use stuffed animals or even drawn pictures, creativity makes this work!',
        researchNote: 'Tomasello (2003) - Social pretend play builds vocabulary and theory of mind (understanding others\' perspectives) simultaneously.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Match Dolls to Family Members',
      duration: '3-4 min',
      focus: 'Social Recognition & Relationship Naming',
      researchBasis: 'Meltzoff & Moore (1977) - Imitation of social figures strengthens understanding of people and relationships.',
      content: {
        goal: 'Point to toy family members and name them, connecting dolls to real family members.',
        whatToSay: [
          '"This is Mommy doll. Mommy! Can you find Mommy?"',
          '"Yes! That\'s the Mommy doll. Mo-mmy. Say mommy!"',
          '"Here\'s a baby doll. A tiny baby. Baby doll! Where\'s the baby?"',
          '"This doll is Daddy. Daddy doll. Daddy! Big daddy!"'
        ],
        whatToDo: [
          'Place 2-3 family dolls in front of baby\'s name.',
          'Pick up one doll slowly.',
          'Say the role clearly and warmly: "This is Mommy."',
          'Let baby\'s name touch or hold the doll.',
          'Ask them to find it again: "Where\'s Mommy?"',
          'Celebrate when they point or pick it up.',
          'Repeat with 2-3 dolls, one at a time.'
        ],
        examples: [
          'Use warm, loving tones when naming family roles, this builds positive associations.',
          'If baby\'s name hesitates, model again: "Here\'s Mommy. You point to Mommy. Good!" Then guide gently.'
        ],
        watchFor: [
          'Baby\'s name reaching for dolls.',
          'Pointing to the correct doll when named.',
          'Attempting any sounds or words (even "ma" for mommy or "ba" for baby).'
        ],
        parentTip: 'This bridges toy play with family awareness, a critical social foundation.',
        funTwist: 'Give each doll a silly voice: "Hi, I\'m the Mommy doll, I give big hugs!" Have dolls wave or give pretend high-fives.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Match Dolls to Real Family Members',
      duration: '3-4 min',
      focus: 'Symbol Understanding & Social Connection',
      researchBasis: 'Vygotsky (1978) - Symbolic play (using dolls to represent people) is foundational to abstract thinking and language.',
      content: {
        goal: 'Connect toy family members to actual family members by comparing and naming.',
        whatToSay: [
          '"This Mommy doll is like real Mommy! Mommy! Look, Mommy doll and real Mommy!"',
          '"Baby doll looks like you, baby\'s name! Little baby! You\'re my baby!"',
          '"Where\'s Daddy? There\'s Daddy doll. And real Daddy is... there! Both Daddies!"',
          '"Grandma doll and real Grandma. Grandma! Same!"'
        ],
        whatToDo: [
          'Hold up a doll: "This is Mommy doll."',
          'Point to the real person (or their photo): "And there\'s real Mommy!"',
          'Repeat the relationship word 2-3 times.',
          'Let baby\'s name look between doll and person.',
          'Celebrate the connection: "Same! Mommy doll and Mommy!"',
          'Repeat with 2-3 family relationships.'
        ],
        watchFor: [
          'Baby\'s name looking between doll and real person.',
          'Signs of recognition or understanding.',
          'Pointing or vocalizing in response.'
        ],
        parentTip: 'This teaches a key cognitive skill: symbols (toys) can represent real things. It\'s the foundation for reading and abstract thinking later.',
        funTwist: 'Play a gentle guessing game: "Is this the Daddy doll or the Mommy doll? It\'s... Daddy! Good looking!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Simple Role Play, Dolls Interacting',
      duration: '2-3 min',
      focus: 'Social Interaction & Relationship Understanding',
      researchBasis: 'Bruner (1983) - Pretend play with social figures builds turn-taking and scaffolds language learning.',
      content: {
        goal: 'Act out simple social interactions with dolls (hugs, waving, greeting), deepening relationship understanding.',
        whatToSay: [
          '"Mommy doll gives baby doll a hug. Hug! Squeeze, squeeze!"',
          '"Wave, Daddy doll! Wave to baby\'s name!"',
          '"Baby doll says hello to Mommy. Hello! Hi, Mommy!"',
          '"Friends give high-fives! High-five! Clap!"'
        ],
        whatToDo: [
          'Move two dolls together slowly.',
          'Narrate simple actions: "Mommy and baby give hugs."',
          'Model the action with the dolls.',
          'Invite baby\'s name to make the dolls interact: "Can you make baby doll wave?"',
          'Guide their hands gently if needed.',
          'Keep actions simple: hugs, waves, sitting together.'
        ],
        watchFor: [
          'Baby\'s name imitating doll actions.',
          'Reaching to move dolls themselves.',
          'Smiling or showing enjoyment in the pretend play.',
          'Any vocalizations alongside the play.'
        ],
        parentTip: 'This is early role-play and early language, the connection between people, actions, and words.',
        funTwist: 'Make the dolls dance together, sing, or have conversations: "Mommy says \'Hello!\' and baby says \'Hi!\'"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Beautiful friend and family time!',
          'You and baby\'s name practiced:',
          '✓ Matching dolls to family roles',
          '✓ Connecting toy people to real family members',
          '✓ Simple social interactions through play',
          '✓ Understanding relationships and connections'
        ],
        reviewQuestions: [
          'Which family member or doll did baby\'s name seem most excited about?',
          'Did they attempt to name any family roles?',
          'Did they make any of the dolls interact (hug, wave, move)?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Pretend play with dolls teaches baby\'s name that toys can represent real people and that relationships matter. This symbolic thinking is foundational to reading, math, and all abstract learning. Plus, every interaction is building vocabulary and social awareness, critical for healthy relationships throughout their life.'
        },
        nextSteps: [
          'Introduce more family dolls or friends gradually, one at a time for clarity.',
          'Use doll play during natural moments: "The mommy doll is eating lunch, just like you!"',
          'Encourage baby\'s name to move dolls and make simple interactions, let their creativity lead.',
          'Talk about emotions through dolls: "Is the baby doll happy or sad today?"'
        ]
      }
    }
  ]
},

// ========= LESSON 7 =========
{
  id: 7,
  phase: '2',
  quarter: 1,
  week: 2,
  weekIndex: 1,
  dayInWeek: 2,
  title: 'Lesson 7: Mirror Emotions — Recognizing and Naming Feelings',
  theme: 'Emotional Vocabulary & Facial Expression Recognition',
  skillRecurrenceTags: ['emotion-words', 'facial-expressions', 'people-words'],
  relatedToPreviousSkills: ['people-words', 'naming', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Feelings Time!',
      duration: '1 min',
      content: {
        goal: 'Help baby\'s name recognize basic emotions (happy, sad, surprised) through facial expressions and simple actions, building emotional vocabulary and empathy foundations.',
        parentGuide: [
          'Emotion words are crucial for emotional regulation and social intelligence, children who learn feeling words early show stronger peer relationships.',
          'Facial expression recognition starts now and strengthens throughout childhood, it\'s foundational to reading others\' needs.',
          'Mirroring emotions teaches baby\'s name that feelings are normal, shared, and safe to express.',
          'This lesson spirals from Lesson 3 (photo faces) by adding emotional depth, not just "who" but "how do they feel?"'
        ],
        materials: ['Your face (best tool!)', 'Optional: mirror to see faces while expressing', 'Optional: simple emotion picture cards'],
        tip: 'Use exaggerated, playful expressions, toddlers learn better when emotions are clear and animated.',
        researchNote: 'Meltzoff & Moore (1977) - Imitation of facial expressions is how infants learn to recognize and name emotions; mirror neurons fire when watching expressions, strengthening emotional learning.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Happy Face Introduction',
      duration: '3-4 min',
      focus: 'Emotion Recognition & Facial Expression',
      researchBasis: 'Ekman & Friesen (1975) - Facial expressions are universal; babies as young as 18 months can recognize and imitate basic emotional expressions.',
      content: {
        goal: 'Introduce "happy" with exaggerated facial expression, teaching baby\'s name to recognize and mirror joy.',
        whatToSay: [
          '"Look! I\'m happy! Big happy smile! See my happy face? Ha-ppy!"',
          '"You\'re happy too! Happy baby\'s name! Smile, smile!"',
          '"Happy! We\'re both happy! Big smile! Ha-ppy!"',
          '"Can you make a happy face like Mommy? Happy! Good job!"'
        ],
        whatToDo: [
          'Make a big, exaggerated happy smile.',
          'Point to your mouth: "Happy smile!"',
          'Make eye contact with baby\'s name.',
          'Hold the expression for 3-5 seconds.',
          'Say "happy" slowly and warmly.',
          'Invite baby\'s name to copy: "Can you smile too?"',
          'If they smile, celebrate: "Yes! Happy baby\'s name!"',
          'Repeat 3-4 times, but keep it joyful, not forced.'
        ],
        examples: [
          'Use a mirror so baby\'s name can see both your happy face and their own reflection.',
          'Laugh while smiling to add joy: "Ha ha! Happy! So much happy!"'
        ],
        watchFor: [
          'Baby\'s name looking at your face.',
          'Attempting to smile or change their expression.',
          'Vocalizations or sounds paired with the expression.',
          'Eye contact or engagement.'
        ],
        parentTip: 'Emotions are contagious, your genuine happiness makes learning fun and memorable.',
        funTwist: 'Dance around while saying "happy": "Happy, happy, happy! Let\'s dance happy!" Movement + emotion = stronger learning.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Sad and Surprised Faces',
      duration: '3-4 min',
      focus: 'Emotion Variety & Expression Recognition',
      researchBasis: 'Barrett & Widen (2015) - Early exposure to multiple emotion expressions strengthens emotional understanding and regulation.',
      content: {
        goal: 'Introduce "sad" and "surprised" alongside happy, helping baby\'s name recognize emotion variety.',
        whatToSay: [
          '"Now I\'m sad. Sad face. My mouth goes down. Sa-ad."',
          '"Look! Sad. I\'m sad. Down, down. Sad."',
          '"Wait! Now I\'m surprised! Surprised face! Ohhhhh! Sur-prised!"',
          '"Big eyes, open mouth. Surprised! Can you be surprised too?"'
        ],
        whatToDo: [
          'Make a sad face: frown, droopy mouth, slower movements.',
          'Say "sad" in a soft, gentle tone (but not scary).',
          'Hold for 2-3 seconds.',
          'Then shift to surprised: open mouth, raised eyebrows, wide eyes.',
          'Say "surprised" with excitement.',
          'Alternate between happy, sad, and surprised 2-3 times.',
          'Invite baby\'s name to watch and try copying each one.'
        ],
        examples: [
          'If sad, you might say: "Sad... no smile... down."',
          'If surprised: "Oh! Ohhhhh! Surprised! Wow!"'
        ],
        watchFor: [
          'Baby\'s name following your expressions with their eyes.',
          'Attempting to change their own expression.',
          'Responding differently to each emotion (laughing at happy, quieting at sad).',
          'Any vocalization or sound-along.'
        ],
        parentTip: 'Don\'t stay in "sad" for long, it\'s not meant to upset, just to show that feelings vary. Return to happy afterward.',
        funTwist: 'After each emotion, add a silly sound or movement: "Happy, yay!" "Sad, sigh." "Surprised, whoa!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Emotion Storytelling with Dolls',
      duration: '2-3 min',
      focus: 'Connecting Emotions to Social Situations',
      researchBasis: 'Denham et al. (2003) - Learning emotions through narratives and social contexts helps children apply emotion words in real situations.',
      content: {
        goal: 'Use toy dolls or animals to show emotions in simple stories, deepening emotional understanding.',
        whatToSay: [
          '"The baby doll is happy! Happy baby! Big smile!"',
          '"The puppy is sad. Sad puppy. No smile."',
          '"Oh! Surprise! The friend is surprised! Ohhhhh!"',
          '"How does baby feel? Happy? Yes! Baby is happy!"'
        ],
        whatToDo: [
          'Use a doll or stuffed animal.',
          'Make its face show an emotion (happy smile, sad frown).',
          'Name the emotion: "The baby doll is happy!"',
          'Ask baby\'s name: "Is the doll happy or sad?"',
          'Change the doll\'s expression and name the new emotion.',
          'Repeat with 2-3 emotions and toy figures.'
        ],
        watchFor: [
          'Baby\'s name watching the doll\'s expressions.',
          'Pointing to toys or showing interest.',
          'Attempting to change the doll\'s face themselves.',
          'Vocalizing or responding to emotion questions.'
        ],
        parentTip: 'Toys make emotions safer and more playful, dolls can feel sad without upsetting baby\'s name.',
        funTwist: 'Let baby\'s name squeeze or hug a doll after naming its emotion: "The sad puppy needs a hug. Can you hug the sad puppy?"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Beautiful feelings exploration!',
          'You and baby\'s name practiced:',
          '✓ Recognizing happy faces and expressions',
          '✓ Identifying sad and surprised emotions',
          '✓ Mirroring facial expressions',
          '✓ Naming emotions in simple stories'
        ],
        reviewQuestions: [
          'Which emotion did baby\'s name respond to most?',
          'Did they attempt to mirror any of your expressions?',
          'Did they show interest in the toy emotions?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Emotion vocabulary is emotional intelligence. Children who learn to name and recognize feelings early develop stronger friendships, better self-regulation, and healthier responses to challenges. Every emotion word you teach builds empathy and understanding, gifts that last a lifetime.'
        },
        nextSteps: [
          'Point out emotions throughout the day: "Your friend looks happy!" or "The dog seems sad."',
          'Name baby\'s name\'s own emotions: "You\'re happy! Big smile!" or "You seem sad. Let\'s find something fun."',
          'Use emotion words in books: "The character is surprised!"',
          'Celebrate all feelings, sad, happy, surprised, as normal and okay.'
        ]
      }
    }
  ]
},

// ========= LESSON 8 =========
{
  id: 8,
  phase: '2',
  quarter: 1,
  week: 2,
  weekIndex: 1,
  dayInWeek: 3,
  title: 'Lesson 8: Action Parade — Learning Verbs Through Movement and Play',
  theme: 'Action Words & Kinesthetic Learning',
  skillRecurrenceTags: ['action-words', 'verbs', 'movement', 'following-directions'],
  relatedToPreviousSkills: ['listening', 'naming', 'imitation'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Movement Time!',
      duration: '1 min',
      content: {
        goal: 'Teach action words (run, jump, clap, dance, sit) by pairing words with movements, building verb vocabulary and motor coordination.',
        parentGuide: [
          'Action words (verbs) are learned fastest when paired with movement, the brain remembers what the body does.',
          'Kinesthetic learning (learning through movement) is particularly powerful for toddlers whose brains are wired for action.',
          'Action vocabulary predicts stronger sentence-building skills later, verbs are the engine of language.',
          'This lesson spirals from Week 1 by expanding vocabulary into a new category (actions) and combining language with motor practice.'
        ],
        materials: ['Open space (living room or outdoor area)', 'Your body (best tool!)', 'Optional: music for dancing'],
        tip: 'Move big and slowly at first, toddlers need clear, exaggerated movements to understand and imitate.',
        researchNote: 'Trainor et al. (2005) - Movement paired with language strengthens neural pathways for both physical coordination and vocabulary retrieval.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Name and Demonstrate One Action',
      duration: '3-4 min',
      focus: 'Action Word Introduction & Motor Imitation',
      researchBasis: 'Meltzoff & Moore (1977) - Imitation of actions is foundational to language learning; children learn verbs by mirroring adult movements.',
      content: {
        goal: 'Introduce one action word (e.g., "clap") with clear, exaggerated movement, inviting baby\'s name to imitate.',
        whatToSay: [
          '"Let\'s clap! Clap, clap, clap! Can you clap?"',
          '"Good clapping! You\'re clapping! Clap, clap!"',
          '"Clap your hands! Clap, clap, clap! That\'s clapping!"',
          '"Again? More clapping? Clap! Clap! Clap!"'
        ],
        whatToDo: [
          'Choose one clear action: clap, jump, dance, sit, or wave.',
          'Say the word slowly: "Clap."',
          'Do the action big and slow, exaggerate so baby\'s name sees it clearly.',
          'Say the word again while doing it: "Clap, clap, clap!"',
          'Invite baby\'s name: "Can you clap too?"',
          'Guide their hands gently if needed: clap together.',
          'Celebrate every attempt: "Yes! You\'re clapping! Great clapping!"',
          'Repeat 5-6 times, building excitement.'
        ],
        examples: [
          'For "clap": slow, deliberate hand claps, facing baby\'s name so they can see.',
          'For "jump": big, bouncy jumps with "Jump! Jump!" spoken clearly.'
        ],
        watchFor: [
          'Baby\'s name watching your movement.',
          'Attempting to imitate (even partially).',
          'Vocalizations paired with movement.',
          'Excitement or engagement.'
        ],
        parentTip: 'If they don\'t imitate perfectly, celebrate any movement, effort is learning.',
        funTwist: 'Add a silly sound with each action: "Clap, yay!" or "Jump, whee!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Add More Actions to the Parade',
      duration: '3-4 min',
      focus: 'Multiple Action Words & Sequencing',
      researchBasis: 'Hart & Risley (1995) - Variety in word exposure accelerates vocabulary growth faster than repetition of single words.',
      content: {
        goal: 'Introduce 2-3 additional actions, creating a simple sequence for baby\'s name to follow.',
        whatToSay: [
          '"Now let\'s dance! Dance, dance! Can you dance?"',
          '"Great dancing! Now jump! Jump, jump!"',
          '"Good job! Now sit down. Sit, sit. We\'re sitting!"',
          '"Clap, dance, jump! All the actions!"'
        ],
        whatToDo: [
          'Do one action (e.g., clap), say it clearly.',
          'Then transition to the next (e.g., dance): "Now dance!"',
          'Move into the new action with exaggerated transition.',
          'Do 3-4 actions in a row: clap → dance → jump → sit.',
          'Repeat the sequence 2-3 times.',
          'Vary the order to keep it playful and unpredictable.',
          'Invite baby\'s name to follow along.'
        ],
        examples: [
          '"Clap! Now... JUMP! Jump, jump, jump! Now sit. Sit, sit. Stay sitting."',
          'Move between actions with humor: stumble playfully, act surprised.'
        ],
        watchFor: [
          'Baby\'s name following transitions between actions.',
          'Attempting multiple actions in sequence.',
          'Laughing or showing excitement at action changes.',
          'Following simple instructions: "Jump!" or "Clap!"'
        ],
        parentTip: 'This combines action words with listening comprehension, two skills at once.',
        funTwist: 'Do actions in funny ways: "Jump like a frog! Ribbit! Now dance like a sleepy bear!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Follow Simple Action Commands',
      duration: '2-3 min',
      focus: 'Receptive Action Language & Coordination',
      researchBasis: 'Snow (1999) - Children understand (receptive language) before they produce (expressive language); understanding commands comes first.',
      content: {
        goal: 'Give simple one-word commands ("Jump!" "Clap!") and watch baby\'s name respond, reinforcing action word comprehension.',
        whatToSay: [
          '"Jump!"',
          '"Clap!"',
          '"Dance!"',
          '"Sit!"',
          '"Good jumping! Now clap!"'
        ],
        whatToDo: [
          'Start by demonstrating the action yourself.',
          'Then say just the command word: "Jump!"',
          'Wait 2-3 seconds for baby\'s name to respond.',
          'If they move in any way, celebrate: "Yes! You jumped!"',
          'If they don\'t respond, model again and guide gently.',
          'Give 3-4 commands in sequence.',
          'Vary which action you command (randomize).'
        ],
        examples: [
          'Say "Jump!" and wait. If nothing happens, jump with them while saying "Jump! That\'s jumping!"',
          'Celebrate partially correct attempts: "You moved! You jumped!"'
        ],
        watchFor: [
          'Baby\'s name responding to commands (even slowly or partially).',
          'Understanding the pattern between word and action.',
          'Attempting to follow along with peers or you.'
        ],
        parentTip: 'This tests comprehension before production, it\'s normal if they understand before they can do the action perfectly.',
        funTwist: 'Give silly commands: "Jump like a bunny! Clap like a seal!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Amazing action parade!',
          'You and baby\'s name practiced:',
          '✓ Learning action words through movement',
          '✓ Imitating simple movements and gestures',
          '✓ Following action commands',
          '✓ Combining language with physical coordination'
        ],
        reviewQuestions: [
          'Which action did baby\'s name enjoy most?',
          'Did they attempt to copy your movements?',
          'Did they respond to any commands ("Jump!" or "Clap!")?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Action words are the foundation of storytelling and conversation. When babies learn verbs paired with movement, they understand that words connect to actions in the world. This kinesthetic learning builds strong neural pathways for language and motor skills simultaneously, two developmental goals at once.'
        },
        nextSteps: [
          'Play "action freeze" throughout the day: pause and name whatever movement baby\'s name is doing.',
          'Use action words during routines: "Let\'s run to the car! Jump into the seat! Clap for being ready!"',
          'Introduce new actions gradually, one per day or one per week.',
          'Act out actions in books: "The bear is dancing! Can we dance like the bear?"'
        ]
      }
    }
  ]
},

// ========= LESSON 9 =========
{
  id: 9,
  phase: '2',
  quarter: 1,
  week: 2,
  weekIndex: 1,
  dayInWeek: 4,
  title: 'Lesson 9: Storytime Introductions — Characters and Connection Through Books',
  theme: 'Early Comprehension & Character Recognition',
  skillRecurrenceTags: ['people-words', 'naming', 'listening', 'story-comprehension'],
  relatedToPreviousSkills: ['naming', 'pointing', 'following-directions', 'people-words'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Time!',
      duration: '1 min',
      content: {
        goal: 'Read simple picture books together, pointing to characters and naming them, building story comprehension and print awareness.',
        parentGuide: [
          'Shared reading is one of the most powerful literacy tools, it builds vocabulary 3x faster than conversation alone.',
          'Early book experiences create lifelong love of reading and positive associations with words and stories.',
          'Pointing to characters and naming them combines all of Week 2\'s skills: people recognition, naming, and listening.',
          'This lesson spirals from Lessons 3, 6, and 7 by moving people recognition into the book context, expanding the skill\'s utility.'
        ],
        materials: ['1-2 simple picture books (board books or sturdy picture books)', 'Characters should be clear and recognizable', 'Your voice and warmth'],
        tip: 'Choose books with large, bright pictures and 1-2 characters per page. Repetitive text is ideal for this age.',
        researchNote: 'Bus & van IJzendoorn (1995) - Shared reading with an engaged parent predicts stronger vocabulary and literacy skills throughout childhood.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Characters and Point',
      duration: '3-4 min',
      focus: 'Character Recognition & Pointing Practice',
      researchBasis: 'Whitehurst & Lonigan (1998) - Dialogic reading (asking questions and pointing during stories) accelerates comprehension and vocabulary.',
      content: {
        goal: 'Open the book and point to characters, naming them clearly and inviting baby\'s name to point along.',
        whatToSay: [
          '"Look! There\'s a bear! A big bear! Can you point to the bear?"',
          '"Yes! You pointed to the bear! Good pointing!"',
          '"This is Mama Bear. Ma-ma Bear. Where\'s Mama Bear?"',
          '"And look, there\'s a little bear. Little baby bear. Baby bear!"'
        ],
        whatToDo: [
          'Open to a page with clear characters.',
          'Point to a character slowly: "Look, a bear!"',
          'Say the character name 2-3 times: "Bear. Big bear. That\'s a bear."',
          'Ask baby\'s name to point: "Can you point to the bear?"',
          'Guide their finger gently if needed.',
          'Celebrate: "Yes! You pointed to the bear!"',
          'Move to the next character and repeat.',
          'Keep the pace unhurried and playful.'
        ],
        examples: [
          'For a bear: "Look! There\'s a bear! Grrrr! A big bear!"',
          'For a child character: "That\'s a little girl. A girl! Can you see the girl?"'
        ],
        watchFor: [
          'Baby\'s name following your pointing with their eyes.',
          'Attempting to point themselves.',
          'Vocalizing or making sounds in response to characters.',
          'Showing interest or excitement about the book.'
        ],
        parentTip: 'Keep pages turning slow, give baby\'s name time to look and process.',
        funTwist: 'Make animal sounds for character: "The bear says grrrr! Can you say grrrr?"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Ask Simple "Where" Questions',
      duration: '2-3 min',
      focus: 'Receptive Language & Comprehension',
      researchBasis: 'Snow (1983) - Early comprehension questions during reading build listening skills and book engagement.',
      content: {
        goal: 'Ask "Where is...?" questions to test and reinforce character recognition.',
        whatToSay: [
          '"Where\'s the bear? Can you find the bear?"',
          '"Good! You found the bear!"',
          '"Where\'s Mama? Where\'s Mama Bear? Point to Mama!"',
          '"I see the bear too! Big bear!"'
        ],
        whatToDo: [
          'Point to a character: "See the bear? That\'s a bear."',
          'Turn to the next page or close the book slightly.',
          'Ask: "Where\'s the bear? Can you find the bear?"',
          'Wait 2-3 seconds for baby\'s name to respond.',
          'If they point, celebrate: "Yes! There\'s the bear!"',
          'If they don\'t respond, point again and say: "Here\'s the bear!"',
          'Repeat with 2-3 characters throughout the book.'
        ],
        examples: [
          'Ask about a character they just saw: "Remember the bear? Where is the bear now? Look, there it is!"',
          'Use the same character multiple times for repetition.'
        ],
        watchFor: [
          'Baby\'s name searching for the character.',
          'Pointing to the correct character or area.',
          'Understanding that books are objects we can look at and talk about.',
          'Sustained attention to the pages.'
        ],
        parentTip: 'Don\'t pressure for correct answers, the goal is engagement, not accuracy.',
        funTwist: 'Add suspense: "Where\'s the bear? Is it here? No... how about here? There it is!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Narrate Simple Actions',
      duration: '2-3 min',
      focus: 'Action Words & Story Narration',
      researchBasis: 'Rowe (2012) - Parent narration during reading builds vocabulary and listening comprehension faster than passive listening.',
      content: {
        goal: 'Describe what characters are doing in the book, connecting action words to visual scenes.',
        whatToSay: [
          '"The bear is walking. Walk, walk, walking. The bear walks."',
          '"Now the bear is eating! The bear eats. Nom, nom, nom!"',
          '"Look! The bear is sleeping. Sleepy bear. Zzzzz."',
          '"The baby is playing! Playing with toys!"'
        ],
        whatToDo: [
          'Point to a character and their action: "Look, the bear is walking."',
          'Use slow, clear language.',
          'Repeat the action word: "Walk. Walking. The bear is walking."',
          'Add simple sound effects if it fits: eating sounds, sleeping sounds.',
          'Turn the page and name the next action.',
          'Keep narration simple, 1-2 words per action.'
        ],
        examples: [
          'If a character eats: "The bear eats! Munch, munch, munch!"',
          'If a character sleeps: "Sleeping bear. Zzzzz. The bear sleeps."'
        ],
        watchFor: [
          'Baby\'s name watching the characters and actions.',
          'Following your narration with attention.',
          'Attempting to make sounds along with the narration.',
          'Showing interest in repeated actions.'
        ],
        parentTip: 'This combines naming, actions, and listening, three skills spiraling together.',
        funTwist: 'Act out the actions while reading: "The bear is jumping! Let\'s jump like the bear!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful story time!',
          'You and baby\'s name practiced:',
          '✓ Recognizing and naming book characters',
          '✓ Pointing to people and objects in stories',
          '✓ Following "where" questions',
          '✓ Connecting action words to visual scenes'
        ],
        reviewQuestions: [
          'Which character did baby\'s name respond to most?',
          'Did they point at the right character when asked?',
          'Did they seem engaged with the story actions?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Shared reading is the single most powerful tool for literacy development. When you read together, point, and talk about characters, you\'re building vocabulary, comprehension, attention, and a love of stories. These skills predict reading success throughout school and a lifelong love of learning.'
        },
        nextSteps: [
          'Read the same book 2-3 times this week, repetition builds confidence and memory.',
          'Let baby\'s name hold and touch the book, ownership builds engagement.',
          'Point and ask "Where\'s...?" questions every time you read.',
          'Add your own narration, your words are more powerful than the text alone.',
          'Visit the library and choose books together based on baby\'s name\'s interests.'
        ]
      }
    }
  ]
},

// ========= LESSON 10 =========
{
  id: 10,
  phase: '2',
  quarter: 1,
  week: 2,
  weekIndex: 1,
  dayInWeek: 5,
  title: 'Lesson 10: Week 2 Integration Review — People, Feelings, and Stories',
  theme: 'Integration & Celebration of Week 2 Skills',
  skillRecurrenceTags: ['people-words', 'emotion-words', 'naming', 'story-comprehension'],
  relatedToPreviousSkills: ['all-week-2-skills'],
  duration: '15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Review Day!',
      duration: '1 min',
      content: {
        goal: 'Celebrate and integrate all of Week 2\'s skills (family recognition, greetings, emotions, actions, and stories) through play and reflection.',
        parentGuide: [
          'Review days are not about testing, they\'re about celebrating growth and strengthening connections between skills.',
          'Integration reinforces learning by showing how naming, emotions, and actions work together in real life.',
          'Taking time to notice progress builds parent confidence and awareness of baby\'s name\'s development.',
          'This lesson spirals all five days of Week 2 into one cohesive, joyful experience.'
        ],
        materials: ['All materials from Week 2 (photos, dolls, books, toys)', 'Your enthusiasm and celebration spirit', 'Optional: simple sticker chart or photo of the week'],
        tip: 'Keep this playful and celebratory, no pressure. The goal is joy, not perfection.',
        researchNote: 'Cepeda et al. (2006) - Spaced repetition with integration (connecting multiple skills) strengthens retention and transfer of learning.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Family Photo + Emotion Review',
      duration: '3-4 min',
      focus: 'Combining People Recognition with Emotional Understanding',
      researchBasis: 'Denham et al. (2003) - Integrating emotion words with people recognition builds social-emotional competence.',
      content: {
        goal: 'Show family photos and ask baby\'s name to identify people AND their emotions, combining two Week 2 skills.',
        whatToSay: [
          '"Look! That\'s Mommy. Is Mommy happy? Yes! Mommy is happy! Big smile!"',
          '"There\'s Grandma! How does Grandma look? Happy? Yes, happy Grandma!"',
          '"Can you show me a happy face like Daddy? Happy! Good!"',
          '"Your family makes happy faces. Everyone is happy!"'
        ],
        whatToDo: [
          'Show a family photo.',
          'Name the person: "That\'s Mommy."',
          'Ask about their emotion: "Is Mommy happy or sad?"',
          'If baby\'s name responds, celebrate.',
          'If not, model: "Mommy looks happy! Big smile!"',
          'Invite baby\'s name to make the same emotion: "Can you smile like Mommy?"',
          'Repeat with 2-3 family members.'
        ],
        examples: [
          'Photo of smiling family member: "Happy! Everyone looks so happy!"',
          'Photo of someone who looks calm: "Peaceful. Quiet. Calm."'
        ],
        watchFor: [
          'Baby\'s name recognizing family members.',
          'Attempting to identify or mirror emotions.',
          'Connecting people and feelings together.',
          'Excitement when seeing familiar faces.'
        ],
        parentTip: 'This shows baby\'s name that people have feelings, building empathy and social awareness.',
        funTwist: 'Make faces along with photos: "Happy Mommy, happy!" while you smile, creating connection and play.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Action + Character Story Replay',
      duration: '3-4 min',
      focus: 'Combining Action Words with Story Characters',
      researchBasis: 'Bruner (1983) - Integrating multiple learned skills in play scenarios strengthens overall language competence.',
      content: {
        goal: 'Use dolls or toys to act out simple stories combining characters from Week 2, actions, and emotions.',
        whatToSay: [
          '"The Mommy doll is walking! Walk, walk. The Mommy walks."',
          '"Now she\'s happy! Mommy is happy! Big smile!"',
          '"The baby is dancing! Dance, dance! The baby dances and is happy!"',
          '"The Daddy is clapping! Clap, clap! Everyone is happy and clapping!"'
        ],
        whatToDo: [
          'Set up 2-3 dolls or toys.',
          'Pick an action from Week 3 prep: walking, dancing, clapping.',
          'Move the doll: "The bear is dancing!"',
          'Add an emotion: "The bear is happy while dancing!"',
          'Narrate the combination: "Happy bear dancing. Dance, dance!"',
          'Invite baby\'s name to make dolls move or act alongside you.',
          'Repeat with 2-3 action-emotion-character combinations.'
        ],
        examples: [
          '"The baby doll is running and is happy! Run, run, run! Happy running!"',
          '"The friend is playing and surprised! Oh, surprise! Playing!"'
        ],
        watchFor: [
          'Baby\'s name watching the doll stories.',
          'Attempting to move dolls themselves.',
          'Understanding that dolls can have feelings and actions.',
          'Interest in the combinations.'
        ],
        parentTip: 'This is early narrative skill, combining multiple elements into a coherent story.',
        funTwist: 'Let baby\'s name be the director: "What should the bear do? Jump? Yes, let\'s jump!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Story Book Walk + Integration',
      duration: '3-4 min',
      focus: 'Complete Skill Integration Through Shared Reading',
      researchBasis: 'Whitehurst & Lonigan (1998) - Dialogic reading combining naming, emotions, and actions strengthens all literacy domains.',
      content: {
        goal: 'Read a favorite book from the week, integrating questions about characters, emotions, and actions.',
        whatToSay: [
          '"There\'s the bear! Where\'s the bear? What is the bear doing? Walking! The bear walks."',
          '"Is the bear happy? Yes! Happy bear! Big smile on the bear!"',
          '"Can you point to the happy bear? Good pointing! That\'s the happy walking bear!"',
          '"You remembered all about the bear! Great story time!"'
        ],
        whatToDo: [
          'Choose a familiar book from the week.',
          'Go through it page by page.',
          'Ask about characters: "Where\'s...?"',
          'Ask about actions: "What is the bear doing?"',
          'Ask about emotions: "Is the bear happy or sad?"',
          'Encourage baby\'s name to point and respond.',
          'Celebrate all responses and engagement.'
        ],
        examples: [
          '"See the bear? (pause) Walking! What is the bear doing? Walking, yes! Is the bear happy? Yes, happy bear!"',
          'Integrate all skills: "The happy bear is walking. Where\'s the walking bear? There!"'
        ],
        watchFor: [
          'Baby\'s name engaged with all question types.',
          'Pointing and responding to characters.',
          'Following the combined questions.',
          'Showing memory of the story.'
        ],
        parentTip: 'This is sophisticated listening and comprehension, celebrate every bit of engagement.',
        funTwist: 'Act out the story together: "The bear is walking! Let\'s walk like the bear! Walk, walk, walk!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Week 2 Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'You and baby\'s name had an amazing Week 2!',
          'You practiced:',
          '✓ Recognizing family members and friends',
          '✓ Waving, greeting, and saying goodbye',
          '✓ Recognizing and mirroring emotions',
          '✓ Learning action words through movement',
          '✓ Pointing to and naming book characters',
          '✓ Combining all these skills in stories and play'
        ],
        reviewQuestions: [
          'Which day was baby\'s name\'s favorite?',
          'Which people words did they show the most interest in?',
          'What new emotion, action, or story moment stood out?'
        ],
        parentTakeaway: {
          title: 'Why This Week Was Powerful',
          content: 'Week 2 moved beyond objects into the social world, people, feelings, actions, and stories. These domains are where language lives in real life. When baby\'s name learns people words alongside emotions and actions, they\'re building the foundation for relationships, communication, and understanding the world around them. Every interaction this week was building empathy, vocabulary, and social intelligence.'
        },
        nextSteps: [
          'Continue daily family photo time, this skill will deepen and expand.',
          'Notice emotions throughout the day: "Grandma looks happy!" or "You seem surprised!"',
          'Use action words during routines: "Let\'s jump to the car! Run to the park!"',
          'Read together every day, this is the single most powerful learning activity.',
          'Celebrate Week 2 with a small reward or special moment, you\'ve both done wonderful work!'
        ]
      }
    }
  ]
},

// ========= LESSON 11 =========
{
  id: 11,
  phase: '2',
  quarter: 1,
  week: 3,
  weekIndex: 2,
  dayInWeek: 1,
  title: 'Lesson 11: Move and Say — Introducing Action Words Through Play',
  theme: 'Action Vocabulary & Kinesthetic Learning',
  skillRecurrenceTags: ['action-words', 'verbs', 'movement', 'body-awareness'],
  relatedToPreviousSkills: ['listening', 'imitation', 'naming'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Action Week!',
      duration: '1 min',
      content: {
        goal: 'Begin Week 3 by introducing action words (run, jump, clap, dance, sit, stand) paired with clear, exaggerated movements, building verb vocabulary through kinesthetic experience.',
        parentGuide: [
          'Action words (verbs) are learned fastest when paired with whole-body movement, children learn by doing.',
          'Week 3 spirals from Week 1\'s naming and Week 2\'s emotions by adding a new vocabulary category (actions) within familiar contexts.',
          'Verb vocabulary predicts stronger sentence construction and storytelling skills, verbs are the "engines" of language.',
          'Movement also supports motor development, coordination, and physical confidence alongside language growth.'
        ],
        materials: ['Open space (living room, backyard, or gym)', 'Your body (the best tool)', 'Optional: music or rhythm instrument'],
        tip: 'Exaggerate movements so baby\'s name can clearly see and understand each action.',
        researchNote: 'Trainor et al. (2005) - Synchronized movement and language activate overlapping neural networks; pairing words with actions strengthens memory and comprehension.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce One Action, Slow and Clear',
      duration: '3-4 min',
      focus: 'Action Word Introduction & Motor Imitation',
      researchBasis: 'Meltzoff & Moore (1977) - Infants learn language through observation and imitation of adult actions; clear, exaggerated movements facilitate learning.',
      content: {
        goal: 'Pick one action (e.g., "run" or "jump") and demonstrate it slowly and repeatedly while saying the word clearly.',
        whatToSay: [
          '"Let\'s run! Run, run, run! Can you run?"',
          '"I\'m running! See me running? Run, run, run!"',
          '"You\'re running too! Good running!"',
          '"Run, run, run! This is running!"'
        ],
        whatToDo: [
          'Choose one clear action: run, jump, clap, dance, sit, or wave.',
          'Do the action slowly and exaggerated.',
          'Say the action word clearly: "Run."',
          'Repeat while moving: "Run, run, run!"',
          'Make eye contact and invite: "Can you run too?"',
          'If baby\'s name moves or tries, celebrate immediately.',
          'If not, don\'t force, keep demonstrating playfully.',
          'Do 6-8 repetitions, building fun energy.'
        ],
        examples: [
          'For "run": jog in place slowly, saying "Run! Run! Run!" with enthusiasm.',
          'For "jump": do small bounces, saying "Jump! Jump! Jump!" while looking at baby\'s name.'
        ],
        watchFor: [
          'Baby\'s name watching your movement intently.',
          'Attempting any movement in response.',
          'Vocalizations or sounds paired with the action.',
          'Smiling or showing excitement.'
        ],
        parentTip: 'Even tiny movements (shifting weight, bouncing slightly) count as learning, celebrate any response.',
        funTwist: 'Add a funny sound to each movement: "Run, whooosh!" or "Jump, boom!" to increase engagement and fun.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Follow Me — Imitation Game',
      duration: '2-3 min',
      focus: 'Imitation and Turn-Taking',
      researchBasis: 'Vygotsky (1978) - Guided imitation in playful contexts (scaffolding) accelerates learning faster than independent practice.',
      content: {
        goal: 'Shift from demonstration to invitation: ask baby\'s name to copy your actions, creating a turn-taking game.',
        whatToSay: [
          '"Can you run like me? Run, run, run!"',
          '"Good running! Now I\'ll run. Look at me!"',
          '"Your turn, jump! Jump with me!"',
          '"You\'re jumping! I see you jumping!"'
        ],
        whatToDo: [
          'Do the action: "I\'m running!"',
          'Pause and ask baby\'s name: "Your turn, run!"',
          'Wait 2-3 seconds.',
          'If they move or attempt it, celebrate: "Yes! You\'re running!"',
          'If not, run alongside them while holding their hand.',
          'Create rhythm: you move, they move, back and forth.',
          'Repeat 4-6 times, alternating "my turn, your turn."'
        ],
        examples: [
          '"Watch me jump! (Jump) Now you jump! (Wait) Good jumping!"',
          'Hold their hand and move together: "We\'re running! Run, run!"'
        ],
        watchFor: [
          'Baby\'s name attempting to imitate.',
          'Understanding the turn-taking pattern.',
          'Laughing or showing delight in the back-and-forth.',
          'Repeating movements after seeing you do them.'
        ],
        parentTip: 'This combines imitation, listening, and turn-taking, three crucial skills at once.',
        funTwist: 'Make it unpredictable: sometimes run fast, sometimes slow. "Slow running... now fast running!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Name the Action While Playing',
      duration: '2-3 min',
      focus: 'Receptive Understanding & Naturalistic Learning',
      researchBasis: 'Hart & Risley (1995) - Consistent naming in natural contexts (learning through play) builds vocabulary fastest.',
      content: {
        goal: 'Continue the action play while narrating what\'s happening, deepening the word-action connection.',
        whatToSay: [
          '"You\'re running! Good running!"',
          '"I see you running fast!"',
          '"Running, running, running! We\'re both running!"',
          '"Look, we\'re running together!"'
        ],
        whatToDo: [
          'Play alongside baby\'s name (you both do the action).',
          'Narrate continuously: "We\'re running! Run, run!"',
          'Vary the narration: "Fast running!" "Slow running!" "Running together!"',
          'Point out their actions: "You\'re running! I see you!"',
          'Repeat the action word 8-10 times in different ways.',
          'Keep the energy playful and celebratory.'
        ],
        examples: [
          'If jumping: "We\'re jumping! Jump, jump, jump! Big jumps! Small jumps!"',
          'If clapping: "Clap, clap, clap! We\'re clapping together!"'
        ],
        watchFor: [
          'Baby\'s name sustaining the action.',
          'Showing understanding that the word matches their movement.',
          'Vocalizing or attempting the word while moving.',
          'Enjoying the repetition and rhythm.'
        ],
        parentTip: 'Repetition isn\'t boring for toddlers, it\'s how they learn. Do this 3-4 times without concern for monotony.',
        funTwist: 'Change the setting: "Run around the couch!" "Jump on the pillow!" Variety keeps it fresh.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Amazing action practice!',
          'You and baby\'s name practiced:',
          '✓ Learning an action word through movement',
          '✓ Imitating movements and actions',
          '✓ Turn-taking with body movement',
          '✓ Understanding action words in play'
        ],
        reviewQuestions: [
          'Which action did baby\'s name seem most interested in?',
          'Did they attempt to copy your movements?',
          'How did they respond to the turn-taking game?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Action words are the foundation of communication. When baby\'s name learns verbs paired with their own movements, they understand that language describes the world they can see, feel, and do. This kinesthetic learning creates strong neural pathways for both language and motor development, two critical areas of growth.'
        },
        nextSteps: [
          'Practice this same action throughout the day: "Let\'s run to the door!" or "Run to Grandma!"',
          'Add the action word to familiar routines: running to meals, jumping into the bath, clapping for good jobs.',
          'Introduce one new action per day this week (jump, sit, stand, dance, wave).',
          'Play action games: move while music plays, freeze when it stops (introducing action + listening combined).'
        ]
      }
    }
  ]
},

// ========= LESSON 12 =========
{
  id: 12,
  phase: '2',
  quarter: 1,
  week: 3,
  weekIndex: 2,
  dayInWeek: 2,
  title: 'Lesson 12: Follow Me  Action Commands and Listening Comprehension',
  theme: 'Receptive Language & Following Directions',
  skillRecurrenceTags: ['action-words', 'listening', 'following-directions', 'comprehension'],
  relatedToPreviousSkills: ['listening', 'action-words', 'imitation'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Action Commands!',
      duration: '1 min',
      content: {
        goal: 'Build receptive understanding of action words by giving simple commands ("Jump!" "Sit!") and watching baby\'s name respond, spiraling from yesterday\'s action introduction.',
        parentGuide: [
          'Receptive language (understanding) develops before expressive language (producing words), baby\'s name understands actions before naming them.',
          'Following commands builds listening skills, attention, and compliance naturally.',
          'This lesson bridges yesterday\'s demonstration-based learning into command-based learning (more advanced).',
          'Success with commands builds baby\'s name\'s confidence and strengthens the word-action connection.'
        ],
        materials: ['Open space', 'Your voice and energy', 'Optional: music or sound cues'],
        tip: 'Start with very simple, one-word commands. Give baby\'s name time (2-3 seconds) to respond before repeating.',
        researchNote: 'Snow (1999) - Following commands requires comprehension and motor coordination; success predicts stronger language development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Single Action Commands with Modeling',
      duration: '3-4 min',
      focus: 'Receptive Action Language & Command Following',
      researchBasis: 'Tomasello & Todd (1983) - Children follow commands better when they\'ve first watched an adult model the action.',
      content: {
        goal: 'Say a single command after demonstrating the action, building understanding through repetition and modeling.',
        whatToSay: [
          '"Jump! (demonstrate) Jump!"',
          '"Clap! (clap with them) Clap, clap!"',
          '"Sit! (sit down) You sit too!"',
          '"Good listening! You jumped when I said jump!"'
        ],
        whatToDo: [
          'Say an action name and do it: "Jump!" (jump).',
          'Say it again: "Jump!"',
          'Wait 2-3 seconds for baby\'s name to respond.',
          'If they move or attempt it, celebrate: "Yes! You jumped!"',
          'If not, do it with them: hold hands and jump together while saying "Jump!"',
          'Repeat the same command 3-4 times before switching to a new action.',
          'Give 4-5 different commands throughout the activity.'
        ],
        examples: [
          '"Clap!" (you clap) (wait) "Yes, you\'re clapping!"',
          '"Stand!" (you stand) (wait) (guide them gently if needed) "You\'re standing!"'
        ],
        watchFor: [
          'Baby\'s name looking at you when you speak.',
          'Attempting to follow the command.',
          'Any movement in response (even slight).',
          'Understanding that the word predicts the action.'
        ],
        parentTip: 'If they don\'t respond immediately, don\'t repeat endlessly, just model again and move on. Patience builds confidence.',
        funTwist: 'Use a funny voice for commands: "Jumb in a silly way!" or whisper commands: "Shhh... jump quietly!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Commands Without Modeling',
      duration: '2-3 min',
      focus: 'Independent Comprehension & Command Following',
      researchBasis: 'Hart & Risley (1995) - Children progress from imitating modeled actions to following commands without demonstration.',
      content: {
        goal: 'Give action commands without modeling first, testing true comprehension and building independence.',
        whatToSay: [
          '"Jump!"',
          '"Good job! Now clap!"',
          '"Dance!"',
          '"Sit down!"',
          '"You\'re such a good listener!"'
        ],
        whatToDo: [
          'Say a command without demonstrating first: "Jump!"',
          'Wait 2-3 seconds.',
          'If baby\'s name responds, celebrate enthusiastically: "Yes! You jumped! You heard me!"',
          'If not, model it once and try again: "Let me show you. (Do action) Now you try!"',
          'Give 5-6 commands in varying order.',
          'Mix familiar and slightly new actions.',
          'Keep the pace energetic and fun.'
        ],
        examples: [
          '"Stand!" (wait) "You\'re standing! Great listening!"',
          '"Dance!" (wait) "Wonderful dancing!"'
        ],
        watchFor: [
          'Baby\'s name responding to commands they\'ve learned.',
          'Showing understanding without needing a model.',
          'Excitement or engagement with the game.',
          'Attempting actions, even if not perfect.'
        ],
        parentTip: 'Some misses are normal and okay, the goal is building comprehension, not perfection.',
        funTwist: 'Vary the energy: "Sleepy clap" (slow, gentle), "Happy clap" (fast, joyful), "Giant clap" (big movements).'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Action Sequence, Two Commands in a Row',
      duration: '2-3 min',
      focus: 'Working Memory & Multi-Step Following',
      researchBasis: 'Fernald & Kuhl (1987) - Short pauses between commands help toddlers process and respond; sequential commands build working memory.',
      content: {
        goal: 'Give two action commands in quick succession ("Jump! Then sit!"), building attention and memory.',
        whatToSay: [
          '"Jump and then clap!"',
          '"First, run. Then sit!"',
          '"Dance, dance, dance. Now stop!"',
          '"You did it! You listened to two things!"'
        ],
        whatToDo: [
          'Give first command: "Jump!"',
          'Wait 1-2 seconds for response.',
          'Then give second command: "Now clap!"',
          'Wait for response.',
          'Celebrate: "You jumped AND clapped! Great listening!"',
          'Repeat with 2-3 two-command sequences.',
          'Keep commands simple and clear.'
        ],
        examples: [
          '"Jump, jump, jump! Now sit!" (pause between commands)',
          '"Dance! Then wave!" (clear pause so baby\'s name can process)'
        ],
        watchFor: [
          'Baby\'s name attempting both actions in sequence.',
          'Understanding the transition between commands.',
          'Building working memory and attention span.',
          'Celebrating their own success with expressions or sounds.'
        ],
        parentTip: 'This is advanced listening, many toddlers need to practice. Celebrate all attempts.',
        funTwist: 'Mix silly commands: "Hop like a bunny! Then sleep like a bear!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Great command-following practice!',
          'You and baby\'s name practiced:',
          '✓ Understanding action words from hearing them',
          '✓ Following one-word commands',
          '✓ Following commands without modeling',
          '✓ Sequencing two actions in a row'
        ],
        reviewQuestions: [
          'Which command did baby\'s name respond to most quickly?',
          'Did they improve with the commands without modeling?',
          'Were they able to follow two commands in a row?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Following commands is the beginning of true language comprehension. When baby\'s name understands that a spoken word predicts an action, they\'ve grasped a fundamental principle of language: words represent and guide behavior. This skill builds attention, listening, and the foundation for all future instruction-following and learning.'
        },
        nextSteps: [
          'Use real-world commands during routines: "Sit for dinner!" "Jump to the car!" "Dance to the music!"',
          'Gradually reduce modeling, ask them to do it without you showing first.',
          'Build complexity slowly: three-command sequences (jump, clap, sit), spatial directions (jump on the pillow, run to the door).',
          'Celebrate every success, following directions takes cognitive work at this age.'
        ]
      }
    }
  ]
},

// ========= LESSON 11 =========
{
  id: 11,
  phase: '2',
  quarter: 1,
  week: 3,
  weekIndex: 2,
  dayInWeek: 1,
  title: 'Lesson 11: Move and Say — Introducing Action Words Through Play',
  theme: 'Action Vocabulary & Kinesthetic Learning',
  skillRecurrenceTags: ['action-words', 'verbs', 'movement', 'body-awareness'],
  relatedToPreviousSkills: ['listening', 'imitation', 'naming'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Action Week!',
      duration: '1 min',
      content: {
        goal: 'Begin Week 3 by introducing action words (run, jump, clap, dance, sit, stand) paired with clear, exaggerated movements, building verb vocabulary through kinesthetic experience.',
        parentGuide: [
          'Action words (verbs) are learned fastest when paired with whole-body movement — children learn by doing.',
          'Week 3 spirals from Week 1\'s naming and Week 2\'s emotions by adding a new vocabulary category (actions) within familiar contexts.',
          'Verb vocabulary predicts stronger sentence construction and storytelling skills — verbs are the "engines" of language.',
          'Movement also supports motor development, coordination, and physical confidence alongside language growth.'
        ],
        materials: ['Open space (living room, backyard, or gym)', 'Your body (the best tool)', 'Optional: music or rhythm instrument'],
        tip: 'Exaggerate movements so baby\'s name can clearly see and understand each action.',
        researchNote: 'Trainor et al. (2005) - Synchronized movement and language activate overlapping neural networks; pairing words with actions strengthens memory and comprehension.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce One Action — Slow and Clear',
      duration: '3-4 min',
      focus: 'Action Word Introduction & Motor Imitation',
      researchBasis: 'Meltzoff & Moore (1977) - Infants learn language through observation and imitation of adult actions; clear, exaggerated movements facilitate learning.',
      content: {
        goal: 'Pick one action (e.g., "run" or "jump") and demonstrate it slowly and repeatedly while saying the word clearly.',
        whatToSay: [
          '"Let\'s run! Run, run, run! Can you run?"',
          '"I\'m running! See me running? Run, run, run!"',
          '"You\'re running too! Good running!"',
          '"Run, run, run! This is running!"'
        ],
        whatToDo: [
          'Choose one clear action: run, jump, clap, dance, sit, or wave.',
          'Do the action slowly and exaggerated.',
          'Say the action word clearly: "Run."',
          'Repeat while moving: "Run, run, run!"',
          'Make eye contact and invite: "Can you run too?"',
          'If baby\'s name moves or tries, celebrate immediately.',
          'If not, don\'t force — keep demonstrating playfully.',
          'Do 6-8 repetitions, building fun energy.'
        ],
        examples: [
          'For "run": jog in place slowly, saying "Run! Run! Run!" with enthusiasm.',
          'For "jump": do small bounces, saying "Jump! Jump! Jump!" while looking at baby\'s name.'
        ],
        watchFor: [
          'Baby\'s name watching your movement intently.',
          'Attempting any movement in response.',
          'Vocalizations or sounds paired with the action.',
          'Smiling or showing excitement.'
        ],
        parentTip: 'Even tiny movements (shifting weight, bouncing slightly) count as learning — celebrate any response.',
        funTwist: 'Add a funny sound to each movement: "Run — whooosh!" or "Jump — boom!" to increase engagement and fun.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Follow Me — Imitation Game',
      duration: '2-3 min',
      focus: 'Imitation and Turn-Taking',
      researchBasis: 'Vygotsky (1978) - Guided imitation in playful contexts (scaffolding) accelerates learning faster than independent practice.',
      content: {
        goal: 'Shift from demonstration to invitation: ask baby\'s name to copy your actions, creating a turn-taking game.',
        whatToSay: [
          '"Can you run like me? Run, run, run!"',
          '"Good running! Now I\'ll run. Look at me!"',
          '"Your turn — jump! Jump with me!"',
          '"You\'re jumping! I see you jumping!"'
        ],
        whatToDo: [
          'Do the action: "I\'m running!"',
          'Pause and ask baby\'s name: "Your turn — run!"',
          'Wait 2-3 seconds.',
          'If they move or attempt it, celebrate: "Yes! You\'re running!"',
          'If not, run alongside them while holding their hand.',
          'Create rhythm: you move, they move, back and forth.',
          'Repeat 4-6 times, alternating "my turn, your turn."'
        ],
        examples: [
          '"Watch me jump! (Jump) Now you jump! (Wait) Good jumping!"',
          'Hold their hand and move together: "We\'re running! Run, run!"'
        ],
        watchFor: [
          'Baby\'s name attempting to imitate.',
          'Understanding the turn-taking pattern.',
          'Laughing or showing delight in the back-and-forth.',
          'Repeating movements after seeing you do them.'
        ],
        parentTip: 'This combines imitation, listening, and turn-taking — three crucial skills at once.',
        funTwist: 'Make it unpredictable: sometimes run fast, sometimes slow. "Slow running... now fast running!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Name the Action While Playing',
      duration: '2-3 min',
      focus: 'Receptive Understanding & Naturalistic Learning',
      researchBasis: 'Hart & Risley (1995) - Consistent naming in natural contexts (learning through play) builds vocabulary fastest.',
      content: {
        goal: 'Continue the action play while narrating what\'s happening, deepening the word-action connection.',
        whatToSay: [
          '"You\'re running! Good running!"',
          '"I see you running fast!"',
          '"Running, running, running! We\'re both running!"',
          '"Look — we\'re running together!"'
        ],
        whatToDo: [
          'Play alongside baby\'s name (you both do the action).',
          'Narrate continuously: "We\'re running! Run, run!"',
          'Vary the narration: "Fast running!" "Slow running!" "Running together!"',
          'Point out their actions: "You\'re running! I see you!"',
          'Repeat the action word 8-10 times in different ways.',
          'Keep the energy playful and celebratory.'
        ],
        examples: [
          'If jumping: "We\'re jumping! Jump, jump, jump! Big jumps! Small jumps!"',
          'If clapping: "Clap, clap, clap! We\'re clapping together!"'
        ],
        watchFor: [
          'Baby\'s name sustaining the action.',
          'Showing understanding that the word matches their movement.',
          'Vocalizing or attempting the word while moving.',
          'Enjoying the repetition and rhythm.'
        ],
        parentTip: 'Repetition isn\'t boring for toddlers — it\'s how they learn. Do this 3-4 times without concern for monotony.',
        funTwist: 'Change the setting: "Run around the couch!" "Jump on the pillow!" Variety keeps it fresh.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Amazing action practice!',
          'You and baby\'s name practiced:',
          '✓ Learning an action word through movement',
          '✓ Imitating movements and actions',
          '✓ Turn-taking with body movement',
          '✓ Understanding action words in play'
        ],
        reviewQuestions: [
          'Which action did baby\'s name seem most interested in?',
          'Did they attempt to copy your movements?',
          'How did they respond to the turn-taking game?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Action words are the foundation of communication. When baby\'s name learns verbs paired with their own movements, they understand that language describes the world they can see, feel, and do. This kinesthetic learning creates strong neural pathways for both language and motor development — two critical areas of growth.'
        },
        nextSteps: [
          'Practice this same action throughout the day: "Let\'s run to the door!" or "Run to Grandma!"',
          'Add the action word to familiar routines: running to meals, jumping into the bath, clapping for good jobs.',
          'Introduce one new action per day this week (jump, sit, stand, dance, wave).',
          'Play action games: move while music plays, freeze when it stops (introducing action + listening combined).'
        ]
      }
    }
  ]
},

// ========= LESSON 12 =========
{
  id: 12,
  phase: '2',
  quarter: 1,
  week: 3,
  weekIndex: 2,
  dayInWeek: 2,
  title: 'Lesson 12: Follow Me — Action Commands and Listening Comprehension',
  theme: 'Receptive Language & Following Directions',
  skillRecurrenceTags: ['action-words', 'listening', 'following-directions', 'comprehension'],
  relatedToPreviousSkills: ['listening', 'action-words', 'imitation'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Action Commands!',
      duration: '1 min',
      content: {
        goal: 'Build receptive understanding of action words by giving simple commands ("Jump!" "Sit!") and watching baby\'s name respond, spiraling from yesterday\'s action introduction.',
        parentGuide: [
          'Receptive language (understanding) develops before expressive language (producing words) — baby\'s name understands actions before naming them.',
          'Following commands builds listening skills, attention, and compliance naturally.',
          'This lesson bridges yesterday\'s demonstration-based learning into command-based learning (more advanced).',
          'Success with commands builds baby\'s name\'s confidence and strengthens the word-action connection.'
        ],
        materials: ['Open space', 'Your voice and energy', 'Optional: music or sound cues'],
        tip: 'Start with very simple, one-word commands. Give baby\'s name time (2-3 seconds) to respond before repeating.',
        researchNote: 'Snow (1999) - Following commands requires comprehension and motor coordination; success predicts stronger language development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Single Action Commands with Modeling',
      duration: '3-4 min',
      focus: 'Receptive Action Language & Command Following',
      researchBasis: 'Tomasello & Todd (1983) - Children follow commands better when they\'ve first watched an adult model the action.',
      content: {
        goal: 'Say a single command after demonstrating the action, building understanding through repetition and modeling.',
        whatToSay: [
          '"Jump! (demonstrate) Jump!"',
          '"Clap! (clap with them) Clap, clap!"',
          '"Sit! (sit down) You sit too!"',
          '"Good listening! You jumped when I said jump!"'
        ],
        whatToDo: [
          'Say an action name and do it: "Jump!" (jump).',
          'Say it again: "Jump!"',
          'Wait 2-3 seconds for baby\'s name to respond.',
          'If they move or attempt it, celebrate: "Yes! You jumped!"',
          'If not, do it with them: hold hands and jump together while saying "Jump!"',
          'Repeat the same command 3-4 times before switching to a new action.',
          'Give 4-5 different commands throughout the activity.'
        ],
        examples: [
          '"Clap!" (you clap) (wait) "Yes, you\'re clapping!"',
          '"Stand!" (you stand) (wait) (guide them gently if needed) "You\'re standing!"'
        ],
        watchFor: [
          'Baby\'s name looking at you when you speak.',
          'Attempting to follow the command.',
          'Any movement in response (even slight).',
          'Understanding that the word predicts the action.'
        ],
        parentTip: 'If they don\'t respond immediately, don\'t repeat endlessly — just model again and move on. Patience builds confidence.',
        funTwist: 'Use a funny voice for commands: "Jumb in a silly way!" or whisper commands: "Shhh... jump quietly!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Commands Without Modeling',
      duration: '2-3 min',
      focus: 'Independent Comprehension & Command Following',
      researchBasis: 'Hart & Risley (1995) - Children progress from imitating modeled actions to following commands without demonstration.',
      content: {
        goal: 'Give action commands without modeling first, testing true comprehension and building independence.',
        whatToSay: [
          '"Jump!"',
          '"Good job! Now clap!"',
          '"Dance!"',
          '"Sit down!"',
          '"You\'re such a good listener!"'
        ],
        whatToDo: [
          'Say a command without demonstrating first: "Jump!"',
          'Wait 2-3 seconds.',
          'If baby\'s name responds, celebrate enthusiastically: "Yes! You jumped! You heard me!"',
          'If not, model it once and try again: "Let me show you. (Do action) Now you try!"',
          'Give 5-6 commands in varying order.',
          'Mix familiar and slightly new actions.',
          'Keep the pace energetic and fun.'
        ],
        examples: [
          '"Stand!" (wait) "You\'re standing! Great listening!"',
          '"Dance!" (wait) "Wonderful dancing!"'
        ],
        watchFor: [
          'Baby\'s name responding to commands they\'ve learned.',
          'Showing understanding without needing a model.',
          'Excitement or engagement with the game.',
          'Attempting actions, even if not perfect.'
        ],
        parentTip: 'Some misses are normal and okay — the goal is building comprehension, not perfection.',
        funTwist: 'Vary the energy: "Sleepy clap" (slow, gentle), "Happy clap" (fast, joyful), "Giant clap" (big movements).'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Action Sequence — Two Commands in a Row',
      duration: '2-3 min',
      focus: 'Working Memory & Multi-Step Following',
      researchBasis: 'Fernald & Kuhl (1987) - Short pauses between commands help toddlers process and respond; sequential commands build working memory.',
      content: {
        goal: 'Give two action commands in quick succession ("Jump! Then sit!"), building attention and memory.',
        whatToSay: [
          '"Jump and then clap!"',
          '"First, run. Then sit!"',
          '"Dance, dance, dance. Now stop!"',
          '"You did it! You listened to two things!"'
        ],
        whatToDo: [
          'Give first command: "Jump!"',
          'Wait 1-2 seconds for response.',
          'Then give second command: "Now clap!"',
          'Wait for response.',
          'Celebrate: "You jumped AND clapped! Great listening!"',
          'Repeat with 2-3 two-command sequences.',
          'Keep commands simple and clear.'
        ],
        examples: [
          '"Jump, jump, jump! Now sit!" (pause between commands)',
          '"Dance! Then wave!" (clear pause so baby\'s name can process)'
        ],
        watchFor: [
          'Baby\'s name attempting both actions in sequence.',
          'Understanding the transition between commands.',
          'Building working memory and attention span.',
          'Celebrating their own success with expressions or sounds.'
        ],
        parentTip: 'This is advanced listening — many toddlers need to practice. Celebrate all attempts.',
        funTwist: 'Mix silly commands: "Hop like a bunny! Then sleep like a bear!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete!',
      duration: '1 min',
      content: {
        celebration: [
          'Great command-following practice!',
          'You and baby\'s name practiced:',
          '✓ Understanding action words from hearing them',
          '✓ Following one-word commands',
          '✓ Following commands without modeling',
          '✓ Sequencing two actions in a row'
        ],
        reviewQuestions: [
          'Which command did baby\'s name respond to most quickly?',
          'Did they improve with the commands without modeling?',
          'Were they able to follow two commands in a row?'
        ],
        parentTakeaway: {
          title: 'Why This Matters',
          content: 'Following commands is the beginning of true language comprehension. When baby\'s name understands that a spoken word predicts an action, they\'ve grasped a fundamental principle of language: words represent and guide behavior. This skill builds attention, listening, and the foundation for all future instruction-following and learning.'
        },
        nextSteps: [
          'Use real-world commands during routines: "Sit for dinner!" "Jump to the car!" "Dance to the music!"',
          'Gradually reduce modeling — ask them to do it without you showing first.',
          'Build complexity slowly: three-command sequences (jump, clap, sit), spatial directions (jump on the pillow, run to the door).',
          'Celebrate every success — following directions takes cognitive work at this age.'
        ]
      }
    }
  ]
},

// ========= LESSON 13 =========
{
  id: 13,
  phase: '2',
  quarter: 1,
  week: 3,
  weekIndex: 2,
  dayInWeek: 3,
  title: 'Lesson 13: Action Songs and Movement Music',
  theme: 'Rhythm, Action Words, and Musical Learning',
  skillRecurrenceTags: ['action-words', 'rhythm', 'listening', 'music'],
  relatedToPreviousSkills: ['action-words', 'following-directions', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Action Song Time',
      duration: '1 min',
      content: {
        goal: 'Combine action words with songs and rhythm, helping baby\'s name learn verbs through music and movement together. This creates stronger memory and deeper joy in learning.',
        parentGuide: [
          'Songs stick in our brains because rhythm and melody create powerful memory pathways. When you pair action words with songs, they become unforgettable.',
          'Musical learning engages more of the brain than talking alone. Your baby is using auditory, motor, and emotional brain regions all at once.',
          'This week spirals from Lessons 11 and 12 by adding music and rhythm to the action words baby\'s name already knows.',
          'Singing together also builds emotional bonding and makes learning feel like pure play.'
        ],
        materials: ['Your voice', 'Optional simple music or nursery rhyme tune (like Twinkle Twinkle or Row Row Row)', 'Open space to move'],
        tip: 'Don\'t worry about being a good singer. Babies respond to enthusiasm and joy more than perfect pitch.',
        researchNote: 'Trainor et al. (2002) shows that babies learn rhythmic patterns faster when paired with movement. The combination of rhythm, melody, and action creates deeper neural encoding than any single element alone.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Simple Action Song to a Familiar Tune',
      duration: '3-4 min',
      focus: 'Combining Action Words with Melody and Rhythm',
      researchBasis: 'Trehub et al. (1997) found that infants recognize and remember melodies, especially when paired with repeated actions and lyrics.',
      content: {
        goal: 'Teach baby\'s name a simple action song using a tune they may already know, like Twinkle Twinkle or Row Row Row Your Boat.',
        whatToSay: [
          '"Let\'s sing and clap. Clap, clap, clap to the song."',
          '"Clap, clap, clap, clap (sing to Twinkle Twinkle tune) Clap your hands up high."',
          '"Now jump, jump, jump, jump (same tune) Jump around so high."',
          '"You\'re doing it. You\'re clapping and singing together."'
        ],
        whatToDo: [
          'Pick a simple tune baby\'s name might know or just use a rhythm you like.',
          'Choose one action like clapping or jumping.',
          'Sing the action word to the tune, repeating it over and over.',
          'Do the movement while singing.',
          'Make eye contact and invite baby\'s name to join.',
          'Keep singing the same tune for three or four cycles.',
          'Go slow and clear so baby\'s name can follow.',
          'Use big arm movements and exaggerated actions so they can see what to do.'
        ],
        examples: [
          'To the tune of Twinkle Twinkle Little Star: "Jump, jump, jump, jump, jumping up so high, Jump into the sky so blue, Jumping makes me smile for you."',
          'To Row Row Row Your Boat: "Clap, clap, clap your hands, Clap them all day long, Clap, clap, clap with me, Clapping is our song."'
        ],
        watchFor: [
          'Baby\'s name watching your movements and mouth.',
          'Attempting to clap or move along with you.',
          'Showing joy or excitement about the song.',
          'Any sounds they make that try to match the rhythm.'
        ],
        parentTip: 'The melody matters less than the rhythm and fun. Babies love repetition and patterns, so sing the same thing multiple times.',
        funTwist: 'Add silly animal sounds or make the movements bigger and sillier each time you repeat the song.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Sing and Move Together',
      duration: '3-4 min',
      focus: 'Synchronized Movement with Singing',
      researchBasis: 'Meltzoff & Moore (1977) show that synchronized movement between parent and child strengthens bonding and neural mirroring.',
      content: {
        goal: 'Move alongside baby\'s name while singing, creating synchronized action and sound that strengthens learning and bonding.',
        whatToSay: [
          '"Let\'s dance and sing together. Dance, dance, dance."',
          '"We\'re both dancing. You and me, dancing to the song."',
          '"Spin around. Spin, spin, spin. We\'re spinning together."',
          '"Good singing and moving. You\'re such a great dancer."'
        ],
        whatToDo: [
          'Stand or sit close to baby\'s name.',
          'Start singing your action song again.',
          'Do the movement slowly and clearly so they can see and copy.',
          'Hold their hand or gently guide their movement if they seem unsure.',
          'Keep singing throughout the movement.',
          'Move in sync, going at the same pace and rhythm.',
          'Repeat the song three to four times with the same movement.',
          'Make the experience playful and connected rather than instructional.'
        ],
        examples: [
          'Hold their hands and spin in a circle while singing "Spin, spin, spin around, Spin like a dancer on the ground."',
          'Jump together while singing "Jump, jump, jump so high, Jump and touch the sky."'
        ],
        watchFor: [
          'Baby\'s name moving in rhythm with your singing.',
          'Showing enjoyment and comfort in the close contact.',
          'Attempting to copy your movements.',
          'Vocalizing along with the song or humming the melody.'
        ],
        parentTip: 'This synchronized movement builds mirror neurons and deepens bonding. The closeness and joint activity are as important as the learning.',
        funTwist: 'Change the tempo: sing fast then slow, do big movements then tiny ones, all to the same tune. Variety keeps it fresh.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Action Song Dance Party',
      duration: '2-3 min',
      focus: 'Combining Multiple Actions with Music',
      researchBasis: 'Cross et al. (2011) found that group music and movement activities boost social bonding and learning in young children.',
      content: {
        goal: 'Create a mini dance party where you sing the action song but swap in different movements each time through.',
        whatToSay: [
          '"Now let\'s clap to our song. Clap, clap, clap."',
          '"Now jump to the same song. Jump, jump, jump."',
          '"Now dance. Dance, dance, dance to our song."',
          '"You know so many moves to go with our music."'
        ],
        whatToDo: [
          'Sing your action song again.',
          'This time do one movement like clapping.',
          'Sing it through completely.',
          'Then sing it again but do a different movement like jumping.',
          'Sing it a third time with a new movement like spinning or dancing.',
          'Keep the song the same but change what you do.',
          'Invite baby\'s name to pick which movement to do next if they seem interested.',
          'Make it feel like a celebration and playtime rather than practice.'
        ],
        examples: [
          'Same tune all three times: first time clap, second time jump, third time spin.',
          'Invite baby\'s name: "What should we do next? Hop? Wave? Sit?"'
        ],
        watchFor: [
          'Baby\'s name enjoying the repetition with variation.',
          'Understanding that the song stays the same while actions change.',
          'Showing excitement and engagement with the play.',
          'Attempting different movements throughout.'
        ],
        parentTip: 'Repetition with variation is powerful for learning. Same song, different movements keeps it interesting while reinforcing the music.',
        funTwist: 'Bring in other family members and do the song together as a group. Babies love performing with loved ones.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Beautiful song and movement time',
          'You and baby\'s name practiced',
          'Learning action words set to music',
          'Moving together in rhythm',
          'Combining singing with physical actions',
          'Building memory through melody and movement'
        ],
        reviewQuestions: [
          'Which movement did baby\'s name seem most excited about?',
          'Did they try to hum or sing along with you?',
          'Did they understand when you changed movements but kept the song the same?'
        ],
        parentTakeaway: {
          title: 'Why Music Matters So Much',
          content: 'Music and movement create memories that last. When baby\'s name learns action words through song and dance, those words become deeply embedded in their brain. Research shows that children who grow up with music and movement develop stronger language, better coordination, and more confidence. You\'re not just teaching words, you\'re building joy and connection into learning itself.'
        },
        nextSteps: [
          'Keep singing this song throughout the week. Repetition is how babies learn.',
          'Create new action songs with different tunes and different movements.',
          'Play music during routines and narrate what\'s happening to action words.',
          'Invite family members to join the song and dance with you and baby\'s name.',
          'Notice the joy in learning. That joy is what makes learning stick.'
        ]
      }
    }
  ]
},

// ========= LESSON 14 =========
{
  id: 14,
  phase: '2',
  quarter: 1,
  week: 3,
  weekIndex: 2,
  dayInWeek: 4,
  title: 'Lesson 14: What Happens Next Moving Stories',
  theme: 'Narrative and Cause-and-Effect Through Action',
  skillRecurrenceTags: ['action-words', 'sequencing', 'story-comprehension', 'cause-effect'],
  relatedToPreviousSkills: ['action-words', 'following-directions', 'listening', 'people-words'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Time With Actions',
      duration: '1 min',
      content: {
        goal: 'Create simple action stories where one movement leads to the next, teaching baby\'s name about sequences and cause and effect. This builds narrative comprehension and logical thinking.',
        parentGuide: [
          'Understanding sequences and cause and effect is crucial for reading comprehension and problem solving.',
          'When babies see that one action leads to another, they\'re learning basic logic and storytelling structure.',
          'This lesson spirals from Lessons 11, 12, and 13 by using all the action words baby\'s name knows in a connected story format.',
          'Narrative skills developed now predict stronger reading and writing abilities later in school.'
        ],
        materials: ['Open space', 'Your body and imagination', 'Optional stuffed animals or dolls to act out stories'],
        tip: 'Keep sequences very short and simple at first. Two or three actions connected is enough for this age.',
        researchNote: 'Mandler & Johnson (1976) demonstrated that even young children understand and remember simple narrative sequences when actions are connected in logical order.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Simple Action Sequence',
      duration: '3-4 min',
      focus: 'Understanding Sequence and What Comes Next',
      researchBasis: 'Nelson & Fivush (2004) show that early narrative understanding through adult modeling predicts later reading comprehension.',
      content: {
        goal: 'Act out a simple sequence of two or three connected actions, narrating what happens so baby\'s name understands order and cause.',
        whatToSay: [
          '"First we run. Run, run, run. We\'re running."',
          '"Then we stop. We stop running."',
          '"Next we sit down. Sit, sit, sit. We sit down after running."',
          '"We ran and then we sat. That\'s what happened."'
        ],
        whatToDo: [
          'Choose a simple sequence like run then sit or jump then rest.',
          'Do the first action clearly and slowly.',
          'Say what you\'re doing as you do it.',
          'Then transition to the next action.',
          'Say what happens next.',
          'Repeat the full sequence two or three times.',
          'Each time, narrate the connection between actions.',
          'Use words like then, next, after to show the sequence.'
        ],
        examples: [
          '"First we jump. Jump, jump, jump. Now we\'re tired. We sit down. We jump then we sit."',
          '"First we dance. Dance, dance, dance. Next we stop dancing. We stop and wave bye-bye."'
        ],
        watchFor: [
          'Baby\'s name following the sequence with their eyes.',
          'Attempting both actions in order.',
          'Understanding the connection between first and next.',
          'Showing excitement about the story structure.'
        ],
        parentTip: 'Simple stories are powerful. Don\'t worry about complexity. The goal is understanding that actions connect and have order.',
        funTwist: 'Add sound effects to mark transitions. "Run, run, run... screech! Now we stop and sit."'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Toy Story Action Sequences',
      duration: '3-4 min',
      focus: 'Narrative Understanding Through Pretend Play',
      researchBasis: 'Vygotsky (1978) emphasized that pretend play with objects accelerates symbolic and narrative thinking.',
      content: {
        goal: 'Use dolls or stuffed animals to act out action sequences, showing cause and effect through character actions.',
        whatToSay: [
          '"The bear is running. Run, run, run. The bear runs."',
          '"Now the bear is tired. The bear sits down."',
          '"After running, the bear sleeps. The bear is sleeping."',
          '"The bear ran and then sat and then slept. That\'s the story."'
        ],
        whatToDo: [
          'Get a doll or stuffed animal.',
          'Make it do the first action like running.',
          'Narrate clearly what the toy is doing.',
          'Move the toy to do the next action.',
          'Connect the actions with words like then or next.',
          'Repeat the sequence so baby\'s name understands the order.',
          'Invite baby\'s name to make the toy move if they want to.',
          'Keep the story very simple with clear transitions.'
        ],
        examples: [
          '"The puppy is jumping. Jump, jump, jump. Now the puppy is dancing. Dance, dance. The puppy jumped then danced."',
          '"The baby doll is clapping. Clap, clap, clap. Now the baby doll is spinning. Spin, spin, spin."'
        ],
        watchFor: [
          'Baby\'s name watching the toy movements and sequence.',
          'Understanding that one action leads to the next.',
          'Showing interest in the toy story.',
          'Attempting to move the toy or predict what comes next.'
        ],
        parentTip: 'Toys make abstract ideas concrete. When they see the bear run then sit, they understand sequence through something they can see and touch.',
        funTwist: 'Let baby\'s name decide what the toy does next. "What should the bear do after sitting? Jump? Dance?"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Act Out Cause and Effect',
      duration: '2-3 min',
      focus: 'Understanding That Actions Have Consequences',
      researchBasis: 'Mandler (1984) found that children understand simple cause and effect relationships as early as two years old when demonstrated clearly.',
      content: {
        goal: 'Show how one action causes another to happen, building understanding of cause and effect in movement and stories.',
        whatToSay: [
          '"We jump so high. Jump, jump, jump. We jump and then we come down. Thump."',
          '"We run and then we get tired. Run, run, run. Now we sit and rest."',
          '"We spin and spin. Spin, spin, spin. We get dizzy. Whoops, we stop."',
          '"When we jump, we land. When we run, we get tired. When we spin, we get dizzy."'
        ],
        whatToDo: [
          'Do an action and show what naturally happens after.',
          'Jump and then fall gently to show gravity and coming down.',
          'Run and then sit to show getting tired.',
          'Spin and wobble to show dizziness.',
          'Make the cause and effect clear and connected.',
          'Narrate the connection each time.',
          'Repeat so baby\'s name understands the pattern.',
          'Invite them to try and experience the cause and effect themselves.'
        ],
        examples: [
          'Jump and land: "We jump up. Up, up, up. Down we come. Thump. Jump makes us go up then down."',
          'Spin and wobble: "We spin around. Spin, spin, spin. Now we\'re dizzy and wobbly. Spinning makes us dizzy."'
        ],
        watchFor: [
          'Baby\'s name understanding that one action causes another.',
          'Anticipating what comes next in the sequence.',
          'Attempting to repeat the cause and effect.',
          'Showing understanding through laughter or expression.'
        ],
        parentTip: 'Cause and effect is a big concept but actions make it visible and learnable at this age.',
        funTwist: 'Make it exaggerated and silly. Fall extra dramatically after jumping, wobble extra much after spinning.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Amazing story and action work',
          'You and baby\'s name practiced',
          'Understanding sequences of actions',
          'Connecting actions with words like then and next',
          'Acting out cause and effect through movement',
          'Beginning to think about narrative and stories'
        ],
        reviewQuestions: [
          'Did baby\'s name follow the sequence of actions?',
          'Did they understand what came next in the story?',
          'Which cause and effect relationship seemed to click for them?'
        ],
        parentTakeaway: {
          title: 'Why Stories Matter Now',
          content: 'Understanding that actions connect in order and have causes and effects is how children learn to think logically. These skills are the foundation for reading comprehension, problem solving, and understanding how the world works. When baby\'s name learns that running leads to getting tired or jumping leads to coming down, they\'re learning real logic wrapped in joyful play.'
        },
        nextSteps: [
          'Narrate cause and effect throughout your day. When you pour water it flows, when you drop a toy it falls.',
          'Read books and pause to ask what happens next.',
          'Create simple action stories with dolls and toys.',
          'Use words like then, next, and after to help baby\'s name learn sequence.',
          'Notice when baby\'s name anticipates what comes next. That\'s huge growth.'
        ]
      }
    }
  ]
},

// ========= LESSON 15 =========
{
  id: 15,
  phase: '2',
  quarter: 1,
  week: 3,
  weekIndex: 2,
  dayInWeek: 5,
  title: 'Lesson 15: Week 3 Integration Review, Movement and Stories Celebration',
  theme: 'Integration of All Week 3 Skills Through Play',
  skillRecurrenceTags: ['action-words', 'sequencing', 'rhythm', 'story-comprehension', 'cause-effect'],
  relatedToPreviousSkills: ['all-week-3-skills'],
  duration: '15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Week 3 Review and Celebration',
      duration: '1 min',
      content: {
        goal: 'Celebrate and combine all of Week 3 skills by blending movement, songs, commands, and simple stories into one joyful play session. This reinforces learning and shows how everything connects.',
        parentGuide: [
          'Review days are celebrations, not tests. The goal is to notice growth and strengthen connections between skills.',
          'When you combine multiple learned skills, baby\'s name sees how language works in real life.',
          'Taking time to celebrate progress builds confidence for both you and your child.',
          'This week spirals all five days into one cohesive, joyful experience that shows mastery.'
        ],
        materials: ['All materials from Week 3 like dolls, toys, music or rhythm items, open space', 'Your energy and celebration spirit', 'Optional sticker chart or photo of the week'],
        tip: 'Keep this playful and celebratory with no pressure. The goal is joy, not perfection.',
        researchNote: 'Cepeda et al. (2006) shows that spaced repetition with integration of multiple skills strengthens retention and helps children transfer learning to new situations.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Action Song Parade',
      duration: '3-4 min',
      focus: 'Combining Singing with Movement and Sequence',
      researchBasis: 'Cross et al. (2011) found that group music and movement activities boost learning and confidence in young children.',
      content: {
        goal: 'Sing the action song from Lesson 13 and change movements with each verse, showing how baby\'s name understands the pattern of same song with different actions.',
        whatToSay: [
          '"Let\'s sing our action song. First we clap, clap, clap."',
          '"Now we jump to the same song. Jump, jump, jump."',
          '"Now we dance. Dance, dance, dance to our song."',
          '"You know so many ways to move to the same song."'
        ],
        whatToDo: [
          'Sing your action song from Lesson 13.',
          'Do one movement like clapping.',
          'Sing it again and do a different movement like jumping.',
          'Sing it a third time and do another movement like dancing.',
          'Celebrate how the song stays the same while movements change.',
          'Invite baby\'s name to pick which movement comes next if interested.',
          'Make it feel like a party and celebration.'
        ],
        examples: [
          'Same tune all three times but first clap, then jump, then spin.',
          'Ask baby\'s name to pick the next movement if they seem ready.'
        ],
        watchFor: [
          'Baby\'s name enjoying the repetition with variation.',
          'Showing excitement and energy.',
          'Attempting different movements.',
          'Understanding that the song stays the same while actions change.'
        ],
        parentTip: 'This shows synthesis of learning. Baby\'s name is showing real understanding when they can do the same song with different movements.',
        funTwist: 'Invite family members to join. A parade with grandparents or siblings makes it even more special.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Command Following Challenge',
      duration: '3-4 min',
      focus: 'Testing Comprehension and Following Directions',
      researchBasis: 'Snow (1999) shows that children\'s ability to follow commands indicates real language comprehension.',
      content: {
        goal: 'Give action commands from Lesson 12, including two command sequences, to show how much baby\'s name\'s listening has improved.',
        whatToSay: [
          '"Jump!"',
          '"Great listening. Now clap."',
          '"Dance and then sit."',
          '"You\'re such a great listener."'
        ],
        whatToDo: [
          'Give one command without modeling.',
          'Wait for response and celebrate.',
          'Give another command.',
          'Try a two command sequence like jump and then sit.',
          'Notice which commands baby\'s name knows best.',
          'Celebrate every response and attempt.',
          'Mix up the order to keep it interesting.',
          'End with lots of praise for listening.'
        ],
        examples: [
          'Say "Jump" without doing it yourself and watch them respond.',
          'Say "Now clap and then sit" and see if they follow both.'
        ],
        watchFor: [
          'Baby\'s name responding to commands without you modeling.',
          'Understanding two commands in sequence.',
          'Improvement compared to earlier in the week.',
          'Confidence and willingness to try.'
        ],
        parentTip: 'Celebrate effort and progress. If they only do part of a command, that\'s still learning.',
        funTwist: 'Reverse roles if they\'re ready. Can you follow their command? They might say run or dance in their own way.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Story Time with Action and Cause and Effect',
      duration: '3-4 min',
      focus: 'Complete Integration of Actions, Sequence, and Narrative',
      researchBasis: 'Mandler (1984) found that children understand and remember narratives that combine action with clear cause and effect relationships.',
      content: {
        goal: 'Tell a complete story using dolls that shows actions in sequence with clear cause and effect, combining skills from Lessons 11 through 14.',
        whatToSay: [
          '"The bear woke up and started running. Run, run, run."',
          '"Then the bear got tired so it sat down."',
          '"Next the bear got sleepy and went to sleep."',
          '"The bear ran then sat then slept. That\'s our story."'
        ],
        whatToDo: [
          'Use a doll or toy.',
          'Create a simple story with three connected actions.',
          'Show each action clearly.',
          'Connect them with words like then and next and because.',
          'Invite baby\'s name to make the toy move or predict what happens next.',
          'Celebrate understanding of the sequence and connections.',
          'Let baby\'s name help create the next story if interested.',
          'Keep it simple and joyful.'
        ],
        examples: [
          '"The puppy was playing. Play, play, play. Then the puppy got tired. The puppy stopped and lay down. The puppy played then rested."',
          '"The baby was dancing. Dance, dance. Then the baby felt happy and wanted to clap. The baby danced then clapped."'
        ],
        watchFor: [
          'Baby\'s name following the story sequence.',
          'Understanding that actions connect and have reasons.',
          'Attempting to predict or participate in the story.',
          'Showing memory of the story elements.',
          'Interest in the cause and effect relationships.'
        ],
        parentTip: 'This is sophisticated thinking. Celebrate any sign of understanding sequence or cause and effect.',
        funTwist: 'Ask baby\'s name what the character should do next. Let them help create the story.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Week 3 Complete and Celebrated',
      duration: '1 min',
      content: {
        celebration: [
          'You and baby\'s name had an amazing Week 3',
          'You practiced',
          'Learning action words and doing them',
          'Following commands and directions',
          'Singing action songs with rhythm and movement',
          'Understanding sequences and cause and effect',
          'Telling and acting out simple stories',
          'Combining all these skills together'
        ],
        reviewQuestions: [
          'What action did baby\'s name learn best this week?',
          'Which command did they respond to most reliably?',
          'Did they seem to understand cause and effect?',
          'What growth did you notice compared to Week 1?'
        ],
        parentTakeaway: {
          title: 'What Week 3 Accomplished',
          content: 'This week moved from simply naming objects and people to understanding actions, sequences, and simple stories. Baby\'s name is learning that language describes not just what things are but what they do and how they connect. They\'re building the verbs and narrative structures that make real communication possible. Every action word, every command followed, and every story understood is building toward fluent conversation and literacy.'
        },
        nextSteps: [
          'Continue using action words throughout daily routines. Run to the car, jump into bed, dance during meals.',
          'Keep singing the action songs. Repetition deepens learning.',
          'Tell simple cause and effect stories whenever you can. When you turn off the light it gets dark. When we go outside it\'s cold.',
          'Use two command sequences during routines. Pick up your toy and put it in the bin.',
          'Celebrate how much baby\'s name understands. Progress is real even if it feels gradual.'
        ]
      }
    }
  ]
},

// ========= LESSON 16 =========
{
  id: 16,
  phase: '2',
  quarter: 1,
  week: 4,
  weekIndex: 3,
  dayInWeek: 1,
  title: 'Lesson 16: Object Hunt Story, Finding Things Builds Vocabulary',
  theme: 'Vocabulary Integration and Spatial Language',
  skillRecurrenceTags: ['naming', 'object-words', 'spatial-words', 'listening'],
  relatedToPreviousSkills: ['naming', 'action-words', 'listening', 'following-directions'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Week 4 Integration Review',
      duration: '1 min',
      content: {
        goal: 'Review and integrate all of Weeks 1 through 3 by creating a hunt and story game where baby\'s name finds objects and hears them named in context. This spirals everything into one playful activity.',
        parentGuide: [
          'Week 4 is designed to take all the skills from Weeks 1 through 3 and blend them together naturally.',
          'When baby\'s name hunts for objects they learn naming, listening, following directions, and spatial awareness at the same time.',
          'Stories created around objects and finding them make learning feel like real play.',
          'This natural integration shows how language skills work together in real life.'
        ],
        materials: ['3-5 household items or toys baby\'s name knows the names for', 'Open space for exploring', 'Optional basket or container for collected items'],
        tip: 'Hide items in easy to see places. The goal is finding and naming, not frustration from hidden treasures.',
        researchNote: 'Rowe (2012) found that vocabulary learned in varied, meaningful contexts transfers better to new situations than vocabulary learned through repetition alone.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Hide and Find Named Objects',
      duration: '3-4 min',
      focus: 'Combining Naming with Searching and Finding',
      researchBasis: 'Tomasello (2003) shows that joint attention combined with naming creates the strongest vocabulary learning.',
      content: {
        goal: 'Hide familiar objects in easy spots and ask baby\'s name to find them by name, creating a story hunt that combines searching with naming.',
        whatToSay: [
          '"Can you find the ball? Where\'s the ball?"',
          '"Yes, you found the ball. Great finding and great looking."',
          '"Now let\'s look for the block. Can you find the block?"',
          '"You found the block. You\'re such a good finder."'
        ],
        whatToDo: [
          'Place three to four objects in partially hidden spots around the room.',
          'Tell baby\'s name what to find. Where\'s the ball?',
          'Let them search and find it.',
          'Celebrate the finding and name the object again.',
          'Move to the next object.',
          'Create a story as they find things. The ball went on the couch, the block hid by the chair.',
          'Make it feel like an adventure and game.'
        ],
        examples: [
          'Place a ball on a chair so it\'s visible but they have to go get it. Tell them to find the ball.',
          'Put a toy under a blanket corner so they have to search a bit but not too hard.'
        ],
        watchFor: [
          'Baby\'s name understanding what to search for.',
          'Actively looking and moving to find things.',
          'Excitement and energy during the hunt.',
          'Interest in the objects they find.'
        ],
        parentTip: 'The fun of finding is as important as the naming. Keep searching easy so they feel successful.',
        funTwist: 'Make the objects do silly things. The ball is having a party on the couch. The block is taking a nap under the blanket.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Collect and Story',
      duration: '2-3 min',
      focus: 'Sequence and Narrative Integration',
      researchBasis: 'Nelson & Fivush (2004) found that narratives created around shared activities deepen memory and understanding.',
      content: {
        goal: 'After finding each object, create a simple story connecting all the found items together.',
        whatToSay: [
          '"You found the ball first. Then you found the block. Then you found the doll."',
          '"First the ball, then the block, then the doll. That\'s our hunt story."',
          '"We went searching and found so many things."',
          '"The things were hiding and you found them all."'
        ],
        whatToDo: [
          'After finding each object, place it in a pile or basket.',
          'Talk about the order. First we found the ball, then the block.',
          'Create a narrative of the hunt. We went on an adventure and found treasures.',
          'Name each object as you review the collection.',
          'Count them. We found three things. We found four things.',
          'Tell the story of what you did together.'
        ],
        examples: [
          'We hunted for the ball and found it. Then we hunted for the block and found it. Then we hunted for the doll and found it.',
          'We went searching and found treasures. We found a ball, a block, a doll. Great hunting.'
        ],
        watchFor: [
          'Baby\'s name understanding the sequence of the hunt.',
          'Interest in reviewing what they found.',
          'Connection between the hunt and the story.',
          'Any attempts to repeat or participate in the narrative.'
        ],
        parentTip: 'This reviews naming, sequencing, and comprehension all at once.',
        funTwist: 'Let baby\'s name hide the objects next time and you search. Role reversal shows real understanding.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Hunt with Action Words',
      duration: '2-3 min',
      focus: 'Complete Integration of Names and Actions',
      researchBasis: 'Hart & Risley (1995) demonstrated that vocabulary grows fastest when learned in varied contexts with different words.',
      content: {
        goal: 'Search for objects but move using action words from Week 3, creating a hunt that combines naming with movements.',
        whatToSay: [
          '"Let\'s jump to find the ball. Jump, jump. There\'s the ball."',
          '"Now let\'s run to find the block. Run, run. We found the block."',
          '"Let\'s dance and look for the doll. Dance, dance. There\'s the doll."',
          '"We found everything by jumping and running and dancing."'
        ],
        whatToDo: [
          'Hide objects around the room.',
          'Tell baby\'s name what to find and how to move. Jump to find the ball.',
          'Move together using the action word.',
          'Find the object.',
          'Celebrate finding while using the action word.',
          'Move to the next object with a different action.',
          'Mix actions and objects together.'
        ],
        examples: [
          'Skip over to find the block. Hop around looking for the doll. Tiptoe to get the car.',
          'Run searching, then sit when you find it. Jump looking, then dance when you find it.'
        ],
        watchFor: [
          'Baby\'s name understanding the combination of action and object name.',
          'Moving while searching.',
          'Showing that they can blend multiple skills at once.',
          'Excitement about the combined game.'
        ],
        parentTip: 'This is sophisticated play. Baby\'s name is combining naming, listening, and movement all together.',
        funTwist: 'Ask baby\'s name how they want to search. Should we run or walk? Jump or dance?'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful integration and play',
          'You and baby\'s name practiced',
          'Finding and naming objects together',
          'Creating stories about hunts and discoveries',
          'Moving with action words while searching',
          'Combining all the skills from Weeks 1 through 3'
        ],
        reviewQuestions: [
          'What object did baby\'s name find first?',
          'Did they enjoy moving while searching?',
          'Did they understand the hunt story you created?',
          'Are they showing understanding of how skills connect?'
        ],
        parentTakeaway: {
          title: 'What Integration Means',
          content: 'Week 4 shows you how everything baby\'s name learned connects. Naming connects to finding. Finding connects to moving. Moving connects to stories. When you combine skills naturally in play, baby\'s name isn\'t just learning isolated words. They\'re learning how language works in the real world where everything connects. This is how learning becomes deep and transferable.'
        },
        nextSteps: [
          'Continue object hunts throughout the week. Hide toys and search together.',
          'Add complexity slowly. Hide objects in trickier places.',
          'Use different actions for finding. Should we tiptoe or gallop?',
          'Let baby\'s name hide things and you search.',
          'Celebrate how much they understand. A few weeks ago they knew a handful of words. Look now.'
        ]
      }
    }
  ]
},

// ========= LESSON 17 =========
{
  id: 17,
  phase: '2',
  quarter: 1,
  week: 4,
  weekIndex: 3,
  dayInWeek: 2,
  title: 'Lesson 17: Family Parade, Combining People and Movement',
  theme: 'People Words Plus Action Words in Play',
  skillRecurrenceTags: ['people-words', 'action-words', 'family-vocabulary', 'movement'],
  relatedToPreviousSkills: ['people-words', 'action-words', 'rhythm', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Family Parade Time',
      duration: '1 min',
      content: {
        goal: 'Combine family member names from Week 2 with action words from Week 3 to create a parade game where baby\'s name moves while naming family members and actions. This spirals skills naturally into one playful activity.',
        parentGuide: [
          'Combining different vocabulary categories shows baby\'s name how language builds complexity. Single words become phrases and sentences through connection.',
          'Movement paired with naming deepens both motor and language learning at the same time.',
          'Family involvement in the parade makes it emotional and memorable, which strengthens learning.',
          'This integration shows that actions apply to people and that people do actions, building toward sentence structure.'
        ],
        materials: ['Family members or dolls representing family', 'Open space for moving', 'Optional music or rhythm instrument', 'Optional simple dress up items like hats or scarves'],
        tip: 'Start simple with one family member and one action, then build up. Complexity grows naturally from simple foundations.',
        researchNote: 'Tomasello (2003) shows that combining learned words into structured sequences represents a major leap in language development and cognitive growth.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Family Member Actions',
      duration: '3-4 min',
      focus: 'Combining People Names with Action Words',
      researchBasis: 'Weisleder & Fernald (2013) found that varied word combinations in natural contexts accelerate language growth significantly.',
      content: {
        goal: 'Say family member names and pair them with actions. Mommy is dancing, Daddy is jumping. Create the pattern so baby\'s name understands that people do actions.',
        whatToSay: [
          '"Mommy is dancing. Dance, dance, dance. Mommy dances."',
          '"Daddy is jumping. Jump, jump. Daddy jumps."',
          '"Grandma is clapping. Clap, clap. Grandma claps."',
          '"Everyone is moving. All the family is moving."'
        ],
        whatToDo: [
          'Use family members present or dolls representing them.',
          'Name the family member clearly.',
          'Have them do an action or demonstrate it yourself.',
          'Connect the two with is or the action word.',
          'Repeat each combination two or three times.',
          'Build a pattern of family member plus action.',
          'Make it playful and celebratory.',
          'Invite baby\'s name to move along with each family member.'
        ],
        examples: [
          'Have Mommy dance while saying Mommy is dancing, then invite baby\'s name to dance like Mommy.',
          'Say Daddy is jumping and bounce up and down, then ask baby\'s name to jump like Daddy.'
        ],
        watchFor: [
          'Baby\'s name connecting the family member name to the action.',
          'Attempting to imitate family members.',
          'Understanding the pattern of name plus action.',
          'Excitement when seeing family members move.'
        ],
        parentTip: 'Real family members present is more engaging than dolls, but dolls work just fine if family isn\'t available.',
        funTwist: 'Have family members exaggerate their movements to make it silly and fun. Big bouncy jumps, dramatic dancing with fancy steps.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: The Family Parade March',
      duration: '3-4 min',
      focus: 'Sequencing and Movement of Multiple People',
      researchBasis: 'Bruner (1983) showed that sequential activities with multiple participants build turn-taking and attention.',
      content: {
        goal: 'Create a parade where family members move one at a time, each doing a different action, while baby\'s name watches and learns the sequence.',
        whatToSay: [
          '"Mommy is dancing first. Dance, dance, dance."',
          '"Now Daddy is jumping. Jump, jump, jump."',
          '"Now Grandma is clapping. Clap, clap."',
          '"Mommy danced, Daddy jumped, Grandma clapped. The whole family marched."'
        ],
        whatToDo: [
          'Line up family members or arrange them in a space.',
          'Have each person take a turn doing their action.',
          'Narrate each person and action as they move.',
          'Create a sequence so baby\'s name understands the order.',
          'Use words like first, then, next to mark the sequence.',
          'Invite baby\'s name to join the parade.',
          'Have baby\'s name walk or move through the parade to each family member.',
          'Celebrate the whole family marching together.'
        ],
        examples: [
          'Mommy dances in place, then steps aside. Daddy comes and jumps in place, then steps aside. Grandma claps and spins.',
          'Baby\'s name walks from person to person and each one does their action as baby\'s name approaches.'
        ],
        watchFor: [
          'Baby\'s name watching the sequence and anticipating who goes next.',
          'Understanding that different people do different actions.',
          'Interest in the parade and the variety.',
          'Excitement or smiling during the family activity.'
        ],
        parentTip: 'Real family members make this special and meaningful. Video call family members if they\'re not physically present.',
        funTwist: 'Ask baby\'s name what action they want Mommy to do next. Gives them agency and creates more engagement.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Baby\'s Name Joins the Parade',
      duration: '2-3 min',
      focus: 'Personal Participation and Identity',
      researchBasis: 'Vygotsky (1978) emphasized that active participation accelerates learning faster than observation alone.',
      content: {
        goal: 'Invite baby\'s name to march in the parade, picking actions they want to do and family members they want to move with.',
        whatToSay: [
          '"Now baby\'s name is dancing. Dance, dance, dance."',
          '"Baby\'s name is jumping with Daddy. Jump, jump."',
          '"You\'re in the parade. Baby\'s name is marching with the family."',
          '"Everyone is parading together. The whole family is celebrating."'
        ],
        whatToDo: [
          'Invite baby\'s name to pick an action.',
          'Do the action together or have them do it while family cheers.',
          'Have them march with each family member.',
          'Celebrate their participation loudly and joyfully.',
          'Take turns being in the center of the parade.',
          'Make baby\'s name feel like a star performer.',
          'Invite family to cheer and celebrate their movements.'
        ],
        examples: [
          'Baby\'s name picks jumping. Daddy takes their hand and they jump together in the parade.',
          'Everyone stops and watches baby\'s name dance, then claps and cheers.'
        ],
        watchFor: [
          'Baby\'s name showing confidence and willingness to participate.',
          'Enjoying the attention and celebration.',
          'Understanding that they\'re part of the family activity.',
          'Gaining social and physical confidence.'
        ],
        parentTip: 'This builds self-confidence and social engagement. Celebrate enthusiastically.',
        funTwist: 'Let baby\'s name direct the parade. Can they show the family what to do?'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Beautiful family parade time',
          'You and baby\'s name practiced',
          'Combining family names with action words',
          'Understanding that people do different actions',
          'Sequences and taking turns with family',
          'Feeling like part of the family group'
        ],
        reviewQuestions: [
          'What action did baby\'s name pick to do?',
          'Which family member did they seem most excited about?',
          'Did they understand the sequence of the parade?',
          'How did they respond to being celebrated by family?'
        ],
        parentTakeaway: {
          title: 'Why Family Parades Matter',
          content: 'Language develops in relationship. When baby\'s name sees family members do actions and participates with them, they\'re learning language while strengthening family bonds. This combines emotional connection with cognitive growth. The joy they feel during this parade becomes linked to learning itself. Plus they\'re building social skills, confidence, and understanding of how language describes real life with real people.'
        },
        nextSteps: [
          'Do parades throughout the week with different actions and family members.',
          'Include extended family through video calls if possible.',
          'Let baby\'s name lead sometimes. What should Mommy do?',
          'Notice and celebrate growth in language and confidence.',
          'Make family time and learning time the same thing. They should feel like play.'
        ]
      }
    }
  ]
},

// ========= LESSON 18 =========
{
  id: 18,
  phase: '2',
  quarter: 1,
  week: 4,
  weekIndex: 3,
  dayInWeek: 3,
  title: 'Lesson 18: Action Review Game Building Recognition and Recall',
  theme: 'Active Comprehension and Vocabulary Recall',
  skillRecurrenceTags: ['action-words', 'listening', 'comprehension', 'memory'],
  relatedToPreviousSkills: ['action-words', 'following-directions', 'naming', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Action Review Game',
      duration: '1 min',
      content: {
        goal: 'Review all the action words from Weeks 3 and 4 through games that test comprehension and build memory. This deepens understanding and shows how much baby\'s name has learned.',
        parentGuide: [
          'Review through games is more powerful than formal practice. Play makes learning memorable.',
          'Testing comprehension through varied games shows real understanding, not just repetition.',
          'Games build confidence and make baby\'s name feel successful about their learning.',
          'This integrated review week shows all the skills coming together naturally.'
        ],
        materials: ['Open space for moving', 'Optional music', 'Props like scarves or blankets can enhance actions', 'Your enthusiasm and celebration'],
        tip: 'Keep the energy playful and celebratory. This is about recognizing growth, not testing.',
        researchNote: 'Bjork & Bjork (1992) found that varied retrieval practice through games strengthens memory and transfer of learning better than repetitive drilling.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Action Detective Game',
      duration: '3-4 min',
      focus: 'Recognizing Actions Without Being Told',
      researchBasis: 'Hart & Risley (1995) showed that children who recognize and identify words without adult prompting show strongest vocabulary retention.',
      content: {
        goal: 'You do an action silently and baby\'s name guesses what action it is by naming it or doing it with you.',
        whatToSay: [
          '"I\'m doing an action. What am I doing?"',
          '"Yes, I\'m jumping. You guessed jumping."',
          '"Let\'s see if you can guess this one."',
          '"Good detective work. You know all the actions."'
        ],
        whatToDo: [
          'Pick an action baby\'s name knows like jumping or clapping.',
          'Do it without saying anything.',
          'Wait for them to respond or guess.',
          'If they do the action with you, celebrate.',
          'If they say the word, celebrate even more.',
          'If they don\'t respond, tell them what action it is and do it together.',
          'Try five to six different actions.',
          'Keep the pace fun and light.'
        ],
        examples: [
          'Do big exaggerated jumps silently and wait. Does baby\'s name jump too or say jump?',
          'Spin around silently. Do they understand it\'s spinning and spin with you?'
        ],
        watchFor: [
          'Baby\'s name recognizing the action without hearing the word.',
          'Attempting to identify or copy the action.',
          'Understanding that they\'re supposed to guess.',
          'Growing confidence as they recognize more actions.'
        ],
        parentTip: 'This is harder than following commands because they have to recall without being told. Celebrate all attempts.',
        funTwist: 'Let baby\'s name do the silent action and you guess. Role reversal shows real understanding.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Memory and Motion Sequence Game',
      duration: '3-4 min',
      focus: 'Remembering and Repeating Action Sequences',
      researchBasis: 'Gathercole & Baddeley (1989) found that children\'s ability to repeat sequences predicts later language and literacy skills.',
      content: {
        goal: 'You do a sequence of two to three actions and baby\'s name tries to repeat the sequence in order.',
        whatToSay: [
          '"Watch me do actions in order. First jump, then clap, then sit."',
          '"Now you try. Jump, then clap, then sit."',
          '"Good remembering. You did all three."',
          '"You remembered the order. That\'s big learning."'
        ],
        whatToDo: [
          'Do a sequence of two actions first. Jump then clap.',
          'Do them slowly and clearly.',
          'Narrate the sequence as you go.',
          'Invite baby\'s name to repeat.',
          'Guide them if needed.',
          'Celebrate any attempt at repeating.',
          'Try a three action sequence next if they\'re ready.',
          'Keep it playful and supportive.'
        ],
        examples: [
          'Do jump, clap, sit slowly. Then ask baby\'s name to do it. Help by doing it with them if needed.',
          'Create silly sequences like dance, jump, freeze or hop, spin, sit.'
        ],
        watchFor: [
          'Baby\'s name remembering one action in sequence.',
          'Attempting to repeat two actions in order.',
          'Understanding that order matters.',
          'Celebrating their own success with expressions or sounds.'
        ],
        parentTip: 'Working memory is still developing. Two or three actions is challenging and good for growth.',
        funTwist: 'Let baby\'s name create the sequence and you follow. They\'re building memory and leadership skills.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Command Challenge and Celebration',
      duration: '2-3 min',
      focus: 'Demonstrating Mastery and Building Confidence',
      researchBasis: 'Dweck (2006) found that celebrating effort and growth builds confidence and motivation for future learning.',
      content: {
        goal: 'Give a variety of commands including single actions, two action sequences, and silly variations to showcase everything baby\'s name has learned. Celebrate success enthusiastically.',
        whatToSay: [
          '"Jump."',
          '"Clap and sit."',
          '"Dance like a silly bear."',
          '"You know so many things. You\'re a learning superstar."'
        ],
        whatToDo: [
          'Mix up command types. Single commands, two command sequences, silly variations.',
          'Give them variety to show off their learning.',
          'Celebrate every response loudly.',
          'Take photos or video of them following commands.',
          'Have family members give commands and cheer.',
          'End with big celebration of how much they\'ve learned.',
          'Tell them specifically what you noticed they improved on.'
        ],
        examples: [
          'Single commands like jump, dance, sit to show they understand each one.',
          'Two command sequences like hop then rest or clap then spin.',
          'Silly variations like jump in slow motion or dance like a penguin.'
        ],
        watchFor: [
          'Baby\'s name showing confidence in their abilities.',
          'Willingness to try new variations.',
          'Understanding of all the action words from the weeks.',
          'Joy and pride in their learning.'
        ],
        parentTip: 'This is a celebration moment. Your genuine pride and enthusiasm matters more than perfect execution.',
        funTwist: 'Let baby\'s name command you. Jump when they say jump. They\'re the teacher now.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful review and celebration',
          'You and baby\'s name practiced',
          'Recognizing actions without being told',
          'Remembering action sequences in order',
          'Following varied and silly commands',
          'Showing mastery of everything from Weeks 1 through 4'
        ],
        reviewQuestions: [
          'Which action game did baby\'s name enjoy most?',
          'Did they recognize any actions without being told?',
          'Were they able to repeat action sequences?',
          'How confident did they seem about their learning?'
        ],
        parentTakeaway: {
          title: 'Four Weeks of Growth',
          content: 'Four weeks ago baby\'s name was learning to recognize and name basic objects. Now they understand family members, emotions, actions in sequence, cause and effect, stories, and how to follow complex commands. They\'re using language to understand and navigate their world. The growth might feel gradual day to day but looking back it\'s enormous. Trust the process. Every interaction builds language and confidence. You\'re not just teaching words, you\'re building a communicator.'
        },
        nextSteps: [
          'Play action games throughout daily routines for the whole week.',
          'Keep celebrating their learning. Notice and comment on growth.',
          'Week 5 brings new skills but everything they learned stays. Skills build on each other.',
          'Take time to notice how much more engaged and confident baby\'s name is.',
          'Enjoy the connections you\'ve built through learning together.'
        ]
      }
    }
  ]
},

// ========= LESSON 19 =========
{
  id: 19,
  phase: '2',
  quarter: 1,
  week: 4,
  weekIndex: 3,
  dayInWeek: 4,
  title: 'Lesson 19: Rhythm and Clap Review Bringing It All Together With Sound',
  theme: 'Integrating Rhythm, Naming, and Movement',
  skillRecurrenceTags: ['rhythm', 'action-words', 'listening', 'naming'],
  relatedToPreviousSkills: ['all-week-4-skills'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Rhythm Review',
      duration: '1 min',
      content: {
        goal: 'Combine rhythm, clapping, and naming to review multiple skills at once. This brings together listening, movement, timing, and language all in one joyful activity.',
        parentGuide: [
          'Rhythm engages the brain in ways that pure language doesn\'t. Adding rhythm to learning creates stronger neural pathways.',
          'Clapping combines motor control with auditory processing and language learning simultaneously.',
          'Week 4 rhythm games help solidify everything baby\'s name learned while preparing for Week 5.',
          'These activities feel like pure play but they\'re reinforcing and deepening all prior learning.'
        ],
        materials: ['Your hands for clapping', 'Optional rhythm instrument like a spoon and pot', 'Optional music or songs baby\'s name knows', 'Open space for movement'],
        tip: 'Keep rhythm simple. Even one clap per beat is plenty for this age.',
        researchNote: 'Trainor & Hannon (2013) found that rhythm activities boost language learning through synchronization of auditory and motor systems.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Clap Names and Syllables',
      duration: '3-4 min',
      focus: 'Connecting Names to Rhythm and Clapping',
      researchBasis: 'Anthony & Francis (2005) showed that awareness of syllables in words predicts phonological awareness skills crucial for reading.',
      content: {
        goal: 'Say names of family members and objects while clapping the syllables, helping baby\'s name hear how words break into rhythm patterns.',
        whatToSay: [
          '"Let\'s clap Mommy. Mom-my. Clap, clap. Two claps for Mommy."',
          '"Now let\'s clap Daddy. Dad-dy. Clap, clap."',
          '"Baby\'s name. That\'s three claps. Clap, clap, clap."',
          '"Ball is one clap. Clap. Block is one clap. Clap."'
        ],
        whatToDo: [
          'Say a family member\'s name and clap each syllable slowly.',
          'Do it together with baby\'s name.',
          'Repeat each name three to four times.',
          'Make sure the claps are clear and easy to follow.',
          'Move to object names next.',
          'Mix short and long names to show variation.',
          'Celebrate every clap baby\'s name makes with you.'
        ],
        examples: [
          'Say Mommy while clapping twice slowly. Say it again with claps. Invite baby\'s name to clap with you.',
          'Say Grandma three times while clapping once per syllable. Gran-ma. Clap, clap.'
        ],
        watchFor: [
          'Baby\'s name clapping along with you.',
          'Understanding that words have rhythms.',
          'Attempting to match claps to syllables.',
          'Enjoying the combined speaking and clapping.'
        ],
        parentTip: 'Don\'t worry about perfect syllable counting. The goal is feeling rhythm in words.',
        funTwist: 'Use different body parts. Tap your legs, stamp your feet, clap your hands for different names.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Action Words Clapped',
      duration: '3-4 min',
      focus: 'Rhythm Combined With Action Vocabulary',
      researchBasis: 'Cross et al. (2011) showed that synchronized movement to rhythm strengthens both motor and language neural networks.',
      content: {
        goal: 'Say action words while clapping the syllables, then do the action. This combines rhythm, naming, and movement all at once.',
        whatToSay: [
          '"Let\'s clap jumping. Jump-ing. Clap, clap. Now let\'s jump."',
          '"Clap-ping. Clap, clap. Now clap."',
          '"Dan-cing. Clap, clap. Now dance."',
          '"Sit-ting. Clap, clap. Now sit."'
        ],
        whatToDo: [
          'Pick an action word.',
          'Say it slowly and clap each syllable.',
          'Repeat two to three times.',
          'Then do the action together.',
          'Narrate what you\'re doing.',
          'Move to the next action word.',
          'Keep the energy playful and connected.'
        ],
        examples: [
          'Say running while clapping three times, then run in place together.',
          'Say dancing while clapping twice, then dance together to celebrate.'
        ],
        watchFor: [
          'Baby\'s name connecting the rhythmic name to the action.',
          'Clapping along with you.',
          'Doing the action after the clapping.',
          'Understanding the pattern of name, rhythm, then action.'
        ],
        parentTip: 'This chains three skills together, which shows real language integration.',
        funTwist: 'Ask baby\'s name to pick the next action. What should we clap and do?'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Rhythm Games With Instruments',
      duration: '2-3 min',
      focus: 'Listening and Following Rhythmic Patterns',
      researchBasis: 'Trehub et al. (1997) found that infants recognize and respond to rhythmic patterns with greater accuracy when allowed to move with the rhythm.',
      content: {
        goal: 'Use simple instruments like wooden spoons and pots to create rhythms while naming them, or play rhythms and have baby\'s name copy or respond with movement.',
        whatToSay: [
          '"Listen to this rhythm. Tap, tap, tap. Can you tap with me?"',
          '"We\'re making music. Clap, tap, tap."',
          '"Slow rhythm. Tap... tap... tap. Now fast rhythm. Tap tap tap."',
          '"You\'re a rhythm maker too."'
        ],
        whatToDo: [
          'Make a simple rhythm with your hands or an instrument.',
          'Let baby\'s name watch and listen.',
          'Invite them to copy the rhythm.',
          'Vary the rhythm from slow to fast.',
          'Celebrate attempts to copy.',
          'Create rhythms together.',
          'Connect the rhythms to actions like stomping or bouncing.'
        ],
        examples: [
          'Create a pattern like tap, tap, rest, tap, tap, rest and see if baby\'s name follows.',
          'Make fast and slow rhythms and have baby\'s name dance fast then slow to match.'
        ],
        watchFor: [
          'Baby\'s name listening intently to the rhythm.',
          'Attempting to copy the pattern.',
          'Understanding that rhythms can change.',
          'Connecting rhythm to body movement.'
        ],
        parentTip: 'Rhythm games don\'t need special instruments. Your voice, clapping, and stomping work beautifully.',
        funTwist: 'Make silly rhythms. Rhythm that sounds like a marching bear or a sleeping cat or a jumping frog.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Beautiful rhythm and integration',
          'You and baby\'s name practiced',
          'Clapping syllables in names',
          'Combining rhythm with action words',
          'Following and creating rhythm patterns',
          'Connecting multiple skills through music and movement'
        ],
        reviewQuestions: [
          'Which rhythm activity did baby\'s name enjoy most?',
          'Did they clap along with you?',
          'Did they understand the connection between the rhythm and the action?',
          'Are they showing confidence and engagement?'
        ],
        parentTakeaway: {
          title: 'Why Rhythm Matters',
          content: 'Rhythm is wired into human brains from birth. When baby\'s name learns language with rhythm, it becomes more memorable and more deeply embedded. Rhythm also builds coordination, timing, and the ability to synchronize with others. These are skills that support not just language but social connection, music ability, and even academic learning later on.'
        },
        nextSteps: [
          'Play rhythm games throughout the week during routines.',
          'Clap syllables in names whenever it feels natural.',
          'Create rhythms together. Let baby\'s name lead sometimes.',
          'Notice how rhythm makes learning fun and memorable.',
          'Week 5 introduces new skills but rhythm stays as a tool throughout learning.'
        ]
      }
    }
  ]
},

// ========= LESSON 20 =========
{
  id: 20,
  phase: '2',
  quarter: 1,
  week: 4,
  weekIndex: 3,
  dayInWeek: 5,
  title: 'Lesson 20: Month Review and Celebration Quarter Completion',
  theme: 'Integration, Reflection, and Celebration of One Month of Learning',
  skillRecurrenceTags: ['all-quarter-1-skills', 'integration', 'narrative', 'celebration'],
  relatedToPreviousSkills: ['all-weeks-1-4-skills'],
  duration: '15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Month Celebration Day',
      duration: '1 min',
      content: {
        goal: 'Celebrate one full month of learning by reviewing key moments, combining all skills, and recognizing how much baby\'s name has grown. This creates joy, confidence, and momentum for the next phase.',
        parentGuide: [
          'Celebration is crucial for motivation and confidence building. Taking time to notice growth matters.',
          'Reflecting on the month helps you recognize patterns in baby\'s name\'s learning and your own growth as a teacher.',
          'Sharing celebration with family builds connection and shows baby\'s name that learning is valued.',
          'This completion moment marks Quarter 1 mastery and prepares for Quarter 2 challenges ahead.'
        ],
        materials: ['Photos or videos from the month if you have them', 'All favorite toys and books from the month', 'Optional special snack or treat', 'Family members to celebrate with', 'Your heart full of pride'],
        tip: 'Make this special. Take time. Notice everything baby\'s name has learned.',
        researchNote: 'Dweck (2006) showed that celebrating effort and growth builds intrinsic motivation and confidence for future learning challenges.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Favorite Moments Review',
      duration: '3-4 min',
      focus: 'Reflection and Memory of Learning Journey',
      researchBasis: 'Nelson & Fivush (2004) found that reminiscing about shared experiences strengthens memory and parent-child bonding.',
      content: {
        goal: 'Tell the story of the month by recalling favorite moments, favorite skills baby\'s name learned, and favorite games you played together.',
        whatToSay: [
          '"Remember when you learned all the object names? You learned ball, block, cup, and so many more."',
          '"You learned to recognize Mommy and Daddy and Grandma."',
          '"You learned to jump and run and dance. You learned so many actions."',
          '"You learned emotions. You know happy and sad and surprised."',
          '"You\'re such a smart learner."'
        ],
        whatToDo: [
          'Sit together with baby\'s name and reflect on the month.',
          'Pull out favorite toys and books from the weeks.',
          'Ask them to show you what they learned.',
          'Remind them of favorite activities.',
          'Tell the story of their learning journey.',
          'Use words like remember and learned and you did.',
          'Make it warm and celebratory.'
        ],
        examples: [
          'Hold up a ball and say, Remember when you learned what a ball is? You knew so many object names.',
          'Look through photos together and narrate the learning moments.'
        ],
        watchFor: [
          'Baby\'s name enjoying the reminiscing.',
          'Showing recognition of familiar toys and books.',
          'Responding to the celebration and warmth.',
          'Understanding that they\'ve accomplished things.'
        ],
        parentTip: 'This is memory work and bonding work all at once.',
        funTwist: 'Let baby\'s name pick their favorite moment and you celebrate it extra big.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Skills Showcase',
      duration: '3-4 min',
      focus: 'Demonstrating Mastery and Building Confidence',
      researchBasis: 'Dweck (2006) found that public acknowledgment of skills builds confidence and self-efficacy in young children.',
      content: {
        goal: 'Invite baby\'s name to show off everything they learned. Give commands, ask questions, play games, and celebrate every success loudly with family watching.',
        whatToSay: [
          '"Can you jump for Grandma?"',
          '"Show us your happy face."',
          '"What\'s this? (Hold up a toy) That\'s right, a block."',
          '"You\'re amazing. You learned so much."'
        ],
        whatToDo: [
          'Invite family members if possible.',
          'Give commands from the month like jump, clap, dance.',
          'Ask them to name familiar objects.',
          'Ask them to show emotions.',
          'Play favorite games.',
          'Have family members cheer and celebrate.',
          'Take photos or video to remember the moment.',
          'End with big celebration.'
        ],
        examples: [
          'Grandma says jump and baby\'s name jumps. Everyone cheers.',
          'Ask them to make a happy face or sad face. Family celebrates understanding.'
        ],
        watchFor: [
          'Baby\'s name showing confidence in their abilities.',
          'Enjoying the attention and celebration.',
          'Understanding that they\'re the star.',
          'Pride in their accomplishments.'
        ],
        parentTip: 'This moment builds self-esteem and motivation for future learning.',
        funTwist: 'Let baby\'s name command the adults. Jump when they say jump. They\'re the teacher.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Looking Forward to Quarter 2',
      duration: '2-3 min',
      focus: 'Preparing for New Growth and Building Excitement',
      researchBasis: 'Vygotsky (1978) emphasized that confidence from past success creates optimal conditions for facing new challenges.',
      content: {
        goal: 'Celebrate Quarter 1 completion and build excitement for Quarter 2. Hint at new skills coming while affirming what baby\'s name has already mastered.',
        whatToSay: [
          '"You learned so much this month. You\'re such a smart learner."',
          '"Next month we\'re learning even more new things."',
          '"You\'re going to learn more family members and more actions and more stories."',
          '"I\'m so proud of you. You\'re amazing."'
        ],
        whatToDo: [
          'Tell baby\'s name you\'re proud of their learning.',
          'Remind them of what they mastered.',
          'Build excitement about what\'s coming.',
          'Keep the energy positive and forward looking.',
          'Take a family photo together to mark the moment.',
          'Maybe do something special to celebrate like a favorite snack or outing.',
          'End on a note of joy and anticipation.'
        ],
        examples: [
          'We learned colors and sizes coming up. We\'ll learn even more about how things work.',
          'You\'re getting to be such a big communicator. Every day you understand more.'
        ],
        watchFor: [
          'Baby\'s name feeling proud and celebrated.',
          'Energy shifting toward excitement about what\'s next.',
          'Understanding that learning is ongoing and always growing.',
          'Confidence built from success.'
        ],
        parentTip: 'This bridge between quarters matters. You\'re showing that learning never stops and that\'s exciting.',
        funTwist: 'Let baby\'s name help you set up for next week\'s lessons. They\'re part of the planning.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Quarter 1 Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Congratulations to you and baby\'s name',
          'Quarter 1 is complete',
          'You practiced learning object names and recognition',
          'You practiced meeting family members and learning relationships',
          'You practiced recognizing and naming emotions',
          'You practiced learning action words and movement',
          'You practiced following directions and understanding sequences',
          'You practiced creating simple stories and understanding cause and effect',
          'You practiced integrating multiple skills into play and learning'
        ],
        reviewQuestions: [
          'Which week was your favorite?',
          'What surprised you most about baby\'s name\'s learning?',
          'How do you feel about your growth as a learning guide?',
          'What skills do you most want to build on in Quarter 2?'
        ],
        parentTakeaway: {
          title: 'One Month of Transformation',
          content: 'Four weeks ago your baby\'s name was learning to recognize basic objects. Now they understand people and feelings and actions and simple stories. They follow complex directions. They learn through movement and music and play. Most importantly they\'re developing confidence in their ability to learn and communicate. You\'ve built that. Every single activity, every moment of presence, every celebration matters. You\'re not just teaching language. You\'re building a communicator, a thinker, a confident child who loves learning. That\'s the real gift of these four weeks.'
        },
        nextSteps: [
          'Take a moment to celebrate yourself as well. You showed up for learning every day.',
          'Notice how natural this feels now. The first week felt new and maybe overwhelming. Now it\'s a beautiful rhythm.',
          'Rest if you need to. Learning is joyful but also real work.',
          'Get ready for Quarter 2 which introduces colors, textures, and deeper comprehension.',
          'Remember baby\'s name still loves these skills. Keep them alive while learning new ones.',
          'Most importantly enjoy this moment. You\'ve accomplished something real together.'
        ]
      }
    }
  ]
},

// ========= LESSON 21 =========
{
  id: 21,
  phase: '2',
  quarter: 1,
  week: 5,
  weekIndex: 4,
  dayInWeek: 1,
  title: 'Lesson 21: Soft and Hard Textures Beginning Descriptive Vocabulary',
  theme: 'Sensory Exploration and Texture Words',
  skillRecurrenceTags: ['texture-words', 'sensory-learning', 'descriptive-vocabulary', 'naming'],
  relatedToPreviousSkills: ['naming', 'listening', 'sensory-awareness'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Texture Exploration Week',
      duration: '1 min',
      content: {
        goal: 'Begin Week 5 by introducing descriptive vocabulary through textures. Baby\'s name learns that words describe how things feel, not just what they are called.',
        parentGuide: [
          'Descriptive vocabulary expands language beyond naming into rich, detailed communication. Texture words like soft, hard, smooth, and rough build this foundation.',
          'Learning through touch engages sensory systems that many toddlers learn through best. Tactile exploration makes words memorable.',
          'Week 5 spirals from Weeks 1 through 4 by taking familiar objects and adding new descriptive layers. Everything baby\'s name knows now gets richer.',
          'Sensory vocabulary predicts stronger descriptive writing and speaking skills throughout school years.'
        ],
        materials: ['Soft items like blanket, stuffed animal, cotton ball, soft toy', 'Hard items like wooden block, plastic toy, pot, spoon', 'Other textures like bumpy ball, smooth stone, fuzzy texture', 'Your hands and enthusiasm'],
        tip: 'Let baby\'s name feel items with their hands and mouth if safe. Tactile learning is powerful at this age.',
        researchNote: 'Rowe (2012) found that descriptive vocabulary learned through multisensory experiences transfers to new learning situations faster than single modality learning.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Soft and Hard',
      duration: '3-4 min',
      focus: 'Understanding Basic Texture Contrasts',
      researchBasis: 'Meltzoff & Moore (1977) showed that contrasting pairs help infants learn categories and distinguish features.',
      content: {
        goal: 'Show baby\'s name a soft item and a hard item side by side. Let them feel both while you name the textures clearly.',
        whatToSay: [
          '"This is soft. Feel it. Soft, soft, soft. This blanket is soft."',
          '"This is hard. Feel this. Hard, hard. This block is hard."',
          '"The blanket is soft. The block is hard. One is soft, one is hard."',
          '"Can you feel the difference? Soft and hard are different."'
        ],
        whatToDo: [
          'Hold up a soft item like a blanket or stuffed animal.',
          'Let baby\'s name feel it with their hands.',
          'Say soft clearly while they touch it.',
          'Repeat the word three to four times.',
          'Then show a hard item like a wooden block.',
          'Let them feel it too.',
          'Say hard clearly while they touch.',
          'Compare the two items directly.'
        ],
        examples: [
          'Hold soft blanket in one hand and wooden block in the other. Let baby\'s name touch each one while you say the words.',
          'Guide their hand over the soft item. Feel how soft this is. Soft blanket.'
        ],
        watchFor: [
          'Baby\'s name feeling the items curiously.',
          'Responding to the contrast between soft and hard.',
          'Showing interest in touching and exploring.',
          'Any vocalizations or attempts to repeat the words.'
        ],
        parentTip: 'Let them explore freely. The tactile experience is the learning tool.',
        funTwist: 'Make exaggerated happy faces when they touch soft. Make silly surprised faces when they touch hard.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Find Soft and Hard Around the Room',
      duration: '3-4 min',
      focus: 'Recognizing Textures in Environment',
      researchBasis: 'Rowe (2012) showed that practicing words in varied environmental contexts strengthens transfer and generalization.',
      content: {
        goal: 'Walk around the room and touch different things, naming whether they are soft or hard.',
        whatToSay: [
          '"This pillow is soft. Feel it. Soft pillow."',
          '"The table is hard. Hard table."',
          '"The rug is soft. Let\'s feel the soft rug."',
          '"The chair is hard. This chair is hard."'
        ],
        whatToDo: [
          'Take baby\'s name\'s hand and walk around together.',
          'Touch different objects in the room.',
          'Name each one soft or hard.',
          'Let them feel each thing.',
          'Touch high things and low things.',
          'Touch different textures.',
          'Keep moving and exploring.',
          'Make it feel like an adventure.'
        ],
        examples: [
          'Touch the couch cushion. This is soft. Soft couch. Now touch the wall. Hard wall.',
          'Feel different surfaces in the room and name them. Soft rug, hard floor, soft pillow, hard table.'
        ],
        watchFor: [
          'Baby\'s name following along and touching things.',
          'Understanding the soft and hard categories.',
          'Showing interest in texture exploration.',
          'Attempting to touch and feel things themselves.'
        ],
        parentTip: 'This connects the words to real surroundings. Learning is more powerful in context.',
        funTwist: 'Play texture hunt. Can they find something soft? Something hard? Let them lead the search.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Match Soft and Hard Pairs',
      duration: '2-3 min',
      focus: 'Categorization and Matching',
      researchBasis: 'Mandler & Bauer (1988) found that categorization activities strengthen concept understanding in toddlers.',
      content: {
        goal: 'Create a simple matching game where baby\'s name groups soft things together and hard things together.',
        whatToSay: [
          '"Find something soft. Where is something soft?"',
          '"Yes, the blanket is soft. Put it here with the soft things."',
          '"Find something hard. Where is a hard thing?"',
          '"The block is hard. Soft things go here, hard things go there."'
        ],
        whatToDo: [
          'Set up two areas soft things and hard things.',
          'Show baby\'s name a soft item.',
          'Ask them to find another soft thing.',
          'Put them together.',
          'Do the same with hard items.',
          'Build two piles of soft and hard.',
          'Celebrate the sorting.',
          'Review by pointing to each pile and naming.'
        ],
        examples: [
          'You have the blanket soft. Now find another soft thing. Let\'s put them together.',
          'You found the block hard. What else is hard? The spoon is hard too.'
        ],
        watchFor: [
          'Baby\'s name understanding the soft and hard groups.',
          'Attempting to categorize items.',
          'Showing success in sorting activities.',
          'Understanding that items can be grouped by how they feel.'
        ],
        parentTip: 'This is early categorization which builds math and logical thinking alongside language.',
        funTwist: 'Let baby\'s name pick what goes in each pile. They\'re learning and leading.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Beautiful texture exploration',
          'You and baby\'s name practiced feeling soft and hard textures',
          'You learned descriptive words for how things feel',
          'You found soft and hard things around your home',
          'You sorted and grouped by texture'
        ],
        reviewQuestions: [
          'Which texture did baby\'s name seem most interested in exploring?',
          'Did they attempt to say soft or hard?',
          'Did they understand the soft and hard groups?',
          'How engaged were they in the sensory exploration?'
        ],
        parentTakeaway: {
          title: 'Sensory Learning Is Powerful',
          content: 'Words learned through touch, sight, and exploration become deeply embedded in memory. When baby\'s name learns soft and hard by feeling them, those words aren\'t abstract concepts. They\'re real experiences connected to physical sensation. This is how language becomes meaningful and transferable to new situations.'
        },
        nextSteps: [
          'Keep exploring textures throughout the week. Every object becomes a learning opportunity.',
          'Add the words soft and hard to daily language. Soft blanket at bedtime, hard chair at meals.',
          'Encourage baby\'s name to feel and explore new textures safely.',
          'Next lessons introduce more textures to expand the vocabulary even further.'
        ]
      }
    }
  ]
},

// ========= LESSON 22 =========
{
  id: 22,
  phase: '2',
  quarter: 1,
  week: 5,
  weekIndex: 4,
  dayInWeek: 2,
  title: 'Lesson 22: Color Hunt Finding Red and Blue',
  theme: 'Color Recognition and Visual Vocabulary',
  skillRecurrenceTags: ['color-words', 'visual-learning', 'descriptive-vocabulary', 'naming'],
  relatedToPreviousSkills: ['naming', 'pointing', 'following-directions'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Color Learning',
      duration: '1 min',
      content: {
        goal: 'Introduce color vocabulary starting with two primary colors like red and blue. Baby\'s name learns that colors describe what things look like.',
        parentGuide: [
          'Color vocabulary is one of the first descriptive categories children learn. Colors are visible, consistent, and appear everywhere.',
          'Learning through games and hunts makes color learning feel like play rather than instruction.',
          'Week 5 adds visual descriptive vocabulary to the texture words from Lesson 21, building layered descriptions.',
          'Color recognition predicts stronger visual processing and observation skills throughout development.'
        ],
        materials: ['Red toys or objects like ball, block, toy car', 'Blue toys or objects like ball, block, toy', 'Optional colored containers or baskets', 'Your enthusiasm'],
        tip: 'Start with just two colors. Adding more colors gradually prevents confusion.',
        researchNote: 'Deuschel et al. (2010) found that color learning through active search and play transfers better than passive observation.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Red and Blue',
      duration: '3-4 min',
      focus: 'Basic Color Recognition and Naming',
      researchBasis: 'Soja et al. (1991) showed that toddlers learn color categories when parents provide consistent labeling in varied contexts.',
      content: {
        goal: 'Show baby\'s name red and blue objects side by side. Let them see the colors clearly while you name the colors.',
        whatToSay: [
          '"Look, this is red. Red toy. This is red."',
          '"This is blue. Blue, blue. This block is blue."',
          '"Red and blue. One is red, one is blue."',
          '"Can you see the colors? Red and blue are different."'
        ],
        whatToDo: [
          'Hold up a bright red object.',
          'Say red slowly and clearly.',
          'Let baby\'s name look at it.',
          'Hold it a few seconds.',
          'Then show a blue object.',
          'Say blue clearly.',
          'Repeat each color two to three times.',
          'Compare them side by side.'
        ],
        examples: [
          'Hold a red ball and blue ball in each hand. Say the colors clearly. Red ball and blue ball.',
          'Point to each object and repeat the color name.',
          'Move the colored objects slowly so baby\'s name can track them with their eyes.'
        ],
        watchFor: [
          'Baby\'s name looking at the different colors.',
          'Showing interest in the objects.',
          'Focusing on the colors rather than just the toys.',
          'Any attempts to vocalize or repeat color words.'
        ],
        parentTip: 'Bright, clear colors are easiest for young toddlers to distinguish.',
        funTwist: 'Make the toys dance or move while saying the colors. Red ball bounces, blue ball rolls.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Color Hunt Around the House',
      duration: '3-4 min',
      focus: 'Recognizing Colors in Environment',
      researchBasis: 'Rowe (2012) showed that practicing vocabulary in varied real world contexts strengthens learning and transfer.',
      content: {
        goal: 'Search around the house for red and blue things, naming them as you find them.',
        whatToSay: [
          '"Let\'s find red things. Where\'s something red?"',
          '"Yes, the car is red. Red car."',
          '"Now let\'s find blue. Where\'s something blue?"',
          '"The cup is blue. Blue cup."'
        ],
        whatToDo: [
          'Walk around your home with baby\'s name.',
          'Ask them to find something red.',
          'Point it out and name it.',
          'Celebrate the finding.',
          'Move on to find blue things.',
          'Name each blue thing you find.',
          'Keep the pace playful and exploratory.',
          'Make it feel like a treasure hunt.'
        ],
        examples: [
          'Look for red things like a book, pillow, toy, or blanket. Red book. Red pillow.',
          'Find blue items like cup, toy, shirt, or blanket. Blue cup. Blue toy.'
        ],
        watchFor: [
          'Baby\'s name looking for colored objects.',
          'Understanding that colors appear in many places.',
          'Excitement about finding matches.',
          'Interest in the hunt itself.'
        ],
        parentTip: 'This connects color words to real surroundings making learning contextual and meaningful.',
        funTwist: 'Let baby\'s name lead the hunt. Which color should we find next? Let them choose.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Sort by Color',
      duration: '2-3 min',
      focus: 'Color Categorization and Matching',
      researchBasis: 'Mandler & Bauer (1988) found that categorization by visual features strengthens concept learning.',
      content: {
        goal: 'Create a simple color sorting game where baby\'s name puts red things in one group and blue things in another.',
        whatToSay: [
          '"Let\'s put the red things together. Red goes here."',
          '"Where is the red ball? Put it with the red things."',
          '"Now the blue things go here. Blue goes there."',
          '"You sorted by colors. Red things here, blue things there."'
        ],
        whatToDo: [
          'Set up two spaces one for red, one for blue.',
          'Have a collection of red and blue objects mixed together.',
          'Show baby\'s name a red object.',
          'Ask where it goes.',
          'Put it in the red pile.',
          'Do the same with blue.',
          'Build two color piles.',
          'Review by pointing and naming each color group.'
        ],
        examples: [
          'Show red ball and ask red or blue? Good, red goes here with the red things.',
          'Show blue block and ask red or blue? Yes, blue goes here with the blue things.'
        ],
        watchFor: [
          'Baby\'s name understanding the color categories.',
          'Successfully sorting objects by color.',
          'Showing understanding that colors go together.',
          'Growing confidence in the sorting activity.'
        ],
        parentTip: 'This is categorization by visual feature which builds math and logic skills.',
        funTwist: 'Let baby\'s name pick which color pile to add to next.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful color exploration',
          'You and baby\'s name practiced recognizing red and blue colors',
          'You found colors around your home',
          'You sorted and grouped by color',
          'You built visual descriptive vocabulary'
        ],
        reviewQuestions: [
          'Did baby\'s name show preference for one color over the other?',
          'Did they successfully find colored objects during the hunt?',
          'Did they understand the color sorting?',
          'How engaged were they in the color activities?'
        ],
        parentTakeaway: {
          title: 'Color Learning Opens Perception',
          content: 'When baby\'s name learns color words, they\'re learning to perceive and categorize the visual world. Colors organize how we understand and communicate about everything around us. Early color learning predicts stronger visual processing, observation skills, and descriptive language throughout childhood.'
        },
        nextSteps: [
          'Continue exploring colors throughout the week.',
          'Gradually introduce more colors alongside red and blue.',
          'Use color words in daily language. Blue shirt, red apple, yellow sun.',
          'Let baby\'s name notice colors in their world. Point them out together.',
          'Next lessons add more colors and begin combining colors with other descriptive words.'
        ]
      }
    }
  ]
},

// ========= LESSON 23 =========
{
  id: 23,
  phase: '2',
  quarter: 1,
  week: 5,
  weekIndex: 4,
  dayInWeek: 3,
  title: 'Lesson 23: Texture Trail Exploring Multiple Textures',
  theme: 'Expanding Sensory Vocabulary and Exploration',
  skillRecurrenceTags: ['texture-words', 'sensory-learning', 'exploration', 'descriptive-vocabulary'],
  relatedToPreviousSkills: ['texture-words', 'naming', 'movement'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Texture Trail Adventures',
      duration: '1 min',
      content: {
        goal: 'Expand texture vocabulary beyond soft and hard by creating a sensory trail that baby\'s name walks through, feeling different textures along the way.',
        parentGuide: [
          'Multiple texture experiences create richer sensory awareness and expand descriptive vocabulary.',
          'Walking a sensory trail combines movement with tactile learning, engaging multiple developmental systems at once.',
          'Week 5 spirals from Lesson 21 by adding more texture words like bumpy, smooth, rough, and fuzzy alongside soft and hard.',
          'Sensory trails are playful exploration that builds confidence and curiosity about the physical world.'
        ],
        materials: ['Smooth items like stones or smooth wood', 'Bumpy items like textured ball or bumpy rubber toy', 'Rough items like sandpaper or rough fabric', 'Fuzzy items like stuffed animals or fuzzy blanket', 'Items to arrange in a path'],
        tip: 'Arrange items in a safe path that baby\'s name can walk or crawl along safely.',
        researchNote: 'Anzman-Frasca & Kasdan (2012) found that multisensory exploration in pathways or trails significantly enhances vocabulary retention and transfer.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Set Up the Texture Trail',
      duration: '2-3 min',
      focus: 'Creating and Describing the Sensory Path',
      researchBasis: 'Montessori (1912) showed that prepared environments with sensory stations support independent exploration and learning.',
      content: {
        goal: 'Create a simple path with different textures that baby\'s name can walk along while touching each station.',
        whatToSay: [
          '"We\'re making a special path with different feelings."',
          '"This part is smooth. Feel it. Smooth."',
          '"This part is bumpy. Bump, bump, bump. Bumpy."',
          '"This part is rough. Rough, rough. Can you feel the rough?"',
          '"Let\'s walk the texture trail together."'
        ],
        whatToDo: [
          'Choose a clear space like a hallway or room.',
          'Arrange four to five different texture stations along a path.',
          'Each station should have one main texture.',
          'Space them close enough for baby\'s name to walk between them.',
          'Show baby\'s name each texture as you set it up.',
          'Name the texture for each station.',
          'Create a clear path with easy access to all items.',
          'Make it visually interesting so they want to explore.'
        ],
        examples: [
          'Station 1: Smooth stone in a shallow tray. Station 2: Bumpy ball on the floor. Station 3: Sandpaper on a low shelf. Station 4: Fuzzy blanket they can walk on.',
          'Arrange items at different heights so baby\'s name can touch them as they walk.'
        ],
        watchFor: [
          'Baby\'s name showing interest in the path.',
          'Understanding that different stations have different textures.',
          'Willingness to explore and touch each texture.',
          'Excitement about the special trail.'
        ],
        parentTip: 'Safety first. Make sure all textures are safe for touching and potentially mouthing.',
        funTwist: 'Name the trail something fun like the Magic Texture Path or the Feeling Adventure.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Walk and Feel the Trail',
      duration: '3-4 min',
      focus: 'Exploring and Naming Textures in Sequence',
      researchBasis: 'Piaget (1952) emphasized that sensorimotor exploration is how toddlers build understanding of their physical world.',
      content: {
        goal: 'Walk the trail with baby\'s name, pausing at each station to feel and name the texture.',
        whatToSay: [
          '"First we feel smooth. Smooth, smooth. This is so smooth."',
          '"Now bumpy. We walk to the bumpy. Bump, bump, bump."',
          '"Now rough. Oh, this is rough. Rough feels different."',
          '"Last we have fuzzy. Soft and fuzzy. Fuzzy!"'
        ],
        whatToDo: [
          'Take baby\'s name\'s hand and start walking the trail.',
          'Stop at the first texture station.',
          'Encourage them to feel it.',
          'Name the texture clearly.',
          'Use descriptive language about how it feels.',
          'Move to the next station.',
          'Repeat the process for each texture.',
          'Walk slowly and let them explore.'
        ],
        examples: [
          'At the smooth station, say smooth multiple times. At bumpy, make bouncing motions with your fingers. At rough, scrape gently to show the texture.',
          'Let baby\'s name lead sometimes. Which texture do they want to visit next?'
        ],
        watchFor: [
          'Baby\'s name walking or crawling along the path.',
          'Stopping to feel each texture.',
          'Showing interest in the different sensations.',
          'Any attempts to name or vocalize about the textures.'
        ],
        parentTip: 'Movement plus touch creates deeper neural encoding. They\'re learning through their whole body.',
        funTwist: 'Move differently between stations. Tiptoe to smooth, stomp to bumpy, dance to fuzzy.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Repeat and Play Trail Games',
      duration: '2-3 min',
      focus: 'Reinforcement Through Play and Variation',
      researchBasis: 'Bjork & Bjork (1992) found that varied retrieval practice strengthens memory more than repetition alone.',
      content: {
        goal: 'Walk the trail again with variations like different speeds, directions, or games that reinforce texture learning.',
        whatToSay: [
          '"Let\'s go fast this time. Quick, quick along the trail."',
          '"Now go slow. Slow, slow, feel each texture slowly."',
          '"Can you find the smooth? Where is smooth? There it is."',
          '"You\'re learning so many textures."'
        ],
        whatToDo: [
          'Walk the trail a second time with a different variation.',
          'Try different speeds or directions.',
          'Give them texture commands. Find the bumpy, touch the rough, feel the fuzzy.',
          'Let them lead and choose the order.',
          'Play a guessing game. What texture are we at now?',
          'Make it playful and celebratory.',
          'Repeat until they lose interest.'
        ],
        examples: [
          'Walk backwards along the trail. Walk like different animals. Hop, tiptoe, or crawl.',
          'Skip or dance between stations. Jump from one texture to the next.'
        ],
        watchFor: [
          'Baby\'s name enjoying the repetition with variation.',
          'Understanding and responding to texture names.',
          'Growing confidence in identifying textures.',
          'Sustained engagement and playfulness.'
        ],
        parentTip: 'Repetition with variation keeps learning fresh and deepens retention.',
        funTwist: 'Let baby\'s name create a texture trail. Where should we put the bumpy? What comes next?'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful texture trail exploration',
          'You and baby\'s name practiced walking and feeling different textures',
          'You explored smooth, bumpy, rough, and fuzzy',
          'You learned new texture vocabulary words',
          'You combined movement with sensory exploration'
        ],
        reviewQuestions: [
          'Which texture station was baby\'s name most interested in?',
          'Did they attempt to name any of the textures?',
          'Did they enjoy the trail games and variations?',
          'How did their sensory exploration show growth from Lesson 21?'
        ],
        parentTakeaway: {
          title: 'Sensory Trails Build Exploration',
          content: 'When baby\'s name walks a texture trail, they\'re not just learning words. They\'re building neural pathways that connect movement, sensation, and language. They\'re becoming explorers who notice how the world feels. This curiosity and attention to sensory detail supports learning across all domains and builds confidence in investigating their environment.'
        },
        nextSteps: [
          'Change the texture trail throughout the week. Add new textures, rearrange the stations.',
          'Let baby\'s name add items to the trail. What should we explore?',
          'Create texture trails outside with natural materials like leaves, grass, sand, and smooth rocks.',
          'Use texture words in daily life. Smooth water, rough floor, fuzzy teddy.',
          'Continue building sensory vocabulary through exploration and play.'
        ]
      }
    }
  ]
},

// ========= LESSON 24 =========
{
  id: 24,
  phase: '2',
  quarter: 1,
  week: 5,
  weekIndex: 4,
  dayInWeek: 4,
  title: 'Lesson 24: Colorful Snack Time Pairing Colors With Eating',
  theme: 'Color Vocabulary in Functional Context',
  skillRecurrenceTags: ['color-words', 'naming', 'functional-vocabulary', 'eating-time'],
  relatedToPreviousSkills: ['color-words', 'naming', 'people-words'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Colorful Snack Time',
      duration: '1 min',
      content: {
        goal: 'Combine color vocabulary with snack time by choosing foods of different colors and naming them. This embeds color learning in a meaningful, functional context.',
        parentGuide: [
          'Learning vocabulary during routines like eating makes the learning feel natural and less like instruction.',
          'Food and color together create powerful associations that deepen both concepts.',
          'Snack time is a perfect teaching opportunity because it happens regularly and involves baby\'s name directly.',
          'Week 5 spirals color learning from Lesson 22 into real-life functional use during daily routines.'
        ],
        materials: ['Colorful foods like red apple, blueberries, yellow banana, orange carrot, green grapes', 'Small plates or bowls', 'Safe eating setup', 'Your enthusiasm'],
        tip: 'Choose foods that are safe for your baby\'s developmental stage and eating abilities.',
        researchNote: 'Rowe (2012) found that vocabulary learned in functional, meaningful contexts like meals is retained longer and transferred better than vocabulary from isolated learning activities.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Colorful Snack Foods',
      duration: '3-4 min',
      focus: 'Naming Colors in Food Context',
      researchBasis: 'Soja et al. (1991) showed that naming colors consistently across varied objects and contexts strengthens color category learning.',
      content: {
        goal: 'Show baby\'s name different colored foods and name the colors clearly before eating them.',
        whatToSay: [
          '"Look, this is a red apple. Red apple. Say red."',
          '"These are blue. Blueberries are blue. Blue berries."',
          '"This banana is yellow. Yellow, yellow. A yellow banana."',
          '"Orange carrot. This is orange. Can you say orange?"'
        ],
        whatToDo: [
          'Set up snack time with several different colored foods.',
          'Hold up each food item.',
          'Name the color clearly.',
          'Let baby\'s name look at it.',
          'Repeat the color name two to three times.',
          'Connect the color to the food name.',
          'Make it exciting and inviting.',
          'Then offer the food to eat.'
        ],
        examples: [
          'Hold up red apple. Red apple. This is red. Say red. Then let them bite or eat a piece.',
          'Show blueberries. Blue. These are blue berries. Then offer them to snack on.'
        ],
        watchFor: [
          'Baby\'s name looking at the different colors.',
          'Interest in the foods.',
          'Any attempts to repeat the color names.',
          'Excitement about snack time.'
        ],
        parentTip: 'Connect the sensory experience of eating with the color word for stronger encoding.',
        funTwist: 'Make it playful. The red apple is so shiny and round. The blue berries are tiny and rolling.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Snack and Name the Colors',
      duration: '3-4 min',
      focus: 'Naming Colors During Functional Activity',
      researchBasis: 'Hart & Risley (1995) showed that consistent labeling during daily activities builds vocabulary faster than any other teaching method.',
      content: {
        goal: 'As baby\'s name eats each food, narrate the colors and use color words naturally in conversation.',
        whatToSay: [
          '"You\'re eating the red apple. Red apple is yummy."',
          '"The blue berries are so small. Blue berries, one, two, three."',
          '"Yellow banana is soft. You\'re eating the yellow banana."',
          '"Orange carrot. Crunch, crunch. The orange carrot crunches."'
        ],
        whatToDo: [
          'Set out the colored foods in front of baby\'s name.',
          'Let them choose which to eat or offer them in sequence.',
          'As they eat each food, narrate using the color word.',
          'Repeat the color name naturally in conversation.',
          'Comment on how it tastes, feels, sounds.',
          'Make snack time a language-rich experience.',
          'Keep the mood relaxed and enjoyable.'
        ],
        examples: [
          'Baby\'s name picks up the red apple. You say, You chose the red apple. Crunchy red apple.',
          'They eat blueberries. You say, Blue berries. Pop pop pop. Blue berries go in your mouth.'
        ],
        watchFor: [
          'Baby\'s name engaged with the foods.',
          'Responding to the color language.',
          'Enjoying the eating experience.',
          'Any attempts to repeat color words.'
        ],
        parentTip: 'Natural narration during activities is the most powerful teaching tool.',
        funTwist: 'Can they pick the red? Can they find the blue? Make simple color requests during snack.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Color Sorting on the Plate',
      duration: '2-3 min',
      focus: 'Grouping and Matching Colors Before Eating',
      researchBasis: 'Mandler & Bauer (1988) found that categorization activities strengthen concept learning and retention.',
      content: {
        goal: 'Let baby\'s name group or sort colored foods by color on their plate before eating them.',
        whatToSay: [
          '"Let\'s put the red foods together. Red apple here."',
          '"Put the blue berries together. Blue, blue, blue berries."',
          '"Yellow banana with the other yellow."',
          '"Look, we sorted by colors. Red here, blue here, yellow here."'
        ],
        whatToDo: [
          'Have small bowls or sections on a plate for each color.',
          'Show baby\'s name a piece of food.',
          'Ask them where it goes based on color.',
          'Help them place it in the right section.',
          'Build the color groups together.',
          'Celebrate the sorting.',
          'Then eat the groups one at a time.'
        ],
        examples: [
          'Red apple pieces go in the red section. Blue berries go in the blue section.',
          'Ask baby\'s name, Is this blue or red? Help them put it in the right place.'
        ],
        watchFor: [
          'Baby\'s name attempting to sort by color.',
          'Understanding that colors can be grouped.',
          'Enjoying the sorting game.',
          'Success and confidence in the activity.'
        ],
        parentTip: 'This combines color learning with categorization skills and makes snack time interactive.',
        funTwist: 'Let them eat each color group in sequence. Red foods first, then blue, then yellow. Which color group are we eating now?'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful colorful snack time',
          'You and baby\'s name practiced naming food colors',
          'You learned color words in a functional eating context',
          'You sorted foods by color',
          'You combined eating with color vocabulary learning'
        ],
        reviewQuestions: [
          'Which colored food did baby\'s name seem most interested in?',
          'Did they attempt to name any of the colors?',
          'Did they understand the color sorting on the plate?',
          'How did they respond to learning colors during snack time?'
        ],
        parentTakeaway: {
          title: 'Routines Are Teaching Gold',
          content: 'Learning that happens during daily routines like eating becomes automatic and deeply embedded. When baby\'s name hears color names while eating delicious foods, they\'re not just learning vocabulary. They\'re building positive associations with language, colors, and mealtimes. This integration of learning into daily life creates natural, effortless language development that sticks.'
        },
        nextSteps: [
          'Continue naming colors during every snack and meal.',
          'Choose different colored foods each time you eat.',
          'Gradually introduce more colors beyond red, blue, and yellow.',
          'Let baby\'s name pick colored foods. Which color do you want?',
          'Make color naming and snack time the same thing. They go together naturally.'
        ]
      }
    }
  ]
},

// ========= LESSON 25 =========
{
  id: 25,
  phase: '2',
  quarter: 1,
  week: 5,
  weekIndex: 4,
  dayInWeek: 5,
  title: 'Lesson 25: Mix and Match Combining Descriptive Words',
  theme: 'Integration of Colors and Textures',
  skillRecurrenceTags: ['color-words', 'texture-words', 'descriptive-vocabulary', 'categorization'],
  relatedToPreviousSkills: ['color-words', 'texture-words', 'naming'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Mix and Match Day',
      duration: '1 min',
      content: {
        goal: 'Combine color and texture vocabulary that baby\'s name learned this week by playing games that mix descriptive words together. This shows how language layers and builds complexity.',
        parentGuide: [
          'When baby\'s name learns to combine descriptors like red and soft, they\'re building toward more complex speech and description.',
          'Integration activities show how multiple vocabulary domains work together in real communication.',
          'Week 5 review consolidates everything from textures and colors into one playful activity.',
          'Combining descriptors is a major step toward richer language and more complete communication.'
        ],
        materials: ['Toys and objects that are different colors and textures from the week', 'Optional sorting containers or baskets', 'Your creativity and enthusiasm'],
        tip: 'Keep combinations simple at first. Red and soft is easier than red and bumpy and smooth.',
        researchNote: 'Rowe (2012) found that combining multiple vocabulary categories significantly accelerates overall language growth compared to learning single categories in isolation.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Find Items by Two Descriptors',
      duration: '3-4 min',
      focus: 'Combining Color and Texture Categories',
      researchBasis: 'Mandler & Bauer (1988) showed that combining multiple classification criteria strengthens conceptual understanding.',
      content: {
        goal: 'Give baby\'s name commands that require them to find objects matching two descriptors at once.',
        whatToSay: [
          '"Find something red and soft. Where is red and soft?"',
          '"Yes, the red blanket is soft. Red and soft."',
          '"Can you find something blue and hard?"',
          '"The blue block is hard. Blue and hard. Good finding."'
        ],
        whatToDo: [
          'Have a collection of colored items with different textures.',
          'Give baby\'s name a two-descriptor challenge.',
          'Ask them to find something that is both colors and has a specific texture.',
          'Let them search and find the item.',
          'Celebrate the finding and name both descriptors.',
          'Try five to six different combinations.',
          'Mix up the order of descriptors to keep it interesting.'
        ],
        examples: [
          'Red and soft, blue and hard, yellow and smooth, red and bumpy, blue and fuzzy.',
          'Can you find the soft ball? Is it red? Red and soft. Great job.'
        ],
        watchFor: [
          'Baby\'s name searching for items based on two criteria.',
          'Understanding that items can have multiple descriptors.',
          'Successfully finding matches.',
          'Any attempts to name both descriptors.'
        ],
        parentTip: 'Start with familiar combinations they\'ve seen together. Red soft blanket is easier than random color texture pairs.',
        funTwist: 'Let baby\'s name give you commands. You find something red and soft. They\'re the teacher.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Sort by Two Features',
      duration: '3-4 min',
      focus: 'Categorizing With Multiple Criteria',
      researchBasis: 'Piaget (1952) found that categorization by multiple features represents cognitive growth toward logical thinking.',
      content: {
        goal: 'Create a sorting game where baby\'s name groups items by both color and texture.',
        whatToSay: [
          '"Let\'s make groups. Red and soft go here."',
          '"Blue and hard go in this pile."',
          '"Where does this yellow ball go? Is it soft or hard?"',
          '"You\'re sorting by color and how it feels. Red soft here, blue hard there."'
        ],
        whatToDo: [
          'Create three to four sorting categories based on color and texture combinations.',
          'Show baby\'s name each category and describe both features.',
          'Give them items to sort into the right categories.',
          'Help them as needed.',
          'Build the piles together.',
          'Celebrate the sorting success.',
          'Review by pointing to each pile and naming both descriptors.'
        ],
        examples: [
          'Pile 1: Red and soft things. Pile 2: Blue and hard things. Pile 3: Yellow and smooth things.',
          'This soft red blanket goes here with the red soft things. This hard blue block goes here with the blue hard things.'
        ],
        watchFor: [
          'Baby\'s name understanding multiple sorting criteria.',
          'Successfully placing items in correct categories.',
          'Showing understanding that one item can have two features.',
          'Growing confidence in categorization.'
        ],
        parentTip: 'Multi-criteria sorting builds math and logic skills alongside language.',
        funTwist: 'Let baby\'s name create the sorting categories. What should go together?'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Descriptor Memory Game',
      duration: '2-3 min',
      focus: 'Remembering and Naming Combined Descriptors',
      researchBasis: 'Bjork & Bjork (1992) found that varied retrieval practice with combined information strengthens memory.',
      content: {
        goal: 'Play a simple memory game where baby\'s name remembers items by their combined color and texture descriptors.',
        whatToSay: [
          '"Remember the soft red blanket? Where is it?"',
          '"You found it. Red and soft. Good remembering."',
          '"Can you find the hard blue block?"',
          '"You remembered. Blue and hard. Great memory."'
        ],
        whatToDo: [
          'Hide three to four items around the room.',
          'Describe each one by both color and texture.',
          'Ask baby\'s name to find it based on the description.',
          'Celebrate successful retrieval.',
          'Repeat several times with different items.',
          'Make it playful and celebratory.',
          'Notice their memory growing.'
        ],
        examples: [
          'The red soft toy is hiding. Can you find the red soft toy? Let\'s look.',
          'Remember the blue hard block? Where did it go? Search search.'
        ],
        watchFor: [
          'Baby\'s name remembering descriptions with two features.',
          'Using memory to search for items.',
          'Showing understanding of combined descriptors.',
          'Enjoying the memory challenge.'
        ],
        parentTip: 'This builds working memory while reinforcing descriptive vocabulary.',
        funTwist: 'They hide the item and describe it to you. Can you find the red soft blanket?'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Week 5 Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Beautiful week of sensory and color learning',
          'You and baby\'s name practiced texture words like soft, hard, bumpy, rough, fuzzy, smooth',
          'You practiced color words like red, blue, yellow, orange',
          'You found textures and colors around your home',
          'You combined colors and textures into richer descriptions',
          'You integrated multiple vocabulary categories together'
        ],
        reviewQuestions: [
          'What was baby\'s name\'s favorite texture to explore?',
          'What was their favorite color from this week?',
          'Did they attempt to combine descriptors like red and soft?',
          'How has their descriptive language grown since the beginning of the month?'
        ],
        parentTakeaway: {
          title: 'Descriptive Language Builds Communication',
          content: 'This week baby\'s name moved beyond naming single items into describing them with texture and color words. They\'re learning that objects can be multiple things at once. Red and soft and round all describe the same toy. This layering of descriptors is how real communication works. The more descriptive words they know, the more completely they can tell you about their world.'
        },
        nextSteps: [
          'Continue using texture and color words throughout daily routines.',
          'Introduce more textures and colors gradually throughout the coming weeks.',
          'Try combining descriptors naturally in conversation.',
          'Notice how rich baby\'s name\'s language is becoming.',
          'Week 6 introduces size words to add another layer to descriptions.'
        ]
      }
    }
  ]
},

// ========= LESSON 26 =========
{
  id: 26,
  phase: '2',
  quarter: 1,
  week: 6,
  weekIndex: 5,
  dayInWeek: 1,
  title: 'Lesson 26: Big and Little Size Words and Comparison',
  theme: 'Size Vocabulary and Comparison Skills',
  skillRecurrenceTags: ['size-words', 'comparison', 'descriptive-vocabulary', 'categorization'],
  relatedToPreviousSkills: ['naming', 'descriptive-vocabulary', 'comparing'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Size Exploration Week',
      duration: '1 min',
      content: {
        goal: 'Introduce size vocabulary starting with big and little. Baby\'s name learns that words can compare how large things are.',
        parentGuide: [
          'Size words add another dimension to descriptive vocabulary. Combined with colors and textures, baby\'s name can now describe objects in multiple ways.',
          'Comparing sizes requires perceptual skills and builds logical thinking.',
          'Week 6 continues the spiral by adding size as a third layer of description alongside color and texture.',
          'Size vocabulary predicts stronger spatial reasoning and mathematical thinking throughout development.'
        ],
        materials: ['Big and little versions of familiar items like blocks, balls, dolls, spoons', 'Items of obviously different sizes', 'Your hands for demonstrating size', 'Your enthusiasm'],
        tip: 'Start with very obvious size differences. A tiny pea and a big watermelon. Later you can do subtle differences.',
        researchNote: 'Soja et al. (1991) found that size comparisons help toddlers develop spatial understanding and categorical thinking alongside vocabulary development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Big and Little',
      duration: '3-4 min',
      focus: 'Basic Size Comparison and Naming',
      researchBasis: 'Meltzoff & Moore (1977) showed that contrasting pairs help infants learn and distinguish features.',
      content: {
        goal: 'Show baby\'s name a big item and a little item side by side. Let them see and hold both while you name the sizes.',
        whatToSay: [
          '"This is big. Big, big, big. This block is big."',
          '"This is little. Little, little. This block is little."',
          '"Big and little. One is big, one is little. Can you feel the difference?"',
          '"Big is bigger. Little is smaller."'
        ],
        whatToDo: [
          'Hold up a big item.',
          'Say big slowly and clearly.',
          'Let baby\'s name look at it and maybe hold it.',
          'Make big gestures with your hands.',
          'Then show a little item.',
          'Say little clearly.',
          'Let them hold and compare.',
          'Put them side by side so the difference is obvious.'
        ],
        examples: [
          'Hold a big ball in one hand and a tiny ball in the other. Big ball and little ball.',
          'Use your hands to show size. Spread arms wide for big. Pinch fingers together for little.'
        ],
        watchFor: [
          'Baby\'s name looking at both items.',
          'Showing interest in the size differences.',
          'Any attempts to repeat big or little.',
          'Understanding that size is different from other properties.'
        ],
        parentTip: 'Obvious size differences make the concept crystal clear for this age.',
        funTwist: 'Make big and little movements. Big stretches and reaches, little tippy taps and pinches.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Find Big and Little Around the Room',
      duration: '3-4 min',
      focus: 'Recognizing Sizes in Environment',
      researchBasis: 'Rowe (2012) showed that practicing vocabulary in varied environmental contexts strengthens learning and transfer.',
      content: {
        goal: 'Walk around the room and point out things that are big or little, naming them as you find them.',
        whatToSay: [
          '"Look, a big chair. This chair is big."',
          '"There\'s a little toy. A little toy."',
          '"Big door. This door is big."',
          '"Little spoon. Where\'s a big spoon?"'
        ],
        whatToDo: [
          'Walk around your home with baby\'s name.',
          'Point to big things and name them.',
          'Say big clearly.',
          'Then find little things.',
          'Name them little.',
          'Compare when you can.',
          'Make it feel like an exploration.',
          'Notice size differences throughout the space.'
        ],
        examples: [
          'Big chair and little toy. Big house and little bug. Big window and little doorbell.',
          'Compare things in the same category. Big spoon and little spoon. Big book and little book.'
        ],
        watchFor: [
          'Baby\'s name following along and looking where you point.',
          'Understanding the size categories.',
          'Showing interest in size differences.',
          'Any attempts to vocalize or repeat big or little.'
        ],
        parentTip: 'This connects size words to real surroundings making learning contextual.',
        funTwist: 'Play size hunt. Can they find something big? Something little? Let them lead.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Sort by Size',
      duration: '2-3 min',
      focus: 'Size Categorization and Matching',
      researchBasis: 'Mandler & Bauer (1988) found that categorization activities strengthen concept understanding.',
      content: {
        goal: 'Create a simple size sorting game where baby\'s name puts big things in one pile and little things in another.',
        whatToSay: [
          '"Let\'s put the big things together. Big goes here."',
          '"Where is the big block? Put it with the big things."',
          '"Now the little things go here. Little goes there."',
          '"Big things here, little things there. You sorted by size."'
        ],
        whatToDo: [
          'Set up two areas big things and little things.',
          'Show baby\'s name an item.',
          'Ask if it\'s big or little.',
          'Help them place it in the right pile.',
          'Build two size piles.',
          'Celebrate the sorting.',
          'Review by pointing and naming each size group.'
        ],
        examples: [
          'Big block goes with the big things. Little toy goes with the little things.',
          'Is this big or little? Good, big goes here with the big things.'
        ],
        watchFor: [
          'Baby\'s name understanding big and little groups.',
          'Attempting to categorize items by size.',
          'Showing success in sorting.',
          'Understanding that size determines the group.'
        ],
        parentTip: 'Size sorting is early spatial and mathematical thinking.',
        funTwist: 'Let baby\'s name pick which pile to add to next.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful size exploration',
          'You and baby\'s name practiced recognizing and naming big and little',
          'You found big and little things around your home',
          'You sorted and grouped by size',
          'You built size vocabulary and comparison skills'
        ],
        reviewQuestions: [
          'Did baby\'s name show understanding of big versus little?',
          'Did they successfully find size examples during exploration?',
          'Did they attempt to say big or little?',
          'How engaged were they in the size sorting activity?'
        ],
        parentTakeaway: {
          title: 'Size Vocabulary Opens Spatial Thinking',
          content: 'When baby\'s name learns to recognize and name size differences, they\'re beginning to understand spatial relationships and comparisons. This builds toward mathematical thinking and helps them describe their world more completely. Big and little aren\'t just words. They\'re concepts that help organize and understand everything around them.'
        },
        nextSteps: [
          'Continue using size words throughout daily routines.',
          'Compare sizes naturally during play and meals.',
          'Introduce medium or medium-sized alongside big and little as they\'re ready.',
          'Combine size with other descriptors. Big red ball, little soft toy.',
          'Notice how their descriptions become richer and more detailed.'
        ]
      }
    }
  ]
},

// ========= LESSON 27 =========
{
  id: 27,
  phase: '2',
  quarter: 1,
  week: 6,
  weekIndex: 5,
  dayInWeek: 2,
  title: 'Lesson 27: Animal Families Big and Little Parents and Babies',
  theme: 'Size Comparison and People Words Combined',
  skillRecurrenceTags: ['size-words', 'people-words', 'family-vocabulary', 'comparison'],
  relatedToPreviousSkills: ['size-words', 'people-words', 'naming'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Animal Families Size Learning',
      duration: '1 min',
      content: {
        goal: 'Combine size vocabulary with family member relationships by using animal families. Baby\'s name learns that big and little can describe family members and parents have babies.',
        parentGuide: [
          'Using animal families makes the concept of big adults and little babies emotionally engaging and relatable.',
          'Combining size words with family vocabulary shows how language layers work together in meaningful ways.',
          'Week 6 spirals size learning from Lesson 26 by connecting it to familiar family concepts from Week 2.',
          'Understanding that animals have families similar to humans builds social understanding and empathy.'
        ],
        materials: ['Animal toy families like mama bear and baby bear, mama duck and baby duck, mama bird and baby bird', 'Dolls representing family members if animals aren\'t available', 'Your voice and enthusiasm'],
        tip: 'Use familiar animals that baby\'s name has heard sounds for already.',
        researchNote: 'Tomasello (2003) showed that using animal characters to teach social concepts strengthens understanding and retention.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Animal Parent and Baby Pairs',
      duration: '3-4 min',
      focus: 'Connecting Size to Family Roles',
      researchBasis: 'Meltzoff & Moore (1977) showed that observing contrasting pairs helps infants learn and distinguish features.',
      content: {
        goal: 'Show baby\'s name animal pairs and name them by size and relationship. The big one is the mama or daddy, the little one is the baby.',
        whatToSay: [
          '"Look, this is a big mama bear. Mama bear is big. And this is a little baby bear. Baby bear is little."',
          '"Big mama and little baby. The mama is big, the baby is little."',
          '"Here\'s a big mama duck. Quack quack. And a tiny baby duck. Quack quack quack."',
          '"Can you see the difference? Big mama, little baby."'
        ],
        whatToDo: [
          'Show an animal parent toy.',
          'Say it\'s big and name the relationship.',
          'Let baby\'s name look at and hold it.',
          'Then show the baby animal.',
          'Say it\'s little and that it\'s the baby.',
          'Put them side by side to show the size difference.',
          'Make the animal sounds together.',
          'Repeat the pattern with two to three animal families.'
        ],
        examples: [
          'Hold big bear. Say big mama bear. Then hold tiny bear. Say tiny baby bear. Put them together.',
          'Make duck sounds. Big mama duck quack and little baby duck quack quack.'
        ],
        watchFor: [
          'Baby\'s name looking at both animals.',
          'Understanding the big and little relationship.',
          'Showing interest in the animal pair.',
          'Any attempts to make sounds or repeat words.'
        ],
        parentTip: 'Animal sounds make this more memorable and fun.',
        funTwist: 'Make the animals talk to each other. Mama says something, baby responds.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Match Animal Parents to Babies',
      duration: '3-4 min',
      focus: 'Categorization and Family Connection',
      researchBasis: 'Mandler & Bauer (1988) found that matching activities strengthen concept understanding.',
      content: {
        goal: 'Mix up animal parents and babies, then help baby\'s name match each big parent with its little baby.',
        whatToSay: [
          '"Look, here\'s a big mama. Where\'s her little baby?"',
          '"Yes, this little baby goes with the big mama. Big and little together."',
          '"Find the tiny baby bear. Where does it go? With big mama bear."',
          '"You matched them. Big mama with little baby."'
        ],
        whatToDo: [
          'Set out several big animal parents mixed with little babies.',
          'Pick up a big animal.',
          'Ask baby\'s name to find its little baby.',
          'Help them match the pair.',
          'Celebrate the match.',
          'Repeat with other families.',
          'Build understanding that size relates to family role.'
        ],
        examples: [
          'Hold big duck. Ask where the little baby duck is. Help them find it and put them together.',
          'Say big mama and little baby as you match them.'
        ],
        watchFor: [
          'Baby\'s name understanding that parents are big and babies are little.',
          'Attempting to match pairs.',
          'Understanding family relationships through size.',
          'Enjoyment of the matching activity.'
        ],
        parentTip: 'This teaches that big and little relate to real relationships, not just objects.',
        funTwist: 'Let baby\'s name pick which family to play with next.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Act Out Animal Family Stories',
      duration: '2-3 min',
      focus: 'Combining Vocabulary in Narrative',
      researchBasis: 'Vygotsky (1978) emphasized that pretend play accelerates language and social learning.',
      content: {
        goal: 'Use the animal pairs to act out simple family stories, narrating with size and family words.',
        whatToSay: [
          '"The big mama bear and little baby bear are going for a walk."',
          '"Big mama walks. Little baby follows. Walk, walk, walk."',
          '"The baby is so little. The mama is so big."',
          '"They love each other. Big and little together."'
        ],
        whatToDo: [
          'Move the big animal first while narrating.',
          'Say it\'s big and doing something.',
          'Then move the little animal.',
          'Say it\'s little and following or playing.',
          'Create a simple story with the pair.',
          'Emphasize big and little throughout.',
          'Invite baby\'s name to move the animals with you.',
          'Keep stories very simple and short.'
        ],
        examples: [
          'Big mama eats. Little baby eats too. Munch munch. They eat together.',
          'The big daddy sleeps. The little baby sleeps near the big daddy. Zzzzz.'
        ],
        watchFor: [
          'Baby\'s name watching the animal story.',
          'Attempting to move the animals.',
          'Understanding the relationship being shown.',
          'Interest in the combined size and family narrative.'
        ],
        parentTip: 'This combines everything they\'ve learned into one story.',
        funTwist: 'Let baby\'s name decide what the big and little animals should do next.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful animal family learning',
          'You and baby\'s name practiced size words with animal families',
          'You explored big mamas and little babies',
          'You matched animal parents to their babies',
          'You acted out simple animal family stories',
          'You combined size vocabulary with family relationships'
        ],
        reviewQuestions: [
          'Which animal family did baby\'s name seem most interested in?',
          'Did they understand that big animals were parents and little were babies?',
          'Did they attempt to move the animals or tell the story?',
          'How did they respond to combining size and family concepts?'
        ],
        parentTakeaway: {
          title: 'Stories Teach Vocabulary',
          content: 'When baby\'s name learns vocabulary through stories about animals and families, the words become connected to meaning and emotion. They\'re not just learning that big and little describe size. They\'re learning that size has meaning in relationships and families. This emotional connection makes learning deeper and more transferable.'
        },
        nextSteps: [
          'Continue using animal families during play throughout the week.',
          'Introduce new animal families gradually.',
          'Create stories about different animals doing different things.',
          'Connect animal families to their own family. You\'re my big parent, I\'m your little baby.',
          'Let baby\'s name lead the animal family stories and play.'
        ]
      }
    }
  ]
},

// ========= LESSON 28 =========
{
  id: 28,
  phase: '2',
  quarter: 1,
  week: 6,
  weekIndex: 5,
  dayInWeek: 3,
  title: 'Lesson 28: What to Wear Getting Dressed and Size Sorting',
  theme: 'Size and Clothing Vocabulary in Daily Routine',
  skillRecurrenceTags: ['size-words', 'clothing-vocabulary', 'functional-language', 'dressing-routine'],
  relatedToPreviousSkills: ['size-words', 'naming', 'following-directions'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Getting Dressed Learning',
      duration: '1 min',
      content: {
        goal: 'Embed size vocabulary into the dressing routine by talking about big clothes and little clothes that fit different people.',
        parentGuide: [
          'Dressing time is a natural opportunity for size vocabulary because clothes obviously come in different sizes.',
          'Embedding learning in daily routines makes vocabulary feel natural and practical.',
          'Week 6 spirals size learning into functional daily life contexts.',
          'Functional vocabulary learned during routines sticks better than vocabulary from isolated activities.'
        ],
        materials: ['Baby\'s clothes in their size', 'Parent clothes in bigger sizes', 'Optional dolls or stuffed animals with clothes', 'Baskets for sorting if desired'],
        tip: 'Use real clothes your family wears. This makes learning immediately meaningful.',
        researchNote: 'Rowe (2012) found that vocabulary learned during functional daily routines transfers and generalizes better than vocabulary from playtime alone.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Compare Big and Little Clothes',
      duration: '3-4 min',
      focus: 'Understanding Size in Clothing Context',
      researchBasis: 'Soja et al. (1991) showed that consistent naming across varied objects strengthens category learning.',
      content: {
        goal: 'Show baby\'s name big and little clothes side by side and name them by size and who wears them.',
        whatToSay: [
          '"This is Mommy\'s big shirt. Big shirt for big Mommy."',
          '"This is your little shirt. Little shirt for little baby\'s name."',
          '"Big and little. Mommy\'s clothes are big. Your clothes are little."',
          '"The big shoe is Daddy\'s. The little shoe is yours."'
        ],
        whatToDo: [
          'Pick up a big piece of clothing like a parent\'s shirt.',
          'Say it\'s big and who it belongs to.',
          'Let baby\'s name look at and feel it.',
          'Then show their little version of the same type of clothing.',
          'Say it\'s little and that it\'s theirs.',
          'Compare the two items directly.',
          'Show how the sizes are different.',
          'Repeat with two to three different clothing items.'
        ],
        examples: [
          'Hold up your big shirt and baby\'s name\'s little shirt. This is big, this is little.',
          'Compare shoes. Big daddy shoe, little baby shoe. See the difference?'
        ],
        watchFor: [
          'Baby\'s name looking at both items.',
          'Showing interest in the size differences.',
          'Making connections between size and who wears what.',
          'Any attempts to vocalize or repeat big or little.'
        ],
        parentTip: 'Connecting size to people they know makes this more meaningful than abstract comparison.',
        funTwist: 'Let them feel how heavy the big item is compared to the little one.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Sort Clothes by Size',
      duration: '3-4 min',
      focus: 'Categorization and Functional Sorting',
      researchBasis: 'Mandler & Bauer (1988) found that functional sorting strengthens concept understanding.',
      content: {
        goal: 'Help baby\'s name sort family clothes into big and little piles during or before laundry time.',
        whatToSay: [
          '"These are big clothes. Big clothes go here. Daddy\'s shirt, Mommy\'s pants, big clothes."',
          '"These are little clothes. Your little clothes go here."',
          '"Big and little. Big pile here, little pile there."',
          '"You\'re sorting by size."'
        ],
        whatToDo: [
          'During laundry sorting or dressing time, create two piles.',
          'Show baby\'s name a piece of clothing.',
          'Ask if it\'s big or little.',
          'Help them place it in the correct pile.',
          'Build big and little clothing piles together.',
          'Celebrate the sorting.',
          'Name who each pile belongs to.'
        ],
        examples: [
          'Big shirt goes in the big pile because it\'s for Daddy. Little shirt goes in the little pile because it\'s for baby\'s name.',
          'Is this big or little? Big goes here with the big clothes. Little goes there with the little clothes.'
        ],
        watchFor: [
          'Baby\'s name understanding which clothes are big and which are little.',
          'Successfully sorting items.',
          'Connecting size to people and practical use.',
          'Enjoying the sorting activity.'
        ],
        parentTip: 'Making sorting a functional task that helps the family makes learning feel purposeful.',
        funTwist: 'Let baby\'s name help put the big clothes in the big person\'s drawer and little clothes in their drawer.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Dress Dolls by Size',
      duration: '2-3 min',
      focus: 'Practical Application of Size Understanding',
      researchBasis: 'Vygotsky (1978) emphasized that functional pretend play accelerates concept understanding.',
      content: {
        goal: 'Use dolls or stuffed animals to practice putting big and little clothes on the right sized toys.',
        whatToSay: [
          '"This big doll needs a big dress. Big doll, big dress."',
          '"This little doll needs little clothes. Little doll, little clothes."',
          '"Does the big dress fit the little doll? No, it\'s too big."',
          '"The little dress fits the little doll just right."'
        ],
        whatToDo: [
          'Have dolls or animals in different sizes.',
          'Have clothes that fit different toys.',
          'Show baby\'s name trying to put big clothes on a little toy.',
          'Talk about how it doesn\'t fit.',
          'Then put the right sized clothes on.',
          'Celebrate the fit.',
          'Repeat with other toys and sizes.',
          'Make it playful and exploratory.'
        ],
        examples: [
          'The tiny baby doll needs tiny clothes. Oops, this big dress doesn\'t fit. This little dress is perfect.',
          'Let baby\'s name try to fit the clothes. See what happens when clothes are wrong size?'
        ],
        watchFor: [
          'Baby\'s name understanding size relationships.',
          'Showing understanding that big and little have practical meaning.',
          'Attempting to dress dolls or toys.',
          'Enjoyment of the pretend play.'
        ],
        parentTip: 'This shows why size matters in practical ways.',
        funTwist: 'Let baby\'s name pick what the dolls should wear and help them dress the right way.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful getting dressed learning',
          'You and baby\'s name practiced size words with clothing',
          'You compared big and little clothes',
          'You sorted family clothes by size',
          'You dressed dolls and toys with right sized clothes',
          'You connected size to practical real-life function'
        ],
        reviewQuestions: [
          'Did baby\'s name understand the connection between size and clothing fit?',
          'Did they successfully sort clothes by size?',
          'Did they attempt to dress dolls or toys?',
          'How did they respond to learning during a functional routine?'
        ],
        parentTakeaway: {
          title: 'Routines Teach Real Meaning',
          content: 'When baby\'s name learns that size matters because big clothes fit big people and little clothes fit little people, they understand why size words are important. This functional understanding is more powerful than abstract learning. They\'re not just learning vocabulary. They\'re learning how the world works.'
        },
        nextSteps: [
          'Continue talking about sizes during dressing and laundry throughout the week.',
          'Use size words naturally during clothing choices.',
          'Let baby\'s name help sort and organize family clothes.',
          'Point out other size relationships in daily routines.',
          'Keep connecting learning to practical, meaningful activities.'
        ]
      }
    }
  ]
},

// ========= LESSON 29 =========
{
  id: 29,
  phase: '2',
  quarter: 1,
  week: 6,
  weekIndex: 5,
  dayInWeek: 4,
  title: 'Lesson 29: Color Sorting Game Rainbow Organization',
  theme: 'Colors and Categorization Through Play',
  skillRecurrenceTags: ['color-vocabulary', 'categorization', 'sorting-skills', 'fine-motor'],
  relatedToPreviousSkills: ['color-words', 'size-words', 'matching'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Color Sorting Learning',
      duration: '1 min',
      content: {
        goal: 'Build color recognition and sorting skills by organizing toys and objects into color-matched containers. Baby\'s name learns that colors can group things together and have names.',
        parentGuide: [
          'Sorting activities strengthen neural connections for categorization, a foundation for math and reading.',
          'Color sorting combines visual discrimination with fine motor practice and vocabulary reinforcement.',
          'This lesson spirals color vocabulary from Week 5 into a more complex categorization task.',
          'Sorting games feel playful to toddlers but are building important classification thinking.'
        ],
        materials: ['Colored containers or baskets (red, blue, yellow, green)', 'Balls, blocks, or toys in matching colors', 'Small household items like socks or scarves that match container colors', 'Your enthusiasm and patience'],
        tip: 'Start with 2-3 colors. Too many colors can overwhelm a toddler.',
        researchNote: 'Mandler & Bauer (1988) found that sorting activities strengthen concept understanding and build categorical thinking skills essential for early math.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Color Containers',
      duration: '3-4 min',
      focus: 'Color Recognition and Container Association',
      researchBasis: 'Soja et al. (1991) showed that consistent naming across similar objects strengthens category learning.',
      content: {
        goal: 'Show baby\'s name different colored containers and name each color clearly. Let them explore the containers and understand the color-container connection.',
        whatToSay: [
          '"Look, this is the red container. We call this red. Red goes here."',
          '"This is the blue container. Blue, blue, blue. See how this one is blue?"',
          '"This is the yellow container. Yellow is so bright and sunny."',
          '"Each container has its own color. Red here, blue here, yellow here."'
        ],
        whatToDo: [
          'Set out 2-3 colored containers where baby\'s name can see them clearly.',
          'Point to each container one at a time.',
          'Name the color slowly and clearly.',
          'Let baby\'s name touch and explore each container.',
          'Place them in a row or line so they are separate and easy to see.',
          'Repeat the color name as you point to each one.',
          'Make it playful, not rushed.'
        ],
        examples: [
          'Hold up the red container. This is red. Red, red, red. Then the blue one. This is blue. Feel how the red and blue are different.',
          'Let them pick up each container. Red is lighter, blue is darker. They\'re different colors.'
        ],
        watchFor: [
          'Baby\'s name looking at each container.',
          'Interest in the color differences.',
          'Attempts to touch or hold the containers.',
          'Any vocalization or pointing toward the colors.'
        ],
        parentTip: 'Use containers baby\'s name sees in daily life: food containers, laundry baskets, toy bins.',
        funTwist: 'Let baby\'s name pick which color container to start with.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Sort Objects Into Color Containers',
      duration: '4-5 min',
      focus: 'Matching and Classification',
      researchBasis: 'Mandler & Bauer (1988) found that matching activities strengthen concept understanding and build early categorization skills.',
      content: {
        goal: 'Help baby\'s name sort colored toys or objects into matching color containers. They learn that things can be grouped by color.',
        whatToSay: [
          '"This is a red ball. Where does the red ball go? In the red container. Red goes with red."',
          '"Here\'s a blue block. This is blue. It goes in the blue container with the other blue things."',
          '"Find the yellow toy. Yes, that\'s yellow. Put it in the yellow container."',
          '"You\'re sorting by color. Red with red, blue with blue."'
        ],
        whatToDo: [
          'Place colored objects in a pile in the middle.',
          'Pick up one object and name its color.',
          'Ask baby\'s name where it should go.',
          'Guide them to place it in the matching container.',
          'Celebrate each successful sort.',
          'Repeat with 5-8 objects.',
          'Mix in some mistakes on purpose so baby\'s name can see the difference.',
          'Keep it light and playful.'
        ],
        examples: [
          'Hold a red toy. This is red. Point to the containers. Which one is red? Help them put it in the red container.',
          'Pick up a blue object. Say: Blue ball goes in the blue container. Can you help me put it in?'
        ],
        watchFor: [
          'Baby\'s name understanding which container matches the toy color.',
          'Attempting to place objects in containers.',
          'Understanding the color-matching concept.',
          'Enjoyment of the sorting task.'
        ],
        parentTip: 'Let them place the object, even if they need help. The act of sorting matters more than perfect accuracy.',
        funTwist: 'Let baby\'s name pick the next object to sort and decide where it goes.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Make Color Collections',
      duration: '2-3 min',
      focus: 'Extended Categorization and Color Awareness',
      researchBasis: 'Vygotsky (1978) emphasized that play-based categorization builds thinking skills.',
      content: {
        goal: 'Help baby\'s name find more objects around the room that match the container colors and add them to the collections.',
        whatToSay: [
          '"Let\'s find more red things in the house. Can you see anything that\'s red?"',
          '"Look, that red toy goes in our red container. Good finding!"',
          '"The blue blanket is blue like our blue container. Let\'s add it."',
          '"We\'re making a blue collection. Blue, blue, blue."'
        ],
        whatToDo: [
          'Walk around the room with baby\'s name.',
          'Point out objects that match the container colors.',
          'Ask baby\'s name to find matching items.',
          'Celebrate each find.',
          'Add items to the containers.',
          'Build bigger and bigger color collections together.',
          'Make it an exploration game.'
        ],
        examples: [
          'Look for red socks, red toys, red blankets. Add them to the red container.',
          'Find blue items around the house. Can you find something blue? Yes, that\'s blue. It goes in the blue container.'
        ],
        watchFor: [
          'Baby\'s name searching for matching colors.',
          'Understanding the color-matching game.',
          'Building excitement about the collections.',
          'Attempts to find or point to matching colors.'
        ],
        parentTip: 'This teaches that colors appear in many places, not just in one activity.',
        funTwist: 'Let baby\'s name lead you. Ask them to find the next color or take an item to the correct container.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful color sorting learning',
          'You and baby\'s name practiced color recognition with containers',
          'You sorted colored objects into matching containers',
          'You made color collections around your home',
          'You strengthened categorization and color vocabulary',
          'You built thinking skills through playful sorting'
        ],
        reviewQuestions: [
          'Did baby\'s name understand which objects matched which colors?',
          'Did they successfully place toys into the right containers?',
          'Did they show excitement about finding more matching items?',
          'How did they respond to the sorting game?'
        ],
        parentTakeaway: {
          title: 'Sorting Builds Thinking',
          content: 'When baby\'s name sorts objects by color, they\'re learning more than just color names. They\'re learning that things can be grouped by shared features. This is the foundation for math, science, and reading comprehension. Sorting teaches organizing, thinking, and pattern recognition. These are the thinking skills that help kids learn everything else.'
        },
        nextSteps: [
          'Continue sorting during playtime and cleanup throughout the week.',
          'Add new colors to the sorting game gradually.',
          'Sort by other categories: size, shape, type of toy.',
          'Use the containers during cleanup. Red toys go in the red bin.',
          'Let baby\'s name lead the sorting and decide where things go.'
        ]
      }
    }
  ]
},

// ========= LESSON 30 =========
{
  id: 30,
  phase: '2',
  quarter: 1,
  week: 6,
  weekIndex: 5,
  dayInWeek: 5,
  title: 'Lesson 30: Match by Sound Sound Shakers and Containers',
  theme: 'Auditory Matching and Listening Discrimination',
  skillRecurrenceTags: ['sound-recognition', 'matching', 'listening-skills', 'auditory-discrimination'],
  relatedToPreviousSkills: ['sound-play', 'animal-sounds', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Sound Matching Learning',
      duration: '1 min',
      content: {
        goal: 'Build listening skills by matching sounds from shakers and containers. Baby\'s name learns to listen carefully and recognize matching sounds.',
        parentGuide: [
          'Auditory discrimination strengthens listening skills and supports phonological awareness needed for reading.',
          'Sound matching teaches babies to listen closely and notice subtle differences.',
          'This lesson spirals sound play from Week 7 into a more intentional matching activity.',
          'Matching by sound builds neural pathways for language learning and music development.'
        ],
        materials: ['Containers or jars (plastic or glass)', 'Matching sound-making items: rice, beans, small stones, pasta', 'Tape to seal containers if needed', 'Optional: scarves or cloth to hide containers', 'Your voice and patience'],
        tip: 'Make sure containers are sealed safely so baby\'s name can shake them without spilling.',
        researchNote: 'Saffran et al. (1996) found that auditory pattern recognition is crucial for early learning and builds brain development for listening and language.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Create Sound Shakers',
      duration: '2-3 min',
      focus: 'Sound Exploration and Container Preparation',
      researchBasis: 'Trainor et al. (2002) showed that rhythm and sound exploration supports early auditory development.',
      content: {
        goal: 'Make 2-3 pairs of sound shakers by filling containers with matching items. Let baby\'s name explore the sounds.',
        whatToSay: [
          '"Let\'s make sound shakers. Listen to this sound. Shake, shake, shake."',
          '"This one has rice inside. Shake, shake. Listen to the sound."',
          '"This shaker sounds the same as this one. Listen. Same sound."',
          '"Shake, shake, shake. Do you hear the sound? Let\'s listen together."'
        ],
        whatToDo: [
          'Fill two containers with the same material (rice, beans, etc.).',
          'Shake one container slowly so baby\'s name can hear the sound clearly.',
          'Shake the matching container.',
          'Let baby\'s name hold and explore each shaker.',
          'Shake them side by side so they can hear the sounds.',
          'Make it fun and musical.',
          'Repeat with one more pair if desired.'
        ],
        examples: [
          'Fill two plastic bottles with rice. Shake one slowly. Shake the other. They sound the same.',
          'Make a second pair with beans. This sounds different from rice. Shake both so baby\'s name hears the difference.'
        ],
        watchFor: [
          'Baby\'s name showing interest in the sounds.',
          'Attempting to shake the containers.',
          'Listening and focusing on the sounds.',
          'Any attempts to shake or handle the shakers.'
        ],
        parentTip: 'Use safe, sealed containers. Test them first to make sure they won\'t break or spill.',
        funTwist: 'Let baby\'s name shake the shakers and make their own music.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Match Sounds Together',
      duration: '4-5 min',
      focus: 'Auditory Discrimination and Matching',
      researchBasis: 'Meltzoff & Moore (1977) showed that matching activities strengthen neural connections for learning.',
      content: {
        goal: 'Mix up the matching shakers and help baby\'s name match shakers by sound. They learn to listen and recognize matching sounds.',
        whatToSay: [
          '"Listen to this sound. Shake, shake, shake. Now find the shaker that sounds the same."',
          '"Does this one match? Shake, shake. Listen carefully."',
          '"Yes! These two sound the same. Matching sounds. They go together."',
          '"Can you find the matching shaker? Shake yours and listen."'
        ],
        whatToDo: [
          'Place all shakers in front of baby\'s name.',
          'Pick one shaker and shake it.',
          'Ask baby\'s name to find the matching shaker that sounds the same.',
          'Help them shake their shaker to compare the sounds.',
          'Celebrate when they match correctly.',
          'Shake both matching shakers together.',
          'Repeat with other pairs.',
          'Keep it playful and low pressure.'
        ],
        examples: [
          'Shake the rice shaker. Now help baby\'s name find the other rice shaker that sounds the same. Shake, shake, shake.',
          'Mix up all four shakers. Pick one bean shaker. Can you find the other bean shaker? Listen to the sound.'
        ],
        watchFor: [
          'Baby\'s name listening carefully to the sounds.',
          'Attempting to shake and compare shakers.',
          'Understanding the matching concept.',
          'Enjoyment of the sound-matching game.'
        ],
        parentTip: 'Let them make mistakes and try again. Listening skills build over time.',
        funTwist: 'Let baby\'s name pick the shaker and decide if it matches or not.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Sound Detective Game',
      duration: '2-3 min',
      focus: 'Listening and Sound Recognition',
      researchBasis: 'Vygotsky (1978) emphasized that game-based learning accelerates skill development.',
      content: {
        goal: 'Play a simple detective game where baby\'s name listens to a hidden sound and finds the matching shaker.',
        whatToSay: [
          '"I\'m going to shake a shaker behind my back. You listen. Shake, shake, shake."',
          '"Now find the shaker that sounds the same. Can you find it?"',
          '"You found the matching sound! You\'re a sound detective!"',
          '"Listen again. Which shaker sounds like this? Shake, shake."'
        ],
        whatToDo: [
          'Hide one shaker behind your back or under a cloth.',
          'Shake it so baby\'s name can hear the sound.',
          'Ask them to find the matching shaker from the ones visible.',
          'Let them shake their shaker to compare.',
          'Celebrate correct matches.',
          'Play several rounds.',
          'Keep it simple and fun.'
        ],
        examples: [
          'Hide the rice shaker. Shake it behind your back. Baby\'s name listens and picks the matching rice shaker.',
          'Cover containers with a cloth. Shake one hidden shaker. Which one matches?'
        ],
        watchFor: [
          'Baby\'s name listening to the sound.',
          'Attempting to find the matching shaker.',
          'Understanding the game rules.',
          'Excitement about finding correct matches.'
        ],
        parentTip: 'This builds focused listening and auditory memory.',
        funTwist: 'Let baby\'s name hide the shaker and make the sound for you to match.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful sound matching learning',
          'You and baby\'s name created sound shakers together',
          'You matched shakers by listening to sounds',
          'You played the sound detective game',
          'You built listening and auditory discrimination skills',
          'You strengthened focus and attention through sound play'
        ],
        reviewQuestions: [
          'Did baby\'s name listen carefully to the sounds?',
          'Could they match shakers that sounded the same?',
          'Did they show excitement about the sound game?',
          'How did their listening skills show during the activity?'
        ],
        parentTakeaway: {
          title: 'Listening Builds Reading',
          content: 'When baby\'s name listens carefully and matches sounds, they\'re building auditory discrimination. This is the foundation for phonological awareness and reading. Good listeners become good readers. Sound matching teaches babies to notice small differences in sounds, which helps them recognize letter sounds later. This is playful practice for skills they\'ll need in school.'
        },
        nextSteps: [
          'Keep the sound shakers available for play during the week.',
          'Create new shakers with different sounds: pasta, buttons, coins.',
          'Play matching games during cleanup or quiet time.',
          'Listen to environmental sounds together: birds, cars, doorbell.',
          'Let baby\'s name create their own sounds and play their own matching game.'
        ]
      }
    }
  ]
},

// ========= LESSON 31 =========
{
  id: 31,
  phase: '2',
  quarter: 1,
  week: 7,
  weekIndex: 6,
  dayInWeek: 1,
  title: 'Lesson 31: Animal Sound Parade Listening and Identification',
  theme: 'Environmental Sounds and Animal Recognition',
  skillRecurrenceTags: ['animal-sounds', 'listening-skills', 'sound-identification', 'sound-imitation'],
  relatedToPreviousSkills: ['animal-sounds', 'sound-play', 'naming'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Animal Sound Learning',
      duration: '1 min',
      content: {
        goal: 'Build listening and sound identification skills by exploring animal sounds. Baby\'s name learns to recognize and imitate sounds from familiar animals.',
        parentGuide: [
          'Animal sounds are engaging and memorable for toddlers because they connect animals to real-world experience.',
          'Sound identification strengthens auditory processing and phonological awareness needed for reading.',
          'This lesson begins Week 7 focus on environmental sounds by using familiar animal sounds.',
          'Imitating animal sounds builds mouth awareness and vocal control important for speech development.'
        ],
        materials: ['Animal toys or pictures (dog, cat, cow, duck, sheep, pig)', 'Optional: animal sound books or videos', 'Your voice and enthusiasm', 'Optional: simple props like toy microphone'],
        tip: 'Use animals baby\'s name has seen or heard before. Familiar animals are more engaging.',
        researchNote: 'Kuhl et al. (2003) showed that infants are highly sensitive to sounds and sound patterns, and animal sounds provide rich auditory input for learning.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Animal Sounds One by One',
      duration: '3-4 min',
      focus: 'Sound Recognition and Animal Association',
      researchBasis: 'Fernald (1989) showed that exaggerated, animated speech helps infants learn and focus attention.',
      content: {
        goal: 'Show baby\'s name animal toys or pictures and make their sounds clearly. Build a connection between the animal and its sound.',
        whatToSay: [
          '"Look, this is a dog. Dogs say woof woof. Woof woof! Can you hear the dog sound?"',
          '"Here\'s a cat. Cats say meow meow. Meow meow meow. Listen to the cat."',
          '"This is a cow. Cows say moo. Mooooo. The cow says moo."',
          '"A duck says quack quack quack. Quack quack. Listen to the duck."'
        ],
        whatToDo: [
          'Hold up or show one animal toy or picture.',
          'Say the animal name clearly.',
          'Make the sound the animal makes.',
          'Repeat the sound 2-3 times so baby\'s name can hear it well.',
          'Let them look at the animal while you make the sound.',
          'Make the sound exciting and exaggerated.',
          'Introduce 3-4 animals one at a time.',
          'Give baby\'s name time to focus on each animal.'
        ],
        examples: [
          'Hold up a dog toy. This is a dog. Woof woof woof. Make the sound excited and animated.',
          'Show a cow picture. Cow says moo. Mooooo. Draw out the sound so they can hear it clearly.'
        ],
        watchFor: [
          'Baby\'s name looking at the animal.',
          'Listening to the sound.',
          'Any attempts to make the sound or repeat it.',
          'Interest in each animal.'
        ],
        parentTip: 'Exaggerate the sounds and make them fun. Silly sounds are memorable.',
        funTwist: 'Change your voice for each animal. Deep moo for the cow, high quack for the duck.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Imitate Sounds Together',
      duration: '3-4 min',
      focus: 'Sound Imitation and Vocal Practice',
      researchBasis: 'Meltzoff & Moore (1977) showed that imitation builds neural pathways and strengthens learning.',
      content: {
        goal: 'Encourage baby\'s name to copy animal sounds. They practice vocal control and sound production.',
        whatToSay: [
          '"The dog says woof woof. Can you say woof woof? You try."',
          '"Meow meow like a cat. Can you meow? Good trying!"',
          '"Moo like the cow. Mooooo. You try to moo."',
          '"Let\'s both say quack quack. Quack quack quack together!"'
        ],
        whatToDo: [
          'Show an animal.',
          'Make its sound.',
          'Ask baby\'s name to copy the sound.',
          'Celebrate any attempt, even if it doesn\'t sound perfect.',
          'Make the sound together.',
          'Move to the next animal.',
          'Repeat sounds multiple times.',
          'Keep it playful and pressure-free.'
        ],
        examples: [
          'Show the dog. Woof woof. Now you say it. Baby tries. Say woof woof together.',
          'Make a cat sound. Meow. Encourage them to copy. Meow meow. Celebrate their try even if it\'s just a sound.'
        ],
        watchFor: [
          'Baby\'s name attempting to make sounds.',
          'Showing interest in copying.',
          'Any vocalization or mouth movement.',
          'Enjoyment of the activity.'
        ],
        parentTip: 'Accept all attempts. Even if it doesn\'t sound like the real animal, celebrate their effort.',
        funTwist: 'Alternate taking turns. You make a sound, they copy. Then they lead and you copy.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Animal Sound Parade',
      duration: '2-3 min',
      focus: 'Movement, Sound, and Play Integration',
      researchBasis: 'Vygotsky (1978) emphasized that combined play with movement accelerates learning.',
      content: {
        goal: 'Use animal sounds and movement together. Walk around the room making animal sounds, acting like the animals.',
        whatToSay: [
          '"Let\'s have an animal parade! We\'re dogs. Woof woof woof. Walk walk walk."',
          '"Now we\'re cows. Mooooo. Stomp stomp. Cows walk heavy."',
          '"Quack quack quack! We\'re ducks. Waddle waddle waddle."',
          '"What animal should we be next? Make the sound and move like it!"'
        ],
        whatToDo: [
          'Pick an animal.',
          'Make its sound.',
          'Move around the room like the animal.',
          'Invite baby\'s name to join.',
          'Exaggerate the movement and sound together.',
          'Switch animals every 30 seconds.',
          'Make it silly and fun.',
          'Keep moving and making sounds.'
        ],
        examples: [
          'Walk around going woof woof like a dog. Bounce and play.',
          'Move slow and heavy going moo like a cow. Then waddle and quack like a duck.'
        ],
        watchFor: [
          'Baby\'s name attempting sounds while moving.',
          'Moving and playing with the sounds.',
          'Excitement and engagement.',
          'Any attempts to copy sounds or movements.'
        ],
        parentTip: 'This combines listening, sound making, and movement all together.',
        funTwist: 'Let baby\'s name pick the next animal for the parade.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful animal sound learning',
          'You and baby\'s name explored animal sounds together',
          'You imitated sounds with funny voices',
          'You had an animal sound parade',
          'You built listening skills and vocal practice',
          'You connected animals to sounds'
        ],
        reviewQuestions: [
          'Which animal sound did baby\'s name seem most interested in?',
          'Did they attempt to copy any of the sounds?',
          'Did they show excitement during the parade?',
          'How did they respond to movement and sound together?'
        ],
        parentTakeaway: {
          title: 'Sounds Build Speech',
          content: 'When baby\'s name imitates animal sounds, they\'re practicing vocal control and sound production. Every sound they try strengthens their mouth muscles and speech pathways. Animal sounds are easier to copy than real words because they\'re fun and exaggerated. This playful practice builds the foundation for clear speech development.'
        },
        nextSteps: [
          'Repeat animal sounds during play throughout the week.',
          'Add new animal sounds gradually: sheep, pig, horse, bird.',
          'Play the animal parade game during cleanup or active play.',
          'Read animal sound books together.',
          'Point out real animals and make their sounds together.'
        ]
      }
    }
  ]
},

// ========= LESSON 32 =========
{
  id: 32,
  phase: '2',
  quarter: 1,
  week: 7,
  weekIndex: 6,
  dayInWeek: 2,
  title: 'Lesson 32: Home Noises Listening and Household Sound Recognition',
  theme: 'Everyday Sounds and Environmental Awareness',
  skillRecurrenceTags: ['environmental-sounds', 'listening-skills', 'sound-identification', 'home-awareness'],
  relatedToPreviousSkills: ['listening', 'sound-recognition', 'naming'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Home Sound Learning',
      duration: '1 min',
      content: {
        goal: 'Build listening awareness by identifying common household sounds. Baby\'s name learns to recognize and name sounds in their daily environment.',
        parentGuide: [
          'Household sounds are constant in baby\'s name\'s world and provide rich auditory learning.',
          'Sound identification strengthens auditory processing and builds a bridge between sound and source.',
          'This lesson expands Week 7 environmental sounds focus into the home environment.',
          'Learning to recognize familiar sounds builds listening attention and sound awareness.'
        ],
        materials: ['Household items that make sounds: doorbell, phone, vacuum (when off), timer, spoon on pot', 'Optional: pots, pans, spoons for making sounds', 'Your voice and household sounds', 'Safe items that create sounds'],
        tip: 'Use sounds baby\'s name hears regularly in your home. Familiar sounds are more meaningful.',
        researchNote: 'Trainor et al. (2002) showed that environmental sound exposure supports auditory development and attention.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Listen and Identify Home Sounds',
      duration: '3-4 min',
      focus: 'Sound Identification and Source Recognition',
      researchBasis: 'Fernald & Kuhl (1987) showed that pauses and attention help infants process and learn sounds.',
      content: {
        goal: 'Make common household sounds and name them. Help baby\'s name connect the sound to what makes it.',
        whatToSay: [
          '"Listen. What\'s that sound? Ring ring ring. That\'s the doorbell. Ding dong."',
          '"Do you hear that? Beep beep beep. That\'s the timer. Beep beep."',
          '"Listen carefully. Ding ding ding. That\'s a spoon on a pot. Ding!"',
          '"What sound is that? The phone. Ring ring ring. Phone sound."'
        ],
        whatToDo: [
          'Make one household sound.',
          'Pause and let baby\'s name listen.',
          'Make the sound again.',
          'Name the sound and what makes it.',
          'Show them the source of the sound if possible.',
          'Let them see and hear it together.',
          'Repeat the sound a few times.',
          'Move to the next sound.'
        ],
        examples: [
          'Ring the doorbell. Ring ring. That\'s the doorbell. Listen again. Ring ring.',
          'Tap a spoon on a pot. Ding ding ding. That\'s a spoon on a pot. Ding ding ding ding.'
        ],
        watchFor: [
          'Baby\'s name listening to the sound.',
          'Looking toward the source of the sound.',
          'Any reaction or interest.',
          'Attempts to listen or focus.'
        ],
        parentTip: 'Use sounds baby\'s name hears often. These are meaningful to them.',
        funTwist: 'Let baby\'s name make the sound if it\'s safe. Tap the spoon. Ring the bell.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Match Sounds to Pictures or Objects',
      duration: '3-4 min',
      focus: 'Sound-Source Association',
      researchBasis: 'Mandler & Bauer (1988) found that matching activities strengthen concept understanding.',
      content: {
        goal: 'Make a sound and help baby\'s name find or point to what makes that sound.',
        whatToSay: [
          '"I\'m going to make a sound. Listen. Ring ring ring. What makes that sound? The doorbell!"',
          '"Ding ding ding. What is that? That\'s the pot and spoon. Can you point to it?"',
          '"Listen. Beep beep beep. That\'s the timer. Where is the timer?"',
          '"What sound do you hear? Find what makes that sound."'
        ],
        whatToDo: [
          'Make a household sound.',
          'Ask baby\'s name to find or point to what makes it.',
          'If they\'re unsure, show them the item.',
          'Make the sound again from that item.',
          'Let them see and hear together.',
          'Celebrate their finding.',
          'Repeat with other sounds.',
          'Keep it like a discovery game.'
        ],
        examples: [
          'Make a doorbell sound. Can you find the doorbell? Point to it. Ring it again.',
          'Make a pot sound. Ding ding. Where\'s the pot? Show them. Ding ding ding.'
        ],
        watchFor: [
          'Baby\'s name looking or pointing toward the sound source.',
          'Attempting to find the item making the sound.',
          'Understanding the sound-source connection.',
          'Engagement with the game.'
        ],
        parentTip: 'Let them explore the item that makes the sound. Seeing and hearing together strengthens learning.',
        funTwist: 'Let baby\'s name make the sound and you find the item.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Sound Hunt Around the House',
      duration: '2-3 min',
      focus: 'Active Listening and Exploration',
      researchBasis: 'Vygotsky (1978) emphasized that exploratory play accelerates learning.',
      content: {
        goal: 'Walk around the house and listen for sounds together. Help baby\'s name notice and name sounds in different rooms.',
        whatToSay: [
          '"Let\'s listen for sounds in our house. What do you hear? Listen carefully."',
          '"Do you hear that? The refrigerator is humming. Hmmmmm."',
          '"Listen. Is that the clock? Tick tick tick. The clock ticks."',
          '"What sound is that? Can you hear the birds outside? Tweet tweet tweet."'
        ],
        whatToDo: [
          'Walk slowly through different rooms.',
          'Stop and listen together.',
          'Point out sounds you hear.',
          'Name the sounds.',
          'Ask baby\'s name what they hear.',
          'Look for the sound source together.',
          'Make the sound together if possible.',
          'Keep it like a listening adventure.'
        ],
        examples: [
          'Listen to the refrigerator hum. Hmmmmm. That\'s the fridge.',
          'Stop at the clock. Tick tick tick. That\'s the clock ticking.',
          'Listen to traffic or birds outside. What sounds do you hear?'
        ],
        watchFor: [
          'Baby\'s name listening and focusing.',
          'Looking or pointing toward sounds.',
          'Any attempts to imitate sounds.',
          'Interest in the sound hunt.'
        ],
        parentTip: 'This teaches that sounds are everywhere in their environment.',
        funTwist: 'Let baby\'s name lead the sound hunt. Where should we listen next?'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful home sound learning',
          'You and baby\'s name explored household sounds together',
          'You identified sounds and found their sources',
          'You hunted for sounds around the house',
          'You built listening awareness and environmental sound recognition',
          'You strengthened auditory attention'
        ],
        reviewQuestions: [
          'Which household sound did baby\'s name react to most?',
          'Could they find items that made sounds?',
          'Did they attempt to make or imitate sounds?',
          'How did they respond to the sound hunt?'
        ],
        parentTakeaway: {
          title: 'Listening Teaches Awareness',
          content: 'When baby\'s name listens to household sounds and learns to recognize them, they\'re building auditory awareness of their world. This teaches them to pay attention to details and builds focus. Good listeners notice more about their environment. This awareness is the beginning of attention skills needed for learning everything else.'
        },
        nextSteps: [
          'Point out household sounds during daily routines.',
          'Name sounds as they happen throughout the week.',
          'Make sounds together during play.',
          'Do daily sound hunts in different rooms.',
          'Let baby\'s name make household sounds and you guess what they are.'
        ]
      }
    }
  ]
},

// ========= LESSON 33 =========
{
  id: 33,
  phase: '2',
  quarter: 1,
  week: 7,
  weekIndex: 6,
  dayInWeek: 3,
  title: 'Lesson 33: Outdoor Sound Walk Listening and Nature Sound Recognition',
  theme: 'Environmental Sounds and Nature Awareness',
  skillRecurrenceTags: ['environmental-sounds', 'listening-skills', 'sound-identification', 'outdoor-exploration'],
  relatedToPreviousSkills: ['animal-sounds', 'listening', 'sound-recognition'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Outdoor Sound Learning',
      duration: '1 min',
      content: {
        goal: 'Build listening awareness by exploring outdoor sounds. Baby\'s name learns to recognize and identify sounds in nature and the outdoor environment.',
        parentGuide: [
          'Outdoor sounds provide rich and varied auditory experiences that strengthen listening skills.',
          'Nature sounds teach baby\'s name to notice details in their environment and build attention.',
          'This lesson expands Week 7 environmental sounds focus into the outdoor world.',
          'Identifying outdoor sounds builds vocabulary and connects language to real experiences.'
        ],
        materials: ['Access to outdoor space (yard, park, sidewalk)', 'Your voice and enthusiasm', 'Optional: notepad to record sounds baby\'s name notices', 'Comfortable walking clothes'],
        tip: 'Choose a time when outdoor sounds are active. Morning or late afternoon often have more bird activity.',
        researchNote: 'Trainor et al. (2002) found that varied auditory input from natural environments supports attention and auditory processing development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Stop and Listen Game',
      duration: '3-4 min',
      focus: 'Active Listening and Sound Awareness',
      researchBasis: 'Fernald & Kuhl (1987) showed that pauses and focused listening help toddlers process and identify sounds.',
      content: {
        goal: 'Walk outside and stop regularly to listen together. Help baby\'s name focus on one sound at a time.',
        whatToSay: [
          '"Let\'s go outside and listen for sounds. Stop. What do you hear? Listen carefully."',
          '"Do you hear that? Birds are singing. Tweet tweet tweet. Listen to the birds."',
          '"What\'s that sound? A car is going by. Vroom vroom. The car makes a vroom sound."',
          '"Listen. The wind is blowing. Whoooosh. Can you hear the wind in the trees?"'
        ],
        whatToDo: [
          'Step outside with baby\'s name.',
          'Walk slowly and stop every minute or so.',
          'Say "stop and listen" together.',
          'Stand still and focus on one sound.',
          'Name the sound you hear.',
          'Make the sound together if possible.',
          'Point toward where the sound is coming from.',
          'Continue walking and repeat.'
        ],
        examples: [
          'Stop. Listen. Do you hear birds? Tweet tweet. Point up to the trees where birds are singing.',
          'Pause near the street. Listen. A car. Vroom vroom. The car drives by.'
        ],
        watchFor: [
          'Baby\'s name stopping and listening when you pause.',
          'Looking toward the sound source.',
          'Any attempts to imitate or name sounds.',
          'Interest and focus during listening moments.'
        ],
        parentTip: 'Make stopping and listening into a fun game. The pauses help them focus.',
        funTwist: 'Let baby\'s name say "stop" and choose when to pause and listen.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Name the Outdoor Sounds',
      duration: '3-4 min',
      focus: 'Sound Identification and Vocabulary Building',
      researchBasis: 'Rowe (2012) showed that descriptive vocabulary during experiences accelerates language development.',
      content: {
        goal: 'Identify and name common outdoor sounds. Build vocabulary by connecting sounds to their sources.',
        whatToSay: [
          '"That\'s a bird singing. Birds tweet. Tweet tweet tweet."',
          '"Do you hear the dog barking? Woof woof. That dog is barking."',
          '"Listen to the wind. Whoooosh. Wind blows through the trees."',
          '"A plane is flying. Do you hear it? The plane goes vroom way up high."',
          '"Leaves are crunching under our feet. Crunch crunch crunch. Listen to the leaves."'
        ],
        whatToDo: [
          'Listen for a sound.',
          'Name what makes the sound.',
          'Describe the sound using simple words.',
          'Make the sound together.',
          'Point to or look at the source.',
          'Repeat the sound name.',
          'Encourage baby\'s name to say the sound or name.',
          'Move on to the next sound.'
        ],
        examples: [
          'Hear a bird. That\'s a bird. Birds sing. Tweet tweet tweet. Point to the tree.',
          'Step on leaves. Crunch crunch. The leaves crunch. Listen. Crunch crunch crunch.'
        ],
        watchFor: [
          'Baby\'s name looking toward sounds.',
          'Attempting to say sound words.',
          'Showing recognition of familiar sounds.',
          'Excitement when identifying sounds.'
        ],
        parentTip: 'Use simple, clear words to name sounds. Repetition helps them learn.',
        funTwist: 'Make a sound and have baby\'s name guess what makes it before you say the answer.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Sound Hunt Challenge',
      duration: '2-3 min',
      focus: 'Active Sound Discovery and Recognition',
      researchBasis: 'Vygotsky (1978) emphasized that exploratory learning with guidance strengthens cognitive development.',
      content: {
        goal: 'Turn sound listening into an active hunt. Challenge baby\'s name to find and identify specific sounds.',
        whatToSay: [
          '"Let\'s find sounds together. Can you hear a bird? Listen for tweet tweet."',
          '"What sound can you find? Listen and tell me when you hear something."',
          '"Let\'s listen for a car sound. When you hear vroom, tell me."',
          '"Can you find the wind sound? Listen for whoooosh in the trees."',
          '"Good listening! You found a sound. What was it?"'
        ],
        whatToDo: [
          'Give baby\'s name a sound to listen for.',
          'Walk together and listen.',
          'When they hear it, celebrate.',
          'Name the sound together.',
          'Look for the source together.',
          'Ask them to find another sound.',
          'Take turns being the sound hunter.',
          'Keep it playful and exciting.'
        ],
        examples: [
          'Listen for a bird. Walk together. When you hear tweet tweet, point and say "bird!" Celebrate the discovery.',
          'Challenge them to find a car sound. When they hear vroom, say "you found it! A car!" Point to the car together.'
        ],
        watchFor: [
          'Baby\'s name actively listening for sounds.',
          'Showing excitement when they identify a sound.',
          'Pointing or gesturing toward sound sources.',
          'Attempting to name sounds they discover.'
        ],
        parentTip: 'Celebrate every sound they notice, even if it\'s not the one you asked for.',
        funTwist: 'Collect sounds like treasures. "We found three sounds: bird, car, and wind!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful outdoor sound learning',
          'You and baby\'s name explored nature sounds together',
          'You stopped and listened to the outdoor world',
          'You named sounds and found their sources',
          'You went on a sound hunt adventure',
          'You built listening skills and environmental awareness'
        ],
        reviewQuestions: [
          'Which outdoor sound did baby\'s name notice most?',
          'Could they identify any sounds on their own?',
          'Did they show excitement during the sound hunt?',
          'Which sounds were new to them?'
        ],
        parentTakeaway: {
          title: 'Nature Teaches Attention',
          content: 'When baby\'s name listens to outdoor sounds, they\'re learning to pay attention to details in their world. This kind of focused listening builds the attention skills they need for learning language and eventually reading. Outdoor experiences provide rich, varied sounds that strengthen their auditory processing. Every bird song, every car sound, every rustling leaf teaches them to notice and name their environment.'
        },
        nextSteps: [
          'Take daily sound walks, even short ones.',
          'Point out outdoor sounds during regular walks or errands.',
          'Name sounds as you hear them throughout the day.',
          'Ask "what do you hear?" during outdoor time.',
          'Make a list of sounds baby\'s name discovers each day.'
        ]
      }
    }
  ]
},

// ========= LESSON 34 =========
{
  id: 34,
  phase: '2',
  quarter: 1,
  week: 7,
  weekIndex: 6,
  dayInWeek: 4,
  title: 'Lesson 34: Echo My Sound Imitation and Turn-Taking Game',
  theme: 'Sound Imitation and Interactive Communication',
  skillRecurrenceTags: ['sound-imitation', 'turn-taking', 'listening-skills', 'vocal-practice'],
  relatedToPreviousSkills: ['animal-sounds', 'sound-play', 'imitation'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Sound Echo Learning',
      duration: '1 min',
      content: {
        goal: 'Build sound imitation and turn-taking skills through echo games. Baby\'s name practices listening carefully and copying sounds, which strengthens vocal control and communication.',
        parentGuide: [
          'Sound imitation is a critical pre-speech skill that builds vocal coordination and control.',
          'Turn-taking in sound games teaches conversation structure and social communication.',
          'This lesson continues Week 7 environmental sounds focus through active vocal practice.',
          'Echo games strengthen auditory memory and attention to sound details.'
        ],
        materials: ['Your voice', 'Household items for making sounds (spoon, pot, shaker)', 'Optional: toy microphone or pretend microphone', 'Enthusiasm and playfulness'],
        tip: 'Start with simple sounds baby\'s name already knows. Success builds confidence.',
        researchNote: 'Meltzoff & Moore (1977) showed that imitation activates neural pathways critical for learning and social development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Simple Sound Echo Game',
      duration: '3-4 min',
      focus: 'Sound Imitation and Listening Accuracy',
      researchBasis: 'Kuhl et al. (2003) found that vocal imitation strengthens phonological awareness and speech development.',
      content: {
        goal: 'Make simple sounds and ask baby\'s name to echo them back. Build listening and imitation skills.',
        whatToSay: [
          '"I\'m going to make a sound. Listen carefully. Then you make the same sound. Ready?"',
          '"Moo. Can you say moo? Your turn. Moo."',
          '"Beep beep beep. Now you try. Beep beep beep."',
          '"Ding ding. Echo me. Ding ding."',
          '"Good! You copied my sound. Let\'s try another one."'
        ],
        whatToDo: [
          'Choose a simple, familiar sound.',
          'Make the sound clearly.',
          'Pause and wait for baby\'s name to copy.',
          'Celebrate any attempt to echo.',
          'Repeat the sound together.',
          'Try the same sound 2-3 times before moving on.',
          'Keep sounds short and simple at first.',
          'Gradually add slightly longer or more complex sounds.'
        ],
        examples: [
          'Say "woof woof." Wait. Baby tries. Celebrate. Say "woof woof" together.',
          'Make a ding sound. Pause. They try. Even if it\'s not perfect, say "yes! You echoed!" Do it together.'
        ],
        watchFor: [
          'Baby\'s name attempting to copy sounds.',
          'Waiting for their turn to echo.',
          'Any vocalization effort, even if not exact.',
          'Showing understanding of the echo pattern.'
        ],
        parentTip: 'Celebrate all attempts, not just perfect copies. Any sound they make is progress.',
        funTwist: 'Make silly sounds like buzzing, clicking, or popping. Funny sounds are memorable.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Turn-Taking Sound Game',
      duration: '3-4 min',
      focus: 'Conversation Structure and Social Communication',
      researchBasis: 'Bruner (1983) showed that turn-taking games form the foundation of conversational skills.',
      content: {
        goal: 'Take turns making sounds. Baby\'s name makes a sound, you echo it. Then you make a sound, they echo you.',
        whatToSay: [
          '"Now it\'s your turn to make a sound first. I\'ll echo you. Go ahead."',
          '"You said beep! I\'ll say it too. Beep! Good sound."',
          '"My turn to make a sound. Quack quack. Now you echo. Quack quack."',
          '"Your turn again. Make any sound you want. I\'ll copy you."',
          '"We\'re taking turns! You make a sound, I copy. I make a sound, you copy."'
        ],
        whatToDo: [
          'Let baby\'s name go first.',
          'Listen to any sound they make.',
          'Echo their sound back to them.',
          'Celebrate the sound they made.',
          'Then take your turn.',
          'Make a sound for them to echo.',
          'Pause and wait for them to copy.',
          'Keep alternating turns.'
        ],
        examples: [
          'They say "ba ba." You echo "ba ba!" Then you say "woof." They try to echo "woof."',
          'They make a clicking sound. You click too. Then you say "vroom." They try "vroom."'
        ],
        watchFor: [
          'Baby\'s name initiating sounds on their turn.',
          'Waiting for you to finish before taking their turn.',
          'Attempting to echo your sounds.',
          'Understanding the back-and-forth pattern.'
        ],
        parentTip: 'Turn-taking teaches conversation rhythm. This is how dialogue works.',
        funTwist: 'Use a toy microphone and "pass" it back and forth for each turn.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Sound Story Echo Game',
      duration: '2-3 min',
      focus: 'Sequencing and Sound Memory',
      researchBasis: 'Saffran et al. (1996) found that pattern recognition strengthens auditory memory and sequencing skills.',
      content: {
        goal: 'Create a simple sound sequence and have baby\'s name echo it. Build sound memory and sequencing.',
        whatToSay: [
          '"Let\'s make a sound story. I\'ll make sounds and you echo them. Ready?"',
          '"Woof woof. Then quack quack. Now you try both. Woof woof, quack quack."',
          '"Beep beep, ding ding. Can you echo? Beep beep, ding ding."',
          '"Let\'s add more. Moo, tweet tweet, vroom. Try with me."',
          '"We made a sound story together!"'
        ],
        whatToDo: [
          'Start with two sounds in a row.',
          'Make the first sound.',
          'Make the second sound.',
          'Ask baby\'s name to echo both.',
          'Help them by doing it together if needed.',
          'Celebrate their attempt.',
          'Try adding a third sound if they\'re ready.',
          'Keep it playful, not perfect.'
        ],
        examples: [
          'Say "woof woof, meow." They try both. Even if they only get one, celebrate. Do it together.',
          'Make "ding, beep beep." They echo as much as they can. Repeat together.'
        ],
        watchFor: [
          'Baby\'s name attempting to echo sequences.',
          'Remembering the order of sounds.',
          'Any effort to copy two or more sounds.',
          'Enjoyment of the challenge.'
        ],
        parentTip: 'Sequences build memory. Even attempting two sounds in order is great progress.',
        funTwist: 'Let baby\'s name create a sound story and you echo it back.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful sound echo learning',
          'You and baby\'s name played echo games together',
          'You took turns making and copying sounds',
          'You created sound stories',
          'You built listening, imitation, and conversation skills',
          'You practiced vocal control and sound memory'
        ],
        reviewQuestions: [
          'Which sounds did baby\'s name echo most successfully?',
          'Could they take turns making sounds?',
          'Did they attempt to echo sound sequences?',
          'How did they respond to the turn-taking pattern?'
        ],
        parentTakeaway: {
          title: 'Imitation Builds Speech',
          content: 'When baby\'s name echoes sounds, they\'re practicing the exact skills they need for speech development. Listening carefully, coordinating their mouth and voice, and producing sounds on purpose all strengthen the pathways needed for clear talking. Turn-taking in sound games teaches them the rhythm of conversation. Every echo, every attempt, every sound they copy builds their communication foundation.'
        },
        nextSteps: [
          'Play echo games during everyday moments like car rides or waiting time.',
          'Take turns making sounds throughout the week.',
          'Add new sounds to echo: household sounds, nature sounds, made-up sounds.',
          'Let baby\'s name lead sometimes and you follow.',
          'Practice two-sound sequences gradually building to longer patterns.'
        ]
      }
    }
  ]
},

// ========= LESSON 35 =========
{
  id: 35,
  phase: '2',
  quarter: 1,
  week: 7,
  weekIndex: 6,
  dayInWeek: 5,
  title: 'Lesson 35: Sound Detective Guessing Game and Source Identification',
  theme: 'Sound Mystery and Critical Listening',
  skillRecurrenceTags: ['sound-identification', 'listening-skills', 'problem-solving', 'auditory-memory'],
  relatedToPreviousSkills: ['environmental-sounds', 'listening', 'sound-recognition', 'animal-sounds'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Sound Detective Learning',
      duration: '1 min',
      content: {
        goal: 'Build critical listening and problem-solving skills by guessing objects from their sounds. Baby\'s name learns to identify sources without seeing them, strengthening auditory memory and sound recognition.',
        parentGuide: [
          'Guessing games strengthen critical thinking and auditory processing skills.',
          'Sound identification without visual cues builds focused listening and memory.',
          'This lesson completes Week 7 environmental sounds focus with an integrated challenge.',
          'Detective games make learning feel like play while building cognitive skills.'
        ],
        materials: ['Household items that make sounds: keys, paper, spoon and bowl, shaker, bell, toy', 'A blanket or box to hide items', 'Optional: bag or container for mystery sounds', 'Your enthusiasm and detective voice'],
        tip: 'Use sounds baby\'s name has heard throughout this week. Familiar sounds build confidence.',
        researchNote: 'Saffran et al. (1996) showed that auditory pattern recognition and memory are critical cognitive skills that support later learning.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce the Sound Detective Game',
      duration: '3-4 min',
      focus: 'Sound Recognition and Mystery Solving',
      researchBasis: 'Fernald (1989) found that playful, engaging contexts enhance learning and attention.',
      content: {
        goal: 'Make sounds behind a blanket or box while baby\'s name guesses what object makes the sound.',
        whatToSay: [
          '"We\'re going to be sound detectives! I\'ll make a sound. You guess what it is. Ready, detective?"',
          '"Listen carefully. What sound is this?" (Make sound.) "What do you think made that sound?"',
          '"Close your eyes and listen. Jingle jingle jingle. What is it? It\'s keys!"',
          '"Good detective work! You found the sound. Let\'s try another mystery sound."',
          '"Listen. Crinkle crinkle. What makes that sound? Paper! You got it!"'
        ],
        whatToDo: [
          'Hide an object behind a blanket or in a box.',
          'Make the sound the object creates.',
          'Pause and let baby\'s name think.',
          'Ask "what is it?" or "what made that sound?"',
          'Give them time to guess.',
          'Reveal the object and make the sound again.',
          'Celebrate their guess whether right or close.',
          'Repeat with different objects.'
        ],
        examples: [
          'Hide keys behind your back. Jingle them. "What\'s that sound?" They guess. Show the keys. "Keys! Jingle jingle."',
          'Crinkle paper behind a blanket. "Listen. Crinkle crinkle. What is it?" Reveal paper. "Paper makes crinkle sounds!"'
        ],
        watchFor: [
          'Baby\'s name listening carefully to the sound.',
          'Attempting to guess or point to answer.',
          'Recognition when object is revealed.',
          'Excitement about solving the mystery.'
        ],
        parentTip: 'Accept all guesses. Even wrong guesses show they\'re thinking about sounds.',
        funTwist: 'Give silly detective clues: "This sound is shiny and jingles. What could it be?"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Multiple Sound Choices',
      duration: '3-4 min',
      focus: 'Sound Discrimination and Choice-Making',
      researchBasis: 'Mandler & Bauer (1988) showed that choice-based activities strengthen concept understanding and decision-making.',
      content: {
        goal: 'Show baby\'s name two or three objects. Make a sound. They point to or choose which object made it.',
        whatToSay: [
          '"Look at these things: keys, a bell, and a spoon. I\'ll make a sound. You point to what makes it."',
          '"Listen. Ding ding ding. Which one? Is it the keys, the bell, or the spoon?"',
          '"Good thinking! The bell makes ding ding ding. Let\'s try another."',
          '"Here are a cup, paper, and a shaker. Listen. Crinkle crinkle. Which one makes that sound?"',
          '"Yes! The paper crinkles. You\'re a great sound detective!"'
        ],
        whatToDo: [
          'Place 2-3 objects in front of baby\'s name.',
          'Show and name each object first.',
          'Hide or turn away and make a sound with one object.',
          'Ask baby\'s name to point to which object made the sound.',
          'Guide them if needed.',
          'Reveal the correct object and make the sound again.',
          'Celebrate their choice.',
          'Switch objects and repeat.'
        ],
        examples: [
          'Show keys, bell, spoon. Turn away. Ring the bell. "Which one made ding ding?" They point to bell. "Yes! The bell!"',
          'Display paper, shaker, bowl. Hide and crinkle paper. "Which one crinkled?" They point. Reveal paper. "Paper crinkles!"'
        ],
        watchFor: [
          'Baby\'s name looking at all the choices.',
          'Listening to the sound carefully.',
          'Pointing to or touching their choice.',
          'Showing understanding of sound-object matching.'
        ],
        parentTip: 'Start with very different sounds. Make it easier at first, then add challenge.',
        funTwist: 'Let baby\'s name be the detective and you be the guesser sometimes.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Sound Memory Challenge',
      duration: '2-3 min',
      focus: 'Auditory Memory and Recall',
      researchBasis: 'Diamond (1990) found that memory games strengthen prefrontal circuits critical for learning and attention.',
      content: {
        goal: 'Make 2-3 sounds in a row. Baby\'s name remembers and finds the objects in order.',
        whatToSay: [
          '"Listen to all these sounds. Then find the things that made them. Ready?"',
          '"First: jingle jingle. Second: ding ding. What made those sounds? Can you find them?"',
          '"Great memory! Keys made jingle, bell made ding. Let\'s try more sounds."',
          '"Listen carefully: crinkle crinkle, then shake shake shake. What were they?"',
          '"You remembered! Paper and shaker. You\'re an amazing detective!"'
        ],
        whatToDo: [
          'Choose 2-3 objects.',
          'Make the first sound.',
          'Make the second sound.',
          'Ask baby\'s name to find both objects.',
          'Help them remember if needed by repeating sounds.',
          'Celebrate when they find each one.',
          'Point to objects as you make sounds together.',
          'Try increasing to three sounds if they\'re ready.'
        ],
        examples: [
          'Jingle keys, then ring bell. "Find what made jingle and ding." They find keys and bell. Do sounds together.',
          'Crinkle paper, shake shaker. "What made crinkle and shake?" Help them find both. Repeat sounds with objects.'
        ],
        watchFor: [
          'Baby\'s name attempting to remember multiple sounds.',
          'Finding objects in sequence.',
          'Any memory of the order of sounds.',
          'Engagement with the memory challenge.'
        ],
        parentTip: 'Memory is hard! Help them by repeating the sounds as they search.',
        funTwist: 'Make it a race: "Can we find all the sound-makers before I count to ten?"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful sound detective work',
          'You and baby\'s name solved sound mysteries together',
          'You guessed objects from their sounds',
          'You matched sounds to choices',
          'You remembered multiple sounds in sequence',
          'You built listening skills, memory, and problem-solving'
        ],
        reviewQuestions: [
          'Which sounds did baby\'s name identify most easily?',
          'Could they choose between multiple objects?',
          'Did they remember sounds in sequence?',
          'How did they respond to the detective challenge?'
        ],
        parentTakeaway: {
          title: 'Listening Builds Thinking',
          content: 'When baby\'s name plays sound detective games, they\'re not just listening—they\'re thinking, remembering, and solving problems. Identifying sounds without seeing the source requires focused attention and memory. These are the same skills they\'ll use later for reading comprehension and critical thinking. Every mystery they solve strengthens their cognitive abilities and builds confidence in their problem-solving skills.'
        },
        nextSteps: [
          'Play sound detective during daily routines.',
          'Hide objects and make sounds for baby\'s name to find.',
          'Take turns being the detective and the sound-maker.',
          'Add new household sounds to the detective game.',
          'Practice memory challenges with everyday sounds throughout the week.'
        ]
      }
    }
  ]
},

// ========= LESSON 36 =========
{
  id: 36,
  phase: '2',
  quarter: 1,
  week: 8,
  weekIndex: 7,
  dayInWeek: 1,
  title: 'Lesson 36: Find It in the Book Picture Recognition and Vocabulary Connection',
  theme: 'Story and Object Integration',
  skillRecurrenceTags: ['book-awareness', 'vocabulary', 'object-recognition', 'picture-identification'],
  relatedToPreviousSkills: ['naming', 'object-labeling', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Book Discovery Learning',
      duration: '1 min',
      content: {
        goal: 'Build book awareness and vocabulary by finding familiar objects in picture books. Baby\'s name learns to connect real-world vocabulary to pictures and stories.',
        parentGuide: [
          'Picture books bridge the gap between real objects and symbolic representation.',
          'Finding objects in books builds early reading skills and visual literacy.',
          'This lesson begins Week 8 focus on story and object integration.',
          'Connecting vocabulary to book pictures strengthens comprehension and word recognition.'
        ],
        materials: ['Simple picture books with clear images of familiar objects', 'Books baby\'s name has looked at before', 'Optional: real objects that match book pictures', 'Comfortable reading space'],
        tip: 'Choose books with one or two objects per page. Clear, simple images work best.',
        researchNote: 'Bus & van IJzendoorn (1995) found that shared picture book reading significantly accelerates vocabulary development and early literacy skills.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Name and Point Picture Hunt',
      duration: '3-4 min',
      focus: 'Object Recognition and Picture-Word Connection',
      researchBasis: 'Whitehurst & Lonigan (1998) showed that interactive picture book reading builds emergent literacy skills.',
      content: {
        goal: 'Look at picture books together and name objects. Help baby\'s name point to and identify familiar things.',
        whatToSay: [
          '"Let\'s look at this book together. Can you find the dog? Where\'s the dog?"',
          '"There it is! That\'s a dog. Dogs say woof woof. Point to the dog."',
          '"Let\'s turn the page. What do you see? A ball! Can you point to the ball?"',
          '"Look, here\'s a cup. We drink from cups. Show me the cup. Good finding!"',
          '"What else is on this page? Let\'s look together and find things."'
        ],
        whatToDo: [
          'Open a picture book.',
          'Point to one object on the page.',
          'Name the object clearly.',
          'Ask baby\'s name to point to it.',
          'Guide their finger if needed.',
          'Celebrate when they point.',
          'Name the object again.',
          'Move to the next object or page.'
        ],
        examples: [
          'Point to a cat in the book. "This is a cat. Can you touch the cat?" They point. "Yes! The cat says meow."',
          'Show a page with a cup. "Where\'s the cup? Find the cup." They point. "Great! We drink from cups."'
        ],
        watchFor: [
          'Baby\'s name looking at pictures.',
          'Pointing to objects when asked.',
          'Recognition of familiar items.',
          'Attempting to name objects.'
        ],
        parentTip: 'Let them touch and explore the pictures. Physical interaction with books builds engagement.',
        funTwist: 'Make the sounds or actions of objects in the book: "Woof woof" for dog, drinking motion for cup.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Real Object to Book Match',
      duration: '3-4 min',
      focus: 'Symbolic Representation and Matching Skills',
      researchBasis: 'Snow (1983) found that connecting real objects to pictures accelerates receptive vocabulary and symbolic understanding.',
      content: {
        goal: 'Show baby\'s name a real object, then help them find the same object in the book.',
        whatToSay: [
          '"Here\'s a real ball. Now let\'s find a ball in the book. Can you find it?"',
          '"This is your cup. Let\'s look in the book for a cup. Where is it? There!"',
          '"We have a toy dog. Can you find a dog in this book? Look for the dog."',
          '"Here are your shoes. Find shoes in the book. Can you match them?"',
          '"You matched them! The real ball and the book ball. Same thing!"'
        ],
        whatToDo: [
          'Hold up a real household object.',
          'Name it together.',
          'Open the book.',
          'Ask baby\'s name to find that object in the pictures.',
          'Help them search through pages if needed.',
          'When they find it, celebrate.',
          'Hold the real object next to the picture.',
          'Say "Same! This is a ball, and this is a ball in the book."'
        ],
        examples: [
          'Hold a spoon. "This is a spoon." Open book. "Find the spoon in the book." They search and point. Hold spoon near picture. "Same! Both spoons!"',
          'Show a toy car. "Let\'s find a car in your book." Flip pages together. They point to car. "Yes! This car and the book car match!"'
        ],
        watchFor: [
          'Baby\'s name searching for objects in pictures.',
          'Pointing when they find a match.',
          'Understanding that real objects and pictures can be the same.',
          'Excitement when they make connections.'
        ],
        parentTip: 'This teaches that pictures represent real things. This is a big thinking skill.',
        funTwist: 'Let baby\'s name choose a toy, then you both hunt for it together in the book.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Ask and Find Interactive Reading',
      duration: '2-3 min',
      focus: 'Comprehension and Interactive Engagement',
      researchBasis: 'Rowe (2012) showed that asking questions during reading accelerates vocabulary and comprehension development.',
      content: {
        goal: 'Ask baby\'s name questions about pictures as you read. Build comprehension and interactive reading skills.',
        whatToSay: [
          '"Let\'s read this page together. What do you see? Can you find something?"',
          '"Where\'s the cat in this picture? Point to the cat. Good! What does the cat say?"',
          '"This page has lots of things. Can you find the ball? How about the flower?"',
          '"What color is this dog? Can you touch the brown dog?"',
          '"You found so many things! Let\'s turn the page and find more."'
        ],
        whatToDo: [
          'Read or look at a page together.',
          'Pause and ask a question.',
          'Give baby\'s name time to look and think.',
          'Let them point or gesture to answer.',
          'Celebrate their response.',
          'Expand on what they found.',
          'Ask another question.',
          'Keep questions simple and clear.'
        ],
        examples: [
          'Look at a page. "Where\'s the bird? Can you find it?" They point. "Yes! The bird is in the tree. Birds say tweet tweet."',
          'Show a colorful page. "Find something red. What\'s red?" They point to apple. "The apple is red! Good finding!"'
        ],
        watchFor: [
          'Baby\'s name pausing to think about questions.',
          'Searching the page for answers.',
          'Pointing or gesturing in response.',
          'Engagement with the interactive reading.'
        ],
        parentTip: 'Wait time is important. Give them a chance to answer before helping.',
        funTwist: 'Let baby\'s name ask you questions. "You find the cat!" They point for you to find.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful book discovery learning',
          'You and baby\'s name explored picture books together',
          'You found and named objects in pictures',
          'You matched real objects to book pictures',
          'You asked and answered questions while reading',
          'You built vocabulary and early reading skills'
        ],
        reviewQuestions: [
          'Which objects did baby\'s name identify most easily?',
          'Could they match real objects to pictures?',
          'Did they respond to questions during reading?',
          'How engaged were they with the picture books?'
        ],
        parentTakeaway: {
          title: 'Pictures Build Reading',
          content: 'When baby\'s name finds objects in picture books, they\'re learning that pictures represent real things and that books contain meaning. This understanding is the foundation of reading comprehension. Connecting real objects to pictures strengthens their vocabulary and symbolic thinking. Every time they point to something in a book, they\'re building the skills they need to eventually read words and understand stories.'
        },
        nextSteps: [
          'Look at picture books daily, even for just a few minutes.',
          'Ask "where is" questions during every book session.',
          'Match household objects to book pictures throughout the week.',
          'Let baby\'s name choose books and point to favorite pictures.',
          'Build a routine of interactive reading with questions and pointing.'
        ]
      }
    }
  ]
},

// ========= LESSON 37 =========
{
  id: 37,
  phase: '2',
  quarter: 1,
  week: 8,
  weekIndex: 7,
  dayInWeek: 2,
  title: 'Lesson 37: Character Voices Story Play and Sound Imitation',
  theme: 'Story and Object Integration',
  skillRecurrenceTags: ['sound-imitation', 'story-engagement', 'character-recognition', 'vocal-expression'],
  relatedToPreviousSkills: ['animal-sounds', 'sound-play', 'imitation', 'book-awareness'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Character Voice Learning',
      duration: '1 min',
      content: {
        goal: 'Build story engagement and vocal expression by imitating character sounds and voices from books. Baby\'s name learns to connect characters to their sounds and actions.',
        parentGuide: [
          'Character voices make stories memorable and engaging for toddlers.',
          'Imitating character sounds builds vocal variety and expression skills.',
          'This lesson continues Week 8 story integration by adding vocal play to reading.',
          'Character sound play strengthens story comprehension and memory.'
        ],
        materials: ['Picture books with animal or character sounds', 'Books with repetitive phrases or character actions', 'Your expressive voice and enthusiasm', 'Optional: simple props like toy animals'],
        tip: 'Choose books baby\'s name knows well. Familiar stories make character play easier.',
        researchNote: 'Fernald (1989) found that exaggerated, animated speech captures attention and enhances language learning in young children.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Character Sounds',
      duration: '3-4 min',
      focus: 'Character Recognition and Sound Association',
      researchBasis: 'Tomasello (2003) showed that social interaction and imitation drive language learning and story comprehension.',
      content: {
        goal: 'Read a story and make sounds or voices for each character. Help baby\'s name connect characters to their sounds.',
        whatToSay: [
          '"Let\'s read about the animals. The cow says moooo. Can you hear the cow? Mooooo."',
          '"Here\'s the mouse. The mouse says squeak squeak squeak. Tiny mouse voice."',
          '"The bear has a big voice. Grrrr. The bear goes grrrr. Make a bear sound."',
          '"Listen to the bird. Tweet tweet tweet. High bird voice. Tweet tweet."',
          '"Each character makes their own special sound. Let\'s hear them all."'
        ],
        whatToDo: [
          'Open a picture book with characters.',
          'Point to a character.',
          'Make the sound or voice for that character.',
          'Use different tones: high for small animals, low for big ones.',
          'Repeat the character sound 2-3 times.',
          'Encourage baby\'s name to make the sound with you.',
          'Move to the next character.',
          'Make each voice distinct and fun.'
        ],
        examples: [
          'Point to a pig. "The pig says oink oink oink." Make it snorty and silly. Ask baby\'s name to oink too.',
          'Show a lion. "The lion roars. ROAR!" Make it loud and exciting. Roar together.'
        ],
        watchFor: [
          'Baby\'s name watching the characters.',
          'Attempting to imitate character sounds.',
          'Smiling or showing excitement with voices.',
          'Recognizing characters by their sounds.'
        ],
        parentTip: 'Make voices big and exaggerated. Silly voices are more memorable and fun.',
        funTwist: 'Change your whole body for each character: small for mouse, big for bear.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Character Voice Turn-Taking',
      duration: '3-4 min',
      focus: 'Interactive Reading and Vocal Practice',
      researchBasis: 'Bruner (1983) found that turn-taking in play and reading builds conversational and language skills.',
      content: {
        goal: 'Take turns making character voices. You read and make a voice, baby\'s name copies it, then you continue the story.',
        whatToSay: [
          '"I\'ll make the dog sound. Woof woof woof. Now you try. Woof woof."',
          '"Your turn to be the cat. Meow meow. Good cat voice! My turn to be the duck. Quack quack."',
          '"Let\'s do the frog together. Ready? Ribbit ribbit ribbit. Good frog sounds!"',
          '"Now it\'s your turn. Make the sheep sound. Baa baa. Great!"',
          '"We\'re making all the character voices in our story together."'
        ],
        whatToDo: [
          'Read a page with a character.',
          'Make the character sound.',
          'Pause and invite baby\'s name to copy.',
          'Celebrate their attempt.',
          'Make the sound together.',
          'Continue reading.',
          'Alternate who makes the next character sound.',
          'Keep the story moving with sound breaks.'
        ],
        examples: [
          'Read "The cow went to the barn." Make moo sound. Baby copies. Moo together. Continue reading.',
          'Point to rooster. "The rooster says..." Pause for baby to try cock-a-doodle-doo. You both do it. Read on.'
        ],
        watchFor: [
          'Baby\'s name waiting for their turn.',
          'Attempting character sounds when prompted.',
          'Engaging with the turn-taking pattern.',
          'Anticipating character sounds before you make them.'
        ],
        parentTip: 'Pause at character moments to let baby\'s name participate. This makes reading interactive.',
        funTwist: 'Let baby\'s name choose which character voice you both make next.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Act Out Character Actions',
      duration: '2-3 min',
      focus: 'Movement Integration and Story Comprehension',
      researchBasis: 'Vygotsky (1978) emphasized that combining movement with language accelerates learning and understanding.',
      content: {
        goal: 'Add character movements and actions to the sounds. Act out what characters do while making their voices.',
        whatToSay: [
          '"The bunny hops. Hop hop hop. Let\'s hop like the bunny and say hop hop hop."',
          '"The elephant walks slowly. Stomp stomp stomp. Make your voice low. Stomp stomp."',
          '"The bird flies. Flap your arms. Tweet tweet tweet while we fly."',
          '"The snake slithers. Move like this. Hissssss. Slither and hiss together."',
          '"We\'re being the characters! We make their sounds and move like them."'
        ],
        whatToDo: [
          'Read about a character action.',
          'Make the character sound.',
          'Add the movement the character does.',
          'Encourage baby\'s name to move and sound together.',
          'Exaggerate the movement.',
          'Keep it playful and active.',
          'Move around the room if space allows.',
          'Combine voice and action repeatedly.'
        ],
        examples: [
          'Read about a jumping frog. "The frog jumps. Ribbit ribbit." Jump together saying ribbit.',
          'Story shows a sleeping bear. "The bear sleeps. Snoooore." Pretend to sleep making snoring sounds.'
        ],
        watchFor: [
          'Baby\'s name moving with character actions.',
          'Making sounds while moving.',
          'Showing understanding of character behaviors.',
          'Excitement about acting out the story.'
        ],
        parentTip: 'Movement makes stories unforgettable. They remember what they do and say together.',
        funTwist: 'Pause the story and ask "what does the bear do?" Let baby\'s name act it out first.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful character voice learning',
          'You and baby\'s name brought story characters to life',
          'You made character sounds with different voices',
          'You took turns making voices during reading',
          'You acted out character movements and sounds',
          'You built story engagement and vocal expression'
        ],
        reviewQuestions: [
          'Which character voice did baby\'s name enjoy most?',
          'Could they take turns making character sounds?',
          'Did they add movements to character actions?',
          'How engaged were they with the character play?'
        ],
        parentTakeaway: {
          title: 'Voices Bring Stories Alive',
          content: 'When baby\'s name imitates character voices and actions, they\'re not just listening to a story—they\'re living it. This deep engagement builds comprehension and memory. Using different voices teaches them that language has variety and expression. Acting out characters connects words to actions and meanings. This playful interaction with stories is exactly how children develop a love of reading and strong comprehension skills.'
        },
        nextSteps: [
          'Use character voices every time you read together.',
          'Let baby\'s name choose which character voice to make.',
          'Act out favorite story scenes during playtime.',
          'Make character sounds throughout the day referencing books.',
          'Build a collection of character voices baby\'s name knows and loves.'
        ]
      }
    }
  ]
},

// ========= LESSON 38 =========
{
  id: 38,
  phase: '2',
  quarter: 1,
  week: 8,
  weekIndex: 7,
  dayInWeek: 3,
  title: 'Lesson 38: Action Repeat Story Movement and Sequence Learning',
  theme: 'Story and Object Integration',
  skillRecurrenceTags: ['action-words', 'sequencing', 'story-comprehension', 'movement-play'],
  relatedToPreviousSkills: ['action-verbs', 'following-directions', 'imitation', 'story-engagement'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Action Learning',
      duration: '1 min',
      content: {
        goal: 'Build comprehension and sequencing skills by acting out story actions together. Baby\'s name learns to follow story sequences and connect action words to movements.',
        parentGuide: [
          'Acting out stories strengthens comprehension and memory through physical engagement.',
          'Action sequences teach order, which is critical for later reading comprehension.',
          'This lesson continues Week 8 story integration by adding movement to narrative.',
          'Repeating story actions builds vocabulary and understanding of verbs and sequences.'
        ],
        materials: ['Picture books with clear action sequences', 'Books showing characters doing things (jumping, eating, sleeping)', 'Open space for movement', 'Optional: simple props related to story actions'],
        tip: 'Choose books with simple, repetitive actions. Clear sequences are easier to follow and act out.',
        researchNote: 'Whitehurst & Lonigan (1998) found that active participation during reading significantly enhances emergent literacy and comprehension.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Read and Do Actions Together',
      duration: '3-4 min',
      focus: 'Action Identification and Immediate Imitation',
      researchBasis: 'Meltzoff & Moore (1977) showed that immediate imitation strengthens neural connections and learning.',
      content: {
        goal: 'Read a story and act out each action as it happens. Connect story words directly to movements.',
        whatToSay: [
          '"The bunny jumps. Let\'s jump like the bunny. Jump jump jump!"',
          '"Now the bunny sits down. We sit down too. Sit down."',
          '"The bunny eats a carrot. Pretend to eat. Munch munch munch."',
          '"The bunny runs fast. Let\'s run fast like the bunny. Run run run!"',
          '"We\'re doing everything the bunny does. Let\'s keep going."'
        ],
        whatToDo: [
          'Read a page with an action.',
          'Identify the action clearly.',
          'Immediately do that action together.',
          'Say the action word while moving.',
          'Repeat the action 2-3 times.',
          'Return to the book.',
          'Continue to the next action.',
          'Keep movements simple and clear.'
        ],
        examples: [
          'Read "The bear climbs the tree." Put down book. "Let\'s climb! Climb climb climb." Pretend to climb together.',
          'Story shows cat sleeping. "The cat sleeps. We sleep too." Lie down together. "Sleeping, sleeping." Get up and continue.'
        ],
        watchFor: [
          'Baby\'s name watching for actions in the story.',
          'Attempting to copy movements immediately.',
          'Understanding the connection between words and actions.',
          'Anticipating actions they\'ve done before.'
        ],
        parentTip: 'Do actions right away while the story is fresh. Immediate practice strengthens memory.',
        funTwist: 'Exaggerate actions big time. Tiny hop or huge jump? Make it dramatic and fun.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Retell Through Actions',
      duration: '3-4 min',
      focus: 'Sequencing and Story Memory',
      researchBasis: 'Mandler & Bauer (1988) found that sequential recall through action strengthens cognitive organization and memory.',
      content: {
        goal: 'After reading, retell the story by doing all the actions in order without the book.',
        whatToSay: [
          '"Let\'s do the whole story again. First, what did the bunny do? The bunny jumped!"',
          '"Let\'s jump. Jump jump jump. Good! Then what? The bunny sat down. Sit down."',
          '"What happened next? The bunny ate. Munch munch munch. What came after eating?"',
          '"The bunny ran. Let\'s run. Run run run. We did the whole story!"',
          '"We remembered all the actions in order. Great memory!"'
        ],
        whatToDo: [
          'Close the book or put it aside.',
          'Start at the beginning of the story.',
          'Ask "what happened first?"',
          'Do the first action together.',
          'Ask "what happened next?"',
          'Continue through all actions in sequence.',
          'Prompt if baby\'s name forgets.',
          'Celebrate completing the sequence.'
        ],
        examples: [
          'Story was about dog waking, eating, playing, sleeping. Do each action in order. "First dog woke up. Then dog ate. Then played. Then slept."',
          'After reading about bear climbing, swimming, eating. Act out: climb, swim motions, eat motion. "We did it in the right order!"'
        ],
        watchFor: [
          'Baby\'s name attempting actions in sequence.',
          'Remembering what comes next.',
          'Any correct ordering of story events.',
          'Engagement with the memory challenge.'
        ],
        parentTip: 'Sequence is hard. Help by giving choices: "Did bunny jump or sleep first?"',
        funTwist: 'Do the story actions in reverse order: "Let\'s go backwards through the story!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Create Your Own Action Story',
      duration: '2-3 min',
      focus: 'Creative Expression and Action Vocabulary',
      researchBasis: 'Vygotsky (1978) showed that creative play with guided support builds language and cognitive flexibility.',
      content: {
        goal: 'Make up a simple action story together. Baby\'s name chooses actions and you both act them out in sequence.',
        whatToSay: [
          '"Let\'s make our own action story. What should baby\'s name do first? Jump? Okay!"',
          '"Baby\'s name jumps. Jump jump jump. What should baby\'s name do next?"',
          '"Run! Good idea. Baby\'s name jumps, then runs. Now what? Spin around?"',
          '"Baby\'s name jumps, runs, and spins. Then what happens? Sit down? Perfect!"',
          '"We made our own story! Let\'s do it all again from the beginning."'
        ],
        whatToDo: [
          'Ask baby\'s name to choose an action.',
          'Do that action together.',
          'Narrate it: "Baby\'s name jumps."',
          'Ask for the next action.',
          'Add it to the sequence.',
          'Build 3-4 actions total.',
          'Retell the whole sequence acting it out.',
          'Celebrate their created story.'
        ],
        examples: [
          'Baby chooses: clap, stomp, wave. "Baby\'s name claps, then stomps, then waves. Let\'s do our story!" Act out all three in order.',
          'They pick: spin, jump, sit. "First spin, then jump, then sit. That\'s our story!" Do it together several times.'
        ],
        watchFor: [
          'Baby\'s name suggesting or choosing actions.',
          'Following the created sequence.',
          'Excitement about their own story.',
          'Attempting to repeat the sequence.'
        ],
        parentTip: 'Let them lead. Any action they choose is perfect for their story.',
        funTwist: 'Add sound effects to each action: "Wheee" for spin, "boom" for stomp.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful story action learning',
          'You and baby\'s name acted out story actions together',
          'You did actions while reading',
          'You retold stories through movement and sequence',
          'You created your own action story',
          'You built comprehension, memory, and action vocabulary'
        ],
        reviewQuestions: [
          'Which story actions did baby\'s name remember best?',
          'Could they follow action sequences in order?',
          'Did they contribute actions to the created story?',
          'How engaged were they with acting out stories?'
        ],
        parentTakeaway: {
          title: 'Actions Build Understanding',
          content: 'When baby\'s name acts out story actions, they\'re building deep comprehension. Physical movement connects abstract story events to concrete experiences, making stories real and memorable. Following action sequences teaches them about order and cause-and-effect, which are essential for understanding how stories work. Creating their own action stories builds confidence and shows them that they can be storytellers too. Movement and language together create powerful learning.'
        },
        nextSteps: [
          'Act out actions in every story you read this week.',
          'Retell favorite stories through actions during playtime.',
          'Create daily action stories during routine transitions.',
          'Ask "what happens next?" to build sequence prediction.',
          'Let baby\'s name lead action stories and you follow their ideas.'
        ]
      }
    }
  ]
},

// ========= LESSON 39 =========
{
  id: 39,
  phase: '2',
  quarter: 1,
  week: 8,
  weekIndex: 7,
  dayInWeek: 4,
  title: 'Lesson 39: Rhyme Time Picture Book Rhyming and Sound Pattern Recognition',
  theme: 'Story and Object Integration',
  skillRecurrenceTags: ['rhyming', 'phonological-awareness', 'sound-patterns', 'book-engagement'],
  relatedToPreviousSkills: ['listening', 'sound-recognition', 'rhythm', 'book-awareness'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Rhyme Discovery Learning',
      duration: '1 min',
      content: {
        goal: 'Build phonological awareness by identifying rhyming words and patterns in picture books. Baby\'s name learns to hear and recognize when words sound the same at the end.',
        parentGuide: [
          'Rhyming is a crucial early literacy skill that predicts later reading success.',
          'Picture books with rhymes make sound patterns memorable and fun.',
          'This lesson continues Week 8 story integration by focusing on sound play in books.',
          'Recognizing rhymes builds the auditory discrimination needed for phonics and reading.'
        ],
        materials: ['Rhyming picture books or nursery rhyme books', 'Books with repetitive rhyming patterns', 'Optional: pictures or objects that rhyme (cat/hat, bug/mug)', 'Your enthusiastic voice'],
        tip: 'Choose books with strong, obvious rhymes. Dr. Seuss books or nursery rhymes work perfectly.',
        researchNote: 'Anthony & Francis (2005) found that early rhyme recognition is one of the strongest predictors of phonological awareness and reading readiness.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Listen for Rhyming Words',
      duration: '3-4 min',
      focus: 'Rhyme Recognition and Sound Awareness',
      researchBasis: 'Lonigan et al. (2000) showed that exposure to rhyming patterns significantly develops phonological awareness in toddlers.',
      content: {
        goal: 'Read rhyming books and emphasize rhyming words. Help baby\'s name hear when words sound the same at the end.',
        whatToSay: [
          '"Listen to these words. Cat. Hat. Cat and hat rhyme! They sound the same at the end."',
          '"Hear this: bug, mug. Bug and mug. They rhyme! Listen: bug, mug. Same sound."',
          '"The book says: the bear in the chair. Bear and chair rhyme. Hear it? Bear, chair."',
          '"Let\'s find more rhyming words. Dog, frog. Dog and frog rhyme! Dog, frog."',
          '"Rhyming words sound the same at the end. Let\'s listen for more."'
        ],
        whatToDo: [
          'Read a page with rhyming words.',
          'Stop at the rhyming words.',
          'Say them slowly and clearly.',
          'Repeat the rhyming pair 2-3 times.',
          'Emphasize the ending sound.',
          'Point to pictures as you say the words.',
          'Ask baby\'s name to listen.',
          'Continue reading and repeat with new rhymes.'
        ],
        examples: [
          'Read "The cat sat on the mat." Stop. "Cat, mat. Listen: cat, mat. They rhyme! Cat, mat, cat, mat."',
          'Page shows "A mouse in the house." Emphasize: "Mouse, house. Mouse and house rhyme. Mouse, house."'
        ],
        watchFor: [
          'Baby\'s name listening to rhyming words.',
          'Looking at pictures when you say words.',
          'Any reaction to rhyming patterns.',
          'Attempting to repeat rhyming words.'
        ],
        parentTip: 'Overemphasize the ending sounds. Make them really obvious and clear.',
        funTwist: 'Make rhyming words silly by saying them in funny voices or singing them.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Fill in the Rhyme',
      duration: '3-4 min',
      focus: 'Rhyme Prediction and Active Participation',
      researchBasis: 'Fernald & Kuhl (1987) found that pausing for participation increases attention and learning in language activities.',
      content: {
        goal: 'Read rhyming books but pause before the rhyming word. Let baby\'s name try to fill it in or say it with you.',
        whatToSay: [
          '"The cat sat on the... Can you say it? Mat! The cat sat on the mat."',
          '"I see a dog on a... what? Log! A dog on a log. Good!"',
          '"Twinkle twinkle little... What comes next? Star! Little star."',
          '"The mouse is in the... House! You got it! Mouse in the house."',
          '"Listen and help me finish. The bug is in the... Mug! Great rhyming!"'
        ],
        whatToDo: [
          'Read a familiar rhyming book or verse.',
          'Pause right before the rhyming word.',
          'Look at baby\'s name expectantly.',
          'Give them 2-3 seconds to try.',
          'Say the word together whether they got it or not.',
          'Celebrate their attempt.',
          'Point to the picture.',
          'Continue and repeat with the next rhyme.'
        ],
        examples: [
          'Read "Hickory dickory dock, the mouse ran up the... (pause)." They may say "clock" or try a sound. Say it together. "Clock!"',
          'Book says "A bee in a tree." Read "A bee in a..." Pause. Let them try "tree." Finish together. "Tree! Bee, tree!"'
        ],
        watchFor: [
          'Baby\'s name anticipating the rhyme.',
          'Attempting to say the rhyming word.',
          'Showing excitement when they know it.',
          'Listening carefully for the pattern.'
        ],
        parentTip: 'Even if they just make a sound, that\'s great. They\'re trying to participate.',
        funTwist: 'Give wrong silly answers first: "The cat sat on the... elephant? No! Mat!" Make it playful.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Find Rhyming Pictures',
      duration: '2-3 min',
      focus: 'Visual-Auditory Rhyme Connection',
      researchBasis: 'Whitehurst & Lonigan (1998) showed that connecting visual and auditory information strengthens emergent literacy skills.',
      content: {
        goal: 'Look at book pictures and find things that rhyme. Connect the sound pattern to visual objects.',
        whatToSay: [
          '"Let\'s find things that rhyme in our book. I see a cat. What rhymes with cat? A hat!"',
          '"Look at this page. There\'s a tree. Can you find something that rhymes with tree? A bee!"',
          '"Here\'s a star. Find something that rhymes with star. A car! Star, car."',
          '"On this page there\'s a fox. What rhymes with fox? Box! Fox and box."',
          '"You\'re finding rhymes! Let\'s look for more rhyming pictures."'
        ],
        whatToDo: [
          'Look at a page with multiple objects.',
          'Point to one object and name it.',
          'Ask baby\'s name to find something that rhymes.',
          'Help them search the page.',
          'Point out rhyming objects together.',
          'Say both words emphasizing the rhyme.',
          'Look for more rhyming pairs.',
          'Celebrate each discovery.'
        ],
        examples: [
          'Page has cat, hat, dog, ball. Point to cat. "Find what rhymes with cat." Guide to hat. "Hat! Cat and hat rhyme."',
          'Show page with sun, run (person running), moon. Say "sun." "What rhymes?" Find run. "Sun, run! They rhyme!"'
        ],
        watchFor: [
          'Baby\'s name searching for rhyming pictures.',
          'Pointing to objects when found.',
          'Understanding that pictures can rhyme.',
          'Excitement about discovering rhymes.'
        ],
        parentTip: 'Start with obvious rhymes. Gradually make it more challenging as they improve.',
        funTwist: 'Turn the book into a rhyme hunt: "How many rhymes can we find on this page?"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful rhyme discovery learning',
          'You and baby\'s name explored rhyming words together',
          'You listened for rhyming patterns in stories',
          'You filled in rhyming words',
          'You found rhyming pictures in books',
          'You built phonological awareness and sound pattern recognition'
        ],
        reviewQuestions: [
          'Which rhyming words did baby\'s name recognize most easily?',
          'Could they fill in any rhyming words?',
          'Did they find rhyming pictures successfully?',
          'How engaged were they with rhyme games?'
        ],
        parentTakeaway: {
          title: 'Rhymes Build Reading',
          content: 'When baby\'s name recognizes rhyming words, they\'re learning to hear the individual sounds in words. This skill, called phonological awareness, is absolutely essential for learning to read. Children who can hear rhymes will later be able to break words into sounds and blend sounds into words. Every rhyme they hear and recognize builds the foundation for decoding and spelling. Rhyming makes sound learning fun and memorable.'
        },
        nextSteps: [
          'Read rhyming books daily throughout the week.',
          'Point out rhymes in everyday speech and songs.',
          'Play rhyme games: "What rhymes with your name?"',
          'Pause before rhyming words in familiar books.',
          'Collect rhyming objects or pictures around the house.'
        ]
      }
    }
  ]
},

// ========= LESSON 40 =========
{
  id: 40,
  phase: '2',
  quarter: 1,
  week: 8,
  weekIndex: 7,
  dayInWeek: 5,
  title: 'Lesson 40: Story Talk Simple Questions and Story Discussion',
  theme: 'Story and Object Integration',
  skillRecurrenceTags: ['comprehension', 'conversation', 'story-discussion', 'vocabulary'],
  relatedToPreviousSkills: ['listening', 'book-awareness', 'naming', 'question-response'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Discussion Learning',
      duration: '1 min',
      content: {
        goal: 'Build comprehension and conversation skills by asking and answering simple questions about stories. Baby\'s name learns to think about stories and express understanding.',
        parentGuide: [
          'Asking questions during reading builds comprehension and critical thinking skills.',
          'Story discussions teach children to reflect on what they hear and see.',
          'This lesson completes Week 8 story integration by focusing on comprehension.',
          'Simple question-answer patterns build the foundation for deeper reading comprehension.'
        ],
        materials: ['Familiar picture books baby\'s name knows', 'Books with clear pictures and simple stories', 'Your encouraging voice', 'Optional: props or toys related to stories'],
        tip: 'Use books baby\'s name has heard before. Familiar stories make it easier to answer questions.',
        researchNote: 'Rowe (2012) found that asking varied questions during reading significantly accelerates vocabulary and comprehension development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Ask Simple "What" Questions',
      duration: '3-4 min',
      focus: 'Object and Character Identification',
      researchBasis: 'Weisleder & Fernald (2013) showed that interactive questioning during reading accelerates language learning.',
      content: {
        goal: 'Ask simple "what" questions about pictures and story elements. Help baby\'s name identify and name things in the story.',
        whatToSay: [
          '"What do you see on this page? What is that? A dog! Good."',
          '"What is the cat doing? What do you think? The cat is sleeping."',
          '"What color is the ball? Can you tell me? Red! The ball is red."',
          '"What does the cow say? What sound? Moo! The cow says moo."',
          '"What is this called? Point to it. That\'s a tree. Good finding!"'
        ],
        whatToDo: [
          'Read or look at a page.',
          'Pause and ask a "what" question.',
          'Point to what you\'re asking about.',
          'Give baby\'s name time to think and respond.',
          'Accept any answer attempt.',
          'Provide the answer if needed.',
          'Celebrate their response.',
          'Continue with more questions.'
        ],
        examples: [
          'Show page with dog. "What animal is this?" Wait. They may point or say "dog" or "woof." "Yes! A dog! Dogs say woof."',
          'Picture of child eating. "What is the girl doing?" Pause. Accept any response. "She\'s eating! Good thinking."'
        ],
        watchFor: [
          'Baby\'s name pausing to think about questions.',
          'Pointing to answers.',
          'Attempting words or sounds as answers.',
          'Engagement with the questioning.'
        ],
        parentTip: 'Wait time is crucial. Give them at least 3 seconds to think before helping.',
        funTwist: 'Ask silly wrong questions: "Is that a banana? No! It\'s a dog!" Make them giggle and correct you.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Ask "Where" and "Who" Questions',
      duration: '3-4 min',
      focus: 'Location and Character Recognition',
      researchBasis: 'Hart & Risley (1995) found that varied question types during reading significantly impact vocabulary growth.',
      content: {
        goal: 'Expand question types to include "where" and "who" questions. Build understanding of location and characters.',
        whatToSay: [
          '"Where is the bird? Can you point to where the bird is? In the tree!"',
          '"Who is wearing the hat? Who do you see with a hat? The boy!"',
          '"Where did the cat go? Where is the cat now? Under the chair."',
          '"Who is driving the car? Can you show me who? The dad is driving."',
          '"Where are the flowers? Point to the flowers. There they are!"'
        ],
        whatToDo: [
          'Ask a "where" or "who" question.',
          'Let baby\'s name look and think.',
          'Encourage pointing or gesturing.',
          'Help them find the answer if needed.',
          'Confirm their answer.',
          'Expand on their response.',
          'Ask follow-up questions.',
          'Keep questions matched to their level.'
        ],
        examples: [
          'Show busy page. "Where is the dog?" They search and point. "Yes! The dog is by the house. Good finding!"',
          'Story with multiple characters. "Who is happy? Who has a smile?" They point to character. "The girl is happy!"'
        ],
        watchFor: [
          'Baby\'s name searching pictures for answers.',
          'Using pointing or gestures to respond.',
          'Understanding different question types.',
          'Showing comprehension of story elements.'
        ],
        parentTip: 'Different question words teach different thinking skills. Mix them up.',
        funTwist: 'Let baby\'s name ask you questions: "You ask me where something is!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Personal Connection Questions',
      duration: '2-3 min',
      focus: 'Story-to-Life Connection and Expression',
      researchBasis: 'Vygotsky (1978) emphasized that connecting learning to personal experience deepens understanding and retention.',
      content: {
        goal: 'Ask questions that connect the story to baby\'s name\'s own life. Build personal relevance and expression.',
        whatToSay: [
          '"The boy has a ball. Do you have a ball? Where is your ball?"',
          '"The girl is eating. What do you like to eat? Can you tell me?"',
          '"The baby is sleeping. Where do you sleep? Show me sleeping."',
          '"The dog is running. Can you run like the dog? Let\'s run together."',
          '"This character is happy. When are you happy? What makes you happy?"'
        ],
        whatToDo: [
          'Read about a story element.',
          'Ask how it relates to baby\'s name.',
          'Encourage them to share or show.',
          'Listen to any response.',
          'Expand on what they say.',
          'Connect it back to the story.',
          'Celebrate their sharing.',
          'Make it conversational, not quizzing.'
        ],
        examples: [
          'Story shows child with teddy bear. "This girl has a teddy. Do you have a teddy? Where is it? Let\'s get it!" Compare to story.',
          'Character eating apple. "He likes apples. Do you like apples? What else do you like?" Let them share.'
        ],
        watchFor: [
          'Baby\'s name making connections to their life.',
          'Attempting to express preferences or experiences.',
          'Showing objects or doing actions in response.',
          'Engagement with personal questions.'
        ],
        parentTip: 'Personal connections make stories meaningful. This is where real learning happens.',
        funTwist: 'Act out your own version of the story using baby\'s name as the main character.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful story discussion learning',
          'You and baby\'s name talked about stories together',
          'You asked and answered what, where, and who questions',
          'You made personal connections to stories',
          'You built comprehension and conversation skills',
          'You practiced thinking and talking about what you read'
        ],
        reviewQuestions: [
          'Which types of questions did baby\'s name respond to best?',
          'Could they make personal connections to stories?',
          'Did they attempt to answer in words or gestures?',
          'How engaged were they with story discussions?'
        ],
        parentTakeaway: {
          title: 'Questions Build Thinking',
          content: 'When baby\'s name answers questions about stories, they\'re learning to think actively while reading. This is comprehension—understanding and thinking about what stories mean. Children who learn to answer questions about books become active readers who think, predict, and connect ideas. Every question you ask teaches them that reading is about understanding, not just looking at pictures or hearing words. Story discussions build the thinking skills that make reading meaningful and powerful.'
        },
        nextSteps: [
          'Ask at least three questions during every book this week.',
          'Mix question types: what, where, who, how.',
          'Always make one personal connection question.',
          'Give wait time before helping with answers.',
          'Let baby\'s name ask you questions about stories too.'
        ]
      }
    }
  ]
},

// ========= LESSON 41 =========
{
  id: 41,
  phase: '2',
  quarter: 1,
  week: 9,
  weekIndex: 8,
  dayInWeek: 1,
  title: 'Lesson 41: Clap the Syllables Rhythm and Word Segmentation',
  theme: 'Rhymes and Repetition',
  skillRecurrenceTags: ['syllables', 'rhythm', 'phonological-awareness', 'word-segmentation'],
  relatedToPreviousSkills: ['rhythm', 'sound-patterns', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Syllable Learning',
      duration: '1 min',
      content: {
        goal: 'Build phonological awareness by breaking words into syllables through clapping. Baby\'s name learns to hear the beats or parts in words.',
        parentGuide: [
          'Syllable awareness is a critical phonological skill that supports reading development.',
          'Clapping syllables makes word parts physical and memorable.',
          'This lesson begins Week 9 focus on rhymes and repetition with syllable work.',
          'Understanding syllables helps children later decode and spell longer words.'
        ],
        materials: ['Your hands for clapping', 'Optional: drum or tambourine', 'Household objects to name', 'Pictures of familiar things'],
        tip: 'Start with baby\'s name\'s name and family member names. Personal words are most engaging.',
        researchNote: 'Anthony & Francis (2005) found that syllable awareness develops before phoneme awareness and is essential for literacy development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Clap Your Name',
      duration: '3-4 min',
      focus: 'Syllable Recognition in Names',
      researchBasis: 'Lonigan et al. (2000) showed that practicing syllable segmentation through rhythm strengthens phonological processing.',
      content: {
        goal: 'Clap the syllables in baby\'s name\'s name and family names. Help them hear and feel the beats in words.',
        whatToSay: [
          '"Let\'s clap your name! Listen: Em-i-ly. Three claps. Em (clap) i (clap) ly (clap). Emily!"',
          '"Now let\'s clap Mom-my. Two claps. Mom (clap) my (clap). Mommy!"',
          '"Dad-dy. How many claps? Dad (clap) dy (clap). Two claps! Daddy!"',
          '"Your name is special. Let\'s clap it again. Em (clap) i (clap) ly (clap). You try!"',
          '"We\'re breaking words into parts. Each part gets one clap."'
        ],
        whatToDo: [
          'Say baby\'s name\'s name slowly.',
          'Break it into syllables.',
          'Clap once for each syllable.',
          'Say each syllable as you clap.',
          'Encourage baby\'s name to clap with you.',
          'Repeat several times.',
          'Try other family member names.',
          'Count the claps together.'
        ],
        examples: [
          'Name: Sarah. Say "Sa-rah" with two claps. Sa (clap) rah (clap). "Two parts! Two claps! Sarah."',
          'Name: Alexander. Say "Al-ex-an-der" with four claps. Count them. "Four claps! Four parts! Alexander."'
        ],
        watchFor: [
          'Baby\'s name attempting to clap with you.',
          'Listening to syllable breaks.',
          'Recognizing patterns in repeated names.',
          'Any awareness of word parts.'
        ],
        parentTip: 'Exaggerate the breaks between syllables. Make them really clear and distinct.',
        funTwist: 'Clap loud for big syllables, soft for small syllables. Make it dramatic.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Clap Everyday Objects',
      duration: '3-4 min',
      focus: 'Syllable Segmentation in Vocabulary',
      researchBasis: 'Trainor et al. (2005) found that rhythm activities strengthen auditory processing and phonological skills.',
      content: {
        goal: 'Clap syllables in common object names. Build awareness that all words have syllable patterns.',
        whatToSay: [
          '"Let\'s clap ta-ble. Ta (clap) ble (clap). Two claps! Table."',
          '"Now cup. Just cup (clap). One clap! Cup has one part."',
          '"Let\'s try ba-na-na. Ba (clap) na (clap) na (clap). Three claps! Banana."',
          '"Spoon (clap). One clap. Spoon is a short word. One part."',
          '"Win-dow. Win (clap) dow (clap). Two claps! Window."'
        ],
        whatToDo: [
          'Point to or hold an object.',
          'Say its name clearly.',
          'Break it into syllables.',
          'Clap each syllable.',
          'Count the claps.',
          'Let baby\'s name try.',
          'Do it together several times.',
          'Try objects around the room.'
        ],
        examples: [
          'Hold a book. "Book (clap). One clap! Book." Hold a banana. "Ba-na-na (clap clap clap). Three claps! Banana."',
          'Point to a chair. "Chair (clap). One!" Point to a blanket. "Blan-ket (clap clap). Two claps! Blanket."'
        ],
        watchFor: [
          'Baby\'s name clapping with object names.',
          'Understanding that words have different numbers of parts.',
          'Attempting to count claps.',
          'Engagement with syllable patterns.'
        ],
        parentTip: 'Mix long and short words. Variety helps them understand the concept.',
        funTwist: 'Find the longest word in the room: "Which thing has the most claps?"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Syllable Parade Game',
      duration: '2-3 min',
      focus: 'Movement Integration and Syllable Practice',
      researchBasis: 'Vygotsky (1978) emphasized that combining movement with learning accelerates cognitive development.',
      content: {
        goal: 'Walk around and clap syllables for everything you see. Make syllable practice active and fun.',
        whatToSay: [
          '"Let\'s take a syllable walk! We\'ll find things and clap their names."',
          '"I see a pil-low. Pil (clap step) low (clap step). Two steps! Pillow."',
          '"There\'s a door (clap step). One step! Door is short."',
          '"Look, a tel-e-phone. Tel (step) e (step) phone (step). Three steps! Telephone."',
          '"What do you see? Let\'s clap and step its name together."'
        ],
        whatToDo: [
          'Walk around the room together.',
          'Point to objects.',
          'Say the name in syllables.',
          'Take one step per syllable.',
          'Clap and step at the same time.',
          'Encourage baby\'s name to join.',
          'Make it like a parade or march.',
          'Keep moving and finding new words.'
        ],
        examples: [
          'Walk to the window. Step and clap: "Win (step clap) dow (step clap). Two! Window!"',
          'March to toys. "Ted-dy (step clap step clap). Two steps! Teddy bear (step clap)! Two more!"'
        ],
        watchFor: [
          'Baby\'s name stepping and clapping together.',
          'Moving to syllable rhythms.',
          'Enjoying the parade game.',
          'Attempting to lead and find words.'
        ],
        parentTip: 'Movement makes syllables memorable. Their body learns the rhythm.',
        funTwist: 'March like soldiers for short words, dance for long words with lots of syllables.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful syllable learning',
          'You and baby\'s name clapped word parts together',
          'You clapped names and family words',
          'You broke everyday objects into syllables',
          'You marched and clapped in a syllable parade',
          'You built phonological awareness and rhythm skills'
        ],
        reviewQuestions: [
          'Could baby\'s name clap along with syllables?',
          'Did they recognize differences between short and long words?',
          'Which words did they enjoy clapping most?',
          'How engaged were they with the syllable parade?'
        ],
        parentTakeaway: {
          title: 'Syllables Build Reading',
          content: 'When baby\'s name claps syllables, they\'re learning to break words into parts. This skill is essential for reading and spelling. Children who understand syllables can tackle longer, more complex words because they know words have patterns and parts. Syllable awareness comes before letter-sound knowledge and makes phonics learning easier. Every clap builds the foundation for decoding multisyllabic words they\'ll encounter as they grow into readers.'
        },
        nextSteps: [
          'Clap syllables during everyday conversations throughout the week.',
          'Practice with meal items, toy names, clothing.',
          'Count syllables: "Does this word have more claps than that word?"',
          'Make syllable clapping part of cleanup: clap as you put things away.',
          'Add family member names, pet names, favorite character names.'
        ]
      }
    }
  ]
},

// ========= LESSON 42 =========
{
  id: 42,
  phase: '2',
  quarter: 1,
  week: 9,
  weekIndex: 8,
  dayInWeek: 2,
  title: 'Lesson 42: Rhyme Hunt Finding Rhyming Objects and Word Pairs',
  theme: 'Rhymes and Repetition',
  skillRecurrenceTags: ['rhyming', 'phonological-awareness', 'sound-matching', 'word-pairs'],
  relatedToPreviousSkills: ['rhyming', 'listening', 'sound-patterns', 'object-naming'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Rhyme Hunt Learning',
      duration: '1 min',
      content: {
        goal: 'Build rhyming skills by finding and matching objects that rhyme. Baby\'s name learns to identify rhyming pairs through play and discovery.',
        parentGuide: [
          'Finding rhyming objects makes abstract sound patterns concrete and tangible.',
          'Rhyme hunts engage multiple senses and build phonological awareness actively.',
          'This lesson continues Week 9 rhymes and repetition focus through hands-on exploration.',
          'Matching rhyming objects strengthens sound discrimination and memory.'
        ],
        materials: ['Household objects or toys that rhyme: cat/hat, bug/mug, car/star, bell/shell', 'Pictures of rhyming items if objects unavailable', 'Container or basket for collecting rhymes', 'Optional: simple rhyming picture cards'],
        tip: 'Set up rhyming pairs ahead of time. Make them easy to find and obvious at first.',
        researchNote: 'Lonigan et al. (2000) found that playful rhyme activities significantly predict later phonological awareness and reading success.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Rhyming Pairs',
      duration: '3-4 min',
      focus: 'Rhyme Recognition and Matching',
      researchBasis: 'Anthony & Francis (2005) showed that explicit rhyme instruction with concrete examples accelerates phonological development.',
      content: {
        goal: 'Show baby\'s name pairs of objects that rhyme. Help them hear and understand that these words sound the same at the end.',
        whatToSay: [
          '"Look at these two things. A cat and a hat. Cat, hat. Listen: cat, hat. They rhyme!"',
          '"Here\'s a bug and a mug. Bug, mug. Bug and mug sound the same at the end. They rhyme!"',
          '"Car, star. Car and star. Hear how they sound the same? Car, star. Rhyming words!"',
          '"Let\'s say them together. Cat, hat, cat, hat. They rhyme because they end the same."',
          '"When words rhyme, their endings sound alike. Let\'s find more rhyming things."'
        ],
        whatToDo: [
          'Place two rhyming objects in front of baby\'s name.',
          'Name them clearly, one at a time.',
          'Say them together emphasizing the rhyme.',
          'Repeat the pair several times.',
          'Let baby\'s name touch and explore the objects.',
          'Say the words again.',
          'Introduce another rhyming pair.',
          'Keep pairs simple and obvious.'
        ],
        examples: [
          'Show toy cat and small hat. "Cat. Hat. Cat, hat, cat, hat. They rhyme! Listen to the end: cat, hat."',
          'Hold mug and toy bug. "Mug. Bug. Mug and bug rhyme. Mug, bug, mug, bug. Same sound at the end!"'
        ],
        watchFor: [
          'Baby\'s name looking at both objects.',
          'Listening to the rhyming words.',
          'Attempting to say the words.',
          'Any recognition of the sound pattern.'
        ],
        parentTip: 'Physical objects make rhymes real. They can see and touch what rhymes.',
        funTwist: 'Hide one object from each pair. "I have a cat. Can you find what rhymes with cat?"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Rhyme Hunt Challenge',
      duration: '3-4 min',
      focus: 'Active Rhyme Discovery',
      researchBasis: 'Saffran et al. (1996) found that active pattern discovery strengthens auditory memory and sound recognition.',
      content: {
        goal: 'Hide rhyming objects around the room. Give baby\'s name one object and help them hunt for what rhymes with it.',
        whatToSay: [
          '"Let\'s go on a rhyme hunt! I have a cat. We need to find what rhymes with cat. Let\'s look!"',
          '"Cat rhymes with... hat! Let\'s hunt for a hat. Where could it be?"',
          '"You found the hat! Cat and hat rhyme! Let\'s put them together in our rhyme basket."',
          '"Now here\'s a star. What rhymes with star? Let\'s hunt for something that rhymes."',
          '"You\'re finding all the rhymes! Great rhyme hunting!"'
        ],
        whatToDo: [
          'Hide rhyming objects around the room before the activity.',
          'Give baby\'s name one object.',
          'Say what rhymes with it.',
          'Hunt together for the rhyming match.',
          'When found, say both words together.',
          'Put the pair in a basket or container.',
          'Give them the next object to hunt for.',
          'Continue finding all rhyming pairs.'
        ],
        examples: [
          'Hand them a toy bug. "Bug rhymes with mug. Let\'s find the mug!" Search together. Find it. "Bug, mug! Rhymes!" Put in basket.',
          'Give them a bell. "Bell rhymes with shell. Hunt for the shell!" When found: "Bell, shell! Perfect rhyme!"'
        ],
        watchFor: [
          'Baby\'s name actively searching for rhymes.',
          'Showing excitement when finding matches.',
          'Understanding they\'re looking for sound matches.',
          'Attempting to say rhyming words when found.'
        ],
        parentTip: 'Make finding the rhyme exciting. Celebrate each discovery enthusiastically.',
        funTwist: 'Give clues: "The thing that rhymes with cat is something you wear on your head!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Rhyme Sorting Game',
      duration: '2-3 min',
      focus: 'Rhyme Classification and Memory',
      researchBasis: 'Mandler & Bauer (1988) showed that sorting and classification activities strengthen concept understanding and memory.',
      content: {
        goal: 'Mix up several objects. Help baby\'s name sort them into rhyming pairs.',
        whatToSay: [
          '"Now all our things are mixed up! Let\'s match the rhymes. Can you find two things that rhyme?"',
          '"Here\'s a cat. Where\'s the hat? Find what rhymes with cat. Yes! Cat and hat go together."',
          '"Can you find two more that rhyme? Look at all these things. Which ones sound the same?"',
          '"Bug and mug! You matched a rhyme! Let\'s put them together."',
          '"We sorted all our rhymes! Every pair rhymes together."'
        ],
        whatToDo: [
          'Place several objects (4-6) mixed together.',
          'Include 2-3 rhyming pairs.',
          'Pick up one object.',
          'Ask baby\'s name to find its rhyming match.',
          'Help them search and test options.',
          'When they find a match, say both words.',
          'Place the pair together.',
          'Continue until all pairs are matched.'
        ],
        examples: [
          'Mix cat, hat, bug, mug. Pick up cat. "Find what rhymes with cat." They pick hat. "Cat, hat! Perfect!"',
          'Show star, car, bell, shell. Hold star. "What rhymes with star?" Guide to car. "Star, car! They rhyme!"'
        ],
        watchFor: [
          'Baby\'s name testing different objects.',
          'Recognizing rhyming matches.',
          'Growing independence in finding rhymes.',
          'Success in matching pairs.'
        ],
        parentTip: 'Let them make mistakes. Testing non-rhymes helps them learn what does and doesn\'t rhyme.',
        funTwist: 'Time challenge: "Can we match all the rhymes before I count to ten?"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful rhyme hunt learning',
          'You and baby\'s name found rhyming objects together',
          'You matched rhyming pairs',
          'You went on a rhyme hunt around the room',
          'You sorted objects by rhyming sounds',
          'You built phonological awareness and sound matching skills'
        ],
        reviewQuestions: [
          'Which rhyming pairs did baby\'s name identify most easily?',
          'Could they find rhyming objects during the hunt?',
          'Did they successfully sort rhymes?',
          'How engaged were they with the rhyme activities?'
        ],
        parentTakeaway: {
          title: 'Rhymes Make Sounds Real',
          content: 'When baby\'s name hunts for and matches rhyming objects, they\'re making abstract sound patterns concrete and touchable. This hands-on approach helps them truly understand what rhyming means. Finding rhymes requires listening carefully, remembering sounds, and making connections—all critical thinking skills. Every rhyming pair they match builds their ability to hear sound patterns in words, which is the foundation for learning to read and spell.'
        },
        nextSteps: [
          'Create a permanent rhyme basket with common rhyming pairs.',
          'Play rhyme hunt throughout the week with new objects.',
          'Point out rhymes during daily activities: "Sock, clock—they rhyme!"',
          'Make rhyme matching a cleanup game.',
          'Add new rhyming pairs gradually as baby\'s name masters current ones.'
        ]
      }
    }
  ]
},

// ========= LESSON 43 =========
{
  id: 43,
  phase: '2',
  quarter: 1,
  week: 9,
  weekIndex: 8,
  dayInWeek: 3,
  title: 'Lesson 43: Sing and Repeat Nursery Rhyme Practice and Memory',
  theme: 'Rhymes and Repetition',
  skillRecurrenceTags: ['rhyming', 'repetition', 'memory', 'songs', 'rhythm'],
  relatedToPreviousSkills: ['rhyming', 'sound-patterns', 'rhythm', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Nursery Rhyme Learning',
      duration: '1 min',
      content: {
        goal: 'Build phonological awareness and memory through nursery rhymes. Baby\'s name learns rhyming patterns, rhythm, and repetition through songs and verses.',
        parentGuide: [
          'Nursery rhymes are proven tools for developing phonological awareness and language.',
          'Repetition in rhymes builds memory and helps children internalize language patterns.',
          'This lesson continues Week 9 rhymes and repetition focus through traditional verses.',
          'Singing rhymes combines rhythm, rhyme, and melody for powerful learning.'
        ],
        materials: ['Your voice for singing', 'Optional: nursery rhyme book with pictures', 'Optional: simple props (toy spider, star, sheep)', 'Enthusiasm and playfulness'],
        tip: 'Choose 2-3 nursery rhymes baby\'s name has heard before. Familiar rhymes are easier to learn.',
        researchNote: 'Fernald (1989) found that musical, rhythmic speech significantly enhances attention and language learning in young children.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Sing and Emphasize Rhymes',
      duration: '3-4 min',
      focus: 'Rhyme Recognition in Songs',
      researchBasis: 'Trainor et al. (2005) showed that musical activities strengthen phonological awareness and auditory processing.',
      content: {
        goal: 'Sing familiar nursery rhymes and emphasize the rhyming words. Help baby\'s name hear the rhyming patterns.',
        whatToSay: [
          '"Let\'s sing Twinkle Twinkle Little Star. Listen for the rhyming words."',
          '"Twinkle twinkle little star, how I wonder what you ARE. Star, are. They rhyme!"',
          '"Baa baa black sheep, have you any WOOL? Yes sir, yes sir, three bags FULL. Wool, full!"',
          '"Jack and Jill went up the HILL. To fetch a pail of water. Jack fell DOWN and broke his CROWN. Down, crown!"',
          '"Did you hear the rhymes? Let\'s sing again and listen for them."'
        ],
        whatToDo: [
          'Choose a familiar nursery rhyme.',
          'Sing it through once normally.',
          'Sing it again emphasizing rhyming words.',
          'Point out each rhyming pair.',
          'Repeat the rhyming words.',
          'Sing the verse multiple times.',
          'Encourage baby\'s name to sing along.',
          'Try another rhyme.'
        ],
        examples: [
          'Sing "Humpty Dumpty sat on a WALL, Humpty Dumpty had a great FALL." Stop. "Wall, fall! They rhyme! Wall, fall, wall, fall."',
          'Sing "Mary had a little LAMB, its fleece was white as SNOW." Emphasize: "Lamb, snow don\'t rhyme, but listen..." Continue to "everywhere that Mary WENT, the lamb was sure to GO. Went, go!"'
        ],
        watchFor: [
          'Baby\'s name listening to the rhymes.',
          'Attempting to sing along.',
          'Reacting to emphasized rhyming words.',
          'Showing enjoyment of the songs.'
        ],
        parentTip: 'Make rhyming words louder or in a silly voice. Make them stand out.',
        funTwist: 'Pause before rhyming words and let baby\'s name fill them in: "Twinkle twinkle little... STAR!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Add Movements to Rhymes',
      duration: '3-4 min',
      focus: 'Multi-Sensory Rhyme Learning',
      researchBasis: 'Vygotsky (1978) emphasized that combining movement with language creates deeper learning and retention.',
      content: {
        goal: 'Add movements and actions to nursery rhymes. Make rhymes physical and memorable through motion.',
        whatToSay: [
          '"Let\'s do Itsy Bitsy Spider with our hands. Watch me, then you try."',
          '"The itsy bitsy spider went up the water spout. Make your fingers climb!"',
          '"Down came the rain. Wiggle fingers down like rain."',
          '"Out came the sun. Make a big sun circle with your arms."',
          '"Let\'s do it again with the movements and singing together!"'
        ],
        whatToDo: [
          'Choose a rhyme with traditional movements.',
          'Demonstrate the actions slowly.',
          'Sing and do movements together.',
          'Repeat several times.',
          'Encourage baby\'s name to copy movements.',
          'Celebrate their attempts.',
          'Try movements for other rhymes.',
          'Keep it fun and active.'
        ],
        examples: [
          'Twinkle Twinkle: Open and close hands for twinkling. Point up for star. Make diamond shape with fingers.',
          'Pat-a-Cake: Clap hands. Roll hands. Pat baby\'s name\'s hands. Mark with "B" in air.'
        ],
        watchFor: [
          'Baby\'s name attempting movements.',
          'Coordinating movements with words.',
          'Remembering action sequences.',
          'Engagement with physical rhymes.'
        ],
        parentTip: 'Movements make rhymes unforgettable. Their body learns the pattern.',
        funTwist: 'Make up silly new movements for familiar rhymes. "What if the spider danced up the spout?"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Rhyme Repetition Game',
      duration: '2-3 min',
      focus: 'Memory and Pattern Recognition',
      researchBasis: 'Saffran et al. (1996) found that repetition and pattern exposure strengthen auditory memory and language learning.',
      content: {
        goal: 'Repeat favorite rhymes multiple times. Build memory and let baby\'s name anticipate and join in.',
        whatToSay: [
          '"Let\'s sing Twinkle Twinkle three times! Can you help me count? One, two, three!"',
          '"First time: Twinkle twinkle little star..." (sing through)',
          '"Second time! You sing louder this time. Twinkle twinkle..." (encourage participation)',
          '"Third time! Let\'s sing it really loud together! Twinkle twinkle..."',
          '"We sang it three times! You know it so well now!"'
        ],
        whatToDo: [
          'Pick baby\'s name\'s favorite rhyme from this session.',
          'Announce you\'ll sing it multiple times.',
          'Sing it the first time together.',
          'Sing it again encouraging more participation.',
          'Sing it a third time with full energy.',
          'Celebrate their growing confidence.',
          'Try another rhyme with repetitions.',
          'Make repetition feel like a game, not drill.'
        ],
        examples: [
          'Sing "Baa Baa Black Sheep" three times. First time normal. Second time clap along. Third time with sheep sounds added.',
          'Repeat "Row Row Row Your Boat" with increasing speed each time. Slow, medium, fast versions.'
        ],
        watchFor: [
          'Baby\'s name participating more with each repetition.',
          'Anticipating words or movements.',
          'Singing or saying more words.',
          'Growing confidence and enjoyment.'
        ],
        parentTip: 'Repetition builds mastery. Each time through, they learn more and remember more.',
        funTwist: 'Change something each repetition: volume (loud, soft, whisper), speed (slow, fast), voice (silly, normal).'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful nursery rhyme learning',
          'You and baby\'s name sang rhymes together',
          'You found rhyming words in songs',
          'You added movements to rhymes',
          'You repeated rhymes and built memory',
          'You practiced rhythm, rhyme, and language patterns'
        ],
        reviewQuestions: [
          'Which nursery rhyme did baby\'s name enjoy most?',
          'Could they participate in movements or words?',
          'Did they anticipate rhyming words or phrases?',
          'How engaged were they with repetition?'
        ],
        parentTakeaway: {
          title: 'Rhymes Build Language',
          content: 'Nursery rhymes are powerful learning tools. When baby\'s name sings rhymes, they\'re learning vocabulary, grammar patterns, rhythm, and phonological awareness all at once. The repetition in rhymes helps children memorize language structures and sound patterns. Research shows that children who know nursery rhymes become better readers because rhymes teach them to hear sounds in words. Every rhyme you sing together builds language skills in multiple ways simultaneously.'
        },
        nextSteps: [
          'Sing nursery rhymes daily throughout the week.',
          'Add one new rhyme while practicing familiar ones.',
          'Do rhyme movements during transitions or waiting times.',
          'Point out rhymes in the songs you sing.',
          'Make a bedtime routine of singing rhymes together.'
        ]
      }
    }
  ]
},

// ========= LESSON 44 =========
{
  id: 44,
  phase: '2',
  quarter: 1,
  week: 9,
  weekIndex: 8,
  dayInWeek: 4,
  title: 'Lesson 44: Rhyme Box Collecting and Creating Rhyming Sets',
  theme: 'Rhymes and Repetition',
  skillRecurrenceTags: ['rhyming', 'collection', 'word-families', 'sound-patterns'],
  relatedToPreviousSkills: ['rhyming', 'object-naming', 'matching', 'sorting'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Rhyme Collection Learning',
      duration: '1 min',
      content: {
        goal: 'Build rhyming awareness by creating collections of rhyming items. Baby\'s name learns that multiple words can share the same ending sound.',
        parentGuide: [
          'Collecting rhyming items makes phonological awareness concrete and organized.',
          'Creating rhyme families teaches that sounds follow patterns and rules.',
          'This lesson continues Week 9 rhymes and repetition focus through collection building.',
          'Understanding that multiple words share sounds prepares children for word families in reading.'
        ],
        materials: ['Small box or container for rhyme collection', 'Household items or toys that rhyme', 'Pictures of rhyming items', 'Optional: labels or tags for the box'],
        tip: 'Start with one rhyme family like -at words: cat, hat, mat, bat. Keep it focused.',
        researchNote: 'Anthony & Francis (2005) found that organizing words by sound patterns significantly accelerates phonological development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Start a Rhyme Family Collection',
      duration: '3-4 min',
      focus: 'Word Family Recognition',
      researchBasis: 'Ehri (2005) showed that recognizing word families and patterns is essential for early reading development.',
      content: {
        goal: 'Choose one rhyme ending and collect everything that rhymes with it. Build a focused rhyme family set.',
        whatToSay: [
          '"Let\'s make a rhyme box! We\'ll collect things that rhyme with cat. What rhymes with cat?"',
          '"Hat rhymes with cat! Let\'s put the hat in our rhyme box. Cat, hat."',
          '"What else rhymes with cat? Mat! A mat rhymes with cat. Into the box!"',
          '"Can we find more? Bat! A toy bat rhymes with cat. Cat, hat, mat, bat!"',
          '"Look at all our rhyming things! They all end with the same sound: at. Cat, hat, mat, bat!"'
        ],
        whatToDo: [
          'Show baby\'s name the rhyme box.',
          'Say the target word clearly (cat).',
          'Find or show a rhyming object (hat).',
          'Say both words emphasizing the rhyme.',
          'Put the rhyming object in the box.',
          'Continue finding rhyming items.',
          'Periodically review all items in the box.',
          'Celebrate each addition to the collection.'
        ],
        examples: [
          'Target: cat. Collect: hat, mat, toy bat. Say each: "Cat, hat. Cat, mat. Cat, bat. All rhyme!"',
          'Target: dog. Collect: frog toy, log picture, toy hog. "Dog, frog, log, hog. They all rhyme!"'
        ],
        watchFor: [
          'Baby\'s name understanding the rhyme pattern.',
          'Helping find or point to rhyming items.',
          'Attempting to say rhyming words.',
          'Excitement about building the collection.'
        ],
        parentTip: 'Use real objects when possible. Physical items make rhymes more concrete and memorable.',
        funTwist: 'Decorate the box together and label it: "The -at Box" or "Cat\'s Rhyme Friends."'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Test the Rhyme Box',
      duration: '3-4 min',
      focus: 'Rhyme Discrimination and Sorting',
      researchBasis: 'Mandler & Bauer (1988) found that classification activities strengthen concept understanding and critical thinking.',
      content: {
        goal: 'Show baby\'s name various items. They decide which ones belong in the rhyme box and which don\'t.',
        whatToSay: [
          '"This is our cat rhyme box. Only things that rhyme with cat go in here. Let\'s test some things!"',
          '"Here\'s a hat. Does hat rhyme with cat? Yes! Hat goes in the box."',
          '"Here\'s a cup. Does cup rhyme with cat? No! Cup doesn\'t rhyme. It stays out."',
          '"What about this mat? Mat, cat. Does it rhyme? Yes! Mat goes in the rhyme box."',
          '"You\'re a great rhyme tester! You know what belongs and what doesn\'t!"'
        ],
        whatToDo: [
          'Show baby\'s name an object.',
          'Say its name clearly.',
          'Ask if it rhymes with the target word.',
          'Say both words together.',
          'Help them decide: rhyme or no rhyme.',
          'If it rhymes, put it in the box.',
          'If not, set it aside.',
          'Continue testing multiple items.'
        ],
        examples: [
          'Show: hat (rhymes with cat - in box), cup (doesn\'t rhyme - out), rat (rhymes - in), book (doesn\'t - out).',
          'Test: "Bat? Bat, cat. Rhymes! In. Dog? Dog, cat. No rhyme. Out. Mat? Mat, cat. Rhymes! In."'
        ],
        watchFor: [
          'Baby\'s name testing words by saying them.',
          'Making decisions about rhyming.',
          'Understanding the sorting criteria.',
          'Growing confidence in rhyme recognition.'
        ],
        parentTip: 'Include some non-rhymes. Testing both teaches them what rhyming really means.',
        funTwist: 'Make wrong guesses on purpose: "Does elephant rhyme with cat? No! That\'s silly!" Make them correct you.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Rhyme Box Parade',
      duration: '2-3 min',
      focus: 'Memory and Pattern Reinforcement',
      researchBasis: 'Vygotsky (1978) emphasized that playful review with movement strengthens learning and retention.',
      content: {
        goal: 'Take out each rhyme box item and say its name in a parade. Reinforce the rhyme family pattern.',
        whatToSay: [
          '"Let\'s have a rhyme parade! We\'ll take out each thing and say its name."',
          '"First, the cat! Cat is our main rhymer. Cat says meow!"',
          '"Next, the hat! Hat rhymes with cat. We wear hats on our heads."',
          '"Here comes the mat! Mat rhymes with cat. We stand on mats."',
          '"And the bat! Bat rhymes with cat. Bat goes swoosh!"',
          '"All these things rhyme: cat, hat, mat, bat! They all say -at at the end!"'
        ],
        whatToDo: [
          'Empty the rhyme box one item at a time.',
          'Hold up each item.',
          'Say its name clearly.',
          'Make an action or sound for it.',
          'March around with it.',
          'Place it in a line.',
          'When all items are out, say all names in order.',
          'Emphasize the shared rhyming sound.'
        ],
        examples: [
          'Parade items: Hold up cat, march. Hold up hat, march. Hold up mat, march. Line them up. "Cat, hat, mat. All -at!"',
          'March with each: "Cat on parade! Hat on parade! Mat on parade! They all rhyme and they all say -at!"'
        ],
        watchFor: [
          'Baby\'s name participating in the parade.',
          'Attempting to name items.',
          'Recognizing the pattern across all items.',
          'Enjoyment of the review activity.'
        ],
        parentTip: 'The parade makes reviewing fun instead of repetitive. Movement keeps engagement high.',
        funTwist: 'March to a rhythm or song: "This is a cat (march march), rhymes with hat (march march), mat (march march), bat (march march)!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful rhyme collection learning',
          'You and baby\'s name created a rhyme box together',
          'You collected items from one rhyme family',
          'You tested what belongs and what doesn\'t',
          'You had a rhyme parade reviewing all items',
          'You built understanding of sound patterns and word families'
        ],
        reviewQuestions: [
          'Did baby\'s name understand the rhyme family pattern?',
          'Could they identify rhyming items to add?',
          'Did they successfully test rhymes and non-rhymes?',
          'How engaged were they with collecting and sorting?'
        ],
        parentTakeaway: {
          title: 'Patterns Prepare for Reading',
          content: 'When baby\'s name collects rhyming items in families, they\'re learning that language follows patterns. Understanding that cat, hat, mat, and bat all share the same ending sound prepares them for word families in reading. Later, when they learn that "c-at" makes cat, they\'ll instantly know how to read hat, mat, and bat. These rhyme families become reading families. Every rhyming pattern they collect now becomes a group of words they\'ll read easily later.'
        },
        nextSteps: [
          'Keep the rhyme box accessible for play throughout the week.',
          'Add new rhyming items as you find them.',
          'Start a second rhyme box with a new family (-og, -an, -it).',
          'Review the rhyme box daily naming all items.',
          'Let baby\'s name teach someone else about their rhyme collection.'
        ]
      }
    }
  ]
},

// ========= LESSON 45 =========
{
  id: 45,
  phase: '2',
  quarter: 1,
  week: 9,
  weekIndex: 8,
  dayInWeek: 5,
  title: 'Lesson 45: Story Rhyme Play Interactive Reading with Rhyme Completion',
  theme: 'Rhymes and Repetition',
  skillRecurrenceTags: ['rhyming', 'story-comprehension', 'prediction', 'interactive-reading'],
  relatedToPreviousSkills: ['rhyming', 'book-awareness', 'listening', 'fill-in'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Rhyme Learning',
      duration: '1 min',
      content: {
        goal: 'Build rhyme prediction and comprehension by completing rhymes in story books. Baby\'s name learns to anticipate and fill in rhyming words during reading.',
        parentGuide: [
          'Predicting rhymes in stories builds both phonological awareness and comprehension.',
          'Fill-in activities make reading interactive and engaging for toddlers.',
          'This lesson completes Week 9 rhymes and repetition focus through story integration.',
          'Anticipating rhyming words teaches prediction skills essential for reading.'
        ],
        materials: ['Rhyming picture books with predictable patterns', 'Books baby\'s name has heard before', 'Optional: props or toys from the stories', 'Enthusiasm and playful pauses'],
        tip: 'Choose books with strong, obvious rhymes and repetitive patterns. Familiar books work best.',
        researchNote: 'Whitehurst & Lonigan (1998) found that interactive reading with fill-in activities significantly enhances emergent literacy skills.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Pause and Fill Rhyming Words',
      duration: '3-4 min',
      focus: 'Rhyme Prediction and Active Participation',
      researchBasis: 'Fernald & Kuhl (1987) showed that pauses for participation increase attention and language processing.',
      content: {
        goal: 'Read rhyming stories but pause before rhyming words. Let baby\'s name try to fill them in.',
        whatToSay: [
          '"Let\'s read this story together. When I stop, you help me say the word. Ready?"',
          '"The cat sat on the... (pause and point to baby\'s name) MAT! You said it! Mat!"',
          '"I see a bug in the... (pause) MUG! Great rhyming!"',
          '"Twinkle twinkle little... (wait) STAR! You knew the rhyme!"',
          '"You\'re helping me read by filling in the rhyming words!"'
        ],
        whatToDo: [
          'Begin reading a rhyming book.',
          'When you approach a rhyming word, pause.',
          'Look at baby\'s name expectantly.',
          'Point to the picture if it helps.',
          'Give them 2-3 seconds to try.',
          'Say the word together whether they got it or not.',
          'Celebrate their attempt.',
          'Continue reading and repeat.'
        ],
        examples: [
          'Read: "The mouse ran through the... (pause, point to picture of house)." Baby tries "house!" "Yes! House! Mouse, house!"',
          'Story: "I love you to the moon and... (pause)." Wait. They may try "back!" "Back! Moon and back! Great!"'
        ],
        watchFor: [
          'Baby\'s name anticipating the pause.',
          'Attempting to say the rhyming word.',
          'Looking at pictures for clues.',
          'Growing confidence with each attempt.'
        ],
        parentTip: 'Pause dramatically. Make it clear you\'re waiting for their help. Build suspense.',
        funTwist: 'Give wrong silly answers first: "The cat sat on the... elephant? No! What is it?" Let them correct you.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Rhyme Choice Game',
      duration: '3-4 min',
      focus: 'Rhyme Recognition and Decision Making',
      researchBasis: 'Lonigan et al. (2000) found that choice-based rhyme activities strengthen phonological awareness and engagement.',
      content: {
        goal: 'Pause before rhyming words and offer two choices. Baby\'s name picks which word rhymes.',
        whatToSay: [
          '"The dog sat on a log. Now listen: The frog sat on a... Is it log or cup?"',
          '"Which one rhymes with frog? Log or cup? Point to your choice."',
          '"Log! Yes! Frog and log rhyme! Great choosing!"',
          '"Here\'s another: Hickory dickory dock, the mouse ran up the... Is it clock or tree?"',
          '"Clock! You picked the rhyme! Dock, clock. They rhyme perfectly!"'
        ],
        whatToDo: [
          'Read a line with a rhyme.',
          'Start the next rhyming line.',
          'Pause before the rhyming word.',
          'Offer two choices: one that rhymes, one that doesn\'t.',
          'Let baby\'s name choose.',
          'If they\'re unsure, say both options with the first word.',
          'Celebrate the correct rhyming choice.',
          'Continue with more choices.'
        ],
        examples: [
          'Read: "I see a bee in a... tree or car?" Test: "Bee, tree. Bee, car. Which rhymes?" They choose tree. "Tree! Bee and tree!"',
          'Story: "The sheep went to... sleep or run?" Say: "Sheep, sleep? Sheep, run? Which?" They pick sleep. "Sheep, sleep! Rhymes!"'
        ],
        watchFor: [
          'Baby\'s name testing both options.',
          'Choosing the rhyming word.',
          'Understanding the difference.',
          'Success in identifying rhymes.'
        ],
        parentTip: 'Make the non-rhyming choice obviously different. Start easy, then challenge more.',
        funTwist: 'Sometimes offer two rhyming choices: "Cat sat on a... hat or mat?" Both work! Celebrate either.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Create Story Rhymes Together',
      duration: '2-3 min',
      focus: 'Creative Rhyming and Expression',
      researchBasis: 'Vygotsky (1978) showed that creative language play with guidance builds linguistic flexibility and confidence.',
      content: {
        goal: 'Make up simple rhyming sentences together. Baby\'s name contributes rhyming words to create a story.',
        whatToSay: [
          '"Let\'s make our own rhyming story! I\'ll start: There once was a cat. What rhymes with cat?"',
          '"Hat! Good! There once was a cat who wore a hat. Now what?"',
          '"The cat in the hat sat on a... what rhymes? Mat! On a mat!"',
          '"Our story: A cat wore a hat and sat on a mat. Let\'s say it together!"',
          '"We made a rhyming story! Let\'s make another one!"'
        ],
        whatToDo: [
          'Start a simple sentence with a rhyming word.',
          'Ask baby\'s name for a word that rhymes.',
          'Accept their suggestion or offer options.',
          'Build the next sentence using the rhyme.',
          'Keep sentences very simple.',
          'Repeat the growing story.',
          'Act it out if possible.',
          'Celebrate your created rhyme story.'
        ],
        examples: [
          'Start: "I see a dog." Ask: "What rhymes with dog?" They say "frog!" "I see a dog and a frog. The dog and frog jump on a... log!" Build together.',
          'Begin: "There is a bug." "What rhymes?" "Mug!" "A bug in a mug. The bug gave a... hug!" Keep adding rhymes.'
        ],
        watchFor: [
          'Baby\'s name suggesting rhyming words.',
          'Excitement about creating together.',
          'Attempting to repeat the growing story.',
          'Understanding they\'re building something.'
        ],
        parentTip: 'Accept any rhyme they offer and work it into the story. Their ideas drive the creation.',
        funTwist: 'Draw pictures of your rhyming story as you create it. Make it visual and memorable.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful story rhyme learning',
          'You and baby\'s name filled in rhyming words together',
          'You chose rhyming words from options',
          'You created your own rhyming story',
          'You practiced prediction and creative rhyming',
          'You built interactive reading and phonological skills'
        ],
        reviewQuestions: [
          'Could baby\'s name fill in rhyming words from stories?',
          'Did they successfully choose rhymes from options?',
          'Were they engaged in creating rhyming stories?',
          'How confident did they seem with rhyming?'
        ],
        parentTakeaway: {
          title: 'Predicting Builds Readers',
          content: 'When baby\'s name fills in rhyming words while you read, they\'re learning that reading is predictable and makes sense. Anticipating what comes next is a crucial reading comprehension skill. Children who can predict rhymes understand patterns and use context clues—exactly what good readers do. Creating their own rhymes shows they\'ve internalized sound patterns and can use them creatively. This is active, thinking engagement with language that builds strong literacy foundations.'
        },
        nextSteps: [
          'Pause for rhymes in every rhyming book you read this week.',
          'Let baby\'s name fill in familiar rhymes throughout the day.',
          'Make up silly rhyming sentences during playtime.',
          'Revisit favorite rhyming books and let them "read" the rhymes.',
          'Point out when they spontaneously use rhyming words in conversation.'
        ]
      }
    }
  ]
},

// ========= LESSON 46 =========
{
  id: 46,
  phase: '2',
  quarter: 1,
  week: 10,
  weekIndex: 9,
  dayInWeek: 1,
  title: 'Lesson 46: Echo Words Story Listening and Key Word Repetition',
  theme: 'Listening Comprehension',
  skillRecurrenceTags: ['listening-comprehension', 'word-repetition', 'memory', 'story-engagement'],
  relatedToPreviousSkills: ['listening', 'imitation', 'book-awareness', 'vocabulary'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Echo Word Learning',
      duration: '1 min',
      content: {
        goal: 'Build listening comprehension and vocabulary by echoing key words from stories. Baby\'s name learns to listen carefully and repeat important words.',
        parentGuide: [
          'Echoing key words strengthens listening attention and word recognition.',
          'Repetition during reading builds vocabulary and memory.',
          'This lesson begins Week 10 focus on listening comprehension through active participation.',
          'Echo activities teach children to identify and remember important story elements.'
        ],
        materials: ['Simple story books with clear plots', 'Books with repetitive key words', 'Your expressive voice', 'Optional: props or toys related to story words'],
        tip: 'Choose 3-4 key words per story to echo. Too many words becomes overwhelming.',
        researchNote: 'Weisleder & Fernald (2013) found that word repetition during reading significantly accelerates vocabulary acquisition and retention.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Identify and Echo Key Words',
      duration: '3-4 min',
      focus: 'Selective Listening and Word Recognition',
      researchBasis: 'Rowe (2012) showed that emphasizing and repeating key vocabulary during reading accelerates language development.',
      content: {
        goal: 'Read a story and emphasize certain key words. Baby\'s name echoes these words back after you say them.',
        whatToSay: [
          '"I\'m going to read you a story. When I say special words loudly, you echo them back. Ready?"',
          '"The DOG walked down the street. Say it: dog. Dog!"',
          '"He saw a big TREE. Echo: tree. Tree!"',
          '"The dog climbed the TREE. Say tree again. Tree!"',
          '"You\'re echoing the important words! Great listening!"'
        ],
        whatToDo: [
          'Begin reading a simple story.',
          'Choose 3-4 important nouns or action words.',
          'Say these words louder or with emphasis.',
          'Pause after the key word.',
          'Encourage baby\'s name to echo it.',
          'Celebrate their repetition.',
          'Continue reading.',
          'Repeat key words multiple times in the story.'
        ],
        examples: [
          'Story about a cat. Emphasize: CAT, MILK, SLEEP. "The CAT (pause) drank MILK (pause) then went to SLEEP (pause)." Baby echoes each.',
          'Story about playing. Emphasize: BALL, THROW, CATCH. "They THROW (pause) the BALL (pause) and CATCH (pause) it." Echo each word.'
        ],
        watchFor: [
          'Baby\'s name listening for emphasized words.',
          'Attempting to echo immediately.',
          'Recognizing repeated key words.',
          'Growing confidence with each echo.'
        ],
        parentTip: 'Make key words stand out. Use different tone, volume, or pace to signal them.',
        funTwist: 'Use silly voices for key words: high voice for "mouse," deep voice for "bear."'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Find the Echo Words',
      duration: '3-4 min',
      focus: 'Memory and Word Recall',
      researchBasis: 'Diamond (1990) found that memory retrieval activities strengthen cognitive processing and retention.',
      content: {
        goal: 'After reading, ask baby\'s name to remember and repeat the key words from the story.',
        whatToSay: [
          '"We just read a story. Do you remember the special words we echoed?"',
          '"What animal was in the story? Can you say it? Dog! Yes, dog!"',
          '"What did the dog see? It was big and green. Tree! Good memory!"',
          '"What else do you remember from the story? Any words we said together?"',
          '"You remembered the important words! Great listening and memory!"'
        ],
        whatToDo: [
          'Close the book or put it down.',
          'Ask about key words from the story.',
          'Give clues if needed.',
          'Celebrate any word they remember.',
          'Say the words together again.',
          'Point to pictures if the book is available.',
          'Review all key words from the story.',
          'Connect words to story events.'
        ],
        examples: [
          'After story: "What did we see in the story? Remember the words?" Clue: "It says meow." "Cat! Yes! What else?" "It drank something white." "Milk!"',
          'Recall: "The story had animals. Which ones?" Help: "One says woof." "Dog!" "One says ribbit." "Frog!" Review: "Dog and frog!"'
        ],
        watchFor: [
          'Baby\'s name attempting to recall words.',
          'Using clues to remember.',
          'Showing recognition when reminded.',
          'Pride in remembering story words.'
        ],
        parentTip: 'Clues help without giving away answers. Support their memory retrieval process.',
        funTwist: 'Act out the words as you recall: "What did the bird do? It... (flap arms)." They say "fly!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Echo Word Story Retell',
      duration: '2-3 min',
      focus: 'Comprehension and Sequencing',
      researchBasis: 'Mandler & Bauer (1988) showed that retelling with key vocabulary strengthens story comprehension and memory.',
      content: {
        goal: 'Retell the story together using only the echo words. Build comprehension through simplified retelling.',
        whatToSay: [
          '"Let\'s tell the story again using just our special words. Listen."',
          '"Dog. Tree. Climb. Sleep. That\'s our story! The dog climbed a tree and went to sleep."',
          '"Now you help me. What was first? Dog! Then? Tree! Then? Climb! Last? Sleep!"',
          '"We told the whole story with just four words! You remembered it!"',
          '"Let\'s say all our story words together: dog, tree, climb, sleep!"'
        ],
        whatToDo: [
          'List the key words in story order.',
          'Say each word with baby\'s name.',
          'Connect words to story events briefly.',
          'Ask baby\'s name to say words in order.',
          'Help with prompts if needed.',
          'Celebrate their retelling.',
          'Repeat the word sequence together.',
          'Optional: act out the word sequence.'
        ],
        examples: [
          'Story words: cat, hungry, eat, happy. Retell: "Cat was hungry, cat eat, cat happy! That was our story!" Do it together.',
          'Key words: bird, fly, nest, eggs. Sequence: "Bird fly to nest. Nest has eggs. The end!" Say all words together in order.'
        ],
        watchFor: [
          'Baby\'s name following the word sequence.',
          'Connecting words to story meaning.',
          'Attempting to say words in order.',
          'Understanding the simplified retelling.'
        ],
        parentTip: 'Simplified retelling with key words helps them grasp story structure and sequence.',
        funTwist: 'Make it a chant or song: "Dog and tree and climb and sleep, that\'s the story we will keep!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful echo word learning',
          'You and baby\'s name echoed key story words together',
          'You identified and repeated important vocabulary',
          'You remembered words after reading',
          'You retold stories using echo words',
          'You built listening comprehension and memory skills'
        ],
        reviewQuestions: [
          'Could baby\'s name echo key words during reading?',
          'Did they remember words after the story?',
          'Were they able to use words to retell the story?',
          'How engaged were they with the echo activities?'
        ],
        parentTakeaway: {
          title: 'Repetition Builds Vocabulary',
          content: 'When baby\'s name echoes key words during stories, they\'re not just repeating—they\'re learning and remembering vocabulary. Repetition is how new words move from hearing to understanding to using. Echo activities teach children to pay attention to important words and remember them. This active listening and repetition builds both vocabulary and comprehension. Children learn that stories contain important words worth remembering, which is the foundation of reading for meaning.'
        },
        nextSteps: [
          'Choose 3-4 key words to echo in every story this week.',
          'Review echo words after each reading session.',
          'Use echo words in play: "Remember the dog from the story?"',
          'Let baby\'s name choose which words to echo.',
          'Practice echo words with gestures or actions for deeper memory.'
        ]
      }
    }
  ]
},

// ========= LESSON 47 =========
{
  id: 47,
  phase: '2',
  quarter: 1,
  week: 10,
  weekIndex: 9,
  dayInWeek: 2,
  title: 'Lesson 47: Who Said It Character Voice Recognition and Identification',
  theme: 'Listening Comprehension',
  skillRecurrenceTags: ['listening-comprehension', 'character-recognition', 'voice-identification', 'story-engagement'],
  relatedToPreviousSkills: ['character-voices', 'listening', 'story-comprehension', 'sound-identification'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Character Voice Learning',
      duration: '1 min',
      content: {
        goal: 'Build listening comprehension by identifying characters by their voices and sounds. Baby\'s name learns to distinguish and recognize different character voices in stories.',
        parentGuide: [
          'Identifying characters by voice builds auditory discrimination and comprehension.',
          'Voice recognition teaches children to follow multiple story elements simultaneously.',
          'This lesson continues Week 10 listening comprehension focus through character work.',
          'Understanding who is speaking is essential for story comprehension and dialogue.'
        ],
        materials: ['Story books with multiple characters', 'Books with animal characters or distinct personalities', 'Your voice for different characters', 'Optional: character toys or puppets'],
        tip: 'Use very distinct voices for each character. Make them obviously different.',
        researchNote: 'Fernald (1989) found that varied vocal expressions enhance attention and help children distinguish story elements.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Introduce Character Voices',
      duration: '3-4 min',
      focus: 'Voice Recognition and Character Association',
      researchBasis: 'Tomasello (2003) showed that social cues like voice help children understand and remember story characters.',
      content: {
        goal: 'Read a story using distinct voices for each character. Help baby\'s name connect voices to characters.',
        whatToSay: [
          '"This story has three characters. Let me show you their voices."',
          '"This is the bear. The bear has a big, low voice. Hello, I\'m Bear. (deep voice)"',
          '"This is the mouse. The mouse has a tiny, high voice. Hi, I\'m Mouse! (squeaky voice)"',
          '"This is the bird. The bird has a chirpy voice. Tweet tweet, I\'m Bird! (light voice)"',
          '"Now when I read, listen for each voice. Can you tell who is talking?"'
        ],
        whatToDo: [
          'Show the book and point to each character.',
          'Demonstrate each character\'s voice.',
          'Make voices very distinct and consistent.',
          'Let baby\'s name hear each voice multiple times.',
          'Begin reading using the different voices.',
          'Point to characters as they speak.',
          'Pause to identify voices.',
          'Ask "who said that?" after dialogue.'
        ],
        examples: [
          'Story with dog, cat, cow. Dog: normal voice "woof woof." Cat: higher voice "meow." Cow: deep slow voice "moooo." Use consistently.',
          'Three Little Pigs: Pig 1 high voice, Pig 2 medium voice, Pig 3 lower voice. Wolf: growly deep voice. Keep distinct throughout.'
        ],
        watchFor: [
          'Baby\'s name listening to different voices.',
          'Looking at characters when they speak.',
          'Reacting to voice changes.',
          'Attempting to identify characters by voice.'
        ],
        parentTip: 'Exaggerate voices dramatically. The more different they are, the easier to distinguish.',
        funTwist: 'Let baby\'s name try each character voice with you. Practice together before reading.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Who Said It Game',
      duration: '3-4 min',
      focus: 'Voice Identification and Listening Discrimination',
      researchBasis: 'Saffran et al. (1996) found that auditory discrimination activities strengthen pattern recognition and attention.',
      content: {
        goal: 'Read dialogue in character voices and ask baby\'s name to identify who spoke. Build voice recognition skills.',
        whatToSay: [
          '"Listen to this. (Deep voice) I am hungry. Who said that? Was it the bear or the mouse?"',
          '"The bear! Yes! The bear has the big voice. (Deep) I am hungry."',
          '"Now listen. (Squeaky) I want cheese! Who said that? The mouse or the bird?"',
          '"The mouse! Right! The mouse has the tiny voice. (Squeaky) I want cheese!"',
          '"You\'re so good at knowing who is talking!"'
        ],
        whatToDo: [
          'Read a line of dialogue in character voice.',
          'Immediately ask who said it.',
          'Give two character options.',
          'Point to the characters as options.',
          'Let baby\'s name point or answer.',
          'Confirm and repeat in that voice.',
          'Continue with more dialogue.',
          'Mix up which character speaks.'
        ],
        examples: [
          'Use bear voice: "I see a tree." Ask: "Who said that? Bear or mouse?" They point to bear. "Bear! (Deep voice) I see a tree."',
          'Use cat voice: "Meow, I\'m sleepy." Ask: "Who talked? Cat or dog?" They choose cat. "Cat! (High) Meow, I\'m sleepy."'
        ],
        watchFor: [
          'Baby\'s name listening carefully to voices.',
          'Correctly identifying speakers.',
          'Using voice clues to decide.',
          'Growing confidence with each identification.'
        ],
        parentTip: 'If they\'re unsure, do both voices and ask again: "Is this bear voice or mouse voice?"',
        funTwist: 'Make it trickier: use the wrong character voice on purpose and let them correct you.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Character Conversation Game',
      duration: '2-3 min',
      focus: 'Dialogue Comprehension and Interactive Play',
      researchBasis: 'Vygotsky (1978) emphasized that interactive dialogue play builds language understanding and social skills.',
      content: {
        goal: 'Have a conversation between characters using distinct voices. Baby\'s name helps or responds as one character.',
        whatToSay: [
          '"Let\'s make the characters talk to each other. I\'ll be the bear, you be the mouse!"',
          '"(Bear voice) Hello, little mouse! Now you say something in mouse voice."',
          '"(Help if needed: Say hi back in your squeaky mouse voice!)"',
          '"(Bear voice) What are you doing, mouse? (Mouse voice) I\'m eating cheese!"',
          '"We\'re having a character conversation! They\'re talking to each other!"'
        ],
        whatToDo: [
          'Choose two characters from the story.',
          'Assign one character to baby\'s name.',
          'Start a simple conversation in your character voice.',
          'Encourage baby\'s name to respond in their character voice.',
          'Help them if needed.',
          'Keep exchanges simple and short.',
          'Continue the conversation for 4-5 turns.',
          'Celebrate their participation.'
        ],
        examples: [
          'You\'re dog (normal): "Hi cat!" Help them be cat (high): "Hi dog!" You: "Want to play?" Them: "Yes!" Back and forth.',
          'You\'re bird (chirpy): "Where are you going?" They\'re frog (croaky): "To the pond!" You: "Can I come?" Them: "Yes!"'
        ],
        watchFor: [
          'Baby\'s name attempting character voice.',
          'Responding in conversation.',
          'Understanding back-and-forth dialogue.',
          'Enjoying the character play.'
        ],
        parentTip: 'Accept any voice they use. The effort to use a different voice is what matters.',
        funTwist: 'Switch characters mid-conversation: "Now you be the bear and I\'ll be the mouse!"'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful character voice learning',
          'You and baby\'s name identified characters by voice',
          'You used distinct voices for different characters',
          'You played who said it games',
          'You had character conversations together',
          'You built listening comprehension and voice recognition skills'
        ],
        reviewQuestions: [
          'Could baby\'s name identify characters by voice?',
          'Did they distinguish between different character voices?',
          'Were they able to participate in character dialogue?',
          'How engaged were they with voice recognition games?'
        ],
        parentTakeaway: {
          title: 'Voices Build Comprehension',
          content: 'When baby\'s name learns to identify characters by voice, they\'re building critical comprehension skills. Understanding who is speaking helps them follow complex stories with multiple characters. Voice recognition teaches them to pay attention to details and use clues to understand narratives. Later, when they read independently, they\'ll need to track different characters and perspectives. This early voice work builds the foundation for understanding dialogue, quotations, and multiple viewpoints in stories.'
        },
        nextSteps: [
          'Use character voices in every multi-character book this week.',
          'Play who said it games during daily reading.',
          'Let baby\'s name create voices for characters in new books.',
          'Have character conversations during pretend play.',
          'Point out when characters talk in shows or videos: "Who said that?"'
        ]
      }
    }
  ]
},

// ========= LESSON 48 =========
{
  id: 48,
  phase: '2',
  quarter: 1,
  week: 10,
  weekIndex: 9,
  dayInWeek: 3,
  title: 'Lesson 48: Sound Effects Story Sound Integration and Event Recognition',
  theme: 'Listening Comprehension',
  skillRecurrenceTags: ['sound-effects', 'story-comprehension', 'event-recognition', 'auditory-memory'],
  relatedToPreviousSkills: ['environmental-sounds', 'sound-identification', 'story-engagement', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Sound Effects Learning',
      duration: '1 min',
      content: {
        goal: 'Build listening comprehension by adding sound effects to story events. Baby\'s name learns to connect sounds to actions and enhance story understanding.',
        parentGuide: [
          'Sound effects make stories vivid and memorable for toddlers.',
          'Adding sounds to events teaches cause-effect and action understanding.',
          'This lesson continues Week 10 listening comprehension focus through multi-sensory engagement.',
          'Sound integration strengthens both auditory processing and story comprehension.'
        ],
        materials: ['Picture books with action events', 'Stories with clear sound opportunities', 'Your voice for sound effects', 'Optional: simple instruments or noise-makers'],
        tip: 'Choose books with lots of action: doors opening, animals moving, things falling, weather sounds.',
        researchNote: 'Trainor et al. (2002) found that multi-sensory story experiences significantly enhance attention and memory in young children.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Add Sound Effects to Stories',
      duration: '3-4 min',
      focus: 'Sound-Event Association',
      researchBasis: 'Whitehurst & Lonigan (1998) showed that interactive, multi-sensory reading builds stronger emergent literacy skills.',
      content: {
        goal: 'Read a story and add sound effects for every action or event. Help baby\'s name connect sounds to story happenings.',
        whatToSay: [
          '"Let\'s read this story with sound effects! When something happens, we\'ll make the sound."',
          '"The door opened. Creeeeeak! We made the door sound. Creeeeak!"',
          '"The dog ran fast. Pat pat pat pat pat. Those are running feet sounds!"',
          '"It started to rain. Pitter patter pitter patter. Rain sounds!"',
          '"We\'re making the story come alive with sounds!"'
        ],
        whatToDo: [
          'Begin reading a story.',
          'When an action happens, pause.',
          'Make the sound effect for that action.',
          'Encourage baby\'s name to make it with you.',
          'Continue reading.',
          'Add sounds to every possible event.',
          'Repeat sounds for recurring actions.',
          'Keep sounds simple and clear.'
        ],
        examples: [
          'Story: "The cat jumped down." Add: "Whoosh! Thump!" "Cat jumped—whoosh—and landed—thump!"',
          'Read: "The car drove away." Add: "Vroom vroom vroom!" "The car went vroom vroom vroom down the street."'
        ],
        watchFor: [
          'Baby\'s name anticipating sound effects.',
          'Attempting to make sounds with you.',
          'Connecting sounds to story events.',
          'Excitement about the sound additions.'
        ],
        parentTip: 'Exaggerate sound effects dramatically. Make them fun and memorable.',
        funTwist: 'Let baby\'s name choose the sound effects: "What sound should the door make?"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Sound Effect Memory Game',
      duration: '3-4 min',
      focus: 'Auditory Memory and Event Recall',
      researchBasis: 'Diamond (1990) found that sound-based memory activities strengthen cognitive processing and retention.',
      content: {
        goal: 'After reading, make sound effects and ask baby\'s name to remember what happened. Build sound-event memory.',
        whatToSay: [
          '"Let\'s remember the story using sounds. I\'ll make a sound, you tell me what happened."',
          '"Listen: Creeeeak! What made that sound in the story? The door! The door opened!"',
          '"What about this: Splash! What happened? Someone jumped in water! Yes!"',
          '"Here\'s another: Knock knock knock! What was that? Someone knocked on the door!"',
          '"You remember all the sounds and what they mean! Great memory!"'
        ],
        whatToDo: [
          'Close the book or put it down.',
          'Make a sound effect from the story.',
          'Ask baby\'s name what happened.',
          'Give clues if needed.',
          'Celebrate when they remember.',
          'Make another sound.',
          'Continue with several sound effects.',
          'Review all sounds and events together.'
        ],
        examples: [
          'Make "vroom vroom." Ask: "What was that?" Help: "What goes vroom?" "A car! The car drove away!"',
          'Make "pitter patter." Ask: "What happened?" Clue: "It came from the sky." "Rain! It rained in the story!"'
        ],
        watchFor: [
          'Baby\'s name connecting sounds to events.',
          'Remembering story details from sounds.',
          'Using clues to recall.',
          'Success in matching sounds to actions.'
        ],
        parentTip: 'Sound cues are powerful memory triggers. They help recall events effectively.',
        funTwist: 'Let baby\'s name make a sound and you guess what happened in the story.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Act Out Story with Sounds',
      duration: '2-3 min',
      focus: 'Movement Integration and Multi-Sensory Comprehension',
      researchBasis: 'Vygotsky (1978) emphasized that combining sound, movement, and narrative deepens understanding and memory.',
      content: {
        goal: 'Act out the story together while making sound effects for each action. Combine movement, sound, and narrative.',
        whatToSay: [
          '"Let\'s act out the story! We\'ll do the actions and make the sounds together."',
          '"First, the door opened. Let\'s pretend to open a door. Creeeeeak!"',
          '"Then the dog ran. Let\'s run! Pat pat pat pat pat! We\'re running!"',
          '"The dog jumped. Jump! Whoosh! We jumped like the dog!"',
          '"It started raining. Move your fingers like rain. Pitter patter pitter patter!"',
          '"We acted out the whole story with sounds and movements!"'
        ],
        whatToDo: [
          'Stand up in an open space.',
          'Start retelling the story.',
          'Act out each event physically.',
          'Make the sound effect while doing the action.',
          'Encourage baby\'s name to join every action.',
          'Keep movements simple and exaggerated.',
          'Move through the whole story sequence.',
          'Repeat favorite parts.'
        ],
        examples: [
          'Story: door opens, dog runs, dog jumps, rain falls. Act: pretend door (creeak), run in place (pat pat), jump (whoosh), rain fingers (pitter patter).',
          'Retell: car drives (vroom, pretend steering), stops (screech, stop moving), person gets out (door sound, step out), walks away (walk walk walk).'
        ],
        watchFor: [
          'Baby\'s name doing actions and sounds together.',
          'Following the story sequence.',
          'Coordinating movement with sound effects.',
          'Enjoying the full-body story retelling.'
        ],
        parentTip: 'Full-body engagement makes stories deeply memorable. They experience the narrative physically.',
        funTwist: 'Do the story in slow motion with slow sound effects, then fast with fast sounds.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful sound effects learning',
          'You and baby\'s name added sounds to stories',
          'You connected sound effects to story events',
          'You remembered stories using sound cues',
          'You acted out stories with sounds and movements',
          'You built listening comprehension and multi-sensory story engagement'
        ],
        reviewQuestions: [
          'Could baby\'s name make sound effects during reading?',
          'Did they remember events from sound cues?',
          'Were they able to act out stories with sounds?',
          'How engaged were they with sound effect activities?'
        ],
        parentTakeaway: {
          title: 'Sounds Deepen Understanding',
          content: 'When baby\'s name adds sound effects to stories, they\'re engaging with narratives on multiple levels simultaneously. They\'re hearing words, creating sounds, connecting actions to effects, and building sensory-rich memories. This multi-sensory approach makes stories vivid and unforgettable. Children who experience stories with sound effects develop stronger comprehension because they\'re actively participating rather than passively listening. Every sound they make builds their understanding of how stories work and what events mean.'
        },
        nextSteps: [
          'Add sound effects to every story you read this week.',
          'Let baby\'s name create their own sound effects for events.',
          'Use sound effects during pretend play to narrate actions.',
          'Make sound effect books together with pictures and sounds.',
          'Review stories by making sounds and remembering what happened.'
        ]
      }
    }
  ]
},

// ========= LESSON 49 =========
{
  id: 49,
  phase: '2',
  quarter: 1,
  week: 10,
  weekIndex: 9,
  dayInWeek: 4,
  title: 'Lesson 49: Predict Next Action Story Prediction and Comprehension',
  theme: 'Listening Comprehension',
  skillRecurrenceTags: ['prediction', 'story-comprehension', 'sequencing', 'critical-thinking'],
  relatedToPreviousSkills: ['story-comprehension', 'sequencing', 'listening', 'cause-effect'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Prediction Learning',
      duration: '1 min',
      content: {
        goal: 'Build comprehension and critical thinking by predicting what happens next in stories. Baby\'s name learns to anticipate story events and think about cause and effect.',
        parentGuide: [
          'Prediction is a crucial comprehension skill that shows children are thinking about stories.',
          'Anticipating events teaches cause-effect reasoning and logical thinking.',
          'This lesson continues Week 10 listening comprehension focus through active prediction.',
          'Making predictions engages children actively rather than passively during reading.'
        ],
        materials: ['Familiar story books baby\'s name knows', 'New books with predictable patterns', 'Picture books with clear cause-effect', 'Optional: sticky notes to cover pictures'],
        tip: 'Use familiar books first. Knowing the story makes prediction easier and builds confidence.',
        researchNote: 'Whitehurst & Lonigan (1998) found that prediction questions during reading significantly enhance comprehension and engagement.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: What Happens Next Questions',
      duration: '3-4 min',
      focus: 'Story Prediction and Anticipation',
      researchBasis: 'Rowe (2012) showed that predictive questioning during reading accelerates comprehension and vocabulary development.',
      content: {
        goal: 'Pause at key moments in stories and ask baby\'s name to predict what happens next. Build anticipation skills.',
        whatToSay: [
          '"The little bear is climbing the tall tree. What do you think happens next?"',
          '"Do you think he gets to the top? Or does something else happen?"',
          '"Let\'s turn the page and see if you were right! He got to the top! You predicted it!"',
          '"Now the bear is at the top. What do you think he does next? Does he stay or come down?"',
          '"Great thinking! You\'re predicting the story!"'
        ],
        whatToDo: [
          'Read until a key moment or action begins.',
          'Stop before the outcome.',
          'Ask "what do you think happens next?"',
          'Give baby\'s name time to think and respond.',
          'Accept any answer they give.',
          'Turn the page to reveal what actually happens.',
          'Compare prediction to actual outcome.',
          'Celebrate their thinking regardless of accuracy.'
        ],
        examples: [
          'Story: "The cat sees a mouse." Pause. "What will the cat do? Will it chase the mouse?" Turn page. "Yes! The cat chased it!"',
          'Read: "The child is holding a ball up high." Stop. "What happens next? Will they throw it?" Reveal: "They threw it! You were right!"'
        ],
        watchFor: [
          'Baby\'s name thinking about the question.',
          'Offering predictions or guesses.',
          'Showing excitement about outcomes.',
          'Understanding the prediction-reveal pattern.'
        ],
        parentTip: 'There are no wrong predictions. Thinking about possibilities is what matters.',
        funTwist: 'Make silly predictions: "Will the bear fly to the moon? Or climb down the tree?" Make them laugh.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Because Prediction Game',
      duration: '3-4 min',
      focus: 'Cause-Effect Reasoning',
      researchBasis: 'Mandler & Bauer (1988) found that understanding causal relationships strengthens story comprehension and logical thinking.',
      content: {
        goal: 'Help baby\'s name understand cause and effect by predicting outcomes based on causes. Build logical reasoning.',
        whatToSay: [
          '"It\'s starting to rain in the story. Because it\'s raining, what will happen? Will people get wet?"',
          '"The boy is very hungry. Because he\'s hungry, what do you think he\'ll do? Will he eat?"',
          '"The dog sees its favorite toy. Because the dog loves that toy, what happens next?"',
          '"The door is closed. Because the door is closed, what will someone do? Will they open it?"',
          '"You\'re thinking about why things happen! That\'s smart predicting!"'
        ],
        whatToDo: [
          'Point out a cause in the story.',
          'Say "because" and state the cause clearly.',
          'Ask what will happen as a result.',
          'Give simple either-or options if needed.',
          'Let baby\'s name predict.',
          'Turn the page to see the effect.',
          'Connect cause and effect explicitly.',
          'Repeat with new cause-effect situations.'
        ],
        examples: [
          'Cause: "The ice cream is melting." Ask: "Because it\'s melting, what will happen?" Turn page: "It dripped! It melted and dripped."',
          'Setup: "The baby is crying." Ask: "Because baby is crying, what will mom do?" Reveal: "Mom picked up the baby! You predicted it!"'
        ],
        watchFor: [
          'Baby\'s name connecting causes to effects.',
          'Making logical predictions.',
          'Understanding "because" relationships.',
          'Growing reasoning skills.'
        ],
        parentTip: 'Use "because" clearly. It teaches them that actions have reasons and consequences.',
        funTwist: 'Give a cause and make illogical predictions: "It\'s raining, so the dog will... fly? No! Get wet!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Cover and Predict Pictures',
      duration: '2-3 min',
      focus: 'Visual Prediction and Comprehension',
      researchBasis: 'Bus & van IJzendoorn (1995) showed that interactive picture book activities enhance comprehension and engagement.',
      content: {
        goal: 'Cover the next picture with your hand. Baby\'s name predicts what it shows before you reveal it.',
        whatToSay: [
          '"I\'m going to cover the next picture. You predict what you\'ll see!"',
          '"The dog was running fast. What do you think the next picture shows? Where did the dog go?"',
          '"Let\'s see if you\'re right! I\'ll move my hand. You were close! The dog is at the park!"',
          '"Let\'s try another. The girl is reaching for something. What do you think she gets?"',
          '"You\'re predicting pictures! Great story thinking!"'
        ],
        whatToDo: [
          'Read a page.',
          'Before turning, cover the next picture with your hand.',
          'Ask what baby\'s name thinks they\'ll see.',
          'Encourage any prediction.',
          'Slowly reveal the picture.',
          'Compare their prediction to the actual image.',
          'Celebrate good thinking.',
          'Continue with more covered pictures.'
        ],
        examples: [
          'Read: "The bird flew away." Cover next page. "Where do you think the bird went?" Reveal: "To a nest! The bird is in a nest!"',
          'Story: "Mom opened the refrigerator." Cover. "What will you see inside?" Uncover: "Food! Lots of food! You knew it!"'
        ],
        watchFor: [
          'Baby\'s name making picture predictions.',
          'Using story clues to guess.',
          'Excitement about reveals.',
          'Learning from prediction-reveal patterns.'
        ],
        parentTip: 'Prediction builds active engagement. They think ahead instead of just listening passively.',
        funTwist: 'Let baby\'s name cover the picture and you predict. They reveal and tell you if you\'re right.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful prediction learning',
          'You and baby\'s name predicted story events',
          'You asked what happens next questions',
          'You used cause-effect reasoning',
          'You predicted pictures before revealing them',
          'You built comprehension and critical thinking skills'
        ],
        reviewQuestions: [
          'Could baby\'s name make predictions during stories?',
          'Did they understand cause-effect relationships?',
          'Were they excited about reveals and outcomes?',
          'How engaged were they with prediction activities?'
        ],
        parentTakeaway: {
          title: 'Prediction Shows Understanding',
          content: 'When baby\'s name predicts what happens next in stories, they\'re showing active comprehension. Prediction means they\'re thinking about characters, actions, and patterns—not just hearing words. Children who predict are engaged readers who think critically about narratives. This skill transfers directly to reading comprehension later. Good readers constantly predict what will happen next, using story clues and logic. Every prediction baby\'s name makes builds the thinking habits of strong readers.'
        },
        nextSteps: [
          'Ask "what happens next?" in every story this week.',
          'Point out cause-effect during daily activities: "Because it\'s cold, what should we wear?"',
          'Let baby\'s name predict outcomes in familiar routines.',
          'Cover pictures in books and play prediction games.',
          'Celebrate all predictions as good thinking, right or wrong.'
        ]
      }
    }
  ]
},

// ========= LESSON 50 =========
{
  id: 50,
  phase: '2',
  quarter: 1,
  week: 10,
  weekIndex: 9,
  dayInWeek: 5,
  title: 'Lesson 50: Make Your Own Story Narrative Creation and Play Narration',
  theme: 'Listening Comprehension',
  skillRecurrenceTags: ['story-creation', 'narration', 'vocabulary-use', 'sequencing'],
  relatedToPreviousSkills: ['story-comprehension', 'action-words', 'sequencing', 'vocabulary'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Creation Learning',
      duration: '1 min',
      content: {
        goal: 'Build expressive language and comprehension by creating original stories. Baby\'s name learns to narrate play and sequence events into a story.',
        parentGuide: [
          'Creating stories shows children they can be authors and narrators, not just listeners.',
          'Narrating play builds vocabulary, sequencing, and story structure understanding.',
          'This lesson completes Week 10 listening comprehension focus through active story creation.',
          'Original storytelling demonstrates true comprehension of how narratives work.'
        ],
        materials: ['Baby\'s name\'s toys for story creation', 'Props or household items', 'Optional: paper and crayons for story pictures', 'Your narration support and encouragement'],
        tip: 'Follow baby\'s name\'s lead. Their play ideas become the story. You add words.',
        researchNote: 'Vygotsky (1978) emphasized that guided story creation with play scaffolds language development and narrative understanding.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Narrate Play as a Story',
      duration: '3-4 min',
      focus: 'Play Narration and Story Structure',
      researchBasis: 'Weisleder & Fernald (2013) found that narrating children\'s actions significantly accelerates vocabulary and language development.',
      content: {
        goal: 'Watch baby\'s name play and narrate their actions as a story. Add story language to their play.',
        whatToSay: [
          '"Once upon a time, there was a bear. Let\'s watch what the bear does."',
          '"The bear walked across the room. Walk walk walk. The bear was looking for something."',
          '"Then the bear found a ball! The bear was so happy! The bear picked up the ball."',
          '"The bear played with the ball. Roll roll roll. The bear rolled the ball."',
          '"And that\'s the story of the bear and the ball! You made a story!"'
        ],
        whatToDo: [
          'Watch baby\'s name play with toys.',
          'Narrate their actions in story format.',
          'Use story language: once upon a time, then, finally.',
          'Add describing words to their actions.',
          'Build a simple plot from their play.',
          'Speak in third person about characters.',
          'End with a conclusion statement.',
          'Celebrate their created story.'
        ],
        examples: [
          'They play with toy car: "Once there was a red car. The car drove down the road. Vroom vroom. Then the car stopped at a house. The end!"',
          'They play with doll: "A baby woke up. The baby was hungry. Then mommy fed the baby. The baby was happy. That\'s the story!"'
        ],
        watchFor: [
          'Baby\'s name listening to your narration.',
          'Continuing play while you narrate.',
          'Adding actions based on your words.',
          'Understanding their play is becoming a story.'
        ],
        parentTip: 'Your narration teaches them that play can be stories and stories can be told.',
        funTwist: 'Add dramatic narrator voice: "Meanwhile, the brave teddy bear..." Make it exciting.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Story Building Together',
      duration: '3-4 min',
      focus: 'Collaborative Story Creation',
      researchBasis: 'Tomasello (2003) showed that collaborative creation activities build language and social communication skills.',
      content: {
        goal: 'Build a story together by taking turns. You add a part, baby\'s name adds action, you add words, they add more.',
        whatToSay: [
          '"Let\'s make up a story together! I\'ll start: Once upon a time there was a dog."',
          '"What did the dog do? You show me. Good! The dog jumped! The dog jumped high."',
          '"Then what happened? Where did the dog go? You choose! The dog went... to the park!"',
          '"What did the dog see at the park? Show me! A ball! The dog saw a ball."',
          '"We made a story together! The dog jumped and went to the park and saw a ball!"'
        ],
        whatToDo: [
          'Start a simple story opening.',
          'Ask baby\'s name what happens next.',
          'Let them show with toys or gestures.',
          'Put their action into words.',
          'Add it to the growing story.',
          'Continue taking turns.',
          'Build 4-5 story events together.',
          'Retell the whole story at the end.'
        ],
        examples: [
          'You: "A cat woke up." Them: (pretend cat stretches). You: "The cat stretched. Then what?" Them: (cat walks). You: "The cat walked." Continue building.',
          'You: "A bird was flying." Them: (bird lands on toy tree). You: "The bird landed in a tree. Then?" Them: (bird chirps). You: "The bird sang!"'
        ],
        watchFor: [
          'Baby\'s name contributing actions or ideas.',
          'Waiting for their turn in story building.',
          'Understanding the back-and-forth pattern.',
          'Pride in creating something together.'
        ],
        parentTip: 'Accept whatever they contribute. Their ideas drive the story, you provide the words.',
        funTwist: 'Make the story silly: "A purple elephant ate pizza and... what happened?" Keep it playful.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Retell Your Story',
      duration: '2-3 min',
      focus: 'Story Memory and Sequencing',
      researchBasis: 'Mandler & Bauer (1988) found that retelling created stories strengthens narrative memory and sequencing skills.',
      content: {
        goal: 'After creating a story together, retell it from beginning to end. Build narrative memory and structure.',
        whatToSay: [
          '"Let\'s tell our story again from the beginning. Remember what happened first?"',
          '"First, the dog jumped. Then what? The dog went to the park. Then what happened?"',
          '"The dog saw a ball! And then? The dog played with the ball. That\'s our story!"',
          '"Let\'s tell it one more time all together. Ready? Once upon a time..."',
          '"We made a story and we can tell it! You\'re a storyteller!"'
        ],
        whatToDo: [
          'Start retelling the created story.',
          'Go through events in order.',
          'Ask "then what happened?" between events.',
          'Help baby\'s name remember.',
          'Use toys to act out as you retell.',
          'Say the story together.',
          'Repeat 2-3 times.',
          'Celebrate their story creation.'
        ],
        examples: [
          'Created story: cat woke, stretched, walked, ate. Retell: "First cat woke up. Then cat stretched. Then walked. Then ate. The end!" Act it out.',
          'Your story: bear found honey, ate it, got sticky, took bath. Retell with toys: "Bear found honey, ate, got sticky, took bath!" Show each part.'
        ],
        watchFor: [
          'Baby\'s name remembering story events.',
          'Contributing parts of the retelling.',
          'Understanding story sequence.',
          'Enjoyment of their created narrative.'
        ],
        parentTip: 'Retelling shows them stories have structure: beginning, middle, end. This is comprehension.',
        funTwist: 'Tell the story in different ways: fast version, slow version, whisper version, silly voice version.'
      }
    },
    {
      id: 4,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful story creation learning',
          'You and baby\'s name created original stories',
          'You narrated play as a story',
          'You built stories together taking turns',
          'You retold created stories',
          'You built narrative skills, vocabulary, and story comprehension'
        ],
        reviewQuestions: [
          'Did baby\'s name contribute actions or ideas to stories?',
          'Could they follow the story building process?',
          'Were they able to retell parts of created stories?',
          'How engaged were they with story creation?'
        ],
        parentTakeaway: {
          title: 'Creating Shows Understanding',
          content: 'When baby\'s name creates their own stories, they\'re demonstrating deep comprehension of how narratives work. They understand that stories have characters, actions, sequences, and endings. Creating stories builds expressive language far beyond just answering questions. It shows they can organize thoughts, sequence events, and communicate ideas. Every story they help create builds confidence that they have ideas worth sharing. This is the foundation for writing and composition later. Story creators become story readers who truly understand what they\'re reading.'
        },
        nextSteps: [
          'Narrate baby\'s name\'s play as stories throughout the week.',
          'Create short stories together during any play session.',
          'Retell your created stories at bedtime or during meals.',
          'Let baby\'s name dictate stories while you write or act them out.',
          'Make story creation a regular part of playtime and daily routines.'
        ]
      }
    }
  ]
},

// ========= LESSON 51 =========
{
  id: 51,
  phase: '2',
  quarter: 1,
  week: 11,
  weekIndex: 10,
  dayInWeek: 1,
  title: 'Lesson 51: Hello and Goodbye Greetings and Social Language',
  theme: 'Everyday Conversations',
  skillRecurrenceTags: ['greetings', 'social-language', 'turn-taking', 'vocabulary'],
  relatedToPreviousSkills: ['family-names', 'action-words', 'emotion-words', 'listening'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Greeting Learning',
      duration: '1 min',
      content: {
        goal: 'Build social language skills by practicing greetings and farewells. Baby\'s name learns the words and gestures that help connect with others.',
        parentGuide: [
          'Greetings are the foundation of social communication and relationship building.',
          'Simple words like hello and goodbye teach children how to enter and exit interactions politely.',
          'This lesson begins Week 11 everyday conversation focus through basic social language.',
          'Pairing words with gestures (waving, hugging) helps children remember and use greetings naturally.'
        ],
        materials: ['Stuffed animals or dolls for practice', 'Mirror for self-awareness', 'Family photos or video calls (optional)', 'Your enthusiasm and warm modeling'],
        tip: 'Model greetings constantly throughout the day. Say hello when entering rooms, goodbye when leaving.',
        researchNote: 'Bruner (1983) found that early social routines like greetings build language scaffolds and turn-taking skills essential for conversation.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Hello Practice with Gestures',
      duration: '3-4 min',
      focus: 'Greeting Words and Actions',
      researchBasis: 'Tomasello (2003) showed that combining words with gestures accelerates social language development and communicative intent.',
      content: {
        goal: 'Practice saying hello paired with waving, smiling, and making eye contact. Build greeting habits.',
        whatToSay: [
          '"Let\'s practice saying hello! Hello baby\'s name! Can you wave? Hello!"',
          '"When we see someone, we say hello and wave like this. Hello! Wave wave!"',
          '"Let\'s say hello to teddy bear. Hello teddy! Wave to teddy!"',
          '"Now teddy says hello back to you! Hello baby\'s name! Teddy is waving!"',
          '"You said hello! That\'s how we greet our friends!"'
        ],
        whatToDo: [
          'Model hello with a big wave and smile.',
          'Say hello clearly while looking at baby\'s name.',
          'Encourage baby\'s name to wave back.',
          'Practice with stuffed animals or dolls.',
          'Have toys "say hello" to baby\'s name.',
          'Let baby\'s name say hello to different toys.',
          'Add excitement and warmth to each greeting.',
          'Celebrate every attempt at waving or saying hello.'
        ],
        examples: [
          'Pick up teddy. "Hello teddy! Good morning!" Wave teddy\'s paw. Let baby\'s name wave to teddy. "Hello teddy!"',
          'Greet baby\'s name: "Hello baby\'s name! I\'m so happy to see you!" Model big wave. Wait for their wave or hello attempt.'
        ],
        watchFor: [
          'Baby\'s name attempting to wave.',
          'Trying to say hello or make hello sounds.',
          'Making eye contact during greetings.',
          'Understanding that hello means meeting someone.'
        ],
        parentTip: 'Pair hello with warm smiles and gentle touches. This teaches that greetings create connection.',
        funTwist: 'Try different hello voices: high hello, low hello, whisper hello, silly hello. Make them giggle.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Goodbye and Wave Bye-Bye',
      duration: '3-4 min',
      focus: 'Farewell Language and Separation',
      researchBasis: 'Vygotsky (1978) emphasized that social routines like farewells help children understand social boundaries and manage transitions.',
      content: {
        goal: 'Practice saying goodbye and waving bye-bye. Help baby\'s name understand endings and transitions.',
        whatToSay: [
          '"When someone leaves, we say goodbye! Goodbye teddy! Bye-bye! Wave bye-bye!"',
          '"Teddy is going away. Let\'s say goodbye! Goodbye teddy! See you later!"',
          '"Now you try. Wave bye-bye to teddy. Bye-bye teddy!"',
          '"When daddy leaves for work, we say goodbye! Goodbye daddy! Bye-bye!"',
          '"You waved bye-bye! That\'s how we say goodbye to people we care about!"'
        ],
        whatToDo: [
          'Model goodbye with a waving gesture.',
          'Say bye-bye clearly and warmly.',
          'Practice with toys leaving and returning.',
          'Hide toys and say goodbye, then hello when they return.',
          'Let baby\'s name wave bye-bye to toys.',
          'Practice goodbye at actual transitions (leaving room, etc.).',
          'Keep tone positive to reduce separation anxiety.',
          'Celebrate their goodbye attempts.'
        ],
        examples: [
          'Walk teddy away: "Teddy is leaving. Goodbye teddy! Bye-bye!" Wave. Have baby\'s name wave. "You said goodbye!"',
          'Leave the room briefly: "Mommy is going bye-bye. Goodbye baby\'s name! See you soon!" Wave. Return: "Hello! Mommy came back!"'
        ],
        watchFor: [
          'Baby\'s name waving bye-bye.',
          'Saying goodbye or bye-bye sounds.',
          'Understanding someone is leaving.',
          'Responding to farewells without distress.'
        ],
        parentTip: 'Always return after goodbye practice. This teaches that goodbye doesn\'t mean forever.',
        funTwist: 'Play peek-a-boo with goodbye: "Goodbye baby\'s name!" Cover face. "Hello! I\'m back!" Repeat.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Greeting Circle Game',
      duration: '2-3 min',
      focus: 'Repeated Greeting Practice',
      researchBasis: 'Hart & Risley (1995) found that repetition of social language in playful contexts accelerates vocabulary growth and social communication.',
      content: {
        goal: 'Practice multiple greetings in a row. Build fluency and confidence with social words.',
        whatToSay: [
          '"Let\'s play the greeting game! We\'ll say hello to everyone!"',
          '"Hello mommy! Hello baby\'s name! Hello teddy! Hello dolly!"',
          '"Now let\'s say goodbye to everyone! Bye-bye mommy! Bye-bye teddy!"',
          '"Who should we greet next? Let\'s say hello to the mirror! Hello baby\'s name in the mirror!"',
          '"You greeted so many friends! You\'re a greeting expert!"'
        ],
        whatToDo: [
          'Arrange several toys or objects in a circle.',
          'Go to each one and say hello.',
          'Encourage baby\'s name to wave and greet each item.',
          'Do a full circle of hellos.',
          'Then do a goodbye circle.',
          'Use family photos and greet faces.',
          'Look in mirror and greet reflections.',
          'Make it energetic and fun with movement.'
        ],
        examples: [
          'Circle of toys: "Hello bear! Hello car! Hello ball! Hello book!" Baby\'s name waves to each. "Now bye-bye to everyone!"',
          'Photo greeting: Point to family pictures. "Hello grandma! Hello grandpa!" Baby\'s name waves at photos.'
        ],
        watchFor: [
          'Baby\'s name participating in greetings.',
          'Attempting words or gestures repeatedly.',
          'Enjoying the social game.',
          'Building greeting stamina and interest.'
        ],
        parentTip: 'Repetition without pressure builds mastery. They\'ll internalize greetings through playful practice.',
        funTwist: 'Add silly greetings: "Hello with your elbow! Bye-bye with your foot!" Make greetings silly and physical.'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Real World Greeting Practice',
      duration: '2-3 min',
      focus: 'Applied Social Language',
      researchBasis: 'Snow (1983) showed that using language in authentic contexts significantly enhances vocabulary retention and social communication skills.',
      content: {
        goal: 'Use real moments today to practice greetings. Transfer toy practice to actual social situations.',
        whatToSay: [
          '"When someone comes home, let\'s say hello! Listen for the door. Hello!"',
          '"When we leave the house, we\'ll wave goodbye to our home. Bye-bye house!"',
          '"If we see a neighbor, we can wave and say hello. Let\'s practice now!"',
          '"Before bed, we say goodnight to everyone. Goodnight is like goodbye for sleeping."',
          '"You used real greetings today! You\'re building friendship words!"'
        ],
        whatToDo: [
          'Plan real greeting moments throughout the day.',
          'Greet family members arriving home.',
          'Say goodbye when leaving for errands.',
          'Wave to neighbors or delivery people.',
          'Greet pets with hello.',
          'Say goodnight before bed.',
          'Model greetings in every social encounter.',
          'Gently encourage but never force participation.'
        ],
        examples: [
          'Dad comes home: "Listen! Daddy\'s here! Let\'s say hello! Hello daddy!" Baby\'s name waves. "You greeted daddy!"',
          'Leaving for walk: "We\'re leaving! Goodbye house! Bye-bye toys! See you later!" Baby\'s name waves at door.'
        ],
        watchFor: [
          'Baby\'s name recognizing greeting opportunities.',
          'Initiating waves or hellos.',
          'Transferring practice to real life.',
          'Building social awareness and confidence.'
        ],
        parentTip: 'Real world practice is the goal. Toy practice prepares them for actual social moments.',
        funTwist: 'Greet everything: "Hello lamp! Goodbye couch!" Make silly greetings to objects for fun practice.'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful greeting learning',
          'You and baby\'s name practiced social language',
          'You modeled hello with waves and smiles',
          'You practiced goodbye and bye-bye',
          'You played greeting circle games',
          'You used real world greetings',
          'You built social communication and connection skills'
        ],
        reviewQuestions: [
          'Did baby\'s name attempt to wave or say hello?',
          'Could they participate in goodbye farewells?',
          'How comfortable were they with repeated greetings?',
          'Did they recognize real world greeting opportunities?'
        ],
        parentTakeaway: {
          title: 'Greetings Build Social Bridges',
          content: 'When baby\'s name learns hello and goodbye, they\'re building the foundation for all social interactions. These simple words teach them how to enter conversations, show respect, and manage transitions. Children who use greetings confidently are more likely to engage positively with others. Greetings also teach cause and effect in relationships: when I say hello, people respond warmly. This is the beginning of understanding social reciprocity. Every hello and goodbye baby\'s name practices builds their social language toolkit for friendships, school, and life.'
        },
        nextSteps: [
          'Model greetings constantly in daily life.',
          'Encourage waves and hellos with family and friends.',
          'Practice goodbye at transitions to build comfort.',
          'Greet toys, pets, and objects for extra practice.',
          'Celebrate every greeting attempt warmly.'
        ]
      }
    }
  ]
},

// ========= LESSON 52 =========
{
  id: 52,
  phase: '2',
  quarter: 1,
  week: 11,
  weekIndex: 10,
  dayInWeek: 2,
  title: 'Lesson 52: Please and Thank You Polite Language and Requests',
  theme: 'Everyday Conversations',
  skillRecurrenceTags: ['polite-language', 'requests', 'gratitude', 'social-skills'],
  relatedToPreviousSkills: ['greetings', 'turn-taking', 'vocabulary', 'communication'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Polite Language Learning',
      duration: '1 min',
      content: {
        goal: 'Build polite communication skills by teaching please and thank you. Baby\'s name learns to make requests respectfully and show gratitude.',
        parentGuide: [
          'Please and thank you are foundational social skills that teach respect and appreciation.',
          'These words help children get their needs met while building positive relationships.',
          'This lesson continues Week 11 everyday conversation focus through polite language.',
          'Modeling politeness consistently helps children internalize these important social behaviors.'
        ],
        materials: ['Toys or objects to request and exchange', 'Snacks or treats for practice', 'Books to share and request', 'Your consistent polite modeling'],
        tip: 'Never withhold things until they say please. Model it naturally and they\'ll adopt it over time.',
        researchNote: 'Tomasello (2019) found that polite language development reflects growing social cognition and understanding of others\' perspectives and feelings.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Please for Requests',
      duration: '3-4 min',
      focus: 'Polite Requesting Language',
      researchBasis: 'Rowe (2012) showed that modeling polite request phrases during daily interactions significantly accelerates expressive language and social communication.',
      content: {
        goal: 'Teach baby\'s name to use please when asking for something. Build respectful requesting habits.',
        whatToSay: [
          '"When we want something, we say please. Please gives me the ball."',
          '"Can you say please? Ball please. Please ball."',
          '"Yes! You said please! Here\'s the ball. Saying please helps us get what we need."',
          '"Let\'s try again. Do you want the book? Say book please. Please book."',
          '"Good trying! When you say please, people want to help you!"'
        ],
        whatToDo: [
          'Model please with every request you make.',
          'Hold a toy baby\'s name wants.',
          'Say "say please" gently before giving it.',
          'Accept any attempt: "pease," gesture, or approximation.',
          'Give the item immediately after they try.',
          'Pair please with pointing or gestures.',
          'Practice with multiple objects.',
          'Always model the full phrase: "ball please" or "please ball."'
        ],
        examples: [
          'Baby\'s name reaches for cracker. You say: "Cracker please! Can you say please?" They try "peas." "Yes! Please! Here\'s your cracker."',
          'Hold toy car. "Do you want the car? Say car please." They point and say "pee." "Please! Good! Here\'s the car."'
        ],
        watchFor: [
          'Baby\'s name attempting to say please.',
          'Understanding that please helps them get things.',
          'Pairing please with pointing or reaching.',
          'Beginning to use please spontaneously.'
        ],
        parentTip: 'Model please constantly. Say it for them if they can\'t yet. "You want milk? Milk please. I\'ll help you say it."',
        funTwist: 'Exaggerate please: "Pleeeeease! Pretty please! Please please please!" Make it playful, not demanding.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Thank You for Gratitude',
      duration: '3-4 min',
      focus: 'Expressing Appreciation',
      researchBasis: 'Meltzoff et al. (2020) found that modeling gratitude expressions helps children develop social awareness and positive interaction patterns.',
      content: {
        goal: 'Teach baby\'s name to say thank you after receiving something. Build appreciation and reciprocity.',
        whatToSay: [
          '"When someone gives you something, we say thank you. Thank you for the toy!"',
          '"Can you say thank you? Thank you! Tan too. Thank you."',
          '"Yes! You said thank you! That makes people happy when you thank them."',
          '"I\'m giving you a snack. Let\'s say thank you! Thank you mommy!"',
          '"Good job! Saying thank you shows you\'re grateful and kind!"'
        ],
        whatToDo: [
          'Model thank you every time you receive anything.',
          'Give baby\'s name something they like.',
          'Prompt "say thank you" gently.',
          'Accept any attempt: "tank oo," gesture, or sound.',
          'Smile warmly when they try.',
          'Have toys give things and say thank you.',
          'Practice with multiple exchanges.',
          'Show genuine happiness when they show gratitude.'
        ],
        examples: [
          'Hand baby\'s name a toy. "Here\'s teddy! Can you say thank you?" They try "tan oo." "Yes! Thank you! You\'re welcome!"',
          'Give snack. "Here\'s your snack. Say thank you!" They smile and try to say it. "Thank you! Good manners!"'
        ],
        watchFor: [
          'Baby\'s name attempting thank you.',
          'Understanding thank you follows receiving.',
          'Showing appreciation through gesture or sound.',
          'Beginning to connect thank you with positive feelings.'
        ],
        parentTip: 'Never force thank you. Model it joyfully and they\'ll want to copy you naturally.',
        funTwist: 'Silly thank yous: "Thank you very very very much! Thank you to the moon and back!" Exaggerate appreciation.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Please and Thank You Together',
      duration: '2-3 min',
      focus: 'Combined Polite Phrases',
      researchBasis: 'Vygotsky (1978) emphasized that practicing social routines in sequence builds understanding of conversational turn-taking and reciprocity.',
      content: {
        goal: 'Practice the full polite sequence: request with please, receive, then say thank you. Build complete interactions.',
        whatToSay: [
          '"Let\'s use both polite words! First say please to ask. Then say thank you when you get it!"',
          '"Can you say ball please? Ball please. Good! Here\'s the ball. Now say thank you!"',
          '"Thank you! You did it! You said please and thank you. That\'s being very polite!"',
          '"Let\'s try again. What do you want? Say please. Now I\'ll give it. Now say thank you!"',
          '"You used both magic words! Please and thank you make conversations kind!"'
        ],
        whatToDo: [
          'Set up clear request-receive-thank sequence.',
          'Hold object baby\'s name wants.',
          'Prompt please first.',
          'Give the object.',
          'Prompt thank you second.',
          'Celebrate the complete polite exchange.',
          'Practice several times with different objects.',
          'Keep it light and playful, not rigid.'
        ],
        examples: [
          'Hold book. "Do you want this book? Say book please." They try. "Good! Here it is. Say thank you!" They try. "Perfect! Please and thank you!"',
          'Show toy. "Toy please?" They say please. Hand it over. "Now say thank you!" They say it. "You did both! So polite!"'
        ],
        watchFor: [
          'Baby\'s name understanding the sequence.',
          'Attempting both please and thank you.',
          'Following the conversational pattern.',
          'Showing pride in being polite.'
        ],
        parentTip: 'The goal is natural politeness, not robotic compliance. Model warmth and they\'ll copy the feeling, not just words.',
        funTwist: 'Switch roles: Baby\'s name gives you toy. You say "Please!" Take it. Say "Thank you!" Show them how it feels to receive politeness.'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Real Life Polite Moments',
      duration: '2-3 min',
      focus: 'Applied Polite Language',
      researchBasis: 'Hart & Risley (1995) found that consistent use of polite language in daily routines significantly predicts later social competence and communication skills.',
      content: {
        goal: 'Use please and thank you in real daily moments. Transfer practice to authentic situations.',
        whatToSay: [
          '"At snack time, let\'s say snack please. Snack please mommy!"',
          '"When someone helps you, say thank you. Daddy helped you. Thank you daddy!"',
          '"Let\'s thank the dog for being a good friend. Thank you doggy!"',
          '"When we ask for help: Help please! When we get help: Thank you!"',
          '"You\'re using polite words in real life! That\'s how we talk to people we care about!"'
        ],
        whatToDo: [
          'Use please and thank you in every interaction.',
          'Point out moments to say please.',
          'Prompt thank you when others help.',
          'Model polite language constantly.',
          'Thank baby\'s name when they help you.',
          'Ask baby\'s name politely for things.',
          'Create a culture of mutual respect and politeness.',
          'Celebrate their polite attempts warmly.'
        ],
        examples: [
          'Meal time: "More food please!" Model it. Baby\'s name tries. Give food. "Say thank you!" They try. "Good manners at the table!"',
          'Getting dressed: "Arms up please!" Baby\'s name complies. "Thank you for helping! You\'re so helpful!" Model gratitude for them.'
        ],
        watchFor: [
          'Baby\'s name using please and thank you spontaneously.',
          'Recognizing moments that call for politeness.',
          'Responding to others\' polite language.',
          'Building a habit of respectful communication.'
        ],
        parentTip: 'Your politeness to them teaches them to be polite to others. Model the respect you want them to show.',
        funTwist: 'Thank everything: "Thank you shoes for keeping feet warm! Thank you sun for shining!" Make gratitude silly and abundant.'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful polite language learning',
          'You and baby\'s name practiced please and thank you',
          'You taught polite requesting with please',
          'You taught gratitude expression with thank you',
          'You combined both polite words together',
          'You used politeness in real life moments',
          'You built respectful communication and social skills'
        ],
        reviewQuestions: [
          'Did baby\'s name attempt to say please or thank you?',
          'Could they follow the request-receive-thank sequence?',
          'How naturally did they use polite language?',
          'Did you notice politeness in spontaneous moments?'
        ],
        parentTakeaway: {
          title: 'Politeness Creates Connection',
          content: 'When baby\'s name learns please and thank you, they\'re learning that words have power to create positive interactions. These simple phrases teach respect, gratitude, and social awareness. Children who use polite language are more likely to have successful peer relationships and positive adult interactions. Politeness isn\'t about rigid rules, it\'s about showing care for others through words. Every please and thank you baby\'s name says strengthens their understanding that communication is about connection, not just getting needs met. These magic words truly are magical for building relationships throughout life.'
        },
        nextSteps: [
          'Model please and thank you in every interaction.',
          'Prompt gently but never withhold until they comply.',
          'Celebrate all attempts at polite language.',
          'Use politeness with baby\'s name to model respect.',
          'Make politeness a natural part of daily conversation, not a rule to enforce.'
        ]
      }
    }
  ]
},

// ========= LESSON 53 =========
{
  id: 53,
  phase: '2',
  quarter: 1,
  week: 11,
  weekIndex: 10,
  dayInWeek: 3,
  title: 'Lesson 53: Sharing Talk Turn-Taking and Sharing Language',
  theme: 'Everyday Conversations',
  skillRecurrenceTags: ['turn-taking', 'sharing', 'social-language', 'cooperation'],
  relatedToPreviousSkills: ['greetings', 'polite-language', 'vocabulary', 'communication'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Sharing Language Learning',
      duration: '1 min',
      content: {
        goal: 'Build cooperation and social skills by teaching sharing language. Baby\'s name learns to take turns, share objects, and use words during exchanges.',
        parentGuide: [
          'Sharing is one of the hardest social skills for toddlers because of their developmental stage.',
          'Language helps children manage sharing by giving them words for the process.',
          'This lesson continues Week 11 everyday conversation focus through cooperative language.',
          'Turn-taking with objects teaches the rhythm of conversation and reciprocity.'
        ],
        materials: ['Toys that can be shared or passed', 'Blocks or items to exchange', 'Snacks to share (optional)', 'Timer or song for turn timing (optional)'],
        tip: 'Model sharing constantly. Share your food, toys, and attention while narrating the process.',
        researchNote: 'Brownell et al. (2013) found that verbal scaffolding during sharing activities significantly improves toddler cooperation and reduces conflict.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: My Turn, Your Turn Language',
      duration: '3-4 min',
      focus: 'Turn-Taking Vocabulary',
      researchBasis: 'Bruner (1983) showed that turn-taking routines are the foundation of conversation and that naming turns explicitly helps children understand social reciprocity.',
      content: {
        goal: 'Teach baby\'s name the phrases my turn and your turn. Build understanding of taking turns with objects.',
        whatToSay: [
          '"Let\'s play with the ball. First it\'s my turn. My turn! I have the ball."',
          '"Now it\'s your turn! Your turn baby\'s name! Here\'s the ball for you."',
          '"You have the ball! That\'s your turn. Now roll it back. Then it\'s my turn again!"',
          '"My turn, your turn, my turn, your turn. We\'re taking turns!"',
          '"You\'re learning to take turns! That\'s how we share and play together!"'
        ],
        whatToDo: [
          'Choose a toy to pass back and forth.',
          'Hold it and say "my turn" clearly.',
          'Pass it to baby\'s name and say "your turn."',
          'Encourage them to hold it briefly.',
          'Ask for it back: "My turn please."',
          'Take it and repeat the cycle.',
          'Say my turn and your turn every exchange.',
          'Keep turns short at first, 5-10 seconds each.'
        ],
        examples: [
          'Ball rolling: "My turn to roll. I roll the ball. Now your turn! You roll it back. My turn again!" Keep alternating.',
          'Block stacking: "My turn to put a block. Your turn! You put one. My turn. Your turn." Narrate each placement.'
        ],
        watchFor: [
          'Baby\'s name holding object during their turn.',
          'Attempting to say turn or understanding the concept.',
          'Willingness to give object back.',
          'Understanding the back and forth pattern.'
        ],
        parentTip: 'Short turns work better. If turns are too long, toddlers get frustrated waiting. Quick exchanges teach the rhythm.',
        funTwist: 'Silly turn game: "My turn to make a silly face! Your turn! My turn for a silly sound! Your turn!" Make turns playful.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Share and Give Language',
      duration: '3-4 min',
      focus: 'Sharing Vocabulary and Generosity',
      researchBasis: 'Tomasello (2019) found that modeling sharing language and labeling generous acts helps children develop prosocial behavior and cooperative skills.',
      content: {
        goal: 'Teach baby\'s name to share and give objects to others. Build vocabulary around generosity.',
        whatToSay: [
          '"Let\'s share the crackers. I\'ll give you one and I\'ll take one. We\'re sharing!"',
          '"Can you share with teddy? Give teddy a block. Share with teddy!"',
          '"Good sharing! You gave teddy a block. That\'s being kind and generous!"',
          '"When we share, everyone gets some. Sharing makes everyone happy!"',
          '"You\'re learning to share! That\'s such an important friendship skill!"'
        ],
        whatToDo: [
          'Model sharing by dividing items between you.',
          'Give baby\'s name something to share with a toy or you.',
          'Say "share with" and name the recipient.',
          'Encourage giving and handing over.',
          'Celebrate every sharing attempt.',
          'Share snacks, toys, or blocks.',
          'Show sharing makes others happy.',
          'Never force, just model and encourage.'
        ],
        examples: [
          'Snack sharing: "I have crackers. I\'ll share with you. Here\'s one for you, one for me. We\'re sharing!" Baby\'s name copies.',
          'Toy sharing: "Let\'s share toys with dolly. Give dolly a car. Good! Now dolly is happy because you shared!"'
        ],
        watchFor: [
          'Baby\'s name attempting to give objects to others.',
          'Understanding that sharing means giving some.',
          'Showing pleasure when others are happy.',
          'Beginning to share spontaneously.'
        ],
        parentTip: 'Toddlers aren\'t naturally good at sharing. It\'s learned. Model it constantly without pressure or punishment.',
        funTwist: 'Sharing parade: "Let\'s share with everyone! Share with teddy, share with dolly, share with truck!" Go around sharing.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Waiting Language and Patience',
      duration: '2-3 min',
      focus: 'Patience and Waiting Vocabulary',
      researchBasis: 'Vygotsky (1978) emphasized that language helps children regulate behavior, and that naming waiting explicitly helps toddlers develop self-control.',
      content: {
        goal: 'Teach baby\'s name to wait for their turn. Build patience through language support.',
        whatToSay: [
          '"It\'s my turn now. You need to wait. Waiting means your turn comes soon!"',
          '"Let\'s count while you wait. One, two, three. Now it\'s your turn!"',
          '"Waiting is hard, but you\'re doing it! Your turn is coming!"',
          '"Good waiting! Now your turn is here! You waited and now you get the toy!"',
          '"You waited for your turn! That\'s being patient and strong!"'
        ],
        whatToDo: [
          'Hold toy for a few seconds while baby\'s name waits.',
          'Say "wait" clearly and calmly.',
          'Count or sing briefly during waiting.',
          'Give them the toy immediately after waiting.',
          'Celebrate their waiting.',
          'Keep waiting time very short, 3-5 seconds.',
          'Gradually extend waiting as they improve.',
          'Offer comfort: "I know waiting is hard."'
        ],
        examples: [
          'Playing with toy: "Mommy is playing. You wait. Wait, wait. One, two, three. Now your turn!" Hand over toy. "You waited!"',
          'Swing turns: "I\'m swinging. You wait. Let\'s sing: twinkle twinkle little star. Now your turn on the swing! Good waiting!"'
        ],
        watchFor: [
          'Baby\'s name attempting to wait briefly.',
          'Less frustration during waiting.',
          'Understanding that wait means turn is coming.',
          'Growing patience over time.'
        ],
        parentTip: 'Very short waits at first. As they succeed, gradually extend. Build the muscle of patience slowly.',
        funTwist: 'Waiting dance: "While we wait, let\'s dance! Dance dance dance. Now your turn!" Make waiting fun, not boring.'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Real Life Sharing Moments',
      duration: '2-3 min',
      focus: 'Applied Sharing Language',
      researchBasis: 'Brownell et al. (2013) found that practicing sharing in multiple contexts throughout the day transfers skills to peer interactions and reduces conflict.',
      content: {
        goal: 'Use sharing language in real daily situations. Transfer practice to authentic sharing opportunities.',
        whatToSay: [
          '"Let\'s share our snack. Some for you, some for me. We\'re sharing our food!"',
          '"Can you share the book with me? Let\'s look together. Sharing means we both see!"',
          '"Daddy wants to play too. Let\'s share the blocks with daddy. Share with daddy!"',
          '"When a friend comes over, we can share toys. That\'s how we play together!"',
          '"You shared today! Sharing makes playtime fun for everyone!"'
        ],
        whatToDo: [
          'Point out sharing moments throughout the day.',
          'Share meals by giving portions to everyone.',
          'Share space on the couch or floor.',
          'Share books by looking together.',
          'Share parent attention with siblings or partners.',
          'Narrate every sharing instance.',
          'Model sharing your things with baby\'s name.',
          'Create a culture of generosity and cooperation.'
        ],
        examples: [
          'Meal time: "This is my plate, that\'s your plate. We\'re sharing the table and sharing this meal together!"',
          'Story time: "I\'ll hold one side of the book, you hold the other. We\'re sharing the book! We both get to see!"'
        ],
        watchFor: [
          'Baby\'s name recognizing sharing situations.',
          'Attempting to share spontaneously.',
          'Using sharing language independently.',
          'Showing pride in cooperative behavior.'
        ],
        parentTip: 'Sharing your stuff with them teaches sharing better than forcing them to share their special toys.',
        funTwist: 'Share everything game: "Let\'s share the sunshine! Let\'s share the music! Let\'s share the smiles!" Make sharing everywhere.'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful sharing language learning',
          'You and baby\'s name practiced turn-taking',
          'You taught my turn and your turn vocabulary',
          'You practiced sharing and giving language',
          'You built waiting and patience skills',
          'You used sharing language in real life',
          'You built cooperation and social connection skills'
        ],
        reviewQuestions: [
          'Did baby\'s name participate in turn-taking?',
          'Could they attempt sharing with toys or you?',
          'How did they handle waiting for turns?',
          'Did you notice any spontaneous sharing?'
        ],
        parentTakeaway: {
          title: 'Sharing Language Builds Cooperation',
          content: 'When baby\'s name learns sharing vocabulary, they\'re gaining tools to navigate social situations that would otherwise be frustrating. Words like my turn, your turn, share, give, and wait help them understand and participate in cooperative play. Toddlers aren\'t naturally good at sharing because their brains are still developing impulse control and social awareness. But language speeds up this development by giving them a framework. Every time baby\'s name hears and uses sharing words, they\'re building neural pathways for patience, empathy, and cooperation. These skills directly impact future friendships and school success.'
        },
        nextSteps: [
          'Narrate all turn-taking during play this week.',
          'Model sharing constantly without forcing baby\'s name to share special toys.',
          'Practice waiting with short, manageable durations.',
          'Celebrate every sharing attempt warmly.',
          'Create opportunities for cooperative play and turn-taking throughout each day.'
        ]
      }
    }
  ]
},

// ========= LESSON 54 =========
{
  id: 54,
  phase: '2',
  quarter: 1,
  week: 11,
  weekIndex: 10,
  dayInWeek: 4,
  title: 'Lesson 54: Emotion Words Feelings and Expression',
  theme: 'Everyday Conversations',
  skillRecurrenceTags: ['emotion-vocabulary', 'feelings', 'expression', 'social-awareness'],
  relatedToPreviousSkills: ['facial-expressions', 'vocabulary', 'communication', 'social-language'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Emotion Learning',
      duration: '1 min',
      content: {
        goal: 'Build emotional vocabulary by teaching feeling words. Baby\'s name learns to name emotions in themselves and others.',
        parentGuide: [
          'Emotion words help children understand and regulate their feelings.',
          'Naming emotions reduces tantrums by giving children alternative ways to express needs.',
          'This lesson continues Week 11 everyday conversation focus through emotional literacy.',
          'Children who can name feelings have better social relationships and self-control.'
        ],
        materials: ['Mirror for facial expressions', 'Picture books with character emotions', 'Emotion face cards or drawings (optional)', 'Your expressive face and voice'],
        tip: 'Name your own emotions constantly. "Mommy feels happy! Mommy feels tired." Model emotional awareness.',
        researchNote: 'Denham et al. (2003) found that early emotion vocabulary predicts later social competence, empathy, and school readiness.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Happy and Sad Faces',
      duration: '3-4 min',
      focus: 'Basic Emotion Recognition',
      researchBasis: 'Widen & Russell (2008) showed that toddlers learn happy and sad first, forming the foundation for more complex emotion understanding.',
      content: {
        goal: 'Teach baby\'s name to recognize and name happy and sad. Build basic emotion vocabulary.',
        whatToSay: [
          '"This is a happy face! See the smile? Happy! Can you make a happy face?"',
          '"Now this is sad. Sad face has a frown. Sad. Can you make a sad face?"',
          '"Look at baby\'s name in the mirror! Are you happy or sad? You look happy! Big smile!"',
          '"Let\'s find happy and sad in our book. Is this character happy or sad?"',
          '"You can tell how people feel by their faces! You\'re learning feelings!"'
        ],
        whatToDo: [
          'Make exaggerated happy and sad faces.',
          'Label each emotion clearly.',
          'Look in mirror together.',
          'Make faces and name them.',
          'Encourage baby\'s name to copy expressions.',
          'Point to faces in books.',
          'Ask happy or sad about characters.',
          'Connect faces to feeling words constantly.'
        ],
        examples: [
          'Mirror play: Make huge smile. "Happy! This is happy!" Make big frown. "Sad! This is sad!" Baby\'s name tries each face.',
          'Book time: Point to smiling character. "Is this baby happy or sad? Happy! See the smile?" Point to crying baby. "This one is sad."'
        ],
        watchFor: [
          'Baby\'s name making facial expressions.',
          'Attempting to say happy or sad.',
          'Pointing to faces that match emotions.',
          'Understanding that faces show feelings.'
        ],
        parentTip: 'Exaggerate expressions at first. Toddlers learn from clear, obvious examples before subtle ones.',
        funTwist: 'Emotion switching: "Happy, happy, happy, SAD! Sad, sad, sad, HAPPY!" Quick switches make them laugh while learning.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Mad and Scared Feelings',
      duration: '3-4 min',
      focus: 'Expanding Emotion Vocabulary',
      researchBasis: 'Denham et al. (2003) found that teaching multiple emotion words early helps children understand and regulate difficult feelings like anger and fear.',
      content: {
        goal: 'Add mad (angry) and scared to baby\'s name\'s emotion vocabulary. Build emotional awareness.',
        whatToSay: [
          '"This is a mad face. Mad means angry. See the grumpy face? Mad!"',
          '"When you feel mad, your face looks like this. Sometimes we feel mad. That\'s okay!"',
          '"This is scared. Scared means worried or frightened. Scared face looks like this."',
          '"When something surprising happens, we might feel scared. Then we need a hug!"',
          '"You\'re learning so many feeling words! Happy, sad, mad, scared. These are all feelings!"'
        ],
        whatToDo: [
          'Model mad face with furrowed brows.',
          'Label mad clearly.',
          'Make scared face with wide eyes.',
          'Label scared clearly.',
          'Connect feelings to situations: "When someone takes your toy, you feel mad."',
          'Normalize all emotions as okay to feel.',
          'Practice making each face.',
          'Always offer comfort after scared.'
        ],
        examples: [
          'Mad practice: Make angry face. "Mad! This is mad! Sometimes when things don\'t go our way, we feel mad. Mad mad mad!"',
          'Scared practice: Make startled face. "Scared! Uh oh, I\'m scared! When we\'re scared, we can get a hug. Hug makes scared go away."'
        ],
        watchFor: [
          'Baby\'s name attempting mad and scared faces.',
          'Understanding these are different from happy/sad.',
          'Recognizing mad or scared in books or real life.',
          'Beginning to label their own feelings.'
        ],
        parentTip: 'Validate all feelings: "It\'s okay to feel mad. Mad is a normal feeling. Let\'s take deep breaths together."',
        funTwist: 'Emotion story: "The bear was happy. Then he got scared! Then he got mad! Then he was happy again!" Act out with faces.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Naming Your Own Feelings',
      duration: '2-3 min',
      focus: 'Personal Emotion Identification',
      researchBasis: 'Cole et al. (2004) showed that helping children label their own emotions significantly improves emotional regulation and reduces tantrums.',
      content: {
        goal: 'Help baby\'s name identify and name their current feelings. Build self-awareness.',
        whatToSay: [
          '"How do you feel right now? Do you feel happy? You\'re smiling! You feel happy!"',
          '"Are you feeling sad? Your face looks sad. It\'s okay to feel sad. Mommy is here."',
          '"I think you feel mad because you wanted that toy. You feel mad. Mad is okay."',
          '"You look a little scared of that loud noise. Feeling scared is okay. I\'m right here."',
          '"You told me how you feel! Using words for feelings helps us understand each other!"'
        ],
        whatToDo: [
          'Observe baby\'s name\'s facial expressions.',
          'Name what you think they\'re feeling.',
          'Ask how they feel.',
          'Accept any response or no response.',
          'Validate their feeling: "It\'s okay to feel that way."',
          'Offer comfort or support.',
          'Model naming your own feelings.',
          'Create safe space for all emotions.'
        ],
        examples: [
          'After frustration: "I see you feel mad. You wanted to stack those blocks and they fell. You feel mad. That\'s okay. We can try again."',
          'During play: "You look so happy playing! Do you feel happy? Happy happy! Playing makes you feel happy!"'
        ],
        watchFor: [
          'Baby\'s name responding to feeling questions.',
          'Attempting to name their emotions.',
          'Self-awareness of internal states.',
          'Accepting comfort when feeling difficult emotions.'
        ],
        parentTip: 'You name their feelings until they can name them themselves. Your words become their internal voice.',
        funTwist: 'Feelings check-in song: "How do you feel? How do you feel? Are you happy or sad or mad today?" Sing it regularly.'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Feelings in Stories and Real Life',
      duration: '2-3 min',
      focus: 'Applied Emotion Vocabulary',
      researchBasis: 'Tenenbaum et al. (2008) found that discussing emotions in stories and daily life builds empathy, theory of mind, and emotional intelligence.',
      content: {
        goal: 'Identify and discuss emotions in books and daily moments. Build emotional literacy.',
        whatToSay: [
          '"Look at this character. How does she feel? She looks happy! She\'s smiling!"',
          '"This puppy lost his toy. How does he feel? Sad! The puppy feels sad."',
          '"When brother cries, how does he feel? Sad or mad? He feels sad. Let\'s help him feel better."',
          '"Daddy is laughing! How does daddy feel? Happy! Daddy feels happy because we\'re all together!"',
          '"You can tell how everyone feels! That helps you be a good friend!"'
        ],
        whatToDo: [
          'Point to characters in books.',
          'Ask about their feelings.',
          'Help baby\'s name identify emotions.',
          'Discuss family members\' feelings.',
          'Notice emotions in daily life.',
          'Name what others are feeling.',
          'Connect feelings to situations.',
          'Build empathy by noticing others\' emotions.'
        ],
        examples: [
          'Story time: "The bunny can\'t find his mommy. How does bunny feel? Scared and sad! Poor bunny. Then he finds mommy. Now happy!"',
          'Real life: "Look, sister is crying. She feels sad. Can we give her a hug to help her feel better? Hugs help sad feelings."'
        ],
        watchFor: [
          'Baby\'s name identifying emotions in others.',
          'Showing concern for others\' feelings.',
          'Understanding feelings have causes.',
          'Beginning to show empathy.'
        ],
        parentTip: 'Narrate everyone\'s emotions constantly. This builds emotional intelligence and empathy beyond self-awareness.',
        funTwist: 'Feelings detective: "Let\'s be feelings detectives! How does everyone feel today? Let\'s find out!" Investigate everyone\'s emotions.'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful emotion learning',
          'You and baby\'s name explored feelings',
          'You taught happy and sad faces',
          'You introduced mad and scared emotions',
          'You helped baby\'s name name their own feelings',
          'You found feelings in stories and real life',
          'You built emotional vocabulary and self-awareness'
        ],
        reviewQuestions: [
          'Could baby\'s name make different emotion faces?',
          'Did they attempt to name any feelings?',
          'How did they respond to emotion discussions?',
          'Did you notice increased emotional awareness?'
        ],
        parentTakeaway: {
          title: 'Emotion Words Prevent Tantrums',
          content: 'When baby\'s name learns to name emotions, they gain power over their feelings. Toddlers tantrum partly because they feel big emotions but have no words for them. The frustration of feeling something intense without being able to communicate it leads to meltdowns. Every emotion word you teach gives baby\'s name an alternative to screaming or hitting. Instead of crying, they can eventually say "sad" or "mad." This doesn\'t happen overnight, but consistent emotion labeling builds the foundation. Children with strong emotion vocabulary have better self-regulation, fewer behavior problems, and stronger relationships. You\'re giving baby\'s name the language to understand themselves.'
        },
        nextSteps: [
          'Name emotions constantly throughout every day.',
          'Label your own feelings: "Mommy feels tired. Mommy feels excited."',
          'Ask about baby\'s name\'s feelings regularly.',
          'Discuss character emotions in every book.',
          'Validate all feelings as normal and acceptable while guiding behavior.'
        ]
      }
    }
  ]
},

// ========= LESSON 55 =========
{
  id: 55,
  phase: '2',
  quarter: 1,
  week: 11,
  weekIndex: 10,
  dayInWeek: 5,
  title: 'Lesson 55: I Want Language Expressing Needs and Choices',
  theme: 'Everyday Conversations',
  skillRecurrenceTags: ['expressing-needs', 'choice-making', 'vocabulary', 'communication'],
  relatedToPreviousSkills: ['requests', 'polite-language', 'emotion-words', 'vocabulary'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Choice Expression Learning',
      duration: '1 min',
      content: {
        goal: 'Build expressive language by teaching baby\'s name to say what they want. Baby\'s name learns to communicate needs, preferences, and choices clearly.',
        parentGuide: [
          'The phrase I want gives children power to express desires instead of just crying or pointing.',
          'Choice-making builds decision skills and reduces frustration when children feel heard.',
          'This lesson completes Week 11 everyday conversation focus through need expression.',
          'Children who can express wants have fewer tantrums and stronger communication skills.'
        ],
        materials: ['Toys or objects for choice-making', 'Snacks with options', 'Books for selection', 'Your patient listening and response'],
        tip: 'Offer real choices with two options. Too many choices overwhelm toddlers, but two builds decision skills.',
        researchNote: 'Rowe (2012) found that encouraging children to express preferences and needs significantly accelerates expressive language and vocabulary growth.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: I Want Basic Phrase',
      duration: '3-4 min',
      focus: 'Want Expression Vocabulary',
      researchBasis: 'Tomasello (2003) showed that teaching simple request frames like I want gives children templates for expressing communicative intent.',
      content: {
        goal: 'Teach baby\'s name to use the phrase I want plus an object. Build request language.',
        whatToSay: [
          '"When you want something, you can say I want. I want ball. I want ball."',
          '"Do you want the ball? Say I want ball. I want ball."',
          '"Yes! You said I want ball! Here it is. Your words told me what you want!"',
          '"Let\'s try again. Do you want milk? Say I want milk. I want milk."',
          '"You\'re using I want words! That helps me understand what you need!"'
        ],
        whatToDo: [
          'Model I want with an object name.',
          'Hold up something baby\'s name likes.',
          'Say Do you want this? Say I want ___.',
          'Accept any attempt: I wa, want, or just the object name.',
          'Give them the item when they try.',
          'Repeat with multiple objects.',
          'Always model the full phrase.',
          'Celebrate every communication attempt.'
        ],
        examples: [
          'Hold toy car. "Do you want car? Say I want car." Baby\'s name says "want car" or "car." "Yes! I want car! Here it is!"',
          'Show snack. "Say I want cracker. I want cracker." They try "wa cacker." "I want cracker! Good! Here\'s your cracker!"'
        ],
        watchFor: [
          'Baby\'s name attempting I want or want.',
          'Pairing words with reaching or pointing.',
          'Understanding the phrase gets them things.',
          'Beginning to use the phrase spontaneously.'
        ],
        parentTip: 'You complete the phrase for them until they can say it all. You want ball? I want ball. I\'ll help you say it.',
        funTwist: 'Silly wants: "I want elephant! I want spaceship!" Offer silly impossible things and laugh together. "We don\'t have elephant!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Making Choices This or That',
      duration: '3-4 min',
      focus: 'Decision-Making Language',
      researchBasis: 'Vygotsky (1978) emphasized that choice-making supports cognitive development and that verbalizing choices builds language and decision skills.',
      content: {
        goal: 'Offer baby\'s name choices between two options. Build decision-making and preference expression.',
        whatToSay: [
          '"Do you want the red ball or the blue ball? Red or blue? You choose!"',
          '"Which one do you want? Point to the one you want. This one or that one?"',
          '"You picked the blue ball! You chose blue! Good choosing!"',
          '"Let\'s choose a snack. Apple or banana? Which do you want? Apple or banana?"',
          '"You\'re making choices! Choosing helps you tell me what you like!"'
        ],
        whatToDo: [
          'Hold up two objects.',
          'Name both options clearly.',
          'Ask which one they want.',
          'Wait for pointing, reaching, or naming.',
          'Give them their choice immediately.',
          'Celebrate their decision.',
          'Offer choices throughout the day.',
          'Keep choices to two items only.'
        ],
        examples: [
          'Hold two toys. "Car or train? Which do you want?" Baby\'s name points to car. "You want car! Good choice! Here\'s the car!"',
          'Show two books. "This book or that book? You pick!" They point. "You chose this one! Let\'s read your choice!"'
        ],
        watchFor: [
          'Baby\'s name making clear choices.',
          'Pointing or reaching to indicate preference.',
          'Attempting to name their choice.',
          'Understanding they have decision power.'
        ],
        parentTip: 'Real choices empower children. Respect their choices when you offer them. Don\'t override unless safety requires it.',
        funTwist: 'Speed choice game: "Quick! Red or blue? Fast! Choose! Cat or dog? Choose!" Make rapid silly choices for fun.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: I Want Plus Please',
      duration: '2-3 min',
      focus: 'Combining Polite Request Phrases',
      researchBasis: 'Hart & Risley (1995) found that children who use complete polite request phrases develop stronger social language and peer relationships.',
      content: {
        goal: 'Combine I want with please for complete polite requests. Build mature request language.',
        whatToSay: [
          '"Now let\'s use both words. I want ball please. I want ball please."',
          '"Can you say I want milk please? I want milk please. That\'s a polite way to ask!"',
          '"Good! You said I want it please! That\'s such nice asking!"',
          '"When we want something, we say I want and we say please. Both words together!"',
          '"You\'re making polite requests! I want plus please is perfect asking!"'
        ],
        whatToDo: [
          'Model the full phrase: I want ___ please.',
          'Encourage baby\'s name to repeat.',
          'Accept partial attempts.',
          'Give items when they try the phrase.',
          'Emphasize both parts: want plus please.',
          'Practice with multiple items.',
          'Show how polite requests get positive responses.',
          'Celebrate combination phrases.'
        ],
        examples: [
          'Show toy. "Say I want toy please." Baby\'s name tries "wan toy peas." "Yes! I want toy please! So polite! Here it is!"',
          'Offer snack. "How do we ask? I want snack please!" They try parts of it. "Good trying! Here\'s your snack!"'
        ],
        watchFor: [
          'Baby\'s name attempting the longer phrase.',
          'Understanding polite requests work well.',
          'Combining multiple words in requests.',
          'Growing phrase complexity.'
        ],
        parentTip: 'Long phrases are hard. Celebrate any attempt at combining words, even if not perfect.',
        funTwist: 'Robot requests: "Beep boop. I. Want. Book. Please. Beep boop." Talk like robots making polite requests.'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: All Day Want Language',
      duration: '2-3 min',
      focus: 'Applied Need Expression',
      researchBasis: 'Weisleder & Fernald (2013) showed that consistent conversational turns about preferences throughout the day accelerates language development significantly.',
      content: {
        goal: 'Use I want language throughout daily routines. Transfer practice to real life needs and choices.',
        whatToSay: [
          '"Let\'s use I want words all day! When you want something, tell me I want!"',
          '"Do you want to go outside? Say I want outside! Or I want to stay inside!"',
          '"What do you want for lunch? I want this or I want that? You tell me!"',
          '"At bedtime, do you want this pajamas or that pajamas? Say I want these!"',
          '"You\'re telling me what you want all day! Your words help me understand you!"'
        ],
        whatToDo: [
          'Prompt I want throughout daily routines.',
          'Offer choices at meals, play, and transitions.',
          'Wait for baby\'s name to express wants.',
          'Accept pointing, words, or approximations.',
          'Respond quickly to their expressions.',
          'Model want language constantly.',
          'Create natural opportunities for requests.',
          'Build communication into every activity.'
        ],
        examples: [
          'Getting dressed: "Which shirt? I want blue or I want red?" Baby\'s name points. "You want blue! Good telling me!"',
          'Play time: "What do you want to play? Blocks or puzzles? I want blocks!" Model and let them choose.'
        ],
        watchFor: [
          'Baby\'s name using want language spontaneously.',
          'Making requests instead of crying or pointing.',
          'Showing confidence in expressing needs.',
          'Understanding communication power.'
        ],
        parentTip: 'The goal is reducing frustration. When they can tell you what they want, tantrums decrease dramatically.',
        funTwist: 'Want parade: "I want to dance! I want to spin! I want to jump!" Do silly wants with actions. Let them lead wants.'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful choice expression learning',
          'You and baby\'s name practiced need communication',
          'You taught I want request language',
          'You offered choices for decision-making',
          'You combined want with please for polite requests',
          'You used want language throughout the day',
          'You built expressive communication and self-advocacy skills'
        ],
        reviewQuestions: [
          'Did baby\'s name attempt to say I want?',
          'Could they make clear choices between options?',
          'How often did they use want language?',
          'Did expressing wants reduce frustration?'
        ],
        parentTakeaway: {
          title: 'Want Words Give Children Voice',
          content: 'When baby\'s name learns to say what they want, they\'re developing self-advocacy skills that last a lifetime. The ability to express needs clearly is fundamental to all relationships and success. Toddlers without want language resort to crying, hitting, or tantrums because they have no other tools. Every time you teach baby\'s name to say I want, you\'re giving them a replacement behavior for frustration. This directly prevents behavior problems and builds communication confidence. Children who can express wants clearly are more independent, less anxious, and better prepared for school. You\'re teaching baby\'s name that their voice matters and their needs are important.'
        },
        nextSteps: [
          'Prompt I want before giving things this week.',
          'Offer two choices at every opportunity.',
          'Wait patiently for baby\'s name to express wants.',
          'Model want language in your own communication.',
          'Celebrate all attempts at expressing needs, even if unclear at first.'
        ]
      }
    }
  ]
},

// ========= LESSON 56 =========
{
  id: 56,
  phase: '2',
  quarter: 1,
  week: 12,
  weekIndex: 11,
  dayInWeek: 1,
  title: 'Lesson 56: Rhythm Retell Story and Rhyme Review',
  theme: 'Sound and Story Integration',
  skillRecurrenceTags: ['rhythm', 'story-retelling', 'rhyme', 'sequencing'],
  relatedToPreviousSkills: ['rhyming', 'story-comprehension', 'rhythm', 'vocabulary'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Rhythm Story Learning',
      duration: '1 min',
      content: {
        goal: 'Combine rhythm, rhyme, and story skills through retelling. Baby\'s name learns to recreate favorite rhymes and stories using clapping and movement.',
        parentGuide: [
          'Rhythm helps children remember story sequences and language patterns.',
          'Retelling with rhythm adds a physical memory component to verbal memory.',
          'This lesson begins Week 12 sound and story integration through rhythmic retelling.',
          'Combining multiple skills (rhythm, rhyme, sequence) builds neural connections.'
        ],
        materials: ['Favorite nursery rhyme books', 'Simple story books baby\'s name knows', 'Instruments or items for rhythm (optional)', 'Your enthusiasm and clapping'],
        tip: 'Use familiar rhymes and stories. Knowing the content lets baby\'s name focus on the rhythm.',
        researchNote: 'Trainor et al. (2005) found that rhythm activities enhance phonological awareness, memory, and language development in young children.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Clap the Rhyme',
      duration: '3-4 min',
      focus: 'Rhythmic Rhyme Recreation',
      researchBasis: 'Anthony & Francis (2005) showed that rhythmic activities with rhymes significantly strengthen phonological awareness and early reading skills.',
      content: {
        goal: 'Retell favorite nursery rhymes while clapping the rhythm. Build memory and rhythm skills together.',
        whatToSay: [
          '"Let\'s say Twinkle Twinkle and clap! Twinkle twinkle little star, clap clap clap!"',
          '"Each word gets a clap! Twin-kle twin-kle lit-tle star! Clap for every word!"',
          '"Now you try! Clap and say it with me! Twinkle twinkle little star!"',
          '"Great clapping! The rhythm helps us remember the words!"',
          '"Let\'s try another rhyme with clapping! Row row row your boat, clap clap clap!"'
        ],
        whatToDo: [
          'Choose a familiar nursery rhyme.',
          'Say it while clapping each syllable or word.',
          'Encourage baby\'s name to clap along.',
          'Repeat the rhyme multiple times.',
          'Try different rhymes with clapping.',
          'Emphasize the beat and pattern.',
          'Let baby\'s name lead the clapping.',
          'Make it energetic and fun.'
        ],
        examples: [
          'Humpty Dumpty: "Hump-ty Dump-ty sat on a wall, clap clap clap clap clap clap clap! Hump-ty Dump-ty had a great fall!"',
          'Pat-a-cake: "Pat-a-cake pat-a-cake baker\'s man, clap the rhythm! Bake me a cake as fast as you can!"'
        ],
        watchFor: [
          'Baby\'s name clapping with the rhythm.',
          'Attempting to say words while clapping.',
          'Understanding the connection between rhythm and words.',
          'Enjoying the rhythmic retelling.'
        ],
        parentTip: 'Clapping gives children a physical way to feel language rhythm. This builds phonological awareness.',
        funTwist: 'Change the clap: stomp the rhyme, tap heads, pat knees! Keep the rhythm but change the action.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Story Rhythm Recreation',
      duration: '3-4 min',
      focus: 'Rhythmic Story Sequencing',
      researchBasis: 'Saffran et al. (1996) found that rhythm helps children segment and remember sequential information like story events.',
      content: {
        goal: 'Retell a simple familiar story with rhythm and clapping. Build story memory through rhythm.',
        whatToSay: [
          '"Let\'s tell the story of The Three Little Pigs with claps!"',
          '"First pig built with straw, clap clap clap! Second pig built with sticks, clap clap clap!"',
          '"Third pig built with bricks, clap clap clap! Wolf came and huffed and puffed, clap clap!"',
          '"The rhythm helps us remember what happened first, next, and last!"',
          '"Let\'s retell it again with our clapping rhythm!"'
        ],
        whatToDo: [
          'Choose a simple story baby\'s name knows.',
          'Break it into 3-4 main events.',
          'Say each event with clapping.',
          'Keep rhythm consistent.',
          'Repeat the story with rhythm.',
          'Let baby\'s name clap along.',
          'Act out events while clapping.',
          'Build story sequence memory.'
        ],
        examples: [
          'Goldilocks: "Goldilocks found three bowls, clap clap clap! Too hot, too cold, just right, clap! Found three chairs, clap clap clap!"',
          'Brown Bear: "Brown Bear saw a red bird, clap clap! Red bird saw a yellow duck, clap clap! Each animal saw another, clap!"'
        ],
        watchFor: [
          'Baby\'s name following the story sequence.',
          'Clapping along with events.',
          'Remembering what comes next.',
          'Understanding rhythm helps memory.'
        ],
        parentTip: 'Stories with repetitive patterns work best. The rhythm mirrors the story\'s natural pattern.',
        funTwist: 'Speed changes: tell the story slow with slow claps, then fast with fast claps! Change the tempo.'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Movement Retelling',
      duration: '2-3 min',
      focus: 'Physical Story Recreation',
      researchBasis: 'Diamond (1990) showed that combining movement with language significantly enhances memory and cognitive development.',
      content: {
        goal: 'Retell rhymes or stories using full body movements. Build physical memory of narratives.',
        whatToSay: [
          '"Let\'s act out our rhyme! Jack be nimble, Jack be quick, jump over the candlestick!"',
          '"We jump when we say jump! We can move the whole story!"',
          '"Itsy bitsy spider climbed up the water spout, move your fingers climbing up!"',
          '"Down came the rain, wiggle fingers down! Out came the sun, arms make a circle!"',
          '"Moving our bodies helps us remember the story!"'
        ],
        whatToDo: [
          'Choose action-rich rhymes or stories.',
          'Create movements for each part.',
          'Act out the rhyme or story together.',
          'Repeat with consistent movements.',
          'Let baby\'s name lead movements.',
          'Make movements big and clear.',
          'Connect each action to story events.',
          'Build motor memory of sequences.'
        ],
        examples: [
          'Five Little Monkeys: Jump on jumping on bed, fall down on one fell off, shake finger on no more monkeys!',
          'Wheels on Bus: Roll arms for wheels, swish for wipers, cry for babies, move up-down for people standing up!'
        ],
        watchFor: [
          'Baby\'s name doing movements with words.',
          'Remembering which movement goes with which part.',
          'Anticipating movements before you do them.',
          'Enjoying physical storytelling.'
        ],
        parentTip: 'Physical memory is powerful. Kids remember stories they\'ve acted out much better than ones just heard.',
        funTwist: 'Silly movement story: use totally wrong movements! Spin when you should clap! Mix it up and laugh!'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Choose Your Favorite to Retell',
      duration: '2-3 min',
      focus: 'Independent Story Selection',
      researchBasis: 'Bus & van IJzendoorn (1995) found that child-selected stories lead to deeper engagement and better comprehension.',
      content: {
        goal: 'Let baby\'s name choose a rhyme or story to retell with rhythm. Build autonomy and confidence.',
        whatToSay: [
          '"Which rhyme do you want to retell? You pick! This one or that one?"',
          '"You chose Twinkle Twinkle! Great choice! Let\'s retell it with clapping!"',
          '"Show me how it goes! You lead the clapping and I\'ll follow you!"',
          '"You\'re retelling your favorite! You remember it so well!"',
          '"You can retell stories and rhymes! That shows you really understand them!"'
        ],
        whatToDo: [
          'Offer 2-3 favorite rhymes or stories.',
          'Let baby\'s name choose.',
          'Follow their lead in retelling.',
          'Let them set the rhythm or movements.',
          'Support their retelling.',
          'Celebrate their choice and effort.',
          'Repeat their favorite multiple times.',
          'Build confidence in story recreation.'
        ],
        examples: [
          'Baby\'s name picks Pat-a-cake. You follow their clapping and say it together: "Pat-a-cake pat-a-cake baker\'s man!"',
          'They choose Brown Bear book. You let them turn pages and you both say: "Brown Bear Brown Bear what do you see?"'
        ],
        watchFor: [
          'Baby\'s name making clear choices.',
          'Taking ownership of the retelling.',
          'Leading rhythm or movements.',
          'Pride in their retelling ability.'
        ],
        parentTip: 'Letting them lead builds confidence. Follow their version even if it\'s not perfect.',
        funTwist: 'Make up a new rhyme together: "Baby\'s name baby\'s name what do you see? I see mommy looking at me!" Create your own.'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful rhythm retelling learning',
          'You and baby\'s name combined rhythm with stories',
          'You clapped through favorite rhymes',
          'You added rhythm to story retelling',
          'You acted out stories with movement',
          'You let baby\'s name choose favorites to retell',
          'You built memory, rhythm, and story comprehension skills'
        ],
        reviewQuestions: [
          'Could baby\'s name clap along with rhymes?',
          'Did they follow story sequences with rhythm?',
          'How engaged were they with movement retelling?',
          'Did they show ownership when choosing favorites?'
        ],
        parentTakeaway: {
          title: 'Rhythm Strengthens Story Memory',
          content: 'When baby\'s name retells stories with rhythm and movement, they\'re encoding information in multiple ways: verbally, physically, and rhythmically. This multi-modal approach creates stronger memory traces than passive listening alone. The rhythm provides a scaffold for remembering sequence and language patterns. Children who practice rhythmic retelling show better story comprehension, sequencing skills, and phonological awareness. These are all foundational pre-reading skills. Every clap, movement, and retelling builds the neural connections needed for reading fluency later. Baby\'s name isn\'t just playing, they\'re building the architecture for literacy.'
        },
        nextSteps: [
          'Add rhythm to story time every day this week.',
          'Let baby\'s name lead retelling with clapping.',
          'Create movements for favorite stories.',
          'Encourage retelling throughout daily routines.',
          'Celebrate all attempts at rhythmic story recreation.'
        ]
      }
    }
  ]
},

// ========= LESSON 57 =========
{
  id: 57,
  phase: '2',
  quarter: 1,
  week: 12,
  weekIndex: 11,
  dayInWeek: 2,
  title: 'Lesson 57: Rhyme and Draw Picture and Sound Matching',
  theme: 'Sound and Story Integration',
  skillRecurrenceTags: ['rhyming', 'visual-matching', 'creativity', 'phonological-awareness'],
  relatedToPreviousSkills: ['rhyming', 'object-naming', 'vocabulary', 'sound-awareness'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Rhyme and Picture Learning',
      duration: '1 min',
      content: {
        goal: 'Connect rhyming sounds to visual representations. Baby\'s name learns to match pictures of rhyming words and create simple drawings.',
        parentGuide: [
          'Visual representations of rhymes help children understand that different objects can share sounds.',
          'Drawing (even scribbling) rhyming objects builds the connection between sound and symbol.',
          'This lesson continues Week 12 sound and story integration through visual-auditory pairing.',
          'Matching pictures to sounds is a pre-reading skill that builds phonological awareness.'
        ],
        materials: ['Paper and crayons or markers', 'Picture cards or simple drawings of rhyming objects', 'Books with rhyming pictures', 'Your encouragement and creativity'],
        tip: 'Accept all drawing attempts. Scribbles are fine. The goal is connecting sound to visual representation.',
        researchNote: 'Lonigan et al. (2000) found that activities combining visual and phonological elements significantly enhance early literacy development.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Find Rhyming Pictures',
      duration: '3-4 min',
      focus: 'Visual Rhyme Recognition',
      researchBasis: 'Anthony & Francis (2005) showed that visual support for rhyming activities strengthens phonological awareness and sound discrimination skills.',
      content: {
        goal: 'Look at pictures and identify which ones rhyme. Build visual-auditory rhyme connections.',
        whatToSay: [
          '"Let\'s find pictures that rhyme! Here\'s a cat. Cat. What rhymes with cat? Hat! Hat rhymes with cat!"',
          '"Look at these pictures. Cat and hat. Do they rhyme? Yes! Cat, hat. They sound the same at the end!"',
          '"Here\'s a dog. Dog. And here\'s a frog. Frog. Do dog and frog rhyme? Yes! Dog, frog!"',
          '"You found the rhyming pictures! You can hear and see rhymes!"',
          '"Let\'s find more rhyming picture pairs!"'
        ],
        whatToDo: [
          'Show or draw simple pictures of objects.',
          'Say the names clearly.',
          'Ask which pictures rhyme.',
          'Point to rhyming pairs together.',
          'Emphasize the rhyming sounds.',
          'Use 2-3 rhyming pairs.',
          'Let baby\'s name point to rhymes.',
          'Celebrate all attempts at matching.'
        ],
        examples: [
          'Draw or show: cat, hat, car. "Which two rhyme? Cat and hat! They rhyme! Car doesn\'t rhyme with cat."',
          'Pictures: bee, tree, dog. "Bee and tree rhyme! Bee, tree. They sound the same! Dog is different."'
        ],
        watchFor: [
          'Baby\'s name pointing to rhyming pictures.',
          'Attempting to say rhyming words.',
          'Understanding that pictures represent sounds.',
          'Making connections between visual and auditory.'
        ],
        parentTip: 'Simple line drawings work perfectly. You don\'t need artistic skill, just recognizable shapes.',
        funTwist: 'Wrong rhyme game: "Does cat rhyme with tree? No! That\'s silly! Cat rhymes with hat!" Make wrong matches funny.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Draw Rhyming Objects',
      duration: '3-4 min',
      focus: 'Creative Rhyme Expression',
      researchBasis: 'Bus & van IJzendoorn (1995) found that creative activities with phonological elements enhance engagement and learning in early literacy.',
      content: {
        goal: 'Draw (or scribble) pictures of rhyming objects together. Build sound-symbol connections through creation.',
        whatToSay: [
          '"Let\'s draw things that rhyme! First, let\'s draw a cat. Here\'s my cat!"',
          '"Now let\'s draw something that rhymes with cat. What rhymes with cat? Hat! Let\'s draw a hat!"',
          '"You\'re drawing cat and hat! They rhyme! Cat, hat!"',
          '"Let\'s draw more rhymes! Let\'s draw a star. What rhymes with star? Car! Draw a car!"',
          '"You drew rhyming pictures! You made rhymes with your crayons!"'
        ],
        whatToDo: [
          'Start with a simple object to draw.',
          'Say its name clearly.',
          'Ask what rhymes with it.',
          'Draw the rhyming object together.',
          'Accept any scribbles or marks.',
          'Name both objects repeatedly.',
          'Emphasize the rhyme.',
          'Do 2-3 rhyming pairs.'
        ],
        examples: [
          'Draw circle for sun. "This is sun! What rhymes? Run! Let\'s draw a person running! Sun, run! They rhyme!"',
          'Scribble for dog. "Dog! What rhymes with dog? Log! Draw a log here! Dog, log!"'
        ],
        watchFor: [
          'Baby\'s name attempting to draw or scribble.',
          'Engaging with the creative process.',
          'Saying or attempting rhyming words.',
          'Understanding connection between drawing and words.'
        ],
        parentTip: 'The drawing quality doesn\'t matter at all. A scribble labeled cat is perfect. The sound connection is what counts.',
        funTwist: 'Silly drawing: "Let\'s draw a pickle that rhymes with... tickle! Draw a tickle! How do we draw tickle? Silly wiggly lines!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Rhyme Matching Game',
      duration: '2-3 min',
      focus: 'Active Rhyme Pairing',
      researchBasis: 'Rowe (2012) showed that interactive matching games with phonological elements significantly accelerate sound awareness and vocabulary.',
      content: {
        goal: 'Match drawn or printed pictures into rhyming pairs. Build active rhyme discrimination.',
        whatToSay: [
          '"Let\'s play rhyme matching! I\'ll put out pictures. You find the ones that rhyme!"',
          '"Here\'s a cat. Can you find what rhymes with cat? Look for hat! You found it! Cat, hat!"',
          '"Now find two more that rhyme. Look at all the pictures. Which two sound the same?"',
          '"You matched star and car! They rhyme! Star, car!"',
          '"You\'re a rhyme matcher! You can find words that sound the same!"'
        ],
        whatToDo: [
          'Lay out 4-6 pictures (2-3 rhyming pairs).',
          'Name each picture clearly.',
          'Ask baby\'s name to find rhyming pairs.',
          'Guide them to match pictures.',
          'Celebrate each match.',
          'Say both rhyming words together.',
          'Mix up and repeat.',
          'Keep it playful and low-pressure.'
        ],
        examples: [
          'Pictures: cat, hat, dog, frog. "Find two that rhyme!" Baby\'s name puts cat with hat. "Yes! Cat, hat!"',
          'Pictures: bee, tree, box, fox. "Which ones rhyme?" They match bee and tree. "Bee, tree! Perfect rhyme!"'
        ],
        watchFor: [
          'Baby\'s name successfully matching some pairs.',
          'Using sound to guide matching.',
          'Growing confidence in rhyme identification.',
          'Enjoying the game aspect.'
        ],
        parentTip: 'If they struggle, model it first. Then let them try. Learning by watching is valuable.',
        funTwist: 'Speed matching: "How fast can you find the rhymes? Ready, set, go! Find them quick!" Make it exciting.'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Rhyme Picture Book Hunt',
      duration: '2-3 min',
      focus: 'Applied Rhyme Recognition',
      researchBasis: 'Whitehurst & Lonigan (1998) found that interactive picture book activities focused on phonological patterns enhance emergent literacy skills.',
      content: {
        goal: 'Find rhyming objects in picture books. Transfer rhyme skills to reading context.',
        whatToSay: [
          '"Let\'s find rhymes in our books! Look at this page. Do you see anything that rhymes?"',
          '"I see a bee in the tree! Bee, tree! They rhyme! Can you point to the bee and tree?"',
          '"Let\'s look for more rhyming pictures in this book. What do you see?"',
          '"You found a cat wearing a hat! Cat, hat! Rhymes in the book!"',
          '"Books are full of rhymes! You can find them and hear them!"'
        ],
        whatToDo: [
          'Choose picture books with rhyming elements.',
          'Look through pages together.',
          'Point out rhyming objects in pictures.',
          'Ask baby\'s name to find rhymes.',
          'Name objects and emphasize rhymes.',
          'Let them point to rhyming pictures.',
          'Read any rhyming text.',
          'Make connections between pictures and sounds.'
        ],
        examples: [
          'Dr. Seuss book: "Look! A fox in a box! Fox, box! They rhyme and they\'re in the picture!"',
          'Nursery rhyme book: "There\'s Jack and a candlestick! Jack, candlestick doesn\'t rhyme. But look, Jack fell down!"'
        ],
        watchFor: [
          'Baby\'s name engaging with book pictures.',
          'Pointing to objects you name.',
          'Attempting to identify rhymes.',
          'Understanding books contain rhyming elements.'
        ],
        parentTip: 'Even if they can\'t find rhymes independently, you pointing them out builds awareness for later recognition.',
        funTwist: 'Make up silly rhymes for pictures: "I see a chair and a... bear! Even if there\'s no bear, we can rhyme!"'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful rhyme and picture learning',
          'You and baby\'s name connected sounds to images',
          'You found rhyming pictures together',
          'You drew rhyming objects',
          'You matched rhyming picture pairs',
          'You hunted for rhymes in books',
          'You built phonological awareness and visual-auditory connections'
        ],
        reviewQuestions: [
          'Could baby\'s name identify some rhyming pictures?',
          'Did they engage with drawing rhyming objects?',
          'How successful were they at matching rhymes?',
          'Did they enjoy finding rhymes in books?'
        ],
        parentTakeaway: {
          title: 'Visual Rhymes Build Reading Foundation',
          content: 'When baby\'s name connects pictures to rhyming sounds, they\'re building a crucial pre-reading skill: understanding that symbols represent sounds. This is the foundation of phonics. Later, they\'ll learn that letters represent sounds, but right now, pictures teach the same concept. Children who practice visual-auditory matching show stronger letter-sound correspondence when they begin reading. Every rhyming picture baby\'s name identifies or creates strengthens their understanding that what we see and what we hear are connected. This multi-sensory approach to rhyming accelerates phonological awareness development significantly.'
        },
        nextSteps: [
          'Draw rhyming objects throughout the week.',
          'Point out rhymes in picture books daily.',
          'Create simple rhyming picture cards to practice.',
          'Play matching games with household objects that rhyme.',
          'Celebrate all attempts at visual-auditory connections.'
        ]
      }
    }
  ]
},

// ========= LESSON 58 =========
{
  id: 58,
  phase: '2',
  quarter: 1,
  week: 12,
  weekIndex: 11,
  dayInWeek: 3,
  title: 'Lesson 58: What\'s That Sound Story Sound Effects',
  theme: 'Sound and Story Integration',
  skillRecurrenceTags: ['sound-effects', 'story-comprehension', 'listening', 'imitation'],
  relatedToPreviousSkills: ['environmental-sounds', 'story-comprehension', 'listening', 'action-words'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Sound Learning',
      duration: '1 min',
      content: {
        goal: 'Add sound effects to stories during reading. Baby\'s name learns to identify story sounds and make appropriate noises during narratives.',
        parentGuide: [
          'Sound effects make stories interactive and memorable for young children.',
          'Adding sounds to reading builds listening skills and story engagement.',
          'This lesson continues Week 12 sound and story integration through active sound participation.',
          'Sound effects help children understand that stories represent real-world actions and objects.'
        ],
        materials: ['Picture books with sound opportunities', 'Books about animals, vehicles, or weather', 'Your voice for sound effects', 'Enthusiasm for silly noises'],
        tip: 'Pause before obvious sound moments and wait for baby\'s name to add the sound. This builds anticipation.',
        researchNote: 'Fernald & Kuhl (1987) found that pausing for child participation during reading significantly enhances attention, comprehension, and language learning.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Animal Sound Stories',
      duration: '3-4 min',
      focus: 'Story Sound Imitation',
      researchBasis: 'Kuhl et al. (2003) showed that sound imitation during interactive reading accelerates phonological development and speech articulation.',
      content: {
        goal: 'Read stories with animals and pause for baby\'s name to make animal sounds. Build story participation through sounds.',
        whatToSay: [
          '"Let\'s read about animals! When we see an animal, you make its sound!"',
          '"Here\'s a dog! What does the dog say? Woof woof! You make the dog sound!"',
          '"Good! Now here\'s a cow in the story. What does cow say? Mooooo!"',
          '"Every time you see an animal, make its sound! You\'re adding sounds to our story!"',
          '"The story is more fun when you make the sounds!"'
        ],
        whatToDo: [
          'Choose a book with multiple animals.',
          'Read until an animal appears.',
          'Point to the animal.',
          'Pause and wait for baby\'s name to make the sound.',
          'If they don\'t, model it and try again.',
          'Celebrate every sound they make.',
          'Continue through the book.',
          'Repeat with sound pauses each time.'
        ],
        examples: [
          'Old MacDonald book: Point to pig. Pause. Wait for oink oink. "Yes! Pig says oink oink!"',
          'Farm story: "The chicken walked by. The chicken says... (pause)... cluck cluck! You said it!"'
        ],
        watchFor: [
          'Baby\'s name making animal sounds.',
          'Anticipating sound moments.',
          'Filling in pauses with appropriate sounds.',
          'Enjoying active participation in reading.'
        ],
        parentTip: 'Your pause is crucial. Wait 3-5 seconds for them to fill it. Silence invites participation.',
        funTwist: 'Wrong sounds: "Does the cow say meow? No! That\'s silly! Cow says moo!" Make deliberate mistakes.'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Action Sound Effects',
      duration: '3-4 min',
      focus: 'Movement Sound Integration',
      researchBasis: 'Tomasello (2003) found that sound-action pairing during stories enhances comprehension and vocabulary acquisition in toddlers.',
      content: {
        goal: 'Add sound effects for actions in stories. Build understanding of action-sound relationships.',
        whatToSay: [
          '"This story has lots of actions! Let\'s make sounds for what happens!"',
          '"The door opened. What sound does a door make? Creak! Creeeeak!"',
          '"The car drove fast. What sound? Vroom vroom! You make car sounds!"',
          '"Water splashed! Splash! What does splashing sound like? Splooosh!"',
          '"You\'re making action sounds! That makes the story come alive!"'
        ],
        whatToDo: [
          'Read stories with action words.',
          'Pause at action moments.',
          'Ask what sound that action makes.',
          'Model the sound clearly.',
          'Encourage baby\'s name to make sounds.',
          'Accept any sound attempts.',
          'Connect sound to action consistently.',
          'Make sounds enthusiastic and fun.'
        ],
        examples: [
          'Story: Character knocks on door. "Knock knock knock! You knock too! Knock knock!"',
          'Story: Rain falls. "Pitter patter! Rain makes pitter patter sounds! Pitter patter!"'
        ],
        watchFor: [
          'Baby\'s name attempting action sounds.',
          'Understanding actions have sounds.',
          'Making sound effects spontaneously.',
          'Connecting sound to story events.'
        ],
        parentTip: 'There are no wrong sound effects. Zip, crash, boom, any sound is great if they\'re participating!',
        funTwist: 'Exaggerate sounds: make tiny sounds huge and loud sounds tiny. "The elephant whispered, the mouse roared!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Weather and Nature Sounds',
      duration: '2-3 min',
      focus: 'Environmental Sound Effects',
      researchBasis: 'Saffran et al. (1996) showed that connecting environmental sounds to narrative context enhances auditory memory and pattern recognition.',
      content: {
        goal: 'Make weather and nature sound effects during stories. Build environmental sound vocabulary.',
        whatToSay: [
          '"Let\'s add weather sounds to our story! Listen for weather!"',
          '"It started to rain in the story. Rain sounds like this: pitter patter, splish splash!"',
          '"The wind blew! Whoooosh! Make wind sounds! Whoooosh!"',
          '"Thunder crashed! Boom! Big loud boom! You make thunder!"',
          '"You\'re making weather sounds! Now the story sounds real!"'
        ],
        whatToDo: [
          'Read books with weather elements.',
          'Point out weather in pictures.',
          'Make weather sounds together.',
          'Encourage baby\'s name to make sounds.',
          'Use your voice expressively.',
          'Make sounds match the weather.',
          'Repeat weather sounds multiple times.',
          'Connect sound to what\'s happening in story.'
        ],
        examples: [
          'Story shows storm: "The storm came! Lightning flash! Thunder boom! Rain pitter patter! All the storm sounds!"',
          'Sunny day in book: "The sun came out! Birds chirped! Tweet tweet! What a happy sound!"'
        ],
        watchFor: [
          'Baby\'s name making weather sounds.',
          'Understanding weather has associated sounds.',
          'Using voice to create sound effects.',
          'Engaging with environmental story elements.'
        ],
        parentTip: 'Weather sounds are especially good because they\'re dramatic and fun. Kids love big boom and whoosh sounds!',
        funTwist: 'Sound symphony: "Let\'s make all the weather at once! Rain, wind, thunder, all together!" Create sound chaos.'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: You Choose the Sounds',
      duration: '2-3 min',
      focus: 'Independent Sound Creation',
      researchBasis: 'Vygotsky (1978) emphasized that child-initiated participation in literacy activities builds autonomy and deeper learning.',
      content: {
        goal: 'Let baby\'s name decide what sounds to make during a story. Build creative sound expression.',
        whatToSay: [
          '"Now you pick what sounds to make! When you see something, make its sound!"',
          '"What sound should we make for this? You decide!"',
          '"Great sound! I didn\'t think of that one! You\'re so creative!"',
          '"Make any sound you want for this part of the story!"',
          '"You\'re the sound master! You\'re making the story noisy and fun!"'
        ],
        whatToDo: [
          'Read a familiar story.',
          'Let baby\'s name add sounds wherever they want.',
          'Don\'t correct or redirect their choices.',
          'Celebrate all sounds they make.',
          'Join in with their sounds.',
          'Let them make sounds for anything.',
          'Follow their lead completely.',
          'Enjoy the creative sound exploration.'
        ],
        examples: [
          'Baby\'s name makes random sounds for a tree. "Yes! That\'s what trees sound like! Swish swish!"',
          'They make a sound for a book character\'s hat. "The hat goes beep! I love that sound!"'
        ],
        watchFor: [
          'Baby\'s name initiating sounds.',
          'Making sounds without prompting.',
          'Showing creativity in sound choices.',
          'Confidence in sound-making.'
        ],
        parentTip: 'Let go of correct sounds here. If they make a random noise for anything, celebrate it. Creativity matters most.',
        funTwist: 'Everything has a sound: "What sound does the page make when we turn it? Whoosh! What sound does the book make when we close it? Thump!"'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful sound effect learning',
          'You and baby\'s name added sounds to stories',
          'You made animal sounds during reading',
          'You created action sound effects',
          'You added weather and nature sounds',
          'You let baby\'s name choose their own sounds',
          'You built listening, comprehension, and creative expression skills'
        ],
        reviewQuestions: [
          'Did baby\'s name make sounds during story time?',
          'Could they make appropriate sounds for animals or actions?',
          'How creative were they with sound choices?',
          'Did sound effects increase their engagement?'
        ],
        parentTakeaway: {
          title: 'Sound Effects Build Story Engagement',
          content: 'When baby\'s name makes sounds during stories, they\'re not passively listening, they\'re actively participating in the narrative. This transforms them from audience to co-creator. Children who participate actively in reading show significantly better comprehension and retention. Sound effects also build phonological awareness because children practice making diverse sounds with their voices. This is direct preparation for speech and reading. Every sound baby\'s name makes during a story strengthens their connection to books and reading. They learn that stories are interactive experiences, not just things that happen to them. This builds the foundation for a lifetime of engaged reading.'
        },
        nextSteps: [
          'Add sound effects to every story this week.',
          'Pause for baby\'s name to fill in sounds.',
          'Let them make sounds for anything in books.',
          'Make sound effects a regular part of reading.',
          'Celebrate all sound attempts, silly or serious.'
        ]
      }
    }
  ]
},

// ========= LESSON 59 =========
{
  id: 59,
  phase: '2',
  quarter: 1,
  week: 12,
  weekIndex: 11,
  dayInWeek: 4,
  title: 'Lesson 59: Act It Out Story Dramatization',
  theme: 'Sound and Story Integration',
  skillRecurrenceTags: ['dramatization', 'story-comprehension', 'sequencing', 'movement'],
  relatedToPreviousSkills: ['story-comprehension', 'action-words', 'sequencing', 'imitation'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Acting Learning',
      duration: '1 min',
      content: {
        goal: 'Act out favorite stories through movement and play. Baby\'s name learns to physically recreate story events and sequences.',
        parentGuide: [
          'Acting out stories builds comprehension by making narratives physical and memorable.',
          'Dramatization helps children understand story sequence, characters, and plot.',
          'This lesson continues Week 12 sound and story integration through physical storytelling.',
          'Children who act out stories show deeper understanding than those who only listen.'
        ],
        materials: ['Favorite simple story books', 'Props or toys to represent characters (optional)', 'Space to move and act', 'Your enthusiasm and playfulness'],
        tip: 'Start with stories that have clear actions and simple sequences. Three Little Pigs, Goldilocks, and similar tales work perfectly.',
        researchNote: 'Mandler & Bauer (1988) found that children who physically reenact stories show significantly better recall and sequencing than passive listeners.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Become the Characters',
      duration: '3-4 min',
      focus: 'Character Imitation and Role-Play',
      researchBasis: 'Meltzoff et al. (2020) showed that imitative play and character embodiment significantly enhance narrative understanding and social cognition.',
      content: {
        goal: 'Take on the roles of story characters and act like them. Build character understanding through embodiment.',
        whatToSay: [
          '"Let\'s be the characters in the story! First, let\'s be the big bear. Walk like a big bear! Stomp stomp!"',
          '"Now let\'s be the little mouse. Walk like a tiny mouse! Tiptoe tiptoe!"',
          '"You\'re being the bear! You walk big and strong! Grr!"',
          '"Now be the bunny! Hop hop hop like a bunny!"',
          '"You can be all the characters! You\'re an actor!"'
        ],
        whatToDo: [
          'Choose a story with distinct characters.',
          'Name each character.',
          'Demonstrate how they move or act.',
          'Encourage baby\'s name to imitate.',
          'Take turns being different characters.',
          'Add character sounds or voices.',
          'Make movements big and clear.',
          'Celebrate all character attempts.'
        ],
        examples: [
          'Three Bears: "Be Papa Bear, big and loud! Now Baby Bear, small and squeaky! Now Mama Bear, just right!"',
          'Little Red Riding Hood: "Be Red Riding Hood skipping! Now be the wolf, sneaky and quiet! Now be Grandma!"'
        ],
        watchFor: [
          'Baby\'s name attempting character movements.',
          'Differentiating between characters.',
          'Enjoying the role-play.',
          'Understanding characters have distinct traits.'
        ],
        parentTip: 'Model enthusiastically. Your big movements inspire their big movements. Be silly and theatrical!',
        funTwist: 'Character switch: "Quick! You were the bear, now be the mouse! Switch! Now the bird! Keep switching fast!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Act the Story Sequence',
      duration: '3-4 min',
      focus: 'Sequential Story Recreation',
      researchBasis: 'Diamond (1990) found that physical reenactment of sequences significantly strengthens memory, executive function, and comprehension.',
      content: {
        goal: 'Act out story events in order from beginning to end. Build sequence memory through movement.',
        whatToSay: [
          '"Let\'s act out the whole story! First, what happened? The three pigs built houses!"',
          '"You be the first pig. Build your house with straw! Build build build!"',
          '"Then what happened? The wolf came! Huff and puff! Blow the house down!"',
          '"Then the second pig built with sticks! You build with sticks! Build build!"',
          '"We\'re acting the whole story in order! You remember what comes next!"'
        ],
        whatToDo: [
          'Choose a familiar simple story.',
          'Break it into 3-5 main events.',
          'Act out each event in sequence.',
          'Use simple movements for each part.',
          'Guide baby\'s name through the sequence.',
          'Repeat the sequence multiple times.',
          'Emphasize first, then, next, finally.',
          'Celebrate completing the story.'
        ],
        examples: [
          'Goldilocks: "First, walk to the house! Next, try the porridge, too hot! Then try the chairs! Finally, sleep in the bed!"',
          'The Very Hungry Caterpillar: "First, tiny egg! Hatch! Then eat food! Crawl crawl! Finally, butterfly! Fly!"'
        ],
        watchFor: [
          'Baby\'s name following the sequence.',
          'Remembering what comes next.',
          'Acting out events appropriately.',
          'Understanding story has beginning, middle, end.'
        ],
        parentTip: 'Physical sequence builds memory better than verbal alone. Acting creates muscle memory of the story.',
        funTwist: 'Backwards story: "Let\'s act it backwards! Start at the end and go to the beginning! Silly backwards story!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Add Props and Toys',
      duration: '2-3 min',
      focus: 'Enhanced Story Dramatization',
      researchBasis: 'Vygotsky (1978) emphasized that props and symbolic play enhance language development and abstract thinking in young children.',
      content: {
        goal: 'Use toys or household items as props to act out stories. Build symbolic representation skills.',
        whatToSay: [
          '"Let\'s use toys to tell our story! This block can be a house!"',
          '"Your teddy bear can be Goldilocks! Make teddy walk to the house!"',
          '"This bowl is the porridge! Teddy tries the porridge! Too hot!"',
          '"Now the chair! Teddy sits on the block chair! It breaks! Oh no!"',
          '"You\'re using toys to act out the story! That\'s like being a director!"'
        ],
        whatToDo: [
          'Gather a few toys or household items.',
          'Assign them story roles.',
          'Act out the story using props.',
          'Move the toys through story events.',
          'Narrate as baby\'s name manipulates toys.',
          'Let them control the toys and story.',
          'Follow their lead on prop use.',
          'Make it playful and flexible.'
        ],
        examples: [
          'Three Pigs: Use three small toys as pigs, blocks as houses, stuffed wolf. Act out the whole story with these props.',
          'Brown Bear: Use different colored toys as the animals. Move them through "What do you see?" sequence.'
        ],
        watchFor: [
          'Baby\'s name using props appropriately.',
          'Understanding toys represent characters.',
          'Following story sequence with objects.',
          'Creative use of available items.'
        ],
        parentTip: 'Any object can be anything in pretend play. A block is a house, a car, a phone. Encourage flexible thinking.',
        funTwist: 'Wrong props: "Let\'s make the spoon be the bear! The sock is the house! Use silly wrong things as props!"'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Your Story Show',
      duration: '2-3 min',
      focus: 'Independent Story Performance',
      researchBasis: 'Bus & van IJzendoorn (1995) found that child-led story performance builds narrative confidence and expressive language significantly.',
      content: {
        goal: 'Let baby\'s name perform a story their way. Build autonomy and creative storytelling.',
        whatToSay: [
          '"Now it\'s your turn to perform the story! You be the director! Show me the story!"',
          '"You choose! How does the story start? Show me!"',
          '"Great! What happens next in your story? You show me!"',
          '"I love how you\'re telling the story your way! Keep going!"',
          '"You performed the whole story! You\'re a storyteller and an actor!"'
        ],
        whatToDo: [
          'Let baby\'s name choose a story to act.',
          'Give them full control.',
          'Watch and support their performance.',
          'Don\'t correct or redirect.',
          'Celebrate their version.',
          'Join in if they want you to.',
          'Let them use props or not.',
          'Applaud enthusiastically at the end.'
        ],
        examples: [
          'Baby\'s name acts out a mixed-up version of Three Pigs where the wolf becomes friends with pigs. "Yes! That\'s your story!"',
          'They perform a simplified version with just two events. "Perfect! You showed me the important parts!"'
        ],
        watchFor: [
          'Baby\'s name taking initiative.',
          'Attempting to sequence events.',
          'Using movements or props.',
          'Pride in their performance.'
        ],
        parentTip: 'Their version doesn\'t need to match the book. Creative retelling shows understanding and builds confidence.',
        funTwist: 'Invite an audience: "Let\'s perform for teddy bear! Teddy is watching! Do your show for teddy!"'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful story acting learning',
          'You and baby\'s name brought stories to life',
          'You became story characters',
          'You acted out story sequences',
          'You used props and toys for dramatization',
          'You let baby\'s name perform their own story',
          'You built comprehension, memory, and creative expression'
        ],
        reviewQuestions: [
          'Did baby\'s name engage with character imitation?',
          'Could they follow a story sequence through actions?',
          'How creative were they with props and toys?',
          'Did they show confidence in performing?'
        ],
        parentTakeaway: {
          title: 'Acting Deepens Story Understanding',
          content: 'When baby\'s name acts out stories, they\'re processing narratives at a much deeper level than passive listening allows. Physical reenactment creates multiple memory pathways: visual, kinesthetic, verbal, and emotional. Children who regularly dramatize stories show superior comprehension, sequencing, and recall. Acting also builds confidence in self-expression and creativity. Baby\'s name learns that stories aren\'t just words on pages, they\'re experiences that can be recreated and reimagined. This active approach to stories builds the foundation for later reading comprehension, writing, and creative thinking. Every story they act out strengthens their understanding that narratives have structure, meaning, and endless possibilities.'
        },
        nextSteps: [
          'Act out a story every day this week.',
          'Let baby\'s name lead the dramatization.',
          'Use whatever props are available.',
          'Encourage creative interpretations of stories.',
          'Make story acting a regular part of reading time.'
        ]
      }
    }
  ]
},

// ========= LESSON 60 =========
{
  id: 60,
  phase: '2',
  quarter: 1,
  week: 12,
  weekIndex: 11,
  dayInWeek: 5,
  title: 'Lesson 60: Favorite Sounds Storybook Personal Sound Collection',
  theme: 'Sound and Story Integration',
  skillRecurrenceTags: ['sound-collection', 'personalization', 'vocabulary', 'creativity'],
  relatedToPreviousSkills: ['environmental-sounds', 'animal-sounds', 'vocabulary', 'story-creation'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Sound Collection Learning',
      duration: '1 min',
      content: {
        goal: 'Create a personal collection of baby\'s name\'s favorite sounds. Build a mini picture book or sound list celebrating sounds they love.',
        parentGuide: [
          'Personalizing learning by focusing on favorite sounds increases engagement and ownership.',
          'Creating a sound collection reviews all the listening skills from this quarter.',
          'This lesson completes Week 12 sound and story integration through creative consolidation.',
          'A personal sound book becomes a cherished reading tool that baby\'s name will revisit.'
        ],
        materials: ['Paper and crayons for drawing', 'Photos or magazine pictures (optional)', 'Tape or glue for creating a book', 'Your creativity and enthusiasm'],
        tip: 'Let baby\'s name choose their favorite sounds. This is their book, not yours. Follow their interests.',
        researchNote: 'Weisleder & Fernald (2013) found that personalized language activities significantly enhance vocabulary retention and motivation in toddlers.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Choose Your Favorite Sounds',
      duration: '3-4 min',
      focus: 'Sound Selection and Preference',
      researchBasis: 'Rowe (2012) showed that child-led choices in language activities increase engagement and accelerate vocabulary development.',
      content: {
        goal: 'Help baby\'s name identify and choose their favorite sounds. Build awareness of sound preferences.',
        whatToSay: [
          '"Let\'s think about all the sounds we know! What sounds do you love?"',
          '"Do you like animal sounds? Which animal sound is your favorite? Woof? Meow? Moo?"',
          '"What about vehicle sounds? Do you like vroom vroom? Or beep beep?"',
          '"Do you like music sounds? Or nature sounds like rain? What sounds make you happy?"',
          '"You\'re choosing your favorite sounds! We\'ll put them in your special book!"'
        ],
        whatToDo: [
          'Review different sound categories together.',
          'Make various sounds for baby\'s name.',
          'Watch for their reactions.',
          'Ask which sounds they like best.',
          'Accept their choices enthusiastically.',
          'Help them choose 4-6 favorite sounds.',
          'Write down or remember their choices.',
          'Celebrate each selection.'
        ],
        examples: [
          'Baby\'s name gets excited about dog barking. "Woof woof is your favorite! Great choice! Dog sounds go in your book!"',
          'They laugh at silly car sounds. "Vroom vroom! You love car sounds! That\'s going in your book too!"'
        ],
        watchFor: [
          'Baby\'s name showing clear preferences.',
          'Excitement about certain sounds.',
          'Making sounds they enjoy.',
          'Ownership over their choices.'
        ],
        parentTip: 'Their favorite might be a random sound you didn\'t expect. That\'s perfect! It\'s their book, their choices.',
        funTwist: 'Sound taste test: "Let\'s try this sound! Now this sound! Which one do you like more? You\'re a sound taster!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Draw or Find Pictures',
      duration: '3-4 min',
      focus: 'Visual Sound Representation',
      researchBasis: 'Bus & van IJzendoorn (1995) found that creating personalized books with children significantly enhances literacy engagement and motivation.',
      content: {
        goal: 'Create pictures for each favorite sound. Draw, find photos, or use magazine images.',
        whatToSay: [
          '"Let\'s make pictures for your favorite sounds! First, the dog sound. Let\'s draw a dog!"',
          '"You draw the dog! Any way you want! It\'s your dog for your book!"',
          '"Great drawing! Now let\'s draw the car that goes vroom vroom!"',
          '"We can also find pictures in magazines or use photos! What do you want?"',
          '"You\'re making pictures for all your favorite sounds!"'
        ],
        whatToDo: [
          'Get paper and drawing materials.',
          'Draw or find a picture for each chosen sound.',
          'Let baby\'s name draw or scribble.',
          'Accept all artistic attempts.',
          'Help if they want help.',
          'Make it fun and low-pressure.',
          'Create one page per sound.',
          'Label each page with the sound word.'
        ],
        examples: [
          'Baby\'s name scribbles for dog. "Perfect dog! This is your dog drawing! Woof woof!" Write "Dog - Woof" on page.',
          'Find photo of rain. "This is rain! Pitter patter! Let\'s put this in your book!" Glue photo on page.'
        ],
        watchFor: [
          'Baby\'s name participating in creating.',
          'Engagement with the drawing process.',
          'Connecting pictures to sounds.',
          'Pride in their creations.'
        ],
        parentTip: 'Quality of drawing doesn\'t matter. A scribble labeled dog is a perfect dog for this purpose.',
        funTwist: 'Mix media: "Let\'s draw AND find a picture AND use stickers! Your page can have everything!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Make Your Sound Book',
      duration: '2-3 min',
      focus: 'Book Assembly and Creation',
      researchBasis: 'Whitehurst & Lonigan (1998) emphasized that children who create their own books show increased interest in reading and literacy activities.',
      content: {
        goal: 'Assemble the pages into a book. Create a cover and put it together.',
        whatToSay: [
          '"Let\'s put all your sound pages together to make a book!"',
          '"This is the first page, this is the second page. Let\'s put them in order!"',
          '"Now let\'s make a cover! What should your book be called? Baby\'s name\'s Sound Book!"',
          '"You can decorate the cover! Make it special!"',
          '"Look! You made a book! This is your very own book about your favorite sounds!"'
        ],
        whatToDo: [
          'Gather all the created pages.',
          'Put them in an order.',
          'Create a simple cover page.',
          'Write the title together.',
          'Staple or tape pages together.',
          'Let baby\'s name help assemble.',
          'Make it sturdy for repeated use.',
          'Celebrate the finished product.'
        ],
        examples: [
          'Staple 4-5 pages together with cover. "Look! A book! Your book! Baby\'s name\'s Favorite Sounds!"',
          'Fold paper in half for simple book. "We folded it and now it\'s a real book! Your sound book!"'
        ],
        watchFor: [
          'Baby\'s name\'s excitement about the book.',
          'Understanding they created something.',
          'Interest in the finished product.',
          'Pride of authorship.'
        ],
        parentTip: 'Simple assembly is fine. Even three pages stapled together is a real book. Function over perfection.',
        funTwist: 'Book decorating party: "Let\'s add stickers! And stamps! And make it colorful! Decorate your book!"'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Read Your Sound Book Together',
      duration: '2-3 min',
      focus: 'Book Reading and Sound Review',
      researchBasis: 'Snow (1983) found that reading personalized books together significantly strengthens parent-child interaction and language development.',
      content: {
        goal: 'Read through the created sound book together. Practice making all the favorite sounds.',
        whatToSay: [
          '"Let\'s read your sound book! This is a book you made!"',
          '"Turn to the first page. What\'s this? It\'s the dog! What does dog say? Woof woof!"',
          '"Next page! The car! What sound does car make? Vroom vroom! You remembered!"',
          '"This is your favorite book because it has all your favorite sounds!"',
          '"You made this book and now you can read it anytime! You\'re an author!"'
        ],
        whatToDo: [
          'Sit together with the finished book.',
          'Let baby\'s name hold it.',
          'Turn pages together.',
          'Make each sound enthusiastically.',
          'Let baby\'s name lead the sounds.',
          'Point to pictures as you make sounds.',
          'Read it multiple times if they want.',
          'Celebrate their creation.'
        ],
        examples: [
          'Turn to rain page. Baby\'s name says "pitter patter!" "Yes! That\'s the rain sound you chose! Pitter patter!"',
          'They turn to dog page and bark without prompting. "You remembered! Woof woof! That\'s your dog!"'
        ],
        watchFor: [
          'Baby\'s name engaging with their book.',
          'Making sounds for each page.',
          'Pride in their creation.',
          'Wanting to read it repeatedly.'
        ],
        parentTip: 'This book becomes a prized possession. Store it safely so it can be reread for weeks and months.',
        funTwist: 'Guest reader: "Let\'s read your book to teddy! Show teddy your sound book! Teach teddy the sounds!"'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful sound book creation',
          'You and baby\'s name made something special',
          'You chose favorite sounds together',
          'You created pictures for each sound',
          'You assembled a real book',
          'You read the book together',
          'You built creativity, ownership, and literacy love'
        ],
        reviewQuestions: [
          'Did baby\'s name show clear sound preferences?',
          'How engaged were they in creating the book?',
          'Did they show pride in the finished product?',
          'Did they want to read it multiple times?'
        ],
        parentTakeaway: {
          title: 'Personal Books Build Literacy Love',
          content: 'When baby\'s name creates their own book, they\'re not just learning about books, they\'re becoming an author. This shifts their relationship with literacy from passive consumption to active creation. Children who make their own books show dramatically increased interest in reading and writing. The sound book baby\'s name created today will likely become a favorite that gets read hundreds of times. Every time they read it, they\'re practicing sounds, vocabulary, and the concept that books communicate meaning. This completes Quarter 1 by celebrating all the listening and sound skills learned. Baby\'s name now has a tangible record of their learning and a personalized tool that validates their voice and choices matter.'
        },
        nextSteps: [
          'Read the sound book daily this week.',
          'Keep it accessible for independent exploration.',
          'Add new pages as baby\'s name discovers new favorite sounds.',
          'Make more personalized books on other topics.',
          'Celebrate baby\'s name as an author and creator, not just a listener.'
        ]
      }
    }
  ]
},

// ========= LESSON 61 =========
{
  id: 61,
  phase: '2',
  quarter: 1,
  week: 13,
  weekIndex: 12,
  dayInWeek: 1,
  title: 'Lesson 61: Sound Parade Celebration',
  theme: 'Quarter Review, Our Word Parade',
  skillRecurrenceTags: ['sound-review', 'movement', 'celebration', 'integration'],
  relatedToPreviousSkills: ['environmental-sounds', 'animal-sounds', 'action-words', 'rhythm'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Quarter Celebration',
      duration: '1 min',
      content: {
        goal: 'Celebrate all the sounds baby\'s name learned this quarter through a joyful sound parade. Review environmental sounds, animal sounds, and action sounds.',
        parentGuide: [
          'This week celebrates 12 weeks of learning. Baby\'s name has built an amazing sound vocabulary.',
          'Review activities reinforce memory and show baby\'s name how much they\'ve accomplished.',
          'Celebration lessons build confidence and pride in learning.',
          'Quarter reviews consolidate skills before moving to the next learning phase.'
        ],
        materials: ['Toy instruments or pots and pans', 'Stuffed animals or toy animals', 'Space to move and dance', 'Your enthusiasm and celebration energy'],
        tip: 'Make this festive! Use silly voices, big movements, and tons of praise. This is a party for learning.',
        researchNote: 'Rowe (2012) found that celebrating language milestones increases motivation and reinforces the value of communication skills in young children.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Animal Sound March',
      duration: '3-4 min',
      focus: 'Animal Sound Review and Movement',
      researchBasis: 'Trainor et al. (2005) showed that combining movement with sound practice strengthens memory encoding and retrieval in toddlers.',
      content: {
        goal: 'March around making all the animal sounds baby\'s name learned. Combine movement with sound production.',
        whatToSay: [
          '"Let\'s start our sound parade with animals! First, let\'s march like dogs! Woof woof woof!"',
          '"Now we\'re cats! March and meow! Meow meow meow! Keep marching!"',
          '"Here come the cows! Moo moo moo! March around the room!"',
          '"Now we\'re little ducks! Quack quack quack! Waddle and march!"',
          '"You remembered so many animal sounds! You\'re a sound parade leader!"'
        ],
        whatToDo: [
          'Start marching together in a circle or path.',
          'Call out an animal name.',
          'Make the animal sound together.',
          'Keep marching while making sounds.',
          'Switch animals every 20-30 seconds.',
          'Include 5-8 different animals.',
          'Make movements big and fun.',
          'Celebrate each sound baby\'s name makes.'
        ],
        examples: [
          'March pattern: dog, cat, cow, duck, pig, sheep, horse, bird. "Woof, meow, moo, quack, oink, baa, neigh, tweet!"',
          'Baby\'s name leads: "What animal should we be next? You choose! Yes, lions! Roar roar roar!"'
        ],
        watchFor: [
          'Baby\'s name making animal sounds.',
          'Enjoying the marching movement.',
          'Remembering multiple animal sounds.',
          'Enthusiasm and engagement.'
        ],
        parentTip: 'If baby\'s name forgets a sound, model it joyfully. This is review, not testing. Make it playful.',
        funTwist: 'Speed march: "Let\'s march faster! Now slower! Now fast again! The animals are racing in the parade!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Household Sound Symphony',
      duration: '3-4 min',
      focus: 'Environmental Sound Review',
      researchBasis: 'Saffran et al. (1996) found that creating sound sequences and patterns significantly enhances auditory memory and pattern recognition.',
      content: {
        goal: 'Make all the household sounds baby\'s name learned. Create a sound symphony together.',
        whatToSay: [
          '"Now let\'s make house sounds! First, the doorbell! Ding dong! Ding dong!"',
          '"Now the phone! Ring ring ring! Answer the phone!"',
          '"Here comes the vacuum! Vroom vroom vroom! Clean the floor!"',
          '"Don\'t forget the water! Splash splash splash! Washing hands!"',
          '"You know so many sounds from our house! Let\'s make them all at once, a big symphony!"'
        ],
        whatToDo: [
          'Name household sounds one at a time.',
          'Make each sound together.',
          'Act out the action that goes with it.',
          'Review 6-8 household sounds.',
          'Then layer sounds, making several at once.',
          'Create a silly sound symphony.',
          'Let baby\'s name choose which sounds to make.',
          'Celebrate the noise and chaos.'
        ],
        examples: [
          'Sound sequence: doorbell, phone, vacuum, water, timer, door closing, keys jingling, microwave beep.',
          'Symphony finale: "Let\'s make all the sounds together! Ding dong, ring ring, vroom, splash! So noisy!"'
        ],
        watchFor: [
          'Baby\'s name making household sounds.',
          'Connecting sounds to actions.',
          'Remembering environmental sounds.',
          'Joy in making noise together.'
        ],
        parentTip: 'Use real objects if possible. Ring real keys, knock on a real door. Real sounds reinforce learning.',
        funTwist: 'Quiet parade: "Now let\'s do the parade in whispers! Tiny quiet sounds! Shh, little ding dong, little ring ring!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Action Word Dance Party',
      duration: '2-3 min',
      focus: 'Action Verb Review and Movement',
      researchBasis: 'Diamond (1990) showed that pairing verbs with physical actions dramatically improves word retention and retrieval in young children.',
      content: {
        goal: 'Dance and move while saying action words. Review all the movement vocabulary from the quarter.',
        whatToSay: [
          '"Time for the action word dance! When I say jump, we jump! Ready? Jump jump jump!"',
          '"Now I say run! Run in place! Run run run!"',
          '"Here comes clap! Clap your hands! Clap clap clap!"',
          '"Let\'s spin! Spin around! Spin spin spin!"',
          '"You know so many action words! You can move in so many ways!"'
        ],
        whatToDo: [
          'Call out action words.',
          'Do the action together.',
          'Say the word while doing the action.',
          'Include 8-10 different actions.',
          'Speed up and slow down for variety.',
          'Let baby\'s name call out actions too.',
          'Make it feel like a dance party.',
          'Celebrate all their movements.'
        ],
        examples: [
          'Action sequence: jump, run, clap, stomp, wave, dance, hop, march, wiggle, freeze.',
          'Baby leads: "What should we do next? You say an action word! Yes, roll! Let\'s roll around!"'
        ],
        watchFor: [
          'Baby\'s name performing actions.',
          'Saying action words.',
          'Following verbal cues quickly.',
          'Having fun with movement.'
        ],
        parentTip: 'Action words with movement create strong memory connections. This is powerful vocabulary building.',
        funTwist: 'Action freeze dance: "Dance with actions! When the music stops, freeze! Then I call the next action!"'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Grand Parade Finale',
      duration: '2-3 min',
      focus: 'Integration and Celebration',
      researchBasis: 'Tomasello (2019) emphasized that celebrating communication milestones reinforces the social value of language and motivates continued learning.',
      content: {
        goal: 'Combine all sounds into one grand parade. March, make sounds, and celebrate together.',
        whatToSay: [
          '"Now for the grand finale! Let\'s do a parade with all our sounds!"',
          '"First march like animals! Woof, meow, moo! Keep going!"',
          '"Now add house sounds! Ding dong, ring ring! While we march!"',
          '"And now action words! Jump while you march! Clap while you march!"',
          '"This is the biggest, loudest, most amazing sound parade ever! You learned so much!"'
        ],
        whatToDo: [
          'Start marching in a big circle.',
          'Layer in animal sounds.',
          'Add household sounds.',
          'Include action movements.',
          'Make it chaotic and joyful.',
          'Encourage baby\'s name to make any sound they want.',
          'Clap and cheer at the end.',
          'Give baby\'s name a big celebration hug.'
        ],
        examples: [
          'All together: marching, barking, ringing doorbell sounds, jumping. "We\'re doing everything at once!"',
          'Baby\'s choice: "What should we add to the parade? More sounds? More actions? You choose!"'
        ],
        watchFor: [
          'Baby\'s name participating enthusiastically.',
          'Making multiple sound types.',
          'Showing pride in their abilities.',
          'Pure joy and celebration.'
        ],
        parentTip: 'This is messy and loud. That\'s perfect. Celebration of learning should be big and exuberant.',
        funTwist: 'Parade audience: "Let\'s do the parade for teddy bear and dolly! They want to watch your amazing parade!"'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Amazing sound parade celebration',
          'You and baby\'s name reviewed animal sounds',
          'You practiced household environmental sounds',
          'You danced with action words',
          'You combined everything in a grand finale',
          'You celebrated 12 weeks of incredible learning',
          'Baby\'s name\'s sound vocabulary is huge and growing'
        ],
        reviewQuestions: [
          'How many different sounds did baby\'s name make today?',
          'Which sound category did they enjoy most?',
          'Did they show pride in their abilities?',
          'How enthusiastic was the celebration?'
        ],
        parentTakeaway: {
          title: 'Celebrating Learning Builds Confidence',
          content: 'Today\'s sound parade wasn\'t just fun, it was powerful review. When baby\'s name makes animal sounds, household sounds, and action words all in one joyful activity, they\'re consolidating 12 weeks of learning. Review through celebration is more effective than testing or drills. Baby\'s name experienced pride in their accomplishments, which motivates future learning. The sounds they practiced today, animal noises, environmental sounds, and action verbs, form the foundation for vocabulary, phonological awareness, and early reading. Every sound they made today strengthens neural pathways for language processing. This parade showed baby\'s name that learning is joyful, that they\'ve grown tremendously, and that their communication skills matter.'
        },
        nextSteps: [
          'Continue making sounds during daily routines.',
          'Point out when baby\'s name uses these sounds spontaneously.',
          'Keep celebrating language attempts.',
          'Prepare for rhythm and story activities this week.',
          'Recognize how far baby\'s name has come since Week 1.'
        ]
      }
    }
  ]
},

// ========= LESSON 62 =========
{
  id: 62,
  phase: '2',
  quarter: 1,
  week: 13,
  weekIndex: 12,
  dayInWeek: 2,
  title: 'Lesson 62: Rhythm Circle Word Echo Game',
  theme: 'Quarter Review, Our Word Parade',
  skillRecurrenceTags: ['rhythm', 'repetition', 'phonological-awareness', 'listening'],
  relatedToPreviousSkills: ['syllable-clapping', 'rhyming', 'sound-patterns', 'echo-games'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Rhythm Review Learning',
      duration: '1 min',
      content: {
        goal: 'Review rhythm and sound patterns through echo games. Baby\'s name practices hearing beats in words and repeating them back.',
        parentGuide: [
          'Rhythm activities build phonological awareness, the ability to hear and manipulate sounds in words.',
          'Echo games strengthen listening, memory, and sound production skills.',
          'This lesson reviews rhythm work from Weeks 9-12 through playful repetition.',
          'Children who practice rhythm show better reading readiness and word segmentation.'
        ],
        materials: ['Your hands for clapping', 'Toy drum or pot (optional)', 'Favorite objects from around the house', 'Your rhythmic energy'],
        tip: 'Keep the rhythm steady but not fast. Give baby\'s name time to process and respond. Patience is key.',
        researchNote: 'Anthony & Francis (2005) found that rhythmic word play significantly predicts later phonological awareness and decoding skills in early readers.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Clap the Words',
      duration: '3-4 min',
      focus: 'Syllable Segmentation Through Clapping',
      researchBasis: 'Lonigan et al. (2000) showed that syllable awareness activities in toddlerhood directly predict later phonemic awareness and reading success.',
      content: {
        goal: 'Clap out the syllables in familiar words. Build awareness that words are made of separate sound parts.',
        whatToSay: [
          '"Let\'s clap the sounds in words! Listen: ba-by! How many claps? Ba (clap) by (clap)! Two claps!"',
          '"Now let\'s try cup! Cup (clap)! One clap! Cup is a short word!"',
          '"Here\'s a longer word: ba-na-na! Ba (clap) na (clap) na (clap)! Three claps!"',
          '"You try! Clap dog! Dog (clap)! One clap! You did it!"',
          '"You\'re hearing the beats inside words! Every word has its own rhythm!"'
        ],
        whatToDo: [
          'Choose 6-8 familiar words.',
          'Say each word slowly and clearly.',
          'Clap once for each syllable.',
          'Have baby\'s name clap with you.',
          'Then let them try alone.',
          'Mix one, syllable, two, syllable, and three, syllable words.',
          'Point to objects as you say and clap their names.',
          'Celebrate all clapping attempts.'
        ],
        examples: [
          'One syllable: cup, dog, ball, car (one clap each).',
          'Two syllables: ba-by, wa-ter, ap-ple, kit-ty (two claps each).',
          'Three syllables: ba-na-na, tel-e-phone, di-no-saur (three claps each).'
        ],
        watchFor: [
          'Baby\'s name clapping with the syllables.',
          'Understanding that words have beats.',
          'Attempting to clap on their own.',
          'Differentiating short and long words.'
        ],
        parentTip: 'Exaggerate the syllable breaks. Ba (pause) by (pause). Make the rhythm very clear and predictable.',
        funTwist: 'Clap your name: "Let\'s clap baby\'s name! How many claps? Now clap mama! Now clap dada! Name clapping!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Echo My Rhythm',
      duration: '3-4 min',
      focus: 'Rhythm Imitation and Pattern Recognition',
      researchBasis: 'Trainor et al. (2002) found that rhythm imitation games strengthen auditory processing and temporal sequencing, critical for language development.',
      content: {
        goal: 'Create simple rhythm patterns and have baby\'s name echo them back. Build listening and imitation skills.',
        whatToSay: [
          '"Now I\'ll make a rhythm and you copy it! Listen: clap, clap, clap! Now you try!"',
          '"Great! Now a different rhythm: clap (pause) clap clap! Your turn!"',
          '"Let\'s try with stomping! Stomp, stomp! Can you stomp, stomp?"',
          '"Now a tricky one: clap, stomp, clap! Can you copy that pattern?"',
          '"You\'re echoing my rhythms perfectly! You\'re a rhythm copycat!"'
        ],
        whatToDo: [
          'Create a simple rhythm pattern (2-4 beats).',
          'Perform it clearly.',
          'Say "your turn" or "copy me."',
          'Wait for baby\'s name to attempt.',
          'Celebrate any attempt at imitation.',
          'Start simple, gradually increase complexity.',
          'Use claps, stomps, or taps.',
          'Make it feel like a musical conversation.'
        ],
        examples: [
          'Simple patterns: clap clap, stomp stomp, tap tap tap.',
          'Mixed patterns: clap stomp, stomp clap clap, tap tap stomp.',
          'Body percussion: pat legs, clap hands, tap head, create sequences.'
        ],
        watchFor: [
          'Baby\'s name attempting to copy patterns.',
          'Listening before acting.',
          'Getting rhythm approximately right.',
          'Enjoying the back and forth game.'
        ],
        parentTip: 'Don\'t expect perfect rhythm. Close approximation is success. Focus on the listening and trying.',
        funTwist: 'Baby leads: "Now you make a rhythm and I\'ll copy you! You\'re the rhythm leader now!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Predict the Beat',
      duration: '2-3 min',
      focus: 'Pattern Prediction and Anticipation',
      researchBasis: 'Saffran et al. (1996) showed that pattern prediction activities enhance statistical learning and phonological pattern recognition in toddlers.',
      content: {
        goal: 'Start a repeating rhythm pattern and let baby\'s name predict and complete it. Build anticipation skills.',
        whatToSay: [
          '"Let\'s make a pattern that repeats! Clap, stomp, clap, stomp, clap (pause)... what comes next?"',
          '"Yes! Stomp! The pattern is clap, stomp, clap, stomp! Let\'s do it again!"',
          '"New pattern: tap, tap, clap, tap, tap (pause)... you know what\'s next!"',
          '"Clap! You predicted the pattern! You knew what sound comes next!"',
          '"You\'re hearing patterns and predicting! That\'s amazing thinking!"'
        ],
        whatToDo: [
          'Create a simple A-B or A-A-B pattern.',
          'Repeat it 2-3 times.',
          'On the next repetition, pause before the last beat.',
          'Wait for baby\'s name to complete it.',
          'If they don\'t, prompt gently.',
          'Celebrate correct predictions.',
          'Gradually make patterns more complex.',
          'Make prediction feel like a fun game.'
        ],
        examples: [
          'A-B pattern: clap, stomp, clap, stomp, clap, (stomp?).',
          'A-A-B pattern: clap, clap, stomp, clap, clap, (stomp?).',
          'Word pattern: dog, cat, dog, cat, dog, (cat?).'
        ],
        watchFor: [
          'Baby\'s name showing anticipation.',
          'Attempting to complete patterns.',
          'Understanding the concept of repeating.',
          'Enjoying the prediction game.'
        ],
        parentTip: 'Pattern prediction is early math and reading skill. Patterns are everywhere in language and literacy.',
        funTwist: 'Silly pattern break: "Let\'s do the pattern then make a silly mistake! Can you catch my mistake?"'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Word Rhythm Story',
      duration: '2-3 min',
      focus: 'Integrated Rhythm and Language',
      researchBasis: 'Bus & van IJzendoorn (1995) found that rhythmic storytelling significantly enhances language comprehension and narrative memory in young children.',
      content: {
        goal: 'Tell a simple story with rhythmic word emphasis. Combine rhythm skills with vocabulary review.',
        whatToSay: [
          '"Let\'s tell a story with rhythm! Once there was a dog (clap clap). The dog said woof (stomp stomp)!"',
          '"The dog saw a cat (clap clap clap). The cat said meow (stomp stomp stomp)!"',
          '"They ran to the house (clap stomp clap stomp). And ate some food (clap clap clap clap)!"',
          '"The end! Let\'s clap for our rhythm story! Clap clap clap!"',
          '"You listened to a story with beats and rhythms! Stories have rhythms too!"'
        ],
        whatToDo: [
          'Create a very simple 4-6 sentence story.',
          'Add a rhythmic action after each sentence.',
          'Use familiar vocabulary from the quarter.',
          'Keep sentences short and clear.',
          'Emphasize the rhythm between sentences.',
          'Let baby\'s name join the rhythmic actions.',
          'Tell the story 2-3 times.',
          'Celebrate the rhythm story experience.'
        ],
        examples: [
          'Story structure: character introduction (clap pattern), action (stomp pattern), resolution (combined pattern).',
          'Another example: "There was a bird (tap tap). It flew high (clap clap). It sang a song (la la la with claps)."'
        ],
        watchFor: [
          'Baby\'s name listening to the story.',
          'Joining the rhythm actions.',
          'Connecting rhythm to narrative.',
          'Enjoyment of the combined activity.'
        ],
        parentTip: 'This combines rhythm, vocabulary, and storytelling. It\'s powerful multi-skill integration.',
        funTwist: 'Baby\'s rhythm story: "Now you tell me a story and we\'ll add rhythms! You\'re the story rhythm maker!"'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Wonderful rhythm circle learning',
          'You and baby\'s name clapped syllables in words',
          'You echoed and copied rhythm patterns',
          'You predicted what comes next in patterns',
          'You told a rhythm story together',
          'You built phonological awareness and listening skills',
          'You reviewed rhythmic learning from the whole quarter'
        ],
        reviewQuestions: [
          'Could baby\'s name clap syllables in words?',
          'Did they echo rhythm patterns?',
          'Could they predict repeating patterns?',
          'How engaged were they with the rhythm story?'
        ],
        parentTakeaway: {
          title: 'Rhythm is the Bridge to Reading',
          content: 'The rhythm activities baby\'s name practiced today are directly connected to future reading success. When children can hear syllables in words, they\'re building phonological awareness, the number one predictor of reading ability. Echo games strengthen auditory memory and attention. Pattern prediction develops sequencing skills needed for both reading and math. The rhythm story integrated all these skills with vocabulary and narrative. Research shows children who regularly practice rhythm and sound patterns show significantly better word decoding and reading fluency later. Baby\'s name is building the listening and sound manipulation skills that make learning to read natural and intuitive. Every clap, every echo, every predicted beat strengthens the brain pathways for literacy.'
        },
        nextSteps: [
          'Clap syllables during daily routines.',
          'Play echo games while walking or playing.',
          'Point out patterns everywhere (stripes, songs, routines).',
          'Continue rhythm activities this week.',
          'Recognize rhythm as foundational literacy skill.'
        ]
      }
    }
  ]
},

// ========= LESSON 63 =========
{
  id: 63,
  phase: '2',
  quarter: 1,
  week: 13,
  weekIndex: 12,
  dayInWeek: 3,
  title: 'Lesson 63: Story Remix Sound Adventure',
  theme: 'Quarter Review, Our Word Parade',
  skillRecurrenceTags: ['story-retelling', 'sound-integration', 'creativity', 'sequencing'],
  relatedToPreviousSkills: ['story-comprehension', 'sound-effects', 'dramatization', 'vocabulary'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Story Remix Learning',
      duration: '1 min',
      content: {
        goal: 'Take a favorite story and add all the sounds baby\'s name learned this quarter. Create a sound-rich story remix together.',
        parentGuide: [
          'Story remixing combines comprehension, creativity, and sound vocabulary review.',
          'Adding sounds to stories makes narratives more engaging and memorable.',
          'This lesson reviews story skills from Weeks 8-12 through creative retelling.',
          'Children who add sounds to stories show deeper narrative understanding and engagement.'
        ],
        materials: ['A favorite simple picture book', 'Enthusiasm for making silly sounds', 'Optional: toy animals or props', 'Your creative storytelling voice'],
        tip: 'Choose a story baby\'s name knows well. Familiarity allows them to focus on adding creative sound elements.',
        researchNote: 'Whitehurst & Lonigan (1998) found that interactive story retelling with sound effects significantly enhances vocabulary retention and narrative comprehension.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Pick Your Story',
      duration: '2-3 min',
      focus: 'Story Selection and Preview',
      researchBasis: 'Bus & van IJzendoorn (1995) showed that child-selected stories result in higher engagement and more active participation in literacy activities.',
      content: {
        goal: 'Let baby\'s name choose a favorite story to remix. Read it once normally to refresh their memory.',
        whatToSay: [
          '"Today we\'re going to make a story even more fun by adding sounds! Which story should we use?"',
          '"Great choice! Let\'s read it once the normal way first, then we\'ll add our sounds!"',
          '"Listen to the story and think about what sounds we could add. Animals? Actions? Noises?"',
          '"Now we know the story! Next time we read it, we\'ll add all our special sounds!"',
          '"You picked a perfect story for our sound remix!"'
        ],
        whatToDo: [
          'Offer 2-3 familiar story choices.',
          'Let baby\'s name pick their favorite.',
          'Read through the story normally.',
          'Keep this reading quick and simple.',
          'Point out potential sound moments as you read.',
          'Ask "what sound could we add here?"',
          'Build excitement for the remix.',
          'Celebrate their story choice.'
        ],
        examples: [
          'Brown Bear: "This story has lots of animals! We can add animal sounds to every page!"',
          'The Very Hungry Caterpillar: "This has eating sounds, crawling sounds, flying sounds! So many sounds!"',
          'Goodnight Moon: "We can add whispery night sounds, goodnight sounds, sleepy sounds!"'
        ],
        watchFor: [
          'Baby\'s name showing interest in story choice.',
          'Listening to the first reading.',
          'Identifying potential sound moments.',
          'Excitement about adding sounds.'
        ],
        parentTip: 'Simple, repetitive stories work best. Books with clear events, animals, or actions are ideal for remixing.',
        funTwist: 'Sound planning: "Let\'s plan our sounds before we start! What sound for this page? And this page?"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Add Animal and Character Sounds',
      duration: '3-4 min',
      focus: 'Character Sound Integration',
      researchBasis: 'Meltzoff et al. (2020) found that adding vocal sound effects during story reading significantly enhances character understanding and narrative engagement.',
      content: {
        goal: 'Read the story again, this time adding sounds for every animal or character. Make the story come alive with voices.',
        whatToSay: [
          '"Now let\'s read it with sounds! When we see the dog, we say woof woof! Ready?"',
          '"Here comes brown bear! What does brown bear say? Grr! Yes, brown bear says grr!"',
          '"Now red bird! What sound for red bird? Tweet tweet! Perfect!"',
          '"Every character gets a sound! You\'re making the story so much more fun!"',
          '"Listen to all the sounds in our story now! It\'s like the characters are really talking!"'
        ],
        whatToDo: [
          'Read the story slowly.',
          'Pause at each character or animal.',
          'Add an appropriate sound together.',
          'Let baby\'s name make the sound first if they can.',
          'Model the sound if needed.',
          'Make sounds enthusiastic and varied.',
          'Use different voices for different characters.',
          'Celebrate each sound addition.'
        ],
        examples: [
          'Brown Bear sequence: "Brown bear, grr, what do you see? Red bird, tweet! Yellow duck, quack!"',
          'Three Little Pigs: "Little pig, oink oink, builds a house. Big bad wolf, grr growl, huffs and puffs, whoosh!"',
          'Goldilocks: "Papa bear, big deep grr! Mama bear, medium grr! Baby bear, tiny squeaky grr!"'
        ],
        watchFor: [
          'Baby\'s name adding character sounds.',
          'Using different sounds for different characters.',
          'Anticipating when sounds come.',
          'Greater engagement than normal reading.'
        ],
        parentTip: 'Characters don\'t need realistic sounds. A silly made-up sound for a character is perfect.',
        funTwist: 'Opposite sounds: "Let\'s give characters silly wrong sounds! Dog says meow! Cat says woof! Silly remix!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Add Action and Environmental Sounds',
      duration: '3-4 min',
      focus: 'Action and Background Sound Integration',
      researchBasis: 'Snow (1983) showed that elaborative storytelling with sound effects dramatically increases vocabulary retention and story comprehension.',
      content: {
        goal: 'Add sounds for actions, movements, and environmental elements. Layer multiple sound types into the story.',
        whatToSay: [
          '"Now let\'s add even more sounds! When someone walks, we can say stomp stomp stomp!"',
          '"When the door opens, we say creeeak! When it closes, slam! You make the door sounds!"',
          '"The wind blows, whoosh! The rain falls, pitter patter! Let\'s add weather sounds!"',
          '"When caterpillar eats, what sound? Chomp chomp chomp! You make eating sounds!"',
          '"Our story is full of sounds now! It\'s like we\'re inside the story!"'
        ],
        whatToDo: [
          'Read through story again.',
          'This time add action and environmental sounds.',
          'Include movement sounds (walking, running, flying).',
          'Add object sounds (doors, water, food).',
          'Include weather or setting sounds.',
          'Layer these with character sounds from Step 2.',
          'Let baby\'s name create the action sounds.',
          'Make the story rich with audio detail.'
        ],
        examples: [
          'Very Hungry Caterpillar: "Caterpillar crawls, wiggle wiggle. Eats apple, chomp chomp. Gets big, pop pop. Flies away, whoosh!"',
          'Going on Bear Hunt: "Walking through grass, swish swish. Through river, splash splash. Through mud, squelch squelch!"',
          'Any story: Add footsteps, doors, wind, objects being used, everything making sound.'
        ],
        watchFor: [
          'Baby\'s name making action sounds.',
          'Connecting sounds to story events.',
          'Using various sound types.',
          'Story becoming more vivid with sounds.'
        ],
        parentTip: 'The more sounds the better. A sound-saturated story creates multisensory learning and memory.',
        funTwist: 'Sound overload: "Let\'s make as many sounds as possible on every page! How many sounds can we fit?"'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Performance Time',
      duration: '2-3 min',
      focus: 'Complete Story Performance',
      researchBasis: 'Rowe (2012) found that child-led story performances significantly boost narrative confidence and expressive language development.',
      content: {
        goal: 'Read the fully remixed story one final time with all the sounds. Perform it together as a sound adventure.',
        whatToSay: [
          '"Now let\'s perform our sound remix story! This is the complete version with every sound!"',
          '"You know all the sounds now! You lead the sounds and I\'ll read the words!"',
          '"Here we go, our special sound adventure story! Ready? Let\'s begin!"',
          '"That was amazing! Our story was so much better with all your sounds!"',
          '"You turned a book into a sound adventure! You\'re a story remix artist!"'
        ],
        whatToDo: [
          'Read the story one final time.',
          'Include all character sounds from Step 2.',
          'Include all action sounds from Step 3.',
          'Let baby\'s name lead the sound-making.',
          'You focus on reading the text.',
          'Make it feel like a performance.',
          'Read with expression and energy.',
          'Applaud enthusiastically at the end.'
        ],
        examples: [
          'Full remix: Read each page, baby\'s name adds all planned sounds, you narrate between sounds.',
          'If they forget a sound, gently prompt: "What sound does the bear make here? Yes, grr!"'
        ],
        watchFor: [
          'Baby\'s name confidently making sounds.',
          'Remembering character and action sounds.',
          'Pride in the performance.',
          'Deeper engagement with the story.'
        ],
        parentTip: 'This final performance consolidates memory of both story structure and sound vocabulary. It\'s powerful learning.',
        funTwist: 'Audience performance: "Let\'s perform our sound story for teddy bear and dolly! They want to hear it!"'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Incredible story remix creation',
          'You and baby\'s name chose a favorite story',
          'You added animal and character sounds',
          'You added action and environmental sounds',
          'You performed the complete sound adventure',
          'You combined storytelling with sound vocabulary',
          'You made reading interactive and multisensory'
        ],
        reviewQuestions: [
          'Which sounds did baby\'s name add most enthusiastically?',
          'Did they remember sounds from earlier in the week?',
          'How did adding sounds change their engagement?',
          'Did they want to perform it multiple times?'
        ],
        parentTakeaway: {
          title: 'Interactive Reading Builds Literacy Love',
          content: 'When baby\'s name added sounds to a story today, they transformed from passive listener to active creator. This shift is profound for literacy development. Interactive reading, where children contribute sounds, voices, or actions, results in dramatically better comprehension and retention than passive listening alone. The sounds baby\'s name added came from 12 weeks of learning, animal sounds, environmental sounds, action words, all being applied creatively to narrative. This is skill integration at its best. Every sound they added strengthened their understanding of story structure, sequence, and character. The remix story becomes a personalized version they\'ll want to hear repeatedly, and repetition builds literacy. Baby\'s name learned that books are flexible, interactive, and enriched by their participation. This lesson builds the foundation for future creative writing and storytelling.'
        },
        nextSteps: [
          'Remix other favorite stories with sounds.',
          'Let baby\'s name lead the sound additions.',
          'Record a sound remix to listen back to.',
          'Continue interactive reading daily.',
          'Celebrate baby\'s name as a story creator, not just listener.'
        ]
      }
    }
  ]
},

// ========= LESSON 64 =========
{
  id: 64,
  phase: '2',
  quarter: 1,
  week: 13,
  weekIndex: 12,
  dayInWeek: 4,
  title: 'Lesson 64: Family Showcase Learning Celebration',
  theme: 'Quarter Review, Our Word Parade',
  skillRecurrenceTags: ['performance', 'confidence-building', 'review', 'social-sharing'],
  relatedToPreviousSkills: ['all-quarter-skills', 'vocabulary', 'sounds', 'actions'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Showcase Learning',
      duration: '1 min',
      content: {
        goal: 'Create a special showcase where baby\'s name demonstrates all they learned this quarter to family members or favorite toys. Build confidence through performance.',
        parentGuide: [
          'Performing learned skills for others consolidates learning and builds confidence.',
          'Showcases give children a sense of accomplishment and pride in their growth.',
          'This lesson reviews the entire quarter through celebratory demonstration.',
          'Social sharing of learning strengthens memory and motivation for continued growth.'
        ],
        materials: ['Family members or stuffed animals as audience', 'Space for performing', 'Optional: simple props from previous lessons', 'Camera to capture the moment (optional)'],
        tip: 'Keep it low-pressure and playful. This is celebration, not testing. Any participation is success.',
        researchNote: 'Tomasello (2019) found that social demonstration of skills significantly enhances self-efficacy and motivation in young children\'s learning.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Set Up the Showcase',
      duration: '2-3 min',
      focus: 'Preparation and Audience Building',
      researchBasis: 'Vygotsky (1978) emphasized that social contexts for learning create powerful motivation and reinforce the cultural value of knowledge sharing.',
      content: {
        goal: 'Create a simple showcase space and gather an audience. Build excitement about showing what baby\'s name can do.',
        whatToSay: [
          '"Today is your special showcase! You\'re going to show everyone what you learned!"',
          '"Let\'s get your audience ready! Who wants to watch? Teddy bear? Dolly? Grandma?"',
          '"This is your stage! You stand right here and everyone will watch you!"',
          '"You\'re going to show all your sounds, all your words, all your actions! You know so much!"',
          '"Are you ready for your big showcase? Let\'s start soon!"'
        ],
        whatToDo: [
          'Designate a small performance area.',
          'Gather available family members.',
          'If no family available, use stuffed animals as audience.',
          'Have audience sit facing the performance space.',
          'Build anticipation and excitement.',
          'Tell baby\'s name they\'re the star.',
          'Keep setup quick and simple.',
          'Make it feel special but not stressful.'
        ],
        examples: [
          'Living room setup: baby\'s name stands in front of couch, family sits and watches.',
          'Stuffed animal audience: line up 3-4 toys, "Teddy and friends are so excited to see your showcase!"',
          'Video showcase: "Let\'s record your showcase to send to grandma later! You\'re a star!"'
        ],
        watchFor: [
          'Baby\'s name showing excitement.',
          'Engagement with the performance concept.',
          'Pride in being the center of attention.',
          'Readiness to demonstrate skills.'
        ],
        parentTip: 'If baby\'s name seems shy, you can perform together. Start with "let\'s show them together!" then gradually step back.',
        funTwist: 'Ticket entry: "Everyone needs a ticket to watch! Baby\'s name, give everyone a pretend ticket! You\'re in charge!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Sound Performance',
      duration: '3-4 min',
      focus: 'Sound Vocabulary Demonstration',
      researchBasis: 'Hart & Risley (1995) found that opportunities for expressive demonstration of vocabulary significantly accelerate language development.',
      content: {
        goal: 'Have baby\'s name demonstrate animal sounds, household sounds, and action sounds for the audience.',
        whatToSay: [
          '"First, show everyone your animal sounds! What does a dog say? Yes! Woof woof!"',
          '"Now show them more animals! Cat, cow, duck! You know so many!"',
          '"Everyone clap for those animal sounds! Amazing! Now show your house sounds!"',
          '"What sound does the doorbell make? Ding dong! What about the phone? Ring ring!"',
          '"Now your action sounds! Show them jumping! Show them clapping! You\'re incredible!"'
        ],
        whatToDo: [
          'Prompt baby\'s name for each sound category.',
          'Start with easiest, most confident sounds.',
          'Give clear prompts: "show them dog!"',
          'Applaud after each sound or group.',
          'If they\'re shy, do sounds together.',
          'Include 8-10 different sounds total.',
          'Keep it moving, fun, energetic.',
          'Have audience give enthusiastic responses.'
        ],
        examples: [
          'Animal sequence: "Show dog, woof! Show cat, meow! Show cow, moo! So many animals!"',
          'Household sounds: "Doorbell, ding dong! Phone, ring ring! Keys, jingle jingle!"',
          'Actions: demonstrate jumping, clapping, stomping while making corresponding sounds.'
        ],
        watchFor: [
          'Baby\'s name making sounds for audience.',
          'Confidence in demonstration.',
          'Enjoying audience response.',
          'Pride in their abilities.'
        ],
        parentTip: 'Audience participation matters. Make sure audience claps, cheers, and reacts enthusiastically to build confidence.',
        funTwist: 'Audience participation: "Now audience, can you copy baby\'s name\'s sounds? Everyone say woof! Baby\'s name is the teacher!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Story and Song Performance',
      duration: '3-4 min',
      focus: 'Integrated Skill Demonstration',
      researchBasis: 'Bus & van IJzendoorn (1995) showed that performing stories and songs for others significantly enhances narrative competence and memory.',
      content: {
        goal: 'Baby\'s name performs a favorite song or story moment for the audience. Demonstrate integrated learning.',
        whatToSay: [
          '"Now let\'s show everyone your favorite story with sounds! Should we do the one we remixed?"',
          '"You can act it out! Be the bear, grr! Be the bird, tweet! Show them the whole story!"',
          '"Or sing your favorite song! Should we sing Twinkle Twinkle? Or Old MacDonald?"',
          '"You lead and everyone else will join in! You\'re the performer!"',
          '"Look at everyone watching you! They love your performance!"'
        ],
        whatToDo: [
          'Let baby\'s name choose a song or story.',
          'Help them perform a portion of it.',
          'Include sounds, actions, or movements.',
          'Encourage audience to join at the end.',
          'Don\'t require a full performance.',
          'Even 30 seconds of performance is success.',
          'Support them as needed.',
          'Celebrate the demonstration enthusiastically.'
        ],
        examples: [
          'Mini story: act out 2-3 pages of Brown Bear with sounds for each animal.',
          'Song performance: sing and do actions for "Wheels on the Bus" or "If You\'re Happy and You Know It."',
          'Combo: "First show animal sounds from Old MacDonald, then act out a favorite story moment!"'
        ],
        watchFor: [
          'Baby\'s name attempting performance.',
          'Using skills from the quarter.',
          'Confidence in front of audience.',
          'Pride in accomplishment.'
        ],
        parentTip: 'Join the performance if needed. "Let\'s perform together!" Partnership builds confidence for future solo performances.',
        funTwist: 'Encore request: "The audience wants more! They\'re saying encore, encore! Can you do one more thing?"'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Award Ceremony',
      duration: '2-3 min',
      focus: 'Recognition and Celebration',
      researchBasis: 'Rowe (2012) found that explicit recognition of language milestones significantly motivates continued learning and builds positive learning identity.',
      content: {
        goal: 'Celebrate baby\'s name\'s showcase with applause, praise, and recognition of their growth. Build sense of accomplishment.',
        whatToSay: [
          '"That was the best showcase ever! Let\'s all give baby\'s name a huge round of applause!"',
          '"Baby\'s name, you learned so much this quarter! So many sounds, so many words, so many actions!"',
          '"Let\'s count some things you learned! You learned animal sounds, house sounds, action words, stories!"',
          '"Everyone say, good job baby\'s name! You worked so hard and learned so much!"',
          '"You should feel so proud! You\'re a sound expert, a word expert, a story expert! Hooray for baby\'s name!"'
        ],
        whatToDo: [
          'Lead enthusiastic applause.',
          'Specifically name skills demonstrated.',
          'Have each audience member say something positive.',
          'Give baby\'s name high fives or hugs.',
          'Take a photo of the celebration moment.',
          'Make baby\'s name feel like a star.',
          'Verbally list some of their accomplishments.',
          'End on a high note of pride and joy.'
        ],
        examples: [
          'Audience praise: "Grandma says, you were wonderful! Dad says, amazing sounds! Teddy says, best performance ever!"',
          'Skill counting: "You know 10 animal sounds! 5 house sounds! So many action words! You\'re incredible!"',
          'Group celebration: everyone does a celebration dance together after the applause.'
        ],
        watchFor: [
          'Baby\'s name beaming with pride.',
          'Accepting praise positively.',
          'Understanding they accomplished something.',
          'Happiness and satisfaction.'
        ],
        parentTip: 'Genuine, specific praise is more powerful than generic. Name actual skills you saw demonstrated.',
        funTwist: 'Victory lap: "Take a victory lap! Walk around while everyone claps! You\'re the champion of learning!"'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Lesson Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Magnificent showcase performance',
          'You and baby\'s name created a performance space',
          'Baby\'s name demonstrated sound vocabulary',
          'Baby\'s name performed a story or song',
          'Everyone celebrated baby\'s name\'s learning',
          'Baby\'s name experienced pride and accomplishment',
          'You recognized 12 weeks of incredible growth'
        ],
        reviewQuestions: [
          'How confident did baby\'s name seem during the showcase?',
          'Which skills did they demonstrate most proudly?',
          'How did audience response affect their performance?',
          'How did they react to recognition and praise?'
        ],
        parentTakeaway: {
          title: 'Performance Builds Learning Identity',
          content: 'Today\'s showcase was more than cute, it was developmentally significant. When baby\'s name demonstrated skills for an audience, they experienced themselves as competent and capable. This builds learning identity, the sense that "I am someone who knows things and can show others." Research shows children who regularly share their learning show increased motivation and persistence. The social validation from applause and praise strengthens neural pathways associated with the demonstrated skills. Baby\'s name will remember this showcase moment and associate learning with pride and recognition. The skills they performed, sounds, words, stories, are now marked as valuable and important because others witnessed and celebrated them. This showcase completed Quarter 1 by affirming that baby\'s name\'s learning matters and that they have an audience who cares about their growth.'
        },
        nextSteps: [
          'Create mini showcases regularly for ongoing learning.',
          'Point out baby\'s name\'s skills to visitors.',
          'Continue celebrating language attempts.',
          'Prepare for tomorrow\'s final quarter celebration.',
          'Recognize baby\'s name as a confident, capable learner.'
        ]
      }
    }
  ]
},

// ========= LESSON 65 =========
{
  id: 65,
  phase: '2',
  quarter: 1,
  week: 13,
  weekIndex: 12,
  dayInWeek: 5,
  title: 'Lesson 65: Certificate of Words Quarter Celebration',
  theme: 'Quarter Review, Our Word Parade',
  skillRecurrenceTags: ['quarter-celebration', 'reflection', 'milestone-recognition', 'integration'],
  relatedToPreviousSkills: ['all-quarter-1-skills', 'vocabulary', 'sounds', 'stories', 'rhythm'],
  duration: '10-15 min',
  steps: [
    {
      id: 0,
      type: 'intro',
      title: 'Welcome to Quarter Celebration',
      duration: '1 min',
      content: {
        goal: 'Celebrate the completion of Quarter 1 with reflection, recognition, and a special certificate. Honor baby\'s name\'s incredible language growth.',
        parentGuide: [
          'Quarter celebrations mark major developmental milestones and motivate continued learning.',
          'Reflection helps parents recognize growth that happens gradually over weeks.',
          'Certificates and tangible recognition build positive learning identity in children.',
          'This final lesson consolidates 13 weeks of vocabulary, sounds, and story foundation.'
        ],
        materials: ['Paper for certificate (or print template)', 'Crayons or markers for decorating', 'Photos from lessons (optional)', 'Your pride and celebration energy'],
        tip: 'Take time to genuinely reflect on baby\'s name\'s growth. The changes over 13 weeks are remarkable.',
        researchNote: 'Weisleder & Fernald (2013) found that parental recognition of language milestones significantly predicts continued vocabulary acceleration in toddlers.'
      }
    },
    {
      id: 1,
      type: 'activity',
      title: 'Step 1: Remember Week 1',
      duration: '3-4 min',
      focus: 'Reflection and Growth Recognition',
      researchBasis: 'Rowe & Weisleder (2020) showed that reflective conversations about learning progress significantly enhance parental engagement and child motivation.',
      content: {
        goal: 'Think back to Week 1 and talk about how much baby\'s name has grown. Build awareness of progress.',
        whatToSay: [
          '"Do you remember when we started learning 13 weeks ago? Let\'s think about what you learned!"',
          '"In Week 1, we were just learning to name things in our house. Now you know so many words!"',
          '"You learned animal sounds! Can you still do them? Dog, woof! Cat, meow! You remember!"',
          '"You learned about families and friends, about colors and textures, about stories and songs!"',
          '"Look how much you grew! You\'re so much bigger and smarter than Week 1!"'
        ],
        whatToDo: [
          'Sit comfortably with baby\'s name.',
          'Verbally walk through the 13 weeks.',
          'Name specific skills from each week.',
          'Ask baby\'s name to demonstrate a few.',
          'Show excitement about their growth.',
          'If you have photos from lessons, look at them.',
          'Point out specific moments of progress.',
          'Make growth visible and concrete.'
        ],
        examples: [
          'Week by week: "Week 1, naming objects. Week 2, family faces. Week 3, action words. Week 4, we played games!"',
          'Growth comparison: "At the start, you said 3 sounds. Now you know 20 sounds! That\'s amazing growth!"',
          'Photo review: "Look at this picture from Week 2! You were so little! Now look at you, so big and smart!"'
        ],
        watchFor: [
          'Baby\'s name showing recognition of past activities.',
          'Demonstrating skills from early weeks.',
          'Interest in their own growth story.',
          'Pride in how much they learned.'
        ],
        parentTip: 'You might be surprised how much they remember. Revisiting old activities can trigger memory and demonstrate retention.',
        funTwist: 'Then and now game: "Let\'s do a Week 1 activity now and see how much better you are! Watch your progress!"'
      }
    },
    {
      id: 2,
      type: 'activity',
      title: 'Step 2: Count Your Skills',
      duration: '3-4 min',
      focus: 'Skill Inventory and Recognition',
      researchBasis: 'Hart & Risley (1995) emphasized that explicit recognition of vocabulary growth reinforces language development and builds linguistic confidence.',
      content: {
        goal: 'Count and list all the skills baby\'s name gained this quarter. Make learning tangible and visible.',
        whatToSay: [
          '"Let\'s count all the things you can do now! First, animal sounds. How many animals do you know?"',
          '"Dog, cat, cow, duck, pig, sheep, horse! That\'s 7 animals! Let\'s count on our fingers!"',
          '"Now house sounds! Doorbell, phone, water, vacuum! That\'s 4 more sounds!"',
          '"And action words! Jump, run, clap, stomp! So many actions you can name and do!"',
          '"Wow! You know more than 20 different sounds and words! That\'s incredible!"'
        ],
        whatToDo: [
          'Go through skill categories one by one.',
          'Count items in each category.',
          'Use fingers to count together.',
          'Write a list if baby\'s name is interested.',
          'Include sounds, words, actions, stories.',
          'Make the numbers feel big and impressive.',
          'Celebrate each category.',
          'Add up to a total number if appropriate.'
        ],
        examples: [
          'Skill categories: Animal sounds (8-10), House sounds (5-6), Action words (10-12), Colors (4-6), Family names (3-5).',
          'Counting together: hold up fingers, "One dog, two cat, three cow!" Make it concrete and visual.',
          'Written list: write or draw simple pictures for each skill category, show baby\'s name the list.'
        ],
        watchFor: [
          'Baby\'s name participating in counting.',
          'Understanding the quantity of learning.',
          'Pride in the numbers.',
          'Engagement with the inventory process.'
        ],
        parentTip: 'Quantifying learning makes abstract growth concrete. Numbers help children grasp the magnitude of their accomplishment.',
        funTwist: 'Skill show: "Every time we count a skill, you show me that skill! Count and demonstrate! So much to show!"'
      }
    },
    {
      id: 3,
      type: 'activity',
      title: 'Step 3: Create Your Certificate',
      duration: '3-4 min',
      focus: 'Tangible Recognition Creation',
      researchBasis: 'Tomasello (2019) found that symbolic recognition of achievement significantly enhances self-concept and motivation in early childhood.',
      content: {
        goal: 'Create a special certificate celebrating baby\'s name\'s completion of Quarter 1. Make it together.',
        whatToSay: [
          '"Now we\'re making you a special certificate! This shows you finished Quarter 1!"',
          '"Let\'s write your name at the top! Baby\'s name! This certificate is for you!"',
          '"It says: Baby\'s name completed Quarter 1, My World in Words! You did it!"',
          '"Let\'s decorate it! You can draw on it, add colors, make it beautiful!"',
          '"This certificate shows everyone how much you learned! You should be so proud!"'
        ],
        whatToDo: [
          'Get paper or use a printed template.',
          'Write baby\'s name prominently.',
          'Write "Quarter 1 Complete: My World in Words."',
          'Add the date.',
          'Let baby\'s name decorate with scribbles, stickers, or stamps.',
          'Include a few specific accomplishments.',
          'Make it colorful and special.',
          'Sign it as the parent/teacher.'
        ],
        examples: [
          'Certificate text: "This certifies that baby\'s name completed Quarter 1 learning! Knows 20+ sounds, 15+ action words, loves stories!"',
          'Decoration: baby\'s name adds rainbow scribbles, stickers of animals they learned, handprints.',
          'Display plan: "Let\'s hang this on the refrigerator so everyone can see your certificate!"'
        ],
        watchFor: [
          'Baby\'s name engaging with certificate creation.',
          'Understanding it represents their achievement.',
          'Pride in the finished certificate.',
          'Interest in displaying it.'
        ],
        parentTip: 'The certificate doesn\'t need to be fancy. A simple paper with their name and your signature is meaningful.',
        funTwist: 'Certificate ceremony: "Stand up for the official certificate presentation! Everyone clap! I present this certificate to baby\'s name!"'
      }
    },
    {
      id: 4,
      type: 'activity',
      title: 'Step 4: Celebration and Looking Ahead',
      duration: '2-3 min',
      focus: 'Final Celebration and Motivation',
      researchBasis: 'Vygotsky (1978) emphasized that celebrating milestones within social contexts motivates engagement with future learning challenges.',
      content: {
        goal: 'Have a final celebration moment and get excited about Quarter 2. Build anticipation for continued learning.',
        whatToSay: [
          '"Let\'s celebrate! You finished Quarter 1! Let\'s dance and sing to celebrate!"',
          '"You learned so much! Animal sounds, house sounds, action words, stories, songs, everything!"',
          '"And guess what? Next quarter we learn even more amazing things! Are you excited?"',
          '"In Quarter 2, we\'ll learn about letters and sounds they make! We\'ll learn to read even more!"',
          '"But today, we just celebrate you! Hooray for baby\'s name! You\'re incredible!"'
        ],
        whatToDo: [
          'Put on celebration music or sing together.',
          'Dance around with baby\'s name.',
          'Clap and cheer enthusiastically.',
          'Give big hugs and high fives.',
          'Hold up the certificate proudly.',
          'Take a celebration photo together.',
          'Briefly preview exciting Quarter 2 activities.',
          'End on highest energy and joy.'
        ],
        examples: [
          'Celebration dance: play favorite song, dance together holding the certificate, sing about all they learned.',
          'Photo moment: take picture of baby\'s name holding certificate, make a big smile, "This goes in your learning album!"',
          'Quarter 2 preview: "Next time we start learning letter sounds! A says ah! B says buh! So exciting!"'
        ],
        watchFor: [
          'Baby\'s name fully engaged in celebration.',
          'Pure joy and happiness.',
          'Pride in accomplishment.',
          'Excitement about future learning.'
        ],
        parentTip: 'This celebration marks a real milestone. 13 weeks of consistent learning is a major accomplishment for both of you.',
        funTwist: 'Victory parade: march around the house with certificate held high, making celebration sounds, announcing the achievement!'
      }
    },
    {
      id: 5,
      type: 'conclusion',
      title: 'Quarter 1 Complete',
      duration: '1 min',
      content: {
        celebration: [
          'Extraordinary Quarter 1 completion',
          'You and baby\'s name reflected on 13 weeks of growth',
          'You counted and recognized all the skills learned',
          'You created a special certificate together',
          'You celebrated this major milestone',
          'You built excitement for Quarter 2',
          'You completed My World in Words journey'
        ],
        reviewQuestions: [
          'What growth are you most proud of in baby\'s name?',
          'Which lessons did baby\'s name enjoy most this quarter?',
          'How has baby\'s name\'s communication changed since Week 1?',
          'What will you remember most from Quarter 1?'
        ],
        parentTakeaway: {
          title: 'You Built a Language Foundation',
          content: 'Congratulations on completing Quarter 1 of Phase 2! Over 13 weeks, baby\'s name built an extraordinary foundation in vocabulary, sound awareness, and early literacy. From naming household objects in Week 1 to performing stories with sound effects in Week 13, the growth is remarkable. Baby\'s name learned environmental sounds, animal sounds, action vocabulary, family relationships, colors, textures, rhyming, rhythm, and story comprehension. These aren\'t just cute skills, they\'re the building blocks of reading. Every sound baby\'s name learned strengthens phonological awareness. Every word they acquired expands their thinking capacity. Every story they engaged with builds comprehension skills. Research shows the language-rich environment you created these 13 weeks will have lasting impacts on baby\'s name\'s literacy, academic success, and cognitive development. You showed up consistently, made learning playful, and celebrated every small victory. That dedication matters profoundly. As you begin Quarter 2, know that you\'re building on an incredibly strong foundation. Baby\'s name is ready for the next phase of learning, and you\'re equipped to guide them. Well done.'
        },
        nextSteps: [
          'Display the certificate prominently.',
          'Take a few days break before starting Quarter 2.',
          'Continue practicing Quarter 1 skills during daily routines.',
          'Review Quarter 2 overview to prepare.',
          'Celebrate yourselves as a committed learning team.',
          'Get excited for Sounds Turn Into Letters in Quarter 2!'
        ]
      }
    }
  ]
}

  ]
}
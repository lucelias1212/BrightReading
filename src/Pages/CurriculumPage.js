import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import { BookOpen, Home, Info, User, Brain, RefreshCw, Target, Heart, Lightbulb, ChevronDown, ChevronUp, Calendar, Star, Trophy, Check, ArrowLeft, Play, TrendingUp, Sparkles, Zap, Award } from 'lucide-react';

const CurriculumPage = () => {
  const navigate = useNavigate();
  const { user, userData } = useUser();
  const [selectedAge, setSelectedAge] = useState(null);
  const [expandedQuarter, setExpandedQuarter] = useState(null);
  const [showOverview, setShowOverview] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overviewRef = useRef(null);
  const phaseDetailRef = useRef(null);
  const mainContainerRef = useRef(null);
  const completedLessons = userData?.completedLessons || [];
  const currentWeek = Math.floor(completedLessons.length / 5) + 1;

  const curriculumData = {
    '1-2': {
      title: 'Phase 1: Foundations',
      subtitle: 'Ages 1-2',
      icon: '/assets/P1F.png',
      color: 'from-pink-400 to-rose-500',
      theme: 'Sounds and Senses',
      description: 'Building sensory awareness, early language, and object recognition through play and imitation',
      focus: ['Sound awareness and listening', 'Object recognition and labeling', 'Early motor control for pre-writing', 'Rhythm, rhyme, and simple imitation', 'Book awareness (turning pages, pointing, naming)'],
      parentRole: 'Guide exposure and encourage curiosity. No testing — only play and conversation.',
      lessonStructure: {
        weekly: '1 Chapter = 5 Lessons',
        daily: '10-20 minutes per day',
        quarterly: 'Deep mastery of 2-3 developmental domains'
      },
      quarters: [
        {
          name: 'Quarter 1',
          weeks: '1-13',
          theme: 'Sounds & Senses',
          color: 'from-pink-300 to-rose-400',
          description: 'Sound play — animal noises, rhythm claps, name sounds',
          weekBreakdown: [
            { weeks: '1-3', focus: 'Sound play — animal noises, rhythm claps, name sounds' },
            { weeks: '4', focus: 'Integrate via music and echo games' },
            { weeks: '5-7', focus: 'Object naming and matching' },
            { weeks: '8', focus: 'Revisit early sounds in daily routines' },
            { weeks: '9-12', focus: 'Rhyming exposure, storytime sound play' },
            { weeks: '13', focus: 'Quarter review — "Our Favorite Sounds"' }
          ],
          skillRecurrence: 'Week 1\'s sound games reappear in Week 8 with new environmental sounds',
          activities: ['Animal sound games', 'Rhythm clapping', 'Name recognition songs', 'Object naming routines'],
          enrichment: ['Sound hunts', 'Sensory bins', 'Hand clap rhythms', 'Peek-a-boo labeling']
        },
        {
          name: 'Quarter 2',
          weeks: '14-26',
          theme: 'Words in Our World',
          color: 'from-orange-300 to-amber-400',
          description: 'Labeling, naming, pointing',
          weekBreakdown: [
            { weeks: '14-17', focus: 'Daily object labeling and repetition' },
            { weeks: '18-21', focus: 'Action words through play' },
            { weeks: '22-25', focus: 'Building 2-word phrases' },
            { weeks: '26', focus: 'Quarter review through familiar books' }
          ],
          skillRecurrence: 'Reintroduce skills every 3 weeks via books, songs, routines',
          activities: ['Point and name games', 'Picture book exploration', 'Routine narration', 'Simple command following'],
          enrichment: ['Mealtime narration', 'Walk and label games', 'Family photo naming', 'Toy sorting by name']
        },
        {
          name: 'Quarter 3',
          weeks: '27-39',
          theme: 'Shapes, Colors & Touch',
          color: 'from-yellow-300 to-orange-400',
          description: 'Visual literacy: shapes, colors. Tactile exploration',
          weekBreakdown: [
            { weeks: '27-30', focus: 'Shape recognition and naming' },
            { weeks: '31-34', focus: 'Color identification in environment' },
            { weeks: '35-38', focus: 'Texture exploration (sand, water, fabric)' },
            { weeks: '39', focus: 'Quarter review — sensory celebration' }
          ],
          skillRecurrence: 'Integrate tactile learning with previously learned vocabulary',
          activities: ['Shape sorting', 'Color hunts', 'Sensory bins', 'Texture matching'],
          enrichment: ['Environmental color hunt', 'Shape crafts', 'Water/sand play', 'Fabric texture books']
        },
        {
          name: 'Quarter 4',
          weeks: '40-52',
          theme: 'Storytime Beginnings',
          color: 'from-green-300 to-teal-400',
          description: 'Parents model reading aloud. Children turn pages, predict outcomes',
          weekBreakdown: [
            { weeks: '40-43', focus: 'Page turning and book handling' },
            { weeks: '44-47', focus: 'Picture predictions and pointing' },
            { weeks: '48-51', focus: 'Simple story sequences' },
            { weeks: '52', focus: 'Year-end review and milestone celebration' }
          ],
          activities: ['Read-aloud sessions', 'Picture pointing', 'Story actions', 'Book choosing'],
          enrichment: ['Story retelling with props', 'Make predictions', 'Act out stories', 'Create story endings']
        }
      ],
      outcomes: [
        'Recognizes 50-100 common objects',
        'Responds to simple commands',
        'Shows interest in books',
        'Attempts to imitate sounds',
        'Enjoys rhythmic activities'
      ],
      milestones: 'Recognizes 10-20 objects, imitates simple sounds'
    },
    '2-3': {
      title: 'Phase 2: Explorers',
      subtitle: 'Ages 2-3',
      icon: '/assets/P2F.png',
      color: 'from-green-400 to-teal-500',
      theme: 'My World in Words',
      description: 'Expanding vocabulary, building listening comprehension, and introducing print awareness',
      focus: ['Vocabulary growth (naming objects and actions)', 'Phonemic awareness (recognizing beginning sounds)', 'Print awareness (books, letters, and names)', 'Listening comprehension (following short stories)', 'Fine motor skills (scribbling, pointing, tracing)'],
      parentRole: 'Narrate daily life, model language, make repetition playful and engaging. Use daily activities to reinforce words.',
      quarters: [
        {
          name: 'Quarter 1',
          weeks: '1-13',
          theme: 'Object Naming & Repetition',
          color: 'from-green-300 to-emerald-400',
          description: 'Daily life objects, family members, simple verbs',
          weekBreakdown: [
            { weeks: '1-2', focus: 'Object naming and repetition ("cup," "dog," "car")' },
            { weeks: '3', focus: 'Listening to rhythm and sound in speech' },
            { weeks: '4', focus: 'Review Week — sound and naming games' },
            { weeks: '5-6', focus: 'Identifying family members and people' },
            { weeks: '7-8', focus: 'Everyday actions (run, eat, sleep)' },
            { weeks: '9-12', focus: 'Revisit naming skills in stories' },
            { weeks: '13', focus: 'Quarter Review — "Our Word Parade!"' }
          ],
          skillRecurrence: 'Week 1\'s "naming household objects" returns in Week 9 during storytime',
          activities: ['Daily naming routines', 'Family photo games', 'Action charades', 'Story object hunts'],
          parentGuidance: 'Name items during routines; point and repeat daily. Use photos to practice names.'
        },
        {
          name: 'Quarter 2',
          weeks: '14-26',
          theme: 'Sounds Turn Into Letters',
          color: 'from-teal-300 to-cyan-400',
          description: 'Letter sounds and first-name recognition',
          weekBreakdown: [
            { weeks: '14-15', focus: 'Listening for beginning sounds ("B is for ball")' },
            { weeks: '16', focus: 'Drawing and tracing large letters' },
            { weeks: '17', focus: 'Review — letter sound games' },
            { weeks: '18-20', focus: 'First-name recognition' },
            { weeks: '21-23', focus: 'Introduce alphabet groups (A–F, G–L, etc.)' },
            { weeks: '24-25', focus: 'Story sound hunt' },
            { weeks: '26', focus: 'Quarter Review — "Alphabet Dance Party!"' }
          ],
          skillRecurrence: 'Letter sounds (Week 14) appear again in Week 24\'s "sound hunt"',
          activities: ['Beginning sound games', 'Letter tracing', 'Name recognition', 'Alphabet songs'],
          parentGuidance: 'Use toys and name the first sound aloud. Help child find their name on stickers.'
        },
        {
          name: 'Quarter 3',
          weeks: '27-39',
          theme: 'Talk, Move & Create',
          color: 'from-blue-300 to-indigo-400',
          description: 'Word combinations, rhymes, sequencing actions',
          weekBreakdown: [
            { weeks: '27-28', focus: 'Describe actions and feelings' },
            { weeks: '29', focus: 'Rhyming fun (cat, hat, bat)' },
            { weeks: '30', focus: 'Review — rhymes and actions' },
            { weeks: '31-33', focus: 'Word combinations ("big car," "red ball")' },
            { weeks: '34-36', focus: 'Matching pictures and words' },
            { weeks: '37-38', focus: 'Story sequencing (first, next, last)' },
            { weeks: '39', focus: 'Quarter Review — "We Tell Stories!"' }
          ],
          skillRecurrence: 'Rhyming from Week 29 reappears in Week 34 as sound–word matching',
          activities: ['Feeling charades', 'Rhyme time', 'Picture-word matching', 'Story retelling'],
          parentGuidance: 'Model short phrases during play. Use 3-step picture stories for sequencing.'
        },
        {
          name: 'Quarter 4',
          weeks: '40-52',
          theme: 'Little Readers, Big Thinkers',
          color: 'from-purple-300 to-pink-400',
          description: 'Story comprehension, print awareness, early writing',
          weekBreakdown: [
            { weeks: '40-41', focus: 'Choosing favorite books' },
            { weeks: '42-44', focus: 'Understanding sequence and cause-effect' },
            { weeks: '45', focus: 'Review — "Storytime Replay!"' },
            { weeks: '46-48', focus: 'Recognize print in environment (signs, labels)' },
            { weeks: '49-51', focus: 'Story retelling with art' },
            { weeks: '52', focus: 'Year Review — "My Reading Scrapbook!"' }
          ],
          skillRecurrence: 'Story sequencing (Week 37) revisits in Week 42 as cause-and-effect play',
          activities: ['Book selection', 'What happens next?', 'Environmental print hunt', 'Story art'],
          parentGuidance: 'Let child pick books nightly. Point out words on everyday items.'
        }
      ],
      outcomes: [
        'Recognize and name 100-200 common objects',
        'Identify 6-10 letters and their sounds',
        'Follow short stories with simple sequencing',
        'Begin scribbling or marking intentionally',
        'Show preference for familiar books and sounds'
      ]
    },
    '3-4': {
      title: 'Phase 3: Thinkers',
      subtitle: 'Ages 3-4',
      icon: '/assets/P3F.png',
      color: 'from-blue-400 to-indigo-500',
      theme: 'Letters Come Alive',
      description: 'Transitioning from oral language to pre-reading through print, rhyme, and storytelling',
      focus: ['Phonemic awareness (blending sounds)', 'Alphabet mastery (upper- and lowercase letters)', 'Vocabulary expansion (categories, opposites, adjectives)', 'Listening comprehension and retelling', 'Fine motor refinement for writing'],
      parentRole: 'Point, sing, trace letters, model sound-letter connection. Model reading aloud daily, praise progress.',
      quarters: [
        {
          name: 'Quarter 1',
          weeks: '1-13',
          theme: 'Alphabet Exploration',
          color: 'from-blue-300 to-sky-400',
          description: 'Introduce letters, sounds, and patterns',
          weekBreakdown: [
            { weeks: '1-2', focus: 'Alphabet exploration (A–F)' },
            { weeks: '3', focus: 'Phoneme focus ("a" in apple, "b" in ball)' },
            { weeks: '4', focus: 'Review Week — Alphabet Sound Hunt' },
            { weeks: '5-7', focus: 'Alphabet (G–L)' },
            { weeks: '8', focus: 'Skill Recurrence: review A–F sounds' },
            { weeks: '9-12', focus: 'Alphabet (M–Z)' },
            { weeks: '13', focus: 'Quarter Review — "Alphabet Fair!"' }
          ],
          skillRecurrence: 'Sound matching from Week 3 returns in Week 8 with motor tracing',
          activities: ['Letter introduction songs', 'Sound-motion games', 'Alphabet hunts', 'Letter crafts'],
          parentGuidance: 'Introduce 1-2 letters daily with visuals. Use songs and movement for each sound.'
        },
        {
          name: 'Quarter 2',
          weeks: '14-26',
          theme: 'Rhymes & Sequences',
          color: 'from-indigo-300 to-purple-400',
          description: 'Rhyming games, cause-effect sequences',
          weekBreakdown: [
            { weeks: '14-15', focus: 'Beginning sound isolation' },
            { weeks: '16-17', focus: 'Ending sound identification' },
            { weeks: '18', focus: 'Review — rhyming and matching' },
            { weeks: '19-21', focus: 'Blending two sounds (c + a = ca)' },
            { weeks: '22-24', focus: 'Building CVC words (cat, hat, mat)' },
            { weeks: '25', focus: 'Skill Recurrence — return to early blends' },
            { weeks: '26', focus: 'Quarter Review — "Sound Builders"' }
          ],
          skillRecurrence: 'Blending introduced in Week 19 reappears in Week 25 with CVC completion',
          activities: ['Sound isolation games', 'Rhyme matching', 'Phoneme blending', 'Word building'],
          parentGuidance: 'Use blocks or cards for each sound. Blend aloud using toys or pictures.'
        },
        {
          name: 'Quarter 3',
          weeks: '27-39',
          theme: 'Story Builders',
          color: 'from-purple-300 to-fuchsia-400',
          description: 'Story sequencing, vocabulary expansion, character/emotion recognition',
          weekBreakdown: [
            { weeks: '27-29', focus: 'Story sequencing (beginning, middle, end)' },
            { weeks: '30', focus: 'Review — retell stories from memory' },
            { weeks: '31-33', focus: 'Character and emotion recognition' },
            { weeks: '34-35', focus: 'Vocabulary expansion — opposites and categories' },
            { weeks: '36', focus: 'Skill Recurrence — storytelling with new words' },
            { weeks: '37-38', focus: 'Predicting outcomes in stories' },
            { weeks: '39', focus: 'Quarter Review — "Our Story Show"' }
          ],
          skillRecurrence: 'Emotion vocabulary (Week 31) reappears in Week 36 within storytelling',
          activities: ['3-panel stories', 'Character emotions', 'Category sorting', 'Prediction games'],
          parentGuidance: 'Use 3-panel picture stories. Ask "How does the character feel?"'
        },
        {
          name: 'Quarter 4',
          weeks: '40-52',
          theme: 'Ready to Read',
          color: 'from-pink-300 to-rose-400',
          description: 'Print recognition, early blending, guided story creation',
          weekBreakdown: [
            { weeks: '40-41', focus: 'Review A–Z and key sounds' },
            { weeks: '42-44', focus: 'Simple sight words (the, is, it, at)' },
            { weeks: '45', focus: 'Review — early reader books' },
            { weeks: '46-48', focus: 'Writing name and simple words' },
            { weeks: '49-51', focus: 'Story creation ("My own book")' },
            { weeks: '52', focus: 'Year Review — "I\'m a Reader!"' }
          ],
          skillRecurrence: 'Sight words from Week 42 reused in Week 49 for child-authored books',
          activities: ['Alphabet review', 'Sight word games', 'Name writing', 'Story creation'],
          parentGuidance: 'Practice matching letter cards. Let child read with you or fill in words.'
        }
      ],
      outcomes: [
        'Recognize all 26 letters (upper and lowercase)',
        'Identify 15-20 common sight words',
        'Blend simple phonemes into full words',
        'Sequence and retell short stories',
        'Begin writing name and basic shapes',
        'Show excitement and confidence about reading'
      ]
    },
    '4-5': {
      title: 'Phase 4: Readers',
      subtitle: 'Ages 4-5',
      icon: '/assets/P4F.png',
      color: 'from-indigo-400 to-purple-500',
      theme: 'Independent Readers & Writers',
      description: 'Developing early reading fluency, comprehension, and expression with phonics and sight words',
      focus: ['Phonics and decoding (CVC and blends)', 'Sight word recognition and fluency', 'Story comprehension and retelling', 'Sentence writing and early composition', 'Listening, reasoning, and prediction'],
      parentRole: 'Model decoding, point and read aloud. Encourage independent attempts, listen supportively, model curiosity about text.',
      quarters: [
        {
          name: 'Quarter 1',
          weeks: '1-13',
          theme: 'Sound + Sight = Reading',
          color: 'from-indigo-300 to-blue-400',
          description: 'CVC words, blending sounds',
          weekBreakdown: [
            { weeks: '1-2', focus: 'CVC word practice (cat, dog, sun)' },
            { weeks: '3', focus: 'Sound blending and segmenting games' },
            { weeks: '4', focus: 'Review — CVC and rhyme practice' },
            { weeks: '5-7', focus: 'Consonant blends (bl, st, tr, gr)' },
            { weeks: '8', focus: 'Skill Recurrence — CVC + new blends' },
            { weeks: '9-12', focus: 'Word families (-at, -og, -it)' },
            { weeks: '13', focus: 'Quarter Review — "Word Builder Party!"' }
          ],
          skillRecurrence: 'Blends from Week 5 revisited in Week 8 and Week 12 word-family work',
          activities: ['CVC flashcards', 'Blending games', 'Word families', 'Word ladders'],
          parentGuidance: 'Use flashcards and read aloud daily. Say words slowly for blending practice.'
        },
        {
          name: 'Quarter 2',
          weeks: '14-26',
          theme: 'Building Sentences',
          color: 'from-purple-300 to-violet-400',
          description: 'Sight words, short sentence formation',
          weekBreakdown: [
            { weeks: '14-15', focus: 'Sight word review and expansion' },
            { weeks: '16-18', focus: 'Building sentences ("The cat runs.")' },
            { weeks: '19', focus: 'Review — sentence games' },
            { weeks: '20-22', focus: 'Reading short predictable books' },
            { weeks: '23-25', focus: 'Introducing punctuation' },
            { weeks: '26', focus: 'Quarter Review — "I Can Read!"' }
          ],
          skillRecurrence: 'Sight words from Week 14 recur in Week 20 sentences, then Week 26 reading',
          activities: ['Sight word cards', 'Sentence building', 'Predictable books', 'Punctuation games'],
          parentGuidance: 'Rearrange cards to form sentences. Pause and ask questions while reading.'
        },
        {
          name: 'Quarter 3',
          weeks: '27-39',
          theme: 'Stories Have Meaning',
          color: 'from-fuchsia-300 to-pink-400',
          description: 'Story sequencing, inference, vocabulary growth',
          weekBreakdown: [
            { weeks: '27-28', focus: 'Story sequencing and recall' },
            { weeks: '29', focus: 'Review — act out stories' },
            { weeks: '30-32', focus: 'Making inferences ("Why did the dog run?")' },
            { weeks: '33-35', focus: 'Vocabulary growth — adjectives and opposites' },
            { weeks: '36', focus: 'Skill Recurrence — add adjectives to old stories' },
            { weeks: '37-38', focus: 'Emotions and empathy in stories' },
            { weeks: '39', focus: 'Quarter Review — "Our Story Theater!"' }
          ],
          skillRecurrence: 'Sequencing from Week 27 returns in Week 36 with vocabulary expansion',
          activities: ['Story recall', 'Story drama', 'Inference questions', 'Adjective games'],
          parentGuidance: 'Ask what happened first, next, last. Ask open-ended comprehension questions.'
        },
        {
          name: 'Quarter 4',
          weeks: '40-52',
          theme: 'Independent Readers and Writers',
          color: 'from-rose-300 to-red-400',
          description: 'Early fluency, writing, and comprehension',
          weekBreakdown: [
            { weeks: '40-41', focus: 'Sight word mastery (review all 50+)' },
            { weeks: '42-44', focus: 'Reading short paragraphs and stories' },
            { weeks: '45', focus: 'Review — story sequencing + inference' },
            { weeks: '46-48', focus: 'Writing practice (sentences and short stories)' },
            { weeks: '49-51', focus: '"All About Me" project' },
            { weeks: '52', focus: 'Year Review — "I\'m a Reader Celebration!"' }
          ],
          skillRecurrence: 'Writing sentences (Week 16) reappears as full-story creation in Week 46',
          activities: ['Sight word mastery', 'Paragraph reading', 'Sentence writing', 'Story projects'],
          parentGuidance: 'Encourage tracking with finger. Provide lined paper for self-expression.'
        }
      ],
      outcomes: [
        'Read 50-75 sight words confidently',
        'Decode simple sentences and short stories',
        'Comprehend, recall, and predict story events',
        'Write basic sentences and short narratives',
        'Show emotional connection while reading aloud',
        'Transition smoothly to kindergarten-level literacy'
      ]
    }
  };

  const getCurrentQuarter = () => {
    if (currentWeek <= 13) return 0;
    if (currentWeek <= 26) return 1;
    if (currentWeek <= 39) return 2;
    return 3;
  };

  const isPhaseActive = (phaseId) => {
    return userData?.selectedAge === phaseId;
  };

const LearningMechanicsSection = () => (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <Zap className="text-yellow-500" size={32} />
        Learning Mechanics
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">BrightReading uses proven techniques to make learning stick:</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <RefreshCw className="text-purple-500" size={20} />
            Spiral Reinforcement
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Every 3-4 weeks, skills are revisited in more complex or creative forms
          </p>
          <div className="bg-white rounded-lg p-3 text-xs text-gray-600">
            <strong>Example:</strong> Week 1 "animal sounds" → Week 5 "household sounds" → Week 8 "storytime sounds"
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <Brain className="text-blue-500" size={20} />
            Multi-Modal Learning
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Mix auditory, visual, and kinesthetic experiences
          </p>
          <div className="bg-white rounded-lg p-3 text-xs space-y-1">
            <div><strong>Auditory:</strong> Songs, rhymes, listening games</div>
            <div><strong>Visual:</strong> Flashcards, books, environmental print</div>
            <div><strong>Kinesthetic:</strong> Tracing, movement, object sorting</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <Home className="text-green-500" size={20} />
            Environmental Embedding
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Skills are integrated into everyday life
          </p>
          <div className="bg-white rounded-lg p-3 text-xs space-y-1">
            <div><strong>Mealtime:</strong> "Where is your spoon?"</div>
            <div><strong>Walks:</strong> "Find something red"</div>
            <div><strong>Play:</strong> Labeling toys, narrating actions</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <TrendingUp className="text-orange-500" size={20} />
            Parent-Led Scaffolding
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Gradually shift responsibility to the child
          </p>
          <div className="bg-white rounded-lg p-3 text-xs space-y-1">
            <div><strong>Phase 1:</strong> Parent models and narrates</div>
            <div><strong>Phase 2:</strong> Child responds with words/gestures</div>
            <div><strong>Phase 3:</strong> Child combines words</div>
            <div><strong>Phase 4:</strong> Child reads independently</div>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Overview Section
  const OverviewSection = () => (
    <div ref={overviewRef} className="space-y-8">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
<div className="mb-6 inline-block">
  <img src="/assets/Curriculum.png" alt="Curriculum" className="w-48 h-36 object-contain mx-auto" />
</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">BrightReading Curriculum </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto mb-8 leading-relaxed">
            From first sounds to confident reading — a science-backed curriculum built on play, repetition, and natural development
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 font-semibold hover:bg-white/30 transition-all transform hover:scale-105">
              Ages 1-5
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 font-semibold hover:bg-white/30 transition-all transform hover:scale-105">
              4 Phases • 52 Weeks Each
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 font-semibold hover:bg-white/30 transition-all transform hover:scale-105">
              10-15 min/day
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 font-semibold hover:bg-white/30 transition-all transform hover:scale-105">
              Play-Based Learning
            </div>
          </div>
        </div>
      </div>

      {/* Core Structure */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Brain className="text-purple-500" size={32} />
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">4 Developmental Phases</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Each phase spans one full year (52 weeks), perfectly aligned with your child's natural development from ages 1-5</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Quarterly Themes</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Every 13 weeks introduces a new theme, ending with a celebration week to review and reinforce mastery</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="font-bold text-xl text-gray-900 mb-3">Daily Lessons</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Just 10-15 minutes per day, 5 lessons per week — short, focused, and designed for busy families</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300">
          <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="text-amber-500" size={20} />
            The BrightReading Formula
          </h3>
          <div className="space-y-2 text-gray-700 leading-relaxed">
            <p><strong>260 lessons per year</strong> = 52 weeks × 5 lessons</p>
            <p><strong>Each week = 1 Chapter</strong> with 5 focused lessons (10-20 minutes each)</p>
            <p className="text-sm">Skills are introduced, practiced through play, reinforced every 3-4 weeks, and celebrated quarterly. No pressure, no testing — just natural, joyful learning.</p>
          </div>
        </div>
      </div>

      {/* Skill Recurrence */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-300 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <RefreshCw className="text-green-500" size={32} />
          The Secret: Skill Recurrence
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Children don't master skills in one sitting — they need repeated exposure in fresh, engaging contexts. BrightReading uses a <strong>spiral learning approach</strong> where key concepts resurface every 3-4 weeks with increasing complexity and creativity.
        </p>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-3xl mb-2">👂</div>
            <div className="text-xs text-gray-600 font-bold mb-1 uppercase tracking-wide">Week 1</div>
            <p className="text-sm text-gray-800 font-medium">Hears the sound "A"</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-3xl mb-2">👁️</div>
            <div className="text-xs text-gray-600 font-bold mb-1 uppercase tracking-wide">Week 4</div>
            <p className="text-sm text-gray-800 font-medium">Sees letter "A" in books</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-3xl mb-2">✏️</div>
            <div className="text-xs text-gray-600 font-bold mb-1 uppercase tracking-wide">Week 8</div>
            <p className="text-sm text-gray-800 font-medium">Traces and draws "A"</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all transform hover:scale-105">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-xs text-gray-600 font-bold mb-1 uppercase tracking-wide">Week 12</div>
            <p className="text-sm text-gray-800 font-medium">Creates with "A" words</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-md">
          <p className="text-gray-800 font-medium leading-relaxed">
            <span className="text-green-600 font-bold text-lg">Why it works:</span> Repeated exposure strengthens neural pathways. By the time your child encounters "A" for the fourth time, it feels familiar, fun, and easy — not forced or frustrating.
          </p>
        </div>
      </div>

      {/* Pedagogical Foundation */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <Lightbulb className="text-yellow-500" size={32} />
          Built on Science
        </h2>
        <p className="text-gray-600 mb-6">BrightReading is grounded in decades of research on how young children learn best:</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all bg-gradient-to-br from-purple-50 to-white">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Spiral Curriculum</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Bruner (1960):</strong> Reintroducing concepts at increasing complexity deepens understanding and retention
            </p>
          </div>
          <div className="border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all bg-gradient-to-br from-blue-50 to-white">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Spaced Repetition</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Cepeda et al. (2006):</strong> Distributed practice strengthens long-term memory far better than cramming
            </p>
          </div>
          <div className="border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-all bg-gradient-to-br from-green-50 to-white">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">Emergent Literacy</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Whitehurst & Lonigan (1998):</strong> Reading skills emerge from oral and visual play, not drills or worksheets
            </p>
          </div>
        </div>
      </div>

      {/* Learning Mechanics */}
      <LearningMechanicsSection />

      {/* Phase Overview Cards */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
  <img src="/assets/Curriculum.png" alt="Curriculum" className="w-12 h-12 object-contain" />
  Your Child's 4-Year Journey
</h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">Each phase is carefully designed to match your child's developmental stage — from sensory exploration to independent reading.</p>
        {Object.entries(curriculumData).map(([ageKey, phase]) => (
          <button
            key={ageKey}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setSelectedAge(ageKey);
                setShowOverview(false);
                window.scrollTo({ top: 0, behavior: 'instant' });
                requestAnimationFrame(() => {
                  setIsTransitioning(false);
                });
              }, 500);
            }}
            className={`w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden text-left transform hover:scale-[1.02] ${
              isPhaseActive(ageKey) ? 'ring-4 ring-purple-500' : ''
            }`}
          >
            <div className={`h-28 bg-gradient-to-r ${phase.color} flex items-center px-8 gap-6 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/5"></div>
              <div className="text-6xl relative z-10...">
  <img src={phase.icon} alt={phase.title} className="w-16 h-16 object-contain" />
</div>
              <div className="text-white flex-1 relative z-10">
                <h3 className="text-2xl font-bold mb-1">{phase.title}</h3>
                <p className="text-lg opacity-90">{phase.subtitle}</p>
              </div>
              {isPhaseActive(ageKey) && (
                <div className="ml-auto bg-white/20 backdrop-blur-md px-5 py-2 rounded-full font-bold text-lg relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Active Phase
                </div>
              )}
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-5 text-base leading-relaxed">{phase.description}</p>
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex gap-2 text-sm flex-wrap">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
                    52 Weeks
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                    4 Quarters
                  </span>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                    260 Lessons
                  </span>
                </div>
                <span className="text-purple-600 font-bold flex items-center gap-2 text-base hover:gap-3 transition-all">
                  Explore Phase
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 rounded-2xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-md rounded-full p-4 mb-4">
  <img src="/assets/Curriculum.png" alt="Ready to Begin" className="w-16 h-16 object-contain mx-auto" />
</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-3">Ready to Begin the Journey?</h3>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto leading-relaxed">
            Choose your child's age group and start building the foundation for a lifetime of confident reading
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3"
          >
            <Play size={24} />
            Start Learning Today
          </button>
        </div>
      </div>
    </div>
  );

  // Detailed Phase View
  const PhaseDetailView = () => {
    const phase = curriculumData[selectedAge];
    const currentQuarter = getCurrentQuarter();
    const isUserPhase = isPhaseActive(selectedAge);

    return (
      <div ref={phaseDetailRef} className="space-y-8">
        {/* Phase Header */}
        <div className={`bg-gradient-to-r ${phase.color} rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <button
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setSelectedAge(null);
                  setShowOverview(true);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                  requestAnimationFrame(() => {
                    setIsTransitioning(false);
                  });
                }, 500);
              }}
              className="mb-6 flex items-center gap-2 text-white/90 hover:text-white transition-all bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              <ArrowLeft size={20} />
              Back to all phases
            </button>
            <div className="flex items-center gap-6 mb-6 flex-wrap">
              <div className="text-7xl">
  <img src={phase.icon} alt={phase.title} className="w-20 h-20 object-contain" />
</div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{phase.title}</h1>
                <p className="text-2xl opacity-90 mb-2">{phase.subtitle}</p>
                <p className="text-xl opacity-80 italic">"{phase.theme}"</p>
              </div>
              {isUserPhase && (
                <div className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 border-2 border-white/30">
                  <div className="text-sm opacity-90 mb-1">Your Progress</div>
                  <div className="text-3xl font-bold">Week {currentWeek}</div>
                  <div className="text-sm opacity-80 mt-1">of 52</div>
                </div>
              )}
            </div>
            <p className="text-xl opacity-95 mb-6 leading-relaxed">{phase.description}</p>
            <div className="flex gap-3 flex-wrap">
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-semibold border border-white/30">
                52 Weeks
              </span>
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-semibold border border-white/30">
                4 Quarters
              </span>
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-semibold border border-white/30">
                260 Lessons
              </span>
              <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full font-semibold border border-white/30">
                10-15 min/day
              </span>
            </div>
          </div>
        </div>

        {/* Progress Indicator for Active Phase */}
        {isUserPhase && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="text-purple-500" size={24} />
              Your Current Progress
            </h3>
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="font-medium">Week {currentWeek} of 52</span>
                <span className="font-bold text-purple-600">{Math.round((currentWeek / 52) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 h-4 rounded-full transition-all duration-500 shadow-lg"
                  style={{ width: `${(currentWeek / 52) * 100}%` }}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                <p className="text-xs text-gray-600 mb-1 font-semibold uppercase tracking-wide">Completed</p>
                <p className="text-2xl font-bold text-purple-600">{completedLessons.length}</p>
                <p className="text-xs text-gray-500 mt-1">Lessons</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border-2 border-green-200">
                <p className="text-xs text-gray-600 mb-1 font-semibold uppercase tracking-wide">Current Week</p>
                <p className="text-2xl font-bold text-green-600">{currentWeek}</p>
                <p className="text-xs text-gray-500 mt-1">of 52</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border-2 border-orange-200">
                <p className="text-xs text-gray-600 mb-1 font-semibold uppercase tracking-wide">Remaining</p>
                <p className="text-2xl font-bold text-orange-600">{52 - currentWeek + 1}</p>
                <p className="text-xs text-gray-500 mt-1">Weeks</p>
              </div>
            </div>
          </div>
        )}

        {/* Developmental Focus */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Target className="text-purple-500" size={28} />
            What Your Child Will Explore
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {phase.focus.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200 hover:shadow-md transition-all">
                <Check className="text-purple-500 flex-shrink-0 mt-0.5" size={20} />
                <span className="text-gray-800 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Role */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-300 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Heart className="text-blue-500" size={24} />
            Your Role as a Parent
          </h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            <span className="text-blue-600 font-semibold">"</span>{phase.parentRole}<span className="text-blue-600 font-semibold">"</span>
          </p>
        </div>

        {/* Quarters */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="text-purple-500" size={32} />
            Quarterly Learning Path
          </h2>
          
          {phase.quarters.map((quarter, qIdx) => {
            const [startWeek, endWeek] = quarter.weeks.split('-').map(Number);
            const isCurrentQuarter = isUserPhase && currentWeek >= startWeek && currentWeek <= endWeek;
            
            return (
              <div key={qIdx} className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all ${isCurrentQuarter ? 'ring-4 ring-purple-500 border-purple-300' : 'border-gray-200'}`}>
                <button
                  onClick={() => setExpandedQuarter(expandedQuarter === qIdx ? null : qIdx)}
                  className={`w-full bg-gradient-to-r ${quarter.color} p-6 text-left text-white hover:opacity-95 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="bg-white/25 backdrop-blur-md px-5 py-2 rounded-full font-bold text-lg border border-white/30">
                          Weeks {quarter.weeks}
                        </span>
                        <h3 className="text-2xl font-bold">{quarter.name}</h3>
                        {isCurrentQuarter && (
                          <span className="bg-white/30 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold animate-pulse flex items-center gap-2">
                            <Zap size={16} />
                            Current Quarter
                          </span>
                        )}
                      </div>
                      <p className="text-xl font-semibold mb-2">{quarter.theme}</p>
                      <p className="opacity-90 leading-relaxed">{quarter.description}</p>
                    </div>
                    <div className="ml-4">
                      {expandedQuarter === qIdx ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
                    </div>
                  </div>
                </button>

                {expandedQuarter === qIdx && (
                  <div className="p-8 space-y-6 bg-gradient-to-b from-gray-50 to-white">
                    {/* Week Breakdown */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                        <Calendar className="text-purple-500" size={20} />
                        Weekly Progression
                      </h4>
                      <div className="space-y-3">
                        {quarter.weekBreakdown.map((week, wIdx) => {
                          const [wStart, wEnd] = week.weeks.includes('-') 
                            ? week.weeks.split('-').map(Number) 
                            : [Number(week.weeks), Number(week.weeks)];
                          const isCurrentWeek = isUserPhase && currentWeek >= wStart && currentWeek <= wEnd;
                          
                          return (
                            <div 
                              key={wIdx} 
                              className={`rounded-lg p-5 border-l-4 transition-all ${
                                isCurrentWeek 
                                  ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-md' 
                                  : 'border-purple-300 bg-white hover:shadow-sm'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="font-bold text-purple-900 mb-2 text-base">Weeks {week.weeks}</div>
                                  <div className="text-gray-700 leading-relaxed">{week.focus}</div>
                                </div>
                                {isCurrentWeek && (
                                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold ml-4 flex items-center gap-1">
                                    <Play size={14} />
                                    Current
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Skill Recurrence */}
                    {quarter.skillRecurrence && (
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300 shadow-md">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <RefreshCw className="text-green-500" size={20} />
                          Skill Recurrence Pattern
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{quarter.skillRecurrence}</p>
                      </div>
                    )}

                    {/* Activities */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                        <Sparkles className="text-yellow-500" size={20} />
                        Sample Activities
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {quarter.activities.map((activity, aIdx) => (
                          <div key={aIdx} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border-2 border-yellow-200 hover:shadow-md transition-all">
                            <p className="text-gray-800 text-sm leading-relaxed font-medium">{activity}</p>
                          </div>
                        ))}
                      </div>
                    </div>

{/* Enrichment Activities */}
                    {quarter.enrichment && (
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                          <Award className="text-purple-500" size={20} />
                          Enrichment & Extension
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {quarter.enrichment.map((activity, eIdx) => (
                            <div key={eIdx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-200 hover:shadow-md transition-all">
                              <p className="text-gray-800 text-sm leading-relaxed font-medium">{activity}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Parent Guidance */}
                    {quarter.parentGuidance && (
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-300 shadow-md">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Lightbulb className="text-blue-500" size={20} />
                          Parent Tips
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          <span className="text-blue-600 font-semibold">"</span>{quarter.parentGuidance}<span className="text-blue-600 font-semibold">"</span>
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Year-End Outcomes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Trophy className="text-yellow-500" size={28} />
            By the End of This Year
          </h2>
          <p className="text-gray-600 mb-6">Your child will be able to:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {phase.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-5 border-2 border-green-200 hover:shadow-md transition-all">
                <div className="bg-green-500 text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5 shadow-md">
                  ✓
                </div>
                <p className="text-gray-800 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
          {phase.milestones && (
            <div className="mt-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-6 border-2 border-green-300">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Award className="text-green-600" size={20} />
                Progress Milestones
              </h3>
              <p className="text-gray-800">{phase.milestones}</p>
            </div>
          )}
        </div>

        {/* Phase Navigation */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="text-purple-500" size={20} />
            Explore Other Phases
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {Object.entries(curriculumData).map(([ageKey, phaseData]) => {
              const isCurrentPhase = selectedAge === ageKey;
              const isActive = isPhaseActive(ageKey);
              
              return (
                <button
                  key={ageKey}
                  onClick={() => {
                    if (ageKey !== selectedAge) {
                      setIsTransitioning(true);
                      setExpandedQuarter(null);
                      setTimeout(() => {
                        setSelectedAge(ageKey);
                        window.scrollTo({ top: 0, behavior: 'instant' });
                        requestAnimationFrame(() => {
                          setIsTransitioning(false);
                        });
                      }, 300);
                    }
                  }}
                  disabled={isCurrentPhase}
                  className={`p-4 rounded-xl transition-all ${
                    isCurrentPhase
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg cursor-default'
                      : 'bg-white hover:shadow-lg hover:scale-105 text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                  } ${isActive ? 'ring-2 ring-green-400' : ''}`}
                >
                  <div className="text-3xl mb-2">
  <img src={phaseData.icon} alt={phaseData.title} className="w-12 h-12 object-contain mx-auto" />
</div>
                  <div className={`text-xs font-semibold ${isCurrentPhase ? 'text-white' : 'text-gray-600'}`}>
                    {phaseData.subtitle}
                  </div>
                  {isActive && !isCurrentPhase && (
                    <div className="mt-2 text-xs bg-green-100 text-green-700 rounded-full px-2 py-1 font-bold">
                      Active
                    </div>
                  )}
                  {isCurrentPhase && (
                    <div className="mt-2 text-xs bg-white/20 rounded-full px-2 py-1 font-bold">
                      Viewing
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setSelectedAge(null);
                setShowOverview(true);
                setIsTransitioning(false);
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 50);
              }, 300);
            }}
            className="flex-1 min-w-[200px] bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-purple-300 font-semibold flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            View All Phases
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex-1 min-w-[200px] bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all font-semibold flex items-center justify-center gap-2 transform hover:scale-105"
          >
            <Play size={20} />
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  };

  // Main Render
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
      <nav className="bg-white/90 backdrop-blur-md shadow-md p-4 sticky top-0 z-50 border-b border-purple-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-xl shadow-lg">
              <BookOpen className="text-white" size={28} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BrightReading
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/about')}
              className="text-purple-600 hover:bg-purple-50 p-2 rounded-lg transition-all"
              title="About"
            >
              <Info size={24} />
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="text-purple-600 hover:bg-purple-50 p-2 rounded-lg transition-all"
              title="Dashboard"
            >
              <Home size={24} />
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition-all"
              title="Profile"
            >
              <User size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div ref={mainContainerRef} className="max-w-6xl mx-auto px-4 py-8">
        <div className={`transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {showOverview && !selectedAge && <OverviewSection />}
          {!showOverview && selectedAge && <PhaseDetailView />}
          {selectedAge && showOverview && <PhaseDetailView />}
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
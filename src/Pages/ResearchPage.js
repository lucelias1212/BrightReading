import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Home, GraduationCap, Award, TrendingUp, Users, BookMarked, Lightbulb, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const ResearchPage = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const keyFindings = [
    {
      icon: '📚',
      title: 'Early Literacy Matters',
      stat: '90%',
      description: 'Children who struggle with reading by third grade are likely to continue struggling throughout school',
      source: 'National Assessment of Educational Progress (NAEP)'
    },
    {
      icon: '🏠',
      title: 'Home Environment Impact',
      stat: '3x',
      description: 'Children with rich home literacy experiences are 3 times more likely to become strong readers',
      source: 'Bus, van IJzendoorn & Pellegrini (1995)'
    },
    {
      icon: '🎯',
      title: 'Phonemic Awareness',
      stat: '88%',
      description: 'Phonemic awareness instruction improves reading outcomes for 88% of children',
      source: 'National Reading Panel (2000)'
    },
    {
      icon: '⏰',
      title: 'Critical Window',
      stat: 'Ages 1-5',
      description: 'The optimal window for developing foundational literacy skills and language',
      source: 'Whitehurst & Lonigan (1998)'
    },
    {
      icon: '💬',
      title: 'Conversational Turns',
      stat: '2x',
      description: 'Children with more conversational turns show double the language-related brain activity',
      source: 'Romeo et al. (2018)'
    },
    {
      icon: '🎮',
      title: 'Play-Based Learning',
      stat: '100%',
      description: 'Play enhances cognitive, social, and literacy development across all domains',
      source: 'Hirsh-Pasek et al. (2020)'
    }
  ];

  const toddlerStudies = [
    {
      title: 'Reading to Your 1- and 2-Year Old Boosts Vocabulary',
      source: 'University of Oslo, 2024',
      sample: '1,442 Norwegian children, ages 1-2',
      findings: 'More frequent shared reading correlates with larger receptive & expressive vocabularies. Increased screen time corresponds to smaller vocabularies among 2-year-olds.',
      implication: 'Reading from very early ages is beneficial for vocabulary development',
      relevance: 'Supports BrightReading Phase 1 (Ages 1-2) emphasis on daily shared reading and parent-child conversation over screen exposure'
    },
    {
      title: 'Reading with 1-2 Year Olds Impacts Academic Achievement',
      source: 'LSAC Longitudinal Study, Australia, 2022',
      sample: '3,547 infants & caregivers; outcomes measured in Grades 3 & 5',
      findings: 'Early frequent shared book reading (at 1-2 yrs) predicts better literacy, language, and numeracy test scores in later elementary school.',
      implication: 'Early reading has long-term payoff extending to elementary school',
      relevance: 'Validates BrightReading\' investment in ages 1-2 as foundation for later academic success'
    },
    {
      title: 'Statistical Learning by 8-Month-Old Infants',
      source: 'Saffran, Aslin & Newport (1996)',
      sample: '8-month-old infants exposed to artificial language streams',
      findings: 'Infants can extract patterns from speech through statistical learning, demonstrating early capacity for language structure recognition.',
      implication: 'Justifies early exposure to consistent routines and repeated word forms',
      relevance: 'Supports repetitive sound patterns and predictable routines in Phase 1 activity book'
    },
    {
      title: 'Early Phonological Predictors of Toddler Language',
      source: 'PubMed, 2019',
      sample: 'Longitudinal sample tested at 7, 11, and 18 months',
      findings: 'Phonetic inventory and syllable structure are predictive of expressive vocabulary and complexity at age 2. Children with richer speech sound repertoires early tend to have better language outcomes.',
      implication: 'Useful for early identification of language development patterns',
      relevance: 'Informs Phase 1-2 sound play activities and early phonological awareness games'
    },
    {
      title: 'Phonological Profiles of 2-Year-Olds with Delayed Language',
      source: 'ASHA Publications, 2003',
      sample: '2-year-olds screened for language delays',
      findings: 'Children with delayed language at 2 yrs show significantly reduced consonant inventory, more errors. Profiles at 2 years predict who will have ongoing language delays at 3 yrs.',
      implication: 'Phonological data at age 2 can help tailor interventions',
      relevance: 'Supports early sound awareness and articulation practice in Phase 1-2'
    },
    {
      title: 'Classroom-Based Phonological Awareness Program Effectiveness',
      source: 'PubMed, 2018 - "Cracking the Code"',
      sample: 'Children aged 3 yrs 8 mo to 5 yrs 4 mo',
      findings: 'Program improved phonological awareness, alphabet knowledge, non-word reading, spelling compared to control.',
      implication: 'PA + alphabet instruction can be effective in preschool before formal reading begins',
      relevance: 'Validates integrated phonological awareness and alphabet instruction in Phases 2-4'
    }
  ];

  const researchFoundations = [
    {
      id: 'nelp',
      title: 'National Early Literacy Panel (2008)',
      category: 'Meta-Analysis Foundation',
      color: 'from-blue-500 to-indigo-500',
      summary: 'Comprehensive meta-analysis identifying key predictors of later reading success',
      link: 'https://lincs.ed.gov/publications/pdf/NELPReport09.pdf',
      keyFindings: [
        'Alphabet knowledge is one of the strongest predictors of reading achievement',
        'Phonological awareness significantly predicts decoding ability',
        'Oral language skills (vocabulary, grammar) directly impact reading comprehension',
        'Print knowledge and concepts about books matter from the earliest ages',
        'Oral language at age 4-5 predicts reading comprehension in elementary school'
      ],
      applicationInBrightReading: [
        'Systematic alphabet introduction starting in Phase 2 with child\'s name',
        'Progressive phonological awareness from rhyming (Phase 1-2) to segmentation (Phase 4)',
        'Rich vocabulary building through dialogic reading and everyday conversations',
        'Explicit teaching of print concepts, directionality, and book handling',
        'Oral language prioritized equally with code-based skills across all phases'
      ]
    },
    {
      id: 'nrp',
      title: 'National Reading Panel (2000)',
      category: 'Landmark Reading Research',
      color: 'from-rose-500 to-pink-500',
      summary: 'Evidence-based assessment identifying five pillars of reading instruction',
      link: 'https://www1.nichd.nih.gov/publications/pubs/nrp/documents/report.pdf',
      keyFindings: [
        'Phonemic awareness instruction significantly improves reading and spelling',
        'Systematic phonics is more effective than unsystematic or no phonics',
        'Fluency instruction bridges decoding and comprehension',
        'Vocabulary instruction improves comprehension when taught both directly and indirectly',
        'Comprehension strategies (predicting, questioning, summarizing) are teachable'
      ],
      applicationInBrightReading: [
        'Phase 2-3: Systematic phonemic awareness progression (rhyme → onset-rime → segmentation)',
        'Phase 3-4: Systematic phonics with CVC patterns, word families, and decodable text',
        'Phase 4: Fluency practice through echo reading and repeated readings',
        'All Phases: Vocabulary through dialogic reading, labeling, and rich conversation',
        'Phase 3-4: Comprehension strategies (prediction, retelling, sequencing)'
      ]
    },
    {
      id: 'conversational',
      title: 'Conversational Turns & Language Development',
      category: 'Language Input Quality',
      color: 'from-purple-500 to-pink-500',
      summary: 'Research demonstrating that back-and-forth conversation matters more than word quantity',
      keyFindings: [
        'Conversational turns predict language processing and vocabulary by 24 months (Weisleder & Fernald, 2013)',
        'Conversational exposure activates Broca\'s area and predicts verbal skills (Romeo et al., 2018)',
        'Early language experience in year 2 predicts language and cognitive skills at age 10 (Gilkerson et al., 2018)',
        'Quality of conversation (responsive, contingent) matters more than quantity (Rowe, 2012)',
        'Child-directed speech improves real-time language processing efficiency'
      ],
      applicationInBrightReading: [
        'Dialogic reading prompts that encourage child responses throughout activity book',
        'Parent scripts model open-ended questions, not just labeling',
        'Turn-taking games and conversations embedded in every activity',
        'Emphasis on responsive parenting: follow child\'s lead, expand utterances',
        'Quality metrics prioritize conversational turns over passive word exposure'
      ],
      citations: [
        'Weisleder, A. & Fernald, A. (2013). Talking to children matters. PMC5510534',
        'Romeo, R.R., et al. (2018). Beyond the 30-Million-Word Gap. PMC5945324',
        'Gilkerson, J., et al. (2018). Language Experience in Year 2. PMC6192025',
        'Rowe, M. (2012). A longitudinal investigation of child-directed speech'
      ]
    },
    {
      id: 'phonemic',
      title: 'Phonemic Awareness Research',
      category: 'Core Foundational Skill',
      color: 'from-green-500 to-teal-500',
      summary: 'Multiple studies demonstrating the critical role of sound awareness in reading development',
      keyFindings: [
        'Children need to hear individual sounds before connecting them to letters (Adams, 1990)',
        'Phonological awareness develops progressively: word → syllable → onset-rime → phoneme (Anthony & Francis, 2005)',
        'Sound blending and segmentation are teachable skills (Blachman et al., 2000)',
        'Phonemic awareness training improves reading outcomes with lasting effects (Lonigan et al., 2000)',
        'Multi-sensory approaches enhance phonemic learning (Ehri et al., 2001)',
        'Early sound play predicts phonological sensitivity (Trainor et al., 2002)'
      ],
      applicationInBrightReading: [
        'Phase 1 (Ages 1-2): Sound awareness through environmental sounds, animal noises, rhythm',
        'Phase 2 (Ages 2-3): Rhyming games, syllable clapping, beginning sound identification',
        'Phase 3 (Ages 3-4): Onset-rime activities, sound isolation (beginning, ending sounds)',
        'Phase 4 (Ages 4-5): Full phonemic awareness with blending, segmentation, manipulation',
        'Multi-sensory activities throughout: clapping, jumping, tracing, moving to sounds'
      ],
      citations: [
        'Adams, M.J. (1990). Beginning to Read: Thinking and Learning About Print',
        'Anthony, J.L., & Francis, D.J. (2005). Development of phonological awareness',
        'Lonigan, C.J., et al. (2000). Development of phonological sensitivity',
        'Ehri, L.C., et al. (2001). Phonemic awareness instruction helps children learn to read'
      ]
    },
    {
      id: 'dialogic',
      title: 'Dialogic Reading & Interactive Book Sharing',
      category: 'Language & Vocabulary Development',
      color: 'from-amber-500 to-orange-500',
      summary: 'Research on interactive reading strategies that build language and comprehension',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4422048/',
      keyFindings: [
        'Dialogic reading significantly increases vocabulary and expressive language (Whitehurst & Lonigan, 1998)',
        'Interactive questioning during reading improves comprehension (Whitehurst et al., 1994)',
        'PEER sequence (Prompt, Evaluate, Expand, Repeat) effective for language growth',
        'Rich conversations during reading build oral language foundations (Dickinson & Tabors, 2001)',
        'Quality of interaction matters more than quantity of reading time (Bus et al., 1995)',
        'Shared reading from infancy predicts literacy outcomes (Bus & van IJzendoorn, 1995)'
      ],
      applicationInBrightReading: [
        'All phases: Parent prompts for asking open-ended questions during reading',
        'Teaching the PEER sequence explicitly in parent instructions',
        'Themed vocabulary weeks with contextual, repeated exposure',
        'Guided retelling and story structure discussions in Phase 3-4',
        'Prediction, inference, and connection questions modeled in every storytime activity'
      ],
      citations: [
        'Whitehurst, G.J., & Lonigan, C.J. (1998). Child development and emergent literacy',
        'Dickinson, D.K., & Tabors, P.O. (2001). Beginning Literacy with Language',
        'Bus, A.G., et al. (1995). Joint book reading makes for success in learning to read',
        'WWC Report (2007). Dialogic Reading Intervention Report'
      ]
    },
    {
      id: 'play',
      title: 'Play-Based Learning & Development',
      category: 'Pedagogical Approach',
      color: 'from-cyan-500 to-blue-500',
      summary: 'Evidence supporting learning through play for cognitive and literacy development',
      link: 'https://cms.learningthroughplay.com/media/wmtlmbe0/learning-through-play_web.pdf',
      keyFindings: [
        'Play enhances cognitive, social, and emotional development across domains (Hirsh-Pasek et al., 2020)',
        'Guided play balances child agency with adult support for optimal learning',
        'Playful learning more effective than direct instruction for preschoolers',
        'Multi-modal, hands-on activities enhance retention and transfer',
        'Play-based literacy activities build motivation and engagement'
      ],
      applicationInBrightReading: [
        'All games designed as play experiences, not drills or worksheets',
        'Parent-guided play: scaffolding without controlling the activity',
        'Multi-sensory activities: movement, touch, sound integrated throughout',
        'Child choice and agency embedded in activities (pick the letter, choose the story)',
        'Celebration and encouragement over correction and testing'
      ],
      citations: [
        'Hirsh-Pasek, K., et al. (2020). Learning through play: Educating the whole child',
        'Hirsh-Pasek, K., et al. (2015). Putting education in educational apps',
        'Weisberg, D.S., et al. (2013). Guided play: Principles and practices'
      ]
    },
    {
      id: 'alphabet',
      title: 'Alphabet Knowledge & Letter-Sound Connections',
      category: 'Print & Code-Based Skills',
      color: 'from-yellow-500 to-orange-500',
      summary: 'Evidence supporting systematic and engaging approaches to teaching letters',
      keyFindings: [
        'Letter-name knowledge facilitates letter-sound learning (Treiman & Broderick, 1998)',
        'Environmental print supports authentic letter recognition (Justice et al., 2006)',
        'Multi-modal learning enhances letter retention (Piasta & Wagner, 2010)',
        'Name recognition provides a meaningful entry point for letter learning',
        'Systematic alphabet instruction before kindergarten improves decoding (Piasta & Justice, 2012)',
        'Letter knowledge one of strongest predictors of reading success (NELP, 2008)'
      ],
      applicationInBrightReading: [
        'Phase 2: Start with child\'s name letters for personal connection and motivation',
        'Environmental print scavenger hunts (Letter Quest game)',
        'Multi-sensory activities: tracing, building, finding, creating letters',
        'Systematic introduction with spaced repetition across Phase 2-3',
        'Letter-sound correspondence introduced alongside letter names'
      ],
      citations: [
        'Treiman, R., & Broderick, V. (1998). What\'s in a name',
        'Justice, L.M., et al. (2006). Print-focused read-alouds',
        'Piasta, S.B., & Wagner, R.K. (2010). Learning letter names and sounds',
        'Piasta, S.B., & Justice, L.M. (2012). Impact of letter instruction'
      ]
    },
    {
      id: 'decoding',
      title: 'Decoding, Word Reading & Phonics',
      category: 'Reading Mechanics',
      color: 'from-red-500 to-rose-500',
      summary: 'Research on effective methods for teaching children to decode words',
      link: 'https://ies.ed.gov/ncee/wwc/docs/practiceguide/wwc_foundationalreading_070516.pdf',
      keyFindings: [
        'Systematic phonics instruction is more effective than incidental (Ehri, 2001)',
        'CVC patterns provide accessible entry points for beginning readers (Share et al., 1984)',
        'Word families facilitate pattern recognition and decoding by analogy (Goswami, 2002)',
        'High-frequency sight words need explicit teaching alongside phonics (Fry, 1999)',
        'Blending and segmentation skills predict decoding success',
        'Decodable texts support application and build confidence'
      ],
      applicationInBrightReading: [
        'Phase 3-4: Systematic CVC word introduction (Blend Builders game)',
        'Word family activities (-at, -an, -ig patterns) in Word Family House game',
        'Phase 4: High-frequency sight word integration (Sight Word Spotters)',
        'Decodable text recommendations for practice and confidence building',
        'Blending and segmentation practice before formal decoding begins'
      ],
      citations: [
        'Ehri, L.C. (2001, 2020). Systematic phonics instruction and phonemic awareness',
        'Share, D.L., et al. (1984). Sources of individual differences in reading',
        'Goswami, U. (2002). Phonology, reading development, and dyslexia',
        'IES/WWC (2016). Foundational Skills Practice Guide'
      ]
    },
    {
      id: 'comprehension',
      title: 'Comprehension & Story Understanding',
      category: 'Meaning Making',
      color: 'from-indigo-500 to-purple-500',
      summary: 'Evidence on developing understanding and thinking skills during reading',
      keyFindings: [
        'Story structure knowledge aids comprehension (Paris & Paris, 2003)',
        'Prediction and inference skills are teachable from preschool (Whitehurst & Lonigan, 1998)',
        'Retelling strengthens memory and narrative organization (Dickinson & Tabors, 2001)',
        'Fluency bridges decoding and comprehension (Kuhn & Stahl, 2003)',
        'Oral language comprehension predicts reading comprehension (Simple View of Reading)',
        'Interactive questioning during reading builds thinking skills'
      ],
      applicationInBrightReading: [
        'Phase 2-4: Teaching beginning, middle, end structure (Story Spinners)',
        'Prediction questions before and during reading in all storytime activities',
        'Guided retelling with picture support (Phase 3-4)',
        'Phase 4: Echo reading and repeated readings for fluency development',
        'Comprehension strategies: predicting, sequencing, making connections, inferring'
      ],
      citations: [
        'Paris, S.G., & Paris, A.H. (2003). Assessing narrative comprehension',
        'Kuhn, M.R., & Stahl, S.A. (2003). Fluency: A review of developmental',
        'Gough, P. & Tunmer, W. (1986). The Simple View of Reading',
        'Scarborough, H.S. (2001). The Reading Rope'
      ]
    },
    {
      id: 'scarborough',
      title: 'Scarborough\'s Reading Rope',
      category: 'Conceptual Framework',
      color: 'from-teal-500 to-cyan-500',
      summary: 'Integrated model showing how component skills interweave for skilled reading',
      link: 'https://www.thereadingleague.org/wp-content/uploads/2023/11/TRLC-Educators-and-Specialists-The-Reading-Rope-Key-Ideas-Behind-the-Metaphor.pdf',
      keyFindings: [
        'Skilled reading requires both word recognition AND language comprehension',
        'Word recognition strand: phonological awareness, decoding, sight word recognition',
        'Language comprehension strand: vocabulary, language structures, verbal reasoning, literacy knowledge',
        'Both strands must be taught explicitly and systematically',
        'Skills become increasingly automatic and strategic with practice'
      ],
      applicationInBrightReading: [
        'Dual focus: code-based skills (phonics, decoding) AND meaning-based skills (vocabulary, comprehension)',
        'Word recognition: systematic phonological awareness → alphabet → decoding progression',
        'Language comprehension: vocabulary building, dialogic reading, story structure from Phase 1',
        'Spiral curriculum ensures skill recurrence and integration across phases',
        'Both strands addressed in every activity, not isolated skill practice'
      ]
    }
  ];

  const developmentalProgression = [
    {
      age: 'Ages 1-2',
      icon: <img src="/assets/P1F.png" alt="Phase 1" className="w-16 h-16 object-contain" />,
      color: 'bg-pink-50 border-pink-300',
      focus: 'Foundations - Sound Awareness & Early Language',
      skills: [
        'Sound play: environmental noises, animal sounds, rhythm and music',
        'Object naming and labeling through everyday conversations',
        'Book basics: turning pages, pointing to pictures, enjoying stories',
        'Early motor skills: grasping, pointing, simple imitation games',
        'Conversational turn-taking through responsive parent interaction'
      ],
      research: 'Based on Kuhl (2010), Weisleder & Fernald (2013), Saffran et al. (1996), Bus et al. (1995), University of Oslo (2024)'
    },
    {
      age: 'Ages 2-3',
      icon: <img src="/assets/P2F.png" alt="Phase 2" className="w-16 h-16 object-contain" />,
      color: 'bg-green-50 border-green-300',
      focus: 'Explorers - Vocabulary & Pre-Reading Foundations',
      skills: [
        'Vocabulary expansion through rich conversation and labeling',
        'Phonological awareness introduction: rhyming play, syllable clapping',
        'Print awareness: recognizing letters, understanding directionality',
        'Listening comprehension through dialogic reading and story discussions',
        'Beginning sounds and letter-name introduction (starting with own name)'
      ],
      research: 'Based on Whitehurst & Lonigan (1998), NELP (2008), Dickinson & Tabors (2001), Gilkerson et al. (2018), LSAC Study (2022)'
    },
    {
      age: 'Ages 3-4',
      icon: <img src="/assets/P3F.png" alt="Phase 3" className="w-16 h-16 object-contain" />,
      color: 'bg-blue-50 border-blue-300',
      focus: 'Thinkers - Letters, Sounds & Comprehension',
      skills: [
        'Letter recognition and beginning sound identification across alphabet',
        'Advanced phonemic awareness: sound isolation, onset-rime, early blending',
        'Story comprehension: sequencing, predicting, retelling with detail',
        'Pre-writing and fine motor: tracing letters, drawing, early mark-making',
        'Vocabulary growth through categorization and descriptive language'
      ],
      research: 'Based on Anthony & Francis (2005), Goswami (2002), Bradley & Bryant (1983), "Cracking the Code" Study (2018)'
    },
    {
      age: 'Ages 4-5',
      icon: <img src="/assets/P4F.png" alt="Phase 4" className="w-16 h-16 object-contain" />,
      color: 'bg-purple-50 border-purple-300',
      focus: 'Readers - Reading Fluency & Independence',
      skills: [
        'Phonics application: decoding CVC words, word families, simple sentences',
        'Sight word recognition: high-frequency words for fluency',
        'Reading fluency: echo reading, repeated reading, expression',
        'Writing: constructing sentences, early spelling, creative composition',
        'Comprehension strategies: predicting, inferring, making connections'
      ],
      research: 'Based on Ehri (2005), Blachman et al. (2000), NRP (2000), Share et al. (1984), IES/WWC (2016)'
    }
  ];

  const practitionerResources = [
    {
      title: 'Reading Rockets',
      description: 'Practitioner resources summarizing phonological awareness, shared reading, vocabulary strategies',
      link: 'https://www.readingrockets.org/',
      useCase: 'Activity scripts, parent handouts, classroom strategy library'
    },
    {
      title: 'Zero to Three',
      description: 'Early literacy & language resources (practical tips 0–3 years)',
      link: 'https://www.zerotothree.org/resource/what-we-know-about-early-literacy-and-language-development/',
      useCase: 'Parent-friendly activity guides for babies and toddlers'
    },
    {
      title: 'Every Child Ready to Read (ALA)',
      description: 'Parent-facing toolkit built from emergent literacy research',
      link: 'https://everychildreadytoread.org/',
      useCase: 'Workshop resources, parent tips, activity adaptations'
    },
    {
      title: 'Reach Out and Read',
      description: 'Clinic-based model with implementation guidance for early book exposure',
      link: 'https://reachoutandread.org/why-we-matter/the-evidence/',
      useCase: 'Evidence for pediatric integration, parent reach strategies'
    },
    {
      title: 'Put Reading First (NRP Summary)',
      description: 'Short, teacher-focused digest of NRP recommendations',
      link: 'https://lincs.ed.gov/publications/pdf/PRFbooklet.pdf',
      useCase: 'Parent summaries, quick reference guides for instructional strategies'
    }
  ];

  const annotatedBibliography = [
    {
      category: "Language & Early Brain Development",
      sources: [
        {
          authors: "Kuhl, Patricia",
          title: "Brain Mechanisms in Early Language Acquisition",
          publication: "Neuron, 2010",
          annotation: "Shows that infants' brains are especially sensitive to speech sounds between 6–24 months. This \"sensitive period\" supports early listening, imitation, and sound-play activities in Phase 1."
        },
        {
          authors: "Weisleder, Adriana, and Anne Fernald",
          title: "Talking to Children Matters: Early Language Experience Strengthens Processing and Builds Vocabulary",
          publication: "Psychological Science, 2013",
          link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5510534/",
          annotation: "Found that babies who hear more child-directed speech process language faster and develop larger vocabularies by 24 months. Demonstrates that talk frequency and quality drive growth, not passive exposure."
        },
        {
          authors: "Romeo, Rachel R., et al.",
          title: "Beyond the 30-Million-Word Gap: Children's Conversational Exposure Is Associated with Language-Related Brain Function",
          publication: "Psychological Science, 2018",
          link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5945324/",
          annotation: "Links conversational turns (not just word counts) to neural activation in Broca's area. Children's language exposure through back-and-forth conversation predicts verbal skills and brain function."
        },
        {
          authors: "Gilkerson, Jill, et al.",
          title: "Language Experience in the Second Year of Life Predicts Children's Language and Academic Skills at Age 10",
          publication: "Pediatrics, 2018",
          link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6192025/",
          annotation: "LENA-based 10-year longitudinal study showing that early language experience—especially conversational turns in year 2—predicts later cognitive and language outcomes. Supports early routine embedding in BrightReading."
        },
        {
          authors: "Rowe, Meredith",
          title: "A Longitudinal Investigation of Child-Directed Speech",
          publication: "Child Development, 2012",
          annotation: "Demonstrated that both the amount and quality of conversation from parents predict later language and reading success. Responsive, contingent talk matters most."
        },
        {
          authors: "Hart, Betty, and Todd Risley",
          title: "Meaningful Differences in the Everyday Experience of Young American Children",
          publication: "Brookes Publishing, 1995",
          annotation: "Classic research showing how daily talk quantity affects children's vocabulary by age 3 (the \"30-million-word gap\"). Foundation for understanding language input disparities."
        },
        {
          authors: "Shonkoff, Jack P., and Deborah Phillips, eds.",
          title: "From Neurons to Neighborhoods: The Science of Early Childhood Development",
          publication: "National Academies Press, 2000",
          annotation: "Summarizes how everyday interactions literally shape brain wiring in the first three years. Comprehensive synthesis of early development research."
        }
      ]
    },
    {
      category: "Book Reading & Story Exposure",
      sources: [
        {
          authors: "University of Oslo Research Team",
          title: "Reading to 1- and 2-Year-Olds Boosts Vocabulary Development",
          publication: "Longitudinal Study, 2024",
          annotation: "Study of 1,442 Norwegian children ages 1-2 showing more frequent shared reading correlates with larger receptive and expressive vocabularies. Increased screen time corresponds to smaller vocabularies. Validates early reading investment."
        },
        {
          authors: "LSAC Research Team",
          title: "Reading with 1-2 Year Olds Impacts Academic Achievement",
          publication: "Australian Longitudinal Study, 2022",
          annotation: "3,547 infants followed to Grades 3 & 5. Early frequent shared book reading (ages 1-2) predicts better literacy, language, and numeracy test scores in elementary school. Long-term validation of early intervention."
        },
        {
          authors: "Bus, Adriana G., and Marinus H. van IJzendoorn",
          title: "Mother–Child Bookreading in Early Childhood: A Meta-Analysis",
          publication: "Review of Educational Research, 1995",
          annotation: "Meta-analysis finding that shared book reading consistently improves vocabulary and comprehension—even before children can speak. Foundational evidence for read-aloud practices."
        },
        {
          authors: "Mol, Saskia E., and Adriana G. Bus",
          title: "To Read or Not to Read: A Meta-Analysis of Print Exposure",
          publication: "Psychological Bulletin, 2011",
          annotation: "Large meta-analysis proving that early print exposure builds vocabulary, grammar, and school readiness across diverse populations."
        },
        {
          authors: "Sénéchal, Monique, and Jo-Anne LeFevre",
          title: "Continuity of Literacy Development from Preschool to School",
          publication: "Child Development, 2014",
          annotation: "Showed that early storybook exposure predicts later reading fluency. Supports consistent parent-led reading from age 1 onward."
        },
        {
          authors: "Whitehurst, Grover J., et al.",
          title: "Reading Aloud in the Home and School Context",
          publication: "Journal of Educational Psychology, 1999",
          annotation: "Found that dialogic reading—asking questions while reading—boosts children's language and reasoning skills significantly more than passive reading."
        }
      ]
    },
    {
      category: "Phonological Awareness & Sound Skills",
      sources: [
        {
          authors: "Saffran, Jenny R., Richard N. Aslin, and Elissa L. Newport",
          title: "Statistical Learning by 8-Month-Old Infants",
          publication: "Science, 1996",
          link: "https://www.science.org/doi/10.1126/science.274.5294.1926",
          annotation: "Foundational work showing infants can extract patterns from speech streams through statistical learning. Justifies early exposure to consistent routines and repeated word forms in Phase 1."
        },
        {
          authors: "Anthony, Jason L., and David J. Francis",
          title: "Development of Phonological Awareness",
          publication: "Current Directions in Psychological Science, 2005",
          annotation: "Explains developmental progression: word awareness → syllable → onset-rime → phoneme. Children learn to notice and manipulate sounds systematically, forming basis for later decoding."
        },
        {
          authors: "Bradley, Lynette, and Peter E. Bryant",
          title: "Rhyme and Reason in Reading and Spelling",
          publication: "Psychology Press, 1983",
          annotation: "Early landmark evidence that rhyming games and sound matching in preschool improve later reading readiness and spelling ability."
        },
        {
          authors: "Lonigan, Christopher J., et al.",
          title: "Development of Phonological Sensitivity in 2- to 5-Year-Old Children",
          publication: "Journal of Educational Psychology, 2000",
          annotation: "Found that even toddlers benefit from simple sound-play activities like rhyming and clapping syllables. Early phonological sensitivity predicts reading success."
        },
        {
          authors: "Trainor, Laurel J., et al.",
          title: "Effects of Rhythm on Speech Perception in Infancy",
          publication: "Developmental Science, 2002",
          annotation: "Rhythm supports phonological awareness by enhancing infants' ability to perceive speech patterns. Supports musical and rhythmic activities in early phases."
        },
        {
          authors: "Gillon, Gail T.",
          title: "Phonological Awareness: From Research to Practice",
          publication: "Guilford Press, 2018",
          annotation: "Comprehensive guide detailing evidence-based phonemic awareness strategies specifically designed for preschoolers."
        },
        {
          authors: "ASHA Research Team",
          title: "Phonological Profiles of 2-Year-Olds with Delayed Language",
          publication: "American Speech-Language-Hearing Association, 2003",
          annotation: "Children with delayed language at age 2 show reduced consonant inventory. Profiles at age 2 predict ongoing delays at age 3, supporting early phonological intervention."
        },
        {
          authors: "Research Team",
          title: "Classroom-Based Phonological Awareness Program Effectiveness (Cracking the Code)",
          publication: "PubMed, 2018",
          annotation: "Children ages 3-5 showed improved phonological awareness, alphabet knowledge, non-word reading, and spelling. Validates PA + alphabet instruction in preschool before formal reading."
        }
      ]
    },
    {
      category: "Vocabulary & Oral Language Growth",
      sources: [
        {
          authors: "Beck, Isabel L., Margaret McKeown, and Linda Kucan",
          title: "Bringing Words to Life: Robust Vocabulary Instruction",
          publication: "Guilford Press, 2013",
          annotation: "Outlines practical vocabulary-building through repeated exposure, contextual learning, and \"child-friendly definitions.\" Gold standard for vocabulary instruction."
        },
        {
          authors: "Dickinson, David K., and Patton O. Tabors",
          title: "Beginning Literacy with Language: Young Children Learning at Home and School",
          publication: "Brookes Publishing, 2001",
          annotation: "Long-term study showing that rich early conversations at home predict reading comprehension in elementary school. Quality of language input matters tremendously."
        },
        {
          authors: "Hoff, Erika",
          title: "The Specificity of Environmental Influence: Socioeconomic Status Affects Early Vocabulary via Maternal Speech",
          publication: "Child Development, 2003",
          annotation: "Finds that the complexity and richness of parental speech matters more than socioeconomic background alone for vocabulary growth."
        },
        {
          authors: "Pan, Barbara A., et al.",
          title: "Maternal Talk and Child Vocabulary Growth: A Longitudinal Study",
          publication: "Child Development, 2005",
          annotation: "Shows that responsive, conversational turn-taking (not just talking AT children) predicts faster word growth in toddlers."
        }
      ]
    },
    {
      category: "Play, Cognitive & Social Foundations",
      sources: [
        {
          authors: "Hirsh-Pasek, Kathy, et al.",
          title: "Learning Through Play: A Review of the Evidence",
          publication: "LEGO Foundation White Paper, 2020",
          link: "https://cms.learningthroughplay.com/media/wmtlmbe0/learning-through-play_web.pdf",
          annotation: "Comprehensive synthesis supporting play-based learning and multimodal activities. Play enhances cognitive, social, emotional, and literacy development across all domains."
        },
        {
          authors: "Hirsh-Pasek, Kathy, et al.",
          title: "Putting Education in 'Educational' Apps: Activities from the Science of Learning",
          publication: "Psychological Science in the Public Interest, 2015",
          annotation: "Analyzed hundreds of apps; those encouraging parent-child interaction and real conversation are most effective. Passive screen time doesn't help literacy development."
        },
        {
          authors: "Tomasello, Michael",
          title: "Constructing a Language: A Usage-Based Theory of Language Acquisition",
          publication: "Harvard University Press, 2003",
          annotation: "Explains how social interaction and shared attention—not drills—drive authentic language learning. Children learn through meaningful communication."
        },
        {
          authors: "Nelson, Katherine",
          title: "Narratives from the Crib",
          publication: "Harvard University Press, 1989",
          annotation: "Early demonstration that toddlers create narrative structures long before formal reading. Supports BrightReading' storytelling and narrative focus."
        },
        {
          authors: "Bronfenbrenner, Urie",
          title: "The Ecology of Human Development: Experiments by Nature and Design",
          publication: "Harvard University Press, 1979",
          annotation: "Shows how a child's environment—home relationships, daily routines, cultural context—affects every domain of learning and development."
        },
        {
          authors: "Meltzoff, Andrew N., and M. Keith Moore",
          title: "Imitation of Facial and Manual Gestures by Human Neonates",
          publication: "Science, 1977",
          annotation: "Early imitation builds neural pathways essential for social cognition and learning. Supports imitative play in Phase 1."
        },
        {
          authors: "Vygotsky, Lev S.",
          title: "Mind in Society: The Development of Higher Psychological Processes",
          publication: "Harvard University Press, 1978",
          annotation: "The Zone of Proximal Development emphasizes learning through guided interaction. Foundation for scaffolded parent-child activities."
        }
      ]
    },
    {
      category: "Early Literacy & Reading Readiness",
      sources: [
        {
          authors: "National Early Literacy Panel",
          title: "Developing Early Literacy: Report of the National Early Literacy Panel",
          publication: "National Institute for Literacy, 2008",
          link: "https://lincs.ed.gov/publications/pdf/NELPReport09.pdf",
          annotation: "Landmark meta-analysis identifying the strongest early predictors of reading success: alphabet knowledge, phonological awareness, rapid naming, writing, oral language, and print concepts. Core evidence base for Phases 1-3."
        },
        {
          authors: "National Reading Panel",
          title: "Teaching Children to Read: An Evidence-Based Assessment",
          publication: "National Institute of Child Health and Human Development, 2000",
          link: "https://www1.nichd.nih.gov/publications/pubs/nrp/documents/report.pdf",
          annotation: "Landmark report identifying five pillars: phonemic awareness, systematic phonics, fluency, vocabulary, and comprehension. Foundation for structuring Phase 3-4 activities sequences."
        },
        {
          authors: "Adams, Marilyn Jager",
          title: "Beginning to Read: Thinking and Learning about Print",
          publication: "MIT Press, 1990",
          annotation: "Comprehensive research synthesis showing that phonemic awareness, print exposure, and vocabulary together predict reading success. Seminal work in reading science."
        },
        {
          authors: "Snow, Catherine E., and Susan B. Neuman",
          title: "Children's Early Literacy Development: Evidence-Based Practices",
          publication: "Guilford Press, 2007",
          annotation: "Recommends parent-child shared reading and sound awareness as the top pre-K interventions based on research evidence."
        },
        {
          authors: "Snow, Catherine E., M. Susan Burns, and Peg Griffin, eds.",
          title: "Preventing Reading Difficulties in Young Children",
          publication: "National Academies Press, 1998",
          annotation: "Classic report identifying early intervention—before age 5—as key to preventing future reading struggles. Foundational policy document."
        },
        {
          authors: "Whitehurst, Grover J., and Christopher J. Lonigan",
          title: "Emergent Literacy: Development from Prereaders to Readers",
          publication: "Handbook of Early Literacy Research, 1998",
          annotation: "Foundational emergent literacy theory outlining development of literacy skills before formal reading instruction. Framework for understanding preschool literacy."
        },
        {
          authors: "Institute of Education Sciences / What Works Clearinghouse",
          title: "Foundational Skills to Support Reading for Understanding in Kindergarten Through 3rd Grade",
          publication: "IES Practice Guide, 2016",
          link: "https://ies.ed.gov/ncee/wwc/docs/practiceguide/wwc_foundationalreading_070516.pdf",
          annotation: "Actionable classroom recommendations for phonics scope, practice lengths, systematic instruction. Maps directly to 10-20 minute daily activity rhythm."
        }
      ]
    },
    {
      category: "Alphabet, Letters & Print Concepts",
      sources: [
        {
          authors: "Treiman, Rebecca, and Vicki Broderick",
          title: "What's in a Name: Children's Knowledge about Letter Names and Sounds",
          publication: "Cognition, 1998",
          annotation: "Letter-name knowledge facilitates letter-sound learning. Name recognition provides meaningful entry point for alphabet instruction."
        },
        {
          authors: "Justice, Laura M., et al.",
          title: "Print-Focused Read-Alouds in Preschool Classrooms",
          publication: "Language, Speech, and Hearing Services in Schools, 2006",
          annotation: "Environmental print and print-focused reading supports authentic letter recognition and understanding that print carries meaning."
        },
        {
          authors: "Piasta, Shayne B., and Richard K. Wagner",
          title: "Learning Letter Names and Sounds: Effects of Instruction, Letter Type, and Phonological Processing Skill",
          publication: "Journal of Experimental Child Psychology, 2010",
          annotation: "Multi-modal learning (visual, auditory, kinesthetic) enhances letter retention significantly more than single-modality instruction."
        },
        {
          authors: "Piasta, Shayne B., and Laura M. Justice",
          title: "The Impact of Letter Instruction for Preschool Children at Risk",
          publication: "Early Childhood Research Quarterly, 2012",
          annotation: "Demonstrated that playful, systematic letter instruction before kindergarten improves later decoding ability, especially for at-risk children."
        },
        {
          authors: "Ehri, Linnea C.",
          title: "Learning to Read Words: Theory, Findings, and Issues",
          publication: "Scientific Studies of Reading, 2005",
          annotation: "Explains how children gradually form visual-phonological connections to recognize words automatically. Foundational theory for word reading development."
        }
      ]
    },
    {
      category: "Decoding, Phonics & Word Reading",
      sources: [
        {
          authors: "Ehri, Linnea C., et al.",
          title: "Phonemic Awareness Instruction Helps Children Learn to Read: Evidence from the National Reading Panel's Meta-Analysis",
          publication: "Reading Research Quarterly, 2001",
          link: "https://ila.onlinelibrary.wiley.com/doi/10.1598/RRQ.36.3.2",
          annotation: "Syntheses showing phonemic awareness instruction (especially when linked to letters) significantly improves reading. Supports early blending introduction in Phase 2-3."
        },
        {
          authors: "Share, David L., et al.",
          title: "Sources of Individual Differences in Reading Acquisition",
          publication: "Journal of Educational Psychology, 1984",
          annotation: "CVC patterns provide accessible entry points for beginning readers. Systematic introduction of simple patterns supports early decoding success."
        },
        {
          authors: "Goswami, Usha",
          title: "Phonology, Reading Development, and Dyslexia: A Cross-Linguistic Perspective",
          publication: "Annals of Dyslexia, 2002",
          annotation: "Word families facilitate pattern recognition and decoding by analogy. Once children know 'cat,' they can decode 'bat, mat, sat' through pattern."
        },
        {
          authors: "Fry, Edward B.",
          title: "The Most Common Phonograms",
          publication: "The Reading Teacher, 1999",
          annotation: "High-frequency sight words need explicit teaching alongside phonics. Automatic recognition of common words supports fluency."
        },
        {
          authors: "Blachman, Benita A., et al.",
          title: "Effects of Intensive Reading Intervention for Eight Graders",
          publication: "Journal of Educational Psychology, 2000",
          annotation: "Sound blending and segmentation skills are teachable and predict decoding success when taught systematically."
        }
      ]
    },
    {
      category: "Comprehension, Fluency & Advanced Skills",
      sources: [
        {
          authors: "Scarborough, Hollis S.",
          title: "Connecting Early Language and Literacy to Later Reading (Dis)abilities: Evidence, Theory, and Practice",
          publication: "In Neuman & Dickinson (Eds.), Handbook of Early Literacy Research, 2001",
          link: "https://www.thereadingleague.org/wp-content/uploads/2023/11/TRLC-Educators-and-Specialists-The-Reading-Rope-Key-Ideas-Behind-the-Metaphor.pdf",
          annotation: "The Reading Rope conceptual model maps component skills (phonology, vocabulary, language comprehension, decoding) that must interweave for skilled reading. Directly informs spiral curriculum and skill recurrence."
        },
        {
          authors: "Gough, Philip B., and William E. Tunmer",
          title: "Decoding, Reading, and Reading Disability",
          publication: "Remedial and Special Education, 1986",
          annotation: "The Simple View of Reading: Reading Comprehension = Decoding × Linguistic Comprehension. Both components must be taught explicitly; weakness in either impairs reading."
        },
        {
          authors: "Paris, Scott G., and Alison H. Paris",
          title: "Assessing Narrative Comprehension in Young Children",
          publication: "Reading Research Quarterly, 2003",
          annotation: "Story structure knowledge (beginning, middle, end; characters, problem, solution) aids comprehension and can be taught from preschool."
        },
        {
          authors: "Kuhn, Melanie R., and Steven A. Stahl",
          title: "Fluency: A Review of Developmental and Remedial Practices",
          publication: "Journal of Educational Psychology, 2003",
          annotation: "Fluency (accurate, automatic, expressive reading) bridges decoding and comprehension. Repeated reading and echo reading build fluency."
        },
        {
          authors: "Justice, Laura M., and Helen K. Ezell",
          title: "Use of Storybook Reading to Increase Print Awareness in At-Risk Children",
          publication: "American Journal of Speech-Language Pathology, 2002",
          annotation: "Interactive questioning during reading builds thinking skills. Print-referencing techniques enhance print awareness and comprehension."
        }
      ]
    },
    {
      category: "Dialogic Reading & Interactive Strategies",
      sources: [
        {
          authors: "Whitehurst, Grover J., et al.",
          title: "Outcomes of an Emergent Literacy Intervention in Head Start",
          publication: "Journal of Educational Psychology, 1994",
          annotation: "Dialogic reading using PEER sequence (Prompt, Evaluate, Expand, Repeat) significantly improves language and early literacy outcomes."
        },
        {
          authors: "What Works Clearinghouse",
          title: "Dialogic Reading Intervention Report",
          publication: "Institute of Education Sciences, 2007",
          link: "https://ies.ed.gov/ncee/wwc/Docs/InterventionReports/WWC_Dialogic_Reading_020807.pdf",
          annotation: "Evidence review showing dialogic reading has positive effects on oral language and potentially positive effects on print knowledge. Ready prompts for caregivers."
        },
        {
          authors: "Mol, Saskia E., Adriana G. Bus, and Maria T. de Jong",
          title: "Interactive Book Reading in Early Education: A Tool to Stimulate Print Knowledge",
          publication: "Review of Educational Research, 2009",
          annotation: "Interactive reading techniques (questioning, discussing, extending) more effective than passive reading for building both language and print knowledge."
        }
      ]
    },
    {
      category: "Implementation & Practitioner Resources",
      sources: [
        {
          authors: "Reading Rockets Team",
          title: "Early Literacy Guides and Classroom Strategies",
          publication: "Reading Rockets / WETA, Ongoing",
          link: "https://www.readingrockets.org/",
          annotation: "Practitioner resources summarizing phonological awareness, shared reading, vocabulary strategies. Classroom Strategy Library provides ready-made activity scripts adaptable to home settings."
        },
        {
          authors: "Zero to Three",
          title: "Early Literacy & Language Resources (Practical Tips 0-3 Years)",
          publication: "Zero to Three National Center, Ongoing",
          link: "https://www.zerotothree.org/",
          annotation: "Short, parent-friendly activity guides for babies and toddlers. Directly usable as micro-activities in Phase 1-2."
        },
        {
          authors: "American Library Association / Public Library Association",
          title: "Every Child Ready to Read Toolkit",
          publication: "ALA, 2nd Edition",
          link: "https://everychildreadytoread.org/",
          annotation: "Parent-facing toolkit and workshop resources built from emergent literacy research. Perfect for parent tips, workshop materials, and activity adaptation."
        },
        {
          authors: "Reach Out and Read National Center",
          title: "Program Evidence & Implementation Materials",
          publication: "Reach Out and Read, 2023",
          link: "https://reachoutandread.org/why-we-matter/the-evidence/",
          annotation: "Clinic-based model with strong implementation guidance for embedding books into routine care. Recent studies show measurable language gains. Useful for healthcare partnership guidance."
        },
        {
          authors: "National Institute for Literacy",
          title: "Put Reading First: The Research Building Blocks for Teaching Children to Read",
          publication: "LINCS, 2001",
          link: "https://lincs.ed.gov/publications/pdf/PRFbooklet.pdf",
          annotation: "Short, parent-friendly digest of National Reading Panel recommendations. Ideal for parent summaries and quick reference guides."
        },
        {
          authors: "American Academy of Pediatrics",
          title: "Literacy Promotion: An Essential Component of Primary Care Pediatric Practice",
          publication: "Pediatrics, 2014 & 2024 updates",
          link: "https://publications.aap.org/pediatrics/article/154/6/e2024069090/199467/",
          annotation: "Policy and technical report recommending reading aloud from infancy. Backs Reach Out and Read model. Useful for healthcare partnership and parent education."
        },
        {
          authors: "International Literacy Association",
          title: "Phonological Awareness and Early Childhood Literacy Development Position Paper",
          publication: "ILA, 2018",
          link: "https://www.literacyworldwide.org/",
          annotation: "Policy-to-practice synthesis summarizing how to teach phonological awareness developmentally. Useful for phase-by-phase scope and sequence."
        }
      ]
    },
    {
      category: "Bilingual & Socio-Cultural Influences",
      sources: [
        {
          authors: "Bialystok, Ellen",
          title: "Bilingualism in Development: Language, Literacy, and Cognition",
          publication: "Cambridge University Press, 2001",
          annotation: "Shows that bilingual children often have stronger metalinguistic awareness—beneficial for early literacy. Supports multilingual approaches."
        },
        {
          authors: "Tamis-LeMonda, Catherine S., et al.",
          title: "Maternal Responsiveness and Children's Achievement of Language Milestones",
          publication: "Child Development, 2001",
          annotation: "Indicates that responsive parenting, across cultures and languages, improves communication and literacy outcomes universally."
        },
        {
          authors: "Hammer, Carol S., et al.",
          title: "Language and Literacy Development of Dual Language Learners Growing Up in the United States",
          publication: "Child Development, 2014",
          annotation: "Suggests early exposure to both home and community languages strengthens reading later. Supports culturally responsive literacy instruction."
        }
      ]
    },
    {
      category: "Digital Learning & Parent Mediation",
      sources: [
        {
          authors: "Neumann, Michelle M.",
          title: "Young Children and Screen Media: Examining Digital Literacy and Learning Opportunities",
          publication: "Computers & Education, 2020",
          annotation: "Found that screen time alone doesn't help literacy, but co-viewing with discussion can build letter knowledge. Parent mediation is critical."
        },
        {
          authors: "Vaala, Sarah, et al.",
          title: "Co-Viewing, Co-Playing, Co-Learning: Family Experiences with Media and Technology",
          publication: "Joan Ganz Cooney Center Report, 2015",
          annotation: "Promotes active parental participation during digital play—exactly how BrightReading uses app prompts to facilitate parent-child interaction rather than passive screen time."
        }
      ]
    }
  ];

  return (
<div className={`min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50 transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>      <nav className="bg-white/80 backdrop-blur-sm shadow-sm p-4 sticky top-0 z-10">
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
            <GraduationCap className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">The Science Behind BrightReading</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our activity book is built on decades of peer-reviewed research in early literacy development. 
            Here's the evidence supporting every activity your child does.
          </p>
        </div>

        {/* Key Findings Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research at a Glance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFindings.map((finding, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">{finding.icon}</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{finding.stat}</div>
                <h3 className="font-bold text-gray-900 mb-3">{finding.title}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">{finding.description}</p>
                <p className="text-xs text-gray-500 italic">{finding.source}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Toddler Research */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-4xl">👶</span>
            Recent Research: Ages 1-2 & Toddlers
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Latest findings demonstrating the critical importance of early literacy exposure from infancy
          </p>
          <div className="space-y-6">
            {toddlerStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-500 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-sm text-purple-600 font-semibold mb-3">{study.source}</p>
                    <div className="space-y-2 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Sample:</strong> {study.sample}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Findings:</strong> {study.findings}</p>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-400">
                        <p className="text-sm text-gray-700"><strong>💡 Implication:</strong> {study.implication}</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-400">
                        <p className="text-sm text-gray-700"><strong>🎯 In BrightReading:</strong> {study.relevance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developmental Progression */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Age-Appropriate Learning Progression</h2>
          <div className="space-y-6">
            {developmentalProgression.map((stage, idx) => (
              <div key={idx} className={`${stage.color} border-2 rounded-2xl p-8 hover:shadow-lg transition`}>
<div className="flex items-center gap-4 mb-6">
                  <div>{stage.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{stage.age}</h3>
                    <p className="text-lg text-purple-600 font-semibold">{stage.focus}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {stage.skills.map((skill, sidx) => (
                    <div key={sidx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 font-bold">✓</span>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-sm text-gray-600">
                    <strong>Research Foundation:</strong> {stage.research}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Research Sections */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Deep Dive: Research Foundations</h2>
          <div className="space-y-4">
            {researchFoundations.map((research) => (
              <div key={research.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <button
                  onClick={() => toggleSection(research.id)}
                  className={`w-full bg-gradient-to-r ${research.color} p-6 text-left hover:opacity-90 transition`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-white/80 text-sm font-semibold mb-1">{research.category}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{research.title}</h3>
                      <p className="text-white/90 text-sm">{research.summary}</p>
                    </div>
                    <div className="text-white ml-4">
                      {expandedSection === research.id ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
                    </div>
                  </div>
                </button>

                {expandedSection === research.id && (
                  <div className="p-8">
                    {research.link && (
                      <a 
                        href={research.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold mb-6 hover:bg-blue-100 transition"
                      >
                        <ExternalLink size={18} />
                        View Full Research Document
                      </a>
                    )}

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Lightbulb className="text-yellow-500" size={24} />
                          Key Research Findings
                        </h4>
                        <ul className="space-y-3">
                          {research.keyFindings.map((finding, idx) => (
                            <li key={idx} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                              <span className="text-blue-500 mt-1 font-bold">•</span>
                              <span>{finding}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Award className="text-green-500" size={24} />
                          How BrightReading Applies This Research
                        </h4>
                        <ul className="space-y-3">
                          {research.applicationInBrightReading.map((application, idx) => (
                            <li key={idx} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                              <span className="text-green-500 mt-1 font-bold">✓</span>
                              <span>{application}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {research.citations && (
                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <BookMarked className="text-purple-500" size={20} />
                          Key Citations
                        </h4>
                        <div className="bg-gray-50 rounded-xl p-4">
                          {research.citations.map((citation, idx) => (
                            <p key={idx} className="text-sm text-gray-600 mb-2 last:mb-0">
                              {citation}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Practitioner Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center flex items-center justify-center gap-3">
            <span className="text-3xl">🛠️</span>
            Practitioner & Implementation Resources
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Evidence-based implementation guides and ready-to-use resources that inform BrightReading activities
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {practitionerResources.map((resource, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-purple-900"><strong>Used For:</strong> {resource.useCase}</p>
                </div>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition"
                >
                  <ExternalLink size={16} />
                  Visit Resource
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Annotated Bibliography */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center flex items-center justify-center gap-3">
            <BookMarked className="text-purple-600" size={36} />
            Complete Annotated Bibliography
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive bibliography of peer-reviewed studies informing every aspect of BrightReading activity book design
          </p>
          <div className="space-y-8">
            {annotatedBibliography.map((section, sectionIdx) => (
              <div key={sectionIdx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-200 pb-3">{section.category}</h3>
                <div className="space-y-6">
                  {section.sources.map((source, srcIdx) => (
                    <div key={srcIdx} className="pb-6 border-b border-gray-200 last:pb-0 last:border-b-0">
                      <div className="mb-3">
                        <p className="text-sm text-purple-600 font-semibold">{source.authors}</p>
                        <p className="text-lg font-bold text-gray-900">{source.title}</p>
                        <p className="text-sm text-gray-600 italic mb-2">{source.publication}</p>
                        {source.link && (
                          <a 
                            href={source.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-semibold transition"
                          >
                            <ExternalLink size={12} />
                            Access Study
                          </a>
                        )}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{source.annotation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Research Matters */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Research-Based Learning Matters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proven Effectiveness</h3>
              <p className="text-gray-600 text-sm">
                Every activity is backed by studies showing measurable improvements in reading outcomes across thousands of children
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tested with Thousands</h3>
              <p className="text-gray-600 text-sm">
                Research involving tens of thousands of children across diverse populations validates these approaches universally
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Consensus</h3>
              <p className="text-gray-600 text-sm">
                Methods recommended by leading literacy researchers, professional organizations, and national panels
              </p>
            </div>
          </div>
        </div>

        {/* Research Summary Stats */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-16 border-2 border-indigo-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Research Foundation by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-sm text-gray-700 font-semibold">Peer-Reviewed Studies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-sm text-gray-700 font-semibold">Years of Research</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100K+</div>
              <p className="text-sm text-gray-700 font-semibold">Children Studied</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">10+</div>
              <p className="text-sm text-gray-700 font-semibold">Meta-Analyses</p>
            </div>
          </div>
        </div>

        {/* Key Research Organizations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Leading Research Organizations</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            BrightReading activity book draws from recommendations and findings published by these authoritative bodies
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'National Early Literacy Panel (NELP)',
              'National Reading Panel (NRP)',
              'Institute of Education Sciences (IES)',
              'What Works Clearinghouse (WWC)',
              'American Academy of Pediatrics (AAP)',
              'International Literacy Association (ILA)',
              'Zero to Three National Center',
              'LEGO Foundation (Learning Through Play)',
              'Reach Out and Read'
            ].map((org, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-purple-50 rounded-lg p-3">
                <Award className="text-purple-600" size={20} />
                <span className="text-sm font-semibold text-gray-800">{org}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Science-Backed Journey?</h2>
          <p className="text-xl mb-8 opacity-95">
            Give your child the gift of research-proven early literacy instruction backed by decades of evidence
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
            Go to Dashboard →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Target, Sparkles, Zap, Home, Volume2, Eye, Hand } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const GamePage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [selectedGame, setSelectedGame] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewGame, setPreviewGame] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 300 );
    return () => clearTimeout(timer);
  }, []);

  const isPaid = userData?.subscription === 'paid';

  const games = [
    {
      id: 'sound-safari',
      title: 'Sound Safari',
      isPremium: true,
      icon: <img src="/assets/Sound Safari.png" alt="Sound Safari" className="w-16 h-16 object-contain" />,
      tagline: 'Hunt for sounds in your everyday world',
      color: 'from-amber-400 to-orange-500',
      phases: [1, 2, 3],
      skills: ['Phonological Awareness', 'Auditory Discrimination', 'Beginning Sound Isolation'],
      objectives: [
        'Identify and discriminate between environmental and speech sounds',
        'Isolate beginning sounds in familiar words',
        'Match sounds to their sources with increasing accuracy',
        'Demonstrate sound awareness through imitation and repetition'
      ],
      what: 'A listening adventure where you and your child become "sound detectives," hunting for and identifying sounds in everyday environments.',
      why: 'Phonological awareness, the ability to hear and manipulate sounds, is the #1 predictor of reading success (NELP 2008). Sound Safari builds auditory discrimination skills that directly support phoneme awareness, which children need before they can decode words.',
      research: 'Saffran et al. (1996) demonstrated that infants can detect auditory patterns through repeated exposure. Lonigan et al. (2000) found that early sound-play activities significantly predict later phonological sensitivity, a cornerstone of literacy development.',
      activities: [
        {
          name: 'Animal Sound Match',
          duration: '3-5 minutes',
          phase: 'Phase 1-2',
          parentScript: [
            '"Let\'s be animal detectives! I\'m going to make an animal sound, and you guess what animal it is."',
            '"Listen carefully... ROOOAAAR! What animal makes that sound?"',
            '"Yes! A lion! Now YOU make an animal sound and I\'ll guess!"'
          ],
          childActions: 'Listen to parent\'s sound → Point or say animal name → Take turns making sounds',
          scaffolding: {
            phase1: 'Model 3-4 familiar animals (dog, cat, cow). Accept pointing, gestures, or attempts at words.',
            phase2: 'Add 6-8 animals. Encourage verbal responses. Ask "What sound does a duck make?"',
            phase3: 'Introduce less common animals (owl, whale). Ask "Do these sound the same or different?"'
          },
          enrichment: 'Add movements: "Can you MOVE like a lion while you roar?" Record sounds on phone and play back for them to identify.',
          uiElements: {
            visual: 'Animated animal icons that bounce when tapped',
            audio: 'animal_sound_safari_roar.mp3, bark.mp3, moo.mp3',
            feedback: 'Confetti burst + "You found the lion!" + animal animation'
          }
        },
        {
          name: 'First Sound Detective',
          duration: '5-7 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"Now we\'re going to be SOUND DETECTIVES! We\'re looking for things that start with special sounds."',
            '"Let\'s find something that starts with mmmmm. Say it with me: mmmmm."',
            '"You found MILK! Yes! Mmmmmilk! That starts with mmmm!"',
            '"Can you find something else that starts with mmmmm?"'
          ],
          childActions: 'Listen to target sound → Search environment → Point to or bring objects → Say word (or approximate)',
          scaffolding: {
            phase2: 'Start with continuous sounds (m, s, f, l) which are easier to elongate. Accept any reasonable attempt.',
            phase3: 'Add stop sounds (b, p, t, d). Model sound isolation: "Buh-ball. Do you hear the buh?"',
            phase4: 'Child generates own examples. Ask: "What else starts with /s/?"'
          },
          enrichment: 'Create a "sound of the week" and hunt for it everywhere—car rides, grocery store, bedtime. Take photos and make a collage.',
          uiElements: {
            visual: 'Magnifying glass cursor, sound wave animation when correct',
            audio: 'sound_detective_success.mp3, target_sound_m.mp3',
            feedback: 'Badge unlock: "Sound Detective!" + sparkle effect'
          }
        },
        {
          name: 'Echo Chamber',
          duration: '4-6 minutes',
          phase: 'Phase 1-2',
          parentScript: [
            '"Let\'s play echo! I\'ll make a sound pattern, and you copy me exactly."',
            '"Ready? Clap-clap-stomp! Now you try!"',
            '"Perfect! Now let\'s add sounds: Buh-buh-boom! Your turn!"',
            '"Amazing! Now YOU be the leader and I\'ll copy YOU!"'
          ],
          childActions: 'Listen to pattern → Imitate rhythm and sounds → Create own patterns → Lead parent',
          scaffolding: {
            phase1: 'Simple 2-3 element patterns (clap-stomp, pat-clap). Focus on rhythm, not perfection.',
            phase2: 'Add speech sounds (ba-ba-boo, la-la-loo). Increase to 4-5 elements.',
            phase3: 'Complex patterns mixing actions and sounds. Vary tempo (fast/slow).'
          },
          enrichment: 'Play in different locations (bathroom for echo effect, outside for open sound). Use everyday objects (spoons, boxes) as instruments.',
          uiElements: {
            visual: 'Sound wave visualization, beat markers',
            audio: 'echo_chamber_clap.mp3, correct_pattern_chime.mp3',
            feedback: 'Animated echo ripples + "Echo master!"'
          }
        },
        {
          name: 'Rhyme Time Walk',
          duration: '5-10 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"Let\'s take a rhyming walk! I\'ll say a word, and you say a word that rhymes with it."',
            '"Ready? Cat! What rhymes with cat?"',
            '"Hat! Yes! Cat, hat! Those rhyme because they both end with -at!"',
            '"Let\'s keep walking... Dog! What rhymes with dog?"'
          ],
          childActions: 'Walk and listen → Generate rhymes → Move to rhythm of words → Accept silly/made-up rhymes',
          scaffolding: {
            phase2: 'Provide 2 choices: "Does cat rhyme with HAT or SHOE?" Accept nonsense rhymes.',
            phase3: 'Child generates independently. If stuck, give onset: "It starts with b... b-at!"',
            phase4: 'Create rhyme chains: "Cat, hat, bat, sat, mat..." How many can we make?'
          },
          enrichment: 'Set to music or rhythm. Create rhyme families (all -at words, all -og words). Make it physical: jump on each rhyme.',
          uiElements: {
            visual: 'Footstep path with rhyming word pairs',
            audio: 'rhyme_success_chime.mp3, word_cat.mp3, word_hat.mp3',
            feedback: 'Rhyme connection animation (words connect with sparkle line)'
          }
        }
      ],
      dataLogging: 'Log: activity_name, sound_presented, child_response, accuracy (correct/attempt/skip), response_time, parent_scaffolding_level',
      accessibility: 'ARIA labels for all animal icons. Haptic feedback on correct response. Visual + audio cues for multi-sensory support. Parent can adjust sound volume per activity.'
    },
    {
      id: 'word-wizards',
      title: 'Word Wizards',
      isPremium: false,
      icon: <img src="/assets/Word Wizards.png" alt="Word Wizards" className="w-16 h-16 object-contain" />,
      tagline: 'Build vocabulary through everyday magic',
      color: 'from-purple-400 to-pink-500',
      phases: [1, 2, 3, 4],
      skills: ['Vocabulary Development', 'Semantic Knowledge', 'Expressive Language'],
      objectives: [
        'Increase receptive and expressive vocabulary by 20-50 words per quarter',
        'Use descriptive language (adjectives, verbs) in context',
        'Categorize objects and understand relationships between words',
        'Apply new vocabulary in spontaneous speech and storytelling'
      ],
      what: 'Quick vocabulary-building games embedded in daily routines—no flashcards, just rich conversations and playful word exploration.',
      why: 'Vocabulary knowledge at age 3 is a strong predictor of reading comprehension at age 10 (Gilkerson et al. 2018). The quantity AND quality of words children hear matters (Weisleder & Fernald 2013).',
      research: 'Romeo et al. (2018) found that conversational turns—not just word counts—activate language processing areas in children\'s brains. Rich vocabulary input, especially with multiple exposures in varied contexts, builds semantic networks essential for later reading comprehension.',
      activities: [
        {
          name: 'Grocery Store Spy',
          duration: '5-8 minutes',
          phase: 'Phase 1-2-3',
          parentScript: [
            '"We\'re at the store! Let\'s be word wizards and name everything we see."',
            '"Look—that\'s a BANANA. It\'s YELLOW and CURVED. Can you say banana?"',
            '"Great! Now can YOU find something RED?"',
            '"You found a TOMATO! Yes! Tomatoes are red and ROUND and SMOOTH."'
          ],
          childActions: 'Point to objects → Repeat words → Find objects by attribute (color, shape) → Compare objects',
          scaffolding: {
            phase1: 'Label objects with 1-2 attributes. Accept pointing and gestures.',
            phase2: 'Ask "What color is the banana?" "What does it feel like?" Encourage 2-word responses.',
            phase3: 'Compare items: "Is the lemon bigger or smaller than the watermelon?" "Which is smoother?"',
            phase4: 'Categorize: "Which of these are fruits? Which are vegetables?" Encourage child to explain.'
          },
          enrichment: 'Create "theme hunts": find 5 green things, find 3 soft things, find foods that start with B. At home, sort and categorize items from shopping trip.',
          uiElements: {
            visual: 'Grocery store scene with tappable items, attribute labels appear on tap',
            audio: 'item_name.mp3, attribute_descriptors.mp3, success_chime.mp3',
            feedback: 'Item glows when named correctly + "You\'re a word wizard!"'
          }
        },
        {
          name: 'Magic Description Box',
          duration: '4-6 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"I have a MYSTERY OBJECT in this box! Put your hand in—no peeking—and tell me what you feel."',
            '"What does it feel like? Is it soft or hard? Bumpy or smooth?"',
            '"It feels bumpy! What else can you tell me about it?"',
            '"Let\'s see... it\'s an orange! It IS bumpy! And round! And orange-colored!"'
          ],
          childActions: 'Feel object without seeing → Describe texture, shape, size → Guess object → Learn new descriptor words',
          scaffolding: {
            phase2: 'Provide descriptor choices: "Is it soft or hard?" Model full sentences: "It feels soft."',
            phase3: 'Encourage multiple descriptors: "Tell me 3 things about how it feels." Introduce advanced words: smooth, rough, squishy.',
            phase4: 'Child creates own mystery boxes for parent. Reverse roles regularly.'
          },
          enrichment: 'Theme boxes: all soft things, all round things, all kitchen items. Create texture boards with different materials glued on.',
          uiElements: {
            visual: 'Animated mystery box with shake effect, question marks',
            audio: 'mystery_box_open.mp3, texture_words.mp3, reveal_sound.mp3',
            feedback: 'Box opens with sparkles + new vocabulary word badge'
          }
        },
        {
          name: 'Opposite Day',
          duration: '3-5 minutes',
          phase: 'Phase 2-3-4',
          parentScript: [
            '"Let\'s play Opposite Day! I say a word, you say the OPPOSITE!"',
            '"Ready? BIG!"',
            '"Small! Yes! Big and small are opposites!"',
            '"Your turn to give me a word... What\'s the opposite of HOT?"'
          ],
          childActions: 'Listen to word → Retrieve opposite from memory → Say opposite → Generate own word pairs',
          scaffolding: {
            phase2: 'Use concrete, familiar opposites (big/small, hot/cold). Demonstrate with gestures or objects.',
            phase3: 'Add abstract opposites (happy/sad, loud/quiet). Act them out together.',
            phase4: 'Complex opposites (rough/smooth, empty/full). Child explains: "Why are they opposites?"'
          },
          enrichment: 'Make it physical: "Show me BIG!" (arms wide). "Show me small!" (curl up). Play freeze dance with opposites—when music stops, call out a word and they do the opposite action.',
          uiElements: {
            visual: 'Split screen showing opposite concepts with animations',
            audio: 'word_big.mp3, word_small.mp3, match_success.mp3',
            feedback: 'Words connect with line + "Perfect opposites!"'
          }
        },
        {
          name: 'Category Speed Round',
          duration: '3-5 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"Time for a speed round! I\'ll say a category, and we take turns naming things in that category as FAST as we can!"',
            '"Ready? ANIMALS! Go!"',
            '"Dog!" "Cat!" "Elephant!" "Bird!" "Keep going!"',
            '"Wow, we named 10 animals! Let\'s try FOODS!"'
          ],
          childActions: 'Listen to category → Rapidly retrieve examples → Take turns → Explain why something belongs',
          scaffolding: {
            phase3: 'Use concrete categories (animals, foods, colors). Accept any correct answer. If stuck, give hints: "What animal says moo?"',
            phase4: 'Abstract categories (things that fly, things that are cold, things you find at the beach). Ask: "Does that belong? Why?"'
          },
          enrichment: 'Set actual timer (30 seconds). Count how many you got. Try to beat your record. Make weird categories: things that are squishy, things that go beep.',
          uiElements: {
            visual: 'Timer animation, category header with icons, scoreboard',
            audio: 'tick_tock.mp3, category_reveal.mp3, applause.mp3',
            feedback: 'Each correct answer adds icon to screen + final score celebration'
          }
        }
      ],
      dataLogging: 'Log: activity_name, target_vocabulary, child_response, spontaneous_use (yes/no), context, parent_extension (yes/no)',
      accessibility: 'Visual vocabulary cards for non-verbal support. Parent can record custom words. Multi-sensory: see, hear, touch objects when possible.'
    },
    {
      id: 'story-spinners',
      title: 'Story Spinners',
      isPremium: true,
            icon: <img src="/assets/Story Spinners.png" alt="Sight Word Spotters" className="w-16 h-16 object-contain" />,

      tagline: 'Create wild stories together',
      color: 'from-blue-400 to-cyan-500',
      phases: [2, 3, 4],
      skills: ['Narrative Skills', 'Sequencing', 'Story Comprehension', 'Creative Expression'],
      objectives: [
        'Understand story structure (beginning, middle, end)',
        'Sequence events in logical order',
        'Make predictions and inferences during stories',
        'Create original narratives with characters, setting, and plot'
      ],
      what: 'Collaborative storytelling games that build narrative skills through play—no books required (but they help!).',
      why: 'Understanding story structure is critical for reading comprehension (Whitehurst & Lonigan 1998). Children who can retell and create stories have stronger comprehension skills when they begin formal reading.',
      research: 'Scarborough\'s Reading Rope (2001) identifies narrative understanding as a key component of language comprehension. Dialogic reading techniques (asking questions, encouraging child participation) significantly improve story comprehension and expressive language.',
      activities: [
        {
          name: 'One-Word Story',
          duration: '5-7 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"Let\'s make up a story together! But here\'s the trick—we can only say ONE word at a time!"',
            '"I\'ll start: Once..."',
            '"Your turn—say one word!"',
            '"Great! Let\'s keep going... Once there was a... (your word)..."'
          ],
          childActions: 'Listen to previous word → Add one word → Build story collaboratively → Laugh at silly combinations',
          scaffolding: {
            phase2: 'Accept any word. Parent steers gently: "Once there was a PURPLE... (wait for child)... dinosaur who loved TACOS!"',
            phase3: 'Encourage connection between words. If story gets stuck, parent adds transition: "and then..."',
            phase4: 'Record story on phone. Play back and illustrate it together. Child leads more actively.'
          },
          enrichment: 'Write down the story as you go. Act it out with toys. Make it a bedtime ritual. Try "One-Sentence Story" for older kids (each person says full sentence).',
          uiElements: {
            visual: 'Word bubbles appearing in sequence, building story path',
            audio: 'typewriter_sound.mp3, story_complete_chime.mp3',
            feedback: 'Animated storybook pages fill in + "Story complete!"'
          }
        },
        {
          name: 'Picture Story Shuffle',
          duration: '4-6 minutes',
          phase: 'Phase 2-3-4',
          parentScript: [
            '"I have three pictures here. Let\'s put them in order and tell a story!"',
            '"Which picture should be FIRST? What happens at the beginning?"',
            '"Good! Now what happens NEXT? Which picture is in the middle?"',
            '"And what happens at the END? Let\'s tell the whole story from start to finish!"'
          ],
          childActions: 'Look at pictures → Identify beginning/middle/end → Sequence pictures → Narrate complete story',
          scaffolding: {
            phase2: 'Use 3 obvious sequence pictures (wake up, eat, play). Ask "What happened first?" Accept simple answers: "She woke up."',
            phase3: 'Use 4-5 pictures. Ask "Why did this happen?" Encourage cause-effect: "She was hungry, SO she ate."',
            phase4: 'Mix up pictures intentionally: "Oops! This doesn\'t make sense. Can you fix it?" Child explains reasoning.'
          },
          enrichment: 'Take photos of daily routine and sequence them. Draw own 3-picture stories. Make it silly: mix up on purpose and laugh at wrong order.',
          uiElements: {
            visual: 'Draggable picture cards, sequence slots, checkmark when correct',
            audio: 'card_shuffle.mp3, correct_order_chime.mp3',
            feedback: 'Pictures animate into storybook + "Story solved!"'
          }
        },
        {
          name: 'What Happens Next?',
          duration: '5-8 minutes',
          phase: 'Phase 2-3-4',
          parentScript: [
            '"Let\'s read this book, but I\'m going to stop and ask you to guess what happens next!"',
            '"(Read page) Uh oh! The cat is stuck in the tree! What do you think happens next?"',
            '"Great prediction! Let\'s see if you\'re right... (turn page)"',
            '"You were close! The firefighter DID come, but there was a ladder! That was a great guess!"'
          ],
          childActions: 'Listen to story → Make predictions → Explain reasoning → Compare prediction to outcome → Keep reading',
          scaffolding: {
            phase2: 'Ask "What will happen?" Accept any reasonable answer. If stuck, give 2 choices.',
            phase3: 'Ask "Why do you think that?" Encourage use of story clues: "Look at the picture—what do you see?"',
            phase4: 'Ask "What would YOU do if you were the character?" Compare multiple solutions.'
          },
          enrichment: 'Read same book multiple times—predictions get more sophisticated. Stop at different points each time. If wrong, say "That would be cool too! Should we make up THAT story?"',
          uiElements: {
            visual: 'Book page display, thought bubble for predictions',
            audio: 'page_turn.mp3, prediction_prompt.mp3',
            feedback: 'Sparkle effect when prediction is close + "Great thinking!"'
          }
        },
        {
          name: 'Toy Theater',
          duration: '6-10 minutes',
          phase: 'Phase 2-3-4',
          parentScript: [
            '"Let\'s make a story with your toys! Pick 2 or 3 characters."',
            '"Okay, Teddy and Bear! Where are they? Let\'s say they\'re at the park."',
            '"What happens? What\'s the problem? Maybe Teddy is hungry!"',
            '"What does Bear do? Does Bear help? How does the story end?"'
          ],
          childActions: 'Select characters → Set scene → Create problem → Solve problem → Act out story with voices and movements',
          scaffolding: {
            phase2: 'Parent leads with questions. Accept simple plots: "Teddy hungry. Bear gives cookie. Happy."',
            phase3: 'Child creates problem and solution with prompting. Add emotions: "How does Teddy FEEL now?"',
            phase4: 'Child directs entire story. Parent follows child\'s lead. Record and play back.'
          },
          enrichment: 'Add props (blanket = cave, box = car). Make up recurring characters with personalities. Create series: "Adventures of Teddy and Bear."',
          uiElements: {
            visual: 'Stage/theater setting, character select screen, scene backgrounds',
            audio: 'theater_curtain.mp3, character_voices.mp3',
            feedback: 'Applause and curtain call animation + "Standing ovation!"'
          }
        }
      ],
      dataLogging: 'Log: activity_name, story_elements_included (character/setting/problem/solution), sequence_accuracy, prediction_attempts, story_length (words/sentences)',
      accessibility: 'Visual story cards for non-verbal children. Parent can model story structure explicitly. Voice recording option for playback and reflection.'
    },
    {
      id: 'letter-quest',
      title: 'Letter Quest',
      isPremium: true,
      icon: <img src="/assets/Letter Quest.png" alt="Sight Word Spotters" className="w-16 h-16 object-contain" />,
      tagline: 'Discover letters hiding everywhere',
      color: 'from-green-400 to-emerald-500',
      phases: [2, 3, 4],
      skills: ['Letter Recognition', 'Print Awareness', 'Letter-Sound Correspondence'],
      objectives: [
        'Recognize and name all 26 uppercase and lowercase letters',
        'Understand that letters represent sounds',
        'Identify letters in environmental print',
        'Match letters to their corresponding sounds with 80%+ accuracy'
      ],
      what: 'Letter recognition games using the real world around you—no worksheets, just hunting for letters in books, signs, and everyday objects.',
      why: 'Letter knowledge is one of the strongest predictors of later reading success (NELP 2008). Children need to know letter names AND sounds to begin decoding words.',
      research: 'Ehri (2020) found that connecting letters to sounds (especially through meaningful contexts) accelerates word reading. Environmental print exposure helps children understand that print carries meaning (Whitehurst & Lonigan 1998).',
      activities: [
        {
          name: 'Letter Scavenger Hunt',
          duration: '5-10 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"Today we\'re hunting for the letter A! Let\'s find A everywhere we go!"',
            '"Look—there\'s an A on the STOP sign! Let\'s touch it and say A!"',
            '"Can you find another A? Let\'s look around... Where else is A hiding?"',
            '"You found one on your shirt! Great job! A is everywhere!"'
          ],
          childActions: 'Search environment for target letter → Point to letter → Say letter name → Repeat sound',
          scaffolding: {
            phase2: 'Hunt for 1 letter at a time. Focus on uppercase first. Accept pointing without naming.',
            phase3: 'Hunt for multiple letters. Compare uppercase and lowercase: "This is big A, this is little a—they\'re the same letter!"',
            phase4: 'Child leads hunt, choosing letter. Find letters AND say their sounds: "A says /a/!"'
          },
          enrichment: 'Take photos of each letter found. Create alphabet photo book. Make it a weekly ritual: "Letter of the Week." Award stickers for each letter found.',
          uiElements: {
            visual: 'Camera viewfinder overlay, letter highlight when recognized',
            audio: 'camera_click.mp3, letter_name.mp3, letter_sound.mp3',
            feedback: 'Collected letter appears in alphabet chart + "Letter collected!"'
          }
        },
        {
          name: 'Name Letter VIP',
          duration: '4-6 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"The first letter of your name is M! That\'s YOUR special VIP letter!"',
            '"Let\'s make M your VIP letter today. Every time we see M, that\'s YOUR letter!"',
            '"Look! M on the MILK carton! That\'s your letter! Say it with me: Mmmmm!"',
            '"Can you find MORE Ms? Let\'s see how many Ms we can find today!"'
          ],
          childActions: 'Identify first letter of name → Recognize in various contexts → Say letter name and sound → Feel ownership of letter',
          scaffolding: {
            phase2: 'Point out name letter frequently. Make crown or badge with their letter. Celebrate every sighting.',
            phase3: 'Find name letter in books, signs, products. Say sound: "M says /m/ like in MAYA!"',
            phase4: 'Extend to family members\' names: "Your letter is M. Daddy\'s letter is D. Find your letter AND Daddy\'s letter!"'
          },
          enrichment: 'Create "M wall" (or whatever their letter is) with pictures of M words. Decorate letter cutout. Make letter with playdough. Trace letter in sand/flour.',
          uiElements: {
            visual: 'Personalized name display with highlighted first letter, crown animation',
            audio: 'name_letter_announcement.mp3, special_chime.mp3',
            feedback: 'Letter sparkles + child\'s name appears + "That\'s YOUR letter!"'
          }
        },
        {
          name: 'Letter Shape Bodies',
          duration: '5-8 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"Let\'s make letters with our BODIES! Can we make the letter T?"',
            '"I\'ll stand straight like this—I\'m the long line. You be the line across the top!"',
            '"Look! We made a T together! T says /t/!"',
            '"What other letters can we make? Can you make an L all by yourself?"'
          ],
          childActions: 'Use body to form letter shapes → Follow parent model → Experiment with letter formations → Say letter name and sound',
          scaffolding: {
            phase2: 'Parent leads. Make simple letters (T, L, I, O with arms). Take photos of letter bodies.',
            phase3: 'Child forms letters independently. Combine bodies to make harder letters (M, N, W). Guess which letter friend made.',
            phase4: 'Make letter, then name words that start with that letter: "We made S—snake, sun, sock!"'
          },
          enrichment: 'Chalk letter hopscotch: draw letters, jump to them, say sound when landing. Letter yoga poses. Shadow letters with flashlight.',
          uiElements: {
            visual: 'Stick figure animation showing letter formation, photo capture',
            audio: 'camera_sound.mp3, letter_sound.mp3, applause.mp3',
            feedback: 'Letter outline appears over bodies + "Perfect T!"'
          }
        },
        {
          name: 'Alphabet Treasure Box',
          duration: '5-10 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"Let\'s create an Alphabet Treasure Box! We\'ll find one thing for each letter!"',
            '"What starts with A? An acorn! Let\'s put it in our A section!"',
            '"Touch the acorn. A. Acorn. Aaaaa (sound). Can you say it?"',
            '"What starts with B? Let\'s go find something together!"'
          ],
          childActions: 'Find objects for each letter → Sort into sections → Touch and name → Say letter sound',
          scaffolding: {
            phase3: 'Focus on 5-6 letters at a time. Parent suggests items if stuck. Emphasize sound: "B. Ball. /b/-/b/-ball."',
            phase4: 'Child leads object search. Create multiple items per letter. Play "close your eyes, feel it, guess the letter."'
          },
          enrichment: 'Take photos instead of collecting items (especially for X, Q!). Make alphabet book with found treasures. Trade boxes with friends.',
          uiElements: {
            visual: 'Treasure chest with letter compartments, collected items appear as icons',
            audio: 'treasure_found.mp3, letter_sound_loop.mp3',
            feedback: 'Item slots into correct letter section + sparkle + "Treasure found!"'
          }
        }
      ],
      dataLogging: 'Log: activity_name, target_letter, recognition (correct/incorrect), sound_production (accurate/approximation/none), context (environmental/book/object)',
      accessibility: 'Tactile letters for touch exploration. High-contrast letter displays. Parent can upload photos of letters found in home environment for personalization.'
    },
    {
      id: 'rhyme-party',
      title: 'Rhyme Party',
      isPremium: true,
      icon: <img src="/assets/Rhyme Time.png" alt="Sight Word Spotters" className="w-16 h-16 object-contain" />,
      tagline: 'Words that sound alike are so fun to make!',
      color: 'from-pink-400 to-rose-500',
      phases: [1, 2, 3],
      skills: ['Rhyme Recognition', 'Rhyme Production', 'Phonological Sensitivity'],
      objectives: [
        'Identify whether two words rhyme with 80%+ accuracy',
        'Generate rhyming words when given a target word',
        'Recognize rhyming patterns in songs and stories',
        'Play with nonsense rhymes to explore sound patterns'
      ],
      what: 'Rhyming games that feel like songs and silly word play—because rhyming is the gateway to reading.',
      why: 'Rhyme awareness is a critical phonological skill that predicts later reading ability (Lonigan et al. 2000). Children who can rhyme show stronger phoneme manipulation skills.',
      research: 'Anthony & Francis (2005) demonstrated that rhyme awareness develops before more complex phonological skills. Trainor et al. (2002) found that rhythm and rhyme support speech perception in infancy.',
      activities: [
        {
          name: 'Rhyme or No Rhyme?',
          duration: '3-5 minutes',
          phase: 'Phase 1-2',
          parentScript: [
            '"Let\'s play Rhyme Detective! I\'ll say two words. You tell me if they rhyme!"',
            '"Cat and Hat. Do they rhyme? Give me thumbs up for yes, thumbs down for no!"',
            '"Yes! Cat and Hat rhyme! They both end with -at!"',
            '"Now try this: Dog and Banana. Do THOSE rhyme?"',
            '"No way! Those are silly together but they don\'t rhyme!"'
          ],
          childActions: 'Listen to word pair → Determine if rhyme → Signal yes/no with thumbs or words → Laugh at silly non-rhymes',
          scaffolding: {
            phase1: 'Use obvious rhymes (cat/hat) and very different non-rhymes (cat/dog). Accept any response method: thumbs, nod, words.',
            phase2: 'Mix in tricky pairs that sound similar but don\'t rhyme (cat/cap). Model thinking aloud: "Cat... cap... do they end the same? Almost! But not quite."',
            phase3: 'Child suggests word pairs for parent to judge. Introduce WHY they rhyme: "They both have -og at the end!"'
          },
          enrichment: 'Add movements: jump if rhyme, freeze if not. Make it fast-paced like a game show. Create silly combinations: "Elephant and telephone? Banana and piano?"',
          uiElements: {
            visual: 'Two word cards side by side, thumbs up/down buttons',
            audio: 'word_pair.mp3, correct_chime.mp3, silly_buzzer.mp3',
            feedback: 'Checkmark or X appears + words connect if rhyme'
          }
        },
        {
          name: 'Family Rhyme Names',
          duration: '4-6 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"Let\'s make silly rhymes with our names! Your name is Maya... Maya likes to PLAYA!"',
            '"Can you think of a rhyme for Daddy? Daddy... Daddy likes to... PLAY-A? (close enough!)"',
            '"What about Grandma? Grandma... Grandma likes... DRAMA! That\'s funny!"',
            '"Let\'s make a rhyme song with everyone\'s names!"'
          ],
          childActions: 'Listen to name → Think of rhyme → Say rhyme (real or nonsense) → Sing rhyme song',
          scaffolding: {
            phase2: 'Accept any rhyme attempt, even approximate. Give rhyme starters: "Maya... M-aya... What sounds like aya?"',
            phase3: 'Create full rhyme sentences. Write them down and illustrate. Make it a family book.',
            phase4: 'Child leads rhyming for all family members. Create rhyme poems about family.'
          },
          enrichment: 'Record rhyme songs. Perform for family members. Make rhyme greeting cards. Extend to friends\' names, pet names.',
          uiElements: {
            visual: 'Family tree with photos, rhyme bubbles appearing above each person',
            audio: 'name_rhyme_melody.mp3, recording_feature.mp3',
            feedback: 'Rhyme saves to family songbook + musical notes animation'
          }
        },
        {
          name: 'Rhyme Freeze Dance',
          duration: '5-7 minutes',
          phase: 'Phase 2-3',
          parentScript: [
            '"Let\'s dance! When the music stops, I\'ll say a word and you say a RHYME!"',
            '"Dancing, dancing... FREEZE! The word is: BLUE!"',
            '"SHOE! Yes! Blue and shoe rhyme! Keep dancing!"',
            '"Dancing... FREEZE! The word is: CAR!"',
            '"If you can\'t think of one, do a silly dance until you remember!"'
          ],
          childActions: 'Dance to music → Freeze when music stops → Generate rhyme quickly → Continue dancing',
          scaffolding: {
            phase2: 'Give 5-10 seconds to think. If stuck, offer choices: "Does car rhyme with JAR or HAT?"',
            phase3: 'Reduce thinking time. Accept creative rhymes. Switch roles—child says word, parent rhymes.',
            phase4: 'Add challenge: "Make a SILLY rhyme!" or "Use your rhyme in a sentence!"'
          },
          enrichment: 'Use different music styles. Theme dances: animal rhymes, food rhymes. Video record dance moves + rhymes for playback laughs.',
          uiElements: {
            visual: 'Animated dancing character, freeze frame effect, word appears in bubble',
            audio: 'dance_music.mp3, freeze_sound.mp3, rhyme_success.mp3',
            feedback: 'Character unfreezes and celebrates + "Rhyme master!"'
          }
        },
        {
          name: 'Rhyme Basket',
          duration: '5-8 minutes',
          phase: 'Phase 2-3-4',
          parentScript: [
            '"I have objects in this basket. Let\'s pull one out... it\'s a CAR!"',
            '"What rhymes with car? Let\'s find something in the basket or the room!"',
            '"You found a STAR! Car and star! Perfect rhyme!"',
            '"Let\'s try another... what\'s this? A BOOK!"',
            '"What could rhyme with book? It doesn\'t have to be in the basket—use your imagination!"'
          ],
          childActions: 'Pull object from basket → Name object → Find/create rhyme → Explain rhyme connection',
          scaffolding: {
            phase2: 'Pre-load basket with rhymable items (cat toy/hat, car/star sticker). Accept nonsense: "Book... zook!"',
            phase3: 'Mix easy and hard items. Encourage multiple rhymes: "What ELSE rhymes with book? Cook! Look! Hook!"',
            phase4: 'Child creates own rhyme basket for parent. Explain why words rhyme: "They both end with -ook!"'
          },
          enrichment: 'Theme baskets: food rhymes, animal rhymes, color rhymes. Draw pictures of rhyme pairs. Make rhyme matching game.',
          uiElements: {
            visual: 'Basket with mystery items, matching rhyme pairs connect with lines',
            audio: 'basket_rattle.mp3, item_reveal.mp3, match_chime.mp3',
            feedback: 'Rhyme pair appears together + sparkle connection + "Rhyme found!"'
          }
        }
      ],
      dataLogging: 'Log: activity_name, target_word, rhyme_produced, accuracy (exact_rhyme/close_rhyme/non_rhyme), response_time, nonsense_acceptance',
      accessibility: 'Visual word cards for support. Accept sign language or gestures for non-verbal children. Slow down music/pace as needed.'
    },
    {
      id: 'book-adventures',
      title: 'Book Adventures',
      isPremium: true,
            icon: <img src="/assets/Book Adventures.png" alt="Sight Word Spotters" className="w-16 h-16 object-contain" />,

      tagline: 'Turn storytime into an adventure',
      color: 'from-indigo-400 to-purple-500',
      phases: [1, 2, 3, 4],
      skills: ['Print Motivation', 'Story Comprehension', 'Dialogic Reading', 'Book Handling'],
      objectives: [
        'Develop love of books and reading through interactive engagement',
        'Understand that print carries meaning and directionality',
        'Answer and ask questions about stories',
        'Make connections between stories and personal experience'
      ],
      what: 'Interactive read-aloud strategies that transform passive listening into active learning and conversation.',
      why: 'Shared reading is one of the most powerful literacy activities for young children (Bus & van IJzendoorn 1995). Interactive reading builds vocabulary, comprehension, and print awareness.',
      research: 'Dialogic reading techniques (Whitehurst & Lonigan) significantly improve language outcomes. The AAP (2014) recommends reading aloud from infancy as essential for brain development and literacy.',
      activities: [
        {
          name: 'Character Voice Party',
          duration: '5-10 minutes',
          phase: 'Phase 1-2-3',
          parentScript: [
            '"Every character in this book gets a special voice! Let\'s decide together!"',
            '"The bear is big, so he has a DEEP voice: \'Hello!\' Can you do a deep voice?"',
            '"The mouse is tiny, so she has a SQUEAKY voice: \'Hi there!\' You try!"',
            '"Now when I read, YOU do the animal voices!"'
          ],
          childActions: 'Listen to character voices → Imitate voices → Assign voices to characters → "Read" using voices',
          scaffolding: {
            phase1: 'Parent does all voices. Child just listens and laughs. Point to characters as you voice them.',
            phase2: 'Child imitates one character voice. Parent does others. Swap characters mid-story for fun.',
            phase3: 'Child assigns voices to all characters before reading. Child "reads" familiar books to parent using voices.',
            phase4: 'Add emotions to voices: "How would the bear sound if he was SAD? EXCITED?"'
          },
          enrichment: 'Record voices and play back. Make character masks. Have "character conversations" outside of reading time. Let child direct: "Make the bear sound SILLY this time!"',
          uiElements: {
            visual: 'Book pages with character icons, voice wave animations',
            audio: 'character_voice_examples.mp3, recording_option.mp3',
            feedback: 'Character icons light up when voiced + "Perfect voice!"'
          }
        },
        {
          name: 'Prediction Pause',
          duration: '5-8 minutes',
          phase: 'Phase 2-3-4',
          parentScript: [
            '"Before we turn the page, let\'s PREDICT! What do you think will happen next?"',
            '"The bunny is looking for her mommy... where do you think she\'ll look?"',
            '"Good thinking! Let\'s see if you\'re right... (turn page)"',
            '"Oh! She looked under the bed! You said she\'d look in the garden—that was a great guess too!"'
          ],
          childActions: 'Listen to story setup → Make prediction → Explain reasoning → Compare prediction to actual outcome → Continue reading',
          scaffolding: {
            phase2: 'Stop at obvious prediction points. Offer 2 choices if stuck: "Will she look INSIDE or OUTSIDE?"',
            phase3: 'Ask "Why do you think that?" Use picture clues: "What do you see in the picture that gives us a hint?"',
            phase4: 'Ask open-ended: "What would YOU do if you were the character?" Multiple predictions: "What are 3 things that COULD happen?"'
          },
          enrichment: 'Reread same book—predictions become more sophisticated. Stop at different spots each time. Write down predictions and check them. Cover illustrations and predict based only on words.',
          uiElements: {
            visual: 'Thought bubble for predictions, page preview blur, checkmark when revealed',
            audio: 'thinking_music.mp3, page_turn.mp3, reveal_sound.mp3',
            feedback: 'Prediction bubble matches/doesn\'t match outcome + "Great thinking!" either way'
          }
        },
        {
          name: 'Picture Detective',
          duration: '4-7 minutes',
          phase: 'Phase 1-2',
          parentScript: [
            '"You\'re the Picture Detective! Your job is to find things WHILE I read!"',
            '"Can you find the CAT on every page? Point when you see it!"',
            '"There it is! You found the cat! Is there a cat on THIS page too?"',
            '"Let\'s count—how many cats did we find in the whole book?"'
          ],
          childActions: 'Search illustrations for target object → Point when found → Count total → Describe what object is doing',
          scaffolding: {
            phase1: 'Simple objects that appear frequently (cat, dog, ball). Just point, no naming required.',
            phase2: 'Multiple objects to track. Ask "What is the cat DOING on this page?" Encourage description.',
            phase3: 'Abstract hunts: "Find something BLUE on every page" or "Find all the happy faces"'
          },
          enrichment: 'Tally marks for counting. Compare books: "This book had 5 cats, this book had 3." Photo scavenger hunt: find items from book in real life.',
          uiElements: {
            visual: 'Magnifying glass cursor, objects highlight when found, counter display',
            audio: 'found_it_chime.mp3, page_turn.mp3, counting_sounds.mp3',
            feedback: 'Found objects appear in collection bar + total count + "Detective badge earned!"'
          }
        },
        {
          name: 'Story Remix',
          duration: '6-10 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"We\'ve read this book before. What if we CHANGED the story?"',
            '"What if instead of THREE bears, there were three DINOSAURS?"',
            '"What would change? Would dinosaurs eat porridge? What would THEY eat?"',
            '"You tell me the new version while I turn the pages!"'
          ],
          childActions: 'Recall original story → Suggest changes → Narrate new version → Explain how changes affect plot',
          scaffolding: {
            phase3: 'Change one element (characters OR setting). Parent guides with questions: "So what would happen if...?"',
            phase4: 'Child leads entire remix. Change multiple elements. Act out remixed version. Record and compare to original.'
          },
          enrichment: 'Write/illustrate remixed version. Create series: "Goldilocks and the Three Robots," "Goldilocks and the Three Aliens." Share remixes with family.',
          uiElements: {
            visual: 'Original story on left, remix on right, changeable elements highlighted',
            audio: 'remix_music.mp3, story_recording.mp3',
            feedback: 'New story creates custom book cover + "Story Creator!"'
          }
        }
      ],
      dataLogging: 'Log: activity_name, book_title, engagement_level, questions_asked, predictions_made, connections_to_experience',
      accessibility: 'Closed captions for read-aloud audio. Touch-and-hear for illustrations. Parent can photograph own books for personalization.'
    },
    {
      id: 'blend-builders',
      title: 'Blend Builders',
      isPremium: true,
            icon: <img src="/assets/Blend Builders.png" alt="Sight Word Spotters" className="w-16 h-16 object-contain" />,

      tagline: 'Smash sounds together to make words',
      color: 'from-yellow-400 to-amber-500',
      phases: [3, 4],
      skills: ['Phoneme Blending', 'Sound Segmentation', 'Decoding Preparation'],
      objectives: [
        'Blend 2-3 individual sounds to form words',
        'Segment simple words into individual sounds',
        'Recognize that changing one sound changes the word',
        'Manipulate sounds in CVC words with 70%+ accuracy'
      ],
      what: 'Sound blending and segmentation games that prepare children for reading by teaching them to "smash" sounds together.',
      why: 'Blending is THE gateway skill to reading. Children must blend sounds to decode words (NRP 2000). This is the bridge between phonological awareness and actual reading.',
      research: 'Ehri (2001) found that phonemic awareness instruction, especially blending and segmentation, significantly improves reading. The NRP identified blending as one of the most critical early reading skills.',
      activities: [
        {
          name: 'Sound Smash',
          duration: '4-6 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"I\'m going to say a word in SLOW MOTION, breaking it into sounds. You smash the sounds together and tell me the word!"',
            '"Ready? C... A... T. What word is that?"',
            '"CAT! Yes! You smashed the sounds together! C-A-T makes CAT!"',
            '"Let\'s try another: D... O... G."'
          ],
          childActions: 'Listen to separated sounds → Hold sounds in memory → Blend sounds → Say complete word',
          scaffolding: {
            phase3: 'Start with 2-sound words (at, in, up). Slow pace. Repeat sounds if needed. Visual: hold up fingers for each sound.',
            phase4: 'Progress to CVC words (cat, dog, sun). Increase speed slightly. Child segments words parent says: "You say cat in slow motion!"'
          },
          enrichment: 'Use objects: hold up object, parent says sounds, child blends and grabs correct object. Reverse: child picks object, segments it, parent blends.',
          uiElements: {
            visual: 'Individual sound bubbles moving together and merging into word',
            audio: 'sound_c.mp3, sound_a.mp3, sound_t.mp3, blend_cat.mp3, smash_effect.mp3',
            feedback: 'Sounds crash together with burst effect + word appears + "Smashed!"'
          }
        },
        {
          name: 'Robot Talk',
          duration: '5-7 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"Let\'s talk like ROBOTS! Robots say words one sound at a time!"',
            '"I\'ll say a word like a robot: B-A-T. You say it like a human: BAT!"',
            '"Now YOU be the robot! Say \'sun\' like a robot!"',
            '"S-U-N! Perfect robot talk! Now I\'ll say it human: SUN!"'
          ],
          childActions: 'Translate robot talk to human talk (blending) → Translate human talk to robot talk (segmenting) → Take turns with parent',
          scaffolding: {
            phase3: 'Parent is robot first. Child just blends. Simple CVC words. Move slowly and clearly.',
            phase4: 'Child becomes robot—segments words. Introduce CVCC and CCVC words (stop, frog). Play "broken robot"—parent makes errors, child fixes.'
          },
          enrichment: 'Robot costumes or voices. Robot dance moves between words. Record robot conversations. Create robot story in robot talk.',
          uiElements: {
            visual: 'Animated robot character, speech bubbles showing segmented vs. whole words',
            audio: 'robot_voice_effect.mp3, segmented_sounds.mp3, human_word.mp3',
            feedback: 'Robot and human high-five + "Translation complete!"'
          }
        },
        {
          name: 'Change One Sound',
          duration: '5-8 minutes',
          phase: 'Phase 4',
          parentScript: [
            '"Let\'s play a magic word game! I\'ll say a word, then change ONE sound to make a NEW word!"',
            '"The word is CAT. Now change the C to an H. What\'s the new word?"',
            '"HAT! You changed cat to hat by changing one sound!"',
            '"Now you try! Start with PIG. Change the P to a D. What word do you get?"'
          ],
          childActions: 'Identify sounds in word → Remove one sound → Substitute new sound → Blend new word → Explain change',
          scaffolding: {
            phase4: 'Change beginning sounds only (cat→bat→mat). Visual support: letter tiles or cards. Model thinking: "Cat is C-A-T... change C to B... B-A-T... bat!"'
          },
          enrichment: 'Word family chains: cat→bat→sat→mat→rat (how many can we make?). Use magnetic letters. Create word ladders on paper.',
          uiElements: {
            visual: 'Letter tiles that swap out, word transformation animation',
            audio: 'sound_swap.mp3, new_word_reveal.mp3',
            feedback: 'Old word transforms to new word with sparkle trail + "Word magic!"'
          }
        },
        {
          name: 'Syllable Clap & Snap',
          duration: '4-6 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"Words have beats called syllables! Let\'s clap the syllables!"',
            '"DOG has one beat: DOG (clap). Let\'s try together!"',
            '"PIZZA has two beats: PIZ-ZA (clap-clap)!"',
            '"Your turn! Clap the beats in your name: MA-YA!"'
          ],
          childActions: 'Listen to word → Clap/snap syllables → Count syllables → Compare word lengths',
          scaffolding: {
            phase3: 'Use familiar words (names, foods, animals). Exaggerate syllables. Accept any counting method.',
            phase4: 'Mix 1, 2, and 3-syllable words. Ask "Which word is longer: cat or computer?" Child suggests words to clap.'
          },
          enrichment: 'Jump syllables (hop for each beat). Draw syllables (one circle per beat). Syllable sorting game: make piles of 1-syllable, 2-syllable, 3-syllable words.',
          uiElements: {
            visual: 'Bouncing balls for each syllable, clap animation',
            audio: 'clap_sound.mp3, word_pronunciation.mp3',
            feedback: 'Correct syllable count displays with musical notes + "Beat master!"'
          }
        }
      ],
      dataLogging: 'Log: activity_name, word_presented, sounds_count, blend_success (yes/no), segmentation_accuracy, manipulation_type',
      accessibility: 'Visual sound representations (colored blocks for each sound). Slow down audio as needed. Tactile counting (fingers, objects) for segmentation support.'
    },
    {
      id: 'word-family-house',
      title: 'Word Family House',
      isPremium: true,
            icon: <img src="/assets/Word Family House.png" alt="Sight Word Spotters" className="w-16 h-16 object-contain" />,

      tagline: 'Build word families room by room',
      color: 'from-teal-400 to-cyan-500',
      phases: [3, 4],
      skills: ['Word Families', 'Pattern Recognition', 'Decoding by Analogy', 'Spelling Patterns'],
      objectives: [
        'Recognize and generate words in common word families (-at, -an, -op, etc.)',
        'Understand that words with similar endings are related',
        'Decode new words by analogy to known words',
        'Spell simple CVC words using word family patterns'
      ],
      what: 'Word family pattern games that help children recognize that cat, bat, and sat all belong to the same "family" because they share -at.',
      why: 'Word families accelerate decoding. Once a child knows "cat," they can read "bat, mat, sat, rat" by pattern (Ehri 2001). This builds fluency and confidence.',
      research: 'The NRP (2000) found that teaching word families (phonograms) improves both reading and spelling. Pattern recognition is more efficient than sounding out every single letter.',
      activities: [
        {
          name: 'Family Portrait Gallery',
          duration: '5-8 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"Welcome to the -AT family! All these words end with -AT!"',
            '"There\'s CAT, BAT, HAT, MAT, and RAT! They\'re all related!"',
            '"Can you think of another -AT word to add to the family?"',
            '"SAT! Great! Sat joins the -AT family! Let\'s read all the -AT words together!"'
          ],
          childActions: 'Identify word family pattern → Read words in family → Generate new family members → Illustrate or act out words',
          scaffolding: {
            phase3: 'Start with one family at a time (-at, -an, -op). Provide picture support. Read words in unison.',
            phase4: 'Compare families: "How are -AT and -AN words similar? Different?" Child leads reading. Create silly family stories.'
          },
          enrichment: 'Draw family portraits (cat wearing hat sitting on mat). Make word family books. Play "Odd One Out" (cat, bat, dog, hat—which doesn\'t belong?).',
          uiElements: {
            visual: 'House with rooms, each room = one word family, family tree visualization',
            audio: 'word_family_members.mp3, reading_in_unison.mp3',
            feedback: 'New word adds to family portrait + "Family member added!"'
          }
        },
        {
          name: 'Rhyme Time Sort',
          duration: '5-7 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"I have a pile of word cards. Let\'s sort them into families!"',
            '"Here\'s CAT. That goes in the -AT family. Here\'s FAN. Where does that go?"',
            '"The -AN family! Yes! Cat and fan don\'t belong together—they\'re in different families!"',
            '"Let\'s keep sorting until every word has a family!"'
          ],
          childActions: 'Read word card → Identify ending pattern → Sort into correct family → Read all words in sorted family',
          scaffolding: {
            phase3: 'Use 2-3 families max. Picture support on cards. Parent reads word first, child sorts.',
            phase4: 'Use 4-5 families. Child reads and sorts independently. Introduce "nonsense family members"—zat, zan (these count!).'
          },
          enrichment: 'Timed sorting races. Create sorting mats with family labels. Play memory match with word family pairs.',
          uiElements: {
            visual: 'Word cards that drag into family buckets, family labels',
            audio: 'card_shuffle.mp3, correct_sort_chime.mp3',
            feedback: 'Card glows when correctly sorted + family grows'
          }
        },
        {
          name: 'Build-A-Word',
          duration: '6-9 minutes',
          phase: 'Phase 4',
          parentScript: [
            '"Let\'s build words! I have letter cards here."',
            '"We\'re building -AT family words. First we need A and T. Now what letter makes BAT?"',
            '"B! Yes! B-A-T makes BAT! Let\'s change the first letter. What makes HAT?"',
            '"H! Change B to H! Now read it: HAT!"'
          ],
          childActions: 'Manipulate letter tiles → Build words by changing initial letter → Read built words → Spell words from dictation',
          scaffolding: {
            phase4: 'Keep -at (or other ending) stable. Only change initial letter. Provide letter choices (b, h, m) if needed. Gradually increase to child-initiated building.'
          },
          enrichment: 'Use magnetic letters, letter tiles, or write on whiteboard. Race: how many -AT words can we build in 2 minutes? Create "super words" with more letters (splat, flat).',
          uiElements: {
            visual: 'Letter tiles on drag-and-drop board, word building area',
            audio: 'letter_placement.mp3, word_formation.mp3',
            feedback: 'Word comes alive with animation when correctly built + "Word builder!"'
          }
        }
      ],
      dataLogging: 'Log: activity_name, word_family, words_generated, sorting_accuracy, building_success, transfer_to_new_words',
      accessibility: 'Color-coded word families. Tactile letter tiles. Auditory pronunciation support for each word. Parent can create custom families based on child\'s name or interests.'
    },
    {
      id: 'sentence-builders',
      title: 'Sentence Builders',
      isPremium: true,
            icon: <img src="/assets/Sentence Builders.png" alt="Sight Word Spotters" className="w-16 h-16 object-contain" />,

      tagline: 'Stack words to build super sentences',
      color: 'from-orange-400 to-red-500',
      phases: [3, 4],
      skills: ['Sentence Construction', 'Grammar Awareness', 'Punctuation', 'Print Concepts'],
      objectives: [
        'Construct simple sentences using 3-5 words',
        'Understand that sentences express complete thoughts',
        'Recognize that sentences begin with capital letters and end with punctuation',
        'Expand sentences by adding descriptive words'
      ],
      what: 'Sentence building games that teach children how words stack together to make meaningful messages—the foundation for writing.',
      why: 'Understanding sentence structure prepares children for both reading comprehension and writing (Scarborough 2001). Children need to know that words combine in specific patterns.',
      research: 'The Simple View of Reading (Gough & Tunmer 1986) emphasizes that comprehension requires both decoding AND language comprehension, which includes syntax knowledge.',
      activities: [
        {
          name: 'Sentence Scramble',
          duration: '5-7 minutes',
          phase: 'Phase 3-4',
          parentScript: [
            '"These words are all mixed up! Let\'s put them in order to make a sentence!"',
            '"I have: CAT, THE, SAT. Where should THE go first?"',
            '"Yes! THE CAT... now where does SAT go?"',
            '"THE CAT SAT! That\'s a sentence! Let\'s read it together!"'
          ],
          childActions: 'Look at scrambled words → Arrange in logical order → Read complete sentence → Identify capital and period',
          scaffolding: {
            phase3: '3-word sentences with visual support. Provide numbered spaces (1, 2, 3). Ask "Does this make sense?"',
            phase4: '4-6 word sentences. Multiple possible arrangements. Add punctuation cards. Discuss: "Could we say it differently?"'
          },
          enrichment: 'Write sentences on strips, cut apart, scramble and rebuild. Create silly scrambles on purpose. Act out sentences after building.',
          uiElements: {
            visual: 'Word cards that drag into sentence slots, capital/period indicators',
            audio: 'word_placement.mp3, sentence_reading.mp3, applause.mp3',
            feedback: 'Sentence animates with word-by-word highlighting + "Sentence complete!"'
          }
        },
        {
          name: 'Expand-A-Sentence',
          duration: '6-8 minutes',
          phase: 'Phase 4',
          parentScript: [
            '"We have a simple sentence: THE DOG RAN."',
            '"Let\'s make it MORE interesting! What KIND of dog?"',
            '"A BIG dog! Now it says THE BIG DOG RAN!"',
            '"Where did the dog run? TO THE PARK! THE BIG DOG RAN TO THE PARK!"'
          ],
          childActions: 'Start with simple sentence → Add describing words → Add location/action words → Read expanded sentence',
          scaffolding: {
            phase4: 'Start with noun + verb (dog ran). Add one descriptor at a time. Ask scaffolding questions: What kind? Where? When? How?'
          },
          enrichment: 'See how long you can make a sentence before it gets silly. Illustrate expanded sentences. Compare: boring sentence vs. interesting sentence.',
          uiElements: {
            visual: 'Sentence grows visually as words are added, before/after comparison',
            audio: 'word_addition.mp3, enhanced_sentence_reading.mp3',
            feedback: 'Sentence expands with sparkle effect + "Super sentence!"'
          }
        },
        {
          name: 'Punctuation Power',
          duration: '4-6 minutes',
          phase: 'Phase 4',
          parentScript: [
            '"Sentences need punctuation! Let\'s practice!"',
            '"This sentence is: I SEE A CAT. It tells us something, so it ends with a PERIOD."',
            '"This one is: WHERE IS THE CAT? It asks a question, so it ends with a QUESTION MARK!"',
            '"This one is: WOW! That\'s exciting, so it gets an EXCLAMATION POINT!"'
          ],
          childActions: 'Listen to sentence → Identify sentence type (tell/ask/exclaim) → Choose correct punctuation → Read with appropriate expression',
          scaffolding: {
            phase4: 'Start with periods only. Add question marks. Add exclamation points last. Model reading with different voices: calm for period, questioning for ?, excited for !'
          },
          enrichment: 'Hunt for punctuation in books. Create punctuation posters with faces (. = calm face, ? = thinking face, ! = excited face). Practice reading same sentence with different punctuation.',
          uiElements: {
            visual: 'Sentence with draggable punctuation marks, animated punctuation characters',
            audio: 'period_voice.mp3, question_voice.mp3, exclamation_voice.mp3',
            feedback: 'Correct punctuation animates + sentence reads with appropriate expression'
          }
        }
      ],
      dataLogging: 'Log: activity_name, sentence_complexity, word_count, scramble_accuracy, expansion_words_added, punctuation_identified',
      accessibility: 'Color-coded word types (nouns, verbs, adjectives). Tactile sentence building with word blocks. Voice output reads completed sentences.'
    },
    {
      id: 'sight-word-spotters',
      title: 'Sight Word Spotters',
      isPremium: true,
      icon: <img src="/assets/Sight Word Spotters.png" alt="Sight Word Spotters" className="w-16 h-16 object-contain" />,
      tagline: 'Catch words at lightning speed',
      color: 'from-violet-400 to-fuchsia-500',
      phases: [4],
      skills: ['Sight Word Recognition', 'Reading Fluency', 'Automatic Word Recognition'],
      objectives: [
        'Recognize high-frequency sight words automatically (within 1-2 seconds)',
        'Build a bank of 25-50 sight words by end of Phase 4',
        'Read sight words in connected text',
        'Use sight word knowledge to support reading fluency'
      ],
      what: 'Fast-paced sight word games that build automatic recognition of high-frequency words that can\'t always be sounded out.',
      why: 'Automatic sight word recognition is essential for reading fluency (NRP 2000). Many high-frequency words (the, was, said) can\'t be decoded and must be memorized.',
      research: 'Ehri (2001) demonstrated that sight words become automatic through repeated exposures in meaningful contexts. The more automatic the recognition, the more cognitive energy available for comprehension.',
      activities: [
        {
          name: 'Flash & Catch',
          duration: '3-5 minutes',
          phase: 'Phase 4',
          parentScript: [
            '"I\'m going to flash a word card really fast! You tell me the word as quickly as you can!"',
            '"Ready? (flash card) What word?"',
            '"THE! Yes! That was super fast!"',
            '"Let\'s see if you can catch the next one even FASTER!"'
          ],
          childActions: 'See flashed word → Recognize automatically → Say word quickly → Increase speed over time',
          scaffolding: {
            phase4: 'Start with 5-10 known words. Flash slowly (3 seconds). Gradually increase speed. Mix in review words with new words. Celebrate speed AND accuracy.'
          },
          enrichment: 'Time yourself—how many words in 30 seconds? Keep "caught words" pile. Play "Beat Your Record." Use actual flashcards or phone app.',
          uiElements: {
            visual: 'Word flashes on screen with timer, speed indicator',
            audio: 'whoosh_sound.mp3, correct_chime.mp3, timer_tick.mp3',
            feedback: 'Lightning bolt appears + word caught animation + "Speed reader!"'
          }
        },
        {
          name: 'Sight Word Scavenger Hunt',
          duration: '5-10 minutes',
          phase: 'Phase 4',
          parentScript: [
            '"Today we\'re hunting for the word THE everywhere we go!"',
            '"There it is on the cereal box! THE! Read it!"',
            '"You found another one on the sign! You\'re a sight word spotter!"',
            '"How many THEs can we find today?"'
          ],
          childActions: 'Search environment for target sight word → Point and read when found → Tally total → Notice word everywhere',
          scaffolding: {
            phase4: 'One word per day/week. Point out examples initially. Child takes over spotting. Take photos of found words. Create word collection poster.'
          },
          enrichment: 'Hunt for multiple sight words. Make bingo card with sight words—check off when found. Create "sight word museum" with photos of words found in wild.',
          uiElements: {
            visual: 'Camera viewfinder, word highlighting when recognized, collection counter',
            audio: 'camera_shutter.mp3, word_identified.mp3',
            feedback: 'Found word adds to collection + running tally + "Word hunter!"'
          }
        },
        {
          name: 'Sight Word Sentences',
          duration: '5-7 minutes',
          phase: 'Phase 4',
          parentScript: [
            '"Let\'s build sentences using sight words! We\'ll use THE, A, I, CAN, SEE!"',
            '"Let\'s make: I CAN SEE THE CAT."',
            '"Now YOU make a sentence! Use at least 3 sight words!"',
            '"I SEE A DOG! Perfect! You used I, SEE, and A!"'
          ],
          childActions: 'Select sight word cards → Arrange into sentence → Read complete sentence → Illustrate sentence',
          scaffolding: {
            phase4: 'Provide sentence frames: "I can ___ the ___." Child fills in. Progress to independent sentence creation. Mix sight words with decodable words.'
          },
          enrichment: 'Create sight word sentence booklets. Act out sentences. Play "silly sentence" challenge with silly word combinations. Type sentences on computer/tablet.',
          uiElements: {
            visual: 'Word bank of sight words, sentence building area, drawing space',
            audio: 'word_selection.mp3, sentence_reading.mp3',
            feedback: 'Completed sentence saves to book + "Published author!"'
          }
        },
        {
          name: 'Sight Word Bingo',
          duration: '6-10 minutes',
          phase: 'Phase 4',
          parentScript: [
            '"We\'re playing Sight Word Bingo! I\'ll call out a word, you find it on your card!"',
            '"The word is... THE! Do you have THE?"',
            '"You do! Mark it! Read it to me!"',
            '"Let\'s keep going until you get 5 in a row—BINGO!"'
          ],
          childActions: 'Listen to called word → Locate on bingo card → Mark space → Read marked word → Get five in a row',
          scaffolding: {
            phase4: 'Use 9-16 word cards (smaller grid). Show word card while saying it. Child reads word before marking. Celebrate near-misses: "You\'re so close to bingo!"'
          },
          enrichment: 'Create custom bingo cards with target words. Play blackout (fill entire card). Switch roles—child calls words, parent plays. Make it competitive with family members.',
          uiElements: {
            visual: 'Bingo grid with sight words, called words display, marker effect',
            audio: 'bingo_caller_voice.mp3, marker_sound.mp3, bingo_celebration.mp3',
            feedback: 'Bingo line highlights + confetti + "BINGO! Sight word champion!"'
          }
        }
      ],
      dataLogging: 'Log: activity_name, sight_word, recognition_time, accuracy, context (isolation/sentence/environment), mastery_level',
      accessibility: 'Adjustable flash speed. High-contrast word cards. Audio pronunciation support. Parent can create custom word lists based on child\'s reading materials.'
    }
  ];

  const GameDetailView = ({ game }) => {
    return (
      <div className="space-y-6">
        {/* Game Header */}
        <div className={`bg-gradient-to-br ${game.color} rounded-3xl p-8 text-white shadow-2xl`}>
<div className="flex items-center gap-4 mb-4">
            <div className="animate-bounce flex items-center justify-center">
              {typeof game.icon === 'string' ? <div className="text-6xl">{game.icon}</div> : game.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-2">{game.title}</h2>
              <p className="text-xl opacity-90 italic">"{game.tagline}"</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div>
              <p className="text-sm font-semibold opacity-80">Suitable Phases</p>
              <p className="text-lg font-bold">{game.phases.map(p => `Phase ${p}`).join(', ')}</p>
            </div>
            <div>
              <p className="text-sm font-semibold opacity-80">Core Skills</p>
              <p className="text-sm font-medium">{game.skills.slice(0, 2).join(' • ')}</p>
            </div>
          </div>
        </div>

        {/* What, Why, Research */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
              <Sparkles size={20} />
              What Is It?
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{game.what}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-200">
            <h3 className="text-lg font-bold text-purple-900 mb-2 flex items-center gap-2">
              <Target size={20} />
              Why Play It?
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{game.why}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
            <h3 className="text-lg font-bold text-green-900 mb-2 flex items-center gap-2">
              <Zap size={20} />
              How Long?
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">3-10 minutes per activity. Pick one when you have time!</p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-indigo-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            🎯 What Your Child Will Learn
          </h3>
          <ul className="space-y-2">
            {game.objectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-indigo-600 font-bold mt-1">✓</span>
                <span className="text-sm">{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Research Note */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            📚 The Science Behind It
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed italic">{game.research}</p>
        </div>

        {/* Activities */}
        <div className="space-y-5">
          <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-3xl"></span> 
            Activities to Try
          </h3>
          
          {game.activities.map((activity, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl p-6 border-l-4 border-purple-400 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{activity.name}</h4>
                  <div className="flex gap-3 text-sm text-gray-600">
                    <span className="bg-blue-100 px-3 py-1 rounded-full font-semibold">{activity.duration}</span>
                    <span className="bg-green-100 px-3 py-1 rounded-full font-semibold">{activity.phase}</span>
                  </div>
                </div>
              </div>

              {/* Parent Scripts */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border-l-4 border-blue-400">
                  <div className="flex items-center gap-2 mb-3">
                    <Volume2 size={18} className="text-blue-600" />
                    <p className="text-sm font-bold text-blue-900 uppercase">What to Say</p>
                  </div>
                  <div className="space-y-2">
                    {activity.parentScript.map((script, sIdx) => (
                      <p key={sIdx} className="text-gray-700 text-sm leading-relaxed pl-4 border-l-2 border-blue-200">
                        {script}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-l-4 border-green-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Hand size={18} className="text-green-600" />
                    <p className="text-sm font-bold text-green-900 uppercase">What Your Child Does</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{activity.childActions}</p>
                </div>

                {/* Scaffolding */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border-l-4 border-amber-400">
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={18} className="text-amber-600" />
                    <p className="text-sm font-bold text-amber-900 uppercase">How to Adjust for Your Child</p>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(activity.scaffolding).map(([phase, guidance]) => (
                      <div key={phase} className="bg-white/60 rounded-lg p-3">
                        <p className="text-xs font-bold text-amber-800 uppercase mb-1">{phase.replace('phase', 'Phase ')}</p>
                        <p className="text-gray-700 text-sm">{guidance}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enrichment */}
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border-l-4 border-pink-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Star size={18} className="text-pink-600" />
                    <p className="text-sm font-bold text-pink-900 uppercase">Level Up Ideas</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{activity.enrichment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remember Section */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-300 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Remember!
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">•</span>
                <span className="text-gray-700 text-sm"><strong>Pick ONE activity</strong> when you have 5-10 minutes—you don't need to do them all</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">•</span>
                <span className="text-gray-700 text-sm"><strong>Not fun? Stop!</strong> Try a different activity or game another day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">•</span>
                <span className="text-gray-700 text-sm"><strong>Silly = learning!</strong> If they're giggling, they're engaged</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">•</span>
                <span className="text-gray-700 text-sm"><strong>Repeat favorites</strong> multiple times—repetition builds mastery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">•</span>
                <span className="text-gray-700 text-sm"><strong>Adjust for your child</strong>—make it easier or harder based on their response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">•</span>
                <span className="text-gray-700 text-sm"><strong>Celebrate effort</strong> over perfection—trying is succeeding!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
<div className={`min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-md p-4 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
<button
            onClick={() => {
  if (selectedGame) {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedGame(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsTransitioning(false);
    }, 200);
  } else {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/dashboard', { state: { activeTab: 'enrichment' } });
    }, 200);
  }
}}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold transition-colors"
          >
            <ArrowLeft size={24} />
            <span>{selectedGame ? 'All Games' : 'Back'}</span>
          </button>
          <div className="flex items-center gap-3">
            <Star className="text-yellow-500" size={24} />
            <span className="font-bold text-gray-900 text-lg">Learning Games</span>
          </div>
          <div className="w-24"></div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {!selectedGame ? (
          <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {/* Header */}
<div className="text-center mb-12">
              <div className="mb-4 flex justify-center">
                <img src="/assets/Game.png" alt="Game Controller" className="w-24 h-24 object-contain" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">BrightReading Learning Games</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
                Research-backed, play-based activities you can do anywhere, anytime. Each game targets specific literacy skills while keeping learning fun and pressure-free.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
                <p className="text-sm text-blue-900 font-semibold leading-relaxed">
                  💡 <strong>These are bonus activities!</strong> They complement your daily lessons but aren't required. Use them when you want to practice skills in fun, creative ways during everyday moments.
                </p>
              </div>
            </div>

            {/* Games Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {games.map((game) => (
<button
                  key={game.id}
                  onClick={() => {
                    setPreviewGame(game);
                    setShowPreview(true);
                  }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all text-left group flex flex-col overflow-hidden"
                >
<div className={`h-32 bg-gradient-to-br ${game.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="group-hover:scale-110 transition-transform flex items-center justify-center">
                      {typeof game.icon === 'string' ? <div className="text-6xl">{game.icon}</div> : game.icon}
                    </div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all"></div>
                  </div>
<div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{game.title}</h3>
                      {game.isPremium && !isPaid && (
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          🔒 Premium
                        </span>
                      )}
                    </div>
                    <p className="text-purple-600 font-semibold mb-3 text-sm italic">"{game.tagline}"</p>
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {game.phases.map(p => (
                        <span key={p} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-bold">
                          Phase {p}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {game.what}
                    </p>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl font-bold text-center text-sm group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                      Explore {game.activities.length} Activities →
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Info */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">How to Use These Games</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2 text-lg">
                    <Sparkles size={22} />
                    Perfect Times to Play
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">While waiting in line or at appointments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">During car rides or walks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">While cooking or doing chores together</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">When you have 5-10 spare minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">To practice skills from lessons in new ways</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
                    <Target size={22} />
                    The Golden Rules
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">If it's not fun, stop and try something else</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">You don't need to do these every day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">Pick ONE game and ONE activity at a time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">Follow your child's lead and interests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-0.5">•</span>
                      <span className="text-sm">Celebrate effort and curiosity, not perfection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <GameDetailView game={selectedGame} />
          </div>
        )}
      </div>

{/* Game Preview Modal */}
      {showPreview && previewGame && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm animate-fadeIn" onClick={() => {
          setIsTransitioning(true);
          setTimeout(() => {
            setShowPreview(false);
            setIsTransitioning(false);
          }, 200);
        }}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className={`bg-gradient-to-br ${previewGame.color} text-white p-8 rounded-t-3xl`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 flex items-center justify-center">
                  {previewGame.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-2">{previewGame.title}</h2>
                  <p className="text-lg opacity-90 italic">"{previewGame.tagline}"</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Quick Summary */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="text-purple-600" size={24} />
                  What You'll Do
                </h3>
                <p className="text-gray-700 leading-relaxed">{previewGame.what}</p>
              </div>

              {/* Curriculum Connection */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Target className="text-blue-600" size={20} />
                  How This Helps Your Child Read
                </h3>
                <p className="text-blue-900 text-sm leading-relaxed">{previewGame.why}</p>
              </div>

              {/* Key Skills */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Skills Practiced</h3>
                <div className="flex flex-wrap gap-2">
                  {previewGame.skills.map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Phase & Activities Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Suitable For</p>
                  <p className="text-gray-900 font-bold">{previewGame.phases.map(p => `Phase ${p}`).join(', ')}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-gray-600 text-sm font-semibold mb-1">Activities</p>
                  <p className="text-gray-900 font-bold">{previewGame.activities.length} fun activities</p>
                </div>
              </div>

{/* Action Buttons */}
              <div className="flex gap-3 pt-4">
<button
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setShowPreview(false);
                      setIsTransitioning(false);
                    }, 200);
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded-xl transition"
                >
                  Close
                </button>
                {previewGame.isPremium && !isPaid ? (
                  <button
                    onClick={() => navigate('/upgrade')}
                    className="flex-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition flex items-center justify-center gap-2"
                  >
                    <span>🔒 Upgrade to Premium</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowPreview(false);
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setSelectedGame(previewGame);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsTransitioning(false);
                      }, 200);
                    }}
                    className={`flex-2 bg-gradient-to-r ${previewGame.color} text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition flex items-center justify-center gap-2`}
                  >
                    <span>Explore Activities</span>
                    <ArrowLeft className="rotate-180" size={20} />
                  </button>
                )}
              </div>
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
          animation: fadeIn 0.2s ease-out;
        }
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
      `}</style>
    </div>
  );
};

export default GamePage;
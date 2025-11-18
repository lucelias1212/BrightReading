import React, { useState, useEffect } from 'react';
import { Volume2, Star, RotateCw, Sparkles } from 'lucide-react';

const WordFamilyGame = () => {
  const [selectedFamily, setSelectedFamily] = useState('-at');
  const [currentWord, setCurrentWord] = useState('cat');
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [gameMode, setGameMode] = useState('explore'); // 'explore' or 'challenge'
  const [challengeWord, setChallengeWord] = useState('');
  const [usedWords, setUsedWords] = useState(new Set());

  const wordFamilies = {
    '-at': {
      simple: ['bat', 'cat', 'fat', 'hat', 'mat', 'pat', 'rat', 'sat', 'vat'],
      blends: ['brat', 'chat', 'flat', 'scat', 'slat', 'spat', 'that']
    },
    '-an': {
      simple: ['ban', 'can', 'fan', 'man', 'pan', 'ran', 'tan', 'van'],
      blends: ['bran', 'clan', 'plan', 'scan', 'span', 'than']
    },
    '-ap': {
      simple: ['cap', 'gap', 'lap', 'map', 'nap', 'rap', 'sap', 'tap', 'zap'],
      blends: ['chap', 'clap', 'flap', 'scrap', 'slap', 'snap', 'strap', 'trap', 'wrap']
    }
  };

  const onsets = {
    '-at': ['b', 'c', 'f', 'h', 'm', 'p', 'r', 's', 'v', 'br', 'ch', 'fl', 'sc', 'sl', 'sp', 'th'],
    '-an': ['b', 'c', 'f', 'm', 'p', 'r', 't', 'v', 'br', 'cl', 'pl', 'sc', 'sp', 'th'],
    '-ap': ['c', 'g', 'l', 'm', 'n', 'r', 's', 't', 'z', 'ch', 'cl', 'fl', 'scr', 'sl', 'sn', 'str', 'tr', 'wr']
  };

  const allWords = [...wordFamilies[selectedFamily].simple, ...wordFamilies[selectedFamily].blends];

  useEffect(() => {
    if (gameMode === 'challenge' && !challengeWord) {
      generateChallenge();
    }
  }, [gameMode, selectedFamily]);

  const switchOnset = (newOnset) => {
    const newWord = newOnset + selectedFamily;
    setCurrentWord(newWord);
    
    if (allWords.includes(newWord)) {
      if (gameMode === 'explore') {
        celebrate();
      }
    }
  };

  const celebrate = () => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 1000);
  };

  const generateChallenge = () => {
    const availableWords = allWords.filter(w => !usedWords.has(w));
    if (availableWords.length === 0) {
      setUsedWords(new Set());
      return generateChallenge();
    }
    const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
    setChallengeWord(randomWord);
  };

  const checkAnswer = () => {
    if (currentWord === challengeWord) {
      setScore(score + 1);
      setUsedWords(new Set([...usedWords, currentWord]));
      celebrate();
      setTimeout(() => generateChallenge(), 1000);
    }
  };

  const resetGame = () => {
    setScore(0);
    setUsedWords(new Set());
    setCurrentWord(wordFamilies[selectedFamily].simple[0]);
    if (gameMode === 'challenge') {
      generateChallenge();
    }
  };

  const changeFamily = (family) => {
    setSelectedFamily(family);
    setCurrentWord(wordFamilies[family].simple[0]);
    setUsedWords(new Set());
    if (gameMode === 'challenge') {
      setChallengeWord('');
    }
  };

  const getCurrentOnset = () => {
    const family = currentWord.slice(-2);
    return currentWord.slice(0, -2);
  };

  const isRealWord = allWords.includes(currentWord);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-purple-800 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-500" />
            Word Family Switch Game!
            <Sparkles className="text-yellow-500" />
          </h1>
          <p className="text-lg text-purple-600">Change the beginning sound to make new words!</p>
        </div>

        {/* Game Mode Toggle */}
        <div className="flex gap-2 justify-center mb-6">
          <button
            onClick={() => setGameMode('explore')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              gameMode === 'explore'
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-purple-600 hover:bg-purple-50'
            }`}
          >
            🎨 Explore Mode
          </button>
          <button
            onClick={() => {
              setGameMode('challenge');
              resetGame();
            }}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              gameMode === 'challenge'
                ? 'bg-orange-600 text-white shadow-lg scale-105'
                : 'bg-white text-orange-600 hover:bg-orange-50'
            }`}
          >
            🏆 Challenge Mode
          </button>
        </div>

        {/* Family Selection */}
        <div className="flex gap-3 justify-center mb-8">
          {['-at', '-an', '-ap'].map(family => (
            <button
              key={family}
              onClick={() => changeFamily(family)}
              className={`px-8 py-4 rounded-xl font-bold text-xl transition-all ${
                selectedFamily === family
                  ? 'bg-blue-600 text-white shadow-lg scale-110'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              {family} Family
            </button>
          ))}
        </div>

        {/* Challenge Mode Target */}
        {gameMode === 'challenge' && challengeWord && (
          <div className="bg-yellow-100 border-4 border-yellow-400 rounded-xl p-6 mb-6 text-center">
            <p className="text-lg font-bold text-yellow-800 mb-2">Make this word:</p>
            <p className="text-5xl font-bold text-yellow-900">{challengeWord}</p>
            <p className="text-sm text-yellow-700 mt-2">Score: {score} 🌟</p>
          </div>
        )}

        {/* Current Word Display */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="bg-green-100 border-4 border-green-500 rounded-xl px-8 py-4">
                <span className="text-6xl font-bold text-green-700">{getCurrentOnset()}</span>
              </div>
              <span className="text-5xl font-bold text-gray-400">+</span>
              <div className="bg-blue-100 border-4 border-blue-500 rounded-xl px-8 py-4">
                <span className="text-6xl font-bold text-blue-700">{selectedFamily}</span>
              </div>
              <span className="text-5xl font-bold text-gray-400">=</span>
              <div className={`border-4 rounded-xl px-8 py-4 ${
                isRealWord ? 'bg-purple-100 border-purple-500' : 'bg-gray-100 border-gray-400'
              }`}>
                <span className={`text-6xl font-bold ${
                  isRealWord ? 'text-purple-700' : 'text-gray-500'
                }`}>
                  {currentWord}
                </span>
              </div>
            </div>
            
            {isRealWord ? (
              <div className="text-2xl font-bold text-green-600 flex items-center justify-center gap-2">
                <Star className="fill-green-600" />
                Real Word!
                <Star className="fill-green-600" />
              </div>
            ) : (
              <div className="text-xl font-bold text-gray-500">
                Not a real word... try another!
              </div>
            )}
          </div>

          {gameMode === 'challenge' && isRealWord && currentWord === challengeWord && (
            <button
              onClick={checkAnswer}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-2xl py-4 rounded-xl transition-all shadow-lg"
            >
              ✓ That's It! Next Word →
            </button>
          )}
        </div>

        {/* Onset Buttons */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Pick a Beginning Sound:
          </h3>
          
          <div className="mb-6">
            <p className="text-lg font-bold text-blue-600 mb-2">Simple Sounds:</p>
            <div className="grid grid-cols-6 gap-2">
              {onsets[selectedFamily].filter(o => o.length === 1).map(onset => (
                <button
                  key={onset}
                  onClick={() => switchOnset(onset)}
                  className={`py-4 rounded-lg font-bold text-2xl transition-all ${
                    getCurrentOnset() === onset
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
                >
                  {onset}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-bold text-orange-600 mb-2">Blend Sounds:</p>
            <div className="grid grid-cols-6 gap-2">
              {onsets[selectedFamily].filter(o => o.length > 1).map(onset => (
                <button
                  key={onset}
                  onClick={() => switchOnset(onset)}
                  className={`py-4 rounded-lg font-bold text-xl transition-all ${
                    getCurrentOnset() === onset
                      ? 'bg-orange-600 text-white shadow-lg scale-105'
                      : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                  }`}
                >
                  {onset}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <div className="text-center mt-6">
          <button
            onClick={resetGame}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 mx-auto transition-all"
          >
            <RotateCw size={20} />
            Reset Game
          </button>
        </div>

        {/* Celebration Animation */}
        {showCelebration && (
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-9xl animate-bounce">
              🎉
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-purple-800 mb-3">How to Play:</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>🎨 Explore Mode:</strong> Click different beginning sounds to make words. See which ones are real!</li>
            <li><strong>🏆 Challenge Mode:</strong> Try to make the target word by picking the right beginning sound.</li>
            <li><strong>👨‍👩‍👧‍👦 Parent Tip:</strong> Notice how the ending ({selectedFamily}) stays the same? Only the beginning changes! This is word family magic!</li>
            <li><strong>🌟 Learning Goal:</strong> Children learn that changing ONE sound creates a NEW word - this is called onset substitution!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordFamilyGame;
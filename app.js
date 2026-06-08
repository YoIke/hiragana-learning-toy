// Hiragana Data (Clean Seion - no voiced/semi-voiced consonants like 濁点/半濁点 in words)
// Layout: 5 columns (あ, い, う, え, お) x 10 rows (あ, か, さ, た, な, は, ま, や, ら,わ)
const hiraganaData = [
    // Row 0: あ行
    { char: 'あ', word: 'あり', emoji: '🐜', row: 'a-row', rowIdx: 0, col: 0 },
    { char: 'い', word: 'いぬ', emoji: '🐶', row: 'a-row', rowIdx: 0, col: 1 },
    { char: 'う', word: 'うし', emoji: '🐂', row: 'a-row', rowIdx: 0, col: 2 },
    { char: 'え', word: 'えほん', emoji: '📖', row: 'a-row', rowIdx: 0, col: 3 },
    { char: 'お', word: 'おうち', emoji: '🏠', row: 'a-row', rowIdx: 0, col: 4 },

    // Row 1: か行
    { char: 'か', word: 'かめ', emoji: '🐢', row: 'ka-row', rowIdx: 1, col: 0 },
    { char: 'き', word: 'きつね', emoji: '🦊', row: 'ka-row', rowIdx: 1, col: 1 },
    { char: 'く', word: 'くるま', emoji: '🚗', row: 'ka-row', rowIdx: 1, col: 2 },
    { char: 'け', word: 'けむし', emoji: '🐛', row: 'ka-row', rowIdx: 1, col: 3 },
    { char: 'こ', word: 'こあら', emoji: '🐨', row: 'ka-row', rowIdx: 1, col: 4 },

    // Row 2: さ行
    { char: 'さ', word: 'さかな', emoji: '🐟', row: 'sa-row', rowIdx: 2, col: 0 },
    { char: 'し', word: 'しか', emoji: '🦌', row: 'sa-row', rowIdx: 2, col: 1 },
    { char: 'す', word: 'すいか', emoji: '🍉', row: 'sa-row', rowIdx: 2, col: 2 },
    { char: 'せ', word: 'せっけん', emoji: '🧼', row: 'sa-row', rowIdx: 2, col: 3 },
    { char: 'そ', word: 'そら', emoji: '🌤️', row: 'sa-row', rowIdx: 2, col: 4 },

    // Row 3: た行
    { char: 'た', word: 'たこ', emoji: '🐙', row: 'ta-row', rowIdx: 3, col: 0 },
    { char: 'ち', word: 'ちりとり', emoji: '🧹', row: 'ta-row', rowIdx: 3, col: 1 },
    { char: 'つ', word: 'つみき', emoji: '🧱', row: 'ta-row', rowIdx: 3, col: 2 },
    { char: 'て', word: 'てんと', emoji: '🎪', row: 'ta-row', rowIdx: 3, col: 3 },
    { char: 'と', word: 'とまと', emoji: '🍅', row: 'ta-row', rowIdx: 3, col: 4 },

    // Row 4: な行
    { char: 'な', word: 'なす', emoji: '🍆', row: 'na-row', rowIdx: 4, col: 0 },
    { char: 'に', word: 'にわとり', emoji: '🐔', row: 'na-row', rowIdx: 4, col: 1 },
    { char: 'ぬ', word: 'ぬりえ', emoji: '🎨', row: 'na-row', col: 4, col: 2 },
    { char: 'ね', word: 'ねこ', emoji: '🐱', row: 'na-row', col: 4, col: 3 },
    { char: 'の', word: 'のりもの', emoji: '🚗', row: 'na-row', col: 4, col: 4 },

    // Row 5: は行
    { char: 'は', word: 'はな', emoji: '🌸', row: 'ha-row', rowIdx: 5, col: 0 },
    { char: 'ひ', word: 'ひこうき', emoji: '✈️', row: 'ha-row', rowIdx: 5, col: 1 },
    { char: 'ふ', word: 'ふうせん', emoji: '🎈', row: 'ha-row', rowIdx: 5, col: 2 },
    { char: 'へ', word: 'へや', emoji: '🚪', row: 'ha-row', rowIdx: 5, col: 3 },
    { char: 'ほ', word: 'ほし', emoji: '⭐', row: 'ha-row', rowIdx: 5, col: 4 },

    // Row 6: ま行
    { char: 'ま', word: 'まくら', emoji: '🛌', row: 'ma-row', rowIdx: 6, col: 0 },
    { char: 'み', word: 'みかん', emoji: '🍊', row: 'ma-row', rowIdx: 6, col: 1 },
    { char: 'む', word: 'むし', emoji: '🐛', row: 'ma-row', rowIdx: 6, col: 2 },
    { char: 'め', word: 'めろん', emoji: '🍈', row: 'ma-row', rowIdx: 6, col: 3 },
    { char: 'も', word: 'もも', emoji: '🍑', row: 'ma-row', rowIdx: 6, col: 4 },

    // Row 7: や行
    { char: 'や', word: 'やま', emoji: '⛰️', row: 'ya-row', rowIdx: 7, col: 0 },
    { char: null, word: null, emoji: null, row: 'ya-row', rowIdx: 7, col: 1 },
    { char: 'ゆ', word: 'ゆき', emoji: '❄️', row: 'ya-row', rowIdx: 7, col: 2 },
    { char: null, word: null, emoji: null, row: 'ya-row', rowIdx: 7, col: 3 },
    { char: 'よ', word: 'よっと', emoji: '⛵', row: 'ya-row', rowIdx: 7, col: 4 },

    // Row 8: ら行
    { char: 'ら', word: 'らいおん', emoji: '🦁', row: 'ra-row', rowIdx: 8, col: 0 },
    { char: 'り', word: 'りす', emoji: '🐿️', row: 'ra-row', rowIdx: 8, col: 1 },
    { char: 'る', word: 'るす', emoji: '🏠', row: 'ra-row', rowIdx: 8, col: 2 },
    { char: 'れ', word: 'れもん', emoji: '🍋', row: 'ra-row', rowIdx: 8, col: 3 },
    { char: 'ろ', word: 'ろけっと', emoji: '🚀', row: 'ra-row', rowIdx: 8, col: 4 },

    // Row 9: わ行
    { char: 'わ', word: 'わに', emoji: '🐊', row: 'wa-row', rowIdx: 9, col: 0 },
    { char: null, word: null, emoji: null, row: 'wa-row', rowIdx: 9, col: 1 },
    { char: null, word: null, emoji: null, row: 'wa-row', rowIdx: 9, col: 2 },
    { char: 'を', word: 'ほんをよむ', emoji: '📖', row: 'wa-row', rowIdx: 9, col: 3 },
    { char: 'ん', word: 'めろん', emoji: '🍈', row: 'wa-row', rowIdx: 9, col: 4 }
];

// App State
let currentMode = 'chart'; 
let speechVoice = null;
let audioContext = null;

// Quiz State
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let selectedLetters = [];
let currentLevel = 'medium'; 

// DOM Elements
const btnChartMode = document.getElementById('btn-chart-mode');
const btnQuizMode = document.getElementById('btn-quiz-mode');
const chartView = document.getElementById('chart-view');
const quizView = document.getElementById('quiz-view');
const hiraganaGrid = document.getElementById('hiragana-grid');
const detailModal = document.getElementById('detail-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const modalLargeLetter = document.getElementById('modal-large-letter');
const modalIllustration = document.getElementById('modal-illustration');
const modalWord = document.getElementById('modal-word');
const btnModalVoice = document.getElementById('btn-modal-voice');
const celebrationOverlay = document.getElementById('celebration-overlay');

// Quiz View Panels
const levelSelectorContainer = document.getElementById('level-selector-container');
const quizPlayArea = document.getElementById('quiz-play-area');
const quizResultArea = document.getElementById('quiz-result-area');

// Web Audio API Synthesizer
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSound(type) {
    initAudio();
    if (!audioContext) return;
    
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    
    const now = audioContext.currentTime;

    if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.08);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
    } else if (type === 'correct') {
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.45);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.6);
        
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
        
        osc.start(now);
        osc.stop(now + 0.6);
    } else if (type === 'incorrect') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(120, now + 0.2);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
    } else if (type === 'fanfare') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
            const chordOsc = audioContext.createOscillator();
            const chordGain = audioContext.createGain();
            chordOsc.connect(chordGain);
            chordGain.connect(audioContext.destination);
            
            chordOsc.type = 'triangle';
            chordOsc.frequency.setValueAtTime(freq, now + i * 0.08);
            chordGain.gain.setValueAtTime(0.08, now + i * 0.08);
            chordGain.gain.linearRampToValueAtTime(0.08, now + 0.6 + i * 0.08);
            chordGain.gain.linearRampToValueAtTime(0.001, now + 1.2 + i * 0.08);
            
            chordOsc.start(now + i * 0.08);
            chordOsc.stop(now + 1.5 + i * 0.08);
        });
    }
}

// Text to Speech
function initSpeech() {
    if ('speechSynthesis' in window) {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            speechVoice = voices.find(voice => voice.lang === 'ja-JP' || voice.lang.startsWith('ja'));
        };
        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
    }
}

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        if (speechVoice) {
            utterance.voice = speechVoice;
        }
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        utterance.pitch = 1.25; 
        
        window.speechSynthesis.speak(utterance);
    }
}

// 1. Hiragana Chart Renderer (5 cols x 10 rows layout)
function setupHiraganaGrid() {
    hiraganaGrid.innerHTML = '';
    
    for (let r = 0; r < 10; r++) {
        for (let c = 0; c < 5; c++) {
            const cell = hiraganaData.find(item => item.rowIdx === r && item.col === c);
            
            if (cell && cell.char) {
                const button = document.createElement('button');
                button.className = `letter-btn ${cell.row}`;
                button.innerHTML = `
                    ${cell.char}
                    <span class="btn-thumbnail">${cell.emoji || ''}</span>
                `;
                button.addEventListener('click', () => {
                    playSound('click');
                    showDetailModal(cell);
                });
                hiraganaGrid.appendChild(button);
            } else {
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'empty-slot';
                hiraganaGrid.appendChild(emptyDiv);
            }
        }
    }
}

// Modal
let currentModalItem = null;
function showDetailModal(item) {
    currentModalItem = item;
    modalLargeLetter.textContent = item.char;
    modalIllustration.textContent = item.emoji;
    modalWord.textContent = item.word;
    
    setTimeout(() => {
        if (item.char === 'を') {
            speakText(`${item.char}。 ほんをよむ の、 ${item.char}`);
        } else if (item.char === 'ん') {
            speakText(`${item.char}。 めろん の、 ${item.char}`);
        } else {
            speakText(`${item.char}！ ${item.word}！`);
        }
    }, 100);

    detailModal.classList.add('active');
    detailModal.setAttribute('aria-hidden', 'false');
}

function hideDetailModal() {
    detailModal.classList.remove('active');
    detailModal.setAttribute('aria-hidden', 'true');
    playSound('click');
}

// 2. Word Quiz Logic
function selectLevel(level) {
    currentLevel = level;
    
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.level-btn.${level}`).classList.add('active');
    
    playSound('click');
    startQuiz();
}

function startQuiz() {
    const playablePool = hiraganaData.filter(item => item.char && item.char !== 'を' && item.char !== 'ん' && item.word);
    
    let filteredPool = [];
    if (currentLevel === 'easy') {
        filteredPool = playablePool.filter(item => item.word.length === 2);
    } else if (currentLevel === 'medium') {
        filteredPool = playablePool.filter(item => item.word.length === 3);
    } else {
        filteredPool = playablePool.filter(item => item.word.length >= 4);
    }

    const shuffled = [...filteredPool].sort(() => 0.5 - Math.random());
    quizQuestions = shuffled.slice(0, 5);
    
    if (quizQuestions.length < 5) {
        const remainingCount = 5 - quizQuestions.length;
        const extraPool = playablePool.filter(item => !quizQuestions.includes(item));
        const extraShuffled = extraPool.sort(() => 0.5 - Math.random()).slice(0, remainingCount);
        quizQuestions = [...quizQuestions, ...extraShuffled];
    }

    currentQuestionIndex = 0;
    quizScore = 0;
    
    levelSelectorContainer.classList.add('hidden');
    quizPlayArea.classList.remove('hidden');
    quizResultArea.classList.add('hidden');
    
    updateScoreStars();
    loadQuizQuestion();
}

function updateScoreStars() {
    const starsContainer = document.getElementById('quiz-score-stars');
    starsContainer.innerHTML = '';
    for (let i = 0; i < quizScore; i++) {
        const star = document.createElement('span');
        star.className = 'quiz-score-star';
        star.textContent = '💮';
        starsContainer.appendChild(star);
    }
}

function loadQuizQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('quiz-current-num').textContent = currentQuestionIndex + 1;
    document.getElementById('quiz-total-num').textContent = quizQuestions.length;
    
    const hintImage = document.getElementById('quiz-hint-image');
    hintImage.textContent = question.emoji;

    const slotsContainer = document.getElementById('quiz-answer-slots');
    slotsContainer.innerHTML = '';
    selectedLetters = [];

    const targetWord = question.word;
    const targetLetters = Array.from(targetWord);

    targetLetters.forEach(() => {
        const slot = document.createElement('div');
        slot.className = 'slot-letter';
        slotsContainer.appendChild(slot);
    });

    const choicesContainer = document.getElementById('quiz-choices');
    choicesContainer.innerHTML = '';

    const shuffledLetters = [...targetLetters].sort(() => 0.5 - Math.random());
    
    shuffledLetters.forEach((letter, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = letter;
        btn.dataset.letter = letter;
        btn.dataset.index = index;
        
        btn.addEventListener('click', () => {
            handleChoiceClick(btn, letter, targetLetters);
        });
        choicesContainer.appendChild(btn);
    });

    speakText('これ なぁに？');
}

function handleChoiceClick(button, clickedLetter, targetLetters) {
    const currentSlotIndex = selectedLetters.length;
    const expectedLetter = targetLetters[currentSlotIndex];

    speakText(clickedLetter);

    if (clickedLetter === expectedLetter) {
        playSound('click');
        selectedLetters.push(clickedLetter);
        button.classList.add('used');

        const slots = document.querySelectorAll('#quiz-answer-slots .slot-letter');
        if (slots[currentSlotIndex]) {
            slots[currentSlotIndex].textContent = clickedLetter;
            slots[currentSlotIndex].classList.add('filled');
        }

        if (selectedLetters.length === targetLetters.length) {
            setTimeout(handleWordCorrect, 450);
        }
    } else {
        setTimeout(() => {
            playSound('incorrect');
            speakText('ちがうよー、もういっかいおしてみてね！');
            
            const card = document.getElementById('quiz-card');
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = 'shake 0.4s ease-in-out';
        }, 300);
    }
}

// Injected styling for card shake feedback
const styleEl = document.createElement('style');
styleEl.textContent = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px) rotate(-1deg); }
    75% { transform: translateX(8px) rotate(1deg); }
}
`;
document.head.appendChild(styleEl);

function handleWordCorrect() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    quizScore++;
    updateScoreStars();
    
    playSound('correct');
    celebrationOverlay.classList.add('active');
    
    speakText(`せいかい！ ${currentQuestion.word}！ すごいね！`);

    setTimeout(() => {
        celebrationOverlay.classList.remove('active');
        currentQuestionIndex++;
        loadQuizQuestion();
    }, 2000);
}

function showQuizResults() {
    quizPlayArea.classList.add('hidden');
    quizResultArea.classList.remove('hidden');
    
    const resultStars = document.getElementById('result-stars-display');
    resultStars.innerHTML = '';
    for (let i = 0; i < quizScore; i++) {
        resultStars.innerHTML += '💮';
    }
    
    playSound('fanfare');
    speakText('ぜんぶできた！すごいすごーい！たいへんよくできました！');
}

function switchMode(mode) {
    currentMode = mode;
    playSound('click');

    if (mode === 'chart') {
        btnChartMode.classList.add('active');
        btnChartMode.setAttribute('aria-checked', 'true');
        btnQuizMode.classList.remove('active');
        btnQuizMode.setAttribute('aria-checked', 'false');
        
        chartView.classList.add('active');
        quizView.classList.remove('active');
    } else {
        btnQuizMode.classList.add('active');
        btnQuizMode.setAttribute('aria-checked', 'true');
        btnChartMode.classList.remove('active');
        btnChartMode.setAttribute('aria-checked', 'false');
        
        quizView.classList.add('active');
        chartView.classList.remove('active');
        
        levelSelectorContainer.classList.remove('hidden');
        quizPlayArea.classList.add('hidden');
        quizResultArea.classList.add('hidden');
    }
}

// Event Listeners
function initApp() {
    setupHiraganaGrid();
    initSpeech();

    btnChartMode.addEventListener('click', () => switchMode('chart'));
    btnQuizMode.addEventListener('click', () => switchMode('quiz'));

    btnCloseModal.addEventListener('click', hideDetailModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) hideDetailModal();
    });

    btnModalVoice.addEventListener('click', () => {
        if (currentModalItem) {
            playSound('click');
            speakText(currentModalItem.word);
        }
    });

    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;
            selectLevel(level);
        });
    });

    document.getElementById('btn-back-to-levels').addEventListener('click', () => {
        playSound('click');
        levelSelectorContainer.classList.remove('hidden');
        quizPlayArea.classList.add('hidden');
    });

    document.getElementById('btn-reset-quiz').addEventListener('click', () => {
        playSound('click');
        loadQuizQuestion();
    });

    document.getElementById('btn-restart-game').addEventListener('click', () => {
        playSound('click');
        levelSelectorContainer.classList.remove('hidden');
        quizResultArea.classList.add('hidden');
    });
}

// Safe app boot selector
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

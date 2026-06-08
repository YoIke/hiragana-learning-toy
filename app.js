// Hiragana Data (Only clean Seion - no voiced consonants like 濁点/半濁点 in the vocabulary words)
const hiraganaData = [
    // Column 0: あ行
    { char: 'あ', word: 'あり', emoji: '🐜', row: 'a-row', col: 0, rowIdx: 0 },
    { char: 'い', word: 'いぬ', emoji: '🐶', row: 'a-row', col: 0, rowIdx: 1 },
    { char: 'う', word: 'うし', emoji: '🐂', row: 'a-row', col: 0, rowIdx: 2 },
    { char: 'え', word: 'えほん', emoji: '📖', row: 'a-row', col: 0, rowIdx: 3 },
    { char: 'お', word: 'おうち', emoji: '🏠', row: 'a-row', col: 0, rowIdx: 4 },

    // Column 1: か行
    { char: 'か', word: 'かめ', emoji: '🐢', row: 'ka-row', col: 1, rowIdx: 0 },
    { char: 'き', word: 'きつね', emoji: '🦊', row: 'ka-row', col: 1, rowIdx: 1 },
    { char: 'く', word: 'くるま', emoji: '🚗', row: 'ka-row', col: 1, rowIdx: 2 },
    { char: 'け', word: 'けむし', emoji: '🐛', row: 'ka-row', col: 1, rowIdx: 3 },
    { char: 'こ', word: 'こあら', emoji: '🐨', row: 'ka-row', col: 1, rowIdx: 4 },

    // Column 2: さ行
    { char: 'さ', word: 'さかな', emoji: '🐟', row: 'sa-row', col: 2, rowIdx: 0 },
    { char: 'し', word: 'しか', emoji: '🦌', row: 'sa-row', col: 2, rowIdx: 1 },
    { char: 'す', word: 'すいか', emoji: '🍉', row: 'sa-row', col: 2, rowIdx: 2 },
    { char: 'せ', word: 'せっけん', emoji: '🧼', row: 'sa-row', col: 2, rowIdx: 3 },
    { char: 'そ', word: 'そら', emoji: '🌤️', row: 'sa-row', col: 2, rowIdx: 4 },

    // Column 3: た行
    { char: 'た', word: 'たこ', emoji: '🐙', row: 'ta-row', col: 3, rowIdx: 0 },
    { char: 'ち', word: 'ちりとり', emoji: '🧹', row: 'ta-row', col: 3, rowIdx: 1 },
    { char: 'つ', word: 'つみき', emoji: '🧱', row: 'ta-row', col: 3, rowIdx: 2 },
    { char: 'て', word: 'てんと', emoji: '🎪', row: 'ta-row', col: 3, rowIdx: 3 },
    { char: 'と', word: 'とまと', emoji: '🍅', row: 'ta-row', col: 3, rowIdx: 4 },

    // Column 4: な行
    { char: 'な', word: 'なす', emoji: '🍆', row: 'na-row', col: 4, rowIdx: 0 },
    { char: 'に', word: 'にわとり', emoji: '🐔', row: 'na-row', col: 4, rowIdx: 1 },
    { char: 'ぬ', word: 'ぬりえ', emoji: '🎨', row: 'na-row', col: 4, rowIdx: 2 },
    { char: 'ね', word: 'ねこ', emoji: '🐱', row: 'na-row', col: 4, rowIdx: 3 },
    { char: 'の', word: 'のりもの', emoji: '🚗', row: 'na-row', col: 4, rowIdx: 4 },

    // Column 5: は行
    { char: 'は', word: 'はな', emoji: '🌸', row: 'ha-row', col: 5, rowIdx: 0 },
    { char: 'ひ', word: 'ひこうき', emoji: '✈️', row: 'ha-row', col: 5, rowIdx: 1 },
    { char: 'ふ', word: 'ふうせん', emoji: '🎈', row: 'ha-row', col: 5, rowIdx: 2 },
    { char: 'へ', word: 'へや', emoji: '🚪', row: 'ha-row', col: 5, rowIdx: 3 },
    { char: 'ほ', word: 'ほし', emoji: '⭐', row: 'ha-row', col: 5, rowIdx: 4 },

    // Column 6: ま行
    { char: 'ま', word: 'まくら', emoji: '🛌', row: 'ma-row', col: 6, rowIdx: 0 },
    { char: 'み', word: 'みかん', emoji: '🍊', row: 'ma-row', col: 6, rowIdx: 1 },
    { char: 'む', word: 'むし', emoji: '🐛', row: 'ma-row', col: 6, rowIdx: 2 },
    { char: 'め', word: 'めろん', emoji: '🍈', row: 'ma-row', col: 6, rowIdx: 3 },
    { char: 'も', word: 'もも', emoji: '🍑', row: 'ma-row', col: 6, rowIdx: 4 },

    // Column 7: や行
    { char: 'や', word: 'やま', emoji: '⛰️', row: 'ya-row', col: 7, rowIdx: 0 },
    { char: null, word: null, emoji: null, row: 'ya-row', col: 7, rowIdx: 1 },
    { char: 'ゆ', word: 'ゆき', emoji: '❄️', row: 'ya-row', col: 7, rowIdx: 2 },
    { char: null, word: null, emoji: null, row: 'ya-row', col: 7, rowIdx: 3 },
    { char: 'よ', word: 'よっと', emoji: '⛵', row: 'ya-row', col: 7, rowIdx: 4 },

    // Column 8: ら行
    { char: 'ら', word: 'らいおん', emoji: '🦁', row: 'ra-row', col: 8, rowIdx: 0 },
    { char: 'り', word: 'りす', emoji: '🐿️', row: 'ra-row', col: 8, rowIdx: 1 },
    { char: 'る', word: 'るす', emoji: '🏠', row: 'ra-row', col: 8, rowIdx: 2 },
    { char: 'れ', word: 'れもん', emoji: '🍋', row: 'ra-row', col: 8, rowIdx: 3 },
    { char: 'ろ', word: 'ろけっと', emoji: '🚀', row: 'ra-row', col: 8, rowIdx: 4 },

    // Column 9: わ行
    { char: 'わ', word: 'わに', emoji: '🐊', row: 'wa-row', col: 9, rowIdx: 0 },
    { char: null, word: null, emoji: null, row: 'wa-row', col: 9, rowIdx: 1 },
    { char: null, word: null, emoji: null, row: 'wa-row', col: 9, rowIdx: 2 },
    { char: 'を', word: 'ほんをよむ', emoji: '📖', row: 'wa-row', col: 9, rowIdx: 3 },
    { char: 'ん', word: 'めろん', emoji: '🍈', row: 'wa-row', col: 9, rowIdx: 4 }
];

// App State
let currentMode = 'chart'; // 'chart' or 'quiz'
let speechVoice = null;
let audioContext = null;

// Quiz State
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let selectedLetters = [];

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

// Sound Effects Synthesizer (Web Audio API)
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
        // Soft pop sound
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.1);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
    } else if (type === 'correct') {
        // Happy chime: C5 then G5 then C6
        osc.type = 'triangle';
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.4);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.6);
        
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(783.99, now + 0.12); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
        
        osc.start(now);
        osc.stop(now + 0.6);
    } else if (type === 'incorrect') {
        // Low buzzer sound
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(130, now); // C3
        osc.frequency.linearRampToValueAtTime(110, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
    }
}

// Text to Speech Wrapper
function initSpeech() {
    if ('speechSynthesis' in window) {
        // Load voice list
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            // Look for a Japanese voice
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
        // Cancel ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        if (speechVoice) {
            utterance.voice = speechVoice;
        }
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85; // Slightly slower for kids
        utterance.pitch = 1.25; // Slightly higher/cuter pitch
        
        window.speechSynthesis.speak(utterance);
    }
}

// 1. Initialize Hiragana Chart Grid
function setupHiraganaGrid() {
    // Clear grid
    hiraganaGrid.innerHTML = '';

    // We have a 5 rows x 10 cols grid layout
    // Grid cells will be filled col-by-col or row-by-row.
    // In CSS grid, items are populated row-by-row: (row0, col0), (row0, col1)...
    // We want:
    // row 0: あ か さ た な は ま や ら わ
    // row 1: い き し ち に ひ み 空 り 空
    // row 2: う く す つ ぬ ふ む ゆ る 空
    // row 3: え け せ て ね へ め 空 れ を
    // row 4: お こ そ と の ほ も よ ろ ん
    
    // We map rowIdx (0-4) and col (0-9) to locate the right item
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 10; c++) {
            // Find data representing this grid cell
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

// Modal handling
let currentModalItem = null;
function showDetailModal(item) {
    currentModalItem = item;
    modalLargeLetter.textContent = item.char;
    modalIllustration.textContent = item.emoji;
    modalWord.textContent = item.word;
    
    // Auto-speak on modal open
    setTimeout(() => {
        // Read: "あ！ あり！"
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
function setupQuizMode() {
    // Generate pool of words (excluding 'を' and 'ん' as standalone questions since they don't start words)
    const quizPool = hiraganaData.filter(item => item.char && item.char !== 'を' && item.char !== 'ん');
    
    // Shuffle and pick 5 questions
    const shuffled = [...quizPool].sort(() => 0.5 - Math.random());
    quizQuestions = shuffled.slice(0, 5);
    
    currentQuestionIndex = 0;
    quizScore = 0;
    
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
        // Quiz Complete!
        speakText('ぜんぶできた！すごいすごーい！');
        alert('🎉 ぜんぶ できたよ！ よくがんばったね！');
        setupQuizMode();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('quiz-current-num').textContent = currentQuestionIndex + 1;
    document.getElementById('quiz-total-num').textContent = quizQuestions.length;
    
    // Set hint image
    const hintImage = document.getElementById('quiz-hint-image');
    hintImage.textContent = question.emoji;

    // Reset slot area
    const slotsContainer = document.getElementById('quiz-answer-slots');
    slotsContainer.innerHTML = '';
    selectedLetters = [];

    // The target word (e.g. "あり" -> ['あ', 'り'])
    const targetWord = question.word;
    const targetLetters = Array.from(targetWord);

    // Create empty slots
    targetLetters.forEach(() => {
        const slot = document.createElement('div');
        slot.className = 'slot-letter';
        slotsContainer.appendChild(slot);
    });

    // Create shuffled choices
    const choicesContainer = document.getElementById('quiz-choices');
    choicesContainer.innerHTML = '';

    // Shuffle letters of the word
    const shuffledLetters = [...targetLetters].sort(() => 0.5 - Math.random());
    
    // Make choice buttons
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

    // Speak prompt: "これなあに？"
    speakText('これ なぁに？');
}

function handleChoiceClick(button, clickedLetter, targetLetters) {
    const currentSlotIndex = selectedLetters.length;
    const expectedLetter = targetLetters[currentSlotIndex];

    if (clickedLetter === expectedLetter) {
        // Correct Choice
        playSound('click');
        selectedLetters.push(clickedLetter);
        button.classList.add('used');

        // Fill slot
        const slots = document.querySelectorAll('#quiz-answer-slots .slot-letter');
        if (slots[currentSlotIndex]) {
            slots[currentSlotIndex].textContent = clickedLetter;
            slots[currentSlotIndex].classList.add('filled');
        }

        // Check if word is complete
        if (selectedLetters.length === targetLetters.length) {
            handleWordCorrect();
        }
    } else {
        // Wrong Choice
        playSound('incorrect');
        speakText('ちがうよー、もういっかいおしてみてね！');
        
        // Shake animation for incorrect feedback
        const card = document.getElementById('quiz-card');
        card.style.animation = 'none';
        card.offsetHeight; // trigger reflow
        card.style.animation = 'shake 0.4s ease-in-out';
    }
}

// Simple shake animation injection (safeguard in case not fully defined in CSS)
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
    
    // Play correct chime
    playSound('correct');

    // Show celebration overlay
    celebrationOverlay.classList.add('active');
    
    // Speak word
    speakText(`せいかい！ ${currentQuestion.word}！ すごいね！`);

    // Wait and advance
    setTimeout(() => {
        celebrationOverlay.classList.remove('active');
        currentQuestionIndex++;
        loadQuizQuestion();
    }, 2000);
}

// Mode Switching Controller
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
        
        setupQuizMode();
    }
}

// Event Listeners Setup
function initApp() {
    setupHiraganaGrid();
    initSpeech();

    // Mode Switch events
    btnChartMode.addEventListener('click', () => switchMode('chart'));
    btnQuizMode.addEventListener('click', () => switchMode('quiz'));

    // Modal Close event
    btnCloseModal.addEventListener('click', hideDetailModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) hideDetailModal();
    });

    // Modal Voice repeat
    btnModalVoice.addEventListener('click', () => {
        if (currentModalItem) {
            playSound('click');
            speakText(currentModalItem.word);
        }
    });

    // Quiz controls
    document.getElementById('btn-skip-quiz').addEventListener('click', () => {
        playSound('click');
        currentQuestionIndex++;
        loadQuizQuestion();
    });

    document.getElementById('btn-reset-quiz').addEventListener('click', () => {
        playSound('click');
        loadQuizQuestion();
    });
}

// Start application
window.addEventListener('DOMContentLoaded', initApp);

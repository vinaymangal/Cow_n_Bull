document.addEventListener('DOMContentLoaded', () => {
    // Game State
    let secretCode = [];
    let currentInput = [];
    let isGameOver = false;

    // DOM Elements
    const currentInputDisplay = document.getElementById('current-input');
    const digitBoxes = currentInputDisplay.querySelectorAll('.digit-box');
    const gameBoard = document.getElementById('game-board');
    const keys = document.querySelectorAll('.key');
    const resetBtn = document.getElementById('reset-btn');
    const rulesBtn = document.getElementById('rules-btn');
    const rulesModal = document.getElementById('rules-modal');
    const closeRulesBtn = rulesModal.querySelector('.close-btn');
    const gameOverModal = document.getElementById('game-over-modal');
    const restartBtn = document.getElementById('restart-btn');
    const secretCodeDisplay = document.getElementById('secret-code-display');
    const gameOverTitle = document.getElementById('game-over-title');
    const gameOverMsg = document.getElementById('game-over-msg');

    // Initialization
    initGame();

    // --- Core Game Logic ---

    function initGame() {
        secretCode = generateSecretCode();
        currentInput = [];
        isGameOver = false;
        gameBoard.innerHTML = `
            <div class="empty-state">
                <p>Crack the 4-digit code.</p>
                <p>Unique numbers. No duplicates.</p>
            </div>
        `;
        updateInputDisplay();
        gameOverModal.classList.add('hidden');
        console.log("Secret Code (for debugging):", secretCode.join(''));
    }

    function generateSecretCode() {
        const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const code = [];

        // Shuffle and pick first 4
        for (let i = digits.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [digits[i], digits[j]] = [digits[j], digits[i]];
        }

        return digits.slice(0, 4);
    }

    function handleKeyInput(key) {
        if (isGameOver) return;

        if (key === 'C') {
            currentInput.pop();
        } else if (key === 'GO') {
            submitGuess();
        } else {
            // Number input
            if (currentInput.length < 4) {
                // Check for duplicates in current input
                const num = parseInt(key);
                if (!currentInput.includes(num)) {
                    currentInput.push(num);
                } else {
                    shakeInput(); // Feedback for duplicate
                }
            } else {
                shakeInput(); // Feedback for full
            }
        }
        updateInputDisplay();
    }

    function submitGuess() {
        if (currentInput.length !== 4) {
            shakeInput();
            return;
        }

        const guess = [...currentInput];
        const { bulls, cows } = calculateBullsAndCows(guess);

        renderGuess(guess, bulls, cows);
        currentInput = [];
        updateInputDisplay();

        // Check Win Condition
        if (bulls === 4) {
            handleWin();
        }

        // Scroll to bottom
        gameBoard.scrollTop = gameBoard.scrollHeight;
    }

    function calculateBullsAndCows(guess) {
        let bulls = 0;
        let cows = 0;

        guess.forEach((digit, index) => {
            if (digit === secretCode[index]) {
                bulls++;
            } else if (secretCode.includes(digit)) {
                cows++;
            }
        });

        return { bulls, cows };
    }

    // --- UI Functions ---

    function updateInputDisplay() {
        digitBoxes.forEach((box, index) => {
            if (index < currentInput.length) {
                box.textContent = currentInput[index];
                box.classList.add('filled');
            } else {
                box.textContent = '';
                box.classList.remove('filled');
            }
        });
    }

    function renderGuess(guess, bulls, cows) {
        // Remove empty state if it exists
        const emptyState = gameBoard.querySelector('.empty-state');
        if (emptyState) {
            emptyState.remove();
        }

        const row = document.createElement('div');
        row.className = 'guess-row';
        row.innerHTML = `
            <div class="guess-nums">${guess.join('')}</div>
            <div class="guess-feedback">
                <span class="bulls">${bulls} B</span>
                <span class="cows">${cows} C</span>
            </div>
        `;
        gameBoard.appendChild(row);
    }

    function shakeInput() {
        currentInputDisplay.classList.add('shake');
        setTimeout(() => {
            currentInputDisplay.classList.remove('shake');
        }, 400);
    }

    function handleWin() {
        isGameOver = true;
        setTimeout(() => {
            secretCodeDisplay.textContent = secretCode.join('');
            gameOverTitle.textContent = "VICTORY!";
            gameOverMsg.textContent = `You cracked the code in ${gameBoard.children.length} attempts!`;
            gameOverModal.classList.remove('hidden');
            triggerConfetti();
        }, 500);
    }

    // --- Event Listeners ---

    // Keypad clicks
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const val = key.getAttribute('data-num') || (key.id === 'clear-btn' ? 'C' : 'GO');
            handleKeyInput(val);
        });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (isGameOver) return;

        if (e.key >= '0' && e.key <= '9') {
            handleKeyInput(e.key);
        } else if (e.key === 'Backspace') {
            handleKeyInput('C');
        } else if (e.key === 'Enter') {
            handleKeyInput('GO');
        }
    });

    // Modals
    resetBtn.addEventListener('click', initGame);
    rulesBtn.addEventListener('click', () => rulesModal.classList.remove('hidden'));
    closeRulesBtn.addEventListener('click', () => rulesModal.classList.add('hidden'));
    restartBtn.addEventListener('click', initGame);

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === rulesModal) {
            rulesModal.classList.add('hidden');
        }
    });
});

function triggerConfetti() {
    // Simple confetti effect using CSS/JS or just a placeholder for now
    // For a truly sleek effect without external libraries, we can spawn some particles
    const colors = ['#00f3ff', '#ff00ff', '#00ff88', '#ffffff'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.top = '50%';
        confetti.style.left = '50%';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.zIndex = '200';
        document.body.appendChild(confetti);

        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 10;
        const tx = Math.cos(angle) * 200 * (Math.random() + 0.5);
        const ty = Math.sin(angle) * 200 * (Math.random() + 0.5);

        const animation = confetti.animate([
            { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            fill: 'forwards'
        });

        animation.onfinish = () => confetti.remove();
    }
}

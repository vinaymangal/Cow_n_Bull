# Cow and Bull Game Implementation Plan

## Goal Description
Create a web-based "Cow and Bull" (Bulls and Cows) game where the player guesses a 4-digit secret number (unique digits). The UI must be sleek, modern, and creative.

## User Review Required
-   **Design Style**: I am planning a "Neon Glassmorphism" aesthetic. Dark background, blurred glass containers, and vibrant neon accents for feedback.
-   **Gameplay**: Standard rules: 4 unique digits. Bull = correct digit & pos, Cow = correct digit & wrong pos.

## Proposed Changes

### Core
#### [NEW] [index.html](file:///h:/Vinay/VINAY/MY WORK/Website_App/antigravity/index.html)
-   Main game container.
-   Header with rules/title.
-   Game board area (history of guesses).
-   Input area (custom keypad or styled inputs).
-   Modal for Win/Loss/Restart.

#### [NEW] [style.css](file:///h:/Vinay/VINAY/MY WORK/Website_App/antigravity/style.css)
-   **Theme**: Dark mode, deep gradients.
-   **Glassmorphism**: Translucent backgrounds with blur filters.
-   **Typography**: Modern sans-serif (e.g., 'Outfit' or 'Inter' via Google Fonts).
-   **Animations**:
    -   Entry animations for guesses.
    -   Shake animation for invalid input.
    -   Glow effects for Bulls/Cows.
    -   Confetti for victory.

#### [NEW] [script.js](file:///h:/Vinay/VINAY/MY WORK/Website_App/antigravity/script.js)
-   `generateSecret()`: Create 4 unique random digits.
-   `checkGuess(guess)`: Compare against secret. Calculate Bulls/Cows.
-   `renderGuess(guess, bulls, cows)`: Add to UI with animation.
-   `validateInput(guess)`: Ensure 4 digits, unique, numbers only.
-   `resetGame()`: Clear state.

## Verification Plan
### Automated Tests
-   I will use the browser tool to load the page.
-   I will simulate a game flow (entering guesses).
-   I will check if the logic correctly identifies Bulls and Cows.
-   I will verify the win condition.

### Manual Verification
-   Visually inspect the "sleekness" and animations.
-   Check responsiveness.

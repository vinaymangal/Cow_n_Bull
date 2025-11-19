# 🎮 Bulls & Cows Game

A sleek, modern web-based implementation of the classic "Bulls and Cows" guessing game with a stunning **Neon Glassmorphism** design.

## 🎯 Game Overview

**Bulls & Cows** is a number guessing game where:
- The computer generates a **4-digit secret code** with unique digits (no repeats)
- You make guesses to crack the code
- **Bull** = Correct digit in the correct position
- **Cow** = Correct digit in the wrong position
- Win by getting 4 Bulls!

## ✨ Features

- **Neon Glassmorphism UI**: Dark mode with vibrant neon accents and frosted glass panels
- **Smooth Animations**: 
  - Entry animations for each guess
  - Shake effect for invalid inputs
  - Glow effects for Bulls and Cows feedback
  - Confetti celebration on victory
- **Input Validation**: Ensures 4 unique digits (no duplicates allowed)
- **Game History**: View all your previous guesses with feedback
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Keypad**: Easy number input interface
- **Rules Modal**: Quick reference guide built into the game

## 🚀 How to Play

1. Open `index.html` in your web browser
2. The game generates a secret 4-digit code
3. Enter your guess (4 unique digits)
4. Check the feedback:
   - **Bulls** = digits in correct positions
   - **Cows** = correct digits in wrong positions
5. Refine your guesses based on feedback
6. Crack the code to win!

## 📁 Project Structure

```
Cow_n_Bull/
├── index.html              # Main game structure and HTML
├── style.css              # Neon Glassmorphism styling and animations
├── script.js              # Game logic and interactivity
├── README.md             # This file
├── implementation_plan.md # Development plan and design spec
└── walkthrough.md        # Implementation details and verification
```

## 🛠️ Technical Details

### Files

- **index.html**: 
  - Main game container with glassmorphic design
  - Game board for displaying guess history
  - Input area with keypad
  - Modals for rules and game completion

- **style.css**:
  - Deep gradient background with floating neon blobs
  - Translucent glass-panel effects with backdrop blur
  - Typography using 'Outfit' font from Google Fonts
  - Animations for guesses, errors, and victory
  - Responsive layout for all screen sizes

- **script.js**:
  - `generateSecret()`: Creates 4 unique random digits
  - `checkGuess(guess)`: Calculates Bulls and Cows
  - `validateInput(guess)`: Ensures valid input
  - `renderGuess(guess, bulls, cows)`: Displays guess with animation
  - `resetGame()`: Resets game state for new game

## 🎨 Design System

### Color Scheme
- **Primary Background**: Deep blue/purple gradients
- **Accent Colors**: Vibrant neons (cyan, purple, pink, green)
- **Glass Elements**: Translucent white with blur effect

### Typography
- **Font**: Outfit (Google Fonts)
- **Weights**: 300 (light), 500 (medium), 700 (bold)

### Animations
- **Shake**: Invalid input feedback
- **Slide-in**: New guess entry
- **Float**: Background blob movement
- **Glow**: Bull/Cow highlights
- **Confetti**: Victory celebration

## 💻 Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Game Rules

1. **Secret Code**: 4 unique digits (0-9)
2. **Your Guess**: Must be exactly 4 unique digits
3. **Feedback**:
   - **Bull**: Correct digit, correct position
   - **Cow**: Correct digit, wrong position
4. **Victory**: Get 4 Bulls

Example:
```
Secret Code: 1234
Your Guess:  1245
Result:      2 Bulls (1, 2), 1 Cow (4)
```

## 🎓 How to Extend

Want to enhance the game? Here are some ideas:

- **Difficulty Levels**: Easy (6 digits), Hard (5 digits)
- **Time Challenge**: Race against the clock
- **Multiplayer Mode**: Take turns guessing
- **Statistics**: Track wins/losses, best score
- **Themes**: Add more color themes or animations
- **Sound Effects**: Add audio feedback
- **Leaderboard**: Store and display high scores

## 📝 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

Created as a modern, visually stunning take on the classic Bulls and Cows game.

---

Enjoy the game and happy guessing! 🎉
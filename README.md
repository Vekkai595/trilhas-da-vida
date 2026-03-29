# Trilhas da Vida – Estruturas Invisíveis

Educational social simulation board game built with React, Vite and TailwindCSS.

## About the Project

Trilhas da Vida is an educational board game that simulates social inequality and life decisions through a progression system based on events, choices and resources.

The goal of the project is to demonstrate how different starting conditions and life decisions can influence opportunities, stress, education, health and financial stability over time.

This project was built as a digital adaptation of a social board game and focuses on user experience, state management, game logic and component architecture.

---

## Concept

Each player starts with a different social background.  
During the game, the player:

1. Draws a character with a different starting condition
2. Rolls the dice and moves across the board
3. Encounters life events
4. Makes decisions that affect resources
5. Finishes the journey with a different life outcome

The game simulates how inequality, opportunity and decisions interact over time.

---

## Game Resources

During the game, the player manages:

- Health
- Education
- Money
- Stress
- Community Support

Choices and events modify these attributes, and the final outcome depends on the player's final state.

---

## Architecture

The project uses a centralized game state managed with a reducer pattern.

Structure:


src/
components/
game/
screens/
pages/
state/
data/
utils/
tests/


Main architecture ideas:
- Centralized game state (useReducer)
- Component-based UI
- Game logic separated from UI
- Event system with consequences
- LocalStorage persistence
- Basic automated tests

---

## Technologies Used

- React
- Vite
- TailwindCSS
- Framer Motion
- Vitest
- React Testing Library
- LocalStorage

---

## How to Run the Project

```bash
npm install
npm run dev

Open:

http://localhost:5173
Project Structure
src/
  components/
    game/
      DiceRoller.jsx
      EventCard.jsx
      PlayerToken.jsx
      ResourcePanel.jsx
    screens/
      WelcomeScreen.jsx
      CharacterScreen.jsx
      BoardScreen.jsx
      EndScreen.jsx

  pages/
    Game.jsx

  state/
    gameReducer.js
    GameContext.jsx
    initialState.js

  data/
    gameData.js

  utils/
    dice.js
    storage.js

  tests/
    game.test.jsx
Future Improvements
Multiple endings based on resources
Decision history panel
Player statistics dashboard
English / Portuguese language switch
Sound effects
Mobile optimization
Online leaderboard
Multiplayer mode
Deploy online version
Author

Samuel Borba Cordeiro
Project developed for educational and portfolio purposes.

# Blackjack Game in React

Welcome to the **Blackjack Game**! This project allows you to play the popular card game, Blackjack, in a browser using React. The game simulates the dealer's play and includes a simple tutorial on how to play. The game logic includes deck creation, shuffling, hand value calculation, and automatic gameplay.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Features](#features)
4. [Game Flow](#game-flow)
5. [File Structure](#file-structure)
6. [Code Explanation](#code-explanation)
7. [Technologies Used](#technologies-used)
8. [Contributing](#contributing)
9. [License](#license)

---

## Project Overview

This project is a Blackjack card game developed with React. The game includes:

- **Automatic Game Start**: After a 2-second delay, the game automatically begins with the deck shuffled, and two cards dealt to both the player and the dealer.
- **Player Actions**: The player can choose to "hit" (draw a card) or "stand" (end their turn).
- **Dealer Behavior**: The dealer automatically plays by drawing cards until their hand value reaches 17 or higher.
- **Hand Scoring**: The game calculates hand values, considering face cards (J, Q, K) as 10 points, Aces as either 1 or 11 points, and numeric cards as their face value.
- **Game Outcome**: The game determines whether the player or the dealer wins, or if there's a tie.

---

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js** (preferably the latest stable version)
- **npm** (Node Package Manager)

### Installation Steps

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/blackjack-react-game.git
   cd blackjack-react-game
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to play the game!

---

## Features

- **Game Tutorial**: Explains the rules and strategies for playing Blackjack.
- **Automatic Gameplay**: Simulates the player's actions until the game is finished.
- **Game Reset**: After each game, the game automatically resets after a 3-second delay.
- **Card Graphics**: Dynamically loads images for cards in the player's and dealer's hands.

---

## Game Flow

1. **Game Initialization**:
   - A shuffled deck is created, and two cards are dealt to both the player and the dealer.
   - The game state changes to "inProgress."

2. **Player Actions**:
   - The player can choose to "hit" (draw a card) or "stand" (end the turn).
   - Each "hit" updates the player's score.

3. **Dealer Actions**:
   - The dealer automatically "stands" when their hand value reaches 17 or higher.
   - The dealer draws cards until reaching 17.

4. **Game Outcome**:
   - The game determines the winner based on the hand values of the player and the dealer.
   - If either player or dealer busts (goes over 21), the other wins.
   - The game state is then set to "finished," and a winner is displayed.

---

## File Structure

```
/blackjack-react-game
├── /src
│   ├── /components
│   │   ├── BlackjackGame.js           # Main game logic and UI
│   │   ├── Word.js                    # Tutorial explaining game rules
│   │   └── style.css                  # Global styles
│   ├── App.js                         # Main entry point of the app
│   ├── /Assets                        # Folder containing card images
│   │   └── <card_image_files>.png     # Card images for each suit
│   ├── Deck.js                        # Logic for creating, shuffling, and calculating card values
│   └── index.js                       # Main render entry point
└── package.json                       # Project dependencies and scripts
```

---

## Code Explanation

### `BlackjackGame.js`

This is the main file where the game's logic and UI are implemented.

- **State Variables**:
  - `deck`: The shuffled deck of cards.
  - `playerHand`, `dealerHand`: Arrays storing the cards dealt to the player and dealer, respectively.
  - `playerScore`, `dealerScore`: Current hand values for the player and dealer.
  - `gameState`: Tracks the current state of the game (waiting, inProgress, finished).

- **Functions**:
  - `startGame()`: Initializes the game by creating and shuffling a deck, and dealing cards to the player and dealer.
  - `hit()`: Draws a card for the player and updates their score.
  - `stand()`: Executes the dealer's automatic gameplay and ends the game.

- **Card Image Rendering**: The `cardImagePath()` function dynamically generates paths for each card's image based on its value and suit.

### `Deck.js`

Contains functions for creating the deck, shuffling it, calculating hand values, and getting card values.

- `createDeck()`: Generates a new deck of 52 cards.
- `shuffleDeck()`: Shuffles the deck using the Fisher-Yates algorithm.
- `calculateHandValue()`: Calculates the total hand value, adjusting for Aces (which can be worth 1 or 11).
- `getCardValue()`: Returns the value of a card based on its face value.

### `Word.js`

Contains the tutorial sections explaining the rules, tips, techniques, and strategy for playing Blackjack.

- `Introduction()`: Describes the game and card values.
- `Rules()`: Explains the basic rules of Blackjack.
- `Tips()`: Provides useful tips and when to "hit," "stand," or "split."
- `Techniques()`: Details advanced gameplay techniques like "double down" and "surrender."
- `Strategy()`: Discusses optimal strategies for playing Blackjack.

### `App.js`

The main entry point of the app, which renders both the `BlackjackTutorial` and `BlackjackGame` components.

---

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **JavaScript ES6+**: For modern JavaScript syntax and features.
- **CSS**: For styling the game and tutorial interface.
- **Node.js**: Server-side JavaScript runtime (for development server).
- **npm**: Node Package Manager for handling dependencies.

---

## Contributing

We welcome contributions to this project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

### Enjoy playing Blackjack and good luck!
import React, { useState, useEffect, useCallback } from "react";
import { createDeck, shuffleDeck, calculateHandValue } from "./Deck";



const BlackjackGame = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameState, setGameState] = useState("waiting"); // 'waiting', 'inProgress', 'finished'

  // Function to start the game
  const startGame = () => {
    const newDeck = shuffleDeck(createDeck());
    setDeck(newDeck);
    const newPlayerHand = [newDeck.pop(), newDeck.pop()];
    const newDealerHand = [newDeck.pop(), newDeck.pop()];
    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);
    setPlayerScore(calculateHandValue(newPlayerHand));
    setDealerScore(calculateHandValue(newDealerHand));
    setGameState("inProgress");
  };

  // Function for the dealer to "stand"
  const stand = useCallback(() => {
    let newDealerScore = dealerScore;

    // Dealer plays automatically until they reach 17 or higher
    while (newDealerScore < 17) {
      const newCard = deck.pop();
      setDealerHand((prevHand) => [...prevHand, newCard]);
      newDealerScore = calculateHandValue([...dealerHand, newCard]);
    }

    setDealerScore(newDealerScore);
    setGameState("finished");
  }, [deck, dealerHand, dealerScore]);

  // Function to "hit" (draw a card for the player)
  const hit = useCallback(() => {
    const newCard = deck.pop();
    setPlayerHand((prevHand) => [...prevHand, newCard]);
    setPlayerScore(calculateHandValue([...playerHand, newCard]));
  }, [deck, playerHand]);

  // Automatically trigger the start of the game after 2 seconds of page load
  useEffect(() => {
    const startGameTimeout = setTimeout(() => {
      startGame();
    }, 2000); // 2-second delay

    return () => clearTimeout(startGameTimeout);
  }, []); // Empty dependency array to run only once when component mounts

  // Automatically simulate "hit" and "stand" actions after the game starts
  useEffect(() => {
    if (gameState === "inProgress") {
      // Simulate a "hit" action every 3 seconds until player reaches 17 or more
      const hitInterval = setInterval(() => {
        if (playerScore < 17) {
          hit(); // Simulate "hit" action
        } else {
          clearInterval(hitInterval); // Stop hitting
          stand(); // Simulate "stand" action
        }
      }, 3000); // 3 seconds delay for hitting

      return () => clearInterval(hitInterval); // Clean up interval
    }
  }, [gameState, playerScore, stand, hit]); // Add 'hit' to the dependencies array

  // Automatically reset the game after 3 seconds once finished
  useEffect(() => {
    if (gameState === "finished") {
      const gameResetTimeout = setTimeout(() => {
        startGame();
      }, 3000); // 3 seconds delay before starting a new game

      return () => clearTimeout(gameResetTimeout); // Clean up timeout
    }
  }, [gameState]);

  // Function to get card image
  const cardImagePath = (value, suit) => {
    const valueNames = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    const suitNames = ["Hearts", "Diamonds", "Clubs", "Spades"];

    const cardValue = valueNames.includes(value) ? value : null;
    const cardSuit = suitNames.includes(suit) ? suit : null;

    if (cardValue && cardSuit) {
      // Dynamically build the path to the image
      return require(`./Assets/${cardValue}_of_${cardSuit}.png`);
    }
    return null;
  };

  return (
    <div className="game-board">
      <h1>Welcome To Blackjack Game</h1>

      {gameState === "waiting" && (
        <button id="startGameButton" onClick={startGame}>
          Start Game
        </button>
      )}

      {gameState === "inProgress" && (
        <div>
          <div>
            <h2>Player's Hand ({playerScore}):</h2>
            <div>
              {playerHand.map((card, idx) => (
                <img
                  key={idx}
                  src={cardImagePath(card.value, card.suit)}
                  alt={`${card.value} of ${card.suit}`}
                  width={75}
                  height={100}
                />
              ))}
            </div>
          </div>

          <div>
            <h2>Dealer's Hand ({dealerScore}):</h2>
            <div>
              {dealerHand.slice(0, 1).map((card, idx) => (
                <img
                  key={idx}
                  src={cardImagePath(card.value, card.suit)}
                  alt={`${card.value} of ${card.suit}`}
                  width={75}
                  height={100}
                />
              ))}
              {gameState === "inProgress" && (
                <img
                  src={require("./Assets/card_back.png")}
                  alt="Hidden Card"
                  width={75}
                  height={100}
                />
              )}
            </div>
          </div>

          {/* Simulate button clicks by calling the functions automatically */}
          <button id="hitButton" onClick={hit}>
            Hit
          </button>
          <button id="standButton" onClick={stand}>
            Stand
          </button>
        </div>
      )}

      {gameState === "finished" && (
        <div>
          <div>
            <h2>Final Hands:</h2>
            <h3>Player's Hand ({playerScore}):</h3>
            <div>
              {playerHand.map((card, idx) => (
                <img
                  key={idx}
                  src={cardImagePath(card.value, card.suit)}
                  alt={`${card.value} of ${card.suit}`}
                  width={75}
                  height={100}
                />
              ))}
            </div>
          </div>

          <div>
            <h3>Dealer's Hand ({dealerScore}):</h3>
            <div>
              {dealerHand.map((card, idx) => (
                <img
                  key={idx}
                  src={cardImagePath(card.value, card.suit)}
                  alt={`${card.value} of ${card.suit}`}
                  width={75}
                  height={100}
                />
              ))}
            </div>
          </div>

          <h2>
            {playerScore > 21
              ? "Player Busts! Dealer Wins!"
              : dealerScore > 21
              ? "Dealer Busts! Player Wins!"
              : playerScore > dealerScore
              ? "Player Wins!"
              : "Dealer Wins!"}
          </h2>
        </div>
      )}
    </div>
  );
};

export default BlackjackGame;

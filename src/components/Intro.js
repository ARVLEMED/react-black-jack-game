import React from "react";

const Introduction = () => (
  <div id="background-container">
    <h1>Welcome to Blackjack</h1>
    <div id="game-introduction">
      <h2>What is Blackjack</h2>
      <p>
        Blackjack is a card game where players aim to get a hand that is closer to 21 than the dealer’s hand, without going over 21. Each card is worth its face value, with face cards (Jack, Queen, King) worth 10 and Aces worth either 1 or 11. The game is played with one or more decks of standard playing cards.
      </p>
      <h3>Card Values</h3>
      <ul>
        <li>Number cards (2-10): Face value.</li>
        <li>Face cards (King, Queen, Jack): Worth 10 points.</li>
        <li>Aces: Can be worth 1 or 11 points, depending on which is more beneficial for the hand.</li>
      </ul>
    </div>
  </div>
);

export default Introduction;

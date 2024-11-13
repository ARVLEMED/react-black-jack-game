import React from "react";

const Techniques = () => (
  <div id="game-techniques">
    <h2>Game Play Techniques</h2>
    <div className="container">
      <h3>Double Down</h3>
      <p>This is an option open to the player for doubling their bet when the original two cards dealt total 9, 10, or 11. 
                When the player's turn comes, they place a bet equal to the original bet, and the dealer gives the player just 
                one card, which is placed face down and is not turned up until the bets are settled at the end of the hand.</p>
      <h3>Surrendering</h3>
      <p>If you have an especially bad hand, you can "surrender" to the dealer instead of hitting or staying. Surrendering 
      deducts 50% off your original bet, but it can save you from a total loss. Note that not all casinos may allow surrendering.</p>
      <h3>Insurance</h3>
      <p>When the dealer's face-up card is an ace, players may make a side bet of up to half the original bet 
                that the dealer's face-down card is a ten-card, and thus a blackjack for the house. If it is, 
                those players win the insurance bet with a 2 to 1 payoff. Insurance is generally not a good proposition for the player unless 
                they are confident that there are an unusually high number of ten-cards still left undealt.</p>
    </div>
  </div>
);

export default Techniques;

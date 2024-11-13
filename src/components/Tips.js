import React from 'react';

const Tips = () => (
  <div id="game-tips">
    <h2>How to Play</h2>
    <ol>
      <li>Place your bet: Before the cards are dealt, players must place a bet. The minimum and maximum bets are usually posted on the table.</li>
      <li>Receive your cards: Once all bets have been placed, the dealer will deal two cards to each player, face up.</li>
      <li>Decide to hit or stand: After receiving your two cards, you can choose to “hit” and receive additional cards or “stand” and keep your current hand.</li>
      <li>Dealer’s turn: After all players have had their turn, the dealer will reveal their face-down card and hit or stand according to predetermined rules.</li>
      <li>Determine the winner: If neither the player nor the dealer busts, the person with the highest hand value wins.</li>
    </ol>
    <div>
      <h2>HIT</h2>
      <p>
        This is a decision that a player makes to order another card from the dealer to make their hand a good hand by having a hand value of 17 or higher.
        However, if the dealer has a face-up card of 7 or higher, the player should aim for a hand value of 18 or higher.
      </p>
      <div>
        <h3>When To Hit</h3>
        <p>You should hit in blackjack when your hand value is 11 or lower or when the dealer's face-up card is 7 or higher and your hand value is 12-16. [Hand signal: Tap the felt with your finger]</p>
      </div>
      <div>
        <img src="https://www.blackjackapprenticeship.com/wp-content/uploads/2018/08/Blackjack-hand-signal-for-hitting-1.jpg" alt="Hand signal for hit" />
      </div>
    </div>
    <div>
      <h2>STAND</h2>
      <p>If your first two cards are acceptable or have a good hand value, you can stand and the dealer will move to the next player. (Hand-signal: Wave your hand or simply put out an open palm over the felt.)</p>
      <div>
        <img src="https://www.blackjackapprenticeship.com/wp-content/uploads/2018/08/Blackjack-hand-signal-for-standing-1.jpg" alt="Hand signal for stand" />
      </div>
    </div>
    <div>
      <h2>SPLIT</h2>
      <p>
        Splitting in blackjack is a strategy that enables players to create two separate hands when dealt two cards of the same rank, such as two 7s or two Kings. 
        To split, you place an additional bet equal to your original wager, and each card then becomes the first card of a new hand. 
        You'll receive an additional card for each hand and can choose to hit or stand as normal. 
        Splitting is generally recommended for pairs of Aces and 8s, while it's typically best to avoid splitting 10s, as a total of 20 is a strong hand. 
        Understanding when and how to split can enhance your gameplay and increase your chances of winning.
      </p>
    </div>  
  </div>
);

export default Tips;

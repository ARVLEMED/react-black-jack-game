import React from "react";
import "./style.css";

const BlackjackTutorial = () => {
  const Introduction = () => (
    <div id="background-container">
      <h1>Welcome to Blackjack</h1>
      <div id="game-introduction">
        <h2>What is Blackjack?</h2>
        <p>
          Blackjack is a card game where players aim to get a hand that is
          closer to 21 than the dealer’s hand, without going over 21. Each card
          is worth its face value, with face cards (Jack, Queen, King) worth 10
          and Aces worth either 1 or 11. The game is played with one or more
          decks of standard playing cards.
        </p>
        <h3>Card Values</h3>
        <ul>
          <li>Number cards (2-10): Face value.</li>
          <li>Face cards (King, Queen, Jack): Worth 10 points.</li>
          <li>
            Aces: Can be worth 1 or 11 points, depending on which is more
            beneficial for the hand.
          </li>
        </ul>
      </div>
    </div>
  );

  const Rules = () => (
    <div id="game-rules">
      <h2>Rules of Blackjack</h2>
      <p>
        The goal of Blackjack is to have a higher hand value than the dealer,
        without going over 21. Players are dealt two cards and can then choose
        to “hit” (receive additional cards) or “stand” (keep their current
        hand). The dealer also receives two cards, but only one is face up. If a
        player’s hand exceeds 21, they “bust” and lose the game. If the dealer
        busts, all remaining players win. If neither the player nor the dealer
        busts, the player with the highest hand value wins.
      </p>
    </div>
  );

  const Techniques = () => (
    <div id="game-techniques">
      <h2>Game Play Techniques</h2>
      <h3>Double Down</h3>
      <p>
        This is an option open to the player for doubling their bet when the
        original two cards dealt total 9, 10, or 11. When the player's turn
        comes, they place a bet equal to the original bet, and the dealer gives
        the player just one card, which is placed face down and is not turned up
        until the bets are settled at the end of the hand.
      </p>
      <h3>Surrendering</h3>
      <p>
        If you have an especially bad hand, you can "surrender" to the dealer
        instead of hitting or staying. Surrendering deducts 50% off your
        original bet, but it can save you from a total loss. Note that not all
        casinos may allow surrendering.
      </p>
      <h3>Insurance</h3>
      <p>
        When the dealer's face-up card is an ace, players may make a side bet of
        up to half the original bet that the dealer's face-down card is a
        ten-card, and thus a blackjack for the house. If it is, those players
        win the insurance bet with a 2 to 1 payoff. Insurance is generally not a
        good proposition for the player unless they are confident that there are
        an unusually high number of ten-cards still left undealt.
      </p>
    </div>
  );

  const Tips = () => (
    <div id="game-tips">
      <h2>How to Play</h2>
      <ol>
        <li>
          Place your bet: Before the cards are dealt, players must place a bet.
          The minimum and maximum bets are usually posted on the table.
        </li>
        <li>
          Receive your cards: Once all bets have been placed, the dealer will
          deal two cards to each player, face up.
        </li>
        <li>
          Decide to hit or stand: After receiving your two cards, you can choose
          to “hit” and receive additional cards or “stand” and keep your current
          hand.
        </li>
        <li>
          Dealer’s turn: After all players have had their turn, the dealer will
          reveal their face-down card and hit or stand according to
          predetermined rules.
        </li>
        <li>
          Determine the winner: If neither the player nor the dealer busts, the
          person with the highest hand value wins.
        </li>
      </ol>
      <div>
        <h2>HIT</h2>
        <p>
          This is a decision that a player makes to order another card from the
          dealer to make their hand a good hand by having a hand value of 17 or
          higher. However, if the dealer has a face-up card of 7 or higher, the
          player should aim for a hand value of 18 or higher.
        </p>
        <div>
          <h3>When To Hit</h3>
          <p>
            You should hit in blackjack when your hand value is 11 or lower or
            when the dealer's face-up card is 7 or higher and your hand value is
            12-16. [Hand signal: Tap the felt with your finger]
          </p>
        </div>
        <div>
          <img
            src="https://www.blackjackapprenticeship.com/wp-content/uploads/2018/08/Blackjack-hand-signal-for-hitting-1.jpg"
            alt="Hand signal for hit"
          />
        </div>
      </div>
      <div>
        <h2>STAND</h2>
        <p>
          If your first two cards are acceptable or have a good hand value, you
          can stand and the dealer will move to the next player. (Hand-signal:
          Wave your hand or simply put out an open palm over the felt.)
        </p>
        <div>
          <img
            src="https://www.blackjackapprenticeship.com/wp-content/uploads/2018/08/Blackjack-hand-signal-for-standing-1.jpg"
            alt="Hand signal for stand"
          />
        </div>
      </div>
      <div>
        <h2>SPLIT</h2>
        <p>
          Splitting in blackjack is a strategy that enables players to create
          two separate hands when dealt two cards of the same rank, such as two
          7s or two Kings. To split, you place an additional bet equal to your
          original wager, and each card then becomes the first card of a new
          hand. You'll receive an additional card for each hand and can choose
          to hit or stand as normal. Splitting is generally recommended for
          pairs of Aces and 8s, while it's typically best to avoid splitting
          10s, as a total of 20 is a strong hand. Understanding when and how to
          split can enhance your gameplay and increase your chances of winning.
        </p>
      </div>
    </div>
  );

  const Strategy = () => (
    <div id="game-strategy">
      <h2>Strategy</h2>
      <article>
      <p>There are some strategies that can increase your chances of success. 
            Here are a few tips:
            <ul>
                <li>Always assume the dealer’s face-down card is worth 10.</li>
                <li>When your hand value is 12-16, hit if the dealer’s face-up card is 7 or higher.</li>
                <li>When your hand value is 17 or higher, stand.</li>
                <li>Double down on 10 or 11 when the dealer’s face-up card is 9 or lower.</li>
                <li>Never split 10s, but always split aces and 8s.</li>
            </ul>
            </p>
            <p><important>NB:</important>There is not guaranteed way to win in BlackJack!</p>
      </article>
      <section>
        <h2>Good Hand In BlackJack</h2>
        <p>
          A good hand in blackjack is any hand with a value of 17 or higher. 
          However, if the dealer has a face-up card of 7 or higher, you should aim for a hand value of 18 or higher.</p>
      </section>
      <div>
        <h2>Here's a YouTube Tutorial for Your Use</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PljDuynF-j0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );

  return (
    <div className="tutorial-container">
      <Introduction />
      <Rules />
      <Techniques />
      <Tips />
      <Strategy />
    </div>
  );
};

export default BlackjackTutorial;

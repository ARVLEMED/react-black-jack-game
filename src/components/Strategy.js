import React from "react";

const Strategy = () => (
  <div id="game-strategy">
    <h2>Strategy</h2>
    <article>
      <p>There are some strategies that can increase your chances of success...</p>
    </article>
    <section>
      <h2>Good Hand In BlackJack</h2>
      <p>A good hand in blackjack is any hand with a value of 17 or higher...</p>
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

export default Strategy;

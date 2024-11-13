// Create a deck of cards
export const createDeck = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
    const deck = [];
    
    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({ value, suit });
      });
    });
    
    return deck;
  };
  
  export const cardImagePath = (value, suit) => {
    const valueNames = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitNames = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    
    const cardValue = valueNames.includes(value) ? value : null;
    const cardSuit = suitNames.includes(suit) ? suit : null;
  
    if (cardValue && cardSuit) {
      // Dynamically build the path to the image
      return require(`./Assets/${cardValue}_of_${cardSuit}.png`);
    }
    return null;};

  
  // Shuffle the deck
  export const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };
  
  // Get card value for scoring
  export const getCardValue = (card) => {
    if (card.value === 'A') return 11;
    if (['K', 'Q', 'J'].includes(card.value)) return 10;
    return parseInt(card.value);
  };
  
  // Calculate hand total value
  export const calculateHandValue = (hand) => {
    let totalValue = 0;
    let aceCount = 0;
  
    hand.forEach(card => {
      totalValue += getCardValue(card);
      if (card.value === 'A') aceCount++;
    });
  
    // Adjust for Aces (Ace can be 1 or 11)
    while (totalValue > 21 && aceCount > 0) {
      totalValue -= 10;
      aceCount--;
    }
  
    return totalValue;
  };
  
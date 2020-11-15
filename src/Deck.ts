import MersenneTwister from 'mersenne-twister';

import {Card} from './Card';
import {Suit} from './types';

const numbers = [...Array(13)].map((_, i) => i);

export class Deck {
  cards: Card[];
  constructor(cards?: Array<Card>) {
    // Skip 0 and 1-- Ace will be 14
    this.cards =
      cards ||
      Object.values(Suit).reduce(
        (acc, suit: Suit) =>
          acc.concat(numbers.map(n => new Card(n + 2, suit))),
        [],
      );
  }
  shuffle(): void {
    const generator = new MersenneTwister();
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(generator.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  draw(): Card {
    return this.cards.pop();
  }
}

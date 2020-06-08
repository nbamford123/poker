import { Card } from "./Card";
import { Suit } from "./types";

const numbers = [...Array(13)].map((_, i) => i);

export class Deck {
  cards: Card[];
  constructor() {
    // Skip 0 and 1-- Ace will be 14
    this.cards = Object.keys(Suit).reduce(
      (acc, suit: Suit) => acc.concat(numbers.map((n) => new Card(n + 2, suit))),
      []
    );
  }
}

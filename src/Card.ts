import {Suit} from 'types';

export class Card {
  number: number;
  suit: Suit;
  constructor(number: number, suit: Suit) {
    this.number = number;
    this.suit = suit;
  }

  toString(): string {
    return `{ number: ${
      this.number === 11
        ? 'J'
        : this.number === 12
        ? 'Q'
        : this.number === 13
        ? 'K'
        : // Ace could be low in a straight
        this.number === 14 || this.number === 1
        ? 'A'
        : this.number.toString()
    }, suit: ${this.suit} }`;
  }
}

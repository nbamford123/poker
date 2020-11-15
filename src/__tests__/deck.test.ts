import {Card} from '../Card';
import {Deck} from '../Deck';
import {Suit} from '../types';
import {arraysMatch} from '../utils/arraysMatch';

const allCards = [
  new Card(2, Suit.Heart),
  new Card(3, Suit.Heart),
  new Card(4, Suit.Heart),
  new Card(5, Suit.Heart),
  new Card(6, Suit.Heart),
  new Card(7, Suit.Heart),
  new Card(8, Suit.Heart),
  new Card(9, Suit.Heart),
  new Card(10, Suit.Heart),
  new Card(11, Suit.Heart),
  new Card(12, Suit.Heart),
  new Card(13, Suit.Heart),
  new Card(14, Suit.Heart),
  new Card(2, Suit.Diamond),
  new Card(3, Suit.Diamond),
  new Card(4, Suit.Diamond),
  new Card(5, Suit.Diamond),
  new Card(6, Suit.Diamond),
  new Card(7, Suit.Diamond),
  new Card(8, Suit.Diamond),
  new Card(9, Suit.Diamond),
  new Card(10, Suit.Diamond),
  new Card(11, Suit.Diamond),
  new Card(12, Suit.Diamond),
  new Card(13, Suit.Diamond),
  new Card(14, Suit.Diamond),
  new Card(2, Suit.Club),
  new Card(3, Suit.Club),
  new Card(4, Suit.Club),
  new Card(5, Suit.Club),
  new Card(6, Suit.Club),
  new Card(7, Suit.Club),
  new Card(8, Suit.Club),
  new Card(9, Suit.Club),
  new Card(10, Suit.Club),
  new Card(11, Suit.Club),
  new Card(12, Suit.Club),
  new Card(13, Suit.Club),
  new Card(14, Suit.Club),
  new Card(2, Suit.Spade),
  new Card(3, Suit.Spade),
  new Card(4, Suit.Spade),
  new Card(5, Suit.Spade),
  new Card(6, Suit.Spade),
  new Card(7, Suit.Spade),
  new Card(8, Suit.Spade),
  new Card(9, Suit.Spade),
  new Card(10, Suit.Spade),
  new Card(11, Suit.Spade),
  new Card(12, Suit.Spade),
  new Card(13, Suit.Spade),
  new Card(14, Suit.Spade),
];

test('has all of the cards', () => {
  const deck = new Deck();
  expect(deck.cards.length).toBe(52);
  expect(deck.cards).toEqual(expect.arrayContaining(allCards));
});

test('it shuffles', () => {
  const deck = new Deck();
  const deck2 = new Deck([...deck.cards]);
  expect(arraysMatch(deck.cards, deck2.cards)).toBe(true);
  deck.shuffle();
  expect(deck.cards).toEqual(expect.arrayContaining(allCards));
  expect(arraysMatch(deck.cards, deck2.cards)).toBe(false);
});

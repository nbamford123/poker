import {highValue, highCard, winningHand, breakTie} from '../winningHand';
import {Suit, WinningHand} from '../types';

test('finds high value', () => {
  expect(highValue(2, 1)).toBe(WinningHand.FirstHand);
});

test('finds high value 2', () => {
  expect(highValue(1, 2)).toBe(WinningHand.SecondHand);
});

test('finds high value 3', () => {
  expect(highValue(1, 1)).toBe(WinningHand.Tie);
});

const s = {suit: Suit.Club};

const cardArray1 = [
  {number: 8, ...s},
  {number: 9, ...s},
  {number: 10, ...s},
  {number: 13, ...s},
];
const cardArray2 = [
  {number: 7, ...s},
  {number: 9, ...s},
  {number: 10, ...s},
  {number: 13, ...s},
];
test('finds high card', () => {
  expect(highCard(cardArray1, cardArray2)).toBe(WinningHand.FirstHand);
});

const cardArray3 = [
  {number: 8, ...s},
  {number: 9, ...s},
  {number: 10, ...s},
  {number: 13, ...s},
];
const cardArray4 = [
  {number: 7, ...s},
  {number: 9, ...s},
  {number: 11, ...s},
  {number: 13, ...s},
];
test('finds high card 2', () => {
  expect(highCard(cardArray3, cardArray4)).toBe(WinningHand.SecondHand);
});

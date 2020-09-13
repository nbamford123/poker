/* eslint-disable @typescript-eslint/no-var-requires */
import {rankHand} from '../rankHand';
import {HandRank, Suit} from '../types';
import {arrayIsSorted} from '../utils/arrayIsSorted';

const royalFlushHand = [
  {number: 13, suit: Suit.Diamond},
  {number: 10, suit: Suit.Diamond},
  {number: 14, suit: Suit.Diamond},
  {number: 12, suit: Suit.Diamond},
  {number: 11, suit: Suit.Diamond},
];

test('finds royal flush', () => {
  const rankedHand = rankHand(royalFlushHand);
  expect(rankedHand.rank).toBe(HandRank.StraightFlush);
  expect(rankedHand.extra.length).toBe(0);
  expect(rankedHand.hand.length).toBe(5);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number))).toBe(true);
});

const flushHand = [
  {number: 2, suit: Suit.Heart},
  {number: 4, suit: Suit.Heart},
  {number: 6, suit: Suit.Heart},
  {number: 13, suit: Suit.Heart},
  {number: 12, suit: Suit.Heart},
];
test('finds flush', () => {
  const rankedHand = rankHand(flushHand);
  expect(rankedHand.rank).toBe(HandRank.Flush);
  expect(rankedHand.extra.length).toBe(0);
  expect(rankedHand.hand.length).toBe(5);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number))).toBe(true);
});

const highCardHand = [
  {number: 2, suit: Suit.Spade},
  {number: 4, suit: Suit.Spade},
  {number: 6, suit: Suit.Spade},
  {number: 14, suit: Suit.Spade},
  {number: 12, suit: Suit.Heart},
];
test('finds high card', () => {
  const rankedHand = rankHand(highCardHand);
  expect(rankHand(highCardHand).rank).toBe(HandRank.HighCard);
  expect(rankedHand.extra.length).toBe(0);
  expect(rankedHand.hand.length).toBe(5);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number))).toBe(true);
});

const straightHand = [
  {number: 3, suit: Suit.Heart},
  {number: 2, suit: Suit.Spade},
  {number: 14, suit: Suit.Diamond},
  {number: 5, suit: Suit.Club},
  {number: 4, suit: Suit.Heart},
];
test('finds straight', () => {
  const rankedHand = rankHand(straightHand);
  expect(rankedHand.rank).toBe(HandRank.Straight);
  expect(rankedHand.extra.length).toBe(0);
  expect(rankedHand.hand.length).toBe(5);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number))).toBe(true);
});

const straightHand2 = [
  {number: 13, suit: Suit.Spade},
  {number: 10, suit: Suit.Spade},
  {number: 14, suit: Suit.Spade},
  {number: 12, suit: Suit.Spade},
  {number: 11, suit: Suit.Heart},
];
test('finds straight 2', () => {
  const rankedHand = rankHand(straightHand2);
  expect(rankedHand.rank).toBe(HandRank.Straight);
  expect(rankedHand.extra.length).toBe(0);
  expect(rankedHand.hand.length).toBe(5);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number))).toBe(true);
});

const straightHand3 = [
  {number: 7, suit: Suit.Spade},
  {number: 10, suit: Suit.Spade},
  {number: 9, suit: Suit.Spade},
  {number: 11, suit: Suit.Spade},
  {number: 8, suit: Suit.Heart},
];
test('finds straight hand 3', () => {
  const rankedHand = rankHand(straightHand3);
  expect(rankedHand.rank).toBe(HandRank.Straight);
  expect(rankedHand.extra.length).toBe(0);
  expect(rankedHand.hand.length).toBe(5);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number))).toBe(true);
});

const fourOfAKindHand = [
  {number: 7, suit: Suit.Spade},
  {number: 7, suit: Suit.Diamond},
  {number: 7, suit: Suit.Club},
  {number: 11, suit: Suit.Spade},
  {number: 7, suit: Suit.Heart},
];
test('finds four of a kind', () => {
  const rankedHand = rankHand(fourOfAKindHand);
  expect(rankedHand.rank).toBe(HandRank.FourOfAKind);
  expect(rankedHand.extra.length).toBe(1);
  expect(rankedHand.extra[0]).toStrictEqual({number: 11, suit: Suit.Spade});
  expect(rankedHand.hand.length).toBe(4);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number))).toBe(true);
});

const fourOfAKindHand2 = [
  {number: 11, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 11, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 11, suit: Suit.Heart},
];
test('finds four of a kind 2', () => {
  const rankedHand = rankHand(fourOfAKindHand2);
  expect(rankedHand.rank).toBe(HandRank.FourOfAKind);
  expect(rankedHand.extra.length).toBe(1);
  expect(rankedHand.extra[0]).toStrictEqual({number: 7, suit: Suit.Spade});
  expect(rankedHand.hand.length).toBe(4);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number))).toBe(true);
});

const fullHouseHand = [
  {number: 7, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 11, suit: Suit.Club},
  {number: 7, suit: Suit.Diamond},
  {number: 11, suit: Suit.Heart},
];
test('finds full house', () => {
  const rankedHand = rankHand(fullHouseHand);
  expect(rankedHand.rank).toBe(HandRank.FullHouse);
  expect(rankedHand.extra.length).toBe(0);
  expect(rankedHand.hand.length).toBe(5);
  // The 3 of a kind should be sorted first
  expect(
    arrayIsSorted(
      rankedHand.hand.map(c => c.number),
      true,
    ),
  ).toBe(true);
});

const fullHouseHand2 = [
  {number: 7, suit: Suit.Spade},
  {number: 7, suit: Suit.Diamond},
  {number: 11, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 11, suit: Suit.Heart},
];
test('finds full house 2', () => {
  const rankedHand = rankHand(fullHouseHand2);
  expect(rankedHand.rank).toBe(HandRank.FullHouse);
  expect(rankedHand.extra.length).toBe(0);
  expect(rankedHand.hand.length).toBe(5);
  expect(arrayIsSorted(rankedHand.hand.map(c => c.number)));
});

const threeOfAKindHand = [
  {number: 7, suit: Suit.Spade},
  {number: 7, suit: Suit.Diamond},
  {number: 7, suit: Suit.Club},
  {number: 11, suit: Suit.Spade},
  {number: 4, suit: Suit.Heart},
];
test('finds three of a kind', () => {
  const rankedHand = rankHand(threeOfAKindHand);
  expect(rankedHand.rank).toBe(HandRank.ThreeOfAKind);
  expect(rankedHand.extra.length).toBe(2);
  expect(rankedHand.hand.every(c => c.number === 7));
  expect(rankedHand.hand.length).toBe(3);
});

const threeOfAKindHand2 = [
  {number: 11, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 11, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 4, suit: Suit.Heart},
];
test('finds royal flush', () => {
  expect(rankHand(royalFlushHand).rank).toBe(HandRank.StraightFlush);
  expect(rankHand(royalFlushHand).extra.length).toBe(0);
  expect(rankHand(royalFlushHand).hand[4].number).toBe(14);
});

const pairHand = [
  {number: 11, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 12, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 4, suit: Suit.Heart},
];
test('finds royal flush', () => {
  expect(rankHand(royalFlushHand).rank).toBe(HandRank.StraightFlush);
  expect(rankHand(royalFlushHand).extra.length).toBe(0);
  expect(rankHand(royalFlushHand).hand[4].number).toBe(14);
});

const twoPairHand = [
  {number: 11, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 12, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 12, suit: Suit.Heart},
];
test('finds royal flush', () => {
  expect(rankHand(royalFlushHand).rank).toBe(HandRank.StraightFlush);
  expect(rankHand(royalFlushHand).extra.length).toBe(0);
  expect(rankHand(royalFlushHand).hand[4].number).toBe(14);
});

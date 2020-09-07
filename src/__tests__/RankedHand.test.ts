/* eslint-disable @typescript-eslint/no-var-requires */
import {rankHand} from '../rankHand';
import {HandRank, Suit} from '../types';

const royalFlushHand = [
  {number: 13, suit: Suit.Diamond},
  {number: 10, suit: Suit.Diamond},
  {number: 14, suit: Suit.Diamond},
  {number: 12, suit: Suit.Diamond},
  {number: 11, suit: Suit.Diamond},
];

test('finds royal flush', () => {
  expect(rankHand(royalFlushHand).rank).toBe(HandRank.StraightFlush);
  expect(rankHand(royalFlushHand).extra.length).toBe(0);
  expect(rankHand(royalFlushHand).hand[4].number).toBe(14);
});

const flushHand = [
  {number: 2, suit: Suit.Heart},
  {number: 4, suit: Suit.Heart},
  {number: 6, suit: Suit.Heart},
  {number: 13, suit: Suit.Heart},
  {number: 12, suit: Suit.Heart},
];
const highCardHand = [
  {number: 2, suit: Suit.Spade},
  {number: 4, suit: Suit.Spade},
  {number: 6, suit: Suit.Spade},
  {number: 14, suit: Suit.Spade},
  {number: 12, suit: Suit.Heart},
];
const straightHand = [
  {number: 3, suit: Suit.Heart},
  {number: 2, suit: Suit.Spade},
  {number: 14, suit: Suit.Diamond},
  {number: 5, suit: Suit.Club},
  {number: 4, suit: Suit.Heart},
];
const straightHand2 = [
  {number: 13, suit: Suit.Spade},
  {number: 10, suit: Suit.Spade},
  {number: 14, suit: Suit.Spade},
  {number: 12, suit: Suit.Spade},
  {number: 11, suit: Suit.Heart},
];
const straightHand3 = [
  {number: 7, suit: Suit.Spade},
  {number: 10, suit: Suit.Spade},
  {number: 9, suit: Suit.Spade},
  {number: 11, suit: Suit.Spade},
  {number: 8, suit: Suit.Heart},
];
const fourOfAKindHand = [
  {number: 7, suit: Suit.Spade},
  {number: 7, suit: Suit.Diamond},
  {number: 7, suit: Suit.Club},
  {number: 11, suit: Suit.Spade},
  {number: 7, suit: Suit.Heart},
];
const fourOfAKindHand2 = [
  {number: 11, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 11, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 11, suit: Suit.Heart},
];
const fullHouseHand = [
  {number: 7, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 11, suit: Suit.Club},
  {number: 7, suit: Suit.Diamond},
  {number: 11, suit: Suit.Heart},
];
const fullHouseHand2 = [
  {number: 7, suit: Suit.Spade},
  {number: 7, suit: Suit.Diamond},
  {number: 11, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 11, suit: Suit.Heart},
];
const threeOfAKindHand = [
  {number: 7, suit: Suit.Spade},
  {number: 7, suit: Suit.Diamond},
  {number: 7, suit: Suit.Club},
  {number: 11, suit: Suit.Spade},
  {number: 4, suit: Suit.Heart},
];
const threeOfAKindHand2 = [
  {number: 11, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 11, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 4, suit: Suit.Heart},
];
const pairHand = [
  {number: 11, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 12, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 4, suit: Suit.Heart},
];
const twoPairHand = [
  {number: 11, suit: Suit.Spade},
  {number: 11, suit: Suit.Diamond},
  {number: 12, suit: Suit.Club},
  {number: 7, suit: Suit.Spade},
  {number: 12, suit: Suit.Heart},
];

// console.log(`royal flush ${JSON.stringify(rankHand(royalFlushHand))}`);
// console.log(`fourofakind ${JSON.stringify(rankHand(fourOfAKindHand))}`);
// console.log(`fourofakind2 ${JSON.stringify(rankHand(fourOfAKindHand2))}`);
// console.log(`fullHouse ${JSON.stringify(rankHand(fullHouseHand))}`);
// console.log(`fullHouse2 ${JSON.stringify(rankHand(fullHouseHand2))}`);
// console.log(`flush ${JSON.stringify(rankHand(flushHand))}`);
// console.log(`straight1 ${JSON.stringify(rankHand(straightHand))}`);
// console.log(`straight2 ${JSON.stringify(rankHand(straightHand2))}`);
// console.log(`straight3 ${JSON.stringify(rankHand(straightHand3))}`);
// console.log(`threeofakind ${JSON.stringify(rankHand(threeOfAKindHand))}`);
// console.log(`threeofakind2 ${JSON.stringify(rankHand(threeOfAKindHand2))}`);
// console.log(`two pair ${JSON.stringify(rankHand(twoPairHand))}`);
// console.log(`pair ${JSON.stringify(rankHand(pairHand))}`);
// console.log(`high card ${JSON.stringify(rankHand(highCardHand))}`);

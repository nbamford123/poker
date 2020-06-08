/* eslint-disable @typescript-eslint/no-var-requires */
const Deck = require('../src/Deck').Deck;
const rankHand = require('../src/rankHand').rankHand;

const hoyle = new Deck();
hoyle.cards.forEach(c => console.log(c.toString()));

const royalFlushHand = [
  {number: 13, suit: 'D'},
  {number: 10, suit: 'D'},
  {number: 14, suit: 'D'},
  {number: 12, suit: 'D'},
  {number: 11, suit: 'D'},
];
const flushHand = [
  {number: 2, suit: 'H'},
  {number: 4, suit: 'H'},
  {number: 6, suit: 'H'},
  {number: 13, suit: 'H'},
  {number: 12, suit: 'H'},
];
const highCardHand = [
  {number: 2, suit: 'S'},
  {number: 4, suit: 'S'},
  {number: 6, suit: 'S'},
  {number: 14, suit: 'S'},
  {number: 12, suit: 'H'},
];
const straightHand = [
  {number: 3, suit: 'H'},
  {number: 2, suit: 'S'},
  {number: 14, suit: 'D'},
  {number: 5, suit: 'C'},
  {number: 4, suit: 'H'},
];
const straightHand2 = [
  {number: 13, suit: 'S'},
  {number: 10, suit: 'S'},
  {number: 14, suit: 'S'},
  {number: 12, suit: 'S'},
  {number: 11, suit: 'H'},
];
const straightHand3 = [
  {number: 7, suit: 'S'},
  {number: 10, suit: 'S'},
  {number: 9, suit: 'S'},
  {number: 11, suit: 'S'},
  {number: 8, suit: 'H'},
];
const fourOfAKindHand = [
  {number: 7, suit: 'S'},
  {number: 7, suit: 'D'},
  {number: 7, suit: 'C'},
  {number: 11, suit: 'S'},
  {number: 7, suit: 'H'},
];
const fourOfAKindHand2 = [
  {number: 11, suit: 'S'},
  {number: 11, suit: 'D'},
  {number: 11, suit: 'C'},
  {number: 7, suit: 'S'},
  {number: 11, suit: 'H'},
];
const fullHouseHand = [
  {number: 7, suit: 'S'},
  {number: 11, suit: 'D'},
  {number: 11, suit: 'C'},
  {number: 7, suit: 'D'},
  {number: 11, suit: 'H'},
];
const fullHouseHand2 = [
  {number: 7, suit: 'S'},
  {number: 7, suit: 'D'},
  {number: 11, suit: 'C'},
  {number: 7, suit: 'S'},
  {number: 11, suit: 'H'},
];
const threeOfAKindHand = [
  {number: 7, suit: 'S'},
  {number: 7, suit: 'D'},
  {number: 7, suit: 'C'},
  {number: 11, suit: 'S'},
  {number: 4, suit: 'H'},
];
const threeOfAKindHand2 = [
  {number: 11, suit: 'S'},
  {number: 11, suit: 'D'},
  {number: 11, suit: 'C'},
  {number: 7, suit: 'S'},
  {number: 4, suit: 'H'},
];
const pairHand = [
  {number: 11, suit: 'S'},
  {number: 11, suit: 'D'},
  {number: 12, suit: 'C'},
  {number: 7, suit: 'S'},
  {number: 4, suit: 'H'},
];
const twoPairHand = [
  {number: 11, suit: 'S'},
  {number: 11, suit: 'D'},
  {number: 12, suit: 'C'},
  {number: 7, suit: 'S'},
  {number: 12, suit: 'H'},
];

console.log(`royal flush ${JSON.stringify(rankHand(royalFlushHand))}`);
console.log(`fourofakind ${JSON.stringify(rankHand(fourOfAKindHand))}`);
console.log(`fourofakind2 ${JSON.stringify(rankHand(fourOfAKindHand2))}`);
console.log(`fullHouse ${JSON.stringify(rankHand(fullHouseHand))}`);
console.log(`fullHouse2 ${JSON.stringify(rankHand(fullHouseHand2))}`);
console.log(`flush ${JSON.stringify(rankHand(flushHand))}`);
console.log(`straight1 ${JSON.stringify(rankHand(straightHand))}`);
console.log(`straight2 ${JSON.stringify(rankHand(straightHand2))}`);
console.log(`straight3 ${JSON.stringify(rankHand(straightHand3))}`);
console.log(`threeofakind ${JSON.stringify(rankHand(threeOfAKindHand))}`);
console.log(`threeofakind2 ${JSON.stringify(rankHand(threeOfAKindHand2))}`);
console.log(`two pair ${JSON.stringify(rankHand(twoPairHand))}`);
console.log(`pair ${JSON.stringify(rankHand(pairHand))}`);
console.log(`high card ${JSON.stringify(rankHand(highCardHand))}`);

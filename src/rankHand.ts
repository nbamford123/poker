import {Card} from './Card';
import {RankedHand} from './RankedHand';

export type RankFunc = (cards: Card[]) => RankedHand;

export const flush: RankFunc = cards =>
  cards.every(c => c.suit === cards[0].suit) && new RankedHand(5, cards);

export const internalStraight: RankFunc = cards =>
  cards.every(
    (c, i) => i === cards.length - 1 || c.number + 1 === cards[i + 1].number,
  ) && new RankedHand(4, cards);

export const straight: RankFunc = cards =>
  internalStraight(cards) ||
  // Maybe we have an Ace that could be a low card? If so swap it out for a low Ace
  (cards[cards.length - 1].number === 14 &&
    internalStraight([
      new Card(1, cards[cards.length - 1].suit),
      ...cards.slice(0, -1),
    ]));

export const straightFlush: RankFunc = cards =>
  flush(cards) && straight(cards) && new RankedHand(8, cards);

// Combine like cards into arrays, returning the values of the group map
export const group = (cards: Card[]): Array<Array<Card>> =>
  Object.values(
    cards.reduce(
      (groups, card) => ({
        ...groups,
        [card.number]: groups[card.number]
          ? [...groups[card.number], card]
          : [card],
      }),
      {},
    ),
  );

export const fourOfAKind: RankFunc = cards => {
  const groups = group(cards).sort((a, b) => b.length - a.length);
  return groups[0].length === 4
    ? new RankedHand(7, groups[0], groups[1])
    : undefined;
};

export const threeOfAKind: RankFunc = cards => {
  const groups = group(cards).sort((a, b) => b.length - a.length);
  return groups[0].length === 3
    ? new RankedHand(3, groups[0], groups.slice(1).flat())
    : undefined;
};

export const pair: RankFunc = cards => {
  const groups = group(cards).sort((a, b) => b.length - a.length);
  return groups[0].length === 2
    ? new RankedHand(1, groups[0], groups.slice(1).flat())
    : undefined;
};

export const fullHouse: RankFunc = cards => {
  const three = threeOfAKind(cards);
  return (
    three &&
    pair(three.extra) &&
    new RankedHand(6, [...three.hand, ...three.extra])
  );
};

export const twoPair: RankFunc = cards => {
  const pair1 = pair(cards);
  const pair2 = pair1 && pair(pair1.extra);
  return (
    pair1 &&
    pair2 &&
    new RankedHand(2, [...pair1.hand, ...pair2.hand], pair2.extra)
  );
};

export const rankHand: RankFunc = hand => {
  const sortedCards = hand.sort((a, b) => a.number - b.number);
  return (
    straightFlush(sortedCards) ||
    fourOfAKind(sortedCards) ||
    fullHouse(sortedCards) ||
    flush(sortedCards) ||
    straight(sortedCards) ||
    threeOfAKind(sortedCards) ||
    twoPair(sortedCards) ||
    pair(sortedCards) ||
    new RankedHand(0, sortedCards)
  );
};

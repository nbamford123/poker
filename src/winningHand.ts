import {RankedHand} from './RankedHand';
import {Card} from './Card';
import {HandRank, WinningHand} from './types';

export const highValue = (value1: number, value2: number): WinningHand =>
  value1 > value2
    ? WinningHand.FirstHand
    : value2 > value1
    ? WinningHand.SecondHand
    : WinningHand.Tie;

export const highCard = (
  hand1: Array<Card>,
  hand2: Array<Card>,
): WinningHand => {
  // Cards are sorted by high number, so walk the arrays backwards
  for (let idx = hand1.length - 1; idx >= 0; idx--) {
    if (hand1[idx].number > hand2[idx].number) return WinningHand.FirstHand;
    if (hand2[idx].number > hand1[idx].number) return WinningHand.SecondHand;
  }
  return WinningHand.Tie;
};

export const winningHand = (
  hand1: RankedHand,
  hand2: RankedHand,
): WinningHand => {
  const winningHand = highValue(hand1.rank, hand2.rank);
  return winningHand !== WinningHand.Tie ? winningHand : breakTie(hand1, hand2);
};

export const breakTie = (hand1: RankedHand, hand2: RankedHand): WinningHand => {
  switch (hand1.rank) {
    case HandRank.StraightFlush:
    case HandRank.Flush:
    case HandRank.Straight:
      // Highest card wins
      return highValue(hand1.hand[4].number, hand2.hand[4].number);
      break;

    case HandRank.FourOfAKind:
      // Compare hand first
      const highest4 = highValue(hand1.hand[0].number, hand2.hand[0].number);
      return highest4 !== WinningHand.Tie
        ? highest4
        : // Check the extra card
          highValue(hand1.extra[0].number, hand2.extra[0].number);
      break;

    case HandRank.FullHouse:
      // 3 of a kind is sorted first
      const highest3 = highValue(hand1.hand[0].number, hand2.hand[0].number);
      return highest3 !== WinningHand.Tie
        ? highest3
        : // Check the pair
          highValue(hand1.hand[3].number, hand2.hand[3].number);
      break;

    case HandRank.TwoPair:
      // Highest pair is sorted second
      const firstPair = highValue(hand1.hand[3].number, hand2.hand[3].number);
      if (firstPair !== WinningHand.Tie) return firstPair;
      // Check the second pair
      const secondPair = highValue(hand1.hand[0].number, hand2.hand[0].number);
      return secondPair !== WinningHand.Tie
        ? secondPair
        : // Check the extra card
          highValue(hand1.extra[0].number, hand2.extra[0].number);
      break;

    case HandRank.Pair:
      const pair = highValue(hand1.hand[0].number, hand2.hand[0].number);
      return pair !== WinningHand.Tie
        ? pair
        : highCard(hand1.extra, hand2.extra);
      break;
    default:
      // High card
      return highCard(hand1.hand, hand2.hand);
  }
};

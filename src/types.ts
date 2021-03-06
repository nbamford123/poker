import {Player} from './Player';

export enum Suit {
    Heart = 'H',
    Diamond = 'D',
    Club = 'C',
    Spade = 'S',
}

export enum HandRank {
    HighCard = 0,
    Pair = 1,
    TwoPair = 2,
    ThreeOfAKind = 3,
    Straight = 4,
    Flush = 5,
    FullHouse = 6,
    FourOfAKind = 7,
    StraightFlush = 8,
}

export enum WinningHand {
    FirstHand,
    SecondHand,
    Tie,
}
export interface Pot {
    value: number;
    players: Array<Player>;
}

import {highValue, highCard, winningHand} from '../winningHand';
import {Suit, WinningHand, HandRank} from '../types';

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

const cardArray5 = [
    {number: 8, ...s},
    {number: 9, ...s},
    {number: 10, ...s},
    {number: 13, ...s},
];
test('finds high card 2', () => {
    expect(highCard(cardArray5, cardArray5)).toBe(WinningHand.Tie);
});

const straightFlushHand = {
    rank: HandRank.StraightFlush,
    hand: [
        {number: 10, suit: Suit.Diamond},
        {number: 11, suit: Suit.Diamond},
        {number: 12, suit: Suit.Diamond},
        {number: 13, suit: Suit.Diamond},
        {number: 14, suit: Suit.Diamond},
    ],
    extra: [],
};
const straightFlushHand2 = {
    rank: HandRank.StraightFlush,
    hand: [
        {number: 9, suit: Suit.Diamond},
        {number: 10, suit: Suit.Diamond},
        {number: 11, suit: Suit.Diamond},
        {number: 12, suit: Suit.Diamond},
        {number: 13, suit: Suit.Diamond},
    ],
    extra: [],
};

test('finds winning straight flush', () => {
    expect(winningHand(straightFlushHand2, straightFlushHand)).toBe(
        WinningHand.SecondHand,
    );
});
test('finds tied straight flush', () => {
    expect(winningHand(straightFlushHand, straightFlushHand)).toBe(
        WinningHand.Tie,
    );
});

const fullHouseHand = {
    rank: HandRank.FullHouse,
    hand: [
        {number: 10, suit: Suit.Diamond},
        {number: 10, suit: Suit.Spade},
        {number: 10, suit: Suit.Heart},
        {number: 7, suit: Suit.Diamond},
        {number: 7, suit: Suit.Club},
    ],
    extra: [],
};
const fullHouseHand2 = {
    rank: HandRank.FullHouse,
    hand: [
        {number: 7, suit: Suit.Diamond},
        {number: 7, suit: Suit.Spade},
        {number: 7, suit: Suit.Heart},
        {number: 10, suit: Suit.Diamond},
        {number: 10, suit: Suit.Club},
    ],
    extra: [],
};

test('finds winning full house', () => {
    expect(winningHand(fullHouseHand, fullHouseHand2)).toBe(
        WinningHand.FirstHand,
    );
});
test('finds tied full house', () => {
    expect(winningHand(fullHouseHand2, fullHouseHand2)).toBe(WinningHand.Tie);
});

const flushHand = {
    rank: HandRank.Flush,
    hand: [
        {number: 3, suit: Suit.Diamond},
        {number: 5, suit: Suit.Diamond},
        {number: 10, suit: Suit.Diamond},
        {number: 11, suit: Suit.Diamond},
        {number: 12, suit: Suit.Diamond},
    ],
    extra: [],
};
const flushHand2 = {
    rank: HandRank.Flush,
    hand: [
        {number: 2, suit: Suit.Spade},
        {number: 5, suit: Suit.Spade},
        {number: 7, suit: Suit.Spade},
        {number: 11, suit: Suit.Spade},
        {number: 12, suit: Suit.Spade},
    ],
    extra: [],
};

test('finds winning flush', () => {
    expect(winningHand(flushHand2, flushHand)).toBe(WinningHand.SecondHand);
});
test('finds tied flush', () => {
    expect(winningHand(flushHand2, flushHand2)).toBe(WinningHand.Tie);
});

const straightHand = {
    rank: HandRank.StraightFlush,
    hand: [
        {number: 10, suit: Suit.Diamond},
        {number: 11, suit: Suit.Spade},
        {number: 12, suit: Suit.Diamond},
        {number: 13, suit: Suit.Club},
        {number: 14, suit: Suit.Diamond},
    ],
    extra: [],
};
const straightHand2 = {
    rank: HandRank.StraightFlush,
    hand: [
        {number: 1, suit: Suit.Diamond},
        {number: 2, suit: Suit.Spade},
        {number: 3, suit: Suit.Spade},
        {number: 4, suit: Suit.Diamond},
        {number: 5, suit: Suit.Heart},
    ],
    extra: [],
};
test('finds winning straight', () => {
    expect(winningHand(straightHand2, straightHand)).toBe(
        WinningHand.SecondHand,
    );
});
test('finds tied straight', () => {
    expect(winningHand(straightHand2, straightHand2)).toBe(WinningHand.Tie);
});

const fourOfAKindHand = {
    rank: HandRank.FourOfAKind,
    hand: [
        {number: 10, suit: Suit.Diamond},
        {number: 10, suit: Suit.Spade},
        {number: 10, suit: Suit.Heart},
        {number: 10, suit: Suit.Club},
    ],
    extra: [{number: 14, suit: Suit.Diamond}],
};
const fourOfAKindHand2 = {
    rank: HandRank.FourOfAKind,
    hand: [
        {number: 1, suit: Suit.Diamond},
        {number: 1, suit: Suit.Spade},
        {number: 1, suit: Suit.Heart},
        {number: 1, suit: Suit.Diamond},
    ],
    extra: [{number: 5, suit: Suit.Heart}],
};
test('finds winning four of a kind', () => {
    expect(winningHand(fourOfAKindHand, fourOfAKindHand2)).toBe(
        WinningHand.FirstHand,
    );
});
test('finds winning four of a kind high card', () => {
    const fourOfAKindHand3 = {
        ...fourOfAKindHand,
        extra: [{number: 10, suit: Suit.Club}],
    };
    expect(winningHand(fourOfAKindHand3, fourOfAKindHand)).toBe(
        WinningHand.SecondHand,
    );
});

const threeOfAKindHand = {
    rank: HandRank.FourOfAKind,
    hand: [
        {number: 10, suit: Suit.Diamond},
        {number: 10, suit: Suit.Spade},
        {number: 10, suit: Suit.Heart},
    ],
    extra: [
        {number: 9, suit: Suit.Club},
        {number: 14, suit: Suit.Diamond},
    ],
};
const threeOfAKindHand2 = {
    rank: HandRank.FourOfAKind,
    hand: [
        {number: 1, suit: Suit.Diamond},
        {number: 1, suit: Suit.Spade},
        {number: 1, suit: Suit.Heart},
    ],
    extra: [
        {number: 5, suit: Suit.Heart},
        {number: 9, suit: Suit.Diamond},
    ],
};
test('finds winning three of a kind', () => {
    expect(winningHand(threeOfAKindHand, threeOfAKindHand2)).toBe(
        WinningHand.FirstHand,
    );
});
test('finds winning three of a kind high card', () => {
    const threeOfAKindHand3 = {
        ...threeOfAKindHand,
        extra: [
            {number: 10, suit: Suit.Club},
            {number: 14, suit: Suit.Club},
        ],
    };
    expect(winningHand(threeOfAKindHand3, threeOfAKindHand)).toBe(
        WinningHand.FirstHand,
    );
});

const twoPairHand = {
    rank: HandRank.TwoPair,
    hand: [
        {number: 9, suit: Suit.Diamond},
        {number: 9, suit: Suit.Spade},
        {number: 10, suit: Suit.Heart},
        {number: 10, suit: Suit.Club},
    ],
    extra: [{number: 14, suit: Suit.Diamond}],
};
const twoPairHand2 = {
    rank: HandRank.TwoPair,
    hand: [
        {number: 1, suit: Suit.Diamond},
        {number: 1, suit: Suit.Spade},
        {number: 10, suit: Suit.Spade},
        {number: 10, suit: Suit.Diamond},
    ],
    extra: [{number: 9, suit: Suit.Diamond}],
};
const twoPairHand3 = {
    rank: HandRank.TwoPair,
    hand: [
        {number: 2, suit: Suit.Diamond},
        {number: 2, suit: Suit.Spade},
        {number: 11, suit: Suit.Spade},
        {number: 11, suit: Suit.Diamond},
    ],
    extra: [{number: 8, suit: Suit.Diamond}],
};
test('finds winning two pair', () => {
    expect(winningHand(twoPairHand2, twoPairHand)).toBe(WinningHand.SecondHand);
});
test('finds winning two pair 2', () => {
    expect(winningHand(twoPairHand2, twoPairHand3)).toBe(
        WinningHand.SecondHand,
    );
});
test('finds winning two pair high card', () => {
    const twoPairHand4 = {
        ...twoPairHand,
        extra: [{number: 10, suit: Suit.Club}],
    };
    expect(winningHand(twoPairHand, twoPairHand4)).toBe(WinningHand.FirstHand);
});

const pairHand = {
    rank: HandRank.Pair,
    hand: [
        {number: 9, suit: Suit.Diamond},
        {number: 9, suit: Suit.Spade},
    ],
    extra: [
        {number: 10, suit: Suit.Heart},
        {number: 11, suit: Suit.Club},
        {number: 14, suit: Suit.Diamond},
    ],
};
const pairHand2 = {
    rank: HandRank.Pair,
    hand: [
        {number: 1, suit: Suit.Diamond},
        {number: 1, suit: Suit.Spade},
    ],
    extra: [
        {number: 9, suit: Suit.Diamond},
        {number: 10, suit: Suit.Spade},
        {number: 11, suit: Suit.Diamond},
    ],
};
test('finds winning pair', () => {
    expect(winningHand(pairHand, pairHand2)).toBe(WinningHand.FirstHand);
});
test('finds winning pair high card', () => {
    const pairHand3 = {
        ...pairHand,
        extra: [
            {number: 9, suit: Suit.Heart},
            {number: 11, suit: Suit.Club},
            {number: 14, suit: Suit.Diamond},
        ],
    };
    expect(winningHand(pairHand, pairHand3)).toBe(WinningHand.FirstHand);
});

const highCardHand = {
    rank: HandRank.HighCard,
    hand: [
        {number: 3, suit: Suit.Diamond},
        {number: 8, suit: Suit.Spade},
        {number: 9, suit: Suit.Heart},
        {number: 10, suit: Suit.Club},
        {number: 11, suit: Suit.Diamond},
    ],
    extra: [],
};
const highCardHand2 = {
    rank: HandRank.HighCard,
    hand: [
        {number: 1, suit: Suit.Diamond},
        {number: 4, suit: Suit.Spade},
        {number: 8, suit: Suit.Diamond},
        {number: 10, suit: Suit.Spade},
        {number: 11, suit: Suit.Diamond},
    ],
    extra: [],
};
test('finds winning high card', () => {
    expect(winningHand(highCardHand, highCardHand2)).toBe(
        WinningHand.FirstHand,
    );
});

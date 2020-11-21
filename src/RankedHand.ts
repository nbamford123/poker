import {Card} from './Card';
import {HandRank} from './types';

export class RankedHand {
    rank: HandRank;
    hand: Card[];
    extra: Card[];

    constructor(rank: HandRank, hand: Array<Card>, extra: Array<Card> = []) {
        this.rank = rank;
        this.hand = hand;
        this.extra = extra;
    }
}

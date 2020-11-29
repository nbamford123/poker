import {Card} from './Card';

export class Player {
    name: string;
    hand: Array<Card>;
    purse: number;

    constructor(name: string) {
        this.name = name;
        this.hand = [];
        this.purse = 0;
    }
    addCard(card: Card): void {
        this.hand.push(card);
    }
    willPlay(): boolean {
        // This is where you would somehow ask a real player
        return true;
    }
    getBet(curBet: number): number {
        // -1 = fold, curBet = call, > curBet = raise
        return 0;
    }
}

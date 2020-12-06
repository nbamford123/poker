import {Card} from './Card';

export class Player {
    name: string;
    hand: Array<Card>;
    purse: number;

    constructor(name: string, purse?: number) {
        this.name = name;
        this.hand = [];
        this.purse = purse || 0;
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
    get stack(): number {
        return this.purse;
    }
    set stack(stack: number) {
        this.purse = stack;
    }
}

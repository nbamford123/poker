import {Deck} from './Deck';
import {Player} from './Player';

enum GameState {
    IDLE,
    DEAL,
    FIRST_BET,
    DISCARD,
    SECOND_BET,
}
export class Game {
    deck: Deck;
    players: Array<Player>;
    gameRunning: boolean;
    gameState: GameState;

    constructor() {
        this.gameRunning = false;
        this.gameState = GameState.IDLE;
        this.players = [];
        this.deck = new Deck();
    }

    addPlayer(player: Player): void {
        if (this.players.find(p => p.name === player.name))
            throw new Error('Trying to add player with non-unique name');
        this.players.push(player);
    }
    removePlayer(name: string): void {
        this.players = this.players.splice(
            this.players.findIndex(p => p.name === name),
            1,
        );
    }
    // Need to remove player when purse = 0... between rounds, I guess
    // Should extract betting and write tests just for that
    runGame(): void {
        this.gameRunning = true;
        this.deck.shuffle();
        // ante?
        let pot = 0;
        const currentPlayers = this.players.filter(
            p => p.purse > 0 && p.willPlay(),
        );
        while (this.gameRunning) {
            switch (this.gameState) {
                case GameState.DEAL:
                    // deal cards
                    for (let i = 0; i <= 4; i++) {
                        currentPlayers.forEach(p =>
                            p.addCard(this.deck.draw()),
                        );
                    }
                    this.gameState += 1;
                    break;
                case GameState.FIRST_BET:
                    // bet until nobody raises
                    let betting = true;
                    let curBet = 0;
                    while (betting) {
                        // If you run out of money you can't bet, but you're still in-- side pots?
                        for (const player of currentPlayers) {
                            const bet = player.getBet(curBet);
                            if (bet === -1)
                                // fold
                                currentPlayers.filter(p => p !== player);
                            else if (bet > 0) {
                                // raise
                                curBet += bet;
                            }
                            // check if call is legal?
                            pot += bet;
                            // Somehow, we need to track if total bet has raised since individual bet
                        }
                        if (curBet === 0) betting = false;
                        else {
                            pot += curBet;
                            curBet = 0;
                        }
                    }
                    this.gameState += 1;
                    break;
            }
        }
    }
    endGame(): void {
        this.gameRunning = false;
    }
    get running(): boolean {
        return this.gameRunning;
    }
}

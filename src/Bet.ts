import {Player} from './Player';
import {Pot} from './types';

interface Bettor {
    player: Player;
    // don't technically need this, can just check for player with 0 purse
    allIn: boolean;
    bet: number;
    folded: boolean;
}

export const makePots = (bettors: Array<Bettor>): Array<Pot> => {
    // Sort from lowest to highest bet in case side pot(s) need to be created
    const newBettors = bettors.sort((a, b) => a.bet - b.bet);
    const pots = newBettors.reduce((pots, bettor, index) => {
        const lowBet = bettor.bet;
        if (lowBet) {
            const curPot = {value: lowBet, players: [bettor.player]};
            for (const b of newBettors.slice(0, index + 1)) {
                curPot.value += lowBet;
                b.bet -= lowBet;
                // don't add folded players
                if (!b.folded) curPot.players.push(b.player);
            }
            return [...pots, curPot];
        } else return pots;
    }, []);

    return pots;
};

export const round = (
    players: Array<Player>,
    firstBettor = 0,
): Array<Bettor> => {
    const bettors: Array<Bettor> = players.map(p => ({
        player: p,
        bet: 0,
        allIn: false,
        folded: false,
    }));
    let betting = true;
    let highBet = 0;
    let curBettor = firstBettor;
    let highBettor = curBettor;

    while (betting) {
        const bettor = bettors[curBettor];
        if (!bettor.folded && !bettor.allIn) {
            // this is probably going to have to be asynchronous
            const bet = bettor.player.getBet(highBet - bettor.bet);
            if (bet < 0) {
                // fold
                bettor.folded = true;
            } else {
                if (bet > highBet) {
                    // raise
                    highBettor = curBettor;
                    highBet += bet;
                } else if (bet < highBet) {
                    bettor.allIn = true;
                    // but how do we ensure they've gone all in? Where is that enforced? in player.bet?
                    // the "business logic" is spread out all over the place. Not good.
                }
                // call
                bettor.bet += bet;
            }
        }
        // increment player
        curBettor = (curBettor + 1) % bettors.length;
        // If it's the current bettor and noone has raised, we're done
        if (curBettor === highBettor && highBet === bettors[curBettor].bet)
            betting = false;
    }
    return bettors;
};

export const betRound = (
    players: Array<Player>,
    firstBettor = 0,
): Array<Pot> => {
    const bettors = round(players, firstBettor);
    return makePots(bettors);
};

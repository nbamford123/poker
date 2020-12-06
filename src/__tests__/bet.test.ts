import {Player} from '../Player';
import {round} from '../Bet';

jest.mock('../Player');

describe('A round of $10 bets', () => {
    let players: Array<Player> = [];
    beforeAll(() => {
        const betMock = jest.fn();
        betMock.mockReturnValue(10);
        (Player as jest.Mock).mockImplementation(() => {
            return {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                getBet: betMock,
            };
        });
        players = [new Player('pablo', 100), new Player('joe', 100), new Player('dave', 100)];
    });

    it('Should return 3 players', () => {
        expect(
            round(players, 0),
        ).toHaveLength(3);
    });
    it('Should have each player with a $10 bet', () => {
        for (const player of round(players, 0))
            expect(player.bet).toEqual(10)
    });
    it('Should have each player not folded', () => {
        for (const player of round(players, 0))
            expect(player.folded).toEqual(false)
    });
});
describe('An all in betting round', () => {
    beforeAll(() => {
        const betMock = jest.fn();
        betMock.mockReturnValue(10);
        (Player as jest.Mock).mockImplementation(() => {
            return {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                getBet: betMock,
            };
        });
    });

    it('Should return 3 players', () => {
        expect(
            round(
                [new Player('pablo'), new Player('joe'), new Player('dave')],
                0,
            ),
        ).toHaveLength(3);
    });
    it('Should have each player with a $10 bet', () => {
        expect(
            round(
                [new Player('pablo'), new Player('joe'), new Player('dave')],
                0,
            ).every(p => p.bet === 10),
        ).toBe(true);
    });
    it('Should have each player not folded', () => {
        expect(
            round(
                [new Player('pablo'), new Player('joe'), new Player('dave')],
                0,
            ).every(p => !p.folded),
        ).toBe(true);
    });
});

import {Player} from '../Player';
import {round} from '../Bet';

jest.mock('../Player');

describe('A round of $10 bets', () => {
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

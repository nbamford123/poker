import { Player } from '../Player';
import { round } from '../Bet';

jest.mock('../Player');

const betMock = jest.fn();

betMock.mockReturnValueOnce(10).mockReturnValueOnce(10).mockReturnValue(10);

describe('A round of $10 bets', () => {
  beforeAll(() => {
    (Player as jest.Mock).mockImplementation(() => {
      return {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        bet: () => betMock,
      };
    });
  });

    it('Should return 3 players', () => {
        expect(() => round([
            new Player('pablo'),
            new Player('joe'),
            new Player('dave')
        ], 0)).toReturnWith(0);
    })
});

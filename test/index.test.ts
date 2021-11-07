import Mee6Levels from '../src';

const leaderBoardId = process.env.LEADERBOARD as string;

const mee6levels = new Mee6Levels(leaderBoardId);

describe('GET Array of Users of desired Leaderboard', () => {
  it('return array with Users of Mee6', async () => {
    const data = await mee6levels.getUsersLevels();
    expect(data).toBeInstanceOf(Array);
  }, 20000);
});

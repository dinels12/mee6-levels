import Mee6Levels from '../src';

const leaderBoardId = process.env.LEADERBOARD as string;

const mee6levels = new Mee6Levels(leaderBoardId);

describe('GET Array of Players of desired Leaderboard', () => {
  it('return array with Players of Mee6', async () => {
    const data = await mee6levels.getPlayersLevels();
    expect(data).toBeInstanceOf(Array);
  }, 20000);

  it('return array with Players filteres by level of Mee6', async () => {
    const data = await mee6levels.getPlayersFilterByLevels(10);
    expect(data).toBeInstanceOf(Array);
  }, 20000);

  it('return object with Guild of Mee6 Leaderboard', async () => {
    const data = await mee6levels.getLeaderboardInformation();
    expect(data).toBeInstanceOf(Object);
  }, 20000);
});

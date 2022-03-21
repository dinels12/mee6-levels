import * as libs from './lib/Players';
import config from './config.json';
import { IGuild, IPlayer } from './interfaces/Player';
const { baseURL } = config['production'];

class InitializeApp {
  private baseURL: string;
  /**
   * Get the Players from a LeaderBoard ID.
   *
   * @param leaderBoardId id of the Leaderboard to get the data.
   *
   */
  constructor(leaderBoardId: string) {
    this.baseURL = `${baseURL}/${leaderBoardId}`;
  }

  /**
   * @returns {Promise<IPlayer[]> } Players Array.
   */

  async getPlayersLevels(): Promise<IPlayer[]> {
    return await libs.getPlayersLevels(this.baseURL);
  }

  /**
   * @param level Filter by gte Level
   * @returns Players filter greater then equal levels
   */
  async getPlayersFilterByLevels(level: number): Promise<IPlayer[]> {
    return await libs.getPlayersFilterByLevels(this.baseURL, level);
  }

  /**
   *
   * @returns Guild Leaderboard information
   */
  async getLeaderboardInformation(): Promise<IGuild> {
    return await libs.getLeaderboardInformation(this.baseURL);
  }
}

export default InitializeApp;

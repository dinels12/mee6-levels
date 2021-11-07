import * as Users from './lib/Users';
import config from './config.json';
const { baseURL } = config['production'];

class InitializeApp {
  private baseURL: string;
  /**
   * Get the users from a LeaderBoard ID.
   *
   * @param leaderBoardId id of the Leaderboard to get the data.
   *
   */
  constructor(leaderBoardId: string) {
    this.baseURL = `${baseURL}/${leaderBoardId}`;
  }

  /**
   * @returns {Promise<[IUser]> } Users Array.
   */

  getUsersLevels() {
    return Users.getUsersLevels(this.baseURL);
  }
}

export default InitializeApp;

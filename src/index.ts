import * as Users from './lib/Users';
import config from './config.json';
const { baseURL } = config['production'];

class InitializeApp {
  private baseURL: string;
  constructor(leaderBoardId: string) {
    this.baseURL = `${baseURL}/${leaderBoardId}`;
  }

  getUsersLevels() {
    return Users.getUsersLevels(this.baseURL);
  }
}

export default InitializeApp;

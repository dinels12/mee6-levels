import axios from 'axios'
import IUser from '../interfaces/User';

export const getUsersLevels = async (url: string): Promise<IUser[]> => {
  return await new Promise(async (resolve, reject) => {
    try {
      let data: IUser[] = [];
      let shouldContinue = true;
      let page = 0;

      while (shouldContinue) {
        const res = (await axios.get(`${url}?limit=1000&page=${page}`))
          .data;
        // console.log({ total: res.players.length, page, limit });
        page += 1;
        data = data.concat(res.players);
        if (res.players.length < 1000) {
          shouldContinue = false;
          break;
        }
      }
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
};

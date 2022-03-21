import axios from 'axios';
import { IGuild, IPlayer } from '../interfaces/Player';

export const getPlayersLevels = async (url: string): Promise<IPlayer[]> => {
  return await new Promise(async (resolve, reject) => {
    try {
      let data: IPlayer[] = [];
      let shouldContinue = true;
      let page = 0;

      while (shouldContinue) {
        const res = (await axios.get(`${url}?limit=1000&page=${page}`)).data;
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

export const getPlayersFilterByLevels = async (
  url: string,
  level: number
): Promise<IPlayer[]> => {
  return await new Promise(async (resolve, reject) => {
    try {
      let data: IPlayer[] = [];
      let shouldContinue = true;
      let page = 0;

      while (shouldContinue) {
        const res = (await axios.get(`${url}?limit=1000&page=${page}`)).data;
        // console.log({ total: res.players.length, page, limit });
        page += 1;
        const players = res.players.filter(
          (player: IPlayer) => player.level >= level
        );
        data = data.concat(players);
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

export const getLeaderboardInformation = async (
  url: string
): Promise<IGuild> => {
  return await new Promise(async (resolve, reject) => {
    try {
      const data = (await axios.get(`${url}?limit=1&page=1`)).data;
      const guild = data.guild as IGuild;
      resolve({
        ...guild,
        avatar: `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.jpg`,
      });
    } catch (e) {
      reject(e);
    }
  });
};

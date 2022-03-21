export interface IPlayer {
  avatar: string;
  detailed_xp: number[];
  discriminator: string;
  guild_id: string;
  id: string;
  level: number;
  message_count: number;
  username: string;
  xp: number;
}

export interface IGuild {
  allow_join: boolean;
  icon: string;
  id: string;
  invite_leaderboard: boolean;
  leaderboard_url: string;
  name: string;
  avatar: string;
  premium: boolean;
}

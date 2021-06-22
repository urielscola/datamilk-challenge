export interface Map {
  [key: string]: any;
}

export interface RankHistory {
  [key: string]: number;
}

export interface IApp {
  pos: number;
  id: string;
  name: string;
  released: string;
  downloads: number;
  revenue: number;
  image: string;
  rating: number;
  url: string;
  rank_history: [RankHistory];
}

export interface IAppWithCount extends IApp {
  timesInTop10: number;
}

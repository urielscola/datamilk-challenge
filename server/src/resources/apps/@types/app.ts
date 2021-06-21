interface RankHistory {
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

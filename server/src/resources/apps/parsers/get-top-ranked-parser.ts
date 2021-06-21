import { IApp, IAppWithCount } from "../@types";

export function getTopRanked(
  apps: IApp[]
): Array<Pick<IAppWithCount, "name" | "image" | "timesInTop10">> {
  const withCounts: IAppWithCount[] = apps
    .map((app) => {
      const pastRanks = Object.values(app.rank_history);
      const timesInTop10 = pastRanks.filter((rank) => Number(rank) <= 10);
      return { ...app, timesInTop10: timesInTop10.length };
    })
    .filter((app) => app.timesInTop10 <= 10 && app.timesInTop10 > 0);

  return withCounts
    .sort((a, b) => {
      if (a.timesInTop10 < b.timesInTop10) return 1;
      if (a.timesInTop10 > b.timesInTop10) return -1;
      return 0;
    })
    .map(({ name, image, timesInTop10 }) => ({ name, image, timesInTop10 }));
}

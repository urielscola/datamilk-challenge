import { IApp } from "../@types";

export function getMarketSize(apps: IApp[]): number {
  return apps.reduce((prev, next) => prev + next.revenue, 0);
}

export function getTopApps(
  apps: IApp[],
  howMany = 5
): Array<Pick<IApp, "name" | "image" | "downloads">> {
  return apps
    .filter((app) => app.downloads)
    .sort((a, b) => {
      if (a.downloads > b.downloads) return -1;
      if (a.downloads < b.downloads) return 1;
      return 0;
    })
    .slice(0, howMany)
    .map(({ name, image, downloads }) => ({ name, image, downloads }));
}

export function getChartData(
  apps: IApp[]
): Array<Pick<IApp, "id" | "name" | "image" | "downloads" | "revenue">> {
  return apps.map(({ id, name, image, downloads, revenue }) => ({
    id,
    name,
    image,
    downloads,
    revenue,
  }));
}

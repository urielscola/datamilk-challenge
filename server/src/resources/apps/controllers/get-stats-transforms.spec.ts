import {
  getChartData,
  getMarketSize,
  getTopApps,
} from "./get-stats-transforms";

const makeInput = (): any[] => [
  {
    pos: 1,
    id: "1",
    downloads: 10,
    revenue: 10,
    name: "APP #1",
    url: "[...]",
    image: "[...]",
    released: "",
    rating: 1,
    rank_history: { "2021-02-06": 1 },
  },
  {
    pos: 2,
    id: "2",
    downloads: 20,
    revenue: 20,
    name: "APP #2",
    url: "[...]",
    image: "[...]",
    released: "",
    rating: 2,
    rank_history: { "2021-02-06": 2 },
  },
  {
    pos: 3,
    id: "3",
    downloads: 30,
    revenue: 30,
    name: "APP #3",
    url: "[...]",
    image: "[...]",
    released: "",
    rating: 3,
    rank_history: { "2021-02-06": 3 },
  },
];

describe("Get Stats Transforms", () => {
  test("Chart data should return the correct values", async () => {
    const input = makeInput();

    const chartData = getChartData(input as any);

    const keys = Object.keys(chartData[0]);
    expect(keys).toEqual(["id", "name", "image", "downloads", "revenue"]);
  });

  test("Market size data should return the correct values", async () => {
    const input = makeInput();

    const marketSize = getMarketSize(input as any);
    expect(marketSize).toBe(60);
  });

  test("Top apps data should return the correct values", async () => {
    const input = makeInput();

    const topApps = getTopApps(input as any, 2);
    expect(topApps[0].downloads).toBe(30);
    expect(topApps[1].downloads).toBe(20);
  });
});

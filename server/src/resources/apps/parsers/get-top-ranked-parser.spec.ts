import { getTopRanked } from "./get-top-ranked-parser";

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
    rank_history: { "2021-02-06": 1, "2021-02-07": 2, "2021-02-08": 3 },
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
    rank_history: { "2021-02-06": 11, "2021-02-07": 22, "2021-02-08": 33 },
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

describe("Get Top ranked Transforms", () => {
  test("Chart data should return the correct values", async () => {
    const input = makeInput();

    const topRanked = getTopRanked(input as any);

    const keys = Object.keys(topRanked[0]);
    expect(keys).toEqual(["name", "image", "timesInTop10"]);
    expect(topRanked[0].timesInTop10).toBe(3);
  });
});

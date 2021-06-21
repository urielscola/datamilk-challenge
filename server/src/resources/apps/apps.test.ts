import request from "supertest";
import server from "../../server";

describe("GET /apps/stats", () => {
  test("Returns correct status and body", async () => {
    const response = await request(server).get("/apps/stats");

    expect(response.status).toBe(200);
    expect(response.body.marketSize).toBe(530000);
    expect(response.body.topApps.length).toBe(3);
    expect(response.body.chartData.length).toBe(3);
  });
});

describe("GET /apps/top_ranked", () => {
  test("Returns correct status and body", async () => {
    const response = await request(server).get("/apps/top_ranked");

    expect(response.status).toBe(200);
    expect(response.body.topRanked.length).toBe(3);
    expect(response.body.topRanked[0].timesInTop10).toBe(8);
  });
});

describe("GET /apps/formatted_json", () => {
  test("Returns correct status and body", async () => {
    const response = await request(server).get("/apps/formatted_json");

    expect(response.status).toBe(200);
    expect(JSON.parse(response.text).length).toBe(3);
  });
});

describe("GET /hello", () => {
  test("Returns correct status and body", async () => {
    const response = await request(server).get("/hello");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world!");
  });
});

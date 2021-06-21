import request from "supertest";
import server from "../../server";

describe("GET /stats", () => {
  test("Returns correct status and body", async () => {
    const response = await request(server).get("/stats");

    expect(response.status).toBe(200);
    expect(response.body.marketSize).toBe(18682000);
    expect(response.body.topApps.length).toBe(5);
    expect(response.body.chartData.length).toBe(100);
  });
});

import mwLogger from "./mw-logger";

describe("Logger middleware", () => {
  test("it should add a logger instance to the req object", () => {
    const req: any = {};
    const nextFn = jest.fn();

    mwLogger(req, {} as any, nextFn);

    expect(req.logger).toBeDefined();
    expect(nextFn).toHaveBeenCalledTimes(1);
  });
});

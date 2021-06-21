import mwLogger from "./mwLogger";

describe("mwLogger", () => {
  test("it should add a logger instance to the req object", () => {
    const req: any = {};
    const nextFn = jest.fn();

    mwLogger(req, {} as any, nextFn);

    expect(req.logger).toBeDefined();
    expect(nextFn).toHaveBeenCalledTimes(1);
  });
});

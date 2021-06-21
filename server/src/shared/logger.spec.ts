/* eslint-disable import/first */
// necessary becasuse we need to mock the module first

const loggerMock = {
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

jest.mock("winston", () => ({
  format: {
    colorize: jest.fn(),
    combine: jest.fn(),
    label: jest.fn(),
    timestamp: jest.fn(),
    printf: jest.fn(),
    json: jest.fn(),
    errors: jest.fn(),
    simple: jest.fn(),
    splat: jest.fn(),
  },
  createLogger: jest.fn().mockReturnValue(loggerMock),
  transports: {
    Console: jest.fn(),
  },
}));

import logger from "./logger";

describe("Logger", () => {
  test("the log functions should be called", () => {
    logger.info("an info log");
    logger.warn("an warn log");
    logger.error("an error log");

    expect(loggerMock.info).toHaveBeenCalledTimes(1);
    expect(loggerMock.info).toHaveBeenCalledWith("an info log");
    expect(loggerMock.warn).toHaveBeenCalledTimes(1);
    expect(loggerMock.warn).toHaveBeenCalledWith("an warn log");
    expect(loggerMock.error).toHaveBeenCalledTimes(1);
    expect(loggerMock.error).toHaveBeenCalledWith("an error log");
  });
});

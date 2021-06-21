import { createLogger, format, transports } from "winston";

const instance = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: "fitnessapps-server" },
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

interface ILogger {
  info: (message: string) => void;
  warn: (message: string) => void;
  error: (message: string) => void;
}

const logger: ILogger = {
  info: (message: string) => instance.info(message),
  warn: (message: string) => instance.warn(message),
  error: (message: string) => instance.error(message),
};

export default logger;

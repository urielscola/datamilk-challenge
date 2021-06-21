import { Express, json } from "express";
import helmet from "helmet";
import cors from "cors";
import mwLogger from "./mwLogger";

export default (app: Express): void => {
  app.use(json());
  app.use(cors());
  app.use(helmet());
  app.use(mwLogger);
};

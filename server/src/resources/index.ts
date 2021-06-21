import { Express } from "express";

import apps from "./apps";

export default (app: Express): void => {
  app.use(apps);
};

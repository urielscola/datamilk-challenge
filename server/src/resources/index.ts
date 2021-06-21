import { Express } from "express";

import apps from "./apps";

export default (app: Express): void => {
  app.get("/hello", (req, res) => res.status(200).send("Hello world!"));
  app.use(apps);
};

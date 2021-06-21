import { Router } from "express";

import { GetStats } from "./controllers";
import { getAppRepository } from "./repositories";

const routes = Router();

const getStatsController = new GetStats({ getAppRepository });
routes.get(`/stats`, getStatsController.handle);

export default routes;

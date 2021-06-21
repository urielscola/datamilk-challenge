import { Router } from "express";

import { GetStats, GetPretty } from "./controllers";
import { getAppRepository } from "./repositories";

const routes = Router();

const getStatsController = new GetStats({ getAppRepository });
const getPrettyController = new GetPretty({ getAppRepository });

routes.get(`/apps/formatted_json`, getPrettyController.handle);
routes.get(`/apps/stats`, getStatsController.handle);

export default routes;

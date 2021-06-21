import { Router } from "express";

import { GetStats, GetPretty, GetTopRanked } from "./controllers";
import { getAppRepository } from "./repositories";

const routes = Router();

const getStatsController = new GetStats({ getAppRepository });
const getPrettyController = new GetPretty({ getAppRepository });
const getTopRankedController = new GetTopRanked({ getAppRepository });

routes.get(`/apps/formatted_json`, getPrettyController.handle);
routes.get(`/apps/stats`, getStatsController.handle);
routes.get(`/apps/top_ranked`, getTopRankedController.handle);

export default routes;

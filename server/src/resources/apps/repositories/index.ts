import { App } from "models";

import getAppRepositoryFactory from "./get-app-factory";

const getAppRepository = getAppRepositoryFactory({ App });

export default {
  getAppRepository,
};

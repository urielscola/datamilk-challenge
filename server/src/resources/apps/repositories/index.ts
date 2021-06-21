import { App } from "../../../models";

import getAppRepositoryFactory from "./get-app-factory";

export const getAppRepository = getAppRepositoryFactory({ App });

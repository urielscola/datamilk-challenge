import { Request, Response } from "express";

import { IGetAppRepository } from "../@types";
import { IController } from "../../../@types";
import { getChartData, getMarketSize, getTopApps } from "../parsers";

import { ok, serverError } from "../../../shared";

class GetStats implements IController {
  private readonly getAppRepository: IGetAppRepository;

  constructor({ getAppRepository }: { getAppRepository: IGetAppRepository }) {
    this.getAppRepository = getAppRepository;
  }

  public handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      req.logger.info("[GET] get-stats START");

      const apps = this.getAppRepository();
      const marketSize = getMarketSize(apps);
      const topApps = getTopApps(apps);
      const chartData = getChartData(apps);
      const { status, body } = ok({ marketSize, topApps, chartData });

      req.logger.info("[GET] get-stats SUCCESS");
      return res.status(status).json(body);
    } catch ({ message }) {
      req.logger.error(`[GET] get-stats ERROR: ${message as string}`);
      const { status, body } = serverError({ message });
      return res.status(status).json(body);
    }
  };
}

export default GetStats;

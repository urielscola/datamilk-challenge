import { Request, Response } from "express";

import { IGetAppRepository } from "../@types";
import { getChartData, getMarketSize, getTopApps } from "../parsers";

import { ok, serverError } from "../../../shared";

interface IController {
  handle: (request: Request, response: Response) => Promise<Response>;
}

class GetStats implements IController {
  private readonly getAppRepository: IGetAppRepository;

  constructor({ getAppRepository }: { getAppRepository: IGetAppRepository }) {
    this.getAppRepository = getAppRepository;
  }

  public handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const apps = this.getAppRepository();
      const marketSize = getMarketSize(apps);
      const topApps = getTopApps(apps);
      const chartData = getChartData(apps);
      const { status, body } = ok({ marketSize, topApps, chartData });

      return res.status(status).json(body);
    } catch (err) {
      const { status, body } = serverError({ message: err.message });
      return res.status(status).json(body);
    }
  };
}

export default GetStats;

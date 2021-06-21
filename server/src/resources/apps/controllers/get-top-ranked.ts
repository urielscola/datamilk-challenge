import { Request, Response } from "express";

import { IGetAppRepository } from "../@types";
import { IController } from "../../../@types";
import { getTopRanked } from "../parsers";

import { ok, serverError } from "../../../shared";

class GetStats implements IController {
  private readonly getAppRepository: IGetAppRepository;

  constructor({ getAppRepository }: { getAppRepository: IGetAppRepository }) {
    this.getAppRepository = getAppRepository;
  }

  public handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      req.logger.info("[GET] get-top-ranked START");
      const apps = this.getAppRepository();
      const topRanked = getTopRanked(apps);

      const { status, body } = ok({ topRanked });

      req.logger.info("[GET] get-top-ranked SUCCESS");
      return res.status(status).json(body);
    } catch ({ message }) {
      req.logger.error(`[GET] get-top-ranked ERROR: ${message as string}`);
      const { status, body } = serverError({ message });
      return res.status(status).json(body);
    }
  };
}

export default GetStats;

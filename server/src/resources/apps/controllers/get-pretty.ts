import { Request, Response } from "express";

import { IGetAppRepository } from "../@types";

import { ok, serverError } from "../../../shared";

interface IController {
  handle: (request: Request, response: Response) => Promise<Response>;
}

class GetPretty implements IController {
  private readonly getAppRepository: IGetAppRepository;

  constructor({ getAppRepository }: { getAppRepository: IGetAppRepository }) {
    this.getAppRepository = getAppRepository;
  }

  public handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      req.logger.info("[GET] get-pretty START");
      const apps = this.getAppRepository();
      const { status, body } = ok(JSON.stringify(apps, null, 2));

      req.logger.info("[GET] get-pretty SUCCESS");
      return res.status(status).send(body);
    } catch ({ message }) {
      req.logger.error(`[GET] get-pretty ERROR: ${message as string}`);
      const { status, body } = serverError({ message: message });
      return res.status(status).json(body);
    }
  };
}

export default GetPretty;

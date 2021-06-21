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
      const apps = this.getAppRepository();
      const { status, body } = ok(JSON.stringify(apps, null, 2));

      return res.status(status).send(body);
    } catch (err) {
      const { status, body } = serverError({ message: err.message });
      return res.status(status).json(body);
    }
  };
}

export default GetPretty;

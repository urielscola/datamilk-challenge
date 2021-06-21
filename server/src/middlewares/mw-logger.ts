import { Request, Response, NextFunction } from "express";
import logger from "../shared/logger";

export default (req: Request, res: Response, next: NextFunction): void => {
  req.logger = logger;
  next();
};

import { Express, Request, Response } from "express";
import { STATUS_CODES } from "./types";

const expressApp = (app: Express) => {

  // catch error NOT FOUND when no routes are matched
  app.use("*", (req: Request, res: Response) => {
    const message = `Requested path ${req.path} not found`;
    const err = Error(message);
    res.status(STATUS_CODES.NOT_FOUND).send({
      success: false,
      message,
      stack: err.stack
    });
  })
}

export default expressApp;
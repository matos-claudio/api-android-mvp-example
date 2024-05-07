import { Request, Response } from "express";

export const pong = (req: Request, res: Response) => {
  res.send("Pong!!!");
};

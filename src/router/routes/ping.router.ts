import express, { Request, Response } from "express";

const router = express.Router();

router.get("/ping", (req: Request, res: Response) => {
  console.log("index route pinged");
  res.json({ message: "pong" });
});

export { router as pingRouter };

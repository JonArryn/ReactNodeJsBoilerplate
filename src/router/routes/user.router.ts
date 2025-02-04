import express, { Request, Response } from "express";

const router = express.Router();
import db from "../db/dbConnection";

router.get("/user", async (req: Request, res: Response) => {
  console.log("user route pinged");
  res.json({
    message: "success",
  });
});

export { router as userRouter };

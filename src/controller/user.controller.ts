import db from "../db/dbConnection";
import user from "../db/schema/user";
import { Request, Response } from "express";
import UserResource from "../resource/user.resource";

const getAll = async function (req: Request, res: Response): Promise<void> {
  try {
    const users: UserResource[] = await db.select(UserResource).from(user);
    res.json({
      message: "success",
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export { getAll };

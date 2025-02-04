import express from "express";
import * as userController from "../../controller/user.controller";

const router = express.Router();

router.get("/user", userController.getAll);

export { router as userRouter };

import express from "express";
import { authRouter } from "./auth.router";
import { pingRouter } from "./ping.router";
import { userRouter } from "./user.router";

const router = express.Router();

router.use(pingRouter);
router.use(authRouter);
router.use(userRouter);

export { router as default };

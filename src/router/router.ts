import express from "express";
import { authRouter } from "./routes/auth.router";
import { pingRouter } from "./routes/ping.router";
import { userRouter } from "./routes/user.router";

const router = express.Router();

router.use(pingRouter);
router.use(authRouter);
router.use(userRouter);

export { router as default };

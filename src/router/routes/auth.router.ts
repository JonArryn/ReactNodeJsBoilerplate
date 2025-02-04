import express, { Request, Response } from "express";
const router = express.Router()

router.get('/login', (req: Request, res:Response) => {
    res.json({message: "you hit the login route with a get request"})
})

export {router as authRouter};
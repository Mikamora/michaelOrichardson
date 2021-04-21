import * as express from 'express';
import authRouter from "./auth";
import blogRouter from "./blog"

const router = express.Router();

//localhost:3000/auth/
router.use("/auth", authRouter);

//localhost:3000/blog/
router.use("/blog", blogRouter);

export default router;
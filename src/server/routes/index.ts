import * as express from 'express';
import authRouter from "./auth";
import projectsRouter from "./projects";

const router = express.Router();

//localhost:3000/auth/
router.use("/auth", authRouter);

//localhost:3000/projects/
router.use("/projects", projectsRouter);

export default router;
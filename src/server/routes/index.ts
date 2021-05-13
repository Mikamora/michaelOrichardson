import * as express from 'express';
import authRouter from "./auth";
import projectsRouter from "./projects";
import mail from "./mail";

const router = express.Router();

//localhost:3000/auth
router.use("/auth", authRouter);

//localhost:3000/projects
router.use("/projects", projectsRouter);

router.use("/send", mail)

export default router;
import { Router } from "express";
import db from "../../db";

const router = Router();

// GET /projects/
router.get("/:id?", async (req, res) => {
    // this is a way to check if its working before working on it :: res.json({ msg: "text project get" })
    const id = Number(req.params.id);

    try {
        if (id) {
            const [project] = await db.projects.one(id);
            res.json(project);
        } else {
            const projects = await db.projects.all();
            res.json(projects);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500).json({ msg: "my code sucks!", e });
    }
});

export default router;
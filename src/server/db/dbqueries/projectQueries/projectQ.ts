import { Query } from "../../index";

const all = () => Query("SELECT * FROM projects;");
const one = (id: number) => Query("SELECT projects.* FROM projects WHERE projects.id = ?", [id]);

export default {
    all,
    one
}
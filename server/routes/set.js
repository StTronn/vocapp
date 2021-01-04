import { Router } from "express"; // Express web server framework
import url from "url";
import Set from "../models/set";
const router = Router();

router.get("/get", async (req, res, next) => {
  const url_parts = url.parse(req.url, true);
  const { id } = url_parts.query;
  if (!id) return next({ statusCode: 401, message: "no id given" });
  const set = await Set.findOne({ _id: id });
  if (!set) return next({ stausCod: 404, message: "set not found" });

  res.status(200).json(set);
});

router.post("/create", async (req, res, next) => {
  const { payload } = req.body;
});

export default router;

import express from "express";
import { getJob, getJobs } from "../controllers/jobs.js";

const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJob);

export default router;
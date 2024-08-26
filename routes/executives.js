import express from "express";
import { getExecutives } from "../controllers/executives.js";

const router = express.Router();

router.get("/", getExecutives);

export default router;
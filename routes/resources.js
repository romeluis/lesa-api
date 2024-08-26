import express from "express";
import { getResources } from "../controllers/resources.js";

const router = express.Router();

router.get("/", getResources);

export default router;
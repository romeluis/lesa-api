import express from "express";
import { submitEvent, submitJoin } from "../controllers/submit.js";

const router = express.Router();

router.post("/event/:id", submitEvent);
router.post("/join", submitJoin);

export default router;

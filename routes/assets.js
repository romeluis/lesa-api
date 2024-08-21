import express from "express";
import { getAboutLESA, getHeroAnimation, getMeetTheTeam } from "../controllers/assets.js";

const router = express.Router();

router.get("/heroanimation", getHeroAnimation);
router.get("/meettheteam", getMeetTheTeam);
router.get("/aboutlesa", getAboutLESA);

export default router;
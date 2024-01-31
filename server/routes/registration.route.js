// registration.route.js
import express from "express";
import { biblereadingreg } from "../controllers/registration.controllers.js";

const router = express.Router();

router.post("/biblereading", biblereadingreg);

export default router;

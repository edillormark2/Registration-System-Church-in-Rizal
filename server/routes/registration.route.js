// registration.route.js
import express from "express";
import { registration } from "../controllers/registration.controllers.js";

const router = express.Router();

router.post("/", registration);

export default router;

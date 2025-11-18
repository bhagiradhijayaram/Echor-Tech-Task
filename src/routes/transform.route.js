import { Router } from "express";
import { transformSentence } from "../controllers/transform.controller.js";

const router = Router();

router.post("/transform", transformSentence);

export default router;

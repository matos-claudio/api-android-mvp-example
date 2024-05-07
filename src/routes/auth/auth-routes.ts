import express from "express";
import { auth } from "../../controllers/auth/auth-controller";

const router = express.Router();

router.post("/", auth);

export default router;

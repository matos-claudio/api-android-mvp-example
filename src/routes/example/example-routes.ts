import express from "express";
import { pong } from "../../controllers/example/example-controller";

const router = express.Router();

router.get("/", pong);

export default router;

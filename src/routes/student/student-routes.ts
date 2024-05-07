import express from "express";
import { getStudentData } from "../../controllers/student/student-controller";

const router = express.Router();

router.get("/", getStudentData);

export default router;

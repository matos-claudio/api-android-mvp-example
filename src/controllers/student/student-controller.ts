import { Request, Response } from "express";
import { getData, IStudent } from "../../models/student/student-model";

export const getStudentData = (req: Request, res: Response): void => {
  const student: IStudent = getData();

  try {
    res.json({
      success: true,
      message: "OK",
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
      data: {},
    });
  }
};

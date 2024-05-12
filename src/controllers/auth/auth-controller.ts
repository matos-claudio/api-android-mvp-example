import { Request, Response } from "express";
import { authenticate } from "../../models/auth/user-model";

export const auth = (req: Request, res: Response): void => {
  console.log(`REQ::: `, req.body)
  const { username, password } = req.body;
  console.log(`A requisição chegou na API`);
  if (authenticate(username, password)) {
    res.json({
      success: true,
      message: "Login OK",
      user: {
        name: "Rogerio",
        email: "rogerio@iesb.com.br",
      },
    });
  } else {
    
    res.status(401).json({
      success: false,
      message: "Error",
      user: {},
    });
  }
};

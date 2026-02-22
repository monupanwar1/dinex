import { Request, Response } from "express";

import * as service from "./service";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const result = await service.registerUser(name, email, password);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: result,
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await service.loginUser(email, password);

  res.status(201).json({
    success: true,
    message: "Login successful",
    data: result,
  });
};

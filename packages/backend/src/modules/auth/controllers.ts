import { Request, Response } from "express";

import { setAuthCookie } from "@/utils/cookie";
import * as service from "./service";
import { loginSchema, registerSchema } from "./validation";

export const register = async (req: Request, res: Response) => {
  console.log("BODY:", req.body);
  const { name, email, password } = registerSchema.parse(req.body);

  const { user, token } = await service.registerUser(name, email, password);

  setAuthCookie(res, token);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = loginSchema.parse(req.body);
  const { user, token } = await service.loginUser(email, password);

  setAuthCookie(res, token);

  res.status(201).json({
    success: true,
    message: "Login successful",
    data: user,
  });
};

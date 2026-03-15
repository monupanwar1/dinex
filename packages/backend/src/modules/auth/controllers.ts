import { Request, Response } from "express";

import { setAuthCookie } from "@/utils/cookie";
import * as service from "./service";
import { loginSchema, registerSchema } from "./validation";

export const login = async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse({
    body: req.body,
  });

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: parsed.error.issues[0].message,
    });
  }

  const { email, password } = parsed.data.body;

  const { user, token } = await service.loginUser(email, password);

  setAuthCookie(res, token);

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: user,
  });
};
export const register = async (req: Request, res: Response) => {
  const parsed = registerSchema.safeParse({
    body: req.body,
  });

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: parsed.error.issues[0].message,
    });
  }

  const { name, email, password } = parsed.data.body;

  const { user, token } = await service.registerUser(name, email, password);

  setAuthCookie(res, token);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
};

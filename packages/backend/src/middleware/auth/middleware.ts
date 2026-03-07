import { NextFunction, Request, Response } from "express";
import { verifyToken } from "@/utils/jwt";

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  try {
    const decoded = verifyToken(token) as {
      userId: string;
      role: string;
    };

    req.user = {
      id: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

import * as repo from "./repository";

import { ApiError } from "@/utils/ApiError";
import { comparedPassword, hashedPassword } from "@/utils/hash";
import { generateToken } from "@/utils/jwt";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const existing = await repo.findUserByEmail(email);

  if (existing) {
    throw new ApiError(400, "User already exists");
  }

  const hashed = await hashedPassword(password);

  const user = await repo.createUser({
    name,
    email,
    password: hashed,
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    },
    accessToken: generateToken(user.id, user.role),
  };
};
export const loginUser = async (email: string, password: string) => {
  const user = await repo.findUserByEmail(email);

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const match = await comparedPassword(password, user.password);

  if (!match) {
    throw new ApiError(401, "Invalid credentials");
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    },
    accessToken: generateToken(user.id, user.role),
  };
};

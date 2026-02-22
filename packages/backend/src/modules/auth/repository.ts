import { User } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { email } });
};

export const createUser = (data: {
  name: string;
  email: string;
  password: string;
  role?: "USER" | "ADMIN";
}): Promise<User> => {
  return prisma.user.create({ data });
};

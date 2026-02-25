import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export const getAllMenus = () => {
  return prisma.menu.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
};

export const getAllMenuById = (id: string) => {
  return prisma.menu.findUnique({
    where: { id },
    include: { category: true },
  });
};

export const createMenu = (data: Prisma.MenuCreateInput) => {
  return prisma.menu.create({ data });
};

export const updateMenuById = (id: string, data: Prisma.MenuUpdateInput) => {
  return prisma.menu.update({
    where: { id },
    data,
  });
};

export const deleteMenu = (id: string) => {
  return prisma.menu.delete({
    where: { id },
  });
};

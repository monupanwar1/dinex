import { prisma } from "@/lib/prisma";

export const findAllCategories = () => {
  return prisma.category.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const findCategoryById = (id: string) => {
  return prisma.category.findUnique({
    where: { id },
    include: { menu: true },
  });
};

export const findCategoryByName = (name: string) => {
  return prisma.category.findUnique({
    where: { name },
  });
};

export const createCategory = (name: string) => {
  return prisma.category.create({
    data: { name },
  });
};

export const updateCategory = (id: string, name: string) => {
  return prisma.category.update({
    where: { id },
    data: { name },
  });
};

export const deleteCategory = (id: string) => {
  return prisma.category.delete({
    where: { id },
  });
};

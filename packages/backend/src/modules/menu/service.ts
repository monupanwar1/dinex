import { Prisma } from "@/generated/prisma/client";
import { ApiError } from "@/utils/ApiError";
import * as repo from "./repository";

export const getMenus = async () => {
  return repo.getAllMenus();
};

export const getMenu = async (id: string) => {
  const menu = await repo.getAllMenuById(id);
  if (!menu) throw new ApiError(404, "Menu not found");
  return menu;
};

export const createMenuItem = async (data: Prisma.MenuCreateInput) => {
  return repo.createMenu(data);
};

export const updateMenuItem = async (
  id: string,
  data: Prisma.MenuUpdateInput,
) => {
  if (!Object.keys(data).length) {
    throw new ApiError(400, "No fields provided for update");
  }

  return repo.updateMenuById(id, data);
};

export const deleteMenuItem = async (id: string) => {
  return repo.deleteMenu(id);
};

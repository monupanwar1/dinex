import { ApiError } from "@/utils/ApiError";
import * as repo from "./repository";

export const getCategories = async () => {
  return repo.findAllCategories();
};

export const getCategory = async (id: string) => {
  const category = await repo.findCategoryById(id);
  if (!category) {
    throw new ApiError(404, "category not found");
  }
  return category;
};

export const createCategoryItem = async (name: string) => {
  const existing = await repo.findCategoryByName(name);

  if (existing) {
    throw new ApiError(404, "category already exists");
  }

  return repo.createCategory(name);
};

export const updateCategoryItem = async (id: string, name: string) => {
  const category = await repo.findCategoryByName(id);

  if (!category) {
    throw new ApiError(404, "category not found");
  }

  return repo.updateCategory(id, name);
};

export const deleteCategoryItem = async (id: string) => {
  const category = await repo.findCategoryByName(id);
  if (!category) {
    throw new ApiError(404, "category not found");
  }
};

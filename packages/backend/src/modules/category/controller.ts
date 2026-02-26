import { Request, Response } from "express";

import * as service from "./service";

export const getAllCategories = async (_: Request, res: Response) => {
  const categories = await service.getCategories();

  res.json({
    success: true,
    data: categories,
  });
};

export const getSingleCategory = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const category = await service.getCategory(req.params.id);

  res.json({
    success: true,
    data: category,
  });
};
export const createCategory = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const category = await service.createCategoryItem(req.params.id);

  res.json({
    success: true,
    data: category,
  });
};

export const updateCategory = async (
  req: Request<{ id: string; name: string }>,
  res: Response,
) => {
  const category = await service.updateCategoryItem(
    req.params.id,
    req.params.name,
  );

  res.json({
    success: true,
    data: category,
  });
};

export const deleteCategory = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  await service.createCategoryItem(req.params.id);

  res.json({
    success: true,
    message: "Category deleted",
  });
};

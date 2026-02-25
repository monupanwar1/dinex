import { Request, Response } from "express";
import * as service from "./service";

export const getAllMenus = async (_: Request, res: Response) => {
  const menus = await service.getMenus();
  res.json({ success: true, data: menus });
};

export const getSingleMenu = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const menu = await service.getMenu(req.params.id);
  res.json({ success: true, data: menu });
};

export const createMenu = async (req: Request, res: Response) => {
  const menu = await service.createMenuItem(req.body);
  res.status(201).json({ success: true, data: menu });
};

export const updateMenu = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const menu = await service.updateMenuItem(req.params.id, req.body);
};

export const deleteMenu = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  await service.deleteMenuItem(req.params.id);
  res.json({ success: true, message: "Menu deleted" });
};

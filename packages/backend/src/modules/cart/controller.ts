import { Request, Response } from "express";
import * as service from "./service";

// interface AuthRequest extends Request<{ id: string }> {
//   user: {
//     id: string;
//     role: string;
//   };
// }

export const getUserCart = async (req: Request, res: Response) => {
  const cart = await service.getCart(req.user.id);

  res.json({
    success: true,
    data: cart,
  });
};

export const addItem = async (req: Request, res: Response) => {
  const { menuId } = req.body;

  const cart = await service.addToCart(req.user.id, menuId);

  res.json({
    success: true,
    data: cart,
  });
};

export const updateItemQuantity = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const { quantity } = req.body;

  const cart = await service.updateQuantity(
    req.user.id,
    req.params.id,
    quantity,
  );

  res.json({
    success: true,
    data: cart,
  });
};

export const deleteItem = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const cart = await service.removeItem(req.user.id, req.params.id);

  res.json({
    success: true,
    data: cart,
  });
};

import { ApiError } from "@/utils/ApiError";
import * as repo from "./repository";

export const getCart = async (userId: string) => {
  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  let cart = await repo.findCartByUserId(userId);

  if (!cart) {
    cart = await repo.createCart(userId);

    if (!cart) {
      throw new ApiError(500, "Failed to create cart");
    }
  }

  const total = cart.items.reduce(
    (sum, item) => sum + item.menu.price * item.quantity,
    0,
  );

  return { ...cart, total };
};

export const addToCart = async (userId: string, menuId: string) => {
  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  if (!menuId) {
    throw new ApiError(400, "Menu ID is required");
  }

  let cart = await repo.findCartByUserId(userId);

  if (!cart) {
    cart = await repo.createCart(userId);

    if (!cart) {
      throw new ApiError(500, "Failed to create cart");
    }
  }

  const existingItem = await repo.findCartItem(cart.id, menuId);

  if (existingItem) {
    await repo.updateCartItemQuantity(
      existingItem.id,
      existingItem.quantity + 1,
    );
  } else {
    await repo.createCartItem(cart.id, menuId, 1);
  }

  return getCart(userId);
};

export const updateQuantity = async (
  userId: string,
  itemId: string,
  quantity: number,
) => {
  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  if (!itemId) {
    throw new ApiError(400, "Cart item ID is required");
  }

  const cart = await repo.findCartByUserId(userId);

  if (!cart) {
    return getCart(userId);
  }

  if (quantity <= 0) {
    await repo.deleteCartItem(itemId);
  } else {
    await repo.updateCartItemQuantity(itemId, quantity);
  }

  return getCart(userId);
};

export const removeItem = async (userId: string, itemId: string) => {
  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  if (!itemId) {
    throw new ApiError(400, "Cart item ID is required");
  }

  const cart = await repo.findCartByUserId(userId);

  if (!cart) {
    return getCart(userId);
  }

  await repo.deleteCartItem(itemId);

  return getCart(userId);
};

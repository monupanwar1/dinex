import { prisma } from "@/lib/prisma";

export const findCartByUserId = (userId: string) => {
  return prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          menu: true,
        },
      },
    },
  });
};
export const createCart = (userId: string) => {
  return prisma.cart.create({
    data: { userId },
  });
};
export const findCartItem = (cartId: string, menuId: string) => {
  return prisma.cartItem.findUnique({
    where: {
      cartId_menuId: {
        cartId,
        menuId,
      },
    },
  });
};
export const createCartItem = (
  cartId: string,
  menuId: string,
  quantity: number,
) => {
  return prisma.cartItem.create({
    data: { cartId, menuId, quantity },
  });
};
export const updateCartItemQuantity = (id: string, quantity: number) => {
  return prisma.cartItem.update({
    where: { id },
    data: { quantity },
  });
};
export const deleteCartItem = (id: string) => {
  return prisma.cartItem.delete({
    where: { id },
  });
};

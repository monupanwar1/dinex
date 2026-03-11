"use server";

import { API_CONFIG } from "@/config/api";
import { Cart } from "@/types/cart";

export const getCart = async (userId: string): Promise<Cart> => {
  const res = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART}?userId=${userId}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch cart");
  }

  const { data } = await res.json();

  return data;
};

export const addToCart = async (menuId: string, quantity = 1) => {
  await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ menuId, quantity }),
  });
};

export const updateCartItem = async (id: string, quantity: number) => {
  await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART}/item/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  });
};

export const deleteCartItem = async (id: string) => {
  await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CART}/item/${id}`, {
    method: "DELETE",
  });
};

import { z } from "zod";

export const addToCartSchema = z.object({
  body: z.object({
    menuId: z.uuid("Invalid menu id"),
    quantity: z.coerce.number().int().min(1).max(20),
  }),
});

export const updateQuantitySchema = z.object({
  params: z.object({
    id: z.uuid("Invalid cart item id"),
  }),
  body: z.object({
    quantity: z.coerce
      .number()
      .int()
      .min(1, "Quantity must be at least 1")
      .max(20, "Max quantity exceeded"),
  }),
});
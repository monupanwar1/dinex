import { z } from "zod";

export const addToCartSchema = z.object({
  body: z.object({
    menuId: z.uuid("Invalid menu id"),
  }),
});

export const updateQuantitySchema = z.object({
  params: z.object({
    id: z.uuid("Invalid cart item id"),
  }),
  body: z.object({
    quantity: z
      .number()
      .int() 
      .min(0, "Quantity cannot be negative")
      .max(20, "Max quantity exceeded"),
  }),
});

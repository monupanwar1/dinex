import { z } from "zod";

export const createMenuSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  description: z.string().trim().min(5, "Description too short"),
  price: z.coerce.number().positive("Price must be positive"),
  imageUrl: z.url("Invalid image URL"),
  categoryId: z.uuid("Invalid category ID"),
});

export const updateMenuSchema = createMenuSchema.partial();

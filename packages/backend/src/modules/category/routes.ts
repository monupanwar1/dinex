import { protect } from "@/middleware/auth/middleware";
import { authorize } from "@/middleware/role/middleware";
import { validate } from "@/middleware/validate/middleware";
import { Router } from "express";

import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
} from "./controller";
import { createCategorySchema, updateCategorySchema } from "./validation";

const router = Router();

// Public
router.get("/", getAllCategories);
router.get("/:id", getSingleCategory);

// Admin
router.post(
  "/",
  protect,
  authorize("ADMIN"),
  validate(createCategorySchema),
  createCategory,
);

router.put(
  "/:id",
  protect,
  authorize("ADMIN"),
  validate(updateCategorySchema),
  updateCategory,
);

router.delete("/:id", protect, authorize("ADMIN"), deleteCategory);

export default router;

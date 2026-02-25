import { protect } from "@/middleware/auth/middleware";
import { authorize } from "@/middleware/role/middleware";
import { validate } from "@/middleware/validate/middleware";
import { Router } from "express";
import {
  createMenu,
  deleteMenu,
  getAllMenus,
  getSingleMenu,
  updateMenu,
} from "./controller";
import { createMenuSchema, updateMenuSchema } from "./validation";

const router = Router();

// Public
router.get("/", getAllMenus);
router.get("/:id", getSingleMenu);

// Admin
router.post(
  "/",
  protect,
  authorize("ADMIN"),
  validate(createMenuSchema),
  createMenu,
);

router.put(
  "/:id",
  protect,
  authorize("ADMIN"),
  validate(updateMenuSchema),
  updateMenu,
);

router.delete("/:id", protect, authorize("ADMIN"), deleteMenu);

export default router;

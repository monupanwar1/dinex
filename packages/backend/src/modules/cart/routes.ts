import { protect } from "@/middleware/auth/middleware";
import { validate } from "@/middleware/validate/middleware";
import { Router } from "express";
import * as controller from "./controller";
import { addToCartSchema, updateQuantitySchema } from "./validation";

const router = Router();

router.get("/", protect, controller.getUserCart);


router.post("/add", validate(addToCartSchema), protect, controller.addItem);

router.patch(
  "/item/:id",
  protect,
  validate(updateQuantitySchema),
  controller.updateItemQuantity,
);

router.delete("/item/:id", protect, controller.deleteItem);

export default router;

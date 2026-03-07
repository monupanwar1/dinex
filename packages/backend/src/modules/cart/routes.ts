import { protect } from "@/middleware/auth/middleware";
import { validate } from "@/middleware/validate/middleware";
import { Router } from "express";
import * as controller from "./controller";
import { addToCartSchema, updateQuantitySchema } from "./validation";

const router = Router();

router.use(protect);

router.get("/", controller.getUserCart);
router.post("/add", validate(addToCartSchema), controller.addItem);
  
router.patch(
  "/item/:id",
  validate(updateQuantitySchema),
  controller.updateItemQuantity,
);

router.delete("/item/:id", controller.deleteItem);

export default router;

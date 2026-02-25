import { errorHandler } from "@/middleware/error/middleware";
import authRoutes from "@/modules/auth/routes";
import menuRoutes from "@/modules/menu/routes";
import express from "express";

export const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/menus", menuRoutes);

app.use(errorHandler);

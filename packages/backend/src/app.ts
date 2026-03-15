import { errorHandler } from "@/middleware/error/middleware";
import authRoutes from "@/modules/auth/routes";
import cartRoutes from "@/modules/cart/routes";
import categoryRoutes from "@/modules/category/routes";
import menuRoutes from "@/modules/menu/routes";
import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";
import express from "express";

export const app = express();
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/menus", menuRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/cart", cartRoutes);

app.use(errorHandler);

import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const schema = z.object({
  PORT: z.string().default("5000"),
  JWT_SECRET: z.string(),
});

export const env = schema.parse(process.env);

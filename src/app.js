import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js"

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: "Content-Type, authorization",
    credentials: true,
  }),
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products",productRoutes)

export default app;
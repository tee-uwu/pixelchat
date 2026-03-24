import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

// ✅ Load .env correctly
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

// ✅ Debug (you can remove later)
console.log("ENV TEST:", process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      // Allow localhost and common development ports
      if (origin.match(/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/)) {
        return callback(null, true);
      }

      // Allow any origin in development for mobile testing
      if (process.env.NODE_ENV !== "production") {
        return callback(null, true);
      }

      // Allow production URL
      if (process.env.NODE_ENV === "production" && origin === process.env.CLIENT_URL) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Production setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// Start server
server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});

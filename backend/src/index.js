import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import adminRouter from "./routes/admin.route.js";
import songRouter from "./routes/song.route.js";
import albumRouter from "./routes/album.route.js";
import statsRouter from "./routes/stat.route.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // parse req.body
app.use(clerkMiddleware());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/songs", songRouter);
app.use("/api/albums", albumRouter);
app.use("/api/stats", statsRouter);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
 
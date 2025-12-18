import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, (req, res) => {
  res.auth.userId;
  res.send("User routh with get method");
});

export default router;

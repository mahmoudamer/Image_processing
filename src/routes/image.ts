import express from "express";
import { imageResizer } from "../controllers/image";
const router = express.Router();

router.get("/resize", (req, res, next) => {
  const img = imageResizer(req);
});

export default router;

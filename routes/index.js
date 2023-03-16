import { Router } from "express";
import productRouter from "./productRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();

router.use(productRouter);

router.use(userRoutes);

export default router;

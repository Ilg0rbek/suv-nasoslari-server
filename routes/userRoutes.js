import { Router } from "express";
import Users from "../controllers/userController.js";

const userRoutes = Router();

userRoutes.post("/login", Users.Login);
// userRoutes.post("/signup", Users.SignUp);

export default userRoutes;

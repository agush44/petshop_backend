import { Router } from "express";
import {
  registerUserController,
  loginUserController,
} from "../controllers/userController.js";
import {
  registerUserSchema,
  loginUserSchema,
} from "../validations/userValidation.js";
import validate from "../middleware/validate.js";

const userRoutes = Router();

userRoutes.post(
  "/register",
  validate(registerUserSchema),
  registerUserController
);
userRoutes.post("/login", validate(loginUserSchema), loginUserController);

export { userRoutes };

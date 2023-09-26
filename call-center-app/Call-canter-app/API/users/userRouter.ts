import express from "express";
import { login, registerUser, getUserAndRelatives, getAllUsersAndRelatives } from "./userCont";
import { isAdmin } from "./middlewareUsers";

const router = express.Router();

router
  .post("/register", registerUser)
  .post("/login", login)
  .get("/userWithRelatives", isAdmin, getUserAndRelatives) // Fetch user data with relatives
  .get("/allUsersWithRelatives", isAdmin, getAllUsersAndRelatives); // Fetch all users with relatives

export default router;
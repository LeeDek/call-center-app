import express from "express";
import { login, registerUser } from "./userCont";
import { isAdmin } from "./middlewareUsers";

const router = express.Router();

router
  .post("/register", registerUser)
  .post("/login", login)
  // .get("/userWithCalls", getUserAndCalls) // Fetch user data with calls
  // .get("/allUsersWithCalls", isAdmin, getAllUsersAndCalls); // Fetch all users with calls

export default router;
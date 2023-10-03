import express from "express";
import { isAdmin } from "./middlewareUsers";
import { login } from "./userCont/login";
import { addUser } from "./userCont/addUser";
import { getUser } from "./userCont/getUser";
import { updatePassword } from "./userCont/updatePassword";

const router = express.Router();

router
.get("/get-user", getUser)
.post("/login", login)
.post("/add-user", addUser)
.patch("/update-password", updatePassword)
  // .get("/userWithCalls", getUserAndCalls) // Fetch user data with calls
  // .get("/allUsersWithCalls", isAdmin, getAllUsersAndCalls); // Fetch all users with calls

export default router;
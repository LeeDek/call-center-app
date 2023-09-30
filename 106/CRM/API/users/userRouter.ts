import express from "express";
import { isAdmin } from "./middlewareUsers";
import { login } from "./userCont/login";
import { addUser } from "./userCont/addUser";

const router = express.Router();

router.post("/login", login)
.post("/add-user", addUser);
// .get("/userWithCalls", getUserAndCalls) // Fetch user data with calls
// .get("/allUsersWithCalls", isAdmin, getAllUsersAndCalls); // Fetch all users with calls

export default router;

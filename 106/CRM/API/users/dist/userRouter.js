"use strict";
exports.__esModule = true;
var express_1 = require("express");
var login_1 = require("./userCont/login");
var addUser_1 = require("./userCont/addUser");
var router = express_1["default"].Router();
router.post("/login", login_1.login)
    .post("/add-user", addUser_1.addUser);
// .get("/userWithCalls", getUserAndCalls) // Fetch user data with calls
// .get("/allUsersWithCalls", isAdmin, getAllUsersAndCalls); // Fetch all users with calls
exports["default"] = router;

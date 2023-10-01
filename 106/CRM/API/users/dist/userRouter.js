"use strict";
exports.__esModule = true;
var express_1 = require("express");
var login_1 = require("./userCont/login");
var addUser_1 = require("./userCont/addUser");
var getUser_1 = require("./userCont/getUser");
var updatePassword_1 = require("./userCont/updatePassword");
var router = express_1["default"].Router();
router
    .get("/get-user", getUser_1.getUser)
    .post("/login", login_1.login)
    .post("/add-user", addUser_1.addUser)
    .patch("/update-password", updatePassword_1.updatePassword);
// .get("/userWithCalls", getUserAndCalls) // Fetch user data with calls
// .get("/allUsersWithCalls", isAdmin, getAllUsersAndCalls); // Fetch all users with calls
exports["default"] = router;

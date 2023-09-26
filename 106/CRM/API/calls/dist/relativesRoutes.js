"use strict";
exports.__esModule = true;
var express_1 = require("express");
var relativesCont_1 = require("./relativesCont");
var middlewareRelatives_1 = require("./middlewareRelatives");
var router = express_1["default"].Router();
router.post('/add-relative', relativesCont_1.addRelative); // Use POST for adding relatives
router.get('/get-relatives', relativesCont_1.getRelatives);
router["delete"]('/delete-relative/:relativeId', middlewareRelatives_1.isAdmin, relativesCont_1.deleteRelative);
router.patch('/update-relative', relativesCont_1.updateRelative);
router.get('/get-user-relatives', relativesCont_1.getUserRelatives);
exports["default"] = router;

"use strict";
exports.__esModule = true;
var express_1 = require("express");
var callsCont_1 = require("./callsCont");
var router = express_1["default"].Router();
router
    .post('/add-call', callsCont_1.addCall) // Use POST for adding relatives
    .get('/get-calls', callsCont_1.getCalls)["delete"]('/delete-call', callsCont_1.deleteCall)
    // .patch('/update-call', updateCall)
    .get('/get-user-calls', callsCont_1.getUserCalls);
exports["default"] = router;

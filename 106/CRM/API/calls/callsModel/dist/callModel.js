"use strict";
exports.__esModule = true;
exports.CallSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema;
var DepartmentType;
(function (DepartmentType) {
    DepartmentType["Department1"] = "\u05EA\u05DB\u05E0\u05D5\u05DF \u05E2\u05D9\u05E8\u05D5\u05E0\u05D9";
    DepartmentType["Department2"] = "\u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05E1\u05D1\u05D9\u05D1\u05D4";
    DepartmentType["Department3"] = "\u05D4\u05E0\u05D3\u05E1\u05EA \u05EA\u05E0\u05D5\u05E2\u05D4";
    DepartmentType["Department4"] = "\u05D1\u05E2\u05DC\u05D9 \u05D7\u05D9\u05D9\u05DD";
    DepartmentType["Department5"] = "\u05DE\u05E4\u05D2\u05E2\u05D9 \u05EA\u05D1\u05E8\u05D5\u05D0\u05D4";
    DepartmentType["Department6"] = "\u05D1\u05D9\u05D8\u05D7\u05D5\u05DF";
    DepartmentType["Department7"] = "\u05EA\u05D7\u05D6\u05D5\u05E7\u05EA \u05E8\u05D7\u05D5\u05D1\u05D5\u05EA";
    DepartmentType["Department8"] = "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD";
    DepartmentType["Department9"] = "\u05EA\u05D7\u05D1\u05D5\u05E8\u05D4 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9\u05EA";
    DepartmentType["Department10"] = "\u05EA\u05E7\u05DC\u05D5\u05EA \u05EA\u05D7\u05D6\u05D5\u05E7\u05D4 ";
})(DepartmentType || (DepartmentType = {}));
var Status;
(function (Status) {
    Status["done"] = "done";
    Status["inProcess"] = "inProcess";
    Status["received"] = "received";
})(Status || (Status = {}));
exports.CallSchema = new Schema({
    operatorEmail: String,
    name: String,
    phoneNum: String,
    callInfo: String,
    department: DepartmentType,
    status: Status
});
var CallModel = mongoose_1.model("calls", exports.CallSchema);
exports["default"] = CallModel;

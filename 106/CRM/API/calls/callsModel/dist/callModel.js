"use strict";
exports.__esModule = true;
exports.CallSchema = void 0;
var mongoose_1 = require("mongoose");
var departments_1 = require("../../enums/departments");
var status_1 = require("../../enums/status");
var Schema = mongoose_1["default"].Schema;
exports.CallSchema = new Schema({
    operatorEmail: String,
    name: String,
    phoneNum: String,
    callInfo: String,
    department: departments_1.Department,
    status: status_1.Status
});
var CallModel = mongoose_1.model("calls", exports.CallSchema);
exports["default"] = CallModel;
// enum DepartmentType {
//   Department1 = "תכנון עירוני",
//   Department2 = "איכות הסביבה",
//   Department3 = "הנדסת תנועה",
//   Department4 = "בעלי חיים",
//   Department5 = "מפגעי תברואה",
//   Department6 = "ביטחון",
//   Department7 = "תחזוקת רחובות",
//   Department8 = "פרויקטים מיוחדים",
//   Department9 = "תחבורה ציבורית",
//   Department10 = "תקלות תחזוקה ",
// }
// enum Status {
//   done = "done",
//   inProcess = "inProcess",
//   received = "received",
// }

"use strict";
exports.__esModule = true;
exports._calls = exports.userCalls = exports.Call = void 0;
var mongoose_1 = require("mongoose");
var departments_1 = require("../../enums/departments");
var status_1 = require("../../enums/status");
var Schema = mongoose_1["default"].Schema;
var Call = /** @class */ (function () {
    function Call(fullName, phone, date, dept, status) {
        this.fullName = fullName;
        this.phone = phone;
        this.date = date;
        this.dept = dept;
        this.status = status;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    Call.prototype.changeStatus = function (newStatus) {
        this.status = newStatus;
    };
    return Call;
}());
exports.Call = Call;
exports.userCalls = [];
var CallSchema = new Schema({
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    dept: {
        type: String,
        "enum": Object.values(status_1.Status),
        "default": departments_1.Department.Operations
    },
    callInfo: String,
    status: { type: String, "enum": Object.values(status_1.Status), "default": status_1.Status.Open },
    user: { type: Schema.Types.ObjectId, ref: "users", required: true }
});
var CallModel = mongoose_1.model("calls", CallSchema);
exports._calls = [];
exports["default"] = CallModel;
// -------------------------------------------------------------------------------------
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

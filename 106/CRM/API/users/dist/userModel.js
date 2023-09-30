"use strict";
exports.__esModule = true;
exports.users = exports.UserModel = exports.UserSchema = exports.User = void 0;
var mongoose_1 = require("mongoose");
var role_1 = require("../enums/role");
var User = /** @class */ (function () {
    function User(_a) {
        var userName = _a.userName, email = _a.email, password = _a.password;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.id = this.id;
    }
    return User;
}());
exports.User = User;
exports.UserSchema = new mongoose_1.Schema({
    userName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, "enum": Object.values(role_1.Role), "default": role_1.Role.User },
    firstEntry: { type: Boolean, "default": true }
});
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
exports.users = [];

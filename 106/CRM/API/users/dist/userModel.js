"use strict";
exports.__esModule = true;
exports.users = exports.UserModel = exports.UserSchema = exports.User = exports.Gender = void 0;
var mongoose_1 = require("mongoose");
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
var User = /** @class */ (function () {
    function User(_a) {
        var userName = _a.userName, gender = _a.gender, email = _a.email, password = _a.password;
        this.userName = userName;
        this.gender = gender;
        if (email)
            this.email = email;
        if (password)
            this.password = password;
    }
    User.prototype.updateGender = function (newGender) {
        this.gender = newGender;
    };
    return User;
}());
exports.User = User;
exports.UserSchema = new mongoose_1.Schema({
    userName: { type: String, required: false },
    gender: { type: String, "enum": Object.values(Gender), required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    familyMembers: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'users' }],
    isAdmin: { type: Boolean,
        "default": false }
});
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
exports.users = [];

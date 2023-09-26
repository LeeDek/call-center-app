"use strict";
exports.__esModule = true;
exports.relatives = exports.RelativeModel = exports.userRelatives = exports.UserRelatives = exports.Relative = void 0;
var mongoose_1 = require("mongoose");
var relations_1 = require("../enums/relations");
var Relative = /** @class */ (function () {
    function Relative(fullName, birthDate, country, relation) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.country = country;
        this.relation = relation;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    Relative.prototype.changeRelation = function (newRelation) {
        this.relation = newRelation;
    };
    return Relative;
}());
exports.Relative = Relative;
var UserRelatives = /** @class */ (function () {
    function UserRelatives(user, relative) {
        this.user = user;
        this.relative = relative;
        this.id = Math.random().toString(36).substr(2, 9);
        this.isVerified = false;
    }
    return UserRelatives;
}());
exports.UserRelatives = UserRelatives;
exports.userRelatives = [];
var RelativeSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    birthDate: { type: String, required: true },
    country: { type: String, required: true },
    relation: { type: String, "enum": Object.values(relations_1.Relation), "default": relations_1.Relation.Choose },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'users', required: true }
});
exports.RelativeModel = mongoose_1.model('relatives', RelativeSchema);
exports.relatives = [];

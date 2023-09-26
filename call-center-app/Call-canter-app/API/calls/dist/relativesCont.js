"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getUserRelatives = exports.updateRelative = exports.deleteRelative = exports.addRelative = exports.getRelatives = void 0;
var userModel_1 = require("../users/userModel");
var relativesModel_1 = require("./relativesModel");
function getRelatives(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var relativesDB, relativesWithUsers, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, relativesModel_1.RelativeModel.find({}).populate('user').exec()];
                case 1:
                    relativesDB = _a.sent();
                    relativesWithUsers = relativesDB.map(function (relative) {
                        var user = relative.user;
                        return {
                            id: relative._id,
                            fullName: relative.fullName,
                            birthDate: relative.birthDate,
                            country: relative.country,
                            relation: relative.relation,
                            user: {
                                _id: user._id,
                                userName: user.userName,
                                gender: user.gender,
                                email: user.email
                            }
                        };
                    });
                    res.send({ relatives: relativesWithUsers });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    res.status(500).send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getRelatives = getRelatives;
function addRelative(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, fullName, birthDate, country, relation, userEmail, user, existingRelative, newRelative, relativeDB, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    _a = req.body, fullName = _a.fullName, birthDate = _a.birthDate, country = _a.country, relation = _a.relation, userEmail = _a.userEmail;
                    if (!fullName || !country || !birthDate || !relation) {
                        return [2 /*return*/, res.status(400).send({ error: "Please complete all fields" })];
                    }
                    return [4 /*yield*/, userModel_1.UserModel.findOne({ email: userEmail })];
                case 1:
                    user = _b.sent();
                    if (!user) {
                        return [2 /*return*/, res.status(404).send({ error: "User not found with the provided email" })];
                    }
                    return [4 /*yield*/, relativesModel_1.RelativeModel.findOne({
                            fullName: fullName,
                            birthDate: birthDate,
                            country: country,
                            relation: relation,
                            user: user._id
                        })];
                case 2:
                    existingRelative = _b.sent();
                    if (existingRelative) {
                        return [2 /*return*/, res.status(400).send({ error: "Family member with the same details already exists" })];
                    }
                    newRelative = new relativesModel_1.RelativeModel({
                        fullName: fullName,
                        birthDate: birthDate,
                        country: country,
                        relation: relation,
                        user: user._id
                    });
                    return [4 /*yield*/, newRelative.save()];
                case 3:
                    relativeDB = _b.sent();
                    console.log(relativeDB);
                    res.status(201).send({ ok: true, relative: relativeDB });
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _b.sent();
                    console.error(error_2);
                    res.status(500).send({ error: error_2.message });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.addRelative = addRelative;
function deleteRelative(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var relativeId, relativeDB, relatives_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    relativeId = req.params.relativeId;
                    return [4 /*yield*/, relativesModel_1.RelativeModel.findByIdAndDelete(relativeId)];
                case 1:
                    relativeDB = _a.sent();
                    if (!relativeDB) {
                        return [2 /*return*/, res.status(404).send({ error: "Relative not found" })];
                    }
                    return [4 /*yield*/, relativesModel_1.RelativeModel.find({})];
                case 2:
                    relatives_1 = _a.sent();
                    res.send({ relativeDB: relativeDB, relatives: relatives_1 }); // Send the deleted relative and the updated list
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    res.status(500).send({ error: error_3.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteRelative = deleteRelative;
function updateRelative(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, fullName, birthDate, country, relation, relative, updatedRelative, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, id = _a.id, fullName = _a.fullName, birthDate = _a.birthDate, country = _a.country, relation = _a.relation;
                    return [4 /*yield*/, relativesModel_1.RelativeModel.findById(id)];
                case 1:
                    relative = _b.sent();
                    if (!relative) {
                        return [2 /*return*/, res.status(404).send({ error: "Relative not found" })];
                    }
                    // Update the relative's information if provided
                    if (fullName) {
                        relative.fullName = fullName;
                    }
                    if (birthDate) {
                        relative.birthDate = birthDate;
                    }
                    if (country) {
                        relative.country = country;
                    }
                    if (relation) {
                        relative.relation = relation;
                    }
                    return [4 /*yield*/, relative.save()];
                case 2:
                    updatedRelative = _b.sent();
                    res.send({ message: "Relative updated successfully", relative: updatedRelative });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    console.error(error_4);
                    res.status(400).send({ error: error_4.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateRelative = updateRelative;
function getUserRelatives(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, user, relativesDB, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    email = req.query.email;
                    if (!email) {
                        throw new Error("email is required");
                    }
                    return [4 /*yield*/, userModel_1.UserModel.findOne({ email: email })];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        throw new Error("User not found with the provided email");
                    }
                    return [4 /*yield*/, relativesModel_1.RelativeModel.find({ user: user._id })];
                case 2:
                    relativesDB = _a.sent();
                    res.send({ relatives: relativesDB });
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    res.status(500).send({ error: error_5.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getUserRelatives = getUserRelatives;

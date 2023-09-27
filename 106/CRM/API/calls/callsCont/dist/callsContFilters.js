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
exports.queryByDynamicParams = exports.getCallsByDept = exports.getCallsByStatus = void 0;
var callModel_1 = require("../callsModel/callModel");
function getCallsByStatus(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var currentStatus, callsDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    currentStatus = req.body.status;
                    if (!currentStatus)
                        return [2 /*return*/, res
                                .status(404)
                                .json({
                                error: "status is ${currentStatus}, invalided or not received"
                            })];
                    return [4 /*yield*/, callModel_1["default"].find({ status: currentStatus })];
                case 1:
                    callsDB = _a.sent();
                    if (!callsDB)
                        return [2 /*return*/, res
                                .status(404)
                                .json({ error: "${currentStatus} calls are not found" })];
                    res.send({ callsDB: callsDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getCallsByStatus = getCallsByStatus;
function getCallsByDept(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var currentDept, callsDB, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    currentDept = req.body.dept;
                    if (!currentDept)
                        return [2 /*return*/, res
                                .status(404)
                                .json({ error: "status is ${currentDept}, invalided or not received" })];
                    return [4 /*yield*/, callModel_1["default"].find({ status: currentDept })];
                case 1:
                    callsDB = _a.sent();
                    if (!callsDB)
                        return [2 /*return*/, res
                                .status(404)
                                .json({ error: "${currentDept} calls are not found" })];
                    res.send({ callsDB: callsDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getCallsByDept = getCallsByDept;
function queryByDynamicParams(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, dept, status, query, callsDB, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, dept = _a.dept, status = _a.status;
                    query = {};
                    if (dept) {
                        query["dept"] = dept;
                    }
                    if (status) {
                        query["status"] = status;
                    }
                    console.log("Search operation by dept:" + dept + " && " + status + " ...");
                    return [4 /*yield*/, callModel_1["default"].find(query)];
                case 1:
                    callsDB = _b.sent();
                    if (!callsDB)
                        return [2 /*return*/, res
                                .status(404)
                                .json({ error: dept + " and " + status + " calls are not found" })];
                    res.send({ callsDB: callsDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.error(error_3);
                    res.status(500).json({ error: "server error" });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.queryByDynamicParams = queryByDynamicParams;

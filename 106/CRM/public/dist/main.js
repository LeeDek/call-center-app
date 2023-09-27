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
exports.handleDeleteCalls = exports.getUserCalls = void 0;
function renderCalls(callsData, targetElement) {
    // targetElement.innerHTML = ''; // Clear the target element
    // if (!relativesData || relativesData.length === 0) {
    //     targetElement.innerHTML = '<p>No relatives found.</p>';
    //     return;
    // }
    // const relativesList = document.createElement('ul');
    // relativesList.style.listStyle = 'none';
    // relativesData.forEach(relative => {
    //     const relativeItem = document.createElement('li');
    //     const birthDate = new Date(relative.birthDate);
    //     const formattedBirthDate = `${birthDate.getDate()}-${birthDate.getMonth() + 1}-${birthDate.getFullYear()}`;
    //     relativeItem.innerHTML = `
    //     <span style="font-weight: bold">${relative.fullName}</span> is my:
    //     <span style="font-weight: bold">${relative.relation}</span> - born in:
    //     <span style="font-weight: bold">${formattedBirthDate}</span> - lives in:
    //     <span style="font-weight: bold">${relative.country}</span>
    //     <button onclick="handleUpdateRelatives('${relative.id}')">Update</button>
    //     <button onclick="handleDeleteRelatives('${relative.id}')">Delete</button>
    //   `;
    //     relativesList.appendChild(relativeItem);
    // });
    // targetElement.appendChild(relativesList);
}
// A function to get the user's relatives from the server by email
function getUserCalls(email) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
exports.getUserCalls = getUserCalls;
function handleDeleteCalls(relativeId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
exports.handleDeleteCalls = handleDeleteCalls;

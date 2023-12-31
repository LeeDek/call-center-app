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
var Relation;
(function (Relation) {
    Relation["Choose"] = "Choose";
    Relation["Mother"] = "Mother";
    Relation["Father"] = "Father";
    Relation["Brother"] = "Brother";
    Relation["Sister"] = "Sister";
    Relation["Sibling"] = "Sibling";
    Relation["Spouse"] = "Spouse";
    Relation["Son"] = "Son";
    Relation["Daughter"] = "Daughter";
    Relation["Granddaughter"] = "Granddaughter";
    Relation["Grandson"] = "Grandson";
    Relation["Uncle"] = "Uncle";
    Relation["Aunt"] = "Aunt";
    Relation["Cousin"] = "Cousin";
    Relation["Niece"] = "Niece";
    Relation["Nephew"] = "Nephew";
    Relation["Other"] = "Other";
})(Relation || (Relation = {}));
// Function to add a relative for a user
function handleAddRelative(event) {
    return __awaiter(this, void 0, void 0, function () {
        var email, fullName, birthDate, country, relationSelect, selectedRelation, newRelative, response, relatives, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    event.preventDefault();
                    email = getEmailFromQuery();
                    if (!email)
                        throw new Error("No email");
                    fullName = event.target.elements.fullName.value;
                    birthDate = event.target.elements.birthDate.value;
                    country = event.target.elements.country.value;
                    relationSelect = document.getElementById('relation');
                    selectedRelation = relationSelect.value;
                    if (!fullName || !birthDate || !country || selectedRelation === Relation.Choose) {
                        throw new Error("Please complete all fields and select a valid relation");
                    }
                    newRelative = {
                        fullName: fullName,
                        birthDate: birthDate,
                        country: country,
                        relation: selectedRelation,
                        userEmail: email
                    };
                    return [4 /*yield*/, fetch('/API/relatives/add-relative', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newRelative)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Server returned " + response.status + " " + response.statusText);
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    relatives = (_a.sent()).relatives;
                    console.log(relatives);
                    return [4 /*yield*/, handleGetRelatives()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// Function to get user's relatives from the server
function getRelativesFromServer(email) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/relatives/get-user-relatives?email=" + email)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.relatives];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Render relatives to the screen
function handleGetRelatives() {
    return __awaiter(this, void 0, void 0, function () {
        var email, relatives, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    email = getEmailFromQuery();
                    if (!email)
                        throw new Error("No email");
                    return [4 /*yield*/, getRelativesFromServer(email)];
                case 1:
                    relatives = _a.sent();
                    console.log(relatives);
                    renderRelatives(relatives, document.querySelector("#relatives"));
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getEmailFromQuery() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

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
function renderState() {
    try {
        var states = document.querySelectorAll(".status");
        console.log("states");
        states.forEach(function (state) {
            var element = state;
            if (element.innerHTML == "Fixed") {
                element.style.color = "white";
                element.style.backgroundColor = "lime";
            }
            if (element.innerHTML == "Pending") {
                element.style.color = "white";
                element.style.backgroundColor = "blue";
            }
            if (element.innerHTML == "Rejected") {
                element.style.color = "white";
                element.style.backgroundColor = "red";
            }
            element.addEventListener("click", function () {
                console.log("clicked");
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
renderState();
function createIssue(event) {
    try {
        event.preventDefault();
        var callerName = document.getElementById("callerName")
            .value;
        var callerPhone = (document.getElementById("callerPhone")).value;
        var issueInfo = document.getElementById("issueInfo")
            .value;
        var issueStatus = (document.getElementById("issueStatus")).value;
        var callDepartment = (document.getElementById("issueInfo")).value;
        var inputs = {
            callerName: callerName,
            callerPhone: callerPhone,
            issueInfo: issueInfo,
            issueStatus: issueStatus,
            callDepartment: callDepartment
        };
        addCallToMongo(inputs);
        var table = document.querySelector(".client-requests table tbody");
        var newRow = table.insertRow();
        newRow.innerHTML = "\n        <td>" + callerName + "</td>\n        <td>" + issueInfo + "</td>\n        <td class=\"status clickable\">" + issueStatus + "</td>\n    ";
        renderState();
        var issues = JSON.parse(localStorage.getItem("issues")) || [];
        var newIssue = { date: callerName, type: issueInfo, status: issueStatus };
        issues.push(newIssue);
        localStorage.setItem("issues", JSON.stringify(issues));
        var form = document.getElementById("issueForm");
        form.reset();
    }
    catch (error) {
        console.error(error);
    }
}
document.getElementById("issueForm").addEventListener("submit", createIssue);
function addCallToMongo(inputs) {
    return __awaiter(this, void 0, void 0, function () {
        var postInit, response, ok, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    postInit = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer YourAccessToken"
                        },
                        body: JSON.stringify(inputs)
                    };
                    return [4 /*yield*/, fetch("/API/calls//add-call", postInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ok = (_a.sent()).ok;
                    if (!ok) {
                        throw new Error("Error in server side, call was not create successfuly");
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}

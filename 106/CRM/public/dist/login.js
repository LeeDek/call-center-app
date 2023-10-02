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
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _user, response, _a, error, user, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    ev.preventDefault(); // stop form from submitting
                    _user = {
                        userName: ev.target.userName,
                        password: ev.target.password.value,
                        email: ev.target.email.value
                    };
                    if (!_user.email || !_user.password) {
                        throw new Error("Please complete all fields");
                    }
                    return [4 /*yield*/, fetch("/API/users/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(_user)
                        })];
                case 1:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    _a = _b.sent(), error = _a.error, user = _a.user;
                    console.log(error);
                    if (!user.role)
                        throw new Error("cannot detect user role");
                    if (error)
                        throw new Error(error);
                    if (user.firstEntry) {
                        renderUpdateFirstPassword(user._id, user.userName);
                    }
                    else {
                        switch (user.role) {
                            case 'admin':
                                window.location.href = "/admin.html";
                                break;
                            case 'departmentMng':
                                window.location.href = "/manager.html";
                                break;
                            case 'user':
                                window.location.href = "/main.html";
                                break;
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderUpdateFirstPassword(userId, name) {
    try {
        var html = "\n<h2>Hi " + name + "</h2>\n<h3>It's your first entry to our site. <br> Please create a new password </h3>\n\n<form onsubmit=\"updatePassword(event, " + userId + ")\">\n<input type=\"password\" name=\"password\" placeholder=\"New password\">\n<input type=\"password\" name=\"confirmPassword\" placeholder=\"Confirm password\">\n<button type=\"submit\">Create</button>\n</form>\n";
        var loginRoot = document.querySelector('#login');
        loginRoot.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function updatePassword(ev, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var newPassword, confirmPassword, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    ev.preventDefault();
                    newPassword = ev.target.password.value;
                    confirmPassword = ev.target.confirmPassword.value;
                    if (!(newPassword === confirmPassword)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch('API/users/userCont/update-password', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ newPassword: newPassword, userId: userId })
                        })];
                case 1:
                    response = _a.sent();
                    location.reload();
                    return [3 /*break*/, 3];
                case 2: throw new Error("The passwords do not match");
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}

// import { Status } from "./status/status";
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
var _this = this;
// import { Status } from '../API/enums/status';
var callsData = [
    {
        date: "1-10-2023",
        requestType: "אין מיזוג בבית הספר הדמוקרטי",
        dept: "Operations",
        status: "Fixed"
    },
    {
        date: "30-09-2023",
        requestType: "משאית נתקעה ברחוב אהובה עוזרי",
        dept: "Operations",
        status: "Fixed"
    },
];
var Departments;
(function (Departments) {
})(Departments || (Departments = {}));
var sortStatusButton = document.getElementById("sortStatus");
sortStatusButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var currentStatus, response, data, callsDB, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentStatus = Status.Open;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("/api/calls/getCallsByStatus", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ status: currentStatus })
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                callsDB = data.callsDB;
                // Update the table with the sorted data
                updateTableWithSortedData(callsDB);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
function updateTableWithSortedData(sortedData) {
    var tableBody = document.querySelector("body > main > div > section > table > tbody");
    tableBody.innerHTML = ""; // Clear existing rows
    // Loop through sorted data and render rows
    sortedData.forEach(function (call) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>" + call.date + "</td>\n      <td>" + call.dept + "</td>\n      <td>" + call.status + "</td>\n    ";
        tableBody.appendChild(row);
    });
    updateTableWithSortedData(sortedData);
}
// Function to render the table rows based on data
function renderCalls(callsData) {
    console.log("test");
    var table = document.querySelector("tbody");
    console.log(table);
    // Clear the existing table rows
    // table.innerHTML = "";
    // Loop through the calls data and create table rows
    callsData.forEach(function (callD) {
        var row = document.createElement("tr");
        console.log(row);
        // Create table cells for each column
        var dateCell = document.createElement("td");
        dateCell.textContent = callD.date;
        var deptCell = document.createElement("td");
        deptCell.textContent = callD.dept;
        var contentCell = document.createElement("td");
        contentCell.textContent = callD.requestType;
        var statusCell = document.createElement("td");
        statusCell.textContent = callD.status;
        statusCell.classList.add("status", "clickable");
        // Append the cells to the row
        row.appendChild(dateCell);
        row.appendChild(contentCell);
        row.appendChild(deptCell);
        row.appendChild(statusCell);
        // Append the row to the table body
        table.appendChild(row);
    });
}
// Call the render function with your data
renderCalls(callsData);

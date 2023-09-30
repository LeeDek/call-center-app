"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const cookieParser = require('cookie-parser')
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const cookieParser = require("cookie-parser");
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.use(cookieParser());
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
const { MONGO_URI } = process.env;
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => {
    console.info("MongoDB connected successfully:)");
})
    .catch((err) => {
    console.error(err);
});
//router to products
const userRouter_1 = __importDefault(require("./API/users/userRouter"));
app.use("/API/users", userRouter_1.default);
const callsRoutes_1 = __importDefault(require("./API/calls/callsRoutes/callsRoutes"));
app.use("/API/calls", callsRoutes_1.default);
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ error: "Something went wrong." });
// });
app.listen(PORT, () => {
    console.log(`APP listening on PORT ${PORT}`);
});

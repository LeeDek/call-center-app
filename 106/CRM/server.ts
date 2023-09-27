// const cookieParser = require('cookie-parser')
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

//static files
app.use(express.static("public"));

//body
app.use(express.json());
const { MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.info("MongoDB connected successfully:)");
  })
  .catch((err) => {
    console.error(err);
  });

//router to products

import userRouter from "./API/users/userRouter";
app.use("/API/users", userRouter);

import callsRoutes from "./API/calls/callsRoutes/callsRoutes";
app.use("/API/calls", callsRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong." });
});

app.listen(PORT, () => {
  console.log(`APP listening on PORT ${PORT}`);
});

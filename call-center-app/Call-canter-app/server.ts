const cookieParser = require('cookie-parser')
import express from "express";
import mongoose from 'mongoose';
import 'dotenv/config'


const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

//static files
app.use(express.static("public"));

//body
app.use(express.json());
const {MONGO_URI} = process.env

mongoose.connect(MONGO_URI).then (() => {
  console.info("MongoDB connected")
}).catch(err =>{console.error(err)})

//router to products

// get router from userRouter
import userRouter from "./API/users/userRouter";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter)

import relativesRoutes from "./API/calls/relativesRoutes";
app.use("/API/relatives", relativesRoutes);

app.use((err, req, res, next) => { 
  console.error(err);
  res.status(500).json({ error: 'Something went wrong.' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



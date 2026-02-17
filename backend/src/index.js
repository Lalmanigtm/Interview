 
 import express from "express";
 import { ENV } from "./lib/env.js";

 const app = express();
 console.log(ENV.PORT)
 console.log(ENV.DB_URL)

 app.use("/health", (req, res) =>{
  res.status(200).json({msg: "Welcome to the Home Page"})
 });

 app.listen(ENV.PORT, () =>{
  console.log("Welcome to the world of New: ",ENV.PORT)
 })
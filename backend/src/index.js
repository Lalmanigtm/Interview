 
 import express from "express";
 import path from "path";
 import { ENV } from "./lib/env.js";

 const app = express();
//  console.log(ENV.PORT)
//  console.log(ENV.DB_URL)
const __dirname = path.resolve();

 app.use("/health", (req, res) =>{
  res.status(200).json({msg: "Welcome to the Home Page"})
 });
 app.use("/books", (req, res) =>{
  res.status(200).json({msg: "Welcome to the BOOKING"})
 });

// Make our app ready for deployment
if(ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")))

  app.get("/{*any}", (req, res) =>{
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  })

}

 app.listen(ENV.PORT, () =>{
  console.log("Welcome to the world of New: ",ENV.PORT)
 })
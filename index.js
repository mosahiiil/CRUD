const express = require("express");
const mongoose = require("mongoose");
const {connectToDB}=require("./connection");
const staticUrl=require("./routes/staticUrl");
const methodOverride = require('method-override');
const Blog=require("./models/Blog");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views","./views");

connectToDB("mongodb://127.0.0.1:27017/blogDB") .then(() => console.log("MongoDB connected"));

app.use("/",staticUrl);

  // Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
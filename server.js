const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const session = require("express-session");
const { route } = require("./routes/route");

const app = express();

//app.set("views", path.join(__dirname, "views"));
dotenv.config();

const port = process.env.PORT || 5000;

app.use(
  session({
    secret: process.env.SESSION_SECRET || "abc",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use("/getFile", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");

app.use("/", route);
app.listen(port, () => {
  console.log(`Server running successfullt at ${port}`);
});

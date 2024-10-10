const express = require("express");
const path = require("path");
const { Authenticator } = require("../middlewares/authentication");
const { upload } = require("../config/multerConfig");
const { Login, SignUp } = require("../controllers/LoginSignUp");
const {
  handleFileUpload,
  sendFileToUser,
} = require("../controllers/userUploads");

const route = express.Router();

//middleware to check user is authenticated or not

route.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});
route.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});
route.post("/signup", SignUp);
route.post("/login", Login);

route.get("/dashboard", Authenticator, (req, res) => {
  res.render("fileUpload", {
    user: req.session.user,
  });
});
route.post("/upload", upload.single("pic"), handleFileUpload);
route.get("/getFile/:user/:filename", sendFileToUser);

module.exports = { route };

const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "../data/users.json");

function SignUp(req, res) {
  fs.readFile(filePath, "utf-8", (readErr, data) => {
    if (readErr) {
      console.log(err);
      res.status(400).json({ msg: "Error occured in accessing users" });
    } else {
      let obj = req.body;
      data = JSON.parse(data);
      data.push(obj);
      fs.writeFile(filePath, JSON.stringify(data), (writeErr) => {
        if (writeErr) {
          res.status(400).json({ msg: "Error in writing users" });
        } else {
          console.log("User created successfully");
          res.status(201).json({ msg: "User created successfully" });
        }
      });
    }
  });
}

function Login(req, res) {
  fs.readFile(filePath, "utf-8", (logErr, users) => {
    if (logErr) {
      console.log(logErr);
      res.status("400").json({ msg: "Error in accessing getting users" });
    } else {
      let Users = JSON.parse(users);
      let user = Users.filter((u) => {
        return (
          u.username === req.body.username && u.password === req.body.password
        );
      });
      if (user.length > 0) {
        console.log("User logged successfully");
        req.session.user = req.body;
        res.redirect("/dashboard");
      } else {
        console.log("User not found");
        res.status(404).json({ msg: "User not found" });
      }
    }
  });
}

module.exports = { Login, SignUp };

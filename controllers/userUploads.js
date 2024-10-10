const path = require("path");
function handleFileUpload(req, res) {
  res.status(200).json({ msg: "Successfully accepted" });
}
function sendFileToUser(req, res) {
  try {
    let user = req.params.user;
    let filename = req.params.filename;
    console.log(user, filename);
    res.sendFile(__dirname, `../uploads/${user}/${filename}`);
  } catch (err) {
    console.log("Err");
    res.status(404).json({ msg: err });
  }
}

module.exports = { handleFileUpload, sendFileToUser };

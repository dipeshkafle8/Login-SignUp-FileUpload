function Authenticator(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ msg: "You are not allowed to access this domain" });
  }
}

module.exports = { Authenticator };

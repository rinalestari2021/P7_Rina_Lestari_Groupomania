const jwt = require("jsonwebtoken"); //standard method for secure data exchange between two parties user & server

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    req.token = jwt.verify(token, `${process.env.JWT_TOKEN}`);
    next();
  } catch (error) {
    res.status(401).json({ error: error | "Bad request" });
  }
};

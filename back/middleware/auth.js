const dotenv = require("dotenv").config({ encoding: "latin1" });
const jwt = require("jsonwebtoken"); //standard method for secure data exchange between two parties user & server

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer")[1].split('"')[1];
    jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
      req.userId = decoded.UserId;
      next();
    });
  } catch (error) {
    res.status(401).json({ error: error | "Bad request" });
  }
};

const dotenv = require("dotenv").config({ encoding: "latin1" });
const { User } = require("../models");
// Next : replace bcrypt with CryptoJS
// Allows to easily create a hash out of a password string
const bcrypt = require("bcrypt");
// JSON Web Token is a compact URL-safe means of representing claims to be transferred between two parties.
const jwt = require("jsonwebtoken");
const fs = require("fs");

// Model : SignUp
exports.signup = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 6);
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
    });

    await user.save();

    res.status(201).json({
      message: "User created",
    });
  } catch (error) {
    res.status(400).json({ error: "Email already in use" });
  }
};

// Model : SignIn
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    res.status(200).json({
      // Modify UserId
      token: jwt.sign(
        { UserId: user.id, isAdmin: user.isAdmin },
        process.env.JWT_TOKEN,
        {
          expiresIn: "365days",
        }
      ),
      user: user,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// Model : delete user
exports.deleteAccount = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (user.avatar !== null) {
      const filename = user.avatar.split("/images/")[1];
      fs.unlink(`images/${filename}`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("This image is deleted");
        }
      });
      User.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "User deleted" });
    } else {
      User.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "User deleted" });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

// Model : display all users
exports.getAllAccounts = async (req, res, next) => {
  try {
    const allAccounts = await User.findAll({});
    res.status(200).json(allAccounts);
  } catch (error) {
    res.status(404).json({ error });
  }
};

// Model : display one user
exports.getOneAccount = async (req, res, next) => {
  try {
    const userParams = req.params;

    const userFound = await User.findOne({
      where: { id: userParams.id },
    });
    res.status(200).json(userFound);
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Model : modify account
exports.modifyAccount = async (req, res, next) => {
  try {
    let user = await User.findOne({ where: { id: req.params.id } });
    if (user.avatar) {
      const filename = user.avatar.split("/images/")[1];
      fs.unlink(`images/${filename}`, async function (err) {
        user.avatar = `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`;
        const newUser = await user.save();
        res.status(200).json({
          user: newUser,
          messageRetour: "Profile modified",
        });
      });
    } else {
      user.avatar = `${req.protocol}://${req.get("host")}/images/${
        req.file.filename
      }`;
      const newUser = await user.save();
      res.status(200).json({
        user: newUser,
        messageRetour: "Profile modified",
      });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
};

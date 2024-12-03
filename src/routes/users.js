/* eslint-disable consistent-return */
const express = require("express");
const schema = require("../db/schema");
const db = require("../db/connection");

const users = db.get("users");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await users.find({});
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

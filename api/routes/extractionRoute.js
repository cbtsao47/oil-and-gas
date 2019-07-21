const express = require("express");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log({ err });
    res.status(500).json({ message: "Internal Server Error" });
  }
});

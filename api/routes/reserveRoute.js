const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({ message: "it works" });
  } catch (err) {
    console.log({ err });
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

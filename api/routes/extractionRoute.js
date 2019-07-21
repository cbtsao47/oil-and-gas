const express = require("express");
const router = express.Router();
const extractionsModel = require("../../models/Extractions");

const serverError = res =>
  res.status(500).json({ message: "Internal Server Error" });
router.get("/", async (req, res) => {
  try {
    const extractionsBySite = await extractionsModel.getExtractions();
    res.status(200).json(extractionsBySite);
  } catch (err) {
    serverError(res);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const extraction = await extractionsModel.getExtractionsById(id);
    res.status(200).json(extraction);
  } catch (err) {
    console.log(err);
    serverError(res);
  }
});
module.exports = router;

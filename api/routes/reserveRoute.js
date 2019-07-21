const express = require("express");
const router = express.Router();
const sitesModel = require("../../models/Sites");

const serverError = res =>
  res.status(500).json({ message: "Internal Server Error" });

router.get("/", async (req, res) => {
  try {
    const sites = await sitesModel.getSites();
    if (sites.length) res.status(200).json(sites);
  } catch (err) {
    serverError(res);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const site = await sitesModel.getSiteById(id);
    if (site) {
      res.status(200).json(site);
    } else {
      res.status(404).json({ message: "site does not exist" });
    }
  } catch (err) {
    serverError(res);
  }
});

module.exports = router;

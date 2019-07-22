// server boilerplate
const express = require("express");
const server = express();
const config = require("./config");
config(server);
// routes
const extractionRoutes = require("./routes/extractionRoute");
const reserveRoutes = require("./routes/reserveRoute");
server.use("/extraction", extractionRoutes);
server.use("/reserve", reserveRoutes);
server.get("/", (req, res) => {
  res.send("sanity check");
});
module.exports = server;

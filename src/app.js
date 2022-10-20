const express = require("express");
const { MainRouter } = require("./route/index.route");
const Router = express.Router();
const app = express();
MainRouter(app);

module.exports = app;

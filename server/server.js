const express = require("express");
const middleWare = require("./middleware/middleware");

const app = express();
middleWare(app);

module.exports = app;

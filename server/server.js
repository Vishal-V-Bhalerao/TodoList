const express = require("express");
const middleWare = require("./middleware/middleware");
const router = require("./api/api")
const app = express();
// setting up middleware
middleWare(app);
// setting up router
app.use('/api/', router)
module.exports = app;

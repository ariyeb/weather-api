"use strict";

var express = require("express");

var cors = require("cors");

var path = require('path');

var port = process.env.PORT;

var weatherRouter = require('./routers/weatherRouter');

var publicDirectoryPath = path.join(__dirname, '../public');
var app = express();
app.use(express["static"](publicDirectoryPath));
app.use(express.json());
app.use(cors());
app.use(weatherRouter);
app.listen(port, function () {
  console.log("Server connectes, port:", port);
});
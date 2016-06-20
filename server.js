"use strict";
const express = require('express'),
      app = express(),
      portNumber = process.env.PORT || process.argv[2] || 8080;

app.use(express.static("./"));  

app.get('/', function (req, res) {
  res.render("index.html");
});

app.listen(portNumber, function () {
  console.log("Listening on port " + portNumber);
});

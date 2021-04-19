const fs = require("fs");
const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  fs.readFile("test.txt", "UTF8", (error, success) => {
    if (error) {
      console.log(error);
      return res.send("error");
    }
    success = JSON.parse(success);
    return res.json(success);
  });
});

app.listen(4000, () => {
  console.log(`Example app listening at http://localhost:4000`);
});

const express = require("express");
const app = express();

app.use(express.json());
var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", function (req, res) {
  var opts = {
    maxAge: 900000,
    httpOnly: true,
  };
  res.cookie("some_name", "some_value", opts);
  console.log("Cookies: ", req.cookies);
  res.send("Cookies challenge!");
});

app.get("/login", (req, res) => {
  res.cookie("name", "miguel");
  console.log("Cookies: ", req.cookies);
  res.send("Cookies challenge!");
});

app.get("/hello", (req, res) => res.send(`Welcome miguel!`));

app.get("/users", (req, res) => res.status(200).send({ name: "Eric" }));

module.exports = app;

const express = require("express");

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", { title: "Hey2", message: "Hello there!" });
});

app.listen(8080);

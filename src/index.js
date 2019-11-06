const express = require("express");

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://userone:<password>@cluster0-lw66l.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//var db = client.connection;

app.get("/", (req, res) => {
  res.render("index", { title: "Hey2", message: "Tic Tac Toe!" });
});

app.listen(8080);

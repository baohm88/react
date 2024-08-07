var express = require("express");
var mysql = require("mysql2");

var app = express();

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123-Tarkeez",
  database: "acme",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!!!");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * from comments";

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log("Node server running @ http://localhost:3000");
});

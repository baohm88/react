const exppress = require("express");
const mysql = require("mysql2");

const app = exppress();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123-Tarkeez",
  database: "acme",
});

db.connect();

app.get("/users", (req, res) => {
  const sql = "select * from users";

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

app.listen(3000, () => console.log("Server started!"));

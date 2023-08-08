const mysql = require("mysql2");

const db = mysql.createConnection({
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

exports.index = (req, res) => {
  let query1 = "SELECT account_id, first_name, last_name, email FROM accounts";
  db.query(
    query1,
    (error, result) => {
      if(error) throw error;
      res.render("index", {accounts: result})
      console.log(result)
    }
    )
}
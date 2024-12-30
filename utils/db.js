import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "PM",
});

con.connect(function (err) {
  if (err) {
    console.error("Connection Error: ", err.message);
  } else {
    console.log("Connected Successfully");
  }
});

export default con;

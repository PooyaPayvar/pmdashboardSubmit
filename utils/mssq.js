import con from "mssql";

const config = {
  server: "10.0.1.7", // Replace with your server name
  database: "PM", // Replace with your database name
  user: "Reza", // Replace with your username
  password: "Re@123456", // Replace with your password
  driver: "ODBC Driver 17 for SQL Server",
  options: {
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

con
  .connect(config)
  .then((pool) => {
    return pool.request().query("SELECT * FROM dbo.personel"); // Replace with your query
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

export default { sql };

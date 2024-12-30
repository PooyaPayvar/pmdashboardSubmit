import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/operator_login", (req, res) => {
  const sql = "SELECT * FROM personel WHERE username = ? AND password = ?";
  con.query(sql, [req.body.username, req.body.password], (err, result) => {
    if (err) {
      return res.json({ loginStatus: false, Error: "Query Error" });
    }
    if (result.length > 0) {
      const username = result[0].username;
      const token = jwt.sign(
        { role: "operator", username: username, id: result[0].id },
        "jwt_secret_key",
        {
          expiresIn: "1d",
        }
      );
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
      });
      return res.json({ loginStatus: true });
    } else {
      return res.json({
        loginStatus: false,
        Error: "Wrong Username or Password",
      });
    }
  });
});

router.get("/operator_dashboard", (req, res) => {
  const sql = "SELECT * FROM emforms";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.post("/operator_submit", (req, res) => {
  const sql =
    "INSERT INTO emforms (`formcode`,`section`,`shift`,`operatorname`,`formdate`,`problemtype`,`stopstatus`,`stopdate`,`startdate`,`problemdescription`) VALUES (?)";
  const values = [
    req.body.formcode,
    req.body.section,
    req.body.shift,
    req.body.operatorname,
    req.body.formdate,
    req.body.problemtype,
    req.body.stopstatus,
    req.body.stopdate,
    req.body.startdate,
    req.body.problemdescription,
  ];
  con.query(sql, [values], (err, result) => {
    if (err) return res.json({ Error: "Inserting data Error in server" });
    return res.json({ Status: "Success" });
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: true });
});

export { router as OperatorRouter };

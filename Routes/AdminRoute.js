import express from "express";
import { con } from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * FROM personel WHERE username = ? AND password = ?";
  con.query(sql, [req.body.username, req.body.password], (err, result) => {
    if (err)
      return res.json({
        loginStatus: false,
        Error: "Wrong Username or Password",
      });
    if (result.length > 0) {
      const username = result[0].username;
      const token = jwt.sign(
        { role: "admin", username: username },
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
router.get("/operator_submit", (req, res) => {
  const sql = "SELECT * FROM emforms";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Querry Error" });
    return res.json({ Status: true, Result: result });
  });
});
export { router as adminRouter };

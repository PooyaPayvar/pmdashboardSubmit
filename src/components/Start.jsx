import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Start() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5173/auth/adminlogin")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "technician") {
            navigate("/technician_dashboard");
          }
          if (result.data.role === "operator") {
            navigate("/technician_dashboard");
          } else {
            navigate("/dashboard");
          }
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2 className="text-center">Login As</h2>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            PM
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              navigate("/technician_login");
            }}
          >
            Technician
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              navigate("/operator_login");
            }}
          >
            Operator
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;

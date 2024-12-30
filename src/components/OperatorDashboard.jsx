import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:3000/auth/logout")
      .then((result) => {
        if (result.data.Status) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="sidebar col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white vh-100">
            <Link
              to={"/operator_dashboard"}
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                Preventive Maintenance
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to={"/operator_dashboard"}
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">داشبورد</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to={"/operator_dashboard/operator_submit"}
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-ui-checks-grid ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">ثبت فرم</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  className="nav-link px-0 align-middle text-white"
                  onClick={handleLogout}
                >
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">خروج</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

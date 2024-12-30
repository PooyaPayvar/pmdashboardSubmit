import "./App.css";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/Start.jsx";
import OperatorLogin from "./components/OperatorLogin.jsx";
import OperatorSubmit from "./components/OperatorSubmit.jsx";
import OperatorDashboard from "./components/OperatorDashboard.jsx";
import TechnicianSubmit from "./components/TechnicianSubmit.jsx";
import TechnicianLogin from "./components/TechnicianLogin.jsx";
import TechnicianDashbaord from "./components/TechnicianDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/operator_login" element={<OperatorLogin />}></Route>
        <Route path="/technician_login" element={<TechnicianLogin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
        </Route>
        <Route path="/operator_dashboard" element={<OperatorDashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route
            path="/operator_dashboard/operator_submit"
            element={<OperatorSubmit />}
          ></Route>
        </Route>
        <Route path="/technician_dashboard" element={<TechnicianDashbaord />}>
          <Route path="" element={<Home />}></Route>
          <Route
            path="/technician_dashboard/technician_submit"
            element={<TechnicianSubmit />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

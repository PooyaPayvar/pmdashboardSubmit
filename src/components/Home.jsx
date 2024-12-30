import React, { useState, useEffect } from "react";
import { GrHostMaintenance, GrStatusCritical } from "react-icons/gr";
import { CgDanger } from "react-icons/cg";
import { GoVerified } from "react-icons/go";
import {
  BarChart,
  Bar,
  Rectangle,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import "./table.css";

function Home() {
  const [operator, setOperator] = useState([]);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/operator/operator_submit")
      .then((result) => {
        if (result.data.Status) {
          setOperator(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>EM</h3>
            <CgDanger className="card_icon" />
          </div>
          <h1>255</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>PM</h3>
            <GrHostMaintenance className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>GM</h3>
            <GoVerified className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CM</h3>
            <GrStatusCritical className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
      </div>
      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="App">
        <h3 className="text-bg-info">EMFORM</h3>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Form Code</th>
                <th>Section</th>
                <th>Machine Name</th>
                <th>Shift</th>
                <th>Operator Name</th>
                <th>Form Date</th>
                <th>Problem Type</th>
                <th>Stop Status</th>
                <th>Stop Date</th>
                <th>Start Date</th>
                <th className="expand">Problem Description</th>
              </tr>
            </thead>
            <tbody>
              {operator.map((c, index) => (
                <tr key={index}>
                  <td>{c.formcode}</td>
                  <td>{c.section}</td>
                  <td>{c.machinename}</td>
                  <td>{c.shift}</td>
                  <td>{c.operatorname}</td>
                  <td>{c.formdate}</td>
                  <td>{c.problemtype}</td>
                  <td>{c.stopstatus}</td>
                  <td>{c.stopdate}</td>
                  <td>{c.startdate}</td>
                  <td>{c.problemdescription}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Home;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./submitstyle.css";
import { MdOutlineNavigateNext } from "react-icons/md";

const Submit = () => {
  const [values, setValues] = useState({
    formcode: "",
    section: "",
    machinename: "",
    shift: "",
    operatorname: "",
    formdate: "",
    problemtype: "",
    stopstatus: "",
    stopdate: "",
    startdate: "",
    problemdescription: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/operator/operator_submit", values)
      .then((result) => {
        if (result.data.Status) {
          navigate("/operator_dashboard");
          alert("فرم با موفقیت ثبت شد");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div id="body">
      <div className="container">
        <header>Operator Submit Form</header>
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <span className="title">First Page</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    id="formcode"
                    placeholder="Enter Form Code"
                    onChange={(e) =>
                      setValues({ ...values, formcode: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="section">Section</label>
                  <select
                    name="section"
                    id="section"
                    onChange={(e) =>
                      setValues({ ...values, section: e.target.value })
                    }
                  >
                    <option value="chipper">Chipper</option>
                    <option value="conveyorline">Conveyor Line</option>
                    <option value="dryerairgraider">Dryer Air Grader</option>
                    <option value="refiner">Refiner</option>
                    <option value="beforepress">Before Press</option>
                    <option value="press">Press</option>
                    <option value="afterpress">After Press</option>
                    <option value="sandingrbs">Sanding</option>
                    <option value="coolingsystem">Cooling System</option>
                    <option value="steamboiler">Steam Boiler</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="machinename">Machine Name</label>
                  <input
                    type="text"
                    name="machinename"
                    placeholder="Enter Machine Name"
                    id="machinename"
                    onChange={(e) =>
                      setValues({ ...values, machinename: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="shift">Shift</label>
                  <select
                    name="shift"
                    id="shift"
                    onChange={(e) =>
                      setValues({ ...values, shift: e.target.value })
                    }
                  >
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="operatorname">Operator Name</label>
                  <input
                    type="text"
                    name="operatorname"
                    id="operatorname"
                    placeholder="Enter Operator Name"
                    onChange={(e) =>
                      setValues({ ...values, operatorname: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formdate">Form Date</label>
                  <input
                    type="datetime-local"
                    name="formdate"
                    id="formdate"
                    onChange={(e) =>
                      setValues({ ...values, formdate: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="problemtype">Problem Type</label>
                  <select
                    name="problemtype"
                    id="problemtype"
                    onChange={(e) =>
                      setValues({ ...values, problemtype: e.target.value })
                    }
                  >
                    <option value="mechanic">Mechanic</option>
                    <option value="electric">Electric</option>
                    <option value="utility">Utility</option>
                    <option value="production">Production</option>
                    <option value="metalworking">Metal Working</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="stopstatus">Stop Status</label>
                  <select
                    name="stopstatus"
                    id="stopstatus"
                    onChange={(e) =>
                      setValues({ ...values, stopstatus: e.target.value })
                    }
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="stopdate">Stop Date</label>
                  <input
                    type="datetime-local"
                    name="stopdate"
                    id="stopdate"
                    onChange={(e) =>
                      setValues({ ...values, stopdate: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="startdate">Start Date</label>
                  <input
                    type="datetime-local"
                    name="startdate"
                    id="startdate"
                    onChange={(e) =>
                      setValues({ ...values, startdate: e.target.value })
                    }
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="problemdescription">
                    Problem Description
                  </label>
                  <textarea
                    name="problemdescription"
                    id="problemdescription"
                    cols="30"
                    rows="10"
                    placeholder="Enter Problem Description"
                    onChange={(e) =>
                      setValues({
                        ...values,
                        problemdescription: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="nextBtn">
                Next
                <MdOutlineNavigateNext className="next-icon" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;

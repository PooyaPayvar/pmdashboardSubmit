import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./technicianstyle.css";
import { GrCaretNext } from "react-icons/gr";

const Submit = () => {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3000/technician/technician_submit")
      .then((result) => {
        if (result.data.Status) {
          setOperator(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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

  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/technician/technician_submit", values)
      .then((result) => {
        if (result.data.Status) {
          navigate("/technician_dashboard");
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
        <header>Technician Submit Form</header>
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Second Page</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="repairstype">نوع تعمیرات</label>
                  <select
                    name="repairstype"
                    id="repairstype"
                    onChange={(e) =>
                      setValues({ ...values, repairstype: e.target.value })
                    }
                  >
                    <option value="EM">EM (اضطراری)</option>
                    <option value="CM">CM (اصلاحی)</option>
                    <option value="GM">GM (عمومی)</option>
                    <option value="PM">PM (پیشگیرانه)</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="typeofservice">نوع خدمات انجام گرفته</label>
                  <select
                    name="typeofservice"
                    id="typeofservice"
                    onChange={handleChange}
                    value={values.typeofservice}
                  >
                    <option value="inspection">بازرسی و چک</option>
                    <option value="regulation">تنظیم</option>
                    <option value="wrenching">آچارکشی</option>
                    <option value="lubrication">روانکاری</option>
                    <option value="fixing">تعمیر</option>
                    <option value="changing">تعویض</option>
                    <option value="etc">سایر موارد</option>
                  </select>

                  {isOtherSelected && (
                    <textarea
                      placeholder="لطفاً توضیحات خود را وارد کنید"
                      value={values.otherService}
                      onChange={(e) =>
                        setValues({ ...values, otherService: e.target.value })
                      }
                    />
                  )}
                </div>
                <div className="input-field">
                  <label htmlFor="causefailure">نوع خرابی</label>
                  <select
                    name="causefailure"
                    id="causefailure"
                    onChange={(e) =>
                      setValues({ ...values, causefailure: e.target.value })
                    }
                  >
                    <option value="depreciation">استهلاک طبیعی</option>
                    <option value="operatorcause">عدم دقت اپراتور</option>
                    <option value="previousrepairs">
                      نامناسب بودن تعمیرات قبلی
                    </option>
                    <option value="lowquality">کیفیت پایین قطعه یدکی</option>
                    <option value="pmnogood">سرویس و نگهداری نامناسب</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="jobtime">زمان انجام کار</label>
                  <input
                    type="number"
                    name="jobtime"
                    id="jobtime"
                    onChange={(e) =>
                      setValues({ ...values, jobtime: e.target.value })
                    }
                    placeholder="زمان به دقیقه"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="problemdescription">
                    شرح کامل افدامات انجام شده جهت رفع عیب
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
                <GrCaretNext className="next-icon" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;

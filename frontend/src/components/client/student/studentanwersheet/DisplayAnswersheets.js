import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { AiOutlineFileText } from "react-icons/ai";
import Navigation from "../../../common/Navigation/Navigation";
import { AuthContext } from "../../../../context/AuthContext";

export const DisplayAnswersheets = () => {
  const [item, setItem] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user._id;
  console.log(userId);

  useEffect(() => {
    axios.post("/StudentAnswers/idfilter",{student_id:userId}).then((res) => {
      setItem(res.data);
    });
  }, []);

  return (
    <div>
      <Navigation/>
      <div>
        {item.map((data) => {
          return (
            <div className="mt-1 pt-5">
              <div
                className="row border shadow bg-light"
                style={{ width: "50%", marginLeft: "25%" }}
              >
                <div className="col">
                  <h6></h6>
                  <>
                    <>
                      <form
                        method="get"
                        action={
                          "http://localhost:5000/StudentAnswers/" + data.image
                        }
                      >
                        <button type="submit">
                          <AiOutlineFileText
                            style={{ width: "30px", height: "30px" }}
                          />
                        </button>
                      </form>
                      {data.image}
                    </>
                  </>
                </div>
                <div className="col">
                  <h7>{data.lname}</h7>
                  <br />
                  <h7>{data.subject}</h7>
                  <br />
                  <h7>{data.date}</h7>
                  <br />
                  <h7>{data.time}</h7>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

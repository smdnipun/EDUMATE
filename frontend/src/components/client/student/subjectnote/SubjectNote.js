import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import Navigation from "../../../common/Navigation/Navigation";

export const SubjectNote = () => {
  const [item, setItem] = useState([]);
  const { user } = useContext(AuthContext);
  const userstream = user.stream;

  console.log(item);

  useEffect(() => {
    axios.post("/subject/stream", { streamname: userstream }).then((res) => {
      setItem(res.data);
    });
  }, []);

  return (
    <div>
      {/* <Navbar/> */}
      <Navigation />
      <div className="text-center container" style={{ marginTop: "5%" }}>
        <h1 className="mb-5">
          {JSON.parse(localStorage.getItem("user")).stream}
        </h1>

        <div className="row gx-1 row-cols- row-cols-md-3">
          {item.map((datas) => {
            return (
              <div class="row gx-4">
                <div class="col-md mb-5 ml-5 border-1 ">
                  <div className="shadow bg-light m-3 border rounded">
                    <h3>{datas.subjectname}</h3>
                    <div className="row my-2 ml-2">
                      <div className="col-sm-4">
                        {/* <Link to */}
                        <Link to={`/subject/${datas.subjectname}`}>
                          <button className="shadow border-0 rounded">
                            Meterial
                          </button>
                        </Link>
                      </div>
                      <div className="col-sm-4">
                        {/* <Link to */}
                        <Link to={`/feedback/${datas.subjectname}`}>
                          <button className="shadow border-0 rounded">
                            FeedBack
                          </button>
                        </Link>
                      </div>
                      <div className="col-sm-3">
                        {/* <Link to */}
                        <Link
                          to={`/studentanswersheetUpload/${datas.subjectname}`}
                        >
                          <button className="shadow border-0 rounded">
                            Answers
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="text-center my-3">
                      {/* <Link to */}
                      <Link to={`/message/${datas.subjectname}`}>
                        <button className="shadow border-0 rounded">
                          Group Chat
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

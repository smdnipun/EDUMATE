import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../../common/Navigation/Navigation";
import { AiOutlineDownload } from "react-icons/ai";

export const SubjectNoteforSubject = () => {
  const [item, setItem] = useState([]);
  const [query, setQuery] = useState("");

  const params = useParams();
  // console.log(params.name);
  const lname = params.name;
  // console.log(lname);

  useEffect(() => {
    axios.post("/teacherNote/notes", { subject: lname }).then((res) => {
      setItem(res.data);
    });
  });

  // console.log(item)

  return (
    <div>
      <Navigation />
      <div className="container" style={{ width: "80%", marginTop: "5%" }}>
        <h1 className="text-center my-3">{lname}</h1>
        <div className="row">
          <div className="" style={{ marginTop: "3%" }}>
            <div>
              <input
                type="text"
                style={{ marginRight: "50%" }}
                placeholder="Search Notes by Name...."
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-light ml-4 mt-5">
            <div class="row gx-5" style={{ marginTop: "4%" }}>
              {/* <div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0">A better way to start building.</h2></div> */}
              <div class="">
                <div class="row gx-3 row-cols-1 row-cols-md-3">
                  {item
                    .filter((row) => row.lesson_name.includes(query))
                    .map((datas) => {
                      return (
                        <div className="mb-4">
                          <div class="row gx-3 row-cols-2  ">
                            <div className="col shadow border border-primary mr-5 p-1 rounded bg-white">
                              <Link to={`/commentsub/${datas._id}`}>
                                <button className="border-0 bg-transparent">
                                  <AiOutlineDownload
                                    style={{ width: "30px", height: "30px" }}
                                  />
                                  <h7 className="ml-3">{datas.lesson_name}</h7>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../../common/Navigation/Navigation";
import { AiOutlineDownload } from "react-icons/ai";

export const SubjectNoteforSubject = () => {
  const [item, setItem] = useState([]);

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
      <div className="container" style={{ width: "70%", marginTop: "5%" }}>
        
        <h1 className="text-center my-3">{lname}</h1>
        <div className="row">
          {item.map((datas) => {
            return (
              <div className="col-sm-3 shadow border-1 rounded bg-white h-100">
                <div>
                  <form
                    method="get"
                    action={"http://localhost:5000/TeacherNotes/" + datas.note}
                  >
                    <button type="submit" className="border-0 bg-transparent">
                      <AiOutlineDownload
                        style={{ width: "30px", height: "30px" }}
                      />
                      <h7 className="ml-3">{datas.lesson_name}</h7>
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

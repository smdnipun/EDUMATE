import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import Navigation from "../../../common/Navigation/Navigation";

export const SubjectNote = () => {
  const [item, setItem] = useState([]);

  const { user } = useContext(AuthContext);
  const userstream = user.stream;

  // console.log(user);
  // console.log(userstream);

  console.log(item);

  useEffect(() => {
    axios.post("/subject/stream", { streamname: userstream }).then((res) => {
      setItem(res.data);
    });
  }, []);

  // const newone = item[0].subjectname;
  // const[sub1,setSub1] = useState('');
  // const[sub2,setSub2] = useState('');
  // const[sub3,setSub3] = useState('');
  // setSub1(item.subjectname);
  // console.log(item.subjectname);
  // console.log(sub1);
  // console.log(newone);

  return (
    <div>
      {/* <Navbar/> */}
      <Navigation />
      <div
        className="text-center"
        style={{ marginTop: "8%", marginLeft: "15%" }}
      >
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
                        <button>Meterial</button>
                      </Link>
                    </div>
                    <div className="col-sm-4">
                      {/* <Link to */}
                      <Link to={'/feedback'}>
                        <button>FeedBack</button>
                      </Link>
                    </div>
                    <div className="col-sm-3">
                      {/* <Link to */}
                      <Link to={`/studentanswersheetUpload/${datas.subjectname}`}>
                        <button>Answers</button>
                      </Link>
                    </div>
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

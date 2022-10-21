import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Navigation from "../../../common/Navigation/Navigation";
import { Navbar } from "../Navbar";

export const SubjectTimetableDisplay = () => {
  const [item,setItem] = useState([]);

  const { user } = useContext(AuthContext);
  const userstream = user.stream;
  console.log(userstream);

    useEffect(()=>{
        axios.post('/subtime/time',{stream : userstream}).then((res)=>{
            setItem(res.data)
        })
    })
  return (
    <div>
      <Navigation/>
      <div
        style={{
          width: "50%",
          marginLeft: "25%",
          marginRight: "25%",
          marginTop: "10%",
        }}
      >
        <h1 className="text-center">Subject Time Table</h1>
        <table class="table table-bordered shadow rounded-4 text-center mt-5 mb-5 bg-light">
        <div className='container' style={{float:"right",paddingRight:"30%", width:"80%"}}>
          {/* <h3 className='navi'>Subject Time Tables</h3>  */}
          {item.map((s)=>{
            return(
               <div>
                  <center><h5 className='navi'>{s.stream}</h5> </center>
                  <center><h5 className='navi'>{s.classname}</h5> </center>
                  <table class="table">
                              <tr>
                              <th>Start Time</th>
                              <th>End Time</th>
                              <th>Monday</th>
                              <th>Tuesday</th>
                              <th>Wednesday</th>
                              <th>Thursday</th>
                              <th>Friday</th>
                              </tr> 
                              <tr>
                                <td>{s.start1}</td>
                                <td>{s.end1}</td>
                                <td>{s.mon1}</td>
                                <td>{s.tue1}</td>
                                <td>{s.wen1}</td>
                                <td>{s.tur1}</td>
                                <td>{s.fri1}</td>                                      
                              </tr>
                              <tr>
                                <td>{s.start2}</td>
                                <td>{s.end2}</td>
                                <td>{s.mon2}</td>
                                <td>{s.tue2}</td>
                                <td>{s.wen2}</td>
                                <td>{s.tur2}</td>
                                <td>{s.fri2}</td>                                      
                              </tr>    
                              <tr>
                                <td>{s.start3}</td>
                                <td>{s.end3}</td>
                                <td>{s.mon3}</td>
                                <td>{s.tue3}</td>
                                <td>{s.wen3}</td>
                                <td>{s.tur3}</td>
                                <td>{s.fri3}</td>                                      
                              </tr>    
                              <tr>
                                <td>{s.start4}</td>
                                <td>{s.end4}</td>
                                <td>{s.mon4}</td>
                                <td>{s.tue4}</td>
                                <td>{s.wen4}</td>
                                <td>{s.tur4}</td>
                                <td>{s.fri4}</td>                                      
                              </tr>    
                              <tr>
                                <td>{s.start5}</td>
                                <td>{s.end5}</td>
                                <td>{s.mon5}</td>
                                <td>{s.tue5}</td>
                                <td>{s.wen5}</td>
                                <td>{s.tur5}</td>
                                <td>{s.fri5}</td>                                      
                              </tr>    
                              <tr>
                                <td>{s.start6}</td>
                                <td>{s.end6}</td>
                                <td>{s.mon6}</td>
                                <td>{s.tue6}</td>
                                <td>{s.wen6}</td>
                                <td>{s.tur6}</td>
                                <td>{s.fri6}</td>                                      
                              </tr>    
                              <tr>
                                <td>{s.start7}</td>
                                <td>{s.end7}</td>
                                <td>{s.mon7}</td>
                                <td>{s.tue7}</td>
                                <td>{s.wen7}</td>
                                <td>{s.tur7}</td>
                                <td>{s.fri7}</td>                                      
                              </tr>    
                              <tr>
                                <td>{s.start8}</td>
                                <td>{s.end8}</td>
                                <td>{s.mon8}</td>
                                <td>{s.tue8}</td>
                                <td>{s.wen8}</td>
                                <td>{s.tur8}</td>
                                <td>{s.fri8}</td>                                      
                              </tr>    
                              <tr>
                                <td>{s.start9}</td>
                                <td>{s.end9}</td>
                                <td>{s.mon9}</td>
                                <td>{s.tue9}</td>
                                <td>{s.wen9}</td>
                                <td>{s.tur9}</td>
                                <td>{s.fri9}</td>                                      
                              </tr>
                                                        
                  </table>
                  <br></br>
              </div> 
             )
          })} 
            
    </div>
        </table>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import AdminNav from '../../common/Navigation/AdminNav';


export default function ViewSubjectTimeTable(){

  const [subject, setSubject] = useState([]);

      const loadData = () => {
        axios.get('/subtime').then((response) => {
            setSubject(response.data)
      })
    }

    async function SweatAlert(text, item) {
      // await sleep(1000)
      Swal.fire({
        icon: item,
        text: text,
      })
    }
     
    const deleteTable = (id) => {
      axios.delete(`/subtime/${id}`)
      SweatAlert('Successfully deleted', 'success')
      window.location.reload(true);
    }

    useEffect(() => {
    loadData()
    }, [])


    return(
    <div>
      <AdminNav/>
          <div style={{height:"100%",maxWidth:"100%", width:"100%", marginTop:"5%"}}>
            <div style={{width:"10%",float:"left"}}>
                      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                            <div style={{width:"100%", marginTop:"15%"}}>
                              <a href="addsubtime" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Time Tables</span>
                              </a><br></br>
                              <a href="getsubtime" class="list-group-item list-group-item-action py-2 ripple active">
                                <i class="fas fa-chart-area fa-fw me-3"></i><span>View Time Tables</span>
                              </a><br></br>
                              <a href="addexam" class="list-group-item list-group-item-action py-2 ripple"><i
                                  class="fas fa-lock fa-fw me-3"></i><span>Add Exams</span></a><br></br>
                              <a href="getexam" class="list-group-item list-group-item-action py-2 ripple"><i
                                  class="fas fa-chart-line fa-fw me-3"></i><span>View Exams</span></a>         
                            </div>
                        </nav>
                </div>
          <div className='container' style={{float:"right",paddingRight:"30%", width:"80%"}}>
          <h3 className='navi'>Subject Time Tables</h3> 
          {subject.map((s)=>{
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
                              <tr>
                                 <td> <Link to={`/editsubtbl/${s._id}`}><button class="btn btn-primary">Update</button></Link></td>
                                 <td><button class="btn btn-primary" onClick={() => { deleteTable(s._id)}}>Delete</button></td>
                              </tr>                                     
                  </table>
                  <br></br>
              </div>
            )
          })}
            
    </div>
          </div>
    </div>
    )
    
}
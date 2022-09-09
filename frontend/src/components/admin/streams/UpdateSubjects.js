import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'

export default function UpdateSubjects() {
  const [subjectname, setSubjectname] = useState('')
  const [stream, setStream] = useState([]);
  const [streamname, setStreamname] = useState('');

  let params= useParams();
  const navigate= useNavigate();

  const Update = (e) => {
    e.preventDefault();
    axios.put(`/subject/${params._id}`, {
    streamname,subjectname
  })
  navigate("/getsubject");
}


const loadData = () => {
  axios.get(`/subject/get/${params._id}`).then(function (response) {
    const data= response.data;
    setSubjectname(data.subjectname);
    setStreamname(data.streamname);

  })
  axios.get('/stream').then(function(response){
    setStream(response.data)
  })
}

useEffect(() => {
  loadData()
}, [])

  return (
    <div style={{height:"100%",maxWidth:"100%", width:"100%", marginTop:"15%"}}>
         <div style={{width:"10%",float:"left",paddingLeft:"10%"}}>
                  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                    <div class="position-sticky">
                      <div style={{width:"50%", marginTop:"15%"}}>
                        <a href="addsubject" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                          <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Subjects</span>
                        </a>
                        <a href="addstream" class="list-group-item list-group-item-action py-2 ripple active">
                          <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Streams</span>
                        </a>
                        <a href="getsubject" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-lock fa-fw me-3"></i><span>View Subjects</span></a>
                        <a href="getstream" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-chart-line fa-fw me-3"></i><span>View Streams</span></a>         
                      </div>
                    </div>
                  </nav>
               </div>
               <div  style={{float:"right",paddingRight:"30%", width:"70%"}} className = 'bod mt-5 mb-5 m'>
                  <div className='border shadow rounded-3 bg-light'>
                      <form onSubmit={Update} className='mx-5 mt-5 mb-5'>
                        <h2 className='text-center mb-4'> Update Subject</h2>
                          <div class="form-group">
                              <label>Enter the stream name</label>
                              <select class="form-select" value={streamname} onChange= {(e)=>setStreamname(e.target.value)}>
                                  {stream.map((u) =>{
                                      return(
                                      <option>{u.streamname}</option>
                                      )
                                  })}
                              </select>
                          </div>
                          <div class="form-group">
                              <label>Enter the Subject</label>
                              <input class="form-control" value={subjectname} onChange={(e)=>setSubjectname(e.target.value)} />
                          </div> 
                          <div align="center">
                              <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
                          </div>
                      </form>
                  </div>
              </div>
      </div>
    )
}
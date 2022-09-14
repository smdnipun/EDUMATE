import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function ViewStreams  () {
    const [data, setData] = useState([])
    const navigate = useNavigate();


    const loadData = () => {
        
        axios.get('subject/').then((res) => {
            setData(res.data);
            console.log(res.data)
        })
    }

    async function SweatAlert(text, item) {
      // await sleep(1000)
      Swal.fire({
        icon: item,
        text: text,
      })
    }
    
    const deleteSubject = (id) => {
      axios.delete(`/subject/${id}`)
      SweatAlert('Successfully deleted', 'success')
      window.location.reload(true);
    }
    useEffect(() => {
        loadData();
    },[])

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
              <div className='container' style={{float:"right",paddingRight:"30%", width:"70%"}}>
                  <h3 className='navi'>Subjects</h3> 
                    <table class="table">
                        <thead>
                          <tr>
                          <th scope="col">Stream of the subject</th>
                            <th scope="col">Subject Name</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.map((row)=>{
                          return(
                            <tr>
                            <td>{row.streamname}</td>
                            <td>{row.subjectname}</td>
                            <td> <Link to={`/editsubj/${row._id}`}><button class="btn btn-primary">Update</button></Link></td>
                            <td><button class="btn btn-primary" onClick={() => { deleteSubject(row._id)}}>Delete</button></td>
                          </tr>
                          )
                        })}
                        </tbody>
                      </table>
              </div>
    </div>
    )
}
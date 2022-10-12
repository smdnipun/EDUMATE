import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function SearchedExam(){

    const [data,setData] = useState([]);
    const exam = localStorage.getItem('sub')
    const keys = [data]



    const loadData = () => {
        axios.get(`examtime/view/${exam}`, {
            params: {
                exam: exam,
                },
            }).then(function(res){
                setData(res.data)
            })        
    }
    console.log(data)
  
    const [subject, setSubject] = useState('')
  
    const search = (e) => {
      e.preventDefault();
      axios
        .post('http://localhost:5000/examtime/search', {
          subject: subject,
        })
        .then((res) => {
          localStorage.setItem('sub', res.data)
          window.location = '/searchexam'
        })
    }


    useEffect(() => {
        loadData()
      },[])
    
    return (
    <div>
        <div style={{height:"100%",maxWidth:"100%", width:"100%"}}>
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
                    <div style={{ marginTop:"3%", paddingLeft:"30%"}}>
                        <form onSubmit={search}>
                        <label><h6 className='navi'>Search here</h6></label><input  onChange={(e)=>{setSubject(e.target.value)}}></input>
                        <button  class="btn btn-primary">search</button>
                        </form>
                    </div>   
                    <div className='container' style={{float:"right",paddingRight:"30%", width:"80%", marginTop:"5%"}}>
                        <h3 className='navi'>Exam Time Tables</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Stream Name</th>
                                <th scope="col">Subject Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Start Time</th>
                                <th scope="col">End Time</th>
                                <th scope="col">Update</th>
                                {/* <th scope="col">Delete</th> */}
                                </tr>
                            </thead>
                                <tbody>
                                { data.map(d => {
                                        return(
                                            <tr>
                                            <td>{d.stream}</td>
                                            <td>{d.subject}</td>
                                            <td>{d.day}</td>
                                            <td>{d.grade}</td>
                                            <td>{d.start}</td>
                                            <td>{d.end}</td>
                                            <td><Link to={`/editexam/${data._id}`}><button class="btn btn-primary">Update</button></Link></td> 
                                            {/* <td><button class="btn btn-primary" onClick={() => { deleteTable(_id)}}>Delete</button></td> */}
                                        </tr>   
                                        )
                                    })}                                       
                                </tbody>
                            </table>
                    </div>
        </div>
    </div>
    )

}
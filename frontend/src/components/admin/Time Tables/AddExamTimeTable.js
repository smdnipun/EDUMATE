import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import AdminNav from '../../common/Navigation/AdminNav';

export default function AddExamTimeTable(){

    const [streams, setStreams] = useState([]);  
    const [subjects, setSubjects] = useState([]);  
    const [day, setDay] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [stream, setStream] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');

    const navigate = useNavigate();

    async function SweatAlert(text, item) {
      // await sleep(1000)
      Swal.fire({
        icon: item,
        text: text,
      })
    }

    const table = {
        day, start, end, stream, subject, grade
    } 

    const AddExamTimeTable = async (e) => {
      e.preventDefault();
      try {
        if((day == '' ) && (start == '' ) && (end == '' ) && (stream == '' ) && (subject == '' ) && (grade == '' )) 
        {
          SweatAlert('Please fill the required fields.', 'warning')
        }
        else if((day == '' ) || (start == '' ) || (end == '' ) || (stream == '' ) || (subject == '' ) || (grade == '' )) 
        {
          SweatAlert('Please fill the required fields.', 'warning')
        } else 
        {
          axios.post('/examtime/add', table);
          SweatAlert('Successfully insereted', 'success')
          navigate('/getexam')
        }
      } catch (err) {
        // Handle Error Here
        console.error(err)
      }
    }
    axios.get('/stream').then((res)=>{
        setStreams(res.data);
    })
    axios.get('/subject').then((res)=>{
        setSubjects(res.data);
    })

    return (
    <div>
      <AdminNav/>
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
                    <div style={{float:"right",paddingRight:"30%", width:"70%"}}>
                          <div className='border shadow rounded-3 bg-light'>
                              <form onSubmit={AddExamTimeTable} className='mx-5 mt-5 mb-5'>
                                  <h2 className='text-center mb-4'> Add Exam Time Table</h2>
                                    <div class="form-group">
                                      <label>Enter the Stream</label>
                                         <select class="form-select" value={stream}  onChange= {(e)=>setStream(e.target.value)}>
                                            {streams.map((u) =>{
                                                return(
                                                <option>{u.streamname}</option>
                                                )
                                            })}
                                         </select>
                                    </div>
                                    <div class="form-group">
                                      <label>Enter the Subject</label>
                                      <select class="form-select" value={subject}  onChange= {(e)=>setSubject(e.target.value)}>
                                            {subjects.map((u) =>{
                                                return(
                                                <option>{u.subjectname}</option>
                                                )
                                            })}
                                         </select>
                                    </div> 
                                    <div class="form-group">
                                      <label>Enter the Grade</label>
                                      <select class="form-select" value={grade}  onChange= {(e)=>setGrade(e.target.value)}>
                                            <option>Grade 12</option>
                                            <option>Grade 13</option>
                                      </select>
                                    </div>
                                    <div class="form-group">
                                      <label>Enter the Day</label>
                                      <input class="form-control" type="date" value={day}  onChange={(e)=>setDay(e.target.value)} />
                                    </div> 
                                    <div class="form-group">
                                      <label>Enter the Starting time</label>
                                      <input class="form-control" type="time" value={start}  onChange={(e)=>setStart(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                      <label>Enter the Ending time</label>
                                      <input class="form-control" type="time" value={end}  onChange={(e)=>setEnd(e.target.value)} />
                                    </div> 
                                    <div align="center">
                                      <button type="submit" class="btn btn-primary mt-5">Submit</button>
                                    </div>
                              </form>
                            </div>
                    </div>
            </div>
    </div>
     
)
}
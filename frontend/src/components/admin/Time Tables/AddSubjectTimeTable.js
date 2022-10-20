import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import AdminNav from '../../common/Navigation/AdminNav';

export default function AddSubjectTimeTable(){

    const [subject, setSubject] = useState([]);      const [streams, setStreams] = useState([]);  
    const [classname, setClassname] = useState('');  const [stream, setStream] = useState('');
    const [start1, setStart1] = useState('');        const [start2, setStart2] = useState('');  
    const [start3, setStart3] = useState('');        const [start4, setStart4] = useState('');  
    const [start5, setStart5] = useState('');        const [start6, setStart6] = useState('');  
    const [start7, setStart7] = useState('');        const [start8, setStart8] = useState('');  
    const [start9, setStart9] = useState('');        const [end2, setEnd2] = useState('');  
    const [end1, setEnd1] = useState('');            const [end4, setEnd4] = useState('');  
    const [end3, setEnd3] = useState('');            const [end5, setEnd5] = useState('');  
    const [end6, setEnd6] = useState('');            const [end7, setEnd7] = useState('');  
    const [end8, setEnd8] = useState('');            const [end9, setEnd9] = useState('');  
    const [mon1, setMon1] = useState('');
    const [mon2, setMon2] = useState('');            const [mon3, setMon3] = useState('');
    const [mon4, setMon4] = useState('');            const [mon5, setMon5] = useState('');
    const [mon6, setMon6] = useState('');            const [mon7, setMon7] = useState('');
    const [mon8, setMon8] = useState('');            const [mon9, setMon9] = useState('');
    const [tue1, setTue1] = useState('');            const [tue2, setTue2] = useState('');     
    const [tue3, setTue3] = useState('');            const [tue4, setTue4] = useState('');
    const [tue5, setTue5] = useState('');            const [tue6, setTue6] = useState('');
    const [tue7, setTue7] = useState('');            const [tue8, setTue8] = useState('');
    const [tue9, setTue9] = useState('');            const [wen1, setWen1] = useState('');
    const [wen2, setWen2] = useState('');            const [wen3, setWen3] = useState('');
    const [wen4, setWen4] = useState('');            const [wen5, setWen5] = useState('');
    const [wen6, setWWen6] = useState('');           const [wen7, setWen7] = useState('');
    const [wen8, setWen8] = useState('');            const [wen9, setWen9] = useState('');
    const [tur1, setTur1] = useState('');            const [tur2, setTur2] = useState('');
    const [tur3, setTur3] = useState('');            const [tur4, setTur4] = useState('');
    const [tur5, setTur5] = useState('');            const [tur6, setTur6] = useState('');
    const [tur7, setTur7] = useState('');            const [fri9, setFri9] = useState('');
    const [tur8, setTur8] = useState('');            const [tur9, setTur9] = useState('');
    const [fri1, setFri1] = useState('');            const [fri2, setFri2] = useState('');
    const [fri3, setFri3] = useState('');            const [fri4, setFri4] = useState('');
    const [fri5, setFri5] = useState('');            const [fri6, setFri6] = useState('');
    const [fri7, setFri7] = useState('');            const [fri8, setFri8] = useState('');
    const navigate = useNavigate();

    
    async function SweatAlert(text, item) {
      // await sleep(1000)
      Swal.fire({
        icon: item,
        text: text,
      })
    }

    const timetable = {
      classname, stream, start1,start2,start3,start4,start5,start6,start7,start8,start9,
      end1, end2,end3,end4,end5,end6,end7,end8,end9,
      mon1,mon2,mon3,mon4,mon5,mon6,mon7,mon8,mon9,tue1,tue2,tue3,tue4,tue5,tue6,tue7,tue8,tue9,
      wen1,wen2,wen3,wen4,wen5,wen6,wen7,wen8,wen9,tur1,tur2,tur3,tur4,tur5,tur6,tur7,tur8,tur9,fri1,fri2,fri3,fri4,fri5,fri6,fri7,fri8,fri9
    }

    const AddSubjectTimeTable = async (e)=>{
      e.preventDefault();
      try{
        axios.post('/subtime/add', timetable)
        SweatAlert('Successfully insereted', 'success')
        navigate('/getsubtime')
      }
      catch(err){
        console.error(err)
      }
    }
    
    axios.get('/subject').then((res)=>{
        setSubject(res.data);
    })
    axios.get('/stream').then((res)=>{
      setStreams(res.data);
  })

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
         <div style={{float:"right",paddingRight:"25%", paddingLeft:'10%', width:"85%"}}>
           <div className='border shadow rounded-3 bg-light'>
               <h3 className='navi'>Subject Time Table</h3> 
                  <form onSubmit={AddSubjectTimeTable}>     
                          <table class="table">
                          <div class="form-group">
                                    <label>Enter the stream name</label>
                                        <select class="form-select" onChange= {(e)=>setStream(e.target.value)}>
                                            {streams.map((u) =>{
                                                return(
                                                <option>{u.streamname}</option>
                                                )
                                            })}
                                        </select>
                                </div>
                                <div class="form-group">
                                    <label>Enter the Class</label>
                                    <select class="form-control"  onChange={(e)=>setClassname(e.target.value)}>
                                        <option>Grade 12</option>
                                        <option>Grade 13</option>
                                    </select> 
                                </div>
                                  <tr>
                                  <th>Time Slot</th>
                                  <th>Monday</th>
                                  <th>Tuesday</th>
                                  <th>Wednesday</th>
                                  <th>Thursday</th>
                                  <th>Friday</th>
                                  </tr>
                      
                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart1(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd1(e.target.value)}/></td>
                                  <td>
                                        <select onChange= {(e)=>setMon1(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTue1(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setWen1(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTur1(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setFri1(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart2(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd2(e.target.value)}/></td> 
                                  <td>
                                        <select onChange= {(e)=>setMon2(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTue2(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setWen2(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTur2(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setFri2(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart3(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd3(e.target.value)}/></td>
                                  <td>
                                        <select onChange= {(e)=>setMon3(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTue3(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setWen3(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTur3(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setFri3(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart4(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd4(e.target.value)}/></td>
                                  <td>
                                        <select onChange= {(e)=>setMon4(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTue4(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setWen4(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTur4(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setFri4(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr>
                  
                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart5(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd5(e.target.value)}/></td>
                                  <td>
                                        <select onChange= {(e)=>setMon5(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTue5(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setWen5(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTur5(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setFri5(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart6(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd6(e.target.value)}/></td>
                                  <td>
                                        <select onChange= {(e)=>setMon6(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTue6(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setWWen6(e.target.value)}
                                          class='form-select' 
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setTur6(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select onChange= {(e)=>setFri6(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr> 

                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart7(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd7(e.target.value)}/></td>
                                  <td>
                                        <select  onChange= {(e)=>setMon7(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select  onChange= {(e)=>setTue7(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select  onChange= {(e)=>setWen7(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td> 
                                        <select  onChange= {(e)=>setTur7(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td> 
                                        <select  onChange= {(e)=>setFri7(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart8(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd8(e.target.value)}/></td>
                                  <td>
                                        <select  onChange= {(e)=>setMon8(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select  onChange= {(e)=>setTue8(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select  onChange= {(e)=>setWen8(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td> 
                                        <select  onChange= {(e)=>setTur8(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td> 
                                        <select  onChange= {(e)=>setFri8(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr>

                                  <tr>
                                  <td><input type='time' onChange= {(e)=>setStart9(e.target.value)}/>
                                  <input type='time' onChange= {(e)=>setEnd9(e.target.value)}/></td>
                                  <td>
                                        <select  onChange= {(e)=>setMon9(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td>
                                        <select  onChange= {(e)=>setTue9(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>                        
                                        </select>
                                  </td>
                                  <td>
                                        <select  onChange= {(e)=>setWen9(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td> 
                                        <select  onChange= {(e)=>setTur9(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  <td> 
                                        <select  onChange= {(e)=>setFri9(e.target.value)}
                                          class='form-select'
                                          aria-label='Default select example'
                                        >
                                          {subject.map((u) => (
                                            <option value={u.subjectname}>{u.subjectname}</option>
                                          ))}
                                          <option>Interval</option>
                                        </select>
                                  </td>
                                  </tr>
                                  <center><button type="submit" class="btn btn-primary mt-5 "> Create Time Table</button></center>

                          </table>
                  </form>
              </div>
         </div> 
        </div>
    </div>
     
    )
    
}
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const StudentAnswersUpload = () => {
    const hr ={
        borderLeft: '6px solid ',
        height:'300px'
        
     }  
     const [subject,setSubject] = useState('');
     const [grade,setGrade] = useState('');
     const [lname,setLname] = useState('');
     const [date,setDate] = useState('');
     const [time,setTime] = useState('');
     const [file,setFile] = useState([]);
   
     const ImageAdd = (e) => {
       setFile(e.target.files[0]);
     }
    //  document.getElementById("create-course-form").reset();
     const navi = new useNavigate();
   
     const Submit = (e) => {
   
       e.preventDefault();
       
       const formData = new FormData();
   
       formData.append("subject",subject);
       formData.append("lname",lname);
       formData.append("grade",grade);
       formData.append("date",date);
       formData.append("time",time);
       formData.append("file",file);
   
       setSubject("");
       setLname("");
       setGrade("");
       setDate("");
       setTime("");
       setTime("");
   
        axios.post("/studentanswers/add",formData).then((res)=>{
         alert('Succsessfully Added');
         navi('/studentanswersheetUpload');
       })

     }
     const current = new Date();
     const dates = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

     const today = new Date();
      const times = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
 
    

     return (
       <div className='container mt-5'>
         <div className='mt-5 pt-4'>
          <h1 className='text-center mt-5'>AnswerSheet Upload </h1>
          <form onSubmit={Submit} >
          <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
            <div className='mx- mt-5'>
              <h3 className='mb-5'>Upload file</h3>
                   {/* image */}
                   <div className='form-row'>
                    <input
                      type='file' multiple 
                      filename="file"
                      onChange={ImageAdd}
                      className='form-input'
                    />
                  </div>
            </div>
            <div className='mx- my-4' style={hr}/>
            <div className='mx-5 mt-5'>
        
                   {/* name */}
                  <div className='form-row'>
                    <label className='form-label'>Subject</label><br/>
                    <input
                      type='text'
                      name={subject}
                      onChange={(e)=>setSubject(e.target.value)}
                      className='form-input'
                    />
                  </div>
                     {/* name */}
                    <div className='form-row'>
                    <label className='form-label'>Lesson Name</label><br/>
                    <input
                      type='text'
                      name={lname}
                      onChange={(e)=>setLname(e.target.value)}
                      className='form-input'
                    />
                  </div>
                  {/* name */}
                   <div className='form-row'>
                    <label className='form-label'>Grade</label><br/>
                    <input
                      type='text'
                      name={grade}
                      onChange={(e)=>setGrade(e.target.value)}
                      className='form-input'
                    />
                  </div>
                  <div className='form-row d-flex mt-4'>
                    <div className=''>
                      <input
                        type='text'
                        name={date}
                        value={dates}
                        onChange={(e)=>setDate(e.target.value)}
                        className='form-input'
                      />
                    </div>
                    <div className='ml-3'> 
                      <input
                        type='text'
                        name={time}
                        value={times}
                        onChange={(e)=>setTime(e.target.value)}
                        className='form-input'
                      />
                    </div>
                  </div>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-primary my-4'>submit</button>
                  </div>
    
              </div>
         </div>
          </form>
         </div>
       </div>
     )
   }

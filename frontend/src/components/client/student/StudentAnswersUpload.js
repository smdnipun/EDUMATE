import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const StudentAnswersUpload = () => {
    const hr ={
        borderLeft: '6px solid ',
        height:'300px'
        
     }  
     const [name,setName] = useState('');
     const [file,setFile] = useState([]);
   
     const ImageAdd = (e) => {
       setFile(e.target.files[0]);
     }
   
     const navi = new useNavigate();
   
     const Submit = (e) => {
   
       e.preventDefault();
       
       const formData = new FormData();
   
       formData.append("name",name);
       formData.append("file",file);
   
       setName("");
   
        axios.post("/studentanswers/add",formData).then((res)=>{
         alert('Succsessfully Added');
         navi('/studentanswersheetUpload');
       })
     }
     return (
       <div className='container mt-5'>
         <div className='mt-5 pt-4'>
          <h1 className='text-center mt-5'>AnswerSheet Upload </h1>
          <form onSubmit={Submit}>
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
                    <label className='form-label'>Name</label><br/>
                    <input
                      type='text'
                      name={name}
                      onChange={(e)=>setName(e.target.value)}
                      className='form-input'
                    />
                  </div>

                  <button type='submit' className='btn btn-primary mt-4'>
                    submit
                  </button>
    
              </div>
         </div>
          </form>
         </div>
       </div>
     )
   }

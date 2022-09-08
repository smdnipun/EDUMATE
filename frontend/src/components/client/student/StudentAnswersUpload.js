import React from 'react'

export const StudentAnswersUpload = () => {
    const hr ={
        borderLeft: '6px solid ',
        height:'300px'
     }
     return (
       <div className='container mt-5'>
         <div className='mt-5 pt-4'>
          <h1 className='text-center mt-5'>AnswerSheet Upload </h1>
          <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
          <div className='mx-5 mt-5'>
             <h3 className='mr-5'>Upload file</h3>
             <button className='mt-5'>Upload</button>
           </div>
           <div className='mx-5 my-4' style={hr}/>
           <div className='mx-5 mt-5'>
           <form>
             <select class='form-control'>
                   <option>Default select</option>
                 </select>
                 <br />
                 <br />
   
                 <div class='form-group'>
                   <input
                     type='text'
                     class='form-control'
                     id='formGroupExampleInput'
                     placeholder='Example input'
                   />
                 </div>
                 <br />
                 <br />
                 <div class='form-group'>
                   <input
                     type='text'
                     class='form-control'
                     id='formGroupExampleInput2'
                     placeholder='Another input'
                   />
                 </div>
               </form>
            </div>
         </div>
         </div>
       </div>
     )
   }
   
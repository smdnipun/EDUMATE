import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload'
import { Button } from '@mui/material'
import { Navbar } from '../Navbar';
import { AuthContext } from '../../../../context/AuthContext';
export const SubjectNote = () => {
  const [item,setItem] = useState([])

  const { user } = useContext(AuthContext)
  const userstream = user.stream

  console.log(user);
  console.log(userstream);

  useEffect(()=>{
    axios.post('/subject/stream',{streamname:userstream}).then((res)=>{
      // streamname:subject
      setItem(res.data);
      
    })
  },[])

  

  return (
    <div>
      <Navbar/>
      <div className='text-center' style={{marginTop:"8%",marginLeft:"15%"}}>
        <h1 className='mb-5'>{JSON.parse(localStorage.getItem('user')).stream}</h1>
      <div className='row gx-1 row-cols- row-cols-md-3'>
                    {item.map((datas) => {
                        return(
                    <div class="row gx-4">
                        <div class="col-lg- mb-5">
                            <div class="card h-100 shadow border-0">
                            {/* <>
                              <form
                                method='get'
                                action={'http://localhost:5000/TeacherNotes/' + datas.note}
                              >
                                <div><SimCardDownloadIcon style={{width:"100px"}}/></div>
                                <button className='btn btn-primary'>
                                  Download
                                </button>
                              </form>
                            </> */}
                            <button>{datas.subjectname}</button>
                            </div>
                        </div>
                    </div>

                    )
                    })}
                    </div>
      </div>
    </div>
  )
}
  
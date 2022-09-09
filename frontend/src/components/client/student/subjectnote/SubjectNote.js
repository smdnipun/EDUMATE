import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload'
import { Button } from '@mui/material'
export const SubjectNote = () => {
  const [item,setItem] = useState([])

  useEffect(()=>{
    axios.get('teacherNote/get').then((res)=>{
      setItem(res.data);
    })
  })
  return (
    <div>
      <div className='text-center' style={{marginTop:"5%",marginLeft:"15%"}}>
        <h1 className='mb-5'>Maths</h1>
      <div className='row gx-1 row-cols- row-cols-md-3'>
                    {item.map((datas) => {
                        return(
                    <div class="row gx-4">
                        <div class="col-lg- mb-5">
                            <div class="card h-100 shadow border-0">
                            <>
                              <form
                                method='get'
                                action={'http://localhost:5000/TeacherNotes/' + datas.note}
                              >
                                <div><SimCardDownloadIcon style={{width:"100px"}}/></div>
                                <button className='btn btn-primary'>
                                  Download
                                </button>
                              </form>
                            </>
                                <div class="card-body p-4">
                                    <h5 class="card-title mb-3">{datas.lesson_name}</h5>
                                    <p class="card-text mb-0">{datas.desc}</p>
                                </div>
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

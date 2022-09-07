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
    <div className='' style={{marginLeft:'30%',marginRight:'30%', marginTop:'10%'}}>
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
    )
}
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'

export default function UpdateStreams() {
  const [streamname, setStreamname] = useState('')

  let params= useParams();
  const navigate= useNavigate();

  const Update = (e) => {
    e.preventDefault();
  axios.put(`/stream/${params._id}`, {
    streamname
})
navigate("/getstream");

}


const loadData = () => {
  axios.get(`/stream/get/${params._id}`).then(function (response) {
    const data= response.data;
    setStreamname(data.streamname);
  })
}

useEffect(() => {
  loadData()
}, [])

  return (
        <div className = 'bod mt-5 mb-5 m' style={{ maxWidth: 700, margin: "auto" }}>
            <div className='border shadow rounded-3 bg-light'>
                <form onSubmit={Update} className='mx-5 mt-5 mb-5'>
                    <h2 className='text-center mb-4'> Update Stream</h2>
                    <div class="form-group">
                        <label>Stream Name</label>
                        <input class="form-control" value={streamname} onChange={(e)=>setStreamname(e.target.value)} />
                    </div> 
                    <div align="center">
                        <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
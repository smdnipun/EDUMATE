import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ViewStreams  () {
    const [data, setData] = useState([])

    const loadData = () => {
        
        axios.get('stream/').then((res) => {
             setData(res.data);
        })
    }

    useEffect(() => {
        loadData();
    },[])

    return (
    <div>

     <div className='container' style={{marginLeft:'10%',marginRight:'10%', marginTop:'10%'}}>
      <h3 className='navi'>Streams</h3>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Stream Name</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
            {data.map((row)=>{
              return(
                <tr>
                <td>{row.streamname}</td>
                <td><Link to={`/editstrm/${row._id}`}><button class="btn btn-primary">Update</button></Link></td>

              </tr>
              )
            })}
            </tbody>
          </table>
      </div>
    </div>
    )
}

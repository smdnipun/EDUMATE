import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function ViewStreams  () {
    const [data, setData] = useState([])
    const navigate = useNavigate();


    const loadData = () => {
        
        axios.get('subject/').then((res) => {
            setData(res.data);
            console.log(res.data)
        })
    }

    async function SweatAlert(text, item) {
      // await sleep(1000)
      Swal.fire({
        icon: item,
        text: text,
      })
    }
    
    const deleteSubject = (id) => {
      axios.delete(`/subject/${id}`)
      SweatAlert('Successfully deleted', 'success')
      window.location.reload(true);
    }
    useEffect(() => {
        loadData();
    },[])

    return (
    <div>
      <div className='container' style={{marginLeft:'10%',marginRight:'10%', marginTop:'10%'}}>
      <h3 className='navi'>Subjects</h3> 
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Subject Name</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
            {data.map((row)=>{
              return(
                <tr>
                <td>{row.subjectname}</td>
                <td> <Link to={`/editsubj/${row._id}`}><button class="btn btn-primary">Update</button></Link></td>
                <td><button class="btn btn-primary" onClick={() => { deleteSubject(row._id)}}>Delete</button></td>

              </tr>
              )
            })}
            </tbody>
          </table>
      </div>
    </div>
    )
}
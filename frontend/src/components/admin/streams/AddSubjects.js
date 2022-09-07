import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export default function AddSubjects(){

    const [stream, setStream] = useState([]);
    const [streamname, setStreamname] = useState('');
    const [subjectname, setSubjectname] = useState('');

    const navigate = useNavigate();

    const Subject = {
        streamname,
        subjectname
    }

    async function SweatAlert(text, item) {
      // await sleep(1000)
      Swal.fire({
        icon: item,
        text: text,
      })
    }
    
    const addSubject = async (e) => {
      e.preventDefault();
      try {
        if (
          streamname == '' &&
          subjectname == '' 
        ) 
        {
          SweatAlert('Please fill the required fields.', 'warning')
        } else if (
          streamname == '' ||
          subjectname == '' 
        ) 
        {
          SweatAlert('Please fill the required fields.', 'warning')
        } else 
        {
          axios.post('/subject/add', Subject);
          SweatAlert('Successfully insereted', 'success')
          navigate('/getsubject')
        }
      } catch (err) {
        // Handle Error Here
        console.error(err)
      }
    }

    const loadData = () => {
        axios.get('/stream').then((response) => {
            setStream(response.data)
      })
    }

    
  useEffect(() => {
    loadData()
  }, [])

    return (

        <div className='' style={{marginLeft:'30%',marginRight:'30%', marginTop:'10%'}}>
        <div className='border shadow rounded-3 bg-light'>
        <form onSubmit={addSubject} className='mx-5 mt-5 mb-5'>
          <h2 className='text-center mb-4'> Add Subject</h2>
       
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
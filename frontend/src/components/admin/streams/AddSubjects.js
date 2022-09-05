import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AddSubjects(){

    const [stream, setStream] = useState([]);
    const [streamname, setStreamname] = useState('');
    const [subjectname, setSubjectname] = useState('');

    const navi = useNavigate();

    var Subject = {
        streamname,
        subjectname
    }

    const addSubject = async (e)=>{
        e.preventDefault();
        try{
            axios.post('/subject/add', Subject).then((res)=>{
            })
        }
        catch(err){
            console.error(err)
        }
        navi('/addsubject')
    }

    const loadData = () => {
        axios.get('/stream').then((response) => {
            setStream(response.data)
            console.log(response.data)
      })
    }

    
  useEffect(() => {
    loadData()
  }, [])

    return (

        <div className='' style={{marginLeft:'30%',marginRight:'30%', marginTop:'10%'}}>
        <div className='border shadow rounded-3 bg-light'>
        <form onSubmit={addSubject} className='mx-5 mt-5 mb-5'>
          <h2 className='text-center mb-4'> Add Stream</h2>
       
          <div class="form-group">
            <label>Enter the Subject</label>
            <input class="form-control" value={subjectname} onChange={(e)=>setSubjectname(e.target.value)} />
          </div> 

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
          <div align="center">
            <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
          </div>
        </form>
        </div>
      </div>

    )
}
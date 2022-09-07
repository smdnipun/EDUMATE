import React, {useState} from 'react'
import axios from 'axios'

export default function AddStreams(){

    const [streamname, setStreamname] = useState();

    const Stream = {
        streamname
    }

    const AddStream = async (e)=>{
        e.preventDefault();
        try{
            axios.post('/stream/add', Stream).then((res)=>{
            })
        }
        catch(err){
            console.error(err)
        }
    }

    return (

        <div className='' style={{marginLeft:'30%',marginRight:'30%', marginTop:'10%'}}>
        <div className='border shadow rounded-3 bg-light'>
        <form onSubmit={AddStream} className='mx-5 mt-5 mb-5'>
          <h2 className='text-center mb-4'> Add Stream</h2>
       
          <div class="form-group">
            <label>Enter the Stream</label>
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
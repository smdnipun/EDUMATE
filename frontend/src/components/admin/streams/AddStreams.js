import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function AddStreams(){
  
    const [streamname, setStreamname] = useState('');
    const navigate = useNavigate();

    const Stream = {
        streamname
    }

    async function SweatAlert(text, item) {
      // await sleep(1000)
      Swal.fire({
        icon: item,
        text: text,
      })
    }
  

    const addStream = async (e) => {
      e.preventDefault();
      try {
        if (streamname == '' )
        {
          SweatAlert('Please fill the required fields.', 'warning')
        } else 
        {
          axios.post('/stream/add', Stream);
          SweatAlert('Successfully insereted', 'success')
          navigate('/getstream')
        }
      } catch (err) {
        // Handle Error Here
        console.error(err)
      }
    }

    return (
      <div>

            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
              <div class="position-sticky">
                <div style={{width:"10%",marginLeft:"0%", marginTop:"15%"}}>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
                  </a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                      class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                  <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                  </a>
                </div>
              </div>
            </nav>
        <div className='' style={{marginLeft:'30%',marginRight:'30%', marginTop:'10%'}}>
        <div className='border shadow rounded-3 bg-light'>
        <form onSubmit={addStream} className='mx-5 mt-5 mb-5'>
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

      </div>

    )
}
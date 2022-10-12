import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export const FeedBack = () => {
 
  const [subjectname, setSubjectname] = useState('');
  const [Comment, setComment] = useState('');
  const [subject, setSubject] = useState([]);

  const FeedBack = {
    subjectname,
    Comment
  }

  async function SweatAlert(text, item) {
    // await sleep(1000)
    Swal.fire({
      icon: item,
      text: text,
    })
  }


  const AddFeedback = async (e) => {
    e.preventDefault();
    try {
      if ((subjectname == '' ) || (Comment ==''))
      {
        SweatAlert('Please fill the required fields.', 'warning')
      } else 
      {
        axios.post('/subjectfeedback/add', FeedBack);
        SweatAlert('Successfully insereted', 'success')
      }
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const loadData = () => {
      axios.get('/subject').then((response) => {
        setSubject(response.data)
    })
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
      <div className='' style={{marginLeft:'30%',marginRight:'30%', marginTop:'10%'}}>
          <div className='border shadow rounded-3 bg-light'>
          <form className='mx-5 mt-5 mb-5' onSubmit={AddFeedback}>
            <h2 className='text-center mb-4'>Feed Back</h2>
            <div class="form-group">
              <label for="exampleInputEmail1">Subject Name</label>
              <select class="form-select" value={subjectname} onChange= {(e)=>setSubjectname(e.target.value)}>
                  {subject.map((u) =>{
                      return(
                      <option>{u.subjectname}</option>
                      )
                  })}
              </select>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Comment</label>
              <input type="text" class="form-control" value={Comment} onChange={(e)=>setComment(e.target.value)}/>
            </div>
            <div align="center">
              <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
            </div>
          </form>
          </div>
        </div> 
  )
}

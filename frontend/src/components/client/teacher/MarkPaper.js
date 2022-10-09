import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../common/Navbar'
import { AuthContext } from '../../../context/AuthContext'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Swal from 'sweetalert2'

export const MarkPaper = () => {
  const hr = {
    borderLeft: '6px solid green',
    height: '500px',
  }

  const [note, setNote] = useState([])
  const [mark, setMark] = useState()
  const [comment, setComment] = useState()
  const [status, setStatus] = useState('')
  const params = useParams()


  const { user } = useContext(AuthContext)
  const userId = user._id

  const loadData = () => {
    axios.get(`/StudentAnswers/get/${params.id}`).then((res) => {
      setNote(res.data)
    })
  }
  


  useEffect(() => {
    loadData()
  }, [])

  const updateStatus = (event) => {
    setStatus(event.target.value)
    const data = {
      subject: note.subject,
      lname: note.lname,
      grade: note.grade,
      date: note.date,
      time: note.time,
      file: note.file,
      student_id: note.student_id,
      status: event.target.value,
    }

    axios.put(`/StudentAnswers/${params.id}`, data).then(() => {

    })

  }

  const data = {
    answer_id: params.id,
    subject: note.subject,
    grade: note.grade,
    student_id: note.student_id,
    mark,
    comment,
    markedBy: userId,
  }
  console.log(status)

  const addMarks = async() => {
    if (status !== 'Marked'  ) {
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'Something went wrong!',
     })
    }
    else if (mark>100 || mark<0 ) {
     
      Swal.fire({
        icon: 'error',
        title: 'please enter number between 0 and 100'
      })
      } else {
       await axios.post('/mark/add/', data)
        // alert('succesfully marked')
            Swal.fire({
              icon: 'success',
              title: 'Marks added',
              timer: 1500,
            })
      }
  
   
  }

  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <div className='mt-5 pt-4'>
          <form onSubmit={addMarks}>
            <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2 py=5'>
              <div className='mx-5 mt-5'>
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp;
                <h1 className='mx-5'> Paper Marking </h1>
                <br />
                <br />
                <input
                  type='number'
                  style={{ width: '385px' }}
                  className='form-control mb-5 mt-5 '
                  id='mark'
                  name='mark'
                  placeholder='                         place the mark'
                  required
                  value={mark}
                  onChange={(e) => {
                    setMark(e.target.value)
                  }}
                />
                <button
                  type='submit'
                  style={{ width: '300px', height: '50px' }}
                  className='btn btn-secondary btn-lg mx-5 mt-5'
                >
                  Mark
                </button>
              </div>
              <div className='mx-5 my-4' style={hr} />
              <div className='mx-5 mt-5 pb-4'>
                <form>
                  <div className='mx-5 '>
                    <br />
                    <br />
                    <br />
                    <label>Status</label>
                    <br />
                    <Select
                      style={{ width: '200px' }}
                      value={status}
                      onChange={updateStatus}
                      SelectDisplayProps
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value='None'>None</MenuItem>
                      <MenuItem value='marking'>Marking</MenuItem>
                      <MenuItem value='Marked'>Marked</MenuItem>
                    </Select>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className='form-group'>
                    <textarea
                      type='text'
                      style={{ width: '340px', height: '170px' }}
                      class='form-control'
                      required
                      id='formGroupExampleInput'
                      placeholder='Comment'
                      value={comment}
                      onChange={(e) => {
                        setComment(e.target.value)
                      }}
                    />
                  </div>
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

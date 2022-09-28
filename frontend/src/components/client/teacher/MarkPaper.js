import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../common/Navbar'
import { AuthContext } from '../../../context/AuthContext'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export const MarkPaper = () => {
  const hr = {
    borderLeft: '6px solid green',
    height: '400px',
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

    axios.put(`/StudentAnswers/${params.id}`, data)

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
  const addMarks = () => {
    if (status !== 'Marked' ) {
      alert('please change the status to marked')
    }
    else if (mark>100 || mark<0 ) {
      alert('please enter number between 0 and 100')
      } else {
        axios.post('/mark/add/', data)
        // alert('succesfully marked')
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
                <h1 className='mr-5'>Paper Marking</h1>

                <input
                  type='number'
                  className='form-control mb-5 mt-5 '
                  id='mark'
                  name='mark'
                  placeholder='place the mark'
                  required
                  value={mark}
                  onChange={(e) => {
                    setMark(e.target.value)
                  }}
                />

                <button
                  type='submit'
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
                    <br/>
                    <Select
                      value={status}
                      onChange={updateStatus}
                      displayEmpty
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
                  <div className='form-group align-self-stretch'>
                    <textarea
                      type='text'
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

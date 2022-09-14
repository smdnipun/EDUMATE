import React, { useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import $ from 'jquery'
import { Navbar } from '../../common/Navbar'
import { useNavigate } from 'react-router-dom'

export const UploadLink = () => {

    const navigate = useNavigate()
  const hr = {
    borderLeft: '6px solid green',
    height: '400px',
  }

  const [subject, setSubject] = useState()
  const [lesson_name, setLesson] = useState()
  const [grade, setGrade] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [link, setLink] = useState()

  const add = {
    subject,
    lesson_name,
    grade,
    date,
    time,
    link,
  }

  console.log(add)

  const upload = () => {
    axios.post('link/add', add)
    alert('Succsessfully Added')
    navigate('/viewlink')

    //  $(document).ready(function() {
    //    $('#upload').click(function() {
    //      $('#succ').fadeIn()
    //    })
    //  })
  }

  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <div className='mt-5 pt-4'>
          <form onSubmit={upload}>
            <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2 py=5'>
              <div className='mx-5 mt-5'>
                <h1 className='mr-5'>Upload link</h1>

                <input
                  type='text'
                  class='form-control mb-5 '
                  id='link'
                  name='link'
                  placeholder='place the link'
                  required
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value)
                  }}
                />

                <button
                  type='submit'
                  id='upload'
                  class='btn btn-secondary btn-lg '
                >
                  Upload
                </button>
              </div>
              <div className='mx-5 my-4' style={hr} />
              <div className='mx-5 mt-5 pb-4'>
                <form>
                  <select
                    className='form-control'
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
                  >
                    <option>Select a subject</option>
                    <option>Select a subject</option>
                    <option>Combined maths</option>
                    <option>Biology</option>
                    <option>Physics</option>
                  </select>
                  <br />
                  <br />

                  <div className='form-group'>
                    <input
                      type='text'
                      class='form-control'
                      required
                      id='formGroupExampleInput'
                      placeholder='Lesson name'
                      value={lesson_name}
                      onChange={(e) => {
                        setLesson(e.target.value)
                      }}
                    />
                  </div>
                  <br />
                  <br />
                  <div className='form-group'>
                    <input
                      type='number'
                      class='form-control'
                      required
                      id='formGroupExampleInput2'
                      placeholder='Grade'
                      value={grade}
                      onChange={(e) => {
                        setGrade(e.target.value)
                      }}
                    />
                  </div>
                  <br />
                  <br />
                  <div className='form-group'>
                    <input
                      type='date'
                      class='form-control'
                      required
                      id='formGroupExampleInput2'
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value)
                      }}
                    />
                  </div>
                  <br />
                  <br />
                  <div className='form-group'>
                    <input
                      type='time'
                      class='form-control'
                      required
                      id='formGroupExampleInput2'
                      value={time}
                      onChange={(e) => {
                        setTime(e.target.value)
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

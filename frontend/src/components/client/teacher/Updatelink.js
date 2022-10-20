import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'
import Navigation from '../../common/Navigation/Navigation'

export const Updatelink = () => {
  const navigate = useNavigate()
  const hr = {
    borderLeft: '6px solid green',
    height: '400px',
  }

  const params = useParams()
  console.log(params)
  const [subject, setSubject] = useState()
  const [lesson_name, setLesson] = useState()
  const [grade, setGrade] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [link, setLink] = useState()

   const validateDate = new Date()
   let day = validateDate.getDate()
   let month = validateDate.getMonth() + 1
   let year = validateDate.getFullYear()

   let currentDate = `${year}-${month}-${day}`
  
  const getLink = () => {
    axios.get(`/link/${params.id}`).then((res) => {
      setSubject(res.data.subject)
      setLesson(res.data.lesson_name)
      setGrade(res.data.grade)
      setDate(res.data.date)
      setTime(res.data.time)
      setLink(res.data.link)
    })
  }

  const add = {
    subject,
    lesson_name,
    grade,
    date,
    time,
    link,
  }

  const updateLink = (e) => {
    e.preventDefault()
    if (date <= currentDate) {
      Swal.fire({
        icon: 'warning',

        title: 'Warning',

        text: 'Please Enter a Valid date!!!',
      })
    } else {
      axios.put(`/link/${params.id}`, add)
      Swal.fire({
        icon: 'success',
        title: 'Link updated',
      })

      navigate('/viewlink')
    }
  }

  useEffect(() => {
    getLink()
  }, [])

  return (
    <div>
      <Navigation />
      <div className='container mt-5'>
        <div className='mt-5 pt-4'>
          <form onSubmit={updateLink}>
            <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2 py=5'>
              <div className='mx-5 mt-5'>
                <h1 className='mr-5'>Update link</h1>
                <input
                  type='text'
                  class='form-control'
                  id='link'
                  name='link'
                  placeholder='place the link'
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value)
                  }}
                />
                <br />
                <br />
                <button
                  type='submit'
                  id='upload'
                  class='btn btn-secondary btn-lg'
                >
                  Update
                </button>
              </div>
              <div className='mx-5 my-4' style={hr} />
              <div className='mx-5 mt-5 pb-4'>
                <form>
                  <input
                    type='text'
                    className='form-control'
                    disabled
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
                  />
                  <select
                    className='form-control'
                    value={subject}
                    hidden
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
                    <select
                      type='number'
                      class='form-control'
                      required
                      id='formGroupExampleInput2'
                      placeholder='Grade'
                      value={grade}
                      onChange={(e) => {
                        setGrade(e.target.value)
                      }}
                    >
                      <option>Grade</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <div className='form-group'>
                    <input
                      type='date'
                      class='form-control'
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

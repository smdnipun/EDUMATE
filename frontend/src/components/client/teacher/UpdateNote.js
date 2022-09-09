import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import { useParams } from 'react-router-dom'

export const UpdateNote = () => {
  const hr = {
    borderLeft: '6px solid green',
    height: '300px',
  }

  const params = useParams()
  console.log(params)
  const [subject, setSubject] = useState()
  const [lesson_name, setLesson] = useState()
  const [grade, setGrade] = useState()
  const [note, setNote] = useState()

  const getLink = () => {
    axios.get(`/teacherNote/${params.id}`).then((res) => {
      setSubject(res.data.subject)
      setLesson(res.data.lesson_name)
      setGrade(res.data.grade)
      setNote(res.data.note)
    })
  }

  const add = {
    subject,
    lesson_name,
    grade,
     note,
  }

  const updateLink = () => {
    axios.put(`/link/${params.id}`, add)
  }

  useEffect(() => {
    getLink()
  }, [])

  return (
    <div className='container mt-5'>
      <div className='mt-5 pt-4'>
        <form onSubmit={updateLink}>
        
        

          <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
            <div className='mx-5 mt-5'>
              <h1 className='mr-5'>Upload Note</h1>
              <input
                type='text'
                class='form-control'
                id='link'
                name='link'
                placeholder='place the link'
                value={note}
                onChange={(e) => {
                  setNote(e.target.value)
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
            <div className='mx-5 mt-5'>
              <form>
                <select
                  className='form-control'
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value)
                  }}
                >
                  <option>Select a subject</option>
                  <option>test</option>
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
                  <input
                    type='number'
                    class='form-control'
                    id='formGroupExampleInput2'
                    placeholder='Grade'
                    value={grade}
                    onChange={(e) => {
                      setGrade(e.target.value)
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

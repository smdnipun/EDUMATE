import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navigation from '../../common/Navigation/Navigation'
export const UpdateNote = () => {
  
  const navigate = useNavigate()

  const hr = {
    borderLeft: '6px solid green',
    height: '300px',
  }

  const params = useParams()
  console.log(params)
  const [subject, setSubject] = useState()
  const [lesson_name, setLesson] = useState()
  const [grade, setGrade] = useState()
  const [note,setNote]=useState()
  const [file, setFile] = useState([])

  const getLink = () => {
   
    axios.get(`/teacherNote/${params.id}`).then((res) => {
      setSubject(res.data.subject)
      setLesson(res.data.lesson_name)
      setGrade(res.data.grade)
      setNote(res.data.note)
      
    })
     
      
  }
    const noteAdd = (e) => {
      setFile(e.target.files[0])
    }

    const formData = new FormData()
//  formData.append('lesson_name', lesson_name)
 formData.append('file', file)
//  formData.append('subject', subject)
//  formData.append('grade', grade)

  
  const add = {
    subject,
    lesson_name,
    grade,
    note,
  }
  // console.log(formData)
  const updateNote = (e) => {
        e.preventDefault()
    axios.put(`http://localhost:5000/teacherNote/${params.id}`, add)
     Swal.fire({
       icon: 'success',
       title: 'Note updated',
     })
    navigate('/viewNote')
  }

  useEffect(() => {
    getLink()
  }, [])

  return (
    <div>
      <Navigation />
      <div className='container mt-5'>
        <div className='mt-5 pt-4'>
          <form onSubmit={updateNote}>
            <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
              <div className='mx-5 mt-5'>
                <h1 className='mr-5'>Upload Note</h1>
                <br />
                <br/>
                <input
                  type='text'
                  class='form-control'
                  id='link'
                  name='link'
                  disabled
                  placeholder='place the link'
                  value={note}
                  
                />

                {/* <input
                  type='file'
                  style={{ width: '385px' }}
                  multiple
                  filename='file'
                  onChange={noteAdd}
                  className='form-input'
                  
                /> */}
                <br />
                <br />
                <br />
                <button
                  type='submit'
                  id='update'
                  class='btn btn-secondary btn-lg'
                >
                  Update
                </button>
              </div>
              <div className='mx-5 my-4' style={hr} />
              <div className='mx-5 mt-5'>
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
                    onChange={(e) => {
                      setSubject(e.target.value)
                      
                    }}
                    hidden
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
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

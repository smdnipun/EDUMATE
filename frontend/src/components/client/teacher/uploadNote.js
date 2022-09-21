import { useState } from "react"
import axios from "axios"
import { Navbar } from '../../common/Navbar'
import { useNavigate } from 'react-router-dom'

export const UploadNote = () => {
  const [subject, setSubject] = useState()
  const [lesson_name, setLesson] = useState()
  const [grade, setGrade] = useState()
  const [file, setFile] = useState([])

      const navigate = useNavigate()

  const hr = {
    borderLeft: '6px solid green',
    height: '300px',
  }

  const noteAdd = (e) => {

     setFile(e.target.files[0])

  }

  const Submit = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('lesson_name', lesson_name)
    formData.append('file', file)
    formData.append('subject', subject)
    formData.append('grade', grade)
    

   

    axios.post('/teacherNote/add', formData).then((res) => {
      alert('Succsessfully Added')
      navigate('/viewNote')
    })
  }

  return (
    <div>
      <Navbar />

      <div className='container mt-5'>
        <div className='mt-5 pt-4'>
          <form onSubmit={Submit}>
            <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
              <div className='mx-5 mt-5'>
                <h1 className='mr-5'>Upload file</h1>
                <input
                  type='file'
                  multiple
                  filename='file'
                  onChange={noteAdd}
                  className='form-input'
                  required
                />
                <br />
                <br />
                <br />
                <button
                  type='submit'
                  id='upload'
                  class='btn btn-secondary btn-lg'
                >
                  Upload
                </button>
              </div>
              <div className='mx-5 my-4' style={hr} />
              <div className='mx-5 mt-5'>
                <form>
                  <select
                    className='form-control'
                    required
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
                  >
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
                      required
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
                      required
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
    </div>
  )
}

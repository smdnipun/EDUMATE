import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Alert from '@mui/material/Alert'
import { useParams } from 'react-router-dom';

export const Updatelink = () => {


    const hr = {
      borderLeft: '6px solid green',
      height: '300px',
    }

    const params = useParams();
    console.log(params)
     const [subject, setSubject] = useState()
     const [lesson_name, setLesson] = useState()
     const [grade, setGrade] = useState()
     const [date, setDate] = useState()
     const [time, setTime] = useState()
     const [link, setLink] = useState()

    const getLink = () => {
        axios.get(`/link/${params.id}`).then((res) => {
            setSubject(res.data.subject);
            setLesson(res.data.lesson_name);
            setGrade(res.data.grade);
            setDate(res.data.date);
            setTime(res.data.time);
            setLink(res.data.link);
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


    const updateLink = () => {
        
        axios.put(`/link/${params.id}`,add)
    }

    useEffect(() => {
        getLink();
    },[])


  return (
    <div className='container mt-5'>
      <div className='mt-5 pt-4'>
        <form onSubmit={updateLink}>
          <h1 className='text-center mt-5'>Bugs</h1>
          <Alert variant='filled' id='succ' severity='success'>
            This is a success alert — check it out!
          </Alert>

          <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
            <div className='mx-5 mt-5'>
              <h1 className='mr-5'>Upload link</h1>
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
  )
}

import axios from 'axios'
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

function SignUp() {
  const [firstName, setFname] = useState('')
  const [lastName, setLname] = useState('')
  const [type, setType] = useState('')
  const [stream, setStream] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rpassword, setRpassword] = useState('')

  var data = {
    firstName,
    lastName,
    type,
    stream,
    email,
    password,
  }
  console.log(data)

  const handleSubmit = async () => {
    try {
      if (password != rpassword) {
        alert('Please enter the correct password', 'warning')
      } else {
        const res = await axios.post(
          'http://localhost:5000/api/auth/register',
          data
        )
        console.log(res.data)
        alert('Successfully insereted', 'success')
        Navigate('/login')
      }
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  return (
    <div className='Container'>
      <section className='vh-100'>
        <div className='container-fluid h-custom'>
          <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
                className='img-fluid'
                alt='Sample image'
              />
            </div>
            <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
              <form onSubmit={handleSubmit}>
                <h3 className='text-center p-5'>Register to Edumate</h3>
                <div className='form-outline mb-1'>
                  <input
                    type='fname'
                    id='fname'
                    className='form-control form-control-lg'
                    placeholder='Enter a valid first name'
                    value={firstName}
                    onChange={(e) => setFname(e.target.value)}
                  />
                  <label className='form-label' for='form3Example3'>
                    First Name
                  </label>
                </div>
                <div className='form-outline mb-1'>
                  <input
                    type='lname'
                    id='lname'
                    className='form-control form-control-lg'
                    placeholder='Enter a your last name'
                    value={lastName}
                    onChange={(e) => setLname(e.target.value)}
                  />
                  <label className='form-label' for='form3Example3'>
                    Last Name
                  </label>
                </div>
                <div className='form-outline mb-1'>
                  <select
                    id='type'
                    name='type'
                    className='form-control form-control-lg'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value='Student'>Student</option>
                    <option value='Teacher'>Teacher</option>
                  </select>
                  <label className='form-label' for='form3Example3'>
                    Type
                  </label>
                </div>
                <div className='form-outline mb-1'>
                  <select
                    id='stream'
                    name='stream'
                    className='form-control form-control-lg'
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                  >
                    <option value='Maths'>Maths</option>
                    <option value='Biology'>Biology</option>
                  </select>
                  <label className='form-label' for='form3Example3'>
                    Stream
                  </label>
                </div>
                <div className='form-outline mb-1'>
                  <input
                    type='email'
                    id='email'
                    className='form-control form-control-lg'
                    placeholder='Enter a valid email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className='form-label' for='form3Example3'>
                    Email address
                  </label>
                </div>
                <div className='form-outline mb-1'>
                  <input
                    type='password'
                    id='password'
                    className='form-control form-control-lg'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className='form-label' for='form3Example4'>
                    Password
                  </label>
                </div>
                <div className='form-outline mb-3'>
                  <input
                    type='password'
                    id='rpassword'
                    className='form-control form-control-lg'
                    placeholder='Re-enter password'
                    value={rpassword}
                    onChange={(e) => setRpassword(e.target.value)}
                  />
                  <label className='form-label' for='form3Example4'>
                    Re-enter Password
                  </label>
                </div>

                <div className='d-flex justify-content-between align-items-center'>
                  <div className='form-check mb-0'>
                    <button type='submit' className='btn btn-primary btn-lg'>
                      Register
                    </button>
                  </div>
                  <p className='small fw-bold mb-0'>
                    Have an account?{' '}
                    <Link to='/login' className='link-danger'>
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp

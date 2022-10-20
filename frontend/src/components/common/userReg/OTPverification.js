import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import axios from 'axios'
import Swal from 'sweetalert2'

function OTPverification() {
  const [otp, setOtp] = useState('')
  const [inputOtp, setInputOtp] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [buttonText, setButtonText] = useState('Send OTP')
  const navigate = useNavigate()

  //gmail :- appedumate@gmail.com
  //password :- gmail@edumate
  const generateOTP = (length) => {
    const digits = '0123456789'
    let OTP = ''
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)]
    }
    return OTP
  }

  const verifyEmail = () => {
    if (email === '') {
      Swal.fire({
        icon: 'error',
        title: 'oops...',
        text: 'Please Enter You Email!!!',
      })
    } else {
      axios
        .post('http://localhost:5000/api/auth/verifyEmail', { email: email })
        .then((res) => {
          if (res.data.message === 'failed') {
            Swal.fire({
              icon: 'warning',
              title: 'oops...',
              text: 'Email does not Exist!!!',
            })
          } else {
            localStorage.setItem('userId', res.data.id)
            setName(res.data.name)
            setButtonText('Resend OTP')
            sendEmail()
          }
        })
    }
  }

  const sendEmail = (e) => {
    // e.preventDefault()
    let otpcode = generateOTP(5)
    setOtp(otpcode)
    let emailData = {
      name: name,
      otp: otpcode,
      email: email,
      reply_to: email,
    }
    emailjs
      .send(
        'service_95m7hff',
        'template_drhuo6e',
        emailData,
        'y4IpkvdGFbr2O4UHf'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'OTP is sent your Email. Please Check!',
            showConfirmButton: false,
            timer: 3000,
          })
        },
        function (error) {
          console.log('FAILED...', error)
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Please Try again',
            showConfirmButton: false,
            timer: 1500,
          })
        }
      )
  }

  const verifyOTP = () => {
    if (inputOtp == '') {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: 'Please fill all the details!!!',
      })
    }
    if (inputOtp !== otp) {
      Swal.fire({
        icon: 'error',
        title: 'oops...',
        text: 'OTP Verification Failed!!!',
      })
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Successful',
        text: 'OTP Verification Successful!!!',
      })
      navigate('/resetPassword')
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
              <h1 className='text-center p-2 mt-4 font-weight-bold'>
                Forget Password
              </h1>
              <div className='form-outline mb-1'>
                <label className='form-label' for='form3Example3'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  className='form-control form-control-lg'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='d-flex justify-content-around align-items-center mt-3'>
                <input
                  type='button'
                  className='btn btn-primary px-5'
                  id='sendOTP'
                  value={buttonText}
                  onClick={verifyEmail}
                ></input>
              </div>

              <h4 className='text-center mt-4'>Verify OTP</h4>
              <div className='form-outline mb-3'>
                <label className='form-label' for='form3Example3'>
                  OTP Code
                </label>
                <input
                  type='number'
                  max={5}
                  id='otp'
                  className='form-control form-control-lg'
                  placeholder='OTP Code'
                  value={inputOtp}
                  onChange={(e) => setInputOtp(e.target.value)}
                  required
                />
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <button
                  type='submit'
                  className='btn btn-primary px-5'
                  onClick={verifyOTP}
                >
                  Verify
                </button>
                <p className='small fw-bold mb-0'>
                  Remember the Password?{' '}
                  <Link to='/login' className='link-danger'>
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OTPverification

import React from 'react'
import { Link } from 'react-router-dom'
import './main.css'

function Main() {
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
              <h1 className='text-center p-1'>Welcome to</h1>
              <h2 className='text-center p-1 pb-5'>Edumate</h2>
              <div className='form-outline mb-4 d-flex justify-content-center'>
                <Link to='/register'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg btn-block'
                  >
                    Register
                  </button>
                </Link>
              </div>
              <div className='mb-4 d-flex justify-content-center'>
                <Link to='/login'>
                  <button
                    type='button'
                    className='btn btn-primary btn-lg btn-block'
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main

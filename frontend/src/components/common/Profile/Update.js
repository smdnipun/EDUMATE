import React from 'react'
import { Navbar } from '../Navbar'
import { ProfileCard } from './ProfileCard'

function Update() {
  return (
    <div className='container'>
      <div className='mb-3'>
        <Navbar />
      </div>

      <div className='main-body my-5'>
        <div className='row gutters-sm mt-5'>
          <div className='my-2' style={{ marginLeft: '30%', width: '40%' }}>
            <ProfileCard />
          </div>

          <div class='card'>
            <div class='card-body'>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Full Name</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input type='text' class='form-control' value='John Doe' />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Email</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input
                    type='text'
                    class='form-control'
                    value='john@example.com'
                  />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Phone</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input
                    type='text'
                    class='form-control'
                    value='(239) 816-9029'
                  />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Mobile</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input
                    type='text'
                    class='form-control'
                    value='(320) 380-4539'
                  />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Address</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input
                    type='text'
                    class='form-control'
                    value='Bay Area, San Francisco, CA'
                  />
                </div>
              </div>
              <div class='row '>
                <div class='col-sm-4'></div>
                <div class='col-sm-8 text-secondary'>
                  <button type='submit' className='btn btn-primary'>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update

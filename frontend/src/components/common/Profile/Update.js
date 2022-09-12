import React from 'react'
import { Navbar } from '../Navbar'
import { ProfileCard } from './ProfileCard'

function Update() {
  const handlesubmit = () => {}
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
                  <h6 class='mb-0'>First Name</h6>
                </div>
                <div class='col-sm-9 text-seconday'>
                  <input type='text' class='form-control' value='Nipun' />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Last Name</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input type='text' class='form-control' value='Senarath' />
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
                    value='it20255824@my.sliit.lk'
                  />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Role</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input type='text' class='form-control' value='Student' />
                </div>
              </div>
              <div class='row mb-3'>
                <div class='col-sm-3'>
                  <h6 class='mb-0'>Stream</h6>
                </div>
                <div class='col-sm-9 text-secondary'>
                  <input type='text' class='form-control' value='Maths' />
                </div>
              </div>
              <div class='row '>
                <div class='col-sm-4'></div>
                <div class='col-sm-8 text-secondary'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={handlesubmit}
                  >
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

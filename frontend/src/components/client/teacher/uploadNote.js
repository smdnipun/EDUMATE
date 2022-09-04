import React from 'react'
import './uploadNote.css'

export const UploadNote = () => {

  const hr ={
     borderLeft: '6px solid green',
     height:'500px'
  }
  return (
    <div className='container'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Upload file</h1>
            <button>Upload</button>
          </div>
          
          <div className='col' style={hr}>
            {/* <div style={hr}></div> */}
            <form>
              <select class='form-control'>
                <option>Default select</option>
              </select>
              <br />
              <br />

              <div class='form-group'>
                <input
                  type='text'
                  class='form-control'
                  id='formGroupExampleInput'
                  placeholder='Example input'
                />
              </div>
              <br />
              <br />
              <div class='form-group'>
                <input
                  type='text'
                  class='form-control'
                  id='formGroupExampleInput2'
                  placeholder='Another input'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

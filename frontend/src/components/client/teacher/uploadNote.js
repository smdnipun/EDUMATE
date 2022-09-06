import React from 'react'


export const UploadNote = () => {

  const hr ={
     borderLeft: '6px solid green',
     height:'300px'
  }
  return (
    <div className='container mt-5'>
      <div className='mt-5 pt-4'>
        <h1 className='text-center mt-5'>Bugs</h1>
        <div className='d-flex justify-content-center mt-5 mx-5 border-0 bg-light shadow rounded-2'>
          <div className='mx-5 mt-5'>
            <h1 className='mr-5'>Upload file</h1>
            <input type='file' id='myFile' name='filename' />
          </div>
          <div className='mx-5 my-4' style={hr} />
          <div className='mx-5 mt-5'>
            <form>
              <select className='form-control'>
                <option>Select a subject</option>
              </select>
              <br />
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  class='form-control'
                  id='formGroupExampleInput'
                  placeholder='Lesson name'
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
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

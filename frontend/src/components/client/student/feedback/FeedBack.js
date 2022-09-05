import React from 'react'

export const FeedBack = () => {
  return (
    <div className='' style={{marginLeft:'30%',marginRight:'30%', marginTop:'10%'}}>
      <div className='border shadow rounded-3 bg-light'>
      <form className='mx-5 mt-5 mb-5'>
        <h2 className='text-center mb-4'>Feed Back</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Subject Name</label>
          <input type="text" class="form-control" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Comment</label>
          <input type="text" class="form-control"/>
        </div>
        <div align="center">
          <button type="submit" class="btn btn-primary mt-5 ">Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

import React from 'react'

export default function AdminHome ()  {
  return (
    <div>
    <div class="row" style={{height:"100%",marginLeft:'30%',marginRight:'30%', marginTop:'15%'}}>
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <br></br>
                <a href="getstream" class="btn btn-primary">Go To Stream & Subject Management </a>
                <br></br>
                <br></br>
            </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <br></br>
                <a href="#" class="btn btn-primary">Go To Subject & Exam Time Table Management </a>
                <br></br>
                <br></br>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

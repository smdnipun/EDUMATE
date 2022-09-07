import React from 'react'

export const ExamTimeTable = () => {
  return (
    <div style={{width:"50%",marginLeft:"25%",marginRight:"25%",marginTop:"10%"}}>
        <h1 className='text-center'>Exam Time Table</h1>
        <table class="table table-bordered shadow rounded-2 text-center mt-5 mb-5 bg-light">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wendsday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext';
import Navigation from '../../../common/Navigation/Navigation'
import { Navbar } from '../Navbar'

export const ExamTimeTable = () => {

    const [item,setItem] = useState([]);

    const { user } = useContext(AuthContext);
    const userstream = user.stream;
    console.log(userstream);

    useEffect(()=>{
        axios.post('/examtime/time',{stream : userstream}).then((res)=>{
            setItem(res.data);
        })
    })
  
  return (
    <div>
        <Navigation/>
    <div className='container' style={{width:"60%",marginTop:"10%"}}>
        <h1 className='text-center'>Exam Time Table</h1>
        {item.map((t) => {
            return(

        <table class="table table-bordered shadow rounded-4 mt-5 mb-5 text-center bg-light">
            <thead>
                <tr className='d-flex justify-content-between'><h5>{t.stream}</h5><h5>{t.grade}</h5></tr>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">End Time</th>
                    <th scope="col">Exam Name</th>
                    <th scope="col">Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >{t.day}</td>
                    <td>{t.start}</td>
                    <td>{t.end}</td>
                    <td>{t.subject}</td>
                    <td>{t.grade}</td>
                </tr>
            </tbody>
        </table>
            )
        })}
    </div>
    </div>
  )
}

import React from 'react'
import { Navbar } from '../Navbar'

export const DisplayAnswersheets = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <div className='mt-5 pt-5' >
                <div className='row border shadow bg-light' style={{width:"50%",marginLeft:"25%"}}>
                    <div className='col'>
                        <h6>image</h6>
                        <img></img>
                    </div>
                    <div className='col'>
                        <h5>paper name</h5>
                        <h5>date</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

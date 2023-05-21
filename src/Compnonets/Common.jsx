import React from 'react'
import logo from'./image.png';
import {NavLink }from 'react-router-dom';

export const Common = (props) => {
  return (
    <div className=' container mt-5 d-flex flex-wrap d-sm-flex-column justify-content-center'>
      <div className='shyam row col-12 col-sm-12'>
        <div className=' ram col-6 col-sm-6 d-flex flex-wrap ' style={{height:"70vh"}}>
        
          <div className='my-auto mx-auto' style={{fontSize:"3rem"}}>
           <div className='container'><p>{props.data1} <span style={{fontSize:'3rem',color:"blue"}}>{props.data2}</span></p>
           <p style={{fontSize:"1.2rem"}} >{props.data}</p>

           <button type="button" class="btn btn-outline-primary " ><NavLink to={props.go} style={{textDecoration:"none"}}> {props.visit}</NavLink></button>
           </div>
        </div>
        </div>
        <div className='ram col-5 col-sm-6  flex-wrap order-sm-2'><img className='img' alt='this is imgar' style={{height:'60vh',width:"100%", marginLeft:"auto"}} src={logo}></img></div>
      </div>
    </div>
  )
}

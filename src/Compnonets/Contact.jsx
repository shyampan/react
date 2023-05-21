import React, { useState } from 'react'
import './contact.css'
import TextField from '@mui/material/TextField';


export const Contact = () => {
    const[ans,setans] = useState({
      name:'',
      email:'',
      subject:'',
      problem:''

    });

    const shyam = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setans(pres=>({...pres, [name]:value}))
        console.log(ans);
    }
  return (

   <>
      <div className='main'>
        <div className=' one bg-light bcg mx-auto'>
          <center>
          <h3>Send Message To us</h3>
          <TextField id="standard-basic" label="Name" variant="standard" name='name' value={ans.name} onChange={shyam} style={{width:'15rem'}} />
          <br/>
          <TextField id="standard-basic" label="Email" name='email' value={ans.email} onChange={shyam} variant="standard"style={{width:'15rem'}} />
          <br/>
          <TextField id="standard-basic" label="Subject" name='subject' value={ans.subject} onChange={shyam} variant="standard"style={{width:'15rem'}} />
          
          <br/>
          <br/>
          <br/>
          <br/>
          <textarea name='problem' onChange={shyam} value={ans.problem} style={{border:'none',outline:'none', borderBottom:'1px solid purple',width:'15rem',backgroundColor:'transparent' }} placeholder='Enter your message'></textarea>
          
          <br/>
          <br/>
          <button type="button" class="btn btn-primary">Submit Message</button>
          </center>
        </div>
        <div className=' bg-light two mx-4'>
          
            <h2>Contact Us</h2>
            <p>We are open for any suggestion or for hava a chat.</p>
            <>
            <p>
            <i className="fa fa-map-marker my-2" aria-hidden="true"style={{ fontSize: "2rem", marginRight:"2rem" }} />
            Address:Minal Resdiency
            </p>
            <p>
            <i className="fa fa-phone my-2"style={{ fontSize: "2rem", marginRight:"2rem" }}/>
            Contact:8736020229

            </p>

            <p>
            <p>
            <i class="fa fa-envelope-o my-2"style={{ fontSize: "2rem", marginRight:"2rem" }}></i>
            Email:shyampandey303@gmail.com
            </p>
            </p>
            <p>
            <>
  <i className="fa fa-link my-2" style={{ fontSize: "2rem", marginRight:"2rem" }}/> Website:shyampandey.com
</>

            </p>
</>



        </div>

    </div>
   </>
  )
}

import React from 'react'
import Data from './Data';
import { Card } from './Card';
import web from './Image/web.png';
import appd from './Image/appd.png';
import App from './Image/App.png';
import software from './Image/software.png';
import digital from './Image/digital.png';
import mar from './Image/mar.png';

export const Service = () => {
  return (
   <>
    <div className='container my-4'>
      <div className='row'>
        <div className='col-12 bg-light ' style={{textAlign:"center",fontSize:'2.5rem'}}>Our Services</div>
        <div className='row container my-4'>
           {
            <>
           <Card img={web} title={Data[0].title}/>
           <Card img={appd} title={Data[1].title}/>
           <Card img={software} title={Data[2].title}/>
           <Card img={digital} title={Data[3].title}/>
           <Card img={App} title={Data[4].title}/>
           <Card img={mar} title={Data[5].title}/>

           
           </>
           }
          </div>
          
          



      </div>
    </div>
   </>
  )
}

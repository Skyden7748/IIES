import React from 'react'
import './Donations.css'
import Sps from '../components/Sps'
import Spss from '../components/Spss'
import Spsss from '../components/spsss'

function Donations() {
  return (
   <div className='contact-main'>
       <div className='about-header two'>

<div className='about-header-text'>
    
    <h1>Donations</h1>       
    
</div>
</div>

<div className='d-01'>
  <div className='d-01-left'>
    <h1>Together, We Can Change Lives</h1>
  </div>
  <div className='d-01-right'>
     
  </div>
</div>



<div className='d-02'>
  <div className='d-02-top'>

  </div>
  <div className='d-02-bottom'>
    
   <div className='gallery-box'>
   <div className='d-02-bottom-header'>
      <h1>Maintainance of Senior Citizen Homes</h1>

    </div>
     <Sps/>
   </div>
   <div className='gallery-box'>
   <div className='d-02-bottom-header'>
      <h1>Health Camp</h1>

    </div>
     <Spss/>
   </div>

   <div className='gallery-box'>
   <div className='d-02-bottom-header'>
      <h1>Swachh Bharat Mission</h1>

    </div>
     <Spsss/>
   </div>
  
  </div>
</div>
{/* <div className='d-02'>
  <div className='d-02-top'>

  </div>
  <div className='d-02-bottom'>
   <div className='gallery'>
    
    <div className='box'>
      <div className='dream'>
        <img src="./images/01.jpg" alt="" />
        <img src="./images/02.jpg" alt="" />
        <img src="./images/07.jpg" alt="" />
        <img src="./images/04.jpg" alt="" />
        <img src="./images/05.jpg" alt="" />
       

      </div>
      <div className='dream'>
        <img src="./images/10.jpg" alt="" />
        <img src="./images/06.jpg" alt="" />
        <img src="./images/05.jpg" alt="" />
        <img src="./images/08.jpg" alt="" />
        <img src="./images/09.jpg" alt="" />
        
   


      </div>
      

    </div>

   </div>

  </div>
</div> */}
   </div>
  )
}

export default Donations
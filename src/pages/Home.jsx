import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

import Sp from '../components/Sp'


 

function Home() {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donations');
  };
  return (
    <div className='main'>
    <div className='hero'>

      <div className='hero-text'>
        <h2>Empowering Sustainability</h2>
        <h1>Advancing Conservation</h1>
      </div>
    </div>
    <div className='under-hero'>
      <div className='under-hero-content'>
        <div className='under-hero-content-h'>
          <h1>
          IIES at a Glance
          </h1>
        </div>
        <p>The Indian Institute of Environment and Science (IIES) is a <span className='highlight'> leading research and educational institution dedicated to driving sustainable development and environmental conservation.</span> With a diverse team of experts, the IIES works across a range of project areas, from promoting sustainable livelihoods to raising awareness on critical issues like climate change and pollution.</p>
      </div>
      </div>
      
     



      <div className='values'>
        <div className='values-heading'>
            <h1>Core Values</h1>

        </div>

      <div className="slider">
  <div className="slide-track">
    <div className="slide">
      <h1>Sustainability</h1>
    </div>
    <div className="slide">
      <h1>Innovation</h1>
    </div>
    <div className="slide">
    <h1>Collaboration</h1>
    </div>
    <div className="slide">
    <h1>Inclusivity</h1>
    </div>
    <div className="slide">
    <h1>Integrity</h1>
    </div>
    <div className="slide">
      <h1>Sustainability</h1>
    </div>
    <div className="slide">
      <h1>Innovation</h1>
    </div>
    <div className="slide">
    <h1>Collaboration</h1>
    </div>
    <div className="slide">
    <h1>Inclusivity</h1>
    </div>
    <div className="slide">
    <h1>Integrity</h1>
    </div>
    <div className="slide">
      <h1>Sustainability</h1>
    </div>
    <div className="slide">
      <h1>Innovation</h1>
    </div>
    <div className="slide">
    <h1>Collaboration</h1>
    </div>
    <div className="slide">
    <h1>Inclusivity</h1>
    </div>
    <div className="slide">
    <h1>Integrity</h1>
    </div>
  </div>
</div>



      </div >

      
      
        <div className='management_content '>
             <div className='management_content_img_container'>
        
                 <div className='management_content_img'>
                   <img src="" alt="" />
          
                </div>
                <div className='management_content_img_text'>
                    <h1> Manage-  ment </h1>
                </div>
             </div>

         <div className='management_content_text'>
          <h1>Management</h1>
          <p>The IIES is governed by a Board of Trustees comprising respected leaders from the fields of environment, science, and social development. The board sets the strategic direction for the institute and ensures adherence to its core values and mission.</p>
         </div>
        </div>

        <div className='target'>
        <div className='target-heading'>
            <h1>Project Areas </h1>
        </div>

      <Sp/>


      </div>
      <div className='management_content three'>
        <div className='management_content_img_container'>
           <div className='management_content_img three'>
            <img src="" alt="" />
            </div>
            <div className='management_content_img_text'>
              <h1>Make a difference today by donating</h1>
            </div>

         </div>


         <div className='management_content_text three'>
          <h1>Make a difference today by donating.</h1>
          <p>Your donation empowers change. Every contribution helps us support those in need and advance our mission. Thank you for making a difference.</p>
          <button onClick={handleDonateClick}>
           Donate
          </button>
         </div>
        </div>
       
        
        <div className='achievements'>
       <div className='sub-achievements'>
          <div className='achievement-card'>
            <div className='card-head'><h1>Awards and Recognition</h1></div>
            <div><p>IIES has been recognized globally for its pioneering work in environmental research and sustainable development. Our researchers have received prestigious awards and accolades for their groundbreaking contributions, further solidifying our reputation as a leading institution in the field.</p></div>
          </div>
          <div className='achievement-card'>
            <div className='card-head'><h1>Community Engagement</h1></div>
            <div><p>IIES has actively engaged with
local communities, empowering
them through educational
initiatives, environmental
awareness programs, and
collaborative projects. Our
outreach efforts have helped
promote sustainable practices
and foster a deeper
understanding of environmental
issues.</p></div>
          </div>
          <div className='achievement-card'>
            <div className='card-head'><h1>Technological
            Advancements</h1></div>
            <div><p>IIES has invested in cutting-edge
technologies to enhance our
research capabilities and drive
innovation. From state-of-the-art
laboratories to advanced data
analysis tools, we have embraced
technological solutions to tackle
complex environmental
challenges more effectively.</p></div>
          </div>
       </div>
      </div>
      <div className='management_content next'>
      <div className='management_content_text next'>
          <h1>Human Resources</h1>
          <p>The IIES is supported by a dedicated team of over 100 professionals, including researchers, scientists, program managers, and community outreach workers. The institute is led by a highly experienced Executive Director and a team of senior managers who oversee the various project areas.</p>
         </div>
         
         <div className='management_content_img_container two'>
         <div className='management_content_img next'>
          <img src="" alt="" />
         </div>
         <div className='management_content_img_text'>
          <h1>Human Resources</h1>
         </div>
         </div>

        
        </div>
     
        
     
        <div className='home-last'>
          <p>Your donation fuels our mission, helping us make a real difference in the lives of those we serve. With your support, we can continue our vital work and bring positive change to our community.</p>
        </div>



     

      


   


    </div>
        
  )
}

export default Home
import React from 'react'
import './About.css'
import Sp from '../components/Sp'


function About() {
  return (
    <div className='about-main'>
        <div className='about-header'>

            <div className='about-header-text'>
                
                <h1>About Us</h1>       
                
            </div>
            </div>
            <div className='under-hero'>
      <div className='under-hero-content'>
        <div className='under-hero-content-h'>
          <h1>
          IIES
          </h1>
        </div>
        <p>The Indian Institute of Environment and Science (IIES) is a leading research and educational institution
dedicated to the sustainable development and conservation of the environment. Established in 2005, IIES
has gained a reputation for its cutting-edge research, innovative educational programs, and effective
outreach initiatives that address critical environmental challenges.
Located in the vibrant city of Bhubaneswar, Odisha, IIES is equipped with state-of-the-art facilities and a
team of highly skilled researchers, scientists, and faculty members. The institute's multidisciplinary
approach combines expertise from fields such as environmental science, ecology, engineering, and policy
to develop holistic solutions for environmental issues.</p>
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

      <div className='under-hero rd'>
      <div className='under-hero-content'>
        <div className='under-hero-content-h'>
          <h1>
          Legal Status
          </h1>
        </div>
        <p>The IIES is a registered non-profit organization, with a strong commitment to transparency and
        accountability. The institute operates under the guidelines of the Indian Societies Registration Act.</p>
      </div>
      </div>
      <div className='target'>
        <div className='target-heading'>
            <h1>Project Areas </h1>
        </div>

      <Sp/>


      </div>

      <div className='about-last'>
         <div className='about-last-left'>
            <h1>
            Human Resources
            </h1>
            <p>The IIES is supported by a dedicated team of over 100 professionals, including researchers, scientists,
program managers, and community outreach workers. The institute is led by a highly experienced
Executive Director and a team of senior managers who oversee the various project areas.</p>
         </div>
         <div className='about-last-left'>
            <h1>
            Management
            </h1>
            <p>
            The IIES is governed by a Board of Trustees comprising respected leaders from the fields of environment,
science, and social development. The board sets the strategic direction for the institute and ensures
adherence to its core values and mission.
            </p>
         </div>

      </div>

     
        
    
       
    </div>
  )
}

export default About
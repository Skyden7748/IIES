import React from 'react'
import './Home.css'
import Acco from '../components/Acco'

function Home() {
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
      <div>
        
      </div>
      <div className='rnd'>
        <div className='rnd-heading'>
          <h1>Research and Development</h1>
        </div>
        
      <Acco/>
      </div>

      <div className='docs'>
        <div className='doc-header'>
          <h1>Documents</h1>
        </div>
        <div className='doc-content'>
        <div className='doc01'>
        
        <iframe src="https://drive.google.com/file/d/1xbdZXp_mX_dEuFRAV6g1y-GeRvu_P-Sz/preview" frameborder="0"  ></iframe>



        </div>
        <div className='doc01'>
          <iframe src="https://drive.google.com/file/d/1K5YD1VjiS9FYjuEjY8BFF6-z44yXIYxY/preview" frameborder="0"></iframe>
        </div>
        </div>
      </div>


   


    </div>
        
  )
}

export default Home
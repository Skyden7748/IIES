import Accordion from 'react-bootstrap/Accordion';
import './Acco.css'

function Acco() {
  return (
    <Accordion defaultActiveKey="0" className="custom-accordion">
      <Accordion.Item   eventKey="0" className='acco'>
        <Accordion.Header ><h3> Cutting-Edge Facilities </h3></Accordion.Header>
        <Accordion.Body className='acco-body'   > <p>
        The IIES is equipped with state-of-the-art
research laboratories and facilities,
enabling our scientists to push the
boundaries of scientific discovery. From
advanced analytical equipment to
innovative pilot-scale testing rigs, our
infrastructure supports groundbreaking
research in environmental science and
sustainability.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <h3> Multidisciplinary Collaboration </h3></Accordion.Header>
        <Accordion.Body className='acco-body' >
            <p>
            Our research teams bring together
experts from diverse backgrounds -
including environmental science,
engineering, biology, and policy - to
tackle complex, interdisciplinary
challenges. This collaborative approach
fosters innovative solutions and ensures
a comprehensive understanding of the
issues we address.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <h3> Translational Research  </h3></Accordion.Header>
        <Accordion.Body className='acco-body' >
            <p>
            At IIES, we are committed to transforming our research findings into practical, real-world
applications. Our researchers work closely with industry partners, policymakers, and
communities to develop and implement impactful solutions that address pressing
environmental and sustainability concerns.</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
    
  );
}

export default Acco;
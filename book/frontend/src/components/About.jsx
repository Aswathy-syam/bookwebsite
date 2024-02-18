import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <div className="container-fluid ">
    <h2 className="text-center fw-bold mt-5 mb-5 py-5">About Us</h2>

    <Container>
      <Row>
        <Col>
        
        <img src="https://media.istockphoto.com/id/916628728/photo/open.jpg?s=612x612&w=0&k=20&c=keovmXoVZbbd5dcSxoYIbZs8AnHsxQ2nFdhfD9UojiQ=" alt=""className='w-75 ' />
        
        </Col>
        {/*  */}
        <Col>
        <h3 className='mb-4 text-primary fw-bold'>For All Your Readings Needs</h3>
        
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, amet quidem dolores non ipsa dolor optio adipisci iusto officiis facere corrupti incidunt consequuntur consectetur quam. Velit necessitatibus debitis facilis molestias ab nam perspiciatis, vero porro.</p>
        
        </Col>
      </Row>

      </Container>



    </div>
  )
}

export default About
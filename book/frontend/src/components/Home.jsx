import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Home() {
  return (
    <>
<div className="container-fluid-body">

<div className='color-overlay'></div>
  
<div className='heading '>
<h1 className='fw-bold' >Find Your Book Of Choice</h1>
<p className='mt-4'>One of the many gifts that books give readers is a connection to each other.When we share <br/> an affection for a writer,an another or a story,we also have a better understanding of people unlike ourselves.<br/>Books cultivate emapthy</p>
<Form className="d-flex m-auto" style={{width:"35%"}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
</div>





</div>
</>
  )
}

export default Home




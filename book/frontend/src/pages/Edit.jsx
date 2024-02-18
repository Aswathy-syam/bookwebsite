import React from 'react'
import { Button, Form, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";


function Edit() {
  return (
    <div className='edit'>

<div className="container mt-5">
        <h1 className="text-center fw-bolder mb-5">Update Book Details</h1>
        <div className="mt-3 shadow border rounded p-2 ">
          

          <Form className="m-5">
            <Row>
              {/* book name */}

              <FloatingLabel controlId="floatingInputbook" label="Book name" className="mb-3 col-lg-6">
                <Form.Control type="text" placeholder="book" name="book"/>
              </FloatingLabel>

              {/* author name */}

              <FloatingLabel controlId="floatingInputauthor" label="Author name" className="mb-4  col-lg-6">
                <Form.Control type="text" placeholder="author"name="author"/>
              </FloatingLabel>

                {/* price */}

                <FloatingLabel controlId="floatingInputprice" label="Price" className="mb-3 col-lg-6">
                <Form.Control type="text" placeholder="price"name="price"/>
              </FloatingLabel>

             

             
{/* upload file */}
           <Form.Group className="mb-2 col-lg-6">
                <Form.Label>Choose a cover picture</Form.Label>

                  <Form.Control type="file" name="profile" />
               </Form.Group>

              



              <Button className='mt-4' type="submit" variant="success">Update</Button>
            </Row>
          </Form>
        </div>
      </div>



    </div>
  )
}

export default Edit
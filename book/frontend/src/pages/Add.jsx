import React, { useState } from 'react'
import { Button, Form, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { addbook } from '../services/AllApi';


function Add() {

// to create a state for normal inputs

const[normalInputs,setnormalInputs]=useState({
  bookName:"",
  authorName:"",
  price:""
})

// to create state for profile

const [profile,setProfile]=useState("")

// define getNormalInputs

const getNormalInputs=(e)=>{
const{name,value}=e.target
setnormalInputs({...normalInputs,[name]:value})

}
console.log(normalInputs);

// define setProfile

const getProfile=(e)=>{
// console.log(e.target.files[0]);
setProfile(e.target.files[0])
}
console.log(profile);

// define handleSubmit

const handleSubmit=async(e)=>{
e.preventDefault()
const{ bookName,authorName,price}=normalInputs

if(!bookName||!authorName||!price||!profile){

alert('please fill the form completely')
}
else{
  // alert('form filled completely ')

//create form data

const data=new FormData()

data.append("bookName",bookName)
data.append("authorName",authorName)
data.append("price",price)
data.append("profile",profile)

// header

const headers={
  "content-type":"multipart/form-data"
}

// api call

const response= await addbook(data,headers)
console.log(response);

}




}





  return (
    <div className='edit'>

<div className="container mt-5 ">
        <h1 className="text-center fw-bolder mb-5 ">Add New Book Details</h1>
        <div className="mt-3 shadow border rounded p-2 bg-info ">
          

          <Form className="m-5 ">
            <Row>
              {/* book name */}

              <FloatingLabel controlId="floatingInputbookName" label="bookName"  className="mb-4 col-lg-6">
                <Form.Control type="text" placeholder="bookName" name="bookName" onChange={e=>getNormalInputs(e)} value={normalInputs.value}/>
              </FloatingLabel>

              {/* author name */}

              <FloatingLabel controlId="floatingInputauthorName" label="authorName"  className="mb-4 col-lg-6">
                <Form.Control type="text" placeholder="authorName" name="authorName" onChange={e=>getNormalInputs(e)} value={normalInputs.value}/>
              </FloatingLabel>

                {/* price */}

                <FloatingLabel controlId="floatingInputprice" label="price"  className="mb-4 col-lg-6">
                <Form.Control type="text" placeholder="price" name="price" onChange={e=>getNormalInputs(e)} value={normalInputs.value}/>
              </FloatingLabel>

             

             
{/* upload file */}
           <Form.Group className="mb-3 col-lg-6">
                <Form.Label>Choose a book picture</Form.Label>

                  <Form.Control type="file" name="profile" onChange={e=>getProfile(e)}  />
               </Form.Group>

              



              <Button onClick={e=>handleSubmit(e)} className='mt-4' type="submit" variant="primary">Submit</Button>
            </Row>
          </Form>
        </div>
      </div>



    </div>
  )
}

export default Add
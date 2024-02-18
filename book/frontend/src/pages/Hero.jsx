import React, { useEffect, useState } from 'react'
import Home from '../components/Home'
import Feature from '../components/Feature'
import Books from '../components/Books'
import About from '../components/About'
import Footer from '../components/Footer'
import { allBooks, deleteBook } from '../services/AllApi'
import { useParams } from 'react-router-dom'



function Hero() {
  const[allBookData,setallBookData]=useState([])

const {id}=useParams()
console.log(id);


  useEffect(() => {
    getAllBooks()
  
    
  },[] )

// to get all data call allbooks fn

const getAllBooks=async()=>{
  const response= await allBooks()
  console.log(response);
  setallBookData(response.data)
}

//delete

const removeBook=async(id)=>{
const response=await deleteBook(id)
if(response.status===200){
  getAllBooks()
}
else{
  alert('operation failed')
}
}


  return (
    <>

   <Home/>
   <Feature/>
   <Books  displayData={allBookData}  removebook={removeBook}/>
   <About/>
   <Footer/>

    </>
  )
}

export default Hero
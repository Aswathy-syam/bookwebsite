//server creating using express steps

//import dot env

require('dotenv').config()

//import database connection
require('./DB-connection/connection')

//import express

const express=require('express')

//import router

const route=require('./Routes/router')

//import cors

const cors=require('cors')
const router = require('./Routes/router')

//create server using express

const bookServer=express()

//use cors in server

bookServer.use(cors())

//use parse

bookServer.use(express.json())

//use router
bookServer.use(router)


bookServer.use('uploads',express.static('./uploads'))

//customize port
const  PORT=4000||process.env.PORT

//run server

bookServer.listen(PORT,()=>{
console.log(`book server started at port ${PORT}`);
})

//request

// bookServer.post('/',(req,res)=>{
//     res.send(`<h1>ems server at port 4000</h1>`)
// })

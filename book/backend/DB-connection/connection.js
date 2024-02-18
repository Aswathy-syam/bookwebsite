const mongoose=require('mongoose')

const  connectionString=process.env.DATABASE



mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then((data)=>{
    console.log('mongodb atlas connected to book server');
}).catch((err)=>{
    console.log('mongodb connection failed');
})
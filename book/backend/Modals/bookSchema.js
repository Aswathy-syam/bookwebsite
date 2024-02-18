const mongoose=require('mongoose')

const bookSchema=new mongoose.Schema({

bookName:{
    type:String,
    required:true,
   unique:true
},
authorName:{
    type:String,
    required:true,
    trim:true
},
price:{
    type:String,
    required:true,

},
profile:{
    type:String,
    required:true
}


})


const books=new mongoose.model('books',bookSchema)
module.exports=books;
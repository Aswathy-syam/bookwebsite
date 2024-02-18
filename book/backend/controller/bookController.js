const books=require('../Modals/bookSchema')


exports.addbook=async(req,res)=>{

    console.log('inside add user function');

    const{bookName,authorName,price}=req.body

    try{
        const prebook=await books.findOne({bookName})

        if(prebook){
            res.status(406).json('book already exists')
        }
        else{
            const newbook=new books({
                bookName,authorName,price,profile:req.file.filename
            })

            await newbook.save()
            res.status(200).json(newbook)
        }
    }catch(err){
        res.status(401).json('Error:'+err)
    }
}

// get data

exports.getallBook=async(req,res)=>{
try {
    const allBooks=await books.find({})
    res.status(200).json(allBooks)
} catch (err) {
    res.status(406).json(err)
}
}

//delete data

exports.deleteBook=async(req,res)=>{
    const{id}=req.params
    try{
        const removeData=await books.findByIdAndDelete({_id:id})
        res.status(200).json(removeData)
    }catch(err){
        res.status(401).json(err)
    }
}
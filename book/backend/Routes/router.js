const express=require('express')

const bookController=require('../controller/bookController')

const multerConfig=require('../middleware/multermiddleware')

const router=new express.Router()

router.post('/add',multerConfig.single('profile'),bookController.addbook)

router.get('/get-books',bookController.getallBook)

router.delete('/delete-books',bookController.deleteBook)


module.exports=router
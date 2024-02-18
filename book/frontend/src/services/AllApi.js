
import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonapi"



// add book

 export const addbook=async(body,header)=>{
 return  await commonApi('POST',`${BASE_URL}/add`,body,header)
 }


//  get book

export const allBooks=async()=>{
 return await  commonApi('GET',`${BASE_URL}/get-books`,"")

}

//delete user

export const deleteBook=async(id)=>{
return await commonApi('DELETE',`${BASE_URL}/delete-books/${id}`,{})
}
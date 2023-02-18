import { Response,Request } from "express";
import { RequesExt } from "../interfaces/req-ext";
import { registerUpload } from "../service/Storage";
import { handleHttp } from "../utils/error.handle";
// import db from  '../config/mongo'
// import {registerUpload} from '../service/storage'


const getFile=  async (req:RequesExt,res:Response) => {
    
     try{
              const {user,file}= req;
           const dataToRegister ={
               fileName:`${file?.fieldname}`,
               idUser:`${user?.id}`,
               path:`${file?.path}`
         }
         const response =   await registerUpload(dataToRegister)
        res.send (response)
    }catch(e){
    handleHttp(res,"ERRor")
    }
}




// const getImages =(req:Request,res:Response)=>{
//     try{

//     }catch(e){
//         handleHttp(res,'ERROR_get_Item')
//     }
// }


export{getFile};


// const getImage =(req:Request,res:Response)=>{
//     try{

//     }catch(e){
//         handleHttp(res,'ERROR_get_Item')
//     }   
// }

// const Update =(req:Request,res:Response)=>{
//     try{

//     }catch(e){
//         handleHttp(res,'ERROR_update_Item')
//     }
// }
// const post =({body}:Request,res:Response)=>{
//     try{
//      res.send(body)
//     }catch(e){
//         handleHttp(res,'ERROR_post_Item')
//     }
// }
// const deletImage =(req:Request,res:Response)=>{
//     try{

//     }catch(e){
//         handleHttp(res,'ERROR_delet_Item')
//     }
// }



// export {getImages,getImage,Update,post,deletImage}
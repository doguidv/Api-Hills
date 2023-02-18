import { Request,Response } from "express";
import {registrarNewUser,lognUser} from "../service/auth"




const registerController =async ({body}:Request,res:Response) => {
    
    const responseUSer= await registrarNewUser(body)
    res.send(responseUSer);

}
const loginController=async ({body}:Request,res:Response) => {
    const {email,password}=body;
    const responseUSer= await lognUser({email,password})
   
   if(  responseUSer  === 'PASSWORD_INCORRECT'){
    res.status(403);

   }else{
    res.send(responseUSer)

   }
   
    }


export {registerController,loginController}
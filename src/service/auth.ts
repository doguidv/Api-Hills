import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/User.interface";
import UserModel from "../Modells/user"
import { generateToken } from "../utils/jwt.handle";
import { encrypt, verific } from "../utils/password.handle";

const registrarNewUser=async ( {email,password,name} :User) => {
        const checkis= await UserModel.findOne({email})  
    if(checkis){
        return "Allready_User"; 
    }else{
        
        const passHash=  await encrypt(password)
        const registerNewUser = await UserModel.create({email,password:passHash,name})
    }
return registrarNewUser;
}

const lognUser =async ({email,password}:Auth) => {
    const checkis= await UserModel.findOne({email})  
    if(!checkis){
        return "NOT_FOUND_USER"; 
    }else{
        const passwordHash  = checkis.password;
        const isCorrect=    await  verific(password,passwordHash)
    
        if(!isCorrect){
         return "PASSWORD_INCORRECT"   
        }
        
    }
    const token =    generateToken(checkis.email)
    const data={
        token,
        user:checkis
    }
    return data;
}


export {registrarNewUser,lognUser}
import { Request,Response,Router } from "express";
import {registerController,loginController}  from "../Controllers/auth"
const router= Router()

router.post ("/register", registerController)

router.post ("/login",loginController)
export{router}
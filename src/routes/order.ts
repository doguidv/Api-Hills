import { Router } from "express";
import { getFile } from "../Controllers/orders";
import { checlJWT } from "../middleware/session";


const router= Router()

router.get('/',checlJWT,getFile)

export {router}
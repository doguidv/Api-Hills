import { Router } from "express";
 import { Request,Response } from "express";
import { getFile } from "../Controllers/orders";
  import multerMIddleware from "../middleware/file"
 // import { deletImage, getImage, getImages, post, Update } from "../Controllers/upload";
 import {checlJWT} from  "../middleware/session"

const router= Router();


 router.post("/",checlJWT,multerMIddleware.single('myFile'),getFile)


 export {router};
import Router from "express";
import userControllers from "../app/controllers/userControllers.js";

const router = Router()



router.post('/addingUser', userControllers.adding)



export default router;

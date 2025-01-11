import Router from "express";
import userControllers from "../app/controllers/userControllers.js";

const router = Router()


router.get('/entrando', userControllers.entrando)
router.get('/protected', userControllers.protectedRoute)
router.post('/addingUser', userControllers.adding)



export default router;

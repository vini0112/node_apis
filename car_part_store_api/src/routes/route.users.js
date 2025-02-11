import Router from "express";
import userControllers from "../app/controllers/userControllers.js";

const router = Router()


// routes login
router.get('/devlogin/:id', userControllers.devById)
router.post('/entrando', userControllers.entrando)

// routes cadastro
router.post('/emailValidation', userControllers.validandoEmail)
router.post('/addingUser', userControllers.adding)


export default router;

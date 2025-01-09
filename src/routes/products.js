
import Router from "express";
import {storage} from "../multerConfig.js";
import multer from "multer";


const router = Router()



// to upTimeRobot
router.get('/ping', (req, res) => {
    res.status(200).send('OK');
});


export default router;

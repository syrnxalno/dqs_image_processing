import express from 'express'
import {imgMetaDataContoller, imgResizeController} from '../controllers/imageController.js'

const router = express.Router();
router.get('/metadata',imgMetaDataContoller);
router.get('/resize',imgResizeController);

export default router;

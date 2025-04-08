import express from 'express'
import {imgMetaDataContoller, imgResizeController, imgCompressController} from '../controllers/imageController.js'

const router = express.Router();
router.get('/metadata',imgMetaDataContoller);
router.get('/resize',imgResizeController);
router.get('/compress',imgCompressController);

export default router;

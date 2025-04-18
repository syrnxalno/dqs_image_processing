import express from 'express'
import {saveImageController, imgResizeController, imgCompressController, watermarkImageController} from '../controllers/imageController.js'

const router = express.Router();
router.get('/resize',imgResizeController);
router.get('/compress',imgCompressController);
router.get('/watermark', watermarkImageController);
router.get('/save',saveImageController);

export default router;

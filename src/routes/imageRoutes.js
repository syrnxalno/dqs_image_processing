import express from 'express'
import {saveImageController, imgResizeController, imgCompressController, watermarkImageController} from '../controllers/imageController.js'
import '../workers/resizeWorker.js'
import '../workers/compressWorker.js'
import '../workers/watermarkWorker.js'
import '../workers/saveimageWorker.js'
const router = express.Router();
router.get('/add', imgResizeController, imgCompressController, watermarkImageController, saveImageController);

export default router;

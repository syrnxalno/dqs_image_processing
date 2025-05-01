import express from 'express'
import {processImagePipeline} from '../controllers/imageController.js'
const router = express.Router();


router.get('/process', processImagePipeline);

export default router;

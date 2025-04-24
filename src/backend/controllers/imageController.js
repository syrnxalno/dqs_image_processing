import addToResize from "../queues/resizeQueue.js";
import addtoCompress from "../queues/compressQueue.js";
import addToWatermark from "../queues/watermarkQueue.js";
import addToSaveImage from "../queues/saveimageQueue.js";

export const imgResizeController = async (req, res, next) => {
    try {
        const inputPath = 'src/images/test.png';
        const outputPath = 'src/test/test(resize).png';

        await addToResize({
            name: "resizeImage",
            data: { inputPath, outputPath }
        });

        req.inputPath = inputPath;
        req.resizedPath = outputPath;

        next();
    } catch (err) {
        res.status(500).json({ error: 'Failed to add resize job' });
    }
};

export const imgCompressController = async (req, res, next) => {
    try {
        const inputPath = req.resizedPath || 'src/images/test.png';
        const outputPath = 'src/test/test(compress).png';

        await addtoCompress({
            name: "compressImage",
            data: { inputPath, outputPath }
        });

        req.compressedPath = outputPath;

        next();
    } catch (err) {
        res.status(500).json({ error: 'Failed to add compress job' });
    }
};

export const watermarkImageController = async (req, res, next) => {
    try {
        const inputPath = req.compressedPath || 'src/images/test.png';
        const outputPath = 'src/test/test(watermark).png';

        await addToWatermark({
            name: "watermarkImage",
            data: { inputPath, outputPath }
        });

        req.watermarkedPath = outputPath;

        next();
    } catch (err) {
        res.status(500).json({ error: 'Failed to add watermark job' });
    }
};

export const saveImageController = async (req, res) => {
    try {
        const inputPath = req.watermarkedPath || 'src/images/test.png';
        const destinationPath = 'src/test/test(save).png';

        await addToSaveImage({
            name: "saveImage",
            data: { inputPath, destinationPath }
        });

        res.status(200).json({
            message: 'Image processed and save job added to the queue',
            paths: {
                resized: req.resizedPath,
                compressed: req.compressedPath,
                watermarked: req.watermarkedPath,
                saved: destinationPath
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add save image job' });
    }
};

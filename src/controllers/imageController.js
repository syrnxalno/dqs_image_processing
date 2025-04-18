import addToResize from "../queues/resizeQueue.js";
import addtoCompress from "../queues/compressQueue.js";
import addToWatermark from "../queues/watermarkQueue.js";
import addToSaveImage from "../queues/saveimageQueue.js";

export const imgResizeController = async (req, res) => {
    try {
        const inputPath = 'src/images/test.png'; // Replace with dynamic value if needed
        const outputPath = 'src/test/test(resize).png';

        await addToResize({
            name: "resizeImage",
            data: {
                inputPath,
                outputPath
            }
        });

        res.status(200).json({
            message: 'Resize job added to the queue',
            inputPath,
            outputPath
        });
    } catch (err) {
        console.error("Failed to queue resize job:", err);
        res.status(500).json({ error: 'Failed to add resize job' });
    }
};

export const imgCompressController = async(req,res) =>{
    try {
        const inputPath = 'src/images/test.png'; // Replace with dynamic value if needed
        const outputPath = 'src/test/test(compress).png';

        await addtoCompress({
            name: "compressImage",
            data: {
                inputPath,
                outputPath
            }
        });

        res.status(200).json({
            message: 'Compress job added to the queue',
            inputPath,
            outputPath
        });
    } catch (err) {
        console.error("Failed to queue compress job:", err);
        res.status(500).json({ error: 'Failed to add compress job' });
    }
}

export const watermarkImageController = async(req,res)=>{
    try {
        const inputPath = 'src/images/test.png'; // Replace with dynamic value if needed
        const outputPath = 'src/test/test(watermark).png';

        await addToWatermark({
            name: "watermarkImage",
            data: {
                inputPath,
                outputPath
            }
        });

        res.status(200).json({
            message: 'Watermark job added to the queue',
            inputPath,
            outputPath
        });
    } catch (err) {
        console.error("Failed to queue watermark job:", err);
        res.status(500).json({ error: 'Failed to add watermark job' });
    }
}

export const saveImageController = async (req, res) => {
    try {
        const inputPath = 'src/images/test.png'; 
        const destinationPath = 'src/test/test(save).png';

        await addToSaveImage({
            name: "saveImage",
            data: {
                inputPath,
                destinationPath
            }
        });

        res.status(200).json({
            message: 'Save image job added to the queue',
            inputPath,
            destinationPath
        });
    } catch (err) {
        console.error("Failed to queue save image job:", err);
        res.status(500).json({ error: 'Failed to add save image job' });
    }
};

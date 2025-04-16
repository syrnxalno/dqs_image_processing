import fetchMetaData from "../utils/readImage.js";
import watermarkImage from "../utils/watermarkImage.js";
import addToResize from "../queues/resizeQueue.js";
import addtoCompress from "../queues/compressQueue.js";


export const imgMetaDataContoller = async(req,res) =>{
    try{
        const metadata = await fetchMetaData();
        res.json(metadata);
    }
    catch(err){
        res.json(err);
    }
}

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
    try{
        const watermark = await watermarkImage();
        res.json(watermark);
    }
    catch(err){
        res.json(err);
    }
}

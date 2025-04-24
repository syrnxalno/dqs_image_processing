import sharp from "sharp";

async function watermarkImage(job){
    try{
        const { inputPath = 'src/images/test.png', outputPath = 'src/test/test(watermark).png' } = job.data;
        const watermark = Buffer.from(
            `<svg width="300" height="100">
               <text x="0" y="50" font-size="24" fill="white" opacity="0.5">© watermark</text>
             </svg>`
        );

        await sharp(inputPath) 
            .composite([{ input: watermark, gravity: 'southeast' }])
            .toFile(outputPath);

        return { status: 'success', outputPath };
    }
    catch(err){
        console.error("Error in watermarkImage:", err);
        return { status: 'error', message: err.message };
    }
}

export default watermarkImage;

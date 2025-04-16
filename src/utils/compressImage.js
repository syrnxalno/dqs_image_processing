import sharp from "sharp";

async function compressImg(job){
    try {
            const { inputPath = 'src/images/test.png', outputPath = 'src/test/test(compress).png' } = job.data;
            const compressImg = await sharp(inputPath).resize({ width: 120, height: 120 })
                .toFile(outputPath);
            return compressImg;
        }
        catch (err) {
            return err;
        }
}

export default compressImg;
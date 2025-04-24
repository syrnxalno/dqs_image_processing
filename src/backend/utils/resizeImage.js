import sharp from 'sharp'

async function resizeImage(job) {
    try {
        const { inputPath = 'src/images/test.png', outputPath = 'src/test/test(resize).png' } = job.data;
        const resizeImg = await sharp(inputPath).resize({ width: 120, height: 120 })
            .toFile(outputPath);
        return resizeImg;
    }
    catch (err) {
        return err;
    }
}
export default resizeImage;
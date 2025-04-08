import sharp from "sharp";

async function compressImg(){
    const compress = await sharp('src/images/test.png').toFormat("png", { mozjpeg: true })
    .toFile('src/test-resize/test-compressed.png');
    return compress;
}

export default compressImg;
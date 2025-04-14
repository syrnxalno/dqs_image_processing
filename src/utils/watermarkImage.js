import sharp from 'sharp'

async function watermarkImage(){
    try{
        const image = await sharp('src/images/test.png');
        const watermark = Buffer.from(
            `<svg width="300" height="100">
               <text x="0" y="50" font-size="24" fill="white" opacity="0.5">© watermark</text>
             </svg>`
          );
          image.composite([{ input: watermark, gravity: 'southeast' }]).toFile('src/test/watermark.png')
          return watermark;
    }
    catch(err){
        return error;
    }
   
}

export default watermarkImage;
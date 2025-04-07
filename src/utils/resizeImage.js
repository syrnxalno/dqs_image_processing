import sharp from 'sharp'

async function resizeImage(){
    try{
       const resizeImg =  await sharp('src/images/test.png').resize({width:120, height:120})
       .toFile('src/test-resize/test(resize).png');
       return resizeImg;
    }
    catch(err){
        return err;
    }
}
export default resizeImage;
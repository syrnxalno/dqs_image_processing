import sharp from 'sharp';

async function fetchMetaData(){
    const metadata = await sharp('src/images/test.png').metadata();
    return metadata;
}

export default fetchMetaData;
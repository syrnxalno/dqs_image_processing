import fetchMetaData from "../utils/readImage.js";
import resizeImage from "../utils/resizeImage.js";
import compressImg from "../utils/compressImage.js";


export const imgMetaDataContoller = async(req,res) =>{
    try{
        const metadata = await fetchMetaData();
        res.json(metadata);
    }
    catch(err){
        res.json(err);
    }
}

export const imgResizeController = async(req,res) =>{
    try{
        const resizedData = await resizeImage();
        res.json(resizedData)
    }
    catch(err){
        res.json(err);
    }
}

export const imgCompressController = async(req,res) =>{
    try{
        const compress = await compressImg();
        res.json(compress);
    }catch(err){
        res.json(err);
    }
}
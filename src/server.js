import fetchMetaData from "./utils/readImage.js";
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', async(req,res)=>{
    try{
    const metadata = await fetchMetaData();
    res.json(metadata);
    }
    catch(err){
        res.send("Error displaying image metadata :"+err);
    }
})

app.listen(PORT, () =>{
console.log(`Server running on port ${PORT}`)
})


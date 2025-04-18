import { Worker } from "bullmq";
import redisConnect from "../config/redisConfig.js";
import compressImg from "../utils/compressImage.js";

const jobHandler = {
    compressImage : compressImg
}

const processJob = async(job) =>{
    const handler = jobHandler[job.name];
    if(handler){
        console.log(`Compress Worker processing job with name : ${job.name}`);
        await handler(job);
    }
}

const worker1 = new Worker('compressQueue',processJob, {connection:redisConnect})
worker1.on("completed",(job)=>{
    console.log(`Compress process ${job.id} has finished`)
})

worker1.on("failed",(job, err) =>{
    console.log(`Compress process ${job.id} has failed with error : `+err);
});

import { Worker } from "bullmq";
import redisConnect from "../config/redisConfig.js";
import watermarkImage from "../utils/watermarkImage.js";

const jobHandler = {
    watermarkImage: watermarkImage,
};
const processJob = async (job) => {
    const handler = jobHandler[job.name];
    if (handler) {
        console.log(`Watermark worker processing job with name : ${job.name}`);
        await handler(job);
    }
};

const worker3 = new Worker("watermarkQueue", processJob, { connection: redisConnect });

worker3.on("completed",(job) =>{
    console.log(`Watermark process ${job.id} has finished`);
});

worker3.on("failed",(job, err) =>{
    console.log(`Watermark process ${job.id} has failed with error : `+err);
});

import { Worker } from "bullmq";
import redisConnect from "../config/redisConfig.js";
import resizeImage from "../utils/resizeImage.js";

const jobHandler = {
    resizeImage: resizeImage,
};
const processJob = async (job) => {
    const handler = jobHandler[job.name];
    if (handler) {
        console.log(`Processing job with name : ${job.name}`);
        await handler(job);
    }
};

const worker = new Worker("resizeQueue", processJob, { connection: redisConnect });

worker.on("completed",(job) =>{
    console.log(`Process ${job.id} has finished`);
});

worker.on("failed",(job, err) =>{
    console.log(`Process ${job.id} has failed with error : `+err);
});

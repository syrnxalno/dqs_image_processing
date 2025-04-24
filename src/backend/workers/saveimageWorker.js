import { Worker } from "bullmq";
import redisConnect from "../config/redisConfig.js";
import saveImage from "../utils/saveImage.js";

// Define job handlers for this worker
const jobHandler = {
    saveImage: saveImage,
};


const processJob = async (job) => {
    const handler = jobHandler[job.name];
    if (handler) {
        console.log(`Save Image worker processing job with name : ${job.name}`);
        await handler(job);
    }
};


const worker4 = new Worker("saveImageQueue", processJob, { connection: redisConnect });

// Events
worker4.on("completed", (job) => {
    console.log(`Save image process ${job.id} has finished`);
});

worker4.on("failed", (job, err) => {
    console.log(`Save image process ${job.id} has failed with error: ` + err);
});

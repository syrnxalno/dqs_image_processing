import { Worker } from "bullmq";
import redisConnect from "../config/redisConfig.js";
import resizeImage from "../utils/resizeImage.js";

const jobHandler = {
    resizeImage: resizeImage,
};
const processJob = async (job) => {
    const handler = jobHandler[job.name];
    if (handler) {
        console.log(`Resize worker processing job with name : ${job.name}`);
        await handler(job);
    }
};

const worker2 = new Worker("resizeQueue", processJob, { connection: redisConnect });

worker2.on("completed",(job) =>{
    console.log(`Resize process ${job.id} has finished`);
});

worker2.on("failed",(job, err) =>{
    console.log(`Resize process ${job.id} has failed with error : `+err);
});

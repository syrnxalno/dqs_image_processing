import { Queue } from "bullmq";
import redisConnect from "../config/redisConfig.js";

const watermarkQueue = new Queue('watermarkQueue',{
    connection : redisConnect
})

async function addToWatermark(job) {
    await watermarkQueue.add(job.name, job);
}

export default addToWatermark;
import { Queue } from "bullmq";
import redisConnect from "../config/redisConfig.js";

const saveImageQueue = new Queue("saveImageQueue", {
    connection: redisConnect,
});

async function addToSaveImage(job) {
    await saveImageQueue.add(job.name, job);
}

export default addToSaveImage;

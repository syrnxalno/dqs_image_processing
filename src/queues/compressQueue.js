import { Queue } from "bullmq";
import redisConnect from '../config/redisConfig.js'

const compressQueue = new Queue('compressQueue',{
    connection : redisConnect
})

async function addtoCompress(job) {
    await compressQueue.add(job.name,job);
}

export default addtoCompress;
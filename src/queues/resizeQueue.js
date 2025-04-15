import { Queue} from "bullmq";
import redisConnect from '../config/redisConfig.js'

const resizeQueue = new Queue('resizeQueue',{
    connection : redisConnect
})

async function add(job) {
    await resizeQueue.add(job.name, job);
}

export default add;
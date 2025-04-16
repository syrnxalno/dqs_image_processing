import addToResize from '../src/queues/resizeQueue.js'
import addtoCompress from './queues/compressQueue.js';

async function run() {
    await addToResize({
        name: "resizeImage",
        data: {
            inputPath: "src/images/test.png",
            outputPath: "src/test/test(resize).png"
        }
    });
    await addtoCompress({
        name: "compressImage",
        data: {
            inputPath: "src/images/test.png",
            outputPath: "src/test/test(compress).png"
        }
    });

    console.log("Jobs added to the queue");
}

run();
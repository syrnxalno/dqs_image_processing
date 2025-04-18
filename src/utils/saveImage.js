import fs from "fs/promises";

async function saveImage(job) {
    try {
        const { inputPath = 'src/images/test.png', destinationPath = 'src/test/test(save).png' } = job.data;
        await fs.copyFile(inputPath, destinationPath);
        return { status: 'success', destinationPath };
    } catch (err) {
        console.error("Error in saveImage:", err);
        return { status: 'error', message: err.message };
    }
}

export default saveImage;

import imageRoutes from './routes/imageRoutes.js'
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
app.use('/', imageRoutes);
app.listen(PORT, () =>{
console.log(`Server running on port ${PORT}`)
})


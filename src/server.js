import imageRoutes from './routes/imageRoutes.js'
import express from 'express';
import dotenv from 'dotenv';
import sessionMiddleware from './middlewares/sessionMiddleware.js'
import passport from 'passport';
import './config/passportConfig.js'; //to load passport
import authRoutes from './routes/oauthRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Passport middleware
app.use(passport.initialize());
sessionMiddleware(app);
app.use(passport.session());

// Routes
app.use('/', imageRoutes);
app.use('/', authRoutes);


app.listen(PORT, () =>{
console.log(`Server running on port ${PORT}`)
})


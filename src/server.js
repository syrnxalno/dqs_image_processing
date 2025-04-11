import imageRoutes from './routes/imageRoutes.js'
import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session'; //for later session additions
import passport from 'passport';
import './config/passport.js'; //to load passport
import authRoutes from './routes/oauthRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', imageRoutes);
app.use('/', authRoutes);


app.listen(PORT, () =>{
console.log(`Server running on port ${PORT}`)
})


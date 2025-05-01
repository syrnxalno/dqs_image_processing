import express from 'express';
import dotenv from 'dotenv';
import sessionMiddleware from './middlewares/sessionMiddleware.js';
import passport from 'passport';
import './config/passportConfig.js';

import imageRoutes from './routes/imageRoutes.js';
import authRoutes from './routes/oauthRoutes.js';
import bullboardRoutes from './routes/bullboardRoutes.js';

import './workers/resizeWorker.js';
import './workers/compressWorker.js';
import './workers/watermarkWorker.js';
import './workers/saveimageWorker.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(passport.initialize());
sessionMiddleware(app);
app.use(passport.session());

// Routes
app.use('/', imageRoutes);
app.use('/', authRoutes);
app.use('/', bullboardRoutes); // Bull Board UI


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

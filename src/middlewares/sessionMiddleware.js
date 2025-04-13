import session from 'express-session';
import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
export default function setupSession(app) {
    app.use(session({
      secret: process.env.SESSION_SECRET || 'syrnxalno',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false } 
    }));
  }
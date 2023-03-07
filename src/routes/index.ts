/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';
import goodbyeRouter from './GoodbyeRouter';

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();

// Activate for request to http://localhost:8000/api
// GET: http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    // Send Hello World
    LogInfo('GET: http://localhost:8000/api/');
    res.send('Welcome to APP Express + TS +Swagger + Mongoose-----');
});

// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8000/api
server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> helloRouter
server.use('/goodbye', goodbyeRouter);
// Add more routes to the App


export default server;
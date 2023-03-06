import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';


// Configuration .env file
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first Route of the APP
app.get('/', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to APP Express + TS +Swagger + Mongoose-----');
});

app.get('/hello/:name', (req: Request, res: Response) => {
    // Send Hello World
    const data = {
        data: {
            message: `Hello, ${req.params.name ? req.params.name : 'anonymous'}.`
        }
    }
    res.send(data.data.message);
});

app.get('/goodbye', (req: Request, res: Response) => {
    const data: Object = {
        data: {
            message: "Goodbye, world",
        }
    }
    res.send(data);
    res.sendStatus(200).json();
});

// Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});


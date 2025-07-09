import express from 'express';
import {logger} from "./logger.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (req, res) => {
    logger.info('Received a request on /');
    res.send('Hello, World!');
});

app.get('/:value', (req, res) => {
    const value = req.params.value;
    logger.info('Received '+ value + ' from URL');
    res.send('Hello ' + value);
});

const port = process.env.SERVER_PORT || 8080
app.listen(port, async () => {
    logger.info('Starting the server...');
    await connectDB()
    logger.info('Listening on port ' + port);
    logger.info("Server started successfully");
});

async function connectDB(){
    logger.info("Connecting to MongoDB...");
    try {
        await mongoose.connect("mongodb://localhost:27017/dummy", { useNewUrlParser: true, useUnifiedTopology: true });
        logger.info("Connected to MongoDB successfully");
    } catch (error) {
        logger.error("Error connecting to MongoDB: ", error);
    }
    logger.info("Connected to MongoDB...");
    console.log("Server Started Successfully. See log file for more detailed info")
}
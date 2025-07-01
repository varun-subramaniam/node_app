import express from 'express';
import {logger} from "./logger.js";

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


app.listen(8080, async () => {
    logger.info('Listening on port ' + process.env.SERVER_PORT);
    logger.info("Server started successfully");
});
import express from "express";

const app = express();

app.listen(3333, () => {
    console.log('HTTP Server is Running!');
})

app.get('/users', (request, response) => {
    return response.send('Hello World!');
})
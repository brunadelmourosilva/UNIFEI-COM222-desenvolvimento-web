const express = require('express');

const app = express();

//app.use((request, response) => {
//    response.send({message: "Welcome to the server!"});
//    console.log("Request received!");
//});

app.get('/', (req, res) => {
    res.send({message: "You accessed the main route"});
});

app.get('*', (req, res) => {
    res.status(404).send({message: "Not found"});
});


app.get('/ps5', (req, res) => {
    res.send({message: "You accessed the PS5 route"});
});

app.get('/xbox', (req, res) => {
    res.send({message: "You accessed the XBOX route"});
});

app.listen(3000, () => {
    console.log("Server listen on 3000 port...");
});
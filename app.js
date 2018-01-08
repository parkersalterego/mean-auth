const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('./config/database');

const app = express();

// port
const port = 3000;

// cors middleware
app.use(cors());

// body parser middleware
app.use(bodyParser());

// db connection
mongoose.connect(config.database);

mongoose.connection.on('connected', (req, res, next) => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database: ' + err);
});

app.get('/', (req, res, next) => {
    res.send('Invalid endpoint');
});

app.listen(port, () => {
    console.log('Connected on port ' + port);
});
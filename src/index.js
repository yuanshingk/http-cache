'use strict';
const express = require('express');
const cors = require('cors');
const apiRouter = require('./api');
const path = require('path');

const app = express();
const port = process.env.PORT || '30001';

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { baseUrl: `http://localhost:${port}` });
});

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

const terminateHandler = (signal) => {
    console.log(signal, 'received');
    // graceful shutdown code
    process.exit(0);
};

['SIGTERM', 'SIGINT', 'SIGQUIT'].forEach((signal) => {
    process.on(signal, terminateHandler);
});

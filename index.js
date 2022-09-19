'use strict';

const server = require('./server');
require('dotenv').config();

const { db } = require('./models/index.model');

db.sync()
    .then(() => {
        server.start(process.env.PORT || 4001);
    })
    .catch((err) => console.error(err));
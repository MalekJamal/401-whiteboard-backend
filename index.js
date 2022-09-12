'use strict';

const server = require('./server');
require('dotenv').config();

const {db} = require('./models/index');

db.sync().then(()=>{
    server.start(process.env.PORT || 4001);

}).catch(console.error);
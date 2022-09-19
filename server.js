'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
// psql postgres to run the database server on the terminal
app.use(cors());
// it's a middleware to parse the body, convert the body to json object
app.use(express.json());
const postRouter = require('./routes/post.route');
const commentRouter = require('./routes/comment.route');
const userRouter = require('./routes/user.route');
app.use(postRouter.router);
app.use(commentRouter.router);
app.use(userRouter);
app.get('/', getHomePage);

function getHomePage(req, res) {

    res.status(200)
    .send(`Welcome To Malek Server, This app mainly will be a stress-relief cheerful whiteboard for 401 classes :(`);
}

const serverError = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
app.use(serverError);
app.use('*', notFound);

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Server Running on Port: ${PORT}!`);
    });
}

module.exports = { start: start, app: app };

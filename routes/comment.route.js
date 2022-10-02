'use strict';

const express = require('express');
const router = express.Router();

const { Comment } = require('../models/index.model');

router.post('/comment/:postid', addComment);
router.get('/comment', getAllComments);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);

async function addComment(req, res) {
    try {
        const postID = req.params.id;

        const newPost = req.body;
        const post = await Comment.create(newPost);
        res.status(201).json(post);
    } catch (error) {
        res.status(401).json(error.message || error);
    }
}

async function getAllComments(req, res) {
    try {
        const comments = await Comment.read();
        res.status(200).send(comments);
    } catch (error) {
        res.status(401).json(error.message || error);
    }
}

async function updateComment(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        await Comment.update(id, data);
        res.status(201).send(data)

    } catch (error) {
        res.status(401).json(error.message || error);
    }
}

async function deleteComment(req, res) {
    try {
        const id = req.params.id;
        const getComment = await Comment.read(id);

        const deleted = await Comment.delete(id);
        res.status(200).send(deleted ? getComment + ' was deleted!' : 'Error!');
    } catch (error) {
        res.status(401).json(error.message || error);
    }
}

module.exports = { router }
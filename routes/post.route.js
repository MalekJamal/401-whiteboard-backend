'use strict';

const express = require('express');
const router = express.Router();

const { Post, Comment, commentModel } = require('../models/index.model');

// app routes
router.get('/post', getAllPosts);
router.get('/post/:id', getPost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);


async function getAllPosts(req, res) {
    const postWithComment = await Post.readPostWithComment(commentModel);

    res.status(200).json(postWithComment);
}

async function getPost(req, res) {
    const id = req.params.id;
    const post = await Post.read(id);
    res.status(200).json( post );
}

async function createPost(req, res) {

    const newPost = req.body;
    const post = await Post.create(newPost);
    res.status(201).json(post);
}

async function updatePost(req, res) {
    const data = req.body;
    const id = req.params.id;

    await Post.update(id, data)
    res.status(200).json(data);
}

async function deletePost(req, res) {
    const id = req.params.id;
    const getPost = await Post.read(id)
    const deleted = await Post.delete(id)

    res.status(200).send(deleted ? getPost.body + " was deleted!" : "Error!");
}


module.exports = { router };
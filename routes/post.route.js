'use strict';

const express = require('express');
const router = express.Router();

const { Post } = require('../models/index');

// app routes
router.get('/post', getAllPosts);
router.get('/post/:id', getPost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

async function getAllPosts(req, res) {
    const post = await Post.findAll();
    res.status(200).json({ post });
}

async function getPost(req, res) {
    const id = req.params.id;
    const post = await Post.findOne({
        where: { id: id }
    });
    res.status(200).json({ post: post.post });
}

async function createPost(req, res) {

    const newPost = req.body;
    const post = await Post.create(newPost);
    res.status(201).json({ post: post.post });
}

async function updatePost(req, res) {
    const newPost = req.body;
    const id = req.params.id;

    await Post.findOne({
        where: { id: id }
    });
    await Post.update(newPost, { where: { id: id } });

    res.status(200)
        .json(newPost);
}

async function deletePost(req, res) {
    const id = req.params.id;

    const post = await Post.destroy({
        where: { id: id }
    });

    res.status(200).json({})
}

module.exports = { router };
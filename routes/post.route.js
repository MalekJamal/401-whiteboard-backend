'use strict';

const express = require('express');
const router = express.Router();
const { Post, Comment, commentModel } = require('../models/index.model');
const bearerAuth = require('../middlewares/bearerAuth');
const { userCapabilities, adminCapabilities, capabilities } = require('../middlewares/acl');
// app routes
router.get('/post', bearerAuth, userCapabilities, getAllPosts);
router.get('/post/:id', bearerAuth, userCapabilities, getPost);
router.post('/post', bearerAuth, userCapabilities, createPost);
router.put('/post/:id', bearerAuth, capabilities, updatePost);
router.delete('/post/:id', bearerAuth, capabilities, deletePost);


async function getAllPosts(req, res) {
    try {
        const postWithComment = await Post.readPostWithComment(commentModel);
        res.status(200).json(postWithComment);
    } catch (error) {
        res.status(401).send(error.message || error);
    }

}

async function getPost(req, res) {
    try {
        const id = req.params.id;
        const post = await Post.read(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(401).json(error.message || error);
    }
}

async function createPost(req, res) {
    try {
        const newPost = req.body;
        const post = await Post.create(newPost);
        res.status(201).json(post);
    } catch (error) {
        res.status(401).json(error.message || error);
    }
}

async function updatePost(req, res) {
    try {
        const data = req.body;
        const id = req.params.id;

        await Post.update(id, data)
        res.status(200).json(data);
    } catch (error) {
        res.status(401).json(error.message || error);
    }
}

async function deletePost(req, res) {
    try {
        const id = req.params.id;
        const getPost = await Post.read(id);
        const deleted = await Post.delete(id);

        res.status(200).send(deleted ? getPost.body + " was deleted!" : "Error!");
    } catch (error) {
        res.status(401).json(error.message || error);
    }
}


module.exports = { router };
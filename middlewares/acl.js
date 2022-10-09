'use strict';
const PostModel = require('../models/index.model').PostModel
const userCapabilities = (req, res, next) => {
    try {
        if (!req.user.capabilities.includes('create')) {
            return res.status(200).json('You Don\'t Have Permession..!');
        }
        next();
    } catch (error) {
        return res.status(200).json(error.message || error);
    }
}

const adminCapabilities = (req, res, next) => {
    try {
        if (!req.user.role.includes('admin')) {
            return res.status(200).json('You Don\'t Have Permession..!');
        }
        next();
    } catch (error) {
        return res.status(200).json(error.message || error);
    }
}
const capabilities = async (req, res, next) => {

    try {
        const postId = req.params.id;
        const userId = req.user.id;
        const role = req.user.role;
        const post = await PostModel.findOne({ where: { id: postId } })
        if (!(role === 'admin' || post.userID === userId)) {
            return res.status(401).json('You Don\'t Have Permession..!');
        }
        next();

    } catch (error) {
        return res.status(401).json(error.message || error);
    }
}

module.exports = {
    userCapabilities,
    adminCapabilities,
    capabilities
};
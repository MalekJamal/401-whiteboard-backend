'use strict';

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

module.exports = {
    userCapabilities,
    adminCapabilities
};
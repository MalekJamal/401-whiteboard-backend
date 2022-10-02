'use strict';

const { User } = require('../models/index.model');

module.exports = async (req, res, next) => {

    try {
        if (!req.headers.authorization) {
            return next('You\'re not authorized..!!');
        }
        const token = req.headers.authorization.split(' ')[1];
        const validUser = User.authenticateToken(token);
        const userInfo = await User.findOne({
            where: { userName: validUser.userName }
        });
        
        if (userInfo) {
            req.user = userInfo;
            req.token = userInfo.token;
            return next();
        } else {
            return next('You\'re not authorized..!!');
        }
    } catch (error) {
        return next(error.message || error);
    }
};
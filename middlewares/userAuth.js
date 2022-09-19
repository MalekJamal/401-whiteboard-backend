'use strict';

const { User } = require('../models/index.model');

const checkUser = async (req, res, next) => {

    try {

        const userName = await User.findOne({
            where: { userName: req.body.userName }
        });

        if (userName) {
            return res.status(409).send("User Name Already exist!");
        }

        const email = await User.findOne({
            where: { email: req.body.email }
        });

        if (email) {
            return res.status(409).send("Email Already exist!");
        }

        next();
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    checkUser
};
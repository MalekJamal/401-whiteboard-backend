'use strict';

const { User } = require('../models/index.model');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const signUp = async (req, res) => {

    try {
        const { userName, email, password } = req.body;

        const data = {
            userName,
            email,
            password: await bcrypt.hash(password, 10)
        }
        console.log(data)
        const user = await User.create(data);
        if (user) {
            res.status(201).json(user);
        }
    } catch (error) {
        console.error(error);
    }
}

const signIn = async (req, res) => {

    try {
        const basicHeader = (req.headers.authorization).split(' ');
        const encodedValue = basicHeader.pop();

        const decodedValue = base64.decode(encodedValue);
        const [email, password] = decodedValue.split(":");

        // check user credentials
        const user = await User.findOne({
            where: { email: email }
        });

        if (user) {
            const isSame = await bcrypt.compare(password, user.password);
            if (isSame) {
                return res.status(200).json(user)
            } else {
                return res.status(401).send("You're Not Authorized!");
            }
        } else {
            return res.status(401).send("You're Not Authorized!");
        }
    } catch (error) {
        console.error(error)
    }

}

module.exports = {
    signUp,
    signIn
}
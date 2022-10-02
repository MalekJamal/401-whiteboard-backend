'use strict';
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        token: {
            type: DataTypes.VIRTUAL,
            get: function () {
                return jwt.sign({
                    userName: this.userName
                }, process.env.SECRET_JWT)
            },
            set(tokenObj) {
                return jwt.sign(tokenObj, process.env.SECRET_JWT);
            }
        }
    });

    User.authenticateToken = (token) => {
        return jwt.verify(token, process.env.SECRET_JWT, (err, decode) => {
            if (err) {
                return err;
            } else {
                return decode;
            }
        });
    }
    return User;
};
'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const post = require('./post.model');
const POSTGRES_URL = process.env.LOCAL_DATABASE_URL || "postgresql://malek:12345678@127.0.0.1:5432/postgres" ;

let sequelize = new Sequelize(POSTGRES_URL);

module.exports={
    db: sequelize,
    Post: post(sequelize, DataTypes)
};
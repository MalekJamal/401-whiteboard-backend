'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const post = require('./post.model');
const comment = require('./comment.model');
require('dotenv').config();

const Collection = require('../collections/user-comment-routes');

const POSTGRES_URL = process.env.LOCAL_DATABASE_URL || process.env.DATABASE_URL ;

const sequelizeOption = {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

const Post = post(sequelize, DataTypes);
const Comment = comment(sequelize, DataTypes);

// Relations
Post.hasMany(Comment, {foreignKey: 'postID', sourceKey: 'id'});
Comment.belongsTo(Post, {foreignKey: 'postID', targetKey: 'id'});

// collections
const postCollection = new Collection(Post);
const commentCollection = new Collection(Comment);

module.exports={
    db: sequelize,
    Post: postCollection,
    Comment: commentCollection,
    commentModel: Comment
};
'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const post = require('./post.model');
const comment = require('./comment.model');
const user = require('./user.model');
require('dotenv').config();

const Collection = require('../collections/user-comment-routes');

const POSTGRES_URL = process.env.LOCAL_DATABASE_URL || process.env.DATABASE_URL;

const sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

sequelize.authenticate()
  .then(() => { console.log("it's authenticated to connect to the DB!") })
  .catch((err) => console.error(err));


const Post = post(sequelize, DataTypes);
const Comment = comment(sequelize, DataTypes);
const User = user(sequelize, DataTypes);


// Relations
Post.hasMany(Comment, { foreignKey: 'postID', sourceKey: 'id' });
Comment.belongsTo(Post, { foreignKey: 'postID', targetKey: 'id' });

User.hasMany(Post, {foreignKey: 'userID', sourceKey: 'id'});
Post.belongsTo(User, {foreignKey: 'userID', sourceKey: 'id'});
// collections
const postCollection = new Collection(Post);
const commentCollection = new Collection(Comment);
const userCollection = new Collection(User);


module.exports = {
  db: sequelize,
  Post: postCollection,
  Comment: commentCollection,
  commentModel: Comment,
  User: User,
  PostModel: Post

};
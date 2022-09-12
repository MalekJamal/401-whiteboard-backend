'use strict';

const Post = (sequelize, DataTypes)=> sequelize.define('Post',{
    post:{
        type: DataTypes.STRING,
        defaultValue: "Post",
        allowNull: false
    }
});

module.exports = Post;
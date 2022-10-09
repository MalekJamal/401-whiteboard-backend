'use strict';

const { Sequelize } = require("sequelize");

const Post = (sequelize, DataTypes)=> sequelize.define('Post',{
    title:{
        type: DataTypes.STRING,
        defaultValue: "title",
        allowNull: false
    },
    body:{
        type: DataTypes.STRING(1024),
        defaultValue: "Post",
        allowNull: false
    },
    postType:{
        type: Sequelize.ENUM("Funny","Fact","Programming","General"),
        defaultValue: "General",
        allowNull: false
    },
    imgUrl:{
        type: DataTypes.STRING,
        defaultValue: "https://images.pexels.com/photos/5721904/pexels-photo-5721904.jpeg",
        allowNull: false
    },
    createdBy:{
        type: DataTypes.STRING,
        defaultValue: "Malek Hasan",
        allowNull: false
    },
    userEmail:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userID:{
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Post;
'use strict';

const Comment = (sequelize, DataTypes)=> sequelize.define("Comment",{

    comment:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Hello There👋🏻, nice one!!"
    },
    postID:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Comment;
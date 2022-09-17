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
    },
    createdBy:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Comment;
'use strict';

module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("User",{
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
        password:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}
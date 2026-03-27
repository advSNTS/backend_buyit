import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pfpURL:{
            type: DataTypes.STRING,
            allowNull: true
        },
        biography:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "no bio"
        },
        created:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        followersCount: {
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue: 0
       }
    },
    {
        timestamps: false
    }
);
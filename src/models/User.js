import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const User = sequelize.define(
    "Users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
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
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Product = sequelize.define(
    "products",
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        brand:{
            type: DataTypes.STRING,
            allowNull: false
        },
        imageURL:{
            type: DataTypes.STRING,
            allowNull: true
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        },
        percentageLike:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        range:{
            type: DataTypes.STRING,
            allowNull: true
        },
        created:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        timestamps: false
    }
)
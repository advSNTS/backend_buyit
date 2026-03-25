import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Product = sequelize.define(
    "products",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        created:{
            type:DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.NOW
        }

    }
)
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
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        marca:{
            type: DataTypes.STRING,
            allowNull: false
        },
        imagenURL:{
            type: DataTypes.STRING,
            allowNull: true
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        }

    }
)
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Review = sequelize.define(
    "Reviews",
    {
       id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
       },
       userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
       },
       like: {
            type:DataTypes.BOOLEAN,
            allowNull: false
       },
       comment: {
            type:DataTypes.STRING,
            allowNull: true
       },
       followersCount: {
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue: 0
       }
    },
    {
        timestamps: true
    }

)
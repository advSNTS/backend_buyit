import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("buyit_bd", "postgress", "sa", {
    port: 5432,
    host: "localhost",
    dialect: "postgress",
});
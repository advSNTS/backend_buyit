import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("buyit_db", "buy_it", "sa", { 
    port: 5432,
    host: "localhost",
    dialect: "postgres",
});
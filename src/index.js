import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialUsers } from "./database/initUsers.js";
import "./models/User.js";

const port = 3000;


async function init(){
    try{
        await sequelize.authenticate()
        .then(() => {
            console.log("La conexión ha sido exitosa!!");
        })
        .catch((err) => {
            console.error("Paila (BD)", err);
        });

        await sequelize.sync({ force: true });

        await loadInitialUsers();

        app.listen(port, ()=>{
            console.log(`Aplicación escuchando en el puerto ${3000}`)
        })
    }catch(err){
        console.error("Paila", err);
    }
    
}

init();
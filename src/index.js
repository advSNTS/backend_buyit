import app from "./app.js";
import { sequelize } from "./database/database.js";

const port = 3000;

function init(){
    sequelize.authenticate()
    .then(() => {
        console.log("La conexión ha sido exitosa!!");
    })
    .catch((err) => {
        console.error("Paila (BD)", err);
    });

    app.listen(port, ()=>{
        console.log(`Aplicación escuchando en el puerto ${3000}`)
    })
}

init();
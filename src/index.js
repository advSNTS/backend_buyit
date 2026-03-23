import app from "./app.js";
import { sequelize } from "./database/database.js";

const port = 3000;

function init(){
    app.listen(port, ()=>{
        console.log(`Aplicación escuchando en el puerto ${3000}`)
    })
}

init();
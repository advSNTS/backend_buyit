import app from "./app.js";
import { sequelize } from "./database/database.js";
import { loadInitialUsers } from "./database/initUsers.js";
import { loadInitialReviews } from "./database/initReviews.js";
import { setupRelations } from "./models/relations.js";
import { loadInitialProducts } from "./database/initProducts.js";
import "./models/User.js";
import "./models/Review.js";


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

        setupRelations();

        await loadInitialUsers();
        await loadInitialProducts();
        await loadInitialReviews();

        app.listen(port, ()=>{
            console.log(`Aplicación escuchando en el puerto ${3000}`)
        })
    }catch(err){
        console.error("Paila", err);
    }
    
}

init();
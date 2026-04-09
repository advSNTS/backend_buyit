import { Product } from "../models/Product.js";

const initProducts = [
    // Tecnología
    { id: 1,  name: "iPhone 13 128GB",        brand: "Apple",     percentageLike: 92, range: "$2.800.000 - $3.200.000", description: "Usado 6 meses, sin rayones, con cargador original." },
    { id: 2,  name: "MacBook Air M1",          brand: "Apple",     percentageLike: 96, range: "$4.500.000 - $5.500.000", description: "En perfecto estado, batería al 91%." },
    { id: 3,  name: "Galaxy S22",              brand: "Samsung",   percentageLike: 85, range: "$2.200.000 - $2.800.000" },
    { id: 4,  name: "iPad 9na generación",     brand: "Apple",     percentageLike: 88, range: "$1.500.000 - $1.900.000", description: "Con funda y teclado bluetooth incluidos." },
    { id: 5,  name: "Monitor 24\" Full HD",    brand: "LG",        percentageLike: 80, range: "$600.000 - $900.000" },
    { id: 6,  name: "Teclado mecánico TKL",    brand: "Redragon",  percentageLike: 78, range: "$150.000 - $250.000", description: "Switches rojos, retroiluminación RGB, poco uso." },
    { id: 7,  name: "Mouse inalámbrico",       brand: "Logitech",  percentageLike: 82, range: "$120.000 - $200.000" },
    { id: 8,  name: "Auriculares WH-1000XM4",  brand: "Sony",      percentageLike: 95, range: "$900.000 - $1.200.000", description: "Cancelación de ruido activa, sonido premium." },
    { id: 9,  name: "Webcam 1080p",            brand: "Logitech",  percentageLike: 74, range: "$180.000 - $280.000" },
    { id: 10, name: "Disco SSD 1TB",           brand: "Kingston",  percentageLike: 90, range: "$250.000 - $380.000", description: "Nunca usado, sellado de fábrica." },

    // Consolas y videojuegos
    { id: 11, name: "PlayStation 4 Slim 1TB",  brand: "Sony",      percentageLike: 91, range: "$1.100.000 - $1.500.000", description: "Con dos controles y 5 juegos incluidos." },
    { id: 12, name: "Nintendo Switch OLED",    brand: "Nintendo",  percentageLike: 94, range: "$1.400.000 - $1.800.000" },
    { id: 13, name: "Xbox Series S",           brand: "Microsoft", percentageLike: 87, range: "$1.200.000 - $1.600.000", description: "Como nuevo, caja original incluida." },
    { id: 14, name: "Game Boy Advance SP",     brand: "Nintendo",  percentageLike: 89, range: "$300.000 - $500.000", description: "Consola retro en excelente estado, pantalla sin rayaduras." },
    { id: 15, name: "Control DualSense",       brand: "Sony",      percentageLike: 86, range: "$280.000 - $380.000" },

    // Ropa y accesorios
    { id: 16, name: "Zapatillas Air Max 90",   brand: "Nike",      percentageLike: 83, range: "$350.000 - $550.000", description: "Talla 42, usadas dos veces." },
    { id: 17, name: "Chaqueta de cuero",       brand: "Zara",      percentageLike: 70, range: "$200.000 - $350.000" },
    { id: 18, name: "Reloj Casio Vintage",     brand: "Casio",     percentageLike: 88, range: "$120.000 - $180.000", description: "Serie A168, pila nueva, correa original." },
    { id: 19, name: "Mochila urbana 20L",      brand: "Samsonite", percentageLike: 76, range: "$180.000 - $280.000" },
    { id: 20, name: "Gafas de sol",            brand: "Ray-Ban",   percentageLike: 85, range: "$400.000 - $650.000", description: "Modelo Wayfarer, con estuche y paño originales." },

    // Hogar
    { id: 21, name: "Silla gamer reclinable",        brand: "DXRacer", percentageLike: 79, range: "$600.000 - $900.000", description: "Con reposabrazos ajustables, ligero desgaste en apoyacabeza." },
    { id: 22, name: "Lámpara de escritorio LED",     brand: "Xiaomi",  percentageLike: 81, range: "$60.000 - $120.000" },
    { id: 23, name: "Cafetera espresso",             brand: "Oster",   percentageLike: 77, range: "$250.000 - $400.000", description: "Usada 1 año, limpia y funcionando perfectamente." },
    { id: 24, name: "Parlante Bluetooth",            brand: "JBL",     percentageLike: 90, range: "$300.000 - $500.000" },
    { id: 25, name: "Figura Funko Pop Darth Vader",  brand: "Funko",   percentageLike: 93, range: "$80.000 - $150.000", description: "En caja, sin abrir, edición especial." },
];

export async function loadInitialProducts() {
    try{
        const count = await Product.count();
        if(count === 0){
            await Product.bulkCreate(initProducts)
            console.log("Initial products creado");
        }else{
            console.log("Initial products already loaded");
        }
    }catch(error){
        console.error("Paila en cargar products", error);
    }
};
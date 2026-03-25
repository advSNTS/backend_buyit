import { Product } from "../models/Product.js";

const initProducts = [
    // Tecnología
    { id: 1,  name: "iPhone 13 128GB", brand: "Apple", description: "Usado 6 meses, sin rayones, con cargador original." },
    { id: 2,  name: "MacBook Air M1", brand: "Apple", description: "En perfecto estado, batería al 91%." },
    { id: 3,  name: "Galaxy S22", brand: "Samsung" },
    { id: 4,  name: "iPad 9na generación", brand: "Apple", description: "Con funda y teclado bluetooth incluidos." },
    { id: 5,  name: "Monitor 24\" Full HD", brand: "LG" },
    { id: 6,  name: "Teclado mecánico TKL", brand: "Redragon", description: "Switches rojos, retroiluminación RGB, poco uso." },
    { id: 7,  name: "Mouse inalámbrico", brand: "Logitech" },
    { id: 8,  name: "Auriculares WH-1000XM4", brand: "Sony", description: "Cancelación de ruido activa, sonido premium." },
    { id: 9,  name: "Webcam 1080p", brand: "Logitech" },
    { id: 10, name: "Disco SSD 1TB", brand: "Kingston", description: "Nunca usado, sellado de fábrica." },

    // Consolas y videojuegos
    { id: 11, name: "PlayStation 4 Slim 1TB", brand: "Sony", description: "Con dos controles y 5 juegos incluidos." },
    { id: 12, name: "Nintendo Switch OLED", brand: "Nintendo" },
    { id: 13, name: "Xbox Series S", brand: "Microsoft", description: "Como nuevo, caja original incluida." },
    { id: 14, name: "Game Boy Advance SP", brand: "Nintendo", description: "Consola retro en excelente estado, pantalla sin rayaduras." },
    { id: 15, name: "Control DualSense", brand: "Sony" },

    // Ropa y accesorios
    { id: 16, name: "Zapatillas Air Max 90", brand: "Nike", description: "Talla 42, usadas dos veces." },
    { id: 17, name: "Chaqueta de cuero", brand: "Zara" },
    { id: 18, name: "Reloj Casio Vintage", brand: "Casio", description: "Serie A168, pila nueva, correa original." },
    { id: 19, name: "Mochila urbana 20L", brand: "Samsonite" },
    { id: 20, name: "Gafas de sol", brand: "Ray-Ban", description: "Modelo Wayfarer, con estuche y paño originales." },

    // Hogar
    { id: 21, name: "Silla gamer reclinable", brand: "DXRacer", description: "Con reposabrazos ajustables, ligero desgaste en apoyacabeza." },
    { id: 22, name: "Lámpara de escritorio LED", brand: "Xiaomi" },
    { id: 23, name: "Cafetera espresso", brand: "Oster", description: "Usada 1 año, limpia y funcionando perfectamente." },
    { id: 24, name: "Parlante Bluetooth", brand: "JBL" },
    { id: 25, name: "Figura Funko Pop Darth Vader", brand: "Funko", description: "En caja, sin abrir, edición especial." },
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
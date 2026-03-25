import { Product } from "../models/Product.js";

const initProducts = [
    // Tecnología
    { name: "iPhone 13 128GB", brand: "Apple", description: "Usado 6 meses, sin rayones, con cargador original." },
    { name: "MacBook Air M1", brand: "Apple", description: "En perfecto estado, batería al 91%." },
    { name: "Galaxy S22", brand: "Samsung" },
    { name: "iPad 9na generación", brand: "Apple", description: "Con funda y teclado bluetooth incluidos." },
    { name: "Monitor 24\" Full HD", brand: "LG" },
    { name: "Teclado mecánico TKL", brand: "Redragon", description: "Switches rojos, retroiluminación RGB, poco uso." },
    { name: "Mouse inalámbrico", brand: "Logitech" },
    { name: "Auriculares WH-1000XM4", brand: "Sony", description: "Cancelación de ruido activa, sonido premium." },
    { name: "Webcam 1080p", brand: "Logitech" },
    { name: "Disco SSD 1TB", brand: "Kingston", description: "Nunca usado, sellado de fábrica." },

    // Consolas y videojuegos
    { name: "PlayStation 4 Slim 1TB", brand: "Sony", description: "Con dos controles y 5 juegos incluidos." },
    { name: "Nintendo Switch OLED", brand: "Nintendo" },
    { name: "Xbox Series S", brand: "Microsoft", description: "Como nuevo, caja original incluida." },
    { name: "Game Boy Advance SP", brand: "Nintendo", description: "Consola retro en excelente estado, pantalla sin rayaduras." },
    { name: "Control DualSense", brand: "Sony" },

    // Ropa y accesorios
    { name: "Zapatillas Air Max 90", brand: "Nike", description: "Talla 42, usadas dos veces." },
    { name: "Chaqueta de cuero", brand: "Zara" },
    { name: "Reloj Casio Vintage", brand: "Casio", description: "Serie A168, pila nueva, correa original." },
    { name: "Mochila urbana 20L", brand: "Samsonite" },
    { name: "Gafas de sol", brand: "Ray-Ban", description: "Modelo Wayfarer, con estuche y paño originales." },

    // Hogar
    { name: "Silla gamer reclinable", brand: "DXRacer", description: "Con reposabrazos ajustables, ligero desgaste en apoyacabeza." },
    { name: "Lámpara de escritorio LED", brand: "Xiaomi" },
    { name: "Cafetera espresso", brand: "Oster", description: "Usada 1 año, limpia y funcionando perfectamente." },
    { name: "Parlante Bluetooth", brand: "JBL" },
    { name: "Figura Funko Pop Darth Vader", brand: "Funko", description: "En caja, sin abrir, edición especial." },
];

export async function loadInitialReviews() {
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
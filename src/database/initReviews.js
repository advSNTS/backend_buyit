import { Review } from "../models/Review.js";
import { User } from "../models/User.js";

const initReviews = [
    // Reviews para jdoe_92 (id: 1)
    { like: true,  comment: "Excelente vendedor, envío rapidísimo.", followersCount: 3, userId: 1 },
    { like: true,  comment: "Todo llegó en perfecto estado.", followersCount: 1, userId: 1 },

    // Reviews para carla_shop (id: 2)
    { like: false, comment: "El producto no era como se describía.", followersCount: 0, userId: 2 },
    { like: true,  comment: "Muy buena atención al cliente.", followersCount: 2, userId: 2 },

    // Reviews para mike_retro (id: 3)
    { like: true,  comment: "Consola en perfecto estado, muy honesto.", followersCount: 5, userId: 3 },
    { like: true,  comment: null, followersCount: 0, userId: 3 },

    // Reviews para ana_luz (id: 4)
    { like: true,  comment: "Súper recomendada, trato amable.", followersCount: 1, userId: 4 },

    // Reviews para gamer_pro (id: 5)
    { like: false, comment: "Tardó más de lo prometido en enviar.", followersCount: 0, userId: 5 },
    { like: true,  comment: "Al final todo bien, buen precio.", followersCount: 2, userId: 5 },

    // Reviews para sofia_trades (id: 6)
    { like: true,  comment: "Vendedora de confianza, ya es la tercera compra.", followersCount: 7, userId: 6 },
    { like: true,  comment: null, followersCount: 0, userId: 6 },
    { like: true,  comment: "Siempre cumple con lo pactado.", followersCount: 4, userId: 6 },

    // Reviews para el_turco_77 (id: 7)
    { like: false, comment: "No respondió los mensajes por días.", followersCount: 0, userId: 7 },

    // Reviews para lucy_finds (id: 8)
    { like: true,  comment: "Ropa vintage impecable, muy buena calidad.", followersCount: 6, userId: 8 },
    { like: true,  comment: "Los libros llegaron bien embalados.", followersCount: 3, userId: 8 },

    // Reviews para pablo_dev (id: 9)
    { like: true,  comment: null, followersCount: 0, userId: 9 },

    // Reviews para mariana_k (id: 10)
    { like: true,  comment: "Funkos en estado de colección, perfectos.", followersCount: 8, userId: 10 },
    { like: false, comment: "Una figura tenía una pequeña rajadura.", followersCount: 1, userId: 10 },

    // Reviews para tomas_flip (id: 11)
    { like: true,  comment: "Muy buen precio y comunicación fluida.", followersCount: 2, userId: 11 },

    // Reviews para nati_busca (id: 12)
    { like: true,  comment: "Compradora seria, pagó al instante.", followersCount: 0, userId: 12 },
    { like: true,  comment: null, followersCount: 1, userId: 12 },

    // Reviews para checho_gamer (id: 13)
    { like: false, comment: "El joystick no funcionaba bien al recibirlo.", followersCount: 0, userId: 13 },
    { like: true,  comment: "Resolvió el problema rápido, lo recomiendo.", followersCount: 3, userId: 13 },

    // Reviews para vale_creativa (id: 14)
    { like: true,  comment: "Las manualidades son hermosas, muy detalladas.", followersCount: 9, userId: 14 },
    { like: true,  comment: "Packaging cuidadísimo, se nota el amor por lo que hace.", followersCount: 5, userId: 14 },

    // Reviews para el_ingeniero (id: 15)
    { like: true,  comment: "Todo el equipo funcionando al 100%.", followersCount: 2, userId: 15 },
];

export async function loadInitialReviews() {
    try{
        const count = await Review.count();
        if(count === 0){
            await Review.bulkCreate(initReviews)
            console.log("Initial reviews creado");
        }else{
            console.log("Initial reviews already loaded");
        }
    }catch(error){
        console.error("Paila en cargar reviews", error);
    }
}
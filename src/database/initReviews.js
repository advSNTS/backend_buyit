import { Review } from "../models/Review.js";

const initReviews = [
    // Reviews para jdoe_92 (id: 1)
    { like: true,  comment: "Excelente vendedor, envío rapidísimo.", userId: 1, productId: 1  },
    { like: true,  comment: "Todo llegó en perfecto estado.",         userId: 1, productId: 2  },

    // Reviews para carla_shop (id: 2)
    { like: false, comment: "El producto no era como se describía.",  userId: 2, productId: 17 },
    { like: true,  comment: "Muy buena atención al cliente.",         userId: 2, productId: 20 },

    // Reviews para mike_retro (id: 3)
    { like: true,  comment: "Consola en perfecto estado, muy honesto.", userId: 3, productId: 14 },
    { like: true,  comment: null,                                       userId: 3, productId: 11 },

    // Reviews para ana_luz (id: 4)
    { like: true,  comment: "Súper recomendada, trato amable.",       userId: 4, productId: 19 },

    // Reviews para gamer_pro (id: 5)
    { like: false, comment: "Tardó más de lo prometido en enviar.",   userId: 5, productId: 21 },
    { like: true,  comment: "Al final todo bien, buen precio.",       userId: 5, productId: 6  },

    // Reviews para sofia_trades (id: 6)
    { like: true,  comment: "Vendedora de confianza, ya es la tercera compra.", userId: 6, productId: 3  },
    { like: true,  comment: null,                                               userId: 6, productId: 7  },
    { like: true,  comment: "Siempre cumple con lo pactado.",                   userId: 6, productId: 9  },

    // Reviews para el_turco_77 (id: 7)
    { like: false, comment: "No respondió los mensajes por días.",    userId: 7, productId: 5  },

    // Reviews para lucy_finds (id: 8)
    { like: true,  comment: "Ropa vintage impecable, muy buena calidad.", userId: 8, productId: 16 },
    { like: true,  comment: "Los libros llegaron bien embalados.",        userId: 8, productId: 18 },

    // Reviews para pablo_dev (id: 9)
    { like: true,  comment: null,                                     userId: 9, productId: 10 },

    // Reviews para mariana_k (id: 10)
    { like: true,  comment: "Funkos en estado de colección, perfectos.", userId: 10, productId: 25 },
    { like: false, comment: "Una figura tenía una pequeña rajadura.",    userId: 10, productId: 25 },

    // Reviews para tomas_flip (id: 11)
    { like: true,  comment: "Muy buen precio y comunicación fluida.", userId: 11, productId: 13 },

    // Reviews para nati_busca (id: 12)
    { like: true,  comment: "Compradora seria, pagó al instante.",    userId: 12, productId: 23 },
    { like: true,  comment: null,                                     userId: 12, productId: 22 },

    // Reviews para checho_gamer (id: 13)
    { like: false, comment: "El joystick no funcionaba bien al recibirlo.",  userId: 13, productId: 15 },
    { like: true,  comment: "Resolvió el problema rápido, lo recomiendo.",   userId: 13, productId: 15 },

    // Reviews para vale_creativa (id: 14)
    { like: true,  comment: "Las manualidades son hermosas, muy detalladas.",          userId: 14, productId: 22 },
    { like: true,  comment: "Packaging cuidadísimo, se nota el amor por lo que hace.", userId: 14, productId: 24 },

    // Reviews para el_ingeniero (id: 15)
    { like: true,  comment: "Todo el equipo funcionando al 100%.",    userId: 15, productId: 8  },
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
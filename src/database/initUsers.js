import { User } from "../models/User.js";

const initUsers = [
    {
        id: 1,
        username: "jdoe_92",
        name: "John Doe",
        pfpURL: null,
        biography: "Amante de la tecnología y las buenas ofertas.",
        email: "john.doe@example.com",
        password: "hashed_password_123"
    },
    {
        id: 2,
        username: "carla_shop",
        name: "Carla Benítez",
        pfpURL: null,
        email: "carla.b@mail.com",
        password: "secure_pass_456"
    },
    {
        id: 3,
        username: "mike_retro",
        name: "Miguel Ángel",
        pfpURL: null,
        biography: "Buscando consolas antiguas.",
        email: "mike.retro@service.com",
        password: "password_secret_789"
    },
    {
        id: 4,
        username: "ana_luz",
        name: "Ana Lucía",
        pfpURL: null,
        email: "ana.lucia@webmail.com",
        password: "ana_password_321"
    },
    {
        id: 5,
        username: "gamer_pro",
        name: "Roberto Gómez",
        pfpURL: null,
        biography: "Armando mi primer setup gamer.",
        email: "roberto.g@gaming.com",
        password: "setup_gamer_2024"
    },
    {
        id: 6,
        username: "sofia_trades",
        name: "Sofía Martínez",
        pfpURL: null,
        biography: "Comprando y vendiendo desde 2018.",
        email: "sofia.martinez@gmail.com",
        password: "sofia_secure_101"
    },
    {
        id: 7,
        username: "el_turco_77",
        name: "Ramón Haddad",
        pfpURL: null,
        email: "ramon.haddad@hotmail.com",
        password: "turco_pass_202"
    },
    {
        id: 8,
        username: "lucy_finds",
        name: "Luciana Ferreira",
        pfpURL: null,
        biography: "Fan de la moda vintage y los libros de segunda mano.",
        email: "luciana.ferreira@outlook.com",
        password: "lucy_vintage_303"
    },
    {
        id: 9,
        username: "pablo_dev",
        name: "Pablo Suárez",
        pfpURL: null,
        email: "pablo.suarez@devmail.com",
        password: "pablo_dev_404"
    },
    {
        id: 10,
        username: "mariana_k",
        name: "Mariana Kovač",
        pfpURL: null,
        biography: "Coleccionista de figuras y funkos.",
        email: "mariana.k@mailbox.com",
        password: "mariana_pass_505"
    },
    {
        id: 11,
        username: "tomas_flip",
        name: "Tomás Vidal",
        pfpURL: null,
        email: "tomas.vidal@correo.com",
        password: "tomas_flip_606"
    },
    {
        id: 12,
        username: "nati_busca",
        name: "Natalia Ríos",
        pfpURL: null,
        biography: "Siempre buscando una ganga",
        email: "nati.rios@webmail.com",
        password: "nati_rios_707"
    },
    {
        id: 13,
        username: "checho_gamer",
        name: "Sergio Pedraza",
        pfpURL: null,
        email: "sergio.pedraza@gamezone.com",
        password: "checho_g_808"
    },
    {
        id: 14,
        username: "vale_creativa",
        name: "Valentina Cruz",
        pfpURL: null,
        biography: "Vendo manualidades y busco materiales de arte.",
        email: "vale.cruz@artmail.com",
        password: "vale_creative_909"
    },
    {
        id: 15,
        username: "el_ingeniero",
        name: "Andrés Molina",
        pfpURL: null,
        email: "andres.molina@techmail.com",
        password: "andres_ing_010"
    }
];

export async function loadInitialUsers() {
    const count = await User.count();
    if(count === 0){
        await User.bulkCreate(initUsers);
        console.log("Datos creados");
    }
}
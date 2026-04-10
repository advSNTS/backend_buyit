import { Product } from "../models/Product.js";

const initProducts = [
    // Abarrotes y despensa
    { id: 1,  name: "Arroz blanco 1 kg",               brand: "Diana",       imageURL: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/186299/7702511000021.jpg?v=637813981775570000", percentageLike: 92, range: "$4.500 - $7.500", description: "Presentación estándar para el mercado familiar." },
    { id: 2,  name: "Aceite vegetal 1L",               brand: "Premier",     imageURL: "https://exitocol.vtexassets.com/arquivos/ids/29609992/Aceite-Vegetal-FRESCAMPO-900-ml-3257072_a.jpg?v=638906039924370000", percentageLike: 89, range: "$10.000 - $16.000", description: "Ideal para cocinar en el día a día." },
    { id: 3,  name: "Pasta espagueti 500 g",           brand: "Doria",       imageURL: "https://olimpica.vtexassets.com/arquivos/ids/991178/7702020113014.jpg?v=638062189313430000", percentageLike: 87, range: "$3.000 - $6.000", description: "Pasta larga ideal para almuerzos familiares y preparaciones rápidas." },
    { id: 4,  name: "Fríjol cargamanto 500 g",         brand: "La Especial", imageURL: "https://olimpica.vtexassets.com/arquivos/ids/2354799/7701008008236.jpg?v=639071316830630000", percentageLike: 84, range: "$7.000 - $12.000", description: "Grano seco para comidas tradicionales." },
    { id: 5,  name: "Lenteja 500 g",                   brand: "Diana",       imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k6V1Ii3Q9m1HAnfonJDUGdQ-psocfoULQA&s", percentageLike: 83, range: "$5.000 - $9.000", description: "Fuente de proteína vegetal para sopas, guisos y ensaladas." },

    // Lácteos y refrigerados
    { id: 6,  name: "Leche entera 1L",                 brand: "Alpina",      imageURL: "https://supermercadolaestacion.com/58206-large_default/leche-liquida-entera-alqueria-x-1-litro.jpg", percentageLike: 91, range: "$4.000 - $6.500", description: "Producto básico de refrigerador." },
    { id: 7,  name: "Yogurt bebible 200 ml",           brand: "Alpina",      imageURL: "https://superxtrapanama.vtexassets.com/arquivos/ids/159019/88209161357.png?v=637806398531830000", percentageLike: 88, range: "$2.500 - $4.500", description: "Bebida láctea práctica para onces, lonchera o snack." },
    { id: 8,  name: "Queso campesino 250 g",           brand: "Colanta",     imageURL: "https://lacteoslevelma.com/wp-content/uploads/2023/06/Campesino-500-100.jpg", percentageLike: 86, range: "$10.000 - $18.000", description: "Para desayuno, arepas y sándwiches." },
    { id: 9,  name: "Huevos AA x 30",                  brand: "Ovoplus",     imageURL: "https://huevosal100.com.co/wp-content/uploads/2024/05/Sin-titulo-43.png", percentageLike: 90, range: "$18.000 - $28.000", description: "Cubeta de huevos frescos, esencial para desayuno y repostería." },
    { id: 10, name: "Mantequilla 250 g",               brand: "Alpina",      imageURL: "https://eurosuper.vtexassets.com/arquivos/ids/156530/7702129030250.jpg?v=638236633516300000", percentageLike: 85, range: "$9.000 - $15.000", description: "Para pan y recetas caseras." },

    // Snacks y desayuno
    { id: 11, name: "Galletas de chocolate 8 und",     brand: "Noel",        imageURL: "https://superlukita.com/wp-content/uploads/2024/01/GALLETAS-RELLENITAS-DIA-CHOCOLATE-x-8-UND.png", percentageLike: 93, range: "$3.000 - $6.000", description: "Snack clásico para lonchera." },
    { id: 12, name: "Avena en hojuelas 500 g",         brand: "Alpina",      imageURL: "https://exitocol.vtexassets.com/arquivos/ids/29102306/Avena-Hojuelas-LA-ABUELA-500-gr-325776_a.jpg?v=638881204090900000", percentageLike: 82, range: "$6.000 - $11.000", description: "Avena tradicional para bebidas, desayunos y recetas saludables." },
    { id: 13, name: "Café molido 250 g",               brand: "Sello Rojo",  imageURL: "https://carulla.vtexassets.com/arquivos/ids/21742415/CAFE-MOLIDO-523968_b.jpg?v=638876686325670000", percentageLike: 94, range: "$12.000 - $22.000", description: "Producto tradicional para el hogar colombiano." },
    { id: 14, name: "Chocolate de mesa 250 g",         brand: "Corona",      imageURL: "https://exitocol.vtexassets.com/arquivos/ids/30743474/Chocolate-Luker-Facil-X-250-gr-778679_a.jpg?v=638930477541770000", percentageLike: 88, range: "$7.000 - $13.000", description: "Tabletas para preparar chocolate caliente al estilo colombiano." },
    { id: 15, name: "Cereal de maíz 300 g",            brand: "Kellogg's",   imageURL: "https://exitocol.vtexassets.com/arquivos/ids/32918294/Cereal-Infantil-EKONO-Hojuelas-300-gr-3603715_a.jpg?v=639104783953670000", percentageLike: 81, range: "$12.000 - $20.000", description: "Cereal crocante para desayuno, ideal con leche o yogurt." },

    // Aseo personal y hogar
    { id: 16, name: "Papel higiénico 4 rollos",        brand: "Scott",       imageURL: "https://exitocol.vtexassets.com/arquivos/ids/32752803/PAPEL-HIGIENICO-TRIPLE-HOJA-XXG-ULTR-ROSAL-4-UNIDAD-3319532_a.jpg?v=639089249590500000", percentageLike: 90, range: "$8.000 - $14.000", description: "Presentación común en grandes superficies." },
    { id: 17, name: "Jabón de lavar platos 400 ml",    brand: "Axion",       imageURL: "", percentageLike: 87, range: "$5.000 - $9.000", description: "Desengrasante líquido para limpieza diaria de vajilla." },
    { id: 18, name: "Detergente en polvo 1 kg",        brand: "Fab",         imageURL: "", percentageLike: 84, range: "$14.000 - $24.000", description: "Para ropa de uso diario." },
    { id: 19, name: "Shampoo 400 ml",                  brand: "Sedal",       imageURL: "", percentageLike: 86, range: "$12.000 - $20.000", description: "Cuidado capilar de uso frecuente para toda la familia." },
    { id: 20, name: "Crema dental 75 ml",              brand: "Colgate",     imageURL: "", percentageLike: 92, range: "$6.000 - $12.000", description: "Pasta dental de uso diario para higiene oral y cuidado de encías." },

    // Congelados, conservas y bebidas
    { id: 21, name: "Atún en agua 160 g",              brand: "Van Camp's",  imageURL: "", percentageLike: 89, range: "$7.000 - $13.000", description: "Lata individual para almuerzos rápidos." },
    { id: 22, name: "Sopa instantánea",                brand: "Maggi",       imageURL: "", percentageLike: 80, range: "$3.000 - $6.000", description: "Opción rápida para una comida ligera en pocos minutos." },
    { id: 23, name: "Mayonesa 500 g",                  brand: "Fruco",       imageURL: "", percentageLike: 88, range: "$11.000 - $19.000", description: "Salsa cremosa para sándwiches, ensaladas y comidas rápidas." },
    { id: 24, name: "Agua mineral 600 ml",             brand: "Brisa",       imageURL: "", percentageLike: 84, range: "$2.000 - $4.000", description: "Bebida sin gas para hidratación diaria dentro y fuera de casa." },
    { id: 25, name: "Arequipe 250 g",                  brand: "Alpina",      imageURL: "", percentageLike: 91, range: "$9.000 - $16.000", description: "Postre y acompañante muy común en Colombia." },
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
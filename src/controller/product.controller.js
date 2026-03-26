import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        return res.json(products);
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener los productos", error: error.message });
    }
};


export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        return res.json(product);
    } catch (error) {
        return res.status(500).json({ message: "Error al buscar el producto", error: error.message });
    }
};


export const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        return res.json(newProduct); 
    } catch (error) {
        console.log("Paila en create product");
    }
};


export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            console.log("Paila en update product");
        }

        const updatedProduct = await product.update(req.body);
        return res.json(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: "No se puede eliminar, producto no encontrado" });
        }

        await product.destroy();
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Error al eliminar el producto", error: error.message });
    }
};
export const getProductReviews = async (req, res) => {
    try {
        const { id } = req.params;

        const productWithReviews = await Product.findByPk(id, {
            include: {
                model: Review,
                as: 'reviews'
            }
        });

        if (!productWithReviews) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        return res.json(productWithReviews.reviews); 
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener reseñas", error: error.message });
    }
};
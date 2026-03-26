import { Router } from "express";

import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controller/productController";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
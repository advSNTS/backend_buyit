import { Router } from "express";

import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductReviews } from "../controller/product.controller.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/:id", getProductById);
router.get("/products/:id/reviews", getProductReviews);
export default router;
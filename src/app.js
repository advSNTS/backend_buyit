import express from "express"
import userRoutes from "./routes/users.routes.js"
import reviewRoutes from "./routes/reviews.routes.js"
import productRoutes from "./routes/product.routes.js"

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(reviewRoutes);
app.use(productRoutes);
export default app
import { Router } from "express";

import { getReviews, createReview, updateReview, deleteReview, getReviewById } from "../controller/review.controller.js";

const router = Router();

router.get("/reviews", getReviews);
router.post("/reviews", createReview);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);
router.get("/reviews/:id", getReviewById);

export default router
import {Review} from "../models/Review.js"

export const getReviews = async (req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
}

export const createReview = async (req, res) => {
    const newReview = await Review.create(req.body);
    return res.json(newReview);
}

export const updateReview = async (req, res) => {
    const id = req.params.id;
    const review = await Review.findByPk(id);
    try {
        const updatedReview = await review.update(req.body);
        return res.json(updatedReview);
    } catch (error) {
        console.log("Paila en update review");
    }
}

export const deleteReview = async (req, res) => {
    const id = req.params.id;
    const review = await Review.findByPk(id);
    await review.destroy();
    return res.sendStatus(204);
}
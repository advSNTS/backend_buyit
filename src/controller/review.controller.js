import {Review} from "../models/Review.js"
import {User} from "../models/User.js"

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

export const getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({ 
                message: "Reseña no encontrada" 
            });
        }
        return res.json(review);
    } catch (error) {
        console.log("Error en getReviewById:", error);
        return res.status(500).json({ 
            message: "Error interno al buscar la reseña",
            error: error.message 
        });
    }
};

export const getReviewsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const reviews = await Review.findAll({
            where: { userId }
        });

        return res.json(reviews);
    } catch (error) {
        console.error("Paila", error);
    }
}
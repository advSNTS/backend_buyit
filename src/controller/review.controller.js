import { Review }   from "../models/Review.js"
import { User }     from "../models/User.js"
import { Product }  from "../models/Product.js"

const reviewInclude = [
    {
        model: User,
        as: "user",
        attributes: ["id", "name", "pfpURL"]
    },
    {
        model: Product,
        as: "product",
        attributes: ["id", "name", "imageURL", "percentageLike", "range"]
    }
];

export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll({ include: reviewInclude });
        return res.json(reviews);
    } catch (error) {
        console.error("Paila en getReviews:", error);
        return res.status(500).json({ message: "Error al obtener reseñas", error: error.message });
    }
}

export const createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);
        return res.json(newReview);
    } catch (error) {
        console.error("Paila en createReview:", error);
        return res.status(500).json({ message: "Error al crear reseña", error: error.message });
    }
}

export const updateReview = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);
        if (!review) return res.status(404).json({ message: "Reseña no encontrada" });

        const updatedReview = await review.update(req.body);
        return res.json(updatedReview);
    } catch (error) {
        console.error("Paila en updateReview:", error);
        return res.status(500).json({ message: "Error al actualizar reseña", error: error.message });
    }
}

export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).json({ message: "Review no encontrada" });
    }

    await review.destroy();

    return res.status(200).json({ message: "Review eliminada correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar la review" });
  }
};

export const getReviewById = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id, { include: reviewInclude });
        if (!review) return res.status(404).json({ message: "Reseña no encontrada" });

        return res.json(review);
    } catch (error) {
        console.error("Paila en getReviewById:", error);
        return res.status(500).json({ message: "Error interno al buscar la reseña", error: error.message });
    }
};

export const getReviewsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await User.findByPk(userId);
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

        const reviews = await Review.findAll({
            where: { userId },
            include: reviewInclude
        });

        return res.json(reviews);
    } catch (error) {
        console.error("Paila en getReviewsByUserId:", error);
        return res.status(500).json({ message: "Error al obtener reseñas del usuario", error: error.message });
    }
}
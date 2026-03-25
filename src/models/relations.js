import { User } from "./User.js";
import { Review } from "./Review.js";
import { Product } from "./Product.js";

export function setupRelations(){
    User.hasMany(Review, {
        foreignKey: "userId",
        as: 'reviews',
        onDelete: "cascade",
        hooks: true
    });

    Review.belongsTo(User, {
    foreignKey: "userId",
    as: 'user'
    });

    Product.hasMany(Review, {
        foreignKey: "productId",
        as: 'reviews',
        onDelete: "cascade",
        hooks: true
    });

    Review.belongsTo(Product, {
        foreignKey: "productId",
        as: 'product'
    });
}


import { User } from "./User";
import { Review } from "./Review";

export function setupRelations(){
    User.hasMany(Review, {
        foreignKey: "userId",
        as: 'reviews',
        onDelete: "cascade",
        hooks: true
    })
}

Review.belongsTo(User, {
    oreignKey: "userId",
    as: 'user',
})
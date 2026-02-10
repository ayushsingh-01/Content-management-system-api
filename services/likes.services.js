import Like from "../models/likes.js";
export const toggleLikeService = async ({ userId, artifactId }) => {
    const existingLike  = await Like.findOne({
        artifact: artifactId,
        user: userId
    });

    if (existingLike) {
        await Like.deleteOne({ _id: existingLike._id });
        return { liked: false };
    }

    const newLike = await Like.create({
        artifact: artifactId,
        user: userId
    });

    return { liked: true, like: newLike };
};
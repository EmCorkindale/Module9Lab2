const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentsSchema = new Schema(
    {
       
        comment: { type: String, trim: true },
        userID: { type: mongoose.Schema.Types.ObjectId, ref:"user", required: true },
        postID: { type: mongoose.Schema.Types.ObjectId, ref:"post", required: true },
        createdAt: { type: Date, default: Date.now }
    }
);
module.exports = mongoose.model("comments", commentsSchema);
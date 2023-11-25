const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postsSchema = new Schema({
  postTitle: { type: String, trim: true, required: true },
  postDescription: { type: String, trim: true, required: true },
  image: { type: String, trim: true, required: true, unique: true },
  UserID: { type: mongoose.Schema.Types.ObjectId, ref:"user", required: true },
  CreatedAt: { type: Date, default: Date.now },
  Likes: { type: Number, default: 0 },
  numComments: { type: Number, default: 0 }
});
module.exports = mongoose.model("post", postsSchema);

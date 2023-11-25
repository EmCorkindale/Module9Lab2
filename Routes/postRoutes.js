let express = require("express");
let router = express.Router();
let Controllers = require("../Controllers"); //index.js
router.get("/", (req, res) => {
  Controllers.postsController.getPosts(res);
});
router.post("/create", (req, res) => {
  Controllers.postsController.createPost(req.body, res);
});

router.patch("/:postID/like", (req, res) => {
  Controllers.postsController.like(req.params.postID, res);
});

router.patch("/:postID/comments", (req, res) => {
  Controllers.commentsController.like(req.params.postID, res);
});

module.exports = router;

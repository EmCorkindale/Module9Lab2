let express = require("express");
let router = express.Router();
let Controllers = require("../Controllers"); //index.js
router.get("/", (req, res) => {
  Controllers.commentsController.getComments(res);
});
router.post("/create", (req, res) => {
  Controllers.commentsController.createComment(req.body, res);
});

module.exports = router;
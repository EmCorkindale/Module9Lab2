"use strict";
let Models = require("../Models"); //matches index.js
const getComments = (res) => {
  //finds all users
  Models.Comments.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createComment = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Comments(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const numComments = (postID, res) => {
  Models.Posts.findOneAndUpdate({ _id: postID }, { $inc: { numComments: 1 } }, {new:true})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getComments,
  createComment,
  numComments
};

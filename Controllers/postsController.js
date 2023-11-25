"use strict";
let Models = require("../Models"); //matches index.js
const getPosts = (res) => {
  //finds all users
  Models.Posts.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const createPost = (data, res) => {
  //creates a new user using JSON data POSTed in request body
  console.log(data);
  new Models.Posts(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const like = (postID, res) => {
  Models.Posts.findOneAndUpdate({ _id: postID }, { $inc: { Likes: 1 } }, {new:true})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getPosts,
  createPost,
  like
};

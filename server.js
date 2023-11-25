const express = require("express");
let dbConnect = require("./DbConnect.js");
const app = express();

require("dotenv").config();
// parse requests of content-type -
//application / json;
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.SERVERPORT || 8080;
let userRoutes = require("./Routes/userRoutes");
app.use("/api/users", userRoutes);
let postRoutes = require("./Routes/postRoutes");
app.use("/api/posts", postRoutes);
let commentRoutes = require("./Routes/commentRoutes");
app.use("/api/comments", commentRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

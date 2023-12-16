const express = require("express");
const router = express.Router(); 

// importing the routers
const {createComment} = require("../controllers/commentController");
const {createPost, getAllPosts} = require("../controllers/postController");
const{likePost, unlikePost} = require("../controllers/likeController");

// mapping the controllers with routes
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
// exporting the routes
module.exports = router; 

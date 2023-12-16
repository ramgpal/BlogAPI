// importing models
const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        // fetching data from req body
        const {title, body} = req.body;

        // creating new post object
        const post = new Post({
            title, body
        });

        //saving the new post in DB
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        })
    } catch(error) {
        return res.status(500).json({
            error:"Error while creating the new post"
        });
    }
};

// fetching all posts
 exports.getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    } catch(error) {
        return res.status(500).json({
            error:"Error while fetching all the posts",
        });
    }
 }
 
// importing models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//like the post
exports.likePost = async (req, res) => {
    try {
        // fetching data from req body
        const {post, user} = req.body;
        // creating a new like object
        const like = new Like({
            post, user
        })

        const savedLike = await like.save();

        // updating the Post collection basis on this
        const updatedPost = await  Post.findByIdAndUpdate(post, {$push:{likes: savedLike._id}}, {new: true}).populate("likes").exec();
        res.json({
            Post: updatedPost,
        })
    }
    catch(error) {
        return res.status(500).json({
            error: "Error while liking post",
        })
    }   
}

// unLike the post
exports.unlikePost = async (req, res) => {
    try{
        const{post, like} = req.body;
        // finding and deleting the like
        const deletedLike = await Like.findByIdAndUpdate({_id:like});

        // updating the Post 
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});

        res.json ({
            post: updatedPost,
        })
    }
        catch(error) {
            return res.status(500).json({
                error: "Error while unliking post",
            })
        }   
}
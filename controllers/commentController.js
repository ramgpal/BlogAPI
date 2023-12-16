// importing models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// logic
exports.createComment = async (req, res) => {
    try {
        // fetching data from req body
       const {post, user, body} = req.body;
       // creating a comment object
       const comment = new Comment({
        post, user, body
       });

       // saving the new comment into the DB
       const savedComment = await comment.save(); 

       // finding the post using id so that i can add newly comment to the post
       const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments: savedComment._id}}, {new: true})
                  // below two lines hme comments ko dikhayengi unke absence me hme sirf comments ki id dikhegi 
                  .populate("comments") 
                  .exec();

        res.json({
            post: updatedPost,
        });
    }
    catch(error) {
        return res.status(500).json({
            error: "Error while creating comment",
        })
    }
}
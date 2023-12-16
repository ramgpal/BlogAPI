//import mongoose
const mongoose = require("mongoose");


// Defining the post schema
const postSchema = new mongoose.Schema({
    // kaun si post
    title: {
        type: String,
        required: true,
    },
    // post ka content
    body: {
        type: String,
        required: true,
    },
    // likes array
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    // comments array
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
});




//export
module.exports = mongoose.model("Post", postSchema);
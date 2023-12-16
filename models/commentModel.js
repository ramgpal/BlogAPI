// importing mongoose
const mongoose = require("mongoose");

// Defining the comment schema
const commentSchema = new mongoose.Schema({
    // kis post pe comment kiya hai
    title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // Reference to the postModel
    },
    // kisne comment kiya hai
    user: {
        type: String,
        required: true,
    },
    // kya comment kiya hai
    body: {
        type: String,
        required: true,
    }
});

// Exporting the model
module.exports = mongoose.model("Comment", commentSchema);

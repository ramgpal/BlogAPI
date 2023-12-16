// importing mongoose
const mongoose = require("mongoose");

// Defining the like schema
const likeSchema = new mongoose.Schema({
    // kis post ko like kiya hai
    title: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", // Reference to the postModel
    },
    // kisne like kiya hai
    user: {
        type: String,
        required: true,
    },
});

// Exporting the model
module.exports = mongoose.model("Like", likeSchema);

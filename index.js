const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

// importing routes
const blogRoutes = require("./routes/blog");

// mount the routes
app.use("/api/v1", blogRoutes);

// establish connection with the database
const connectWithDb = require("./config/database");
connectWithDb();

// start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
});

// add default route to display a message
app.get("/", (req, res) => {
    res.send("Hi, This is RJ");
});

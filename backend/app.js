const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// Connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Exit process with failure
    }
};

// Start the server only if the database connection is successful
connectDB().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
    });
});


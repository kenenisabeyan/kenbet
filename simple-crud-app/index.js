const express = require("express");
const mongoose = require("mongoose"); // <-- only once
const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://keno_astu:keno30772@backenddb.oanerac.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
)
.then(() => {
    console.log("Connected to database");
})
.catch(err => {
    console.log("Connection failed");
    console.log(err.message);
});

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/portfollio";

mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo successfully");
});

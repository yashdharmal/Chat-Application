const mongoose = require('mongoose');


async function connectMongo(URL) {

    try {
        await mongoose.connect(URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = {
    connectMongo
}
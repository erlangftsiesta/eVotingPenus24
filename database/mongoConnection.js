const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = "mongodb+srv://erlangftsiesta:Shiesuta12@cluster0.dcxjp1b.mongodb.net/eVotingPenus";
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;

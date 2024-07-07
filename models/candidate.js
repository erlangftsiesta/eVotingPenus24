const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    vision: { type: String },
    mission: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Candidate', candidateSchema);

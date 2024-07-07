const mongoose = require('mongoose');

// Skema untuk model Vote
const voteSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
    created_at: { type: Date, default: Date.now }
});

// Membuat model Vote dari skema yang telah didefinisikan
const Vote = mongoose.model('Vote', voteSchema)


// Eksport model Vote untuk digunakan di aplikasi lainnya
module.exports = Vote; 


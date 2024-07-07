const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    nis: String,
    username: String,
    password: String,
    role: String,
    has_voted: Boolean,
    created_at: { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);



// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     nis: { type: String, required: true },
//     username: { type: String, required: true },
//     password: { type: String, required: true },
//     role: { type: String, required: true },
//     has_voted: { type: Boolean, default: false },
//     created_at: { type: Date, default: Date.now }
// });

// const candidateSchema = new Schema({
//     name: { type: String, required: true },
//     vision: { type: String, required: true },
//     mission: { type: String, required: true },
//     created_at: { type: Date, default: Date.now }
// });

// const voteSchema = new Schema({
//     user_id: { type: mongoose.ObjectId, ref: 'User', required: true },
//     candidate_id: { type: mongoose.ObjectId, ref: 'Candidate', required: true },
//     created_at: { type: Date, default: Date.now }
// });

// const User = mongoose.model('User', userSchema);
// const Candidate = mongoose.model('Candidate', candidateSchema);
// const Vote = mongoose.model('Vote', voteSchema);

// module.exports = { User, Candidate, Vote };
    
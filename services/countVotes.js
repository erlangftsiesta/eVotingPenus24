// services/voteService.js

const Vote = require('../models/votings'); // Pastikan model Vote sudah diimpor dengan benar

const getVoteCounts = async () => {
    try {
        const voteCounts = await Vote.aggregate([
            {
                $group: {
                    _id: '$candidate_id',
                    count: { $sum: 1 }
                }
            }
        ]);

        return voteCounts;
    } catch (err) {
        console.error('Error retrieving vote counts:', err);
        throw err; 
    }
};

module.exports = {
    getVoteCounts
};

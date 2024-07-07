const express = require('express');
const router = express.Router();
const VoteController = require('../controller/votings');
const { getVoteCounts } = require('../services/countVotes');

// GET all votes
router.get('/', VoteController.getAllVotes);

// POST create a new vote
router.post('/', VoteController.createVote);

//Itung total votenya jir
router.get('/vote-counts', async (req, res) => {
    try {
        const voteCounts = await getVoteCounts();
        res.json(voteCounts);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

const Vote = require('../models/votings');

const VoteController = {
    getAllVotes: async (req, res) => {
        try {
            const votes = await Vote.find();
            res.json(votes);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    createVote: async (req, res) => {
        const { user_id, candidate_id } = req.body;
    
        try {
            // Cari suara berdasarkan user_id
            const existingVote = await Vote.findOne({ user_id });
    
            // Jika sudah ada suara untuk user_id tersebut, kirimkan pesan error
            if (existingVote) {
                return res.status(403).json({ message: "Anda sudah melakukan voting sebelumnya!" });
            }
    
            // Buat objek suara baru
            const newVote = new Vote({
                user_id,
                candidate_id
            });
    
            // Simpan suara baru ke database
            const savedVote = await newVote.save();
            res.status(201).json(savedVote);
        } catch (err) {
            res.status(400).json({ message: err.message });
            console.log(user_id, candidate_id)
        }
    }

    // Implementasi fungsi lain seperti updateVote, deleteVote, dsb. sesuai kebutuhan aplikasi
};

module.exports = VoteController;

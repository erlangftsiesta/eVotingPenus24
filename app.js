const express = require('express');
const connectDB = require('./database/mongoConnection');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('./config/passport');
const isAuthenticated = require('./middleware/sessionAuth');
const Candidate = require('./models/candidate'); // Pastikan ini diimpor
const User = require('./models/users');
const { getVoteCounts } = require('./services/countVotes');
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/candidates', require('./routes/candidate'));
app.use('/api/v1/votings', require('./routes/votings'))
app.use('/', require('./routes/auth'));

// Route for dashboard (protected)
app.get('/', isAuthenticated, async (req, res) => {
  try {
    const candidates = await Candidate.find();
    const voteCounts = await getVoteCounts();
    
    // Pastikan variabel user telah diinisialisasi sebelum digunakan di sini
    const userId = req.user._id;

    // Cari pengguna berdasarkan ID
    const user = await User.findById(userId);

    res.render('dashboard', { user, candidates, voteCounts});
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Server
const PORT = process.env.PORT || 4406;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

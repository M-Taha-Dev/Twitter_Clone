const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const searchRoutes = require('./routes/search');
const { fetchUser } = require('./routes/user');
const { fetchUserTweets } = require('./routes/userTweets');

// Use Routes
app.get('/api/search', searchRoutes);
app.get('/api/search/user', fetchUser);
app.get('/api/user/tweets', fetchUserTweets);

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

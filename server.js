const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const petRoutes = require('./routes/petRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

// Root route for welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Pet Registration API! Use /api/pets to manage pet data.');
});

// Pet routes
app.use('/api/pets', petRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

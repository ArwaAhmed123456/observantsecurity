const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI).catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, '❌ MongoDB connection error:'));
db.once('open', () => console.log('✅ Connected to MongoDB Atlas'));

// Define contact schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  city: String,
  address: String,
  service: String,
  message: String,
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// API endpoint to receive contact form data
app.post('/contact', async (req, res) => {
  try {
    const contactData = new Contact(req.body);
    await contactData.save();
    res.status(200).send('✅ Contact saved to MongoDB');
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).send('❌ Error saving contact');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});



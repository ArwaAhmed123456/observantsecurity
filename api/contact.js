const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

// MongoDB Connection (cached for serverless)
let isConnected = false;

const connectToDatabase = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    throw err;
  }
};

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

// Serverless function for /contact POST
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    await connectToDatabase();

    const contactData = new Contact(req.body);
    await contactData.save();

    res.status(200).json({ message: '✅ Contact saved to MongoDB' });
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).json({ error: '❌ Error saving contact' });
  }
}

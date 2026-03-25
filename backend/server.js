const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = 5000;

// Import Models
const Contact = require('./models/Contact');

// Import Routes
const authRoute = require('./routes/auth');

// Middleware
const corsOptions = {
  origin: ['https://observantsecurity.co.uk', 'http://localhost:3000'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Route Middlewares
app.use('/api/auth', authRoute);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

const db = mongoose.connection;
db.on('error', console.error.bind(console, '❌ MongoDB connection error:'));

// Configure Nodemailer Transporter
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your email provider (e.g., 'hotmail', 'outlook')
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or App Password
  },
});

// API endpoint to receive contact form data
app.post('/contact', async (req, res) => {
  try {
    const contactData = new Contact(req.body);
    await contactData.save();

    console.log('✅ Contact saved to MongoDB');

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'abid.fiaz@observantsecurity.co.uk', // Target email
      subject: `New Query from ${req.body.name}`,
      text: `
        New Contact Form Submission:
        
        Name: ${req.body.name}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        City: ${req.body.city || 'N/A'}
        Address: ${req.body.address || 'N/A'}
        Service of Interest: ${req.body.service || 'N/A'}
        
        Message:
        ${req.body.message || 'No message provided'}
      `,
    };

    // Send Email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Error sending email:', error);
        // We still return 200 because the data was saved to DB, but we log the email error
        return res.status(200).send('✅ Contact saved, but email failed to send.');
      } else {
        console.log('📧 Email sent: ' + info.response);
        return res.status(200).send('✅ Contact saved and email sent.');
      }
    });

  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).send('❌ Error saving contact');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});



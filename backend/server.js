const sgMail = require('@sendgrid/mail');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// 1. DATABASE CONNECTION
connectDB();

// 2. MIDDLEWARE
app.use(cors()); 
app.use(express.json());

// 3. SENDGRID CONFIG
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 4. OTP ROUTE
app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000);

  try {
    await sgMail.send({
      to: email,
      from: process.env.FROM_EMAIL,
      subject: 'Clinico Access OTP',
      text: `Your One-Time Password for Clinico is: ${otp}`,
    });
    console.log(`OTP Sent to ${email}: ${otp}`);
    res.status(200).json({ success: true, secret: otp });
  } catch (error) {
    console.error("SendGrid Error:", error.message);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});

// 5. SERVER START
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
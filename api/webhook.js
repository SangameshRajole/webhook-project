const express = require('express');
const app = express();

app.use(express.json());

// If the file is api/webhook.js, the endpoint is already /api/webhook
app.post('/api/webhook', (req, res) => {
  console.log('Received:', req.body);
  res.status(200).json({ 
    success: true, 
    message: "Vercel handled this!",
    data: req.body 
  });
});

module.exports = app;

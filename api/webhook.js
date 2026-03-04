const express = require('express');
const app = express();

app.use(express.json());

// Vercel routes requests to this file, but Express sees the full path.
// Using '*' ensures it handles the request regardless of whether it's /api/webhook or /webhook.
app.post('*', (req, res) => {
  console.log('Received:', req.body);
  res.status(200).json({ 
    data: req.body 
  });
});

module.exports = app;

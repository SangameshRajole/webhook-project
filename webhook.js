const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).json({ received: true });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));

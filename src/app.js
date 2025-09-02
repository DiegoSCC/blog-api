const express = require('express');
const app = express();
const auth = require('./routes/auth')

app.use(express.json());

app.use('/api/auth', auth);

app.get('/health', (req, res) => {
  res.json({ status: "Okay", message: 'Server running...' });
});

module.exports = app;
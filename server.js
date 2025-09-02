const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
 res.json({ status:"Okay", message: 'Server running...'});
 });

app.listen (PORT, () => {
   console.log(`Server running on ${PORT}`);
 });

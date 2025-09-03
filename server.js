require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/database');
const User = require('./src/models/users');
const Posts = require('./src/models/posts');
const PORT = process.env.PORT || 3000;

// Database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Unable to connect:', error);
  });

// Sync models
sequelize.sync()
  .then(() => {
    console.log('Model sync successful');
  })
  .catch((error) => {
    console.error('Unable to sync:', error);
  });

// Start server
app.listen(PORT, () => {
   console.log(`Server running on ${PORT}`);
});
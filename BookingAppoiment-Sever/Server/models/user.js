const Sequelize = require('sequelize');

const sequelize = require('../util/database');

// Define a User model
const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  mo: {
    type: Sequelize.STRING,
  },
});

// Synchronize the model with the database to create the User table
sequelize.sync()
  .then(() => {
    console.log('Database and table created.');
  })
  .catch((error) => {
    console.error('Unable to sync the database:', error);
  });

// Export the User model for use in your routes
module.exports = User;

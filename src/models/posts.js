const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Posts = sequelize.define('Posts', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
   author_id : {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  published: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
}, {
  timestamps: true
});


module.exports = Posts;
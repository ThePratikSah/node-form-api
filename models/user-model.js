const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  otp: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = User;

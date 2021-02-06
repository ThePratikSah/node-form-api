const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const UserId = require("./user-model");

const Form = sequelize.define("form", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: UserId,
      key: 'id',
    },
  },
  fromLat: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  fromLng: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imageDesc: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Form;

const Sequelize = require("sequelize");

// const sequelize = new Sequelize("formdata", "root", "", {
//   dialect: "mysql",
//   host: "localhost",
// });

const sequelize = new Sequelize("mysql://ba00d2f2fba91d:ccb5e34a@eu-cdbr-west-03.cleardb.net/heroku_428435f2eceecbb?reconnect=true", {
  dialect: "mysql"
})

module.exports = sequelize;

const { Sequelize } = require("sequelize");

const db = new Sequelize("hotel_system_db", "postgres", "852852", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = {
  db,
};

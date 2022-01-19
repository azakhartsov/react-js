const Sequelize = require("sequelize");

const sequelize = new Sequelize("reactjs", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  port: 3600,
});

const Notes = require("./notes")(sequelize);

module.exports = {
  sequelize: sequelize,
  notes: Notes,
};

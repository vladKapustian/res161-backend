module.exports = {
  development: {
    dialect: "sqlite",
    storage: path.join(__dirname, "..", "res161.db.sqlite"),
    logging: false,
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:",
  },
  production: {
    dialect: "sqlite",
    storage: "database.sqlite",
    logging: false,
  },
};

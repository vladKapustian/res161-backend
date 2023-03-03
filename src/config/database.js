module.exports = {
  development: {
    dialect: "sqlite",
    storage: "database.sqlite",
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

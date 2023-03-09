import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./mydatabase.sqlite",
});

export default sequelize;

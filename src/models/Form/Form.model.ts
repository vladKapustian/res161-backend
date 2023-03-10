import sequelize from "..";
import { DataTypes, Model } from "sequelize";

export interface IForm {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  message: string;
}

export const Form = sequelize.define("Form", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
  },
  message: { type: DataTypes.STRING, allowNull: false },
});

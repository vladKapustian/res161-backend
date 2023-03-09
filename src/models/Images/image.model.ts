import sequelize from "..";
import { DataTypes } from "sequelize";

export type ImageSize = "small" | "medium" | "original" | "big";

export interface IImage {
  height: number;
  width: number;
  uri: string;
}

export const Image = sequelize.define("Image", {
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  width: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  uri: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
});

import sequelize from "..";
import { DataTypes } from "sequelize";

export type ImageSize = "small" | "medium" | "original" | "big";

export interface IImage {
  height: number;
  width: number;
  blurhash: string;
  uri: string;
}

//TODO: Find out if the size of an orginal picture is needed and change allowNull to false if yes
export const Image = sequelize.define("Image", {
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  width: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  blurhash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uri: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
      msg: "Невалидная картинка",
    },
  },
});

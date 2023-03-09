import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "..";
import { Image, ImageSize, IImage } from "../Images/image.model";

export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  seo?: {
    keywords?: string;
    description?: string;
  };
  images: Record<ImageSize, IImage>;
}

interface CategoryAttributes extends Optional<ICategory, "id"> {}
interface CategoryInstance
  extends Model<ICategory, CategoryAttributes>,
    ICategory {}

export const Category = sequelize.define<CategoryInstance>("Category", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  images: {
    type: DataTypes.INTEGER,
    references: { model: Image, key: "uri" },
  },
});

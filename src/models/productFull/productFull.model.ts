import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";
import { Attribute, IAttribute } from "../Attributes/attributes.model";
import { Category } from "../Categories/categories.model";
import { Image } from "../Images/image.model";

export interface IProductFull {
  id: number;
  name: string;
  category: {
    id: number;
    name: number;
    slug: string;
  };
  images: {
    size: {
      height: number;
      width: number;
      uri: string;
    };
  };
  description: string;
  attributes: IAttribute[];
  seo?: {
    keywords?: string;
    description?: string;
  };
}

interface ProductFullAttributes extends Optional<IProductFull, "id"> {}
interface ProductFullInstance
  extends Model<IProductFull, ProductFullAttributes>,
    IProductFull {}

export const ProductFull = sequelize.define<ProductFullInstance>(
  "ProductFull",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
    images: {
      type: DataTypes.INTEGER,
      references: {
        model: Image,
        key: "Id",
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    attributes: {
      type: DataTypes.INTEGER,
      references: {
        model: Attribute,
        key: "Id",
      },
    },
    seo: {
      type: DataTypes.STRING,
    },
  }
);

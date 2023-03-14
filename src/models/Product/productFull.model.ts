import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";
import { Attribute, IAttribute } from "../Attributes/attributes.model";
import { Category } from "../Categories/categories.model";
import { Image } from "../Images/image.model";

export interface IProductFull {
  id: number;
  name: string;
  slug: string;
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
  attributes?: IAttribute[];
  seo?: {
    keywords?: string;
    description?: string;
  };
}

interface ProductFullAttributes extends Optional<IProductFull, "id"> {}
interface ProductFullInstance extends Model<IProductFull, ProductFullAttributes>, IProductFull {}

export const ProductFull = sequelize.define<ProductFullInstance>("ProductFull", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 35,
      msg: "Название товара должно содердать 35 символов или меньше",
    },
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 35,
      msg: "Слаг товара должен содердать 35 символов или меньше",
    },
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: {
    //   model: Category,
    //   key: "id",
    // },
  },
  images: {
    type: DataTypes.INTEGER,
    // references: {
    //   model: Image,
    //   key: "Id",
    // },
    validate: {
      isUrl: true,
      msg: "Произошла ошибка при добавлении картинки",
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      max: 1500,
    },
  },
  attributes: {
    type: DataTypes.INTEGER,
    // references: {
    //   model: Attribute,
    //   key: "Id",
    // },
  },
  seo: {
    type: DataTypes.STRING,
    validate: {
      max: 100,
      msg: "Извините, строка должна содержать 100 символов или меньше",
    },
  },
});

ProductFull.hasOne(Category, { as: "Category", foreignKey: "category" });
Category.belongsTo(ProductFull, { as: "categoryID" });

ProductFull.hasOne(Image, { as: "image", foreignKey: "images" });
Image.belongsTo(ProductFull, { as: "image" });

ProductFull.hasOne(Attribute, { as: "attribute", foreignKey: "attributes" });
Attribute.belongsTo(ProductFull, { as: "attribute" });

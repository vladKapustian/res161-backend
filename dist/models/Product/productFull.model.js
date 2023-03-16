"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFull = void 0;
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require(".."));
const attributes_model_1 = require("../Attributes/attributes.model");
const categories_model_1 = require("../Categories/categories.model");
const image_model_1 = require("../Images/image.model");
exports.ProductFull = __1.default.define("ProductFull", {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 35,
            msg: "Название товара должно содердать 35 символов или меньше",
        },
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 35,
            msg: "Слаг товара должен содердать 35 символов или меньше",
        },
    },
    category: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: Category,
        //   key: "id",
        // },
    },
    images: {
        type: sequelize_1.DataTypes.INTEGER,
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
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        validate: {
            max: 1500,
        },
    },
    attributes: {
        type: sequelize_1.DataTypes.INTEGER,
        // references: {
        //   model: Attribute,
        //   key: "Id",
        // },
    },
    seo: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            max: 100,
            msg: "Извините, строка должна содержать 100 символов или меньше",
        },
    },
});
exports.ProductFull.hasOne(categories_model_1.Category, { as: "Category", foreignKey: "category" });
categories_model_1.Category.belongsTo(exports.ProductFull, { as: "categoryID" });
exports.ProductFull.hasOne(image_model_1.Image, { as: "image", foreignKey: "images" });
image_model_1.Image.belongsTo(exports.ProductFull, { as: "image" });
exports.ProductFull.hasOne(attributes_model_1.Attribute, { as: "attribute", foreignKey: "attributes" });
attributes_model_1.Attribute.belongsTo(exports.ProductFull, { as: "attribute" });
//# sourceMappingURL=productFull.model.js.map
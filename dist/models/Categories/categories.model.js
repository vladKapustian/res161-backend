"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require(".."));
const image_model_1 = require("../Images/image.model");
exports.Category = __1.default.define("Category", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 30,
            msg: "Название категории должно состоять из 30 символов или меньше",
        },
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: { is: /^[A-Za-z0-9_-]+$/ },
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    images: {
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: image_model_1.Image, key: "uri" },
    },
});
//# sourceMappingURL=categories.model.js.map
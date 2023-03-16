"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const __1 = __importDefault(require(".."));
const sequelize_1 = require("sequelize");
exports.Image = __1.default.define("Image", {
    height: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    width: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    uri: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true,
            msg: "Невалидная картинка",
        },
    },
});
//# sourceMappingURL=image.model.js.map
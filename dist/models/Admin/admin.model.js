"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require(".."));
exports.Admin = __1.default.define("Admin", {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
    },
    login: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            msg: "Логин должен быть валидным адресом электронной почты",
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            is: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
            msg: "Извините, пароль должен содержать минимум 8 символов, одну букву и одно число",
        },
    },
});
//# sourceMappingURL=admin.model.js.map
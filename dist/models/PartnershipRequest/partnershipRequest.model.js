"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnershipRequest = void 0;
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require(".."));
exports.PartnershipRequest = __1.default.define("PartnershipRequest", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 5,
            max: 50,
            msg: "Поле 'Имя' должно содержать от 5 до 50 символов",
        },
    },
    company: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            max: 50,
            msg: "Поле 'Компания' должно содержать не более 50 символов",
        },
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            is: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
            msg: "Номер телефона невалиден",
        },
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
        validate: {
            max: 500,
            msg: "Поле 'сообщение' должно содержать не более 500 символов",
        },
    },
    files: {
        type: sequelize_1.DataTypes.STRING,
        validate: { isUrl: true },
    },
});
//# sourceMappingURL=partnershipRequest.model.js.map
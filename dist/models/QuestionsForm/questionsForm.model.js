"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsForm = void 0;
const __1 = __importDefault(require(".."));
const sequelize_1 = require("sequelize");
exports.QuestionsForm = __1.default.define("Form", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: { max: 40, msg: "Поле 'Имя' невалидно" },
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Адрес электронной почты невалиден",
            },
        },
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
            msg: "Номер телефона невалиден",
        },
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 200,
            msg: "Сообщение должно содержать 200 символов или меньше",
        },
    },
});
//# sourceMappingURL=questionsForm.model.js.map
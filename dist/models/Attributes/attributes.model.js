"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = void 0;
const sequelize_1 = require("sequelize");
const __1 = __importDefault(require(".."));
class Attribute extends sequelize_1.Model {
}
exports.Attribute = Attribute;
Attribute.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2,
            max: 100,
        },
    },
    value_type: {
        type: sequelize_1.DataTypes.ENUM("STRING", "NUMBER", "BOOLEAN"),
        allowNull: false,
        validate: {},
    },
    value: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        validate: {
            min: 2,
            max: 100,
        },
    },
}, {
    sequelize: __1.default,
    validate: {
        matchingTypes() {
            if (this.value_type === "BOOLEAN" && (this.value !== true || this.value !== false)) {
                throw new Error("value is not matching the type");
            }
        },
    },
});
//# sourceMappingURL=attributes.model.js.map
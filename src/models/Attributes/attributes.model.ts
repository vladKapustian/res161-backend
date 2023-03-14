import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";

export interface IAttribute {
  id: number;
  name: string;
  value_type: string | boolean;
  value: (string | number | boolean)[];
}

interface AttributeAttributes extends Optional<IAttribute, "id"> {}
interface AttributeInstance extends Model<IAttribute, AttributeAttributes>, IAttribute {}

export class Attribute extends Model<IAttribute> {
  static id: string | { msg: string };
}

Attribute.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 2,
        max: 100,
      },
    },
    value_type: {
      type: DataTypes.ENUM("STRING", "NUMBER", "BOOLEAN"),
      allowNull: false,
      validate: {},
    },
    value: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        min: 2,
        max: 100,
      },
    },
  },
  {
    sequelize,
    validate: {
      matchingTypes() {
        if (this.value_type === "BOOLEAN" && (this.value !== true || this.value !== false)) {
          throw new Error("value is not matching the type");
        }
      },
    },
  }
);

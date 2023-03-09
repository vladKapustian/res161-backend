import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";

export interface IAttribute {
  id: number;
  name: string;
  value_type: string | boolean;
  value: (string | number | boolean)[];
}

interface AttributeAttributes extends Optional<IAttribute, "id"> {}
interface AttributeInstance
  extends Model<IAttribute, AttributeAttributes>,
    IAttribute {}

export const Attribute = sequelize.define<AttributeInstance>("Attribute", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value_type: {
    type: DataTypes.ENUM("string", "number", "boolean"),
    allowNull: false,
  },
  value: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

import { DataTypes, Model, Optional } from "sequelize";
import { EnumType } from "typescript";
import sequelize from "..";

interface IAdmin {
  id: number;
  login: string;
  password: string;
}

interface AdminAttributes extends Optional<IAdmin, "id"> {}
interface AdminInstance extends Model<IAdmin, AdminAttributes> {}

export const Admin = sequelize.define<AdminInstance>("Admin", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      msg: "Логин должен быть валидным адресом электронной почты",
    },
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      is: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
      msg: "Извините, пароль должен содержать минимум 8 символов, одну букву и одно число",
    },
  },
});

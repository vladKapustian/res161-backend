import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";

export interface IPartnershipRequest {
  id: number;
  name: string;
  company?: string;
  email: string;
  phoneNumber: string;
  message: string;
  files: FormData;
}

interface FormAttributes extends Optional<IPartnershipRequest, "id"> {}
interface FormInstance extends Model<IPartnershipRequest, FormAttributes> {}

export const PartnershipRequest = sequelize.define<FormInstance>("PartnershipRequest", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5,
      max: 50,
      msg: "Поле 'Имя' должно содержать от 5 до 50 символов",
    },
  },
  company: {
    type: DataTypes.STRING,
    validate: {
      max: 50,
      msg: "Поле 'Компания' должно содержать не более 50 символов",
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    validate: {
      is: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      msg: "Номер телефона невалиден",
    },
  },
  message: {
    type: DataTypes.TEXT,
    validate: {
      max: 500,
      msg: "Поле 'сообщение' должно содержать не более 500 символов",
    },
  },
  files: {
    type: DataTypes.STRING,
    validate: { isUrl: true },
  },
});

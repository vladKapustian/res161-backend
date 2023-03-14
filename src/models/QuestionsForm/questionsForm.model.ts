import sequelize from "..";
import { DataTypes, Model, Optional } from "sequelize";

export interface IQuestionsForm {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  message: string;
}

interface FormAttributes extends Optional<IQuestionsForm, "id"> {}
interface FormInstance extends Model<IQuestionsForm, FormAttributes> {}

export const QuestionsForm = sequelize.define<FormInstance>("Form", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { max: 40, msg: "Поле 'Имя' невалидно" },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Адрес электронной почты невалиден",
      },
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      msg: "Номер телефона невалиден",
    },
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 200,
      msg: "Сообщение должно содержать 200 символов или меньше",
    },
  },
});

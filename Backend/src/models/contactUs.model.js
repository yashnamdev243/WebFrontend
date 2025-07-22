import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const MailData = sequelize.define("MailData", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipientEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  messageBody: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

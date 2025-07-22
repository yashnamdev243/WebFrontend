import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Blog = sequelize.define("Blog", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  post_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  banner_photo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  images: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: true,
  },
});

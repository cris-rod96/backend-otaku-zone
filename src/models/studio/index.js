import { DataTypes } from "sequelize";
import { ENUMS } from "../../config/index.js";

export const StudioModel = (sequelize) => {
  sequelize.define(
    "Studio",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      location: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ENUMS.countries,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isClosed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

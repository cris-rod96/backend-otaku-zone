import { DataTypes } from "sequelize";
import { ENUMS } from "../../config/index.js";

export const AuthorModel = (sequelize) => {
  sequelize.define(
    "Author",
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
      origin: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ENUMS.countries,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 18,
          max: 90,
        },
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isDead: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

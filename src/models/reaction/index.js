import { DataTypes } from "sequelize";
import { ENUMS } from "../../config/index.js";

export const ReactionModel = (sequelize) => {
  sequelize.define(
    "Reaction",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      reaction_type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ENUMS.reactions,
      },
      reaction_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      targetType: {
        type: DataTypes.ENUM("Comment", "Reply"),
        allowNull: false,
      },

      targetID: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

import { DataTypes } from "sequelize";

export const ReplyModel = (sequelize) => {
  sequelize.define(
    "Reply",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      reply_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reply_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      // Foreign Keys
      CommentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Comments",
          key: "id",
        },
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

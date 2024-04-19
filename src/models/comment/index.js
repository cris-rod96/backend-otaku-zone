import { DataTypes } from "sequelize";

export const CommentModel = (sequelize) => {
  sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      // Foreign Keys
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      AnimeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Animes",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

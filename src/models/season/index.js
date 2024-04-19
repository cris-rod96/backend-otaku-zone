import { DataTypes } from "sequelize";
import { ENUMS } from "../../config/index.js";

export const SeasonModel = (sequelize) => {
  sequelize.define(
    "Season",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      season_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      season_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      season_overview: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year_published: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      num_chapters: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ENUMS.status,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      // Foreign Keys

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

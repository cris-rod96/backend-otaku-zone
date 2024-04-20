import { DataTypes } from "sequelize";
import { ENUMS } from "../../config/index.js";

export const AnimeModel = (sequelize) => {
  sequelize.define(
    "Anime",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      original_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      common_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      overview: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      score_avg: {
        type: DataTypes.FLOAT,
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      type: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ENUMS.types,
      },
      genres: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          isValidGenrer(value) {
            if (!Array.isArray(value) || !value.length) {
              throw new Error("Especifica uno o más géneros");
            }

            const genrerFound = value.some((genrer) =>
              ENUMS.genres.includes(genrer)
            );

            if (!genrerFound) throw new Error("Género no válido");
          },
        },
      },
      release_year: {
        type: DataTypes.STRING,
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

      //   Foreign Keys
      AuthorId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Authors",
          key: "id",
        },
      },
      StudioId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Studios",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};

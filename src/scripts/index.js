import { Author, Studio, Anime, Season, User } from "../database/index.js";
import {
  authors,
  studios,
  animes,
  seasons,
  users,
} from "../config/data/index.js";

export const dbLoader = async (req, res) => {
  try {
    const authorsDB = await Author.findAll();
    const studiosDB = await Studio.findAll();
    const animesDB = await Anime.findAll();
    const seasonsDB = await Season.findAll();
    const usersDB = await User.findAll();
    if (authorsDB.length < authors.length) {
      await Author.bulkCreate(authors);
    }

    if (studiosDB.length < studios.length) {
      await Studio.bulkCreate(studios);
    }

    if (animesDB.length < animes.length) {
      for (let anime of animes) {
        const author = await Author.findOne({
          where: { name: anime.name_author },
        });
        const studio = await Studio.findOne({
          where: { name: anime.studio_name },
        });
        if (!author || !studio) continue;
        const newAnime = {
          original_name: anime.original_name,
          common_name: anime.common_name,
          poster: anime.poster,
          type: anime.type,
          genres: anime.genres,
          status: anime.status,
          overview: anime.description,
          release_year: anime.release_year,
          AuthorId: author.id,
          StudioId: studio.id,
        };
        await Anime.create(newAnime);
      }
    }

    if (usersDB.length < users.length) {
      await User.bulkCreate(users);
    }
  } catch (error) {
    console.log(error);
  }
};

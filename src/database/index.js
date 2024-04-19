import { Sequelize } from "sequelize";
import {
  AnimeModel,
  AuthorModel,
  CommentModel,
  ReactionModel,
  ReplyModel,
  SeasonModel,
  StudioModel,
  UserModel,
} from "../models/index.js";

import { POSTGRES_URI } from "../config/index.js";

const sequelize = new Sequelize(POSTGRES_URI, {
  logging: false,
  native: false,
});

AnimeModel(sequelize);
AuthorModel(sequelize);
CommentModel(sequelize);
ReactionModel(sequelize);
ReplyModel(sequelize);
SeasonModel(sequelize);
StudioModel(sequelize);
UserModel(sequelize);

// Models
const { Anime, Author, Comment, Reaction, Reply, Season, Studio, User } =
  sequelize.models;

Author.hasMany(Anime);
Anime.belongsTo(Author);

Studio.hasMany(Anime);
Anime.belongsTo(Studio);

Anime.hasMany(Season);
Season.belongsTo(Anime);

User.hasMany(Comment);
Comment.belongsTo(User);

Comment.hasMany(Reply);
Reply.belongsTo(Comment);

Reaction.belongsTo(Comment, {
  foreignKey: "targetID",
  constraints: false,
  scope: { targetType: "Comment" },
});
Reaction.belongsTo(Reply, {
  foreignKey: "targetID",
  constraints: false,
  scope: { targetType: "Reply" },
});

export {
  sequelize,
  Anime,
  Author,
  Comment,
  Reaction,
  Reply,
  Season,
  Studio,
  User,
};

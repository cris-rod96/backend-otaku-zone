import { Sequelize } from "sequelize";
import { POSTGRES_URI } from "../config/index.js";

const sequelize = new Sequelize(POSTGRES_URI);

export { sequelize };

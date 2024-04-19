import { config } from "dotenv";
config();
export const { HOST_PORT, MONGO_URI } = process.env;

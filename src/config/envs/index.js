import { config } from "dotenv";
config();
export const { HOST_PORT, POSTGRES_URI, SECRET_KEY } = process.env;

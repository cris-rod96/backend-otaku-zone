import { config } from "dotenv";
config();
export const { HOST_PORT, POSTGRES_URI, ENUMS } = process.env;

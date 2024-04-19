import mongoose from "mongoose";
import { MONGO_URI } from "../config/index.js";
const { connect, connection } = mongoose;

const connectionInstance = {
  isConnected: false,
};
export const connectDB = async () => {
  if (connectionInstance.isConnected) return;

  try {
    const conn = await connect(MONGO_URI);
    connectionInstance.isConnected = conn.connections[0].readyState;
  } catch (error) {
    throw new Error("Error en la conexión: ", error.message);
  }
};

connection.on("connected", () => {
  console.log("Base de datos conectada");
});

import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

// Routes Middleware
server.use("/api/v1", routes);

export default server;

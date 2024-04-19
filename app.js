import { HOST_PORT } from "./src/config/index.js";
import { connectDB } from "./src/database/index.js";
import server from "./src/server.js";

connectDB()
  .then(() => {
    server.listen(HOST_PORT, () => {
      console.log(`Server listening in port: ${HOST_PORT}`);
    });
  })
  .catch(console.log);

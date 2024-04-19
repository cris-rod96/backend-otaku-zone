import { HOST_PORT } from "./src/config/index.js";
import server from "./src/server.js";

server.listen(HOST_PORT, () => {
  console.log(`Server listening in port: ${HOST_PORT}`);
});

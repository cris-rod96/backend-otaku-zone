import { HOST_PORT } from "./src/config/index.js";
import { sequelize } from "./src/database/index.js";
import server from "./src/server.js";
sequelize
  .sync({ logging: false, force: false })
  .then(() => {
    server.listen(HOST_PORT, () => {
      console.log(`Server listening in port: ${HOST_PORT}`);
    });
    console.log("Base de datos conectada");
  })
  .catch(console.log);

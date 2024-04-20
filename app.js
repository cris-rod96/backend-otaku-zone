import { HOST_PORT } from "./src/config/index.js";
import { sequelize } from "./src/database/index.js";
import { dbLoader } from "./src/scripts/index.js";
import server from "./src/server.js";
sequelize
  .sync({ logging: false, force: true })
  .then(() => {
    server.listen(HOST_PORT, () => {
      console.log(`Server listening in port: ${HOST_PORT}`);
    });
    console.log("Base de datos conectada");
    dbLoader();
  })
  .catch(console.log);

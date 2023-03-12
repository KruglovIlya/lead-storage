import { Sequelize } from "sequelize";

// const db_path = process.env.DB_PATH;


const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

// const database = new Sequelize({ dialect: "sqlite", storage: db_path });

try {
  database
    .authenticate()
    .then(() => console.log("Connection has been established successfully."));
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

database
  .sync()
  .then(function () {
    console.log("CONNECTION ESTABLISHED SUCCESSFULLY");
  })
  .catch(function () {
    console.log("CONNECTION REFUSED");
  });

export default database;

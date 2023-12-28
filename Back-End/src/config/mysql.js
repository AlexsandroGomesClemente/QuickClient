import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  null,
  {
    dialect: "mysql",
    port: 3306,
  }
);

export default sequelize;

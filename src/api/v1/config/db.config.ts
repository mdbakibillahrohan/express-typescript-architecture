require("dotenv").config();
import mssql from "mssql";
import IDbConfig from "../interfaces/db/IDbConfig";
const productionManagementDB: IDbConfig = {
  user: process.env.DB1_USER,
  password: process.env.DB1_PASSWORD,
  database: process.env.DB1_NAME,
  server: "202.22.203.92",
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
    encrypt: false,
  },
};
const dbConfig = { productionManagementDB };
export const dbconnect = (dbConfig: IDbConfig, callback: any) => {
  const sql = mssql;
  sql.connect(dbConfig, (err) => {
    callback(err, sql);
  });
};

export default dbConfig;

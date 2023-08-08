import * as mssql from "mssql";
import IDbConfig from "../interfaces/db/IDbConfig";

const getData = async (dbConfig: IDbConfig, query: any) => {};

const insertData = async (dbConfig: any, query: string) => {
  const pool = new mssql.ConnectionPool(dbConfig);
  const transaction = new mssql.Transaction(pool);
  transaction.begin((err) => {
    const request = new mssql.Request(transaction);
    request.query(query, (err, result) => {});
  });
};

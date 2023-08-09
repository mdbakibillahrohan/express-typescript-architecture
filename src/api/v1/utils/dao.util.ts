import mssql from "mssql";
import IDbConfig from "../interfaces/db/IDbConfig";

/**
 * Take the DataBase configuration and query as parameter and return data
 * @param dbConfig
 * @param query
 * @returns
 */
export const getData = async (dbConfig: IDbConfig, query: string) => {
  await mssql.connect(dbConfig);
  const data = await mssql.query(query);
  return data.recordset;
};

export const insertData = async (dbConfig: any, query: string) => {};

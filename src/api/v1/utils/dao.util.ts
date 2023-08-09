import mssql from "mssql";
import IDbConfig from "../interfaces/db/IDbConfig";

/**
 * Take the DataBase configuration and query as parameter and return data
 * @param dbConfig
 * @param query
 * @returns
 */
export const getData = async (dbConfig: IDbConfig, query: string) => {
  const pool = new mssql.ConnectionPool(dbConfig);
  try {
    await pool.connect();
    const request = pool.request();
    const result = await request.query(query);
    if (result !== null) {
      if (result.rowsAffected[0] > 0) {
        return result.recordset;
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    pool.close();
  }
};

export const insertData = async (dbConfig: any, query: string) => {};

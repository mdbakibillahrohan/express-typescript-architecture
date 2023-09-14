import mssql from "mssql";
import IDbConfig from "../interfaces/db/IDbConfig";
import { IQueryParameter } from "../interfaces/db/IQueryParameter";

/**
 * Take the Database configuration and query as parameter and return data
 * @param dbConfig
 * @param query
 * @param parameter
 * @returns
 */

export const getData = async (
  dbConfig: IDbConfig,
  query: string,
  parameter: IQueryParameter[]
) => {
  const pool = new mssql.ConnectionPool(dbConfig);
  try {
    await pool.connect();
    const request = pool.request();
    parameter.forEach((element) => {
      request.input(element.name, element.value);
    });
    const result = await request.query(query);
    if (result !== null) {
      if (result.rowsAffected[0] > 0) {
        return result.recordset;
      }
    }
  } catch (error) {
    console.dir(error);
  } finally {
    pool.close();
  }
};

export const insertData = async (
  dbConfig: any,
  query: string,
  parameter: IQueryParameter[]
) => {
  const pool = new mssql.ConnectionPool(dbConfig);
  try {
    const request = pool.request();
    parameter.forEach((element) => {
      request.input(element.name, element.value);
    });
    const result = request.query(query);
    if (result !== null) {
      if ((await result).rowsAffected[0] > 0) {
        return (await result).recordset;
      }
    }
  } catch (error) {
    console.dir(error);
  } finally {
    pool.close();
  }
};

export const executeStoreProcedure = async (
  dbConfig: any,
  procedureName: string,
  parameter: IQueryParameter[]
) => {
  const pool = new mssql.ConnectionPool(dbConfig);
  try {
    const request = pool.request();
    parameter.forEach((element) => {
      request.input(element.name, element.value);
    });
    const result = request.execute(procedureName);
    if (result !== null) {
      if ((await result).rowsAffected[0] > 0) {
        return (await result).recordset;
      }
    }
  } catch (error) {
    console.dir(error);
  } finally {
    pool.close();
  }
};

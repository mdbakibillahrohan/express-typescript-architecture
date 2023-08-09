export default interface IDbConfig {
  user: string | undefined;
  password: string | undefined;
  database: string | undefined;
  server: string;
  options: {
    trustServerCertificate: boolean;
    encrypt: boolean;
  };
}

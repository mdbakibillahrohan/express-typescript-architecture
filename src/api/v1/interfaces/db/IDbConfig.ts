export default interface IDbConfig {
  user: string;
  password: string;
  database: string;
  server: string;
  options: {
    trustServerCertificate: boolean; // change to true for local dev / self-signed certs
  };
}

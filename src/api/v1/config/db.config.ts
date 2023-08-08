const productionManagementDB = {
  user: "sa",
  password: "w23eW@#E",
  database: "ProductionManagementLive",
  server: "202.22.203.92",
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};
const dbConfig = { productionManagementDB };
export default dbConfig;

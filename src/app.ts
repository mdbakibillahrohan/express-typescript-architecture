import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";
import * as middlewares from "../src/api/v1/middleware/middlewares";
import api from "./api/api";
import dbConfig, { dbconnect } from "./api/v1/config/db.config";
require("dotenv").config();
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Employee Efficiency Calculate Application",
      version: "0.1.0",
      description: "The purpose of this app is to make ",
      contact: {
        name: "Ha-Meem Group",
        email: "shuvo.it@hameemgroup.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: [`${__dirname}/api/**/*.ts`],
};
const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
dbconnect(dbConfig.productionManagementDB, (err: any) => {
  if (err) throw err;
  console.log("Successfully connected to database");
});
dbconnect(dbConfig.AsibTest, (err: any) => {
  if (err) throw err;
  console.log("Successfully connected to database2");
});

export default app;

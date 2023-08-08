import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";
import * as middlewares from "../src/api/v1/middleware/middlewares";
import api from "./api/api";

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
      title: "Demo Application",
      version: "0.1.0",
      description: "This is a demo app",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
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

export default app;

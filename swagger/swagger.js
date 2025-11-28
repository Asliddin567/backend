const swaggerJsDoc = require("swagger-jsdoc");
const sawggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const sawggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", sawggerUi.serve, sawggerUi.setup(sawggerSpec));
};

module.exports = setupSwagger;
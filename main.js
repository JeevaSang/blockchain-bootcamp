var express = require("express");
var app = express();
var http = require("http");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
var server = http.createServer(app);


// ============= start server =======================
server.listen(12340, function() {
  console.log(`Please open web browser to access ：http://localhost:12340/`);
});


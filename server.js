// JavaScript source code
// Server.js
/*
var connect = require('connect');

connect.createServer(
  connect.static('../')

).listen(5000);
*/

var
  http = require('http'),
  express = require('express'),
  routes = require('./routes'),

  app = express(),
  router = express.Router(),
  server = http.createServer(app);

// Server Configurations
  app.use(express.static('./app'));
  app.use(express.static('./'));
  app.use(router);

  routes.configRoutes(router, server);

  server.listen(5000);

  console.log(
   'Express server listening on port %d in %s mode',
    server.address().port, app.settings.env
  );
const app = require("./backend/app");
const debug = require("debug")("node-angular");

const http = require("http");

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);















//import package (http package) provided by node.js, http package is default node.js package
//"require" is node.js's import syntex
// const http = require('http');
//import app.js (express app)
// const app = require('./backend/app');
//we can use http package for creating new server
//create server
// arguments - request and response objects
// store this server in server constatnt variable
// const server = http.createServer((req, res) => {
// end is write for response
// res.end('This is my first response');
// });
//port number is 3000 (or deafult port number provided by hosting provider), hosting provider will give port you wanna host at during production
//access to environment variable by using process.env.PORT
// const port =  process.env.PORT || 3000;
//configuration for my express environment
// app.set('port', port)
// const server = http.createServer(app);

//port number is 3000 (or deafult port number provided by hosting provider), hosting provider will give port you wanna host at during production
//access to environment variable by using process.env.PORT
// server.listen(port);


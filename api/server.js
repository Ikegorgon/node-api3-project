const express = require('express');
const UsersRouter = require('./users/users-router');
const Middleware = require('./middleware/middleware');
const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json());
// global middlewares and the user's router need to be connected here
server.use(Middleware.logger)
server.use('/api/users', UsersRouter);
server.get("*", (req, res) => {
  res.status(404).json({ message: "Page does not exist"});
});

module.exports = server;

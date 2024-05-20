"use strict";

const express = require("express");
const cors = require("cors");
const roomsRouter = require("./routes/rooms.router");
const expenseRouter = require("./routes/expense.router");

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/rooms", roomsRouter);
  app.use("/expenses", expenseRouter);

  return app;
}

module.exports = {
  createServer,
};

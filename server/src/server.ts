import express from "express";
import { config } from "dotenv";

import setupMiddlewares from "./middlewares";
import setupResources from "./resources";

const server = express();

config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

setupMiddlewares(server);
setupResources(server);

export default server;

import express from "express";
import setupMiddlewares from "./middlewares";
import setupResources from "./resources";

const server = express();

setupMiddlewares(server);
setupResources(server);

export default server;

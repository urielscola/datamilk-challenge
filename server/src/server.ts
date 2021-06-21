import express from "express";
import setupMiddlewares from "./middlewares";

const server = express();

setupMiddlewares(server);

export default server;

import express from "express";
import cors from "cors";
import config from "./config/defaults.js";
import logger from "./src/utils/logger.js";
import { connectDB } from "./src/database/mongoose.js";

import usersRoute from "./src/routes/users.route.js";

const { port, environment, project } = config;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(port, async () => {
  logger.info("connsecting to database ...");
  await connectDB();
  logger.info(`server is listening on port ${port}`);
});

app.get("/", (req, res) => {
  logger.info("get request from base");
  return res.status(200).json({
    message: "API v1  is running",
    env: environment,
    project,
  });
});

app.use("/accounts", usersRoute);

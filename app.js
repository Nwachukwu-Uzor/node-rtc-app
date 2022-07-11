import express from "express";
import cors from "cors";
import config from "./config/defaults.js";
import logger from "./src/utils/logger.js";
import { connectDB } from "./src/database/mongoose.js";

const { port, environment, project } = config;
const app = express();

app.use(express.json());
app.use(cors);

// app.listen(port, async () => {
//   logger.info("connecting to database ...");
//   await connectDB();
//   logger.info(`server is listening on port ${port}`);
// });

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

app.get("/", (req, res) => {
  logger.info("get request from base");
  return res.status(200).json({
    message: "API v1  is running",
    env: environment,
    project,
  });
});

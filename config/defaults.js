import dotenv from "dotenv";

dotenv.config();

const config = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT || 5000,
  project: process.env.PROJECT,
};

export default config;

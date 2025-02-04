import express, { Request, Response } from "express";
import router from "./router/router";
import dotenv from "dotenv";

const myEnv = dotenv.config(); // Load .env file

// Create a new express application instance
export const app = express();

// Set the network port
const port = process.env.PORT || 3000;

app.use(router);

// Start the Express server
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});

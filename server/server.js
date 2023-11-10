//import required dependencies
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//db imports
import connectDB from "./config/db/connect.js";
import { DB_NAME } from "./utils/constants.js";

//router imports
import { userRouter } from "./routes/api/userRoute.js";
import { eraRouter } from "./routes/api/EraRoute.js";

const app = express();
const port = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

//middleware
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

//router routes
app.use("/api/v1/userauth", userRouter);
app.use("/api/v1/main", eraRouter);

//start server
const start = async () => {
  await connectDB(`${MONGO_URI}/${DB_NAME}`);
  app.listen(port, () => console.log("SERVER is listening on port: " + port));
};
start();

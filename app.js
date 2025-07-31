import express from "express";
const app = express();
export default app;

import usersRouter from "#api/users";
import trailersRouter from "#api/trailers"
import estimateRouter from "#api/estimates"
import industryRouter from "#api/industries"
import vendorRouter from "#api/vendors"
import getUserFromToken from "#middleware/getUserFromToken";
import handlePostgresErrors from "#middleware/handlePostgresErrors";
import cors from "cors";
import morgan from "morgan";

app.use(cors({ origin: process.env.CORS_ORIGIN ?? /localhost/ }));

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(getUserFromToken);

app.get("/", (req, res) => res.send("Welcome to the Trailer Bible"));

app.use("/users", usersRouter);
app.use("/trailers", trailersRouter);
app.use("/estimates", estimateRouter);
app.use("/industries", industryRouter);
app.use("/vendors", vendorRouter);

app.use(handlePostgresErrors);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});

import express from "express";
import transformRoute from "./routes/transform.route.js";

const app = express();
app.use(express.json());

app.use("/api", transformRoute);

export default app;

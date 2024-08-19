import express from "express";
import eventsRoutes from "./routes/events.js";

const app = express();
app.use(express.json());
app.use("/events", eventsRoutes)

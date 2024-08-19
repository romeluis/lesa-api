import express from "express";
import eventsRoutes from "./routes/events.js";

const PORT = process.env.PORT || 8800;

//Set up API and routes
const app = express();
app.use(express.json());
app.use("/events", eventsRoutes)

//Message for unspecified access
app.get("/", (req, res) => {
    return res.json("Welcome to the LESA API");
});

//Listen for requests
app.listen(PORT, () => {
    console.log("Connected...");
});

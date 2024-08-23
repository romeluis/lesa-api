import express from "express";
import eventsRoutes from "./routes/events.js";
import assetsRoutes from "./routes/assets.js";
import jobsRoutes from "./routes/jobs.js";

const PORT = process.env.PORT || 5001;

//Set up API and routes
const app = express();
app.use(express.json());
app.use("/events", eventsRoutes);
app.use("/assets", assetsRoutes);
app.use("/jobs", jobsRoutes);

//Message for unspecified access
app.get("/", (req, res) => {
    return res.json("Welcome to the LESA API");
});

//Listen for requests
app.listen(PORT, (error) => {
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else {
        console.log("Error occurred, server can't start", error);
    }
});

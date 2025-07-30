import express from "express";
import cors from "cors";
import eventsRoutes from "./routes/events.js";
import assetsRoutes from "./routes/assets.js";
import jobsRoutes from "./routes/jobs.js";
import executivesRoutes from "./routes/executives.js";
import resourcesRoutes from "./routes/resources.js";
import submitRoutes from "./routes/submit.js";

const PORT = process.env.PORT || 5001;

//Set up API and routes
const app = express();

// CORS configuration
app.use(cors({
    origin: "https://lesauoft.com", // Allow all origins in development. For production, specify your frontend domain
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use("/events", eventsRoutes);
app.use("/assets", assetsRoutes);
app.use("/jobs", jobsRoutes);
app.use("/executives", executivesRoutes);
app.use("/resources", resourcesRoutes);
app.use("/submit", submitRoutes);

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

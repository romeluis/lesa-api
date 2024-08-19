import express from "express";
import eventsRoutes from "./routes/events.js";

const PORT = process.env.PORT || 5000;

//Set up API and routes
const app = express();
app.use(express.json());
app.use("/events", eventsRoutes)

//Message for unspecified access
app.get("/", (req, res) => {
    return res.json("Welcome to the LESA API");
});

//Listen for requests
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else {
        console.log("Error occurred, server can't start", error);
    }
});

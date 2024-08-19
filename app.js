import { getEvents, getEvent } from "./controllers.js";
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const router = express.Router();
app.use(cors());

const database = mysql.createConnection({
    host: "server329.web-hosting.com",
    port: "3306",
    database: "lesaueqw_lesadb",
    user: "lesaueqw_admin",
    password: "Lu!sB3atriz"
});

router.get("/events", getEvents);
router.get("/events/:id", getEvent);

export default database;

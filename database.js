import mysql from "mysql";

export const database = mysql.createConnection({
    host: "server329.web-hosting.com",
    port: "3306",
    database: "lesaueqw_lesadb",
    user: "lesaueqw_admin",
    password: "Lu!sB3atriz"
});
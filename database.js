import mysql from "mysql";

const SQL_USER = process.env.SQL_USER;
const SQL_PASS = process.env.SQL_PASS;

export const database = mysql.createConnection({
    host: "server329.web-hosting.com",
    port: "3306",
    database: "lesaueqw_lesadb",
    user: SQL_USER,
    password: SQL_PASS
});
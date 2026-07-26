import mysql from "mysql";

const SQL_HOST = process.env.SQL_HOST || "server320.web-hosting.com";
const SQL_PORT = process.env.SQL_PORT || "3306";
const SQL_DATABASE = process.env.SQL_DATABASE || "lesaueqw_lesadb";
const SQL_USER = process.env.SQL_USER;
const SQL_PASS = process.env.SQL_PASS;

//Pool instead of a single connection: a lone connection that hits a fatal error
//(bad host, or shared hosting closing it when idle) stays fatally errored for
//the life of the process, so every later query fails with
//PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR. The pool discards dead connections and
//opens fresh ones on the next query.
export const database = mysql.createPool({
    host: SQL_HOST,
    port: SQL_PORT,
    database: SQL_DATABASE,
    charset : 'utf8mb4',
    user: SQL_USER,
    password: SQL_PASS,
    connectionLimit: 5,
    waitForConnections: true,
    queueLimit: 0
});

//Without this, a dropped idle connection emits an unhandled 'error' event
//and takes the process down
database.on("error", (error) => {
    console.error("MySQL pool error:", error.code, error.message);
});

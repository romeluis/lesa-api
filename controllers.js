import database from "./server.js";

export const getEvents = (request, response) => {
    const query = request.query.type ? "SELECT * FROM events WHERE type=?" : "SELECT * FROM events";

    database.query(query, [request.query.type], (error, data) => {
        if (error) return response.send(error);
        return response.status(200).json(data);
    });
}

export const getEvent = (request, response) => {
    
}
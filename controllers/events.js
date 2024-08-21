import {database} from "../database.js";

export const getEvents = (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');

    const query = request.query.type ? "SELECT * FROM events WHERE type=?" : "SELECT * FROM events";

    database.query(query, [request.query.type], (error, data) => {
        if (error) return response.send(error);
        return response.status(200).json(data);
    });
}

export const getEvent = (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');

    const query = "SELECT * FROM events WHERE id=?";

    database.query(query, [request.params.id], (error, data) => {
        if (error) return response.send(error);
        return response.status(200).json(data);
    });
}
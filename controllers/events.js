import {database} from "../database.js";

export const getEvents = (request, response) => {

    const query = request.query.type ? "SELECT * FROM events WHERE type=?" : (request.query.month ? "SELECT * FROM events WHERE month=?" : "SELECT * FROM events");
    if (request.query.type) {
        database.query(query, [request.query.type], (error, data) => {
            if (error) return response.send(error);
            return response.status(200).json(data);
        });
    } else if (request.query.month) {
        database.query(query, [request.query.month], (error, data) => {
            if (error) return response.send(error);
            return response.status(200).json(data);
        });
    } else {
        database.query(query, [], (error, data) => {
            if (error) return response.send(error);
            return response.status(200).json(data);
        });
    }
}

export const getEvent = (request, response) => {

    const query = "SELECT * FROM events WHERE id=?";

    database.query(query, [request.params.id], (error, data) => {
        if (error) return response.send(error);
        return response.status(200).json(data);
    });
}
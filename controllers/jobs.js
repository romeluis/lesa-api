import {database} from "../database.js";

export const getJobs = (request, response) => {

    const query = "SELECT * FROM executive_positions";

    database.query(query, [], (error, data) => {
        if (error) return response.send(error);
        return response.status(200).json(data);
    });
}

export const getJob = (request, response) => {

    const query = "SELECT * FROM executive_positions WHERE id=?";

    database.query(query, [request.params.id], (error, data) => {
        if (error) return response.send(error);
        return response.status(200).json(data);
    });
}